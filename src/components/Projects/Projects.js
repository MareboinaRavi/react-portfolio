import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";
import { experiences } from "../../data/portfolio";

const work = [
  { image: "banking", description: "Loan origination and approval workflows with secure, role-aware routing and Spring Boot API integrations." },
  { image: "analytics", description: "A modular data platform with micro-frontends, workflow visualization and analytics integrations." },
  { image: "healthcare", description: "Healthcare billing and document workflows, including CMS1500 forms and an assisted data import experience." },
  { image: "retail", description: "Retail web and mobile experiences featuring ordering, payments, customer support and feedback." },
  { image: "education", description: "Course discovery and booking platform with payments, user/admin dashboards and location-based pricing." }
];
const otherProjects = [
  { name: "Housie", image: "housie", description: "A Flutter mobile app for the Housie (Tambola) game.", technology: "Flutter" },
  { name: "SriFitPro", image: "booking", description: "A ground and event booking application.", technology: "Ground & event booking" },
  { name: "Restaurant Chatbot", image: "chatbot", description: "A restaurant chatbot application built for WhatsApp-based interactions.", technology: "WhatsApp chatbot" }
];
const projectLinks = {
  "LoanGenie · Citizens Bank": "https://www.citizensbank.com/homepage.aspx",
  XPIER: "https://xpier.dev.ai/",
  "Orbit Health Care": "https://www.orbithc.com/",
  "Burger King · Restaurant Brands Asia Limited": "https://www.burgerking.in/",
  "Rushividyabhyasam · Rushipeetham Charitable Trust": "https://rushividyabhyasam.org/"
};

function ProjectCard({ name, image, description, meta, technology, link }) {
  return <Col md={6} lg={4} className="project-card">
    <article className="project-card-view portfolio-image-card">
      <img className="portfolio-project-image" src={`/project-art/${image}.svg`} alt="" loading="lazy" />
      <div className="portfolio-image-card-content">
        <div className="portfolio-project-heading">
          <h2 className="portfolio-project-title">{name}</h2>
          {link && <a className="portfolio-project-action" href={link} target="_blank" rel="noopener noreferrer" aria-label={`View ${name} project`} title="View project" data-tooltip="View project"><FiExternalLink aria-hidden="true" /></a>}
        </div>
        <p className="portfolio-project-meta">{meta || technology}</p>
        <p className="portfolio-project-description">{description}</p>
      </div>
    </article>
  </Col>;
}
function Projects() {
  return <Container fluid className="project-section"><Container>
    {/* <p className="section-eyebrow">SELECTED WORK</p> */}
    <h1 className="project-heading">Professional <strong className="purple">Projects</strong></h1>
    <p className="portfolio-section-intro">Selected professional work across banking, data, healthcare, retail and education.</p>
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      {experiences.map((item, index) => <ProjectCard key={item.project} name={item.project} image={work[index].image} description={work[index].description} meta={item.company} link={projectLinks[item.project]} />)}
    </Row>
    <p className="section-eyebrow">SIDE PROJECTS</p>
    <h2 className="project-heading">My <strong className="purple">Other Projects</strong></h2>
    <p className="portfolio-section-intro">More things I've worked on and explored.</p>
    <Row style={{ justifyContent: "center", paddingBottom: "65px" }}>
      {otherProjects.map(item => <ProjectCard key={item.name} {...item} />)}
    </Row>
  </Container></Container>;
}
export default Projects;
