//Modules
import React from "react";
import { Link } from "react-router-dom";
//Sass
import styles from "./ProjectCard.module.scss";
//Helper Functions
import { getPercentage, convertTime } from "../../../helpers";
//Components
import CompletedIcon from "../../CompletedIcon/CompletedIcon";

const ProjectCard = props => {
    const { name, description, created_at, id, is_completed } = props.project;

    return (
        <Link to={`/projects/${id}`} className={styles.ProjectCard}>
            <div className={styles.TitleTime}>
                <h1>{name}</h1>
                <p className={styles.description}>
                    Started {convertTime(created_at)}
                </p>
            </div>

            <p className={styles.Description}>{description}</p>

            <div className={styles.TasksCompleted}>
                <h2>{getPercentage(props.tasks)}</h2>
                <CompletedIcon completed={is_completed} />
            </div>
        </Link>
    );
};

export default ProjectCard;
