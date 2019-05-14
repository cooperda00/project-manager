//Modules
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import { getAllProjects } from "../store/actions/projectActions";
import { getAllTasks } from "../store/actions/taskActions";
//SASS
import styles from "./Projects.module.scss";
//Components
import ProjectCard from "./ProjectCard/ProjectCard";
//Helpers
import { sortProjects } from "../../helpers";

const Projects = ({ projects, tasks, getAllProjects, getAllTasks, token }) => {
    //On Mount
    useEffect(() => {
        getAllProjects();
        getAllTasks();
    }, []);

    if (token) {
        return (
            <div className={styles.Projects}>
                {sortProjects(projects).map(project => {
                    const filteredTasks = tasks.filter(
                        task => task.project_id === project.id
                    );
                    return (
                        <ProjectCard
                            project={project}
                            key={`Project:${project.id}`}
                            tasks={filteredTasks}
                        />
                    );
                })}
            </div>
        );
    } else {
        return <Redirect to="/home" />;
    }
};

const mapStateToProps = state => {
    return {
        projects: state.project.projects,
        tasks: state.task.tasks,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllProjects: () => {
            dispatch(getAllProjects());
        },
        getAllTasks: () => {
            dispatch(getAllTasks());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Projects);
