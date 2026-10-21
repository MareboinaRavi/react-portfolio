import React from "react";
import Card from "react-bootstrap/Card";
import { profile } from "../../data/portfolio";
function AboutCard() {
  return <Card className="quote-card-view"><Card.Body>
    <p style={{ textAlign: "left" }}>I'm <strong className="purple">{profile.name}</strong>, a {profile.title} based in {profile.location}.</p>
    <p style={{ textAlign: "left" }}>{profile.summary}</p>
    <p style={{ textAlign: "left" }}>Outside work, I create YouTube tutorials for 5.85K subscribers, using Telugu song lyrics and Python to make programming approachable. I also volunteer in food distribution and tree-planting initiatives and contribute technical blogs.</p>
  </Card.Body></Card>;
}
export default AboutCard;
