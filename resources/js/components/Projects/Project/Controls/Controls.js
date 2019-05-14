//Modules
import React from "react";
import { withRouter } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import {
    deleteProject,
    updateProject
} from "../../../store/actions/projectActions";
//Sass
import styles from "./Controls.module.scss";

const Controls = ({
    deleteProject,
    description,
    history,
    id,
    name,
    updateProject
}) => {
    return (
        <>
            <button
                onClick={() => {
                    const completeUpdates = {
                        name,
                        description,
                        is_complete: 1
                    };
                    updateProject(id, completeUpdates);
                }}
            >
                Complete
            </button>
            <button
                onClick={() => {
                    deleteProject(id);
                    history.push("/projects");
                }}
            >
                Delete
            </button>
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        deleteProject: id => {
            dispatch(deleteProject(id));
        },
        updateProject: (id, payload) => {
            dispatch(updateProject(id, payload));
        }
    };
};

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(Controls)
);
