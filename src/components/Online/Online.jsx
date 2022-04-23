import styles from "./online.module.scss";

export default function Online({ user }) {
  return (
    <li className={styles.rightbarFriend}>
      <div className={styles.rightbarProfileContainer}>
        <img
          className={styles.rightbarProfileImg}
          src={user.profilePictute}
          alt=""
        />
        <span className={styles.rightbarOnline}></span>
      </div>
      <span className={styles.rightbarUsername}>{user.username}</span>
    </li>
  );
}
