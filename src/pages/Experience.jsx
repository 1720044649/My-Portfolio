import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const experienceData = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Tech Company',
    duration: 'May 2025 \u2013 July 2025',
    points: [
      'Developed and maintained full-stack web applications using modern technologies',
      'Collaborated with team members on project development and code reviews',
      'Gained hands-on experience with front-end and back-end development workflows',
    ],
  },
  {
    role: 'AI Intern',
    company: 'AIMERS Society',
    duration: 'May 2024 \u2013 July 2024',
    points: [
      'Worked on artificial intelligence and machine learning projects',
      'Explored data preprocessing, model training, and evaluation techniques',
      'Contributed to team research and development initiatives',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-header">
          <h2 className="experience-title">
            My <span>Experience</span>
          </h2>
          <p className="experience-subtitle">
            Professional internships and work experience
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot">
                <FaBriefcase className="timeline-dot-icon" />
              </div>

              <div className="timeline-card">
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <div className="timeline-duration">
                  <FaCalendarAlt className="timeline-duration-icon" />
                  <span>{item.duration}</span>
                </div>
                <ul className="timeline-points">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
