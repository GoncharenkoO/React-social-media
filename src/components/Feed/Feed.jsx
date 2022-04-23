import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "../../data/dummyDataPost";
import styles from "./feed.module.scss";

export default function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
