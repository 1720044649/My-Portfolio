import React from 'react';
import { FaCalendarAlt, FaArrowRight, FaBookOpen } from 'react-icons/fa';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Data Analysis Using Python',
    date: 'January 15, 2026',
    excerpt:
      'Learn the fundamentals of data analysis with Python, including pandas, numpy, and matplotlib. A beginner-friendly guide to kickstart your data journey.',
    category: 'Data Analysis',
  },
  {
    id: 2,
    title: 'Building Responsive Websites: A Complete Guide',
    date: 'December 20, 2025',
    excerpt:
      'Explore the best practices for building responsive, mobile-first websites using modern CSS techniques like Flexbox and Grid.',
    category: 'Web Development',
  },
  {
    id: 3,
    title: 'My Journey into Cloud Computing',
    date: 'November 10, 2025',
    excerpt:
      'Sharing my experience learning cloud computing through NPTEL certification and how it opened new perspectives in technology.',
    category: 'Cloud Computing',
  },
];

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        {/* Section Header */}
        <div className="blog-header">
          <h2 className="blog-title">
            My <span>Blog</span>
          </h2>
          <p className="blog-subtitle">Thoughts, tutorials, and insights</p>
        </div>

        {/* Coming Soon Banner */}
        <div className="blog-banner">
          <FaBookOpen className="blog-banner-icon" />
          <p className="blog-banner-text">
            Blog coming soon! Stay tuned for articles on development and data
            analysis.
          </p>
        </div>

        {/* Blog Post List */}
        <div className="blog-list">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-card-accent" />
              <div className="blog-card-content">
                <span className="blog-tag">{post.category}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <div className="blog-date">
                  <FaCalendarAlt className="blog-date-icon" />
                  <span>{post.date}</span>
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button className="blog-read-more" type="button">
                  Read More <FaArrowRight className="blog-read-more-icon" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
