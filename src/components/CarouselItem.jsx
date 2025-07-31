import React from "react";
import "./styles/CarouselItem.css";

const CarouselItem = (props) => {
  const [mobile, setMobile] = React.useState(window.innerWidth <= 960);

  const showMobile = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  window.addEventListener("resize", showMobile);

  return (
    <div>
      {!mobile ? (
        <div className="carousel-item-wrapper">
          <img src={props.background} alt="Background" className="background" />
          <div className="carousel-header">
            <img src={props.gameImage} alt={"FRC Game"} />
            <h1 className="year">{props.year}</h1>
            <h1 className="name">{props.robotName}</h1>
          </div>
          <div className="carousel-content">
            <p>{props.description}</p>
            <img src={props.robotImage} alt={"Robot"} />
          </div>
        </div>
      ) : (
        <div className="carousel-item-wrapper">
          <img src={props.background} alt="Background" className="background" />
          <div className="carousel-header">
            <img src={props.gameImage} alt={"FRC Game"} />
            <div className="carousel-header-text">
              <h1 className="year">{props.year}</h1>
              <h1 className="name">{props.robotName}</h1>
            </div>
          </div>
          <div className="carousel-content">
            <img src={props.robotImage} alt={"Robot"} />
            <p>{props.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselItem;
