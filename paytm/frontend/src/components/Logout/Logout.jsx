import { useNavigate } from "react-router-dom";
import styles from "./Logout.module.css";
export default function Logout({ onClose }) {
  const navigate = useNavigate();
  function logoutFunc() {
    localStorage.clear();
    navigate("/");
  }

  function updateFunc() {
    console.log("update button clicked");
    navigate("/update");
  }
  return (
    <div className={styles.logoutMain}>
      <div className={styles.logoutText}>
        <h2>Do You Want to logout ?</h2>
      </div>
      <div className={styles.logoutButtons}>
        <button onClick={onClose}>Close </button>
        <button onClick={logoutFunc}> Logout</button>
        <button onClick={updateFunc}>Update</button>
      </div>
    </div>
  );
}
