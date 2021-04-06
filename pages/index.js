import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

import styles from "../styles/Markdown.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Daniel Medina</title>
      </Head>
      <Layout>
        <h1 className={styles.h1}>Welcome to my Next.js project</h1>
        <hr />
        <p>It is a very good looking website to test Next.js</p>
      </Layout>
    </>
  );
}
