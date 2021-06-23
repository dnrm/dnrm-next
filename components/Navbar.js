import React from "react";
import Link from "next/link";

import styles from "../styles/Layout.module.css";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link href="/">
                    <a className={styles.nav}>dnrm</a>
                </Link>
                <Link href="/about">
                    <a className={styles.nav}>about</a>
                </Link>
                <Link href="/projects">
                    <a className={styles.nav}>projects</a>
                </Link>
                <Link href="/contact">
                    <a className={styles.nav}>contact</a>
                </Link>
                <Link href="/dashboard">
                    <a className={styles.nav}>dashboard</a>
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
