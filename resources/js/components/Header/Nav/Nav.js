//Modules
import React from "react";
import { NavLink } from "react-router-dom";
//Sass
import styles from "./Nav.module.scss";
//Redux
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";

const Nav = props => {
    return (
        <nav className={styles.Nav}>
            {props.token ? (
                <>
                    <NavLink
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold"
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/projects"
                        activeStyle={{
                            fontWeight: "bold"
                        }}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/new"
                        activeStyle={{
                            fontWeight: "bold"
                        }}
                    >
                        New{" "}
                    </NavLink>
                    <a
                        className={styles.Logout}
                        href="#"
                        onClick={props.logout}
                    >
                        Logout
                    </a>
                </>
            ) : (
                <>
                    <NavLink
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold"
                        }}
                    >
                        Home
                    </NavLink>
                </>
            )}
        </nav>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);
