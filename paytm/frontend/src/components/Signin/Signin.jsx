import React from "react";
import styles from "./Signin.module.css";
export default function Signin() {
  function submitHandler(e) {}
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.subComponent}>
          <div className={styles.signinHeader}>
            <h1>Sign In</h1>
            <p>Enter your Cradention for signin</p>
          </div>
          <form onSubmit={submitHandler} className={styles.signinForm}>
            <label htmlFor="email">E-mail</label>
            <input type="mail" name="email" placeholder="johndeo@gmail.com" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <button className={styles.submitBtn}>Sign Up</button>
          </form>

          <p className={styles.signinFooter}>Don't have an account?</p>
        </div>
      </div>
    </div>
  );
}
