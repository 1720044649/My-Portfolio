import React from 'react';
import { FaGraduationCap, FaLanguage } from 'react-icons/fa';
import './About.css';

const educationData = [
  {
    degree: 'B.Tech in CSE',
    institution: "St Ann's College of Engineering and Technology",
    years: '2022\u20132026',
    grade: 'CGPA: 8.89',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    years: '2020\u20132022',
    grade: 'Percentage: 74.8%',
  },
  {
    degree: 'SSC',
    institution: 'Christ the King English Medium High School',
    years: '2019\u20132020',
    grade: 'Percentage: 99.3%',
  },
];

const languagesData = [
  { name: 'English', proficiency: 90, label: '' },
  { name: 'Telugu', proficiency: 95, label: 'Native' },
  { name: 'Hindi', proficiency: 75, label: '' },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <h2 className="about-title">
            About <span>Me</span>
          </h2>
          <p className="about-subtitle">Get to know me better</p>
        </div>

        {/* Profile and Bio */}
        <div className="about-content">
          <div className="about-profile">
            <div className="about-profile-photo">
              <span className="about-profile-initials">KT</span>
            </div>
          </div>

          <div className="about-bio">
            <p>
              A motivated B.Tech student in Computer Science and Engineering with
              a strong foundation in programming, data analysis, and web
              technologies. Passionate about leveraging technical skills to solve
              real-world problems and drive data-driven decision making. Seeking
              opportunities to apply and grow my skills in developer and data
              analyst roles.
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="about-education">
          <h3 className="about-education-title">
            <FaGraduationCap className="about-education-icon" />
            Education
          </h3>

          <div className="about-timeline">
            {educationData.map((item, index) => (
              <div className="about-timeline-entry" key={index}>
                <div className="about-timeline-dot" />
                <div className="about-timeline-card">
                  <h4 className="about-timeline-degree">{item.degree}</h4>
                  <p className="about-timeline-institution">
                    {item.institution}
                  </p>
                  <div className="about-timeline-meta">
                    <span className="about-timeline-years">{item.years}</span>
                    <span className="about-timeline-grade">{item.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="about-languages">
          <h3 className="about-languages-title">
            <FaLanguage className="about-languages-icon" />
            Languages
          </h3>

          <div className="about-languages-list">
            {languagesData.map((lang, index) => (
              <div className="about-language-item" key={index}>
                <div className="about-language-info">
                  <span className="about-language-name">
                    {lang.name}
                    {lang.label && (
                      <span className="about-language-label">
                        {lang.label}
                      </span>
                    )}
                  </span>
                  <span className="about-language-percent">
                    {lang.proficiency}%
                  </span>
                </div>
                <div className="about-language-bar">
                  <div
                    className="about-language-bar-fill"
                    style={{ '--bar-width': `${lang.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
