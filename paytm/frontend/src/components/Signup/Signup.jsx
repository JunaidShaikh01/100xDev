import React from "react";
import styles from "./Signup.module.css";
export default function Signup() {
  function submitHandler(e) {}
  return (
    <div className={styles.main}>
      <div className={styles.subComponent}>
        <div className={styles.signupHeader}>
          <h1>Signup</h1>
          <p>Enter your information to create an account</p>
        </div>
        <form onSubmit={submitHandler} className={styles.signupForm}>
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" placeholder="John" />

          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" placeholder="Deo" />

          <label htmlFor="email">E-mail</label>
          <input type="mail" name="email" placeholder="johndeo@gmail.com" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button className={styles.submitBtn}>Sign Up</button>
        </form>

        <p className={styles.signupFooter}>Already have an account?</p>
      </div>
    </div>
  );
}
