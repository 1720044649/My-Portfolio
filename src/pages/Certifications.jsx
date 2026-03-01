import React from 'react';
import {
  FaCloud,
  FaHtml5,
  FaLaptopCode,
  FaFileExcel,
  FaCertificate,
} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import './Certifications.css';

const certifications = [
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    icon: FaCloud,
    description:
      'Comprehensive course covering cloud computing concepts, services, and deployment models',
  },
  {
    id: 'html-certification',
    title: 'HTML Certification',
    issuer: 'Spoken Tutorial',
    icon: FaHtml5,
    description:
      'Certified in HTML web development fundamentals and best practices',
  },
  {
    id: 'javascript-certification',
    title: 'JavaScript Certification',
    issuer: 'Spoken Tutorial',
    icon: SiJavascript,
    description:
      'Certified in JavaScript programming for interactive web development',
  },
  {
    id: 'skill-development',
    title: 'Skill Development',
    issuer: 'APSSDC',
    icon: FaLaptopCode,
    description:
      'Skill development program by Andhra Pradesh State Skill Development Corporation',
  },
  {
    id: 'advanced-excel',
    title: 'Advanced Excel, PowerPoint & Word',
    issuer: 'EXCELR',
    icon: FaFileExcel,
    description:
      'Advanced training in Microsoft Office suite including Excel, PowerPoint, and Word',
  },
];

function Certifications() {
  return (
    <section className="certifications-section section">
      <div className="container">
        {/* Section Header */}
        <h2 className="section-title">
          My <span>Certifications</span>
        </h2>
        <p className="section-subtitle">
          Professional certifications and achievements
        </p>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const CertIcon = cert.icon;
            return (
              <div
                className="cert-card card"
                key={cert.id}
                style={{ '--card-delay': `${index * 0.1}s` }}
              >
                {/* Decorative ribbon */}
                <div className="cert-card__ribbon">
                  <FaCertificate />
                </div>

                {/* Icon */}
                <div className="cert-icon">
                  <CertIcon />
                </div>

                {/* Title */}
                <h3 className="cert-title">{cert.title}</h3>

                {/* Issuer Badge */}
                <span className="cert-issuer">{cert.issuer}</span>

                {/* Description */}
                <p className="cert-description">{cert.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
