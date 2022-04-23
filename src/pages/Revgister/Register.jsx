import styles from "./register.module.scss";

export default function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        <div className={styles.registerLeft}>
          <h3 className={styles.registerLogo}>Helsocial</h3>
          <span className={styles.registerDesc}>
            Connect witg friends and the world around you on Helsocial.
          </span>
        </div>
        <div className={styles.registerRight}>
          <div className={styles.registerBox}>
            <input placeholder="Username" className={styles.registerInput} />
            <input placeholder="Email" className={styles.registerInput} />
            <input placeholder="Password" className={styles.registerInput} />
            <input
              placeholder="Password Again"
              className={styles.registerInput}
            />
            <button className={styles.registerButton}>Sign In</button>
            <button className={styles.loginRegisterButton}>
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
