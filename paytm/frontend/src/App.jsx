import React from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}
