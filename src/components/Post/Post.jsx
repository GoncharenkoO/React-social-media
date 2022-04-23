import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../data/dummyDataUser";
import Like from "../../images/like.png";
import Heart from "../../images/heart.png";
import styles from "./post.module.scss";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  // const [comment, setComment] = useState(post.comment);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img
              className={styles.postProfileImg}
              src={Users.filter((u) => u.id === post?.userId)[0].profilePictute}
              alt=""
            />
            <span className={styles.postUserName}>
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className={styles.postDate}>{post.date}</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post?.desc}</span>
          <img className={styles.postImg} src={post.photo} alt="" />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img
              className={styles.likeicon}
              src={Like}
              onClick={likeHandler}
              alt=""
            />
            <img
              className={styles.likeicon}
              src={Heart}
              onClick={likeHandler}
              alt=""
            />
            <span className={styles.postLikeCounter}>
              {like} people like it
            </span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
