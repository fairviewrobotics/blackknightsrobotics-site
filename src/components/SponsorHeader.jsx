import React from "react";
import { Button } from "./Button";
import "./styles/SponsorHeader.css";

const SponsorHeader = () => {
  return (
    <div className="sponsor-header">
      <div className="sponsor-text">
        <h1>Sponsors</h1>
        <p>
          We deeply appreciate the generosity of our sponsors, whose support is
          essential to Team 2036, The Black Knights. Their contributions empower
          us to excel in the FIRST Robotics Competition, where we gain valuable
          skills in engineering and teamwork.
          <br />
          <br />
          Our sponsors are categorized into tiers, reflecting their level of
          support. Higher-tier sponsors enjoy greater visibility, with larger
          logos featured on our team t-shirts and our robot. This not only
          acknowledges their support but also emphasizes their commitment to
          promoting STEM education.
          <br />
          <br />
          Thank you to all our sponsors for helping us achieve our goals and
          inspiring future innovators!
        </p>
        <Button buttonStyle={"btn--black"} buttonSize={"btn--medium"}>
          Become a Sponsor
        </Button>
      </div>
    </div>
  );
};

export default SponsorHeader;
