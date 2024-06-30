import React, { useState, useRef, useEffect } from "react";
import "./styles/FadeInSection.css";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();
  window.onload = () => {
    setVisible(true);
  };

  useEffect(() => {
    if (domRef.current === null) return;
    if (window.IntersectionObserver === undefined) return;
    let domRefCurrent = domRef.current;

    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        try {
          observer.unobserve(domRefCurrent);
        } catch (error) {
          console.error(error);
        }
      }
    });

    observer.observe(domRefCurrent);

    return () => {
      try {
        // eslint-disable-next-line
        observer.unobserve(domRef.current);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section-${props.left === "left" ? "left" : "right"} ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {props.children}
    </div>
  );
}
