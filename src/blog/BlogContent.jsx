import React, { useEffect, useState } from 'react'
import styles from './BlogContent.module.css'
import axios from 'axios';
import BlogCard from './BlogCard';


const BlogContent = () => {
  
  const [loading,setLoading]  = useState(true);
  const [blogData, setBlogData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      setTimeout(async () => {
        try {
          const response = await axios.get('http://localhost:8000/blog/blogs'); // Replace with your API endpoint
          setBlogData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(true);
        }
      },3000)
      
    }

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.blogsContainer}>
            {
              (
                blogData.map((blog,index) => (
                    
                    <BlogCard title={blog.title} imgsrc = {blog.imgsrc} content={blog.content} key={blog._id} id={blog._id} dateTime={blog.createdAt} index={index}/>
                ))
              )
            }

          
            
      </div>
    </>
  )
}

export default BlogContent;