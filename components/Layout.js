import React from 'react'
import styles from '../styles/Layout.module.css';
import Link from 'next/link';

export default function Layout({ children }) {

    const images = [
        'https://cdn.danielmedina.dev/photo1.jpg',
        'https://cdn.danielmedina.dev/photo2.jpg',
        'https://cdn.danielmedina.dev/photo3.jpg',
        'https://cdn.danielmedina.dev/photo4.jpg',
    ]

    return (
        <div className={styles.container}>
            <Link href="/"><a className={styles.nav}>dnrm</a></Link>
            <div className={styles.content}>
                <img src={images[Math.floor(Math.random() * images.length)]} className={styles.cover} />
                <div className={styles.text}>
                    { children }
                </div>
            </div>
        </div>
    )
}
