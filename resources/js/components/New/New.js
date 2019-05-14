//Modules
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import {
    createNewProject,
    clearCreateMessage
} from "../store/actions/projectActions";
//SASS
import styles from "./New.module.scss";

const New = props => {
    //State for form-data
    const [form, updateForm] = useState({
        name: "",
        description: ""
    });

    //On Mount
    useEffect(() => {
        return () => {
            props.clearCreateMessage();
        };
    }, []);

    if (props.token) {
        return (
            <div className={styles.New}>
                <h1>New Project:</h1>
                <form
                    className={styles.NewForm}
                    onSubmit={e => {
                        e.preventDefault();
                        props.createNewProject(form);
                    }}
                >
                    <label>
                        * Title:
                        <input
                            required
                            type="text"
                            value={form.name}
                            onChange={e => {
                                updateForm({
                                    ...form,
                                    name: e.target.value
                                });
                            }}
                        />
                    </label>

                    <label>
                        * Description:
                        <textarea
                            required
                            type="text"
                            value={form.description}
                            onChange={e => {
                                updateForm({
                                    ...form,
                                    description: e.target.value
                                });
                            }}
                        />
                    </label>

                    <button className={styles.CreateBtn}>Create</button>
                </form>

                {/* Redirect to /projects or show error message */}
                {props.message.message === "success" ? (
                    <Redirect to={`/projects/${props.message.id}`} />
                ) : (
                    <p>{props.message.message}</p>
                )}
            </div>
        );
    } else {
        return <Redirect to="/home" />;
    }
};

const mapStateToProps = state => {
    return {
        message: state.project.createMessage,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNewProject: payload => {
            dispatch(createNewProject(payload));
        },
        clearCreateMessage: () => {
            dispatch(clearCreateMessage());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(New);
