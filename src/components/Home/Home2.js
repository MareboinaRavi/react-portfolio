import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatarr.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { profile } from "../../data/portfolio";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>LET ME <span className="purple">INTRODUCE</span> MYSELF</h1>
            <p className="home-about-body">{profile.summary}</p>
            <p className="home-about-body">I build workflow-driven banking platforms, healthcare tools, retail experiences and data products, with a focus on secure APIs, accessible interfaces and reliable delivery.</p>
          </Col>
          <Col md={4} className="myAvtar"><Tilt><img src={myImg} className="img-fluid" style={{ borderRadius: "50%" }} alt="Illustrated developer avatar" /></Tilt></Col>
        </Row>
        <Row><Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1><p>Based in {profile.location}. Feel free to <span className="purple">connect</span>.</p>
          <ul className="home-about-social-links">
            <li className="social-icons"><a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-colour home-social-icons" aria-label="GitHub"><AiFillGithub /></a></li>
            <li className="social-icons"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-colour home-social-icons" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
            <li className="social-icons"><a href={`mailto:${profile.email}`} className="icon-colour home-social-icons" aria-label="Email"><AiOutlineMail /></a></li>
          </ul>
        </Col></Row>
      </Container>
    </Container>
  );
}
export default Home2;
