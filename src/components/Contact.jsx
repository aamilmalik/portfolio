import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="conteiner contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://instagram.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://facebook.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://linkedin.com/in/aamil-malik-02699a205"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a href="https://twitter.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a
            href="https://github.com/aamilmalik"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:aamilmalik122@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
