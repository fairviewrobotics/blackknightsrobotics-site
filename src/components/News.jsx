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
              src="images/img-9.jpg"
              text="Moving to a New Location"
              label="Full Team"
              path=""
            />
            <CardItem
              src="images/img-2.jpg"
              text="Upgrading our Current Robot"
              label="Programming/Mechanical"
              path=""
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Building a Pit"
              label="Mechanical"
              path=""
            />
            <CardItem
              src="images/img-4.jpg"
              text="Building a Second Robot for KCMT"
              label="Mechanical"
              path=""
            />
            <CardItem
              src="images/img-8.jpg"
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
