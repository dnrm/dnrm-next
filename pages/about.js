import React from 'react'
import Head from 'next/head';
import Layout from '../components/Layout';

import styles from '../styles/Markdown.module.css';

export default function about() {
    return (
        <>
            <Head>
                <title>About | Daniel Medina</title>
            </Head>
            <Layout>
                <h1 className={styles.h1}>Hi! I'm Daniel Medina</h1>
                <hr/>
                <p>I am a web developer from Mexico.</p>
            </Layout>
        </>
    )
}
