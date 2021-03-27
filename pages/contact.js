import React from 'react'
import Head from 'next/head';
import Layout from '../components/Layout';

import styles from '../styles/Markdown.module.css';

export default function about() {
    return (
        <>
            <Head>
                <title>Contact | Daniel Medina</title>
            </Head>
            <Layout>
                <h1 className={styles.h1}>Contact Me</h1>
                <hr/>
                <p><a href="https://twitter.com/_dnrm" className="link">https://twitter.com/_dnrm</a></p>
            </Layout>
        </>
    )
}
