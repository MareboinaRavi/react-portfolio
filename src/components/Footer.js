import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data/portfolio";
function Footer() {
  return <Container fluid className="footer"><Row>
    <Col md="4" className="footer-copywright"><h3>{profile.name} · {profile.title}</h3></Col>
    <Col md="4" className="footer-copywright"><h3>Copyright © {new Date().getFullYear()} RM</h3></Col>
    <Col md="4" className="footer-body"><ul className="footer-icons">
      <li className="social-icons"><a href={profile.github} style={{ color: "white" }} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><AiFillGithub /></a></li>
      <li className="social-icons"><a href={profile.linkedin} style={{ color: "white" }} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
      <li className="social-icons"><a href={`mailto:${profile.email}`} style={{ color: "white" }} aria-label="Email"><AiOutlineMail /></a></li>
    </ul></Col>
  </Row></Container>;
}
export default Footer;
