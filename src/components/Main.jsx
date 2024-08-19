import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);

  const imageMap = [
    'nostr.jpeg',
    'ants_pic.jpeg',
    'trilemne.jpeg',
    'image1.jpeg',
    'image2.jpeg',
    'image4.jpg',
  ];

  // Hardcoded latest article
  const latestArticle = {
    title: 'NOSTR : Simple "Truc" de plus ou Révolution des Réseaux Sociaux ?',
    pubDate: '2024-08-14 11:59:28',
    link: 'https://medium.com/@0xkodit/nostr-simple-truc-de-plus-ou-r%C3%A9volution-des-r%C3%A9seaux-sociaux-de13cdfe22fc',
    guid: 'https://medium.com/p/de13cdfe22fc',
    author: 'Kodit',
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
        
        // Add the latest article to the beginning of the array, avoiding duplicates
        const allPosts = [latestArticle, ...data.items.filter(item => item.guid !== latestArticle.guid)];
        
        // Sort posts by date, most recent first
        const sortedPosts = allPosts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        
        // Get only the latest 3 posts
        setPosts(sortedPosts.slice(0, 3));
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

  // ... (rest of the component remains the same)

  return (
    <main>
      {/* ... (other sections remain the same) */}

      {/* Updated blog posts section */}
      <section id="blog-posts" className="parallax">
        <div className="container">
          <div className="blog-posts wow fadeInLeft">
          <h1>{t('project_life_cycle')}</h1>
          <br />
            <div className="row">
              {posts.map((post, index) => {
                const imageFile = imageMap[index] || 'default-image.jpg';
                return (
                  <div key={post.guid} className="col-6 col-md-4">
                    <div className="blog-post-card">
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        <div className="post-thumbnail-container">
                          <img
                            src={`/images/blogpics/${imageFile}`}
                            alt={post.title}
                            className="post-thumbnail"
                          />
                          <div className="overlay">
                            <h2>{truncateString(post.title, 50)}</h2>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;