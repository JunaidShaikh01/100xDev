import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutPage({ logout, token }) {
  const navigate = useNavigate();
  console.log("Logout", logout);
  console.log("token", token);
  useEffect(() => {
    localStorage.clear();
    navigate("/");
  }, [logout]);
  console.log("Token after useEffect", token);
  return;
}
