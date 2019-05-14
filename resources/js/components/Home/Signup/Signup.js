//Modules
import React, { useState } from "react";
//Sass
import styles from "./Signup.module.scss";
//Redux
import { connect } from "react-redux";
import { signup } from "../../store/actions/authActions";

const Signup = props => {
    const [formData, updateFormData] = useState({
        name,
        email: "",
        password: "",
        c_password: ""
    });

    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (formData.password === formData.c_password) {
            if (formData.name && formData.email && formData.password) {
                props.signup(formData);
            } else {
                setErrorMessage("Please fill out all fields");
            }
        } else {
            setErrorMessage("Password does not match");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.Signup}>
            <div className={styles.FormControl}>
                <label>* Name </label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={e => {
                        updateFormData({
                            ...formData,
                            name: e.target.value
                        });
                    }}
                />
            </div>

            <div className={styles.FormControl}>
                <label>* Email: </label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={e => {
                        updateFormData({
                            ...formData,
                            email: e.target.value
                        });
                    }}
                />
            </div>

            <div className={styles.FormControl}>
                <label>* Password: </label>
                <input
                    type="password"
                    value={formData.password}
                    onChange={e => {
                        updateFormData({
                            ...formData,
                            password: e.target.value
                        });
                    }}
                />
            </div>

            <div className={styles.FormControl}>
                <label>* Password Confirm: </label>
                <input
                    type="password"
                    value={formData.c_password}
                    onChange={e => {
                        updateFormData({
                            ...formData,
                            c_password: e.target.value
                        });
                    }}
                />
            </div>

            <button className={styles.SignupBtn}>Signup</button>

            <p className={styles.Error}>{errorMessage}</p>
        </form>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        signup: formData => {
            dispatch(signup(formData));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Signup);
