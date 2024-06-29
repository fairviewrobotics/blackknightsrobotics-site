import React from "react";
import CardItem from "./CardItem";
import "./styles/News.css";

const News = () => {
  return (
    <div className="cards">
      <h1>Check out what we're doing!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/new-ssd.png"
              text="Moving to a New Location"
              label="Full Team"
              path=""
            />
            <CardItem
              src="images/upgrade-robot.jpeg"
              text="Upgrading our Current Robot"
              label="Programming/Mechanical"
              path=""
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/pit-lol.jpg"
              text="Building a Pit"
              label="Mechanical"
              path=""
            />
            <CardItem
              src="images/for-kcmt.png"
              text="Building a Second Robot for KCMT"
              label="Mechanical"
              path=""
            />
            <CardItem
              src="images/vision-systems.jpg"
              text="Developing New Vision Systems"
              label="Programming"
              path=""
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
