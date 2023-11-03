import React from "react";
import styles from "./BlogCard.module.css";
import { useNavigate } from "react-router-dom";


const BlogCard = ({ title, imgsrc, content, id, dateTime, index}) => {
  const navigate = useNavigate();
  const date = new Date(dateTime);

  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const handleClick = () => {
    console.log(id);
    navigate("/blogs/" + id);
  };

  return (
    <div className={`${styles.blogContainer} ${styles.slideInLeft}`}  style={{ '--index': index }}>
      <div className={styles.imageContainer}>
        <img className={styles.blogImage} src={imgsrc} alt="Blog" />
      </div>
      
      <h1 className={styles.blogTitle}>{title}</h1>
      <p className={styles.blogDate}>Published on {formattedDate} at {formattedTime}</p>
      <p className={styles.blogContent}>{content}</p>
      <span className={styles.readMore} onClick={handleClick}>
        Read More
      </span>
    </div>

  );
};

export default BlogCard;
