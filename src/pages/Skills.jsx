import React from 'react';
import {
  FaChartBar,
  FaCode,
  FaDatabase,
  FaChartPie,
  FaFileExcel,
} from 'react-icons/fa';
import {
  SiPython,
  SiMysql,
  SiTableau,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    icon: FaChartBar,
    color: '#6C63FF',
    skills: [
      { name: 'Excel', percent: 85, icon: FaFileExcel },
      { name: 'Python', percent: 75, icon: SiPython },
      { name: 'SQL', percent: 80, icon: FaDatabase },
    ],
  },
  {
    id: 'web-technologies',
    title: 'Web Technologies',
    icon: FaCode,
    color: '#00D9FF',
    skills: [
      { name: 'HTML', percent: 85, icon: SiHtml5 },
      { name: 'CSS', percent: 80, icon: SiCss3 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: FaDatabase,
    color: '#FF6B6B',
    skills: [
      { name: 'MySQL', percent: 80, icon: SiMysql },
    ],
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    icon: FaChartPie,
    color: '#FFB347',
    skills: [
      { name: 'Power BI', percent: 75, icon: FaChartBar },
      { name: 'Tableau', percent: 70, icon: SiTableau },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section section">
      <div className="container">
        {/* ── Section Header ── */}
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>

        {/* ── Skills Grid ── */}
        <div className="skills-grid">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div className="skill-card card" key={category.id}>
                {/* Card Header */}
                <div className="skill-card__header">
                  <div
                    className="skill-card__icon-wrapper"
                    style={{ '--card-accent': category.color }}
                  >
                    <CategoryIcon className="skill-card__icon" />
                  </div>
                  <h3 className="skill-card__title">{category.title}</h3>
                </div>

                {/* Skill Items */}
                <div className="skill-card__skills">
                  {category.skills.map((skill, index) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        className="skill-item"
                        key={skill.name}
                        style={{ '--skill-delay': `${index * 0.2}s` }}
                      >
                        <div className="skill-item__info">
                          <div className="skill-item__name">
                            <SkillIcon className="skill-item__icon" />
                            <span>{skill.name}</span>
                          </div>
                          <span className="skill-item__percent">
                            {skill.percent}%
                          </span>
                        </div>
                        <div className="skill-item__bar">
                          <div
                            className="skill-item__bar-fill"
                            style={{
                              '--fill-width': `${skill.percent}%`,
                              '--card-accent': category.color,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
