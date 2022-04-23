import woman from "../../images/person/woman.jpg";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import styles from "./share.module.scss";

export default function Share() {
  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img className={styles.shareProfileImg} src={woman} alt="woman" />
          <input
            placeholder="What's in your mind Sandra?"
            className={styles.shareInput}
          />
        </div>
        <hr className={styles.shareHr} />
        <div className={styles.shareBottom}>
          <div className={styles.shareOptions}>
            <div className={styles.shareOption}>
              <PermMedia htmlColor="tomato" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Photo or Video</span>
            </div>
            <div className={styles.shareOption}>
              <Label htmlColor="blue" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Tag</span>
            </div>
            <div className={styles.shareOption}>
              <Room htmlColor="green" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Location</span>
            </div>
            <div className={styles.shareOption}>
              <EmojiEmotions htmlColor="gold" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={styles.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
}
