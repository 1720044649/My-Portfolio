import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaDownload,
  FaArrowRight,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
} from 'react-icons/fa';
import './Home.css';

const roles = ['Developer', 'Data Analyst', 'Problem Solver'];

function Home() {
  return (
    <main className="home">
      {/* ── Hero Section ── */}
      <section className="home-hero">
        <div className="home-hero__content">
          <p className="home-hero__greeting">Hello, I'm</p>
          <h1 className="home-hero__name">Krupa Tejaswini</h1>
          <p className="home-hero__tagline">Aspiring Developer &amp; Data Analyst</p>

          {/* Typing effect — pure CSS, no libraries */}
          <div className="home-hero__roles">
            <span className="home-hero__roles-label">I am a&nbsp;</span>
            <span className="home-hero__roles-carousel">
              {roles.map((role, index) => (
                <span
                  key={role}
                  className="home-hero__role"
                  style={{ '--role-index': index, '--total-roles': roles.length }}
                >
                  {role}
                </span>
              ))}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="home-hero__cta">
            <a
              href="/KrupaTejaswiniNarra.pdf"
              download
              className="home-hero__btn home-hero__btn--primary"
            >
              <FaDownload className="home-hero__btn-icon" />
              View Resume
            </a>
            <Link
              to="/contact"
              className="home-hero__btn home-hero__btn--secondary"
            >
              Contact Me
              <FaArrowRight className="home-hero__btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick Stats Strip ── */}
      <section className="home-stats">
        <div className="home-stats__inner">
          <div className="home-stats__item">
            <FaGraduationCap className="home-stats__icon" />
            <div className="home-stats__text">
              <span className="home-stats__value">7.71</span>
              <span className="home-stats__label">GPA</span>
            </div>
          </div>

          <div className="home-stats__item">
            <FaBriefcase className="home-stats__icon" />
            <div className="home-stats__text">
              <span className="home-stats__value">2</span>
              <span className="home-stats__label">Internships</span>
            </div>
          </div>

          <div className="home-stats__item">
            <FaCertificate className="home-stats__icon" />
            <div className="home-stats__text">
              <span className="home-stats__value">5</span>
              <span className="home-stats__label">Certifications</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
