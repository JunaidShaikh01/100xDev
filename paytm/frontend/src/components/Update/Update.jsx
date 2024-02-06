import React, { useCallback, useState } from "react";
import styles from "./Update.module.css";
import { Form } from "react-router-dom";
export default function Update() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
  });
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);
  //   const userdata = User;
  console.log("formData", formData);
  //   console.log(userdata);q
  return (
    <div className={styles.main}>
      <div className={styles.subComponent}>
        <div className={styles.signupHeader}>
          <h1>Update</h1>
          <p>Update information of your account</p>
        </div>

        <Form method="post" action="/update" className={styles.signupForm}>
          <label htmlFor="firstname">First Name</label>
          <input
            required
            type="text"
            name="firstname"
            placeholder="John"
            onChange={handleChange}
            value={formData.firstname}
          />

          <label htmlFor="lastname">Last Name</label>
          <input
            required
            type="text"
            name="lastname"
            placeholder="Deo"
            onChange={handleChange}
            value={formData.lastname}
          />

          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <button className={styles.submitBtn}>Update</button>
        </Form>
      </div>
    </div>
  );
}
