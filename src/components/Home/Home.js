import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import { profile } from "../../data/portfolio";

function Home() {
  return <section className="landing-page">
    <Container fluid className="home-section premium-home" id="home">
      <Container className="home-content premium-hero">
        <Row className="align-items-center gy-5">
          <Col lg={7} className="home-header premium-copy">
            <p className="premium-kicker"><span className="status-dot" /> SOFTWARE ENGINEER <span className="kicker-divider">/</span> {profile.location.toUpperCase()}</p>
            <h1 className="premium-title">Thoughtful code.<br /><span>Remarkable</span> experiences.</h1>
            <p className="premium-description">I’m {profile.name}, a {profile.title.toLowerCase()} creating polished, reliable digital products for the real world.</p>
            <div className="premium-specialty"><Type /></div>
            <div className="premium-actions">
              <Link className="premium-button primary" to="/project">Explore my work <FiArrowUpRight aria-hidden="true" /></Link>
              {/* <a className="premium-button quiet" href={`mailto:${profile.email}`}>Let’s talk <FiArrowUpRight aria-hidden="true" /></a> */}
            </div>
            <a className="premium-scroll" href="#about"><span className="scroll-icon"><FiArrowDown aria-hidden="true" /></span> SCROLL TO EXPLORE</a>
          </Col>
          <Col lg={5} className="premium-visual-column">
            <div className="premium-visual" aria-label="Developer illustration">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-glass">
                <span className="visual-caption">DESIGNING THE NEXT</span>
                <img src={homeLogo} alt="Developer at work illustration" className="img-fluid premium-illustration" />
                <span className="visual-index">01 <i /> 04</span>
              </div>
              <div className="floating-note location-note"><FiMapPin aria-hidden="true" /><span><b>Based in</b>{profile.location}</span></div>
              <div className="floating-note craft-note"><span className="craft-spark">✳</span><span><b>Craft meets</b>technology</span></div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Home2 />
  </section>;
}
export default Home;
