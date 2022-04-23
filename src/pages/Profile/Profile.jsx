import HeaderBar from "../../components/HeaderBar/HeaderBar";
import SideBar from "../../components/SideBar/SideBar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RightBar/RightBar";
import Road from "../../images/post/road.jpg";
import Girls from "../../images/person/girls.jpg";
import styles from "./profile.module.scss";

export default function Profile() {
  return (
    <>
      <HeaderBar />
      <div className={styles.profile}>
        <SideBar />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileCover}>
              <img className={styles.profileCoverImg} src={Road} alt="" />
              <img className={styles.profileUserImg} src={Girls} alt="" />
            </div>
            <div className={styles.profileInfo}>
              <h4 className={styles.profileInfoName}>Sandra Lou Marino</h4>
              <span className={styles.profileInfoDesc}>Hello my friends!</span>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}
