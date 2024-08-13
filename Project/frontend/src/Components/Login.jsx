import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = useNavigate();
  const handleButtonClick = (e) => {
    e.preventDefault();
    const checkAdmin = async () => {
      try {
        await axios.post("http://localhost:3000/login", {
          email: email,
          password: password,
        });
        return redirect("/ListPage");
      } catch (error) {
        console.error(error.message);
      }
    };
    checkAdmin();
  };
  return (
    <div className="bg-orange-300 w-screen h-screen flex items-center justify-center">
      <div className="flex gap-4 flex-col items-center">
        <div>
          <label htmlFor="email">Username:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-white shadow-lg w-[50%] text-center"
          type="submit"
          id="login"
          onClick={handleButtonClick}
        >
          Login
        </button>
      </div>
    </div>
  );
}
