import React, {useEffect, useState} from "react";
import MoonIcon from '../../assets/icons/moon.svg';
import SunIcon from '../../assets/icons/sun.svg';
import styles from './DarkModeSwitch.module.css';
import {useDispatch, useSelector} from "react-redux";
import {handleDarkMode} from "./darkModeAction";

export function DarkModeSwitch(){

    // assigning useDispatch hook of redux to a variable
    const dispatch = useDispatch();

    // calling our state from the reduxer using useSelector hook of redux
    const mode = useSelector((state) => state.darkMode);

    // destructuring isdarkMode state from mode variable called using useSelector hook of redux
    const { darkMode } = mode;

    // function to be fired on onChange method to switch the mode
    const toggleDarkMode = () => {
        darkMode
            ? dispatch(handleDarkMode(false))
            : dispatch(handleDarkMode(true));
    };

    useEffect(() => {
        //changing color of body with darkmode in useEffect
        if(darkMode){
            document.body.classList.add("dark")
        }else{
            document.body.classList.remove("dark")
        }

    }, [darkMode]);

    return (
        <button className={styles.darkModeButton} onClick={toggleDarkMode}>
        {darkMode ? (
            <img src={SunIcon} alt="Sun Icon"/>
        ) : (
            <img src={MoonIcon} alt="Moon Icon"/>
        )}
        </button>
    )
}
