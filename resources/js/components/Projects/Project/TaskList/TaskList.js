//Modules
import React from "react";
import uuid4 from "uuid";
//Sass
import styles from "./TaskList.module.scss";
//Redux
import { connect } from "react-redux";
import { markAsComplete, deleteTask } from "../../../store/actions/taskActions";
import { getIndividualProject } from "../../../store/actions/projectActions";

const TaskList = ({
    tasks,
    markAsComplete,
    getIndividualProject,
    deleteTask,
    id
}) => {
    return (
        <ul className={styles.TaskList}>
            {tasks &&
                tasks.map(task => {
                    return (
                        <li key={uuid4()}>
                            <input
                                type="checkbox"
                                checked={task.is_completed}
                                onChange={e => {
                                    markAsComplete(task.id);
                                    setTimeout(() => {
                                        getIndividualProject(id);
                                    }, 200);
                                }}
                            />
                            {task.title}
                            <button
                                onClick={() => {
                                    deleteTask(task.id);
                                    setTimeout(() => {
                                        getIndividualProject(id);
                                    }, 200);
                                }}
                            >
                                X
                            </button>
                        </li>
                    );
                })}
        </ul>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        getIndividualProject: id => {
            dispatch(getIndividualProject(id));
        },
        markAsComplete: id => {
            dispatch(markAsComplete(id));
        },
        deleteTask: id => {
            dispatch(deleteTask(id));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(TaskList);
