import Gift from "../../images/gift.png";
import Birhtday from "../../images/birhtday.jpg";
import { Users } from "../../data/dummyDataUser";
import Online from "../Online/Online";
import Woman from "../../images/person/woman.jpg";
import Model from "../../images/person/model.jpg";
import styles from "./rightBar.module.scss";

export default function RightBar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className={styles.rightbarContainer}>
          <img className={styles.birthdayImg} src={Gift} alt="Gift" />
          <span className={styles.birthdayText}>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className={styles.rightbarDay} src={Birhtday} alt="birhtday" />
        <h4 className={styles.rightbarTitle}>Online Friends</h4>
        <ul className={styles.rightbarFriendList}>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className={styles.rightBarTitle}>User Information</h4>
        <div className={styles.rightbarInfo}>
          <div className={styles.righrbarInfoItem}>
            <span className={styles.rightbarInfoKey}>City:</span>
            <span className={styles.rightbarInfoValue}>Los Angeles</span>
          </div>
          <div className={styles.righrbarInfoItem}>
            <span className={styles.rightbarInfoKey}>From:</span>
            <span className={styles.rightbarInfoValue}>Mexico</span>
          </div>
          <div className={styles.righrbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Relationship:</span>
            <span className={styles.rightbarInfoValue}>Married </span>
          </div>
        </div>
        <h4 className={styles.rightBarTitle}>User friends</h4>
        <div className={styles.rightbarFollowings}>
          <div className={styles.rightbarFollowing}>
            <img className={styles.rightbarFollowingImg} src={Woman} alt="" />
            <span className={styles.rightFollowingName}>Christina Jackson</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img className={styles.rightbarFollowingImg} src={Model} alt="" />
            <span className={styles.rightFollowingName}>Jane Cuper</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img className={styles.rightbarFollowingImg} src={Woman} alt="" />
            <span className={styles.rightFollowingName}>Taylor Anderson</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img className={styles.rightbarFollowingImg} src={Woman} alt="" />
            <span className={styles.rightFollowingName}>Michael Davis</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img className={styles.rightbarFollowingImg} src={Woman} alt="" />
            <span className={styles.rightFollowingName}>Jessiсa Johnson</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img className={styles.rightbarFollowingImg} src={Woman} alt="" />
            <span className={styles.rightFollowingName}>Barbara Ross</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={styles.rightBar}>
      <div className={styles.rightbarWrapper}>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
