//Modules
import React, { useState, useEffect } from "react";
//Sass
import styles from "./Home.module.scss";
//Components
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
//Redux
import { connect } from "react-redux";
import { grabToken, logout } from "../store/actions/authActions";

const Home = props => {
    useEffect(() => {
        props.grabToken();
    }, []);

    const [view, changeView] = useState("base");

    return (
        <div className={styles.Home}>
            <h1>
                Welcome to{" "}
                <span className={styles.Colored}>Project Manager</span>
            </h1>
            <div className={styles.Controls}>
                {/* Conditionally render controls based on auth status*/}
                {props.token ? (
                    <button onClick={props.logout}>Logout</button>
                ) : (
                    <>
                        <button
                            onClick={() => {
                                changeView("login");
                            }}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => {
                                changeView("signup");
                            }}
                        >
                            Signup
                        </button>
                    </>
                )}
            </div>

            {/* Conditionally render forms based on auth status*/}
            {!props.token && (
                <>
                    {view === "login" ? (
                        <Login />
                    ) : view === "signup" ? (
                        <Signup />
                    ) : null}
                </>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        grabToken: () => {
            dispatch(grabToken());
        },
        logout: () => {
            dispatch(logout());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
