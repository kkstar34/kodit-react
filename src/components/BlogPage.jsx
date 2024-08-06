import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './BlogPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerSelector } from '../redux/slices/registerSlice';

const BlogPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading } = useSelector(registerSelector);
  const [posts, setPosts] = useState([]);

  // Keep the imageMap in the original order
  const imageMap = {
    0: 'ants_pic.jpeg',
    1: 'trilemne.jpeg',
    2: 'image1.jpeg',
    3: 'image2.jpeg',
    4: 'image3.jpeg',
    5: 'image4.jpg',
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@0xkodit`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched posts:', data.items);
        // Do not reverse the order here
        setPosts(data.items);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  return (
    <div className="blog-page">
      <h2 className="page-title">{t('our_latest_insights')}</h2>
      <div className="center-line"></div>
      <ul className="post-list">
        {posts.map((post, index) => {
          // Use the index directly to get the correct image
          const imageFile = imageMap[index] || 'default-image.jpg';

          return (
            <li key={post.guid} className={`post-item ${index % 2 === 0 ? 'left-align' : 'right-align'}`}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <div className={`post-thumbnail-container ${index % 2 === 0 ? 'left-side' : 'right-side'}`}>
                  <img
                    className="post-thumbnail"
                    src={`/images/blogpics/${imageFile}`}
                    alt="Post Thumbnail"
                  />
                  <div className="overlay">
                    <span className="post-title">{truncateString(post.title, 50)}</span>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPage;