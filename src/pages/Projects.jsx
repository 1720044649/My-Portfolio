import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    id: 'ecommerce-dashboard',
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive data analytics dashboard built for tracking e-commerce metrics, sales trends, and customer behavior patterns.',
    techStack: ['Python', 'Power BI', 'SQL'],
    githubLink: '#',
    demoLink: '#',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website built with React to showcase skills, experience, and projects.',
    techStack: ['React', 'CSS', 'JavaScript'],
    githubLink: '#',
    demoLink: '#',
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    description:
      'A full-stack web application for managing student records, attendance, and academic performance.',
    techStack: ['HTML', 'CSS', 'MySQL', 'Python'],
    githubLink: '#',
    demoLink: '#',
  },
];

function Projects() {
  return (
    <section className="projects-section section">
      <div className="container">
        {/* ── Section Header ── */}
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          Showcase of my recent work
        </p>

        {/* ── Projects Grid ── */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              className="project-card card"
              key={project.id}
              style={{ '--card-index': index }}
            >
              {/* Gradient Banner */}
              <div className="project-card__banner" />

              {/* Card Body */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="project-tags">
                  {project.techStack.map((tech) => (
                    <span className="project-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-card__actions">
                  <a
                    href={project.githubLink}
                    className="project-card__btn project-card__btn--github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="project-card__btn-icon" />
                    GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    className="project-card__btn project-card__btn--demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="project-card__btn-icon" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Coming Soon Note ── */}
        <p className="projects-note">
          More projects coming soon! Check back for updates.
        </p>
      </div>
    </section>
  );
}

export default Projects;
