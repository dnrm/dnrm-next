import React, { useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Input from "../../components/Input";

import styles from "../../styles/Markdown.module.css";
import img from "../../styles/Image.module.css";
import dashboard from "../../styles/dashboard.module.css";

const Dasshboard = () => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");

    const previewImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <>
            <Head>
                <title>Dashboard | Daniel Medina</title>
            </Head>
            <Layout>
                <h1 className={styles.h1}>Dashboard</h1>
                <hr />
                <form>
                    <div className={dashboard.profile}>
                        <img
                            src={
                                image
                                    ? image
                                    : "https://images.unsplash.com/photo-1622035536415-74582a05041c"
                            }
                            accept="image/*"
                            className={img.img}
                        />
                        <h1 className={dashboard.name}>{name ? name : "Name"}</h1>
                        <h3 className={dashboard.bio}>{bio ? bio : "Bio"}</h3>
                    </div>
                    <div className={dashboard.inputField}>
                        <p className={dashboard.label}>Add a profile image</p>
                        <input
                            type="file"
                            name="image"
                            id="file-image"
                            onChange={previewImage}
                        />
                    </div>
                    <div className={dashboard.inputField}>
                        <p className={dashboard.label}>Name</p>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name..."
                            value={name}
                            className={dashboard.input}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={dashboard.inputField}>
                        <p className={dashboard.label}>Bio</p>
                        <Input
                            type="text"
                            id="bio"
                            name="bio"
                            placeholder="Enter you bio..."
                            value={bio}
                            className={dashboard.input}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>
                </form>
                <Button
                    onClick={() => {
                        alert("not working yet lol");
                    }}
                >
                    Save
                </Button>
            </Layout>
        </>
    );
};

export default Dasshboard;
