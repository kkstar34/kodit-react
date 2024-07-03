import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { convert } from 'html-to-text';
import './BlogPage.css'; // Import your CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { registerSelector, registerThunk } from '../redux/slices/registerSlice';
import { openModal } from '../redux/slices/modalSlice';

const BlogPage = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  const dispatch = useDispatch();
  const { loading } = useSelector(registerSelector);

  const [posts, setPosts] = useState([]);

  // Mapping of post indices to image filenames
  const imageMap = {
    
    0: 'trilemne.jpeg',
    1: 'image1.jpeg',
    2: 'image2.jpeg',
    3: 'image3.jpeg',
    4: 'image4.jpg'
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
        setPosts(data.items);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const sanitizeDescription = (htmlString) => {
    let text = convert(htmlString, {
      wordwrap: 250, // Adjusted to 250 characters as requested
      selectors: [
        { selector: 'img', format: 'skip' } // Skip images
      ]
    });

    // Find the first occurrence of a capital letter followed by a lowercase letter
    const match = text.match(/[A-Z][a-z]/);
    if (match) {
      text = text.slice(match.index);
    }

    return text;
  };

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic if needed
  };

  return (
    <div className="blog-page">
      <h2 className="page-title">{t('our_latest_insights')}</h2>
      <div className="center-line"></div>
      <ul className="post-list">
        {posts.map((post, index) => (
          <li key={post.guid} className={`post-item ${index % 2 === 0 ? 'left-align' : 'right-align'}`}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <div className={`post-thumbnail-container ${index % 2 === 0 ? 'left-side' : 'right-side'}`}>
                <img
                  className="post-thumbnail"
                  src={`/images/blogpics/${imageMap[index]}`}
                  alt="Post Thumbnail"
                />
                <div className="overlay">
                  <span className="post-title">{post.title}</span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
