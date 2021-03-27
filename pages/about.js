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
          I'm a web developer from Mexico. I like to work the most with
          javascript. I am really passionate about my coding projcets. I started
          back in January of 2020.
        </p>
        <p>
          Hello, my name is Daniel Medina and I am a full stack web developer. I
          work the most with JavaScript, primarily with Angular and NodeJs. I
          started my career in web development on January of 2020 before the
          coronavirus pandemic. The pandemic gave a lot of time to invest in
          learning technologies that would allow me to create a lot of content
          and digital media.
        </p>
        <p>
          I am a web developer from Mexico. I love programming and creating
          things. My JavaScript framework of choice is Angular. I started my
          journey in web development in January of 2020. I started learning
          HTML. After that I went and learned CSS and SASS. I also learned
          JavaScript. Now I am currently working on Angular
        </p>
      </Layout>
    </>
  );
}
