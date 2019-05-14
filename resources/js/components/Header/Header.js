//Modules
import React from "react";
import { Link } from "react-router-dom";
//SASS
import styles from "./Header.module.scss";
//Components
import Nav from "./Nav/Nav";

export default function Header() {
    return (
        <div className={styles.Header}>
            <Link to="/">
                <h1>Project Manager</h1>
            </Link>
            <Nav />
        </div>
    );
}
