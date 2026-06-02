import React from "react";
import "./styles/Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--black", "btn--white"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  linkTo,
  target,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const isExternal = linkTo && (linkTo.startsWith("http://") || linkTo.startsWith("https://"));
  const finalTarget = target !== undefined ? target : (isExternal ? "_blank" : undefined);

  return (
    <Link to={linkTo ? linkTo : "/"} target={finalTarget} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

