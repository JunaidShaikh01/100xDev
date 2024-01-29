import React from "react";
import styles from "./Header.module.css";
export default function Header({ username }) {
  console.log("Username ", username);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.nameContainer}>
        <h2>Payment App</h2>
      </div>
      <div className={styles.usersDetails}>
        <div className={styles.userNameLogo}>{username?.[0]}</div>
        <p>Hello, {username}</p>
      </div>
    </div>
  );
}
