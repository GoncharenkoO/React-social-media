import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import styles from "./headerBar.module.css";

const HeaderBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navLeft}>
        <span className={styles.logo}>Lamasocial</span>
      </div>
      <div className={styles.navCenter}>
        <div className={styles.searchBar}>
          <Search className={styles.searchIcon} />
          <input
            placeholder="Search for friend, post or video"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.navRight}>
        <div className={styles.navLinks}>
          <span className={styles.navLink}>Homepage</span>
          <span className={styles.navLink}>TimeLine</span>
          <div className={styles.navIcons}>
            <div className={styles.navIconItem}>
              <Person />
              <span className={styles.navIconBadge}>1</span>
            </div>
            <div className={styles.navIconItem}>
              <Chat />
              <span className={styles.navIconBadge}>2</span>
            </div>
            <div className={styles.navIconItem}>
              <Notifications />
              <span className={styles.navIconBadge}>1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className={styles.picture} />
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
