import React from 'react'
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from '../components/Link';

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
                <Link href="https://twitter.com/_dnrm">https://twitter.com/_dnrm</Link>
                <Link href="https://github.com/dnrm">https://github.com/dnrm</Link>
                <Link href="https://medina.dev/">https://medina.dev</Link>
            </Layout>
        </>
    )
}
