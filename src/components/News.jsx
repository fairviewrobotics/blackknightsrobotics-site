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
              src="images/CAD.png"
              text="Building a Second Robot for KCMT"
              label="Mechanical, Programming, Electrical"
              path=""
            />
            <CardItem
              src="images/limelight.png"
              text="Improving Vision Systems"
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
