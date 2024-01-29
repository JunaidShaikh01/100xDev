import React from "react";
import styles from "./Dashboard.module.css";
import Header from "../Header/Header";
import UsersList from "./UsersList";

export default function Dashboard({ balance, username, users }) {
  return (
    <div>
      <Header username={username} />
      <div className={styles.mainDashboard}>
        <div className={styles.userInfo}>
          <h2 className={styles.balance}>Your Balance ${balance}</h2>
          <h2 className={styles.username}>{username}</h2>
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="Search users..." />
        </div>
        <UsersList users={users} />
      </div>
    </div>
  );
}
