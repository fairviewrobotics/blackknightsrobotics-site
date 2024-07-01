import React from "react";
import "./styles/Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-media-wrapper">
        <Link
          className="social-icon-link youtube"
          to="https://www.youtube.com/@fairviewrobotics7830"
          target="_blank"
          aria-label="Youtube"
        >
          <img src="/images/logos/youtubeIconWhite.png" alt="Youtube"></img>
        </Link>
        <Link
          className="social-icon-link instagram"
          to="https://www.instagram.com/blackknights2036/"
          target="_blank"
          aria-label="Instagram"
        >
          <img src="/images/logos/instagramIconWhite.png" alt="Instagram"></img>
        </Link>
        <Link
          className="social-icon-link github"
          to="https://github.com/fairviewrobotics"
          target="_blank"
          aria-label="Github"
        >
          <img src="/images/logos/githubIconWhite.png" alt="Github"></img>
        </Link>
        <Link
          className="social-icon-link tba"
          to="https://www.thebluealliance.com/team/2036"
          target="_blank"
          aria-label="TBA"
        >
          <img src="/images/logos/theblueallianceIconWhite.png" alt="TBA"></img>
        </Link>
      </div>

      <div className="contact-us-wrapper">
        <div className="contact-us">
          <h1>Contact Us</h1>
          <h6>——————</h6>
          <p className="blackKnightsEmail">
            <a href="mailto: blackknights2036@gmail.com ?subject=Black Knights Robotics Inquiry">
              blackknights2036@gmail.com
            </a>
          </p>
          <p>5765 Arapahoe Ave</p>
          <p>Boulder, CO 80303</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6111.33786500302!2d-105.22148902403671!3d40.015842071506825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf209dafc1545%3A0x336d7ed6ebd6a0b6!2s5765%20Arapahoe%20Ave%2C%20Boulder%2C%20CO%2080303!5e0!3m2!1sen!2sus!4v1718148265385!5m2!1sen!2sus"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
          ></iframe>
        </div>
        <div className="input-areas">
          <form className="form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="footer-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="footer-input"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="footer-input"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="footer-input-big"
            />

            <Button buttonStyle="btn--outline">Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
