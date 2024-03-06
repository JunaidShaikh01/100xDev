"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
// import { useClient } from "@next/next/client"; // Import useClient from @next/next/client

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  //   const handleSignup = async () => {
  //     try {
  //       const response = await axios.post("/api/signup", { username, password });
  //       // Handle successful sign-up, e.g., redirect to another page
  //       console.log(response.data);
  //     } catch (error) {
  //       // Handle sign-up error, e.g., display error message to user
  //       console.error("Sign-up failed:", error);
  //     }
  //   };

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign up</div>
            </div>
            <div className="pt-2">
              <LabelledInput
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
                placeholder="harkirat@gmail.com"
              />
              <LabelledInput
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type="password"
                placeholder="123456"
              />
              <button
                onClick={async () => {
                  try {
                    const response = await axios.post(
                      "http://localhost:3000/api/user",
                      {
                        username,
                        password,
                      }
                    );
                    // Handle successful response
                    console.log("User signed up successfully:", response.data);
                    // Redirect or show success message to the user
                    router.push("/");
                  } catch (error) {
                    // Handle error
                    console.error("Sign-up failed:", error);
                    // Show error message to the user
                  }
                  setUsername(""); // Clear the username field
                  setPassword(""); // Clear the password field
                }}
                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Sign up
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
