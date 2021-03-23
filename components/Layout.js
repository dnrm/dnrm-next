import React from 'react'
import styles from '../styles/Layout.module.css';
import Link from 'next/link';

export default function Layout({ children }) {

    return (
        <div className={styles.container}>
            <Link href="/"><a className={styles.nav}>dnrm</a></Link>
            <div className={styles.content}>
                <img src={/*`https://source.unsplash.com/random?nature`*/ `/background.jpg`} className={styles.cover} />
                <div className={styles.text}>
                    { children }
                </div>
            </div>
        </div>
    )
}
