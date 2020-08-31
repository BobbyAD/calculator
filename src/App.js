import React, { useState, useEffect } from "react";

import "./styles/theme.scss";

import styles from "./styles/app.module.scss";

function App() {
    const [theme, setTheme] = useState("light");
    const [transition, setTransition] = useState(false);

    const [current, setCurrent] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const lsTheme = localStorage.getItem("theme");
        if (lsTheme) {
            setTheme(lsTheme);
        }
    }, []);

    const changeTheme = (theme) => {
        setTheme(theme + " transition");
        setTransition(true);
        localStorage.setItem("theme", theme);
        setTimeout(() => {
            setTheme(theme);
            setTransition(false);
        }, 1000);
    };

    const handleClick = () => {
        if (theme === "light") {
            changeTheme("dark");
        } else {
            changeTheme("light");
        }
    };

    return (
        <div className={"App" + " " + theme}>
            <button
                className={styles.themeSwitch}
                disabled={transition}
                onClick={handleClick}
            >
                Click
            </button>
            <div className={styles.container}>
                <div className={styles.calculator}>
                    <div className={styles.screen}>{current}</div>
                    <div className={styles.clear + " " + styles.button}>C</div>
                    <div className={styles.functions}>
                        <div className={styles.button}>/</div>
                        <div className={styles.button}>x</div>
                        <div className={styles.button}>-</div>
                        <div className={styles.button}>+</div>
                        <div className={styles.equals + " " + styles.button}>=</div>
                    </div>
                    <div className={styles.numbers}>
                        <div className={styles.button}>7</div>
                        <div className={styles.button}>8</div>
                        <div className={styles.button}>9</div>
                        <div className={styles.button}>4</div>
                        <div className={styles.button}>5</div>
                        <div className={styles.button}>6</div>
                        <div className={styles.button}>1</div>
                        <div className={styles.button}>2</div>
                        <div className={styles.button}>3</div>
                        <div className={styles.zero + " " + styles.button}>0</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
