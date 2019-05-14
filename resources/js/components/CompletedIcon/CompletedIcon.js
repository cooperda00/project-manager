//Modules
import React from "react";
//Sass
import styles from "./CompletedIcon.module.scss";
//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CompletedIcon = ({ completed }) => {
    const tick = completed ? (
        <div className={styles.Tick}>
            <FontAwesomeIcon icon={faCheck} />
        </div>
    ) : (
        <div className={styles.Tick} />
    );

    return <div className={styles.CompletedIcon}>{tick}</div>;
};

export default CompletedIcon;
