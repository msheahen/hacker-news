import styles from "./NavBar.module.css";
import React from "react";
import {Link, useLocation} from "react-router-dom";

export function NavBar({highlightActiveLink}){

    const location = useLocation();

    return (
        <div className={styles.filterRadio}>
            <Link to={'/'} className={highlightActiveLink && location.pathname === '/' ? styles.active : null}>latest</Link>
            <span> | </span>
            <Link to={'/starred'} className={highlightActiveLink && location.pathname === '/starred' ? styles.active : null}>starred</Link>
        </div>
    )
}
