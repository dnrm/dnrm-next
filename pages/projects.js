import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

import styles from "../styles/Markdown.module.css";

export default function about() {
  return (
    <>
      <Head>
        <title>Projects | Daniel Medina</title>
      </Head>
      <Layout>
        <h1 className={styles.h1}>My Projects</h1>
        <hr />
        <p>oc</p>
      </Layout>
    </>
  );
}
