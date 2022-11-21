import React from "react";
import styles from "./Header.module.css";
import {DarkModeSwitch} from "../darkModeSwitch/DarkModeSwitch";
import {NavBar} from "../navBar/NavBar";

export function Header() {

    return (
        <div className={styles.header}>

            <div className={styles.headerLeft}>
                <div className={styles.logo}>Y</div>
                <h1>Hacker News</h1>
                <NavBar highlightActiveLink={true} />
            </div>

            <div className={styles.headerRight}>
                <DarkModeSwitch/>
            </div>

        </div>
    )
}
