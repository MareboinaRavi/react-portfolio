import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import { profile } from "../../data/portfolio";

function Home() {
  return <section>
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row className="align-items-center">
          <Col md={7} className="home-header">
            <p className="heading section-eyebrow">HELLO, I'M RAVI</p>
            <h1 className="heading-name">Building products that <strong className="main-name">make an impact.</strong></h1>
            <p className="hero-description">{profile.title} · {profile.location}. Creating reliable digital experiences for banking, healthcare and retail.</p>
            <div style={{ padding: "18px 0 10px 45px", textAlign: "left" }}><Type /></div>
            <div className="hero-actions"><a className="hero-button" href="/project">Explore my work →</a><a className="hero-button secondary" href={`mailto:${profile.email}`}>Get in touch</a></div>
          </Col>
          <Col md={5} style={{ paddingBottom: 20 }}><img src={homeLogo} alt="Developer at work illustration" className="img-fluid" style={{ maxHeight: "410px" }} /></Col>
        </Row>
      </Container>
    </Container>
    <Home2 />
  </section>;
}
export default Home;
