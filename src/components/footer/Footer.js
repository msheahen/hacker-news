import styles from "./Footer.module.css"
import {NavBar} from "../navBar/NavBar";

export function Footer(){
    return (
        <div className={styles.footer}>

            <h4>Hacker News</h4>

            <div className={styles.filterContainer}>
                <NavBar highlightActiveLink={false}/>
            </div>

        </div>
    )
}
