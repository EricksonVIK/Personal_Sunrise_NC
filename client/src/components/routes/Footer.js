import React from "react";
import { Link } from "@mui/material";
import email from "../../assets/images/email-icon.png";

export default function footer() {
  return (
    <footer>
      <a className="footerLink">
        <Link href="/calendar" underline="hover">
          Calendar Request
        </Link>
      </a>
      {/* <p>or find us at</p> */}
      <a className="footerLink">
        <Link
          href="https://www.airbnb.com/rooms/655279772147097701"
          underline="hover"
          rel="noreferrer"
          target="_blank"
        >
          AirBNB
        </Link>{" "}
      </a>
      <a className="footerLink">
        <Link
          href="https://www.vrbo.com/2879508"
          underline="hover"
          rel="noreferrer"
          target="_blank"
        >
          VRBO
        </Link>
      </a>
      <Link
        href="mailto:chris@personalsunrisenc.com?subject=Personal Sunrise Inquiry"
        underline="hover"
        rel="noreferrer"
      >
        <img className="footer-icon" src={`${email}`} alt="email icon"></img>
      </Link>
    </footer>
  );
}
