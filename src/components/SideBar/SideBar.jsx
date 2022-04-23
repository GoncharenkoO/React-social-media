import {
  RssFeed,
  Chat,
  PlayCircle,
  Groups,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Users } from "../../data/dummyDataUser";
import CloseFriend from "../CloseFriend/CloseFriend";
import styles from "./sideBar.module.scss";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <RssFeed className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Feed</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Chat className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Chats</span>
          </li>
          <li className={styles.sidebarListItem}>
            <PlayCircle className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Videos</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Groups className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Groups</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Bookmark className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Bookmark</span>
          </li>
          <li className={styles.sidebarListItem}>
            <HelpOutline className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Questions</span>
          </li>
          <li className={styles.sidebarListItem}>
            <WorkOutline className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Jobs</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Event className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Event</span>
          </li>
          <li className={styles.sidebarListItem}>
            <School className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Courses</span>
          </li>
        </ul>
        <Button variant="contained" size="medium" type="submit">
          Show More
        </Button>
        <hr className={styles.sidebarHr} />
        <ul className={styles.sidebarFriendList}>
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
