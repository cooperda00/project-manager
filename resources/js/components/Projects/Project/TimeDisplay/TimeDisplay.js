//Modules
import React from "react";
//Sass
import styles from "./TimeDisplay.module.scss";

import { convertTime } from "../../../../helpers";

const TimeDisplay = ({ created_at, updated_at }) => {
    return (
        <div className={styles.TimeDisplay}>
            <p>Started {convertTime(created_at)}</p>
            {/* <p>Last Updated: {updated_at}</p> */}
        </div>
    );
};

export default TimeDisplay;
