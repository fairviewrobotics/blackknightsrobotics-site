import React from "react";
import "./styles/HomeBlurb.css";
import { Button } from "./Button";
import FadeInSection from "./FadeInSection";

//TODO: Fix mobile spacing weirdness

const HomeBlurb = (props) => {
  const [vertical, setVertical] = React.useState(false);

  const showVertical = () => {
    if (window.innerWidth <= 960) {
      setVertical(true);
    } else {
      setVertical(false);
    }
  };

  React.useEffect(() => {
    showVertical();
  });

  window.addEventListener("resize", showVertical);

  return (
    <div
      className={`blurb ${props.leftOrRight}`}
      style={{
        background: props.background,
      }}
    >
      {props.leftOrRight === "left" && !vertical ? (
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
              <Button
                buttonStyle={`btn--${props.buttonColor}`}
                linkTo={props.link}
              >
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
              <Button
                buttonStyle={`btn--${props.buttonColor}`}
                linkTo={props.link}
              >
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
