import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { Link,  useNavigate } from "react-router";

import * as Yup from "yup";
export default function Signup() {
    const navigate = useNavigate()
  const initialValue = {
    name: "",
    mobileNumber: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    mobileNumber: Yup.number()
      .min(10)
      .required("Mobile number is required "),
    email: Yup.string()
      .email("Enter proper email")
      .required("Email is required "),
    password: Yup.string()
      .min(8, "Minimum password should be 8 cherecter ")
      .required("Please enter a password"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Login data:", values);
    resetForm();
    navigate("/login")
  };
  return (
    <div className=" w-full h-[100vh] flex items-center justify-center ">
      <div className="w-[40%] h-[40vh] bg-blue-100 px-[2rem]">
        <h1 className="text-center">Sigup</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field
                type="number"
                name="mobileNumber"
                placeholder="Mobile Number"
              />
              <ErrorMessage name="mobileNumber" component="div" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Signup</button>
          </Form>
        </Formik>
        <div>
          Already have an account <Link to="/login">Click here </Link>
        </div>
      </div>
    </div>
  );
}
