import React from "react";
import "./styles/CarouselItem.css";

const CarouselItem = (props) => {
  return (
    <div className="carousel-item-wrapper">
      <img src={props.background} alt="Background" className="background" />
      <div className="carousel-header">
        <img src={props.gameImage} alt={props.alt} />
        <h1 className="year">{props.year}</h1>
        <h1 className="name">{props.robotName}</h1>
      </div>
      <div className="carousel-content">
        <p>{props.description}</p>
        <img src={props.robotImage} alt={props.robotAlt} />
      </div>
    </div>
  );
};

export default CarouselItem;
