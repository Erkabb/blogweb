import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[500px] flex flex-col bg-gray-200 pt-10">
      <div className="w-full flex gap-20 justify-evenly ">
        <div className="flex flex-col gap-5 w-[280px]">
          <h1 className="text-lg">
            <strong>About</strong>
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniamz
          </p>
          <ul className="text-gray-900">
            <li>Email : info@jstemplate.net</li>
            <li>Phone : 880 123 456 789</li>
          </ul>
        </div>
        <div>
          <ul className="text-gray-700">
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="w-[1280px] flex justify-between items-center m-auto bor p-5">
        <img
          src="/images/Copyright.png"
          alt="g"
          className="w-[231px] h-[54px]"
        />
        <ul className="list flex gap-5">
          <li>Terms of Use</li>|<li>Privacy Policy</li>|<li>Cookie policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
