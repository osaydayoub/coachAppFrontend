import React from "react";
import "./Footer.css";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { AiOutlineCopyright } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer-container">
      <p>
        <AiOutlineCopyright /> Copyright Mohammad Ayoub 2024
      </p>

      <div className="icon-list">
        <a href="https://www.instagram.com/ayoubm990/?utm_source=qr&igsh=MXJqeWo2OW9ueHk4eA%3D%3D">
          <FaSquareInstagram />
        </a>
        <RxDividerVertical />
        <a href="https://wa.me/972549961614">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default Footer;
