import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import { FiMoon, FiSun, FiExternalLink } from "react-icons/fi";
import { profile } from "../data/portfolio";

function NavBar({ theme, onToggleTheme }) {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <Navbar expanded={expanded} fixed="top" expand="md" className={scrolled ? "sticky" : "navbar"}>
    <Container>
      <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className="brand-wordmark" aria-label="Ravi Mareboina home">RAVI<span>.</span>MAREBOINA</Navbar.Brand>
      <Navbar.Toggle aria-controls="portfolio-navigation" aria-label="Toggle navigation" onClick={() => setExpanded(!expanded)}><span></span><span></span><span></span></Navbar.Toggle>
      <Navbar.Collapse id="portfolio-navigation">
        <Nav className="ms-auto" aria-label="Main navigation">
          {[["/","Home"],["/about","About"],["/project","Work"],["/resume","Resume"]].map(([to,label]) => <Nav.Item key={to}><Nav.Link as={NavLink} end={to === "/"} to={to} onClick={() => setExpanded(false)}>{label}</Nav.Link></Nav.Item>)}
          <Nav.Item><Nav.Link href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <FiExternalLink size={12} aria-hidden="true" /></Nav.Link></Nav.Item>
          <Nav.Item className="theme-nav-item"><button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} aria-pressed={theme === "dark"}>{theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}<span>{theme === "dark" ? "Light" : "Dark"}</span></button></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
}
export default NavBar;
