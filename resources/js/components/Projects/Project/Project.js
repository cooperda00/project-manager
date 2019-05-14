//Modules
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import {
    getIndividualProject,
    clearIndividualProject,
    updateProject
} from "../../store/actions/projectActions";
//Sass
import styles from "./Project.module.scss";
//Helpers
import { getPercentage } from "../../../helpers";
//Components
import Controls from "./Controls/Controls";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";
import TimeDisplay from "./TimeDisplay/TimeDisplay";
import CompletedIcon from "../../CompletedIcon/CompletedIcon";

const Project = props => {
    const {
        id,
        name,
        description,
        is_completed,
        created_at,
        updated_at,
        tasks
    } = props.project;

    //Toggle Edit Mode (conditionally render parts of the DOM)
    const [editMode, toggleEditMode] = useState(false);

    //Form State
    const [updates, setUpdates] = useState({
        name: "",
        description: "",
        is_completed: null
    });

    //On Mount (Get project from uri id)
    useEffect(() => {
        props.getIndividualProject(props.match.params.id);
    }, []);

    //On Dismount (Clear project and edit mode)
    useEffect(() => {
        return () => {
            props.clearIndividualProject();
            toggleEditMode(false);
        };
    }, []);

    if (props.token) {
        return (
            <div className={styles.Container}>
                <div className={styles.Project}>
                    {props.project.name ? (
                        <>
                            {/* TITLE / EDIT TITLE */}
                            {editMode ? (
                                <input
                                    type="text"
                                    value={updates.name}
                                    onChange={e => {
                                        setUpdates({
                                            ...updates,
                                            name: e.target.value
                                        });
                                    }}
                                />
                            ) : (
                                <h1>{name}</h1>
                            )}

                            <TimeDisplay
                                created_at={created_at}
                                updated_at={updated_at}
                            />

                            {/* DESCRIPTION / EDIT DESCRIPTION */}
                            {editMode ? (
                                <textarea
                                    value={updates.description}
                                    onChange={e => {
                                        setUpdates({
                                            ...updates,
                                            description: e.target.value
                                        });
                                    }}
                                />
                            ) : (
                                <p className={styles.Description}>
                                    {description}
                                </p>
                            )}

                            <TaskList tasks={tasks} id={id} />

                            <TaskForm id={id} />

                            <div className={styles.Complete}>
                                <h2>Tasks {getPercentage(tasks)} Complete</h2>
                                <CompletedIcon completed={is_completed} />
                            </div>

                            <div className={styles.Controls}>
                                {!editMode && (
                                    <Controls
                                        id={id}
                                        name={name}
                                        description={description}
                                    />
                                )}

                                {!editMode ? (
                                    <button
                                        onClick={() => {
                                            //Set state to initial values
                                            setUpdates({
                                                name,
                                                description,
                                                is_completed
                                            });
                                            toggleEditMode(true);
                                        }}
                                    >
                                        Edit
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            props.updateProject(id, updates);
                                            toggleEditMode(false);
                                        }}
                                    >
                                        Save
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        );
    } else {
        return <Redirect to="/home" />;
    }
};

const mapStateToProps = state => {
    return {
        project: state.project.selectedProject,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getIndividualProject: id => {
            dispatch(getIndividualProject(id));
        },
        clearIndividualProject: () => {
            dispatch(clearIndividualProject());
        },

        updateProject: (id, payload) => {
            dispatch(updateProject(id, payload));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Project);
