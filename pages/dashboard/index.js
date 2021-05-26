import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Button from '../../components/Button';

import styles from "../../styles/Markdown.module.css";

const Dasshboard = () => {
    return (
        <>
            <Head>
                <title>Dashboard | Daniel Medina</title>
            </Head>
            <Layout>
                <h1 className={styles.h1}>Dashboard</h1>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam maximus arcu rutrum lacinia porttitor. Suspendisse
                    eget sodales nisi. In commodo congue euismod. Donec
                    molestie, tortor nec euismod aliquam, dolor est scelerisque
                    justo, ac tristique arcu nisi nec nibh. Donec consectetur,
                    dui eget vestibulum congue, neque ligula dapibus lectus, nec
                    luctus diam erat sed elit. Proin lobortis efficitur tortor,
                    sed consectetur ex sagittis ac. Nunc eget faucibus massa.
                    Nullam ultricies augue massa, eu molestie purus rhoncus
                    vitae.
                </p>
                <p>
                    Donec molestie et turpis at hendrerit. Cras ac auctor neque.
                    Mauris finibus elit porta neque tempus consequat. Etiam ut
                    augue molestie, porttitor metus sed, consequat justo.
                    Maecenas scelerisque viverra condimentum. Suspendisse
                    potenti. Donec luctus at felis a pulvinar. Phasellus eu
                    luctus lectus. Donec lacinia vel dolor vitae interdum. Sed
                    aliquam elit non nisl efficitur, vel dapibus arcu tincidunt.
                    Phasellus libero ex, vehicula vitae ipsum non, consequat
                    tristique ex. Sed ultrices ligula eu est maximus auctor et
                    in nunc. Ut bibendum eros in rutrum semper. Morbi elementum
                    est sed arcu suscipit, at posuere nunc interdum. Donec
                    pulvinar nunc ex, sed congue ipsum varius eu. In facilisis
                    orci ut augue tristique blandit.
                </p>
                <Button onClick={() => {
                    alert('a lol')
                }}>Click Me</Button>
            </Layout>
        </>
    );
};

export default Dasshboard;
