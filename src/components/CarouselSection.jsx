import React from "react";
import "./styles/CarouselSection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";

//TODO: Add all robot images and descriptions
//TODO: Implement mobile responsiveness

const CarouselSection = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        swipeable={true}
        useKeyboardArrows={true}
      >
        <CarouselItem
          background="/images/alliancePhoto.jpg"
          gameImage="/images/firstChamps.jpg"
          year="2020"
          robotName="Infinite Recharge"
          description="Our 2020 robot, Infinite Recharge, was designed to shoot balls into the high and low goals, climb the generator switch, and play defense."
          robotImage="/images/vision-systems.jpg"
        />
        <CarouselItem
          background="/images/alliancePhoto.jpg"
          gameImage="/images/firstChamps.jpg"
          year="2020"
          robotName="Infinite Recharge"
          description="Our 2020 robot, Infinite Recharge, was designed to shoot balls into the high and low goals, climb the generator switch, and play defense."
          robotImage="/images/vision-systems.jpg"
        />
        <CarouselItem
          background="/images/alliancePhoto.jpg"
          gameImage="/images/firstChamps.jpg"
          year="2020"
          robotName="Robot Name"
          description="Our 2020 robot, Infinite Recharge, was designed to shoot balls into the high and low goals, climb the generator switch, and play defense."
          robotImage="/images/vision-systems.jpg"
        />
        <CarouselItem
          background="/images/alliancePhoto.jpg"
          gameImage="/images/firstChamps.jpg"
          year="2020"
          robotName="Robot Name"
          description="Our 2020 robot, Infinite Recharge, was designed to shoot balls into the high and low goals, climb the generator switch, and play defense."
          robotImage="/images/vision-systems.jpg"
        />
        <CarouselItem
          background="/images/alliancePhoto.jpg"
          gameImage="/images/firstChamps.jpg"
          year="2020"
          robotName="Robot Name"
          description="Our 2020 robot, Infinite Recharge, was designed to shoot balls into the high and low goals, climb the generator switch, and play defense."
          robotImage="/images/vision-systems.jpg"
        />
        <CarouselItem
          background="/images/alliancePhoto.jpg"
          gameImage="/images/firstChamps.jpg"
          year="2020"
          robotName="Robot Name"
          description="Our 2020 robot, Infinite Recharge, was designed to shoot balls into the high and low goals, climb the generator switch, and play defense."
          robotImage="/images/vision-systems.jpg"
        />
        <CarouselItem
          background="/images/alliancePhoto.jpg"
          gameImage="/images/firstChamps.jpg"
          year="2020"
          robotName="Robot Name"
          description="Our 2020 robot, Infinite Recharge, was designed to shoot balls into the high and low goals, climb the generator switch, and play defense."
          robotImage="/images/vision-systems.jpg"
        />
        <CarouselItem
          background="/images/alliancePhoto.jpg"
          gameImage="/images/firstChamps.jpg"
          year="2020"
          robotName="Robot Name"
          description="Our 2020 robot, Infinite Recharge, was designed to shoot balls into the high and low goals, climb the generator switch, and play defense."
          robotImage="/images/vision-systems.jpg"
        />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
