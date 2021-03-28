import React from "react";
import googleImage from "../../assets/googleimage.png";
import styles from "./Loginpage.module.css";

export default function LoginPage() {
  const googleLogin = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <div className={styles.googleContainer} onClick={googleLogin}>
          <img src={googleImage} alt={"google logo"} />
          <p>Login with Google</p>
        </div>
      </div>
    </div>
  );
}
