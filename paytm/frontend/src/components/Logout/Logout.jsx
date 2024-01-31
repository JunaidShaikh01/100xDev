import React, { useState } from "react";
import LogoutPage from "../../pages/LogoutPage";

export default function Logout({ onClose }) {
  const [logoutButtonClicked, setLogoutButtonClicked] = useState(0);
  const token = localStorage.getItem("token");
  console.log("Token", token);
  function logoutFunc() {
    setLogoutButtonClicked(logoutButtonClicked + 1);
  }
  console.log("logout fnction invoked", logoutButtonClicked);
  return (
    <div>
      <button onClick={onClose}>Close </button>
      <button onClick={logoutFunc}> Logout</button>
      {logoutButtonClicked > 0 && (
        <LogoutPage logout={logoutButtonClicked} token={token} />
      )}
    </div>
  );
}
