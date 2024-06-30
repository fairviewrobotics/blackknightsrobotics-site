import "../../App.css";
import News from "../News";
import HeroSection from "../HeroSection";

import React from "react";
import HomeBlurb from "../HomeBlurb";

const Home = () => {
  return (
    <>
      <HeroSection />

      <HomeBlurb
        header="About Our Team"
        paragraph="Founded in 2007, Black Knights Robotics is a FIRST Robotics Competition team based in Boulder, Colorado. Our team is made up of students from various high schools in the Boulder Valley School District, and we are dedicated to inspiring young people to be science and technology leaders by engaging them in exciting programs that build science, engineering, and technology skills that inspire innovation and foster well-rounded life capabilities."
        image="/images/colorado2024fullteam.JPG"
        background="#cccccc"
        leftOrRight="right"
        text="#313131"
        buttonText="Learn More"
        buttonColor="black"
        id="learn-more-redirect"
      />

      <HomeBlurb
        header="What is FIRST?"
        paragraph="FIRST (For Inspiration and Recognition of Science and Technology) is a global robotics community preparing young people for the future. Its mission is to inspire young people to be leaders and innovators in science and technology through mentor-based programs that build skills, inspire innovation, and foster self-confidence, communication, and leadership."
        image="/images/firstChamps.jpg"
        background="#ab4545"
        leftOrRight="left"
        text="#242424"
        buttonText="Check out FIRST"
        buttonColor="black"
        link="https://www.firstinspires.org/"
      />

      <HomeBlurb
        header="Our Members"
        paragraph="Our team consists of students from various high schools in the Boulder Valley School District, bringing together diverse interests and skills in programming, mechanical engineering, electrical engineering, business, and more. Our dedicated mentors support students in learning and growing in their areas of interest."
        image="/images/members.jpg"
        background="#000000"
        leftOrRight="right"
        text="#939393"
        buttonText="Join Us"
        buttonColor="white"
      />

      <News />
    </>
  );
};

export default Home;
