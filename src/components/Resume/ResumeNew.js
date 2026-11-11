import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import { profile, experiences, skillGroups, certifications } from "../../data/portfolio";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Container className="resume-content">
        <h1 className="project-heading resume-page-title">My <strong className="purple">Resume</strong></h1>

        <section className="resume-profile-card resume-info-card" aria-label="Profile summary">
          <h2>{profile.name}</h2>
          <p className="purple">{profile.title}</p>
          <p>{profile.location}</p>
          <div className="resume-contact-actions" aria-label="Contact and social links">
            <a href={`mailto:${profile.email}`} aria-label="Send Ravi an email" title="Send email"><FiMail aria-hidden="true" /><span className="visually-hidden">Email</span></a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} aria-label="Call Ravi" title="Call"><FiPhone aria-hidden="true" /><span className="visually-hidden">Phone</span></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Ravi on LinkedIn" title="LinkedIn"><FiLinkedin aria-hidden="true" /><span className="visually-hidden">LinkedIn</span></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Ravi on GitHub" title="GitHub"><FiGithub aria-hidden="true" /><span className="visually-hidden">GitHub</span></a>
          </div>
          <p>{profile.summary}</p>
        </section>

        <section className="resume-block" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="resume-section-title">Professional Experience</h2>
          <Row className="resume-card-grid">
            {experiences.map(item => (
              <Col md={6} key={item.project} className="resume-card-column">
                <article className="resume-info-card experience-card">
                  <h3>{item.role}</h3>
                  <p><strong>{item.company}</strong> · {item.period}</p>
                  <p className="purple">{item.project}</p>
                  <p><strong>Stack:</strong> {item.stack}</p>
                  <ul>{item.highlights.map(point => <li key={point}>{point}</li>)}</ul>
                </article>
              </Col>
            ))}
          </Row>
        </section>

        <Row className="resume-card-grid resume-detail-grid">
          <Col lg={6} className="resume-card-column">
            <section className="resume-info-card detail-card" aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="resume-section-title">Core Skills</h2>
              <div className="resume-skills-list">
                {skillGroups.map(group => (
                  <div className="resume-skill-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <p>{group.skills.join(", ")}</p>
                  </div>
                ))}
              </div>
            </section>
          </Col>
          <Col lg={6} className="resume-card-column">
            <section className="resume-info-card detail-card" aria-labelledby="education-heading">
              <h2 id="education-heading" className="resume-section-title">Education</h2>
              <p>B.Tech, Computer Science · Siddhartha Institute of Engineering &amp; Technology, Hyderabad · 2016–2020 · 75%</p>
            </section>
            <section className="resume-info-card detail-card" aria-labelledby="certifications-heading">
              <h2 id="certifications-heading" className="resume-section-title">Certifications</h2>
              <ul>{certifications.map(c => <li key={c}>{c}</li>)}</ul>
            </section>
            <section className="resume-info-card detail-card" aria-labelledby="additional-heading">
              <h2 id="additional-heading" className="resume-section-title">Additional</h2>
              <p>YouTube content creator (5.85K subscribers), teaching Python concepts using Telugu song lyrics; CSR volunteer in food distribution and tree planting; company blog contributor.</p>
            </section>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
