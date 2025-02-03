import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const initialValue = {
   
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
   
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
    navigate("/home");
  };
  return (
    <div className=" w-full h-[100vh] flex items-center justify-center ">
      <div className="w-[40%] h-[40vh] bg-blue-100 px-[2rem] flex justify-center flex-col">
        <h1 className="text-center">Sigup</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Login</button>
          </Form>
        </Formik>
        <div>
          Not have an account <Link to="/">Click here </Link>
        </div>
      </div>
    </div>
  );
}
