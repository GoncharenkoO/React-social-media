import styles from "./closeFriend.module.scss";

export default function CloseFriend({ user }) {
  return (
    <li className={styles.sidebarFriend}>
      <img
        className={styles.sidebarFriendImg}
        src={user.profilePictute}
        alt=""
      />
      <span className={styles.sidebarFriendName}>{user.username}</span>
    </li>
  );
}
