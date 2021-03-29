import React from "react";
import googleImage from "../../assets/googleimage.png";
import githubImage from "../../assets/githubImage.png";
import twitterImage from "../../assets/twitterImage.png";
import styles from "./Loginpage.module.css";

export default function LoginPage() {
  const googleLogin = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  const githubLogin = () => {
    // window.open("http://localhost:4000/auth/google", "_self");
  };

  const twitterLogin = () => {
    // window.open("http://localhost:4000/auth/google", "_self");
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <div className={styles.googleContainer} onClick={googleLogin}>
          <img src={googleImage} alt={"google logo"} />
          <p>Login with Google</p>
        </div>

        <div
          className={`${styles.googleContainer} ${styles.githubContainer}`}
          onClick={githubLogin}
        >
          <img src={githubImage} alt={"Github logo"} />
          <p>Login with Github</p>
        </div>

        <div
          className={`${styles.googleContainer} ${styles.twitterContainer}`}
          onClick={twitterLogin}
        >
          <img src={twitterImage} alt={"Twitter logo"} />
          <p>Login with Twitter</p>
        </div>
      </div>
    </div>
  );
}
