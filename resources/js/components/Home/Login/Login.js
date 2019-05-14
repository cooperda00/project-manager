//Modules
import React, { useState } from "react";
//Sass
import styles from "./Login.modules.scss";
//Redux
import { connect } from "react-redux";
import { login } from "../../store/actions/authActions";

const Login = props => {
    const [formData, updateFormData] = useState({
        email: "",
        password: ""
    });

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                props.login(formData);
            }}
            className={styles.Login}
        >
            <div className={styles.FormControl}>
                <label>Email: </label>
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
                <label>Password: </label>
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

            <button className={styles.LoginBtn}>Login</button>
        </form>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        login: formData => {
            dispatch(login(formData));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Login);
