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
        paragraph="HighTide Robotics, founded in 2018, provides opportunities for high school students from all around Ventura County, CA to participate in a competitive and meaningful way through the FIRST robotics competition. Students learn career-oriented skills in engineering, design, mathematics, computer science, and are inspired by industry professional mentors and FRC alumni dedicated to helping foster a competitive FRC team and educating team members."
        image="/images/alliancePhoto.jpg"
        background="#cccccc"
        leftOrRight="right"
        text="#313131"
        buttonText="Learn More"
        buttonColor="black"
      />

      <HomeBlurb
        header="What is FIRST?"
        paragraph="HighTide Robotics, founded in 2018, provides opportunities for high school students from all around Ventura County, CA to participate in a competitive and meaningful way through the FIRST robotics competition. Students learn career-oriented skills in engineering, design, mathematics, computer science, and are inspired by industry professional mentors and FRC alumni dedicated to helping foster a competitive FRC team and educating team members."
        image="/images/img-3.jpg"
        background="#ab4545"
        leftOrRight="left"
        text="#242424"
        buttonText="Check out FIRST"
        buttonColor="black"
      />

      <HomeBlurb
        header="Our Members"
        paragraph="HighTide Robotics, founded in 2018, provides opportunities for high school students from all around Ventura County, CA to participate in a competitive and meaningful way through the FIRST robotics competition. Students learn career-oriented skills in engineering, design, mathematics, computer science, and are inspired by industry professional mentors and FRC alumni dedicated to helping foster a competitive FRC team and educating team members."
        image="/images/img-4.jpg"
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
