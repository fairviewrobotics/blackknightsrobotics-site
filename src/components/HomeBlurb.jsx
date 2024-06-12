import React from "react";
import "./HomeBlurb.css";
import { Button } from "./Button";
import FadeInSection from "./FadeInSection";

const HomeBlurb = (props) => {
  return (
    <div
      className={`blurb ${props.leftOrRight}`}
      style={{
        background: props.background,
      }}
    >
      {props.leftOrRight === "left" ? (
        <>
          <div className={`image`}>
            <img src={props.image} alt={props.alt} />
          </div>

          <div className={`text`} style={{ color: props.text }}>
            <FadeInSection left="right" className="fadeSec">
              <h1>{props.header}</h1>
              <p>{props.paragraph}</p>
            </FadeInSection>
            <FadeInSection left="right">
              <Button buttonStyle={`btn--${props.buttonColor}`}>
                {props.buttonText}
              </Button>
            </FadeInSection>
          </div>
        </>
      ) : (
        <>
          <div className={`text`} style={{ color: props.text }}>
            <FadeInSection left="left">
              <h1>{props.header}</h1>
              <p>{props.paragraph}</p>
            </FadeInSection>
            <FadeInSection left="left">
              <Button buttonStyle={`btn--${props.buttonColor}`}>
                {props.buttonText}
              </Button>
            </FadeInSection>
          </div>
          <div className={`image`}>
            <img src={props.image} alt={props.alt} />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeBlurb;