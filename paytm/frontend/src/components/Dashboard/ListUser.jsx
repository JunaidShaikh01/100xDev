import React from "react";
import styles from "./Dashboard.module.css";
export default function ListUser({ user, index }) {
  return (
    <li key={index} className={styles.list}>
      <div className={styles.outputInfo}>
        <div className={styles.userNameLogo}>{user?.[0]}</div>
        <p className={styles.outputUsername}>{user}</p>
      </div>
      <button className={styles.btn}>Send money</button>
    </li>
  );
}
