import React from 'react'
import styles from '../styles/Layout.module.css';
import Link from 'next/link';

export default function Layout({ children }) {

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link href="/"><a className={styles.nav}>dnrm</a></Link>
                <Link href="/about"><a className={styles.nav}>about</a></Link>
                <Link href="/projects"><a className={styles.nav}>projects</a></Link>
                <Link href="/contact"><a className={styles.nav}>contact</a></Link>
            </nav>
            <div className={styles.content}>
                <img src={`https://source.unsplash.com/collection/94997000`} className={styles.cover} />
                <div className={styles.text}>
                    { children }
                </div>
            </div>
        </div>
    )
}
