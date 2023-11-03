import styles from "./Comment.module.css";

const Comment = ({ name,email,content }) => {
    return (
      <div className={styles.comment}>
        <h3 className={styles.commentName}>@{name}</h3>
        <p className={styles.commentMail}>{email}</p>
        <hr></hr>
        <p className={styles.commentText}>{content}</p>
      </div>
    );
};

export default Comment;
