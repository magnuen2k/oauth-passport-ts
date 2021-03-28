import React from "react";
import googleImage from "../../assets/googleimage.png";
import styles from "./Loginpage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <div className={styles.googleContainer}>
          <img src={googleImage} alt={"google logo"} />
          <p>Login with Google</p>
        </div>
      </div>
    </div>
  );
}
