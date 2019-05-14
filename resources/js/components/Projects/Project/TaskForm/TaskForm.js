//Modules
import React, { useState } from "react";
//Redux
import { connect } from "react-redux";
import { addTask } from "../../../store/actions/taskActions";
import { getIndividualProject } from "../../../store/actions/projectActions";
//Sass
import styles from "./TaskForm.module.scss";

const TaskForm = ({ id, addTask, getIndividualProject }) => {
    //Form State
    const [task, setTask] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            project_id: id,
            title: task
        };
        //Add task via redux
        addTask(data);
        // Refresh
        setTimeout(() => {
            getIndividualProject(id);
        }, 200);
        //Clear field
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.TaskForm}>
            <label>Add task:</label>
            <input
                value={task}
                type="text"
                placeholder="Walk the dog"
                onChange={e => {
                    setTask(e.target.value);
                }}
            />

            <button>Add</button>
        </form>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        getIndividualProject: id => {
            dispatch(getIndividualProject(id));
        },
        addTask: payload => {
            dispatch(addTask(payload));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(TaskForm);
