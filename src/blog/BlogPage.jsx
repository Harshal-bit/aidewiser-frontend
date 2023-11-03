import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogNavbar from "./Navbar/BlogNavbar";
import styles from './BlogPage.module.css';
import Footer from './../components/Footer';
import Comment from './Comment';

const BlogPage = () => {
  
  
  const { blogid } = useParams();
  const [blog, setBlog] = useState(null);
  
  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/blog/blogs/${blogid}`);

      if (response.status === 200) {
        const createdAt = new Date(response.data.createdAt);
        const date = createdAt.toLocaleDateString();
        const time = createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        setBlog({
          title: response.data.title,
          date,
          time,
          imgsrc: response.data.imgsrc,
          content: response.data.content,
          comment: response.data.comment
        });
      } else {
        console.error('Failed to fetch blog data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  useEffect(() => {
    fetchBlogData();
  }, [blogid]);


  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleComment = async (e) => {
      e.preventDefault();
      console.log(commentData)
      try {
        const response = await axios.post(`http://localhost:3001/blog/blogs/${blogid}/comment`, commentData);
  
        if (response.status === 201) {
          setCommentData({
            name: '',
            email: '',
            comment: '',
          });

          fetchBlogData();
        } else {
          console.error('Failed to add comment');
        }
      } catch (error) {
        console.error('Server error:', error);
      }
  }


  if(!blog) return <h1>Loading</h1>
  

  return (
    <>
    <BlogNavbar />
    
    
      <div className={styles.blogContainer}>
        <div className={styles.headerDiv}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.date}>Published on {blog.date} at {blog.time}</p>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={blog.imgsrc}
            alt="Blog Cover"
            className={styles.blogImage}
          />
        </div>

        <div className={styles.content}>
          
            {blog.content.map((para) => (<p className={styles.paragraph}>{para}<br /></p>))}
          
        </div>

        <hr></hr>
        <h2>Leave a Reply</h2>
        <form className={styles.replyBox} onSubmit={handleComment}>
          <textarea onChange={handleChange} placeholder="Comment" name="comment" rows="6" value={commentData.comment}></textarea>
          <input onChange={handleChange} type="text" name="name" placeholder="Name" value={commentData.username}></input>
          <input onChange={handleChange} type="email" name="email" placeholder="Email" value={commentData.email}></input>
          <button type="submit">Comment</button>
        </form>
        <hr></hr>
        <h2>Comments</h2>
        <div className={styles.commentsDiv}> 
          {blog.comment.map((comm) => <Comment name={comm.name} email={comm.email} content={comm.comment}/>)}
        </div>
    </div>
    <Footer />
    </>
    
  );
};

export default BlogPage;
