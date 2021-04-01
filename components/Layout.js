import React from "react";
import Navbar from './Navbar';
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <img
          src={`https://source.unsplash.com/collection/94997000`}
          className={styles.cover}
          alt="wallpaper"
        />
        <div className={styles.text}>{children}</div>
      </div>
    </div>
  );
}
