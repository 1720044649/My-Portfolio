import React, { useState } from 'react';
import { FaPaperPlane, FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 6304049877',
      href: 'tel:+916304049877',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'krupatejaswini31@gmail.com',
      href: 'mailto:krupatejaswini31@gmail.com',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/krupa-tejaswini',
      href: 'https://linkedin.com/in/krupa-tejaswini',
      external: true,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Chirala, Andhra Pradesh, India',
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Contact <span>Me</span>
          </h2>
          <p className="contact-subtitle">Let's connect and work together</p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="form-submit-btn">
                <FaPaperPlane className="btn-icon" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div className="info-card" key={index}>
                <div className="info-icon">{info.icon}</div>
                <div className="info-details">
                  <h4 className="info-label">{info.label}</h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="info-value info-link"
                      target={info.external ? '_blank' : undefined}
                      rel={info.external ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="info-value">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="map-placeholder">
          <div className="map-pin-icon">
            <FaMapMarkerAlt />
          </div>
          <p className="map-text">Chirala, Andhra Pradesh, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
