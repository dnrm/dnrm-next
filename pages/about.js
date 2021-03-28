import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

import styles from "../styles/Markdown.module.css";

export default function about() {
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch("https://api.danielmedina.dev/v1/name")
      .then((response) => response.json())
      .then((response) => setName(response.name));
  }, []);

  return (
    <>
      <Head>
        <title>About | Daniel Medina</title>
      </Head>
      <Layout>
        <h1 className={styles.h1}>Hi! I'm {name ? name : "Loading..."}</h1>
        <hr />
        <p>
          I'm a web developer from <em>Mexico</em>. I like to work the most with
          <em> javascript</em>. I am really passionate about my coding projcets. I started
          back in <em>January</em> of <em>2020</em>.
        </p>
        <p>
          Hello, my name is <em>Daniel Medina</em> and I am a full stack web developer. I
          work the most with <em>JavaScript</em>, primarily with <em>Angular</em> and <em>NodeJs</em>. I
          started my career in web development on <em>January</em> of <em>2020</em> before the
          coronavirus pandemic. The pandemic gave a lot of time to invest in
          learning technologies that would allow me to create a lot of content
          and digital media.
        </p>
        <p>
          I am a web developer from <em>Mexico</em>. I love <em>programming</em> and <em>creating </em> 
          things. My <em>JavaScript</em> framework of choice is <em>Angular</em>. I started my
          journey in web development in <em>January</em> of <em>2020</em>. I started learning
          <em>HTML</em>. After that I went and learned <em>CSS</em> and <em>SASS</em>. I also learned  
          <em> JavaScript</em>. Now I am currently working on <em>Angular</em>.
        </p>
      </Layout>
    </>
  );
}
