import React from "react";
import "./styles/CarouselSection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";
import { useState } from "react";

//TODO: Add all robot images and descriptions
//TODO: Implement mobile responsiveness

const CarouselSection = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 960);

  const [allowClick, setAllowClick] = useState(true);

  const mobileHandler = () => {
    setMobile(window.innerWidth <= 960);
  };

  const showScrollButton = () => {
    const scrollButton = document.querySelector(".carousel-scroll-btn");
    if (scrollButton) {
      if (window.scrollY >= window.innerHeight / 3 || !mobile) {
        scrollButton.style.opacity = "0";
        scrollButton.style.cursor = "default";
        setAllowClick(false);
      } else {
        scrollButton.style.opacity = "1";
        scrollButton.style.cursor = "pointer";
        setAllowClick(true);
      }
    }
  };

  const scrollHandler = () => {
    window.scrollBy({
      top: window.innerHeight / 2,
      left: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", showScrollButton);
  window.addEventListener("resize", mobileHandler);

  return (
    <>
      <div className="carousel-wrapper">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          swipeable={true}
          useKeyboardArrows={true}
        >
          <CarouselItem
            background="/images/2026Robot.jpg"
            gameImage="/images/2026GameLogo.png"
            alt="Alliance Photo"
            year="2026"
            robotName="Kirby"
            description="Our 2026 robot, Kirby, was designed to pick up and store large quantities of Fuel and then shoot that Fuel into the Hub with a turret that automatically adjusts its angle."
            robotImage="/images/2026RobotClose.jpeg"
            robotAlt="2026 Robot"
          />
          <CarouselItem
            background="/images/2025Robot2.jpeg"
            gameImage="/images/2025GameLogo.png"
            alt="Alliance Photo"
            year="2025"
            robotName="Barracuda"
            description="Our 2025 robot, Barracuda, was designed to pick up Coral from the Depot, remove Algae from the Reef, and drop Coral onto the Reef with a elevator to score on different levels."
            robotImage="/images/2025RobotClose2.jpeg"
            robotAlt="2025 Robot"
          />
          <CarouselItem
            background="/images/alliancePhoto.jpg"
            gameImage="/images/Crescendo_FRC_Logo.svg"
            alt="Alliance Photo"
            year="2024"
            robotName="Tuba"
            description="Our 2024 robot, Tuba, was designed to shoot notes into the high and low goals, climb the chains, and play defense."
            robotImage="/images/IMG_5927.jpg"
            robotAlt="2024 Robot"
          />
          <CarouselItem
            background="/images/2023alliancephoto.jpg"
            gameImage="/images/Charged_Up_Log.png"
            alt="Alliance Photo"
            year="2023"
            robotName="Neovenator"
            description="Our 2023 robot, Neovenator, was designed to place balls into the high and low poles, climb the charge station, and play defense."
            robotImage="/images/vision-systems.jpg"
            robotAlt="2023 Robot"
          />
          <CarouselItem
            background="/images/2022alliance.jpg"
            gameImage="/images/Rapid_React_Logo.svg"
            alt="Alliance Photo"
            year="2022"
            robotName="Banjo and Kazooie"
            description="Our 2022 robot, Infinite Recharge, was designed to shoot balls into the high and low goals, climb the generator switch, and play defense."
            robotImage="/images/2022robot.png"
            robotAlt="2022 Robot"
          />
          <CarouselItem
            background="/images/covid.jpg"
            gameImage="/images/infiniterecharge.png"
            alt="Alliance Photo"
            year="2021/2020"
            robotName="Das Boot"
            description="Our 2020 robot, Das Boot, was designed to shoot balls into the high and low goals, climb the generator switch, and play defense."
            robotImage="/images/dasboot.png"
            robotAlt="2021/2020 Robot"
          />
          <CarouselItem
            background="/images/moonplangoog.jpeg"
            gameImage="/images/bettedeepspace.png"
            alt="Alliance Photo"
            year="2019"
            robotName="Chunkytron"
            description="Our 2019 robot, Chunkytron, is not really named Chunkytron. It was designed to place panels and balls, climb the terrain, and play defense."
            robotImage="/images/vision-systemsnotnotnot.jpg"
            robotAlt="No Image :("
          />
          <CarouselItem
            background="/images/retrogramelevl.webp"
            gameImage="/images/powerupfrc.png"
            alt="Alliance Photo"
            year="2018"
            robotName="Ball Aerospace"
            description="Our 2018 robot, Ball Aerospace, is not really named Ball Aerospace. It was designed to place cubes, climb the generator terrain, and play defense."
            robotImage="/images/2018robot.png"
            robotAlt="2018 Robot"
          />
          <CarouselItem
            background="/images/evenbettershoppingcart.jpeg"
            gameImage="/images/steamworksfrc.png"
            alt="Alliance Photo"
            year="2017"
            robotName="Shopping Kart"
            description="Our 2017 robot, Shopping Kart, was designed to place gears, shoot balls, climb the tower, and play defense."
            robotImage="/images/2017robot.png"
            robotAlt="2017 Robot"
          />
          <CarouselItem
            background="/images/strongholdgam.jpeg"
            gameImage="/images/first-stronghold-logo-color-nb.png"
            alt="Alliance Photo"
            year="2016"
            robotName="Atlas"
            description="Our 2016 robot, Atlas was designed to shoot balls, navigate the terrain, and play defense."
            robotImage="/images/2016robot.png"
            robotAlt="2016 Robot"
          />
        </Carousel>
      </div>
      <button
        className="carousel-scroll-btn"
        onClick={mobile && allowClick ? scrollHandler : null}
      >
        <img src="/images/icons/keyboard_arrow_down.svg" alt="Scroll Down" />
      </button>
    </>
  );
};

export default CarouselSection;
