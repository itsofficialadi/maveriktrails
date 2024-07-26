import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTwitch, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/" className="text-primary hover:text-highlight"><FaFacebook /></a>
          <a href="https://www.instagram.com/" className="text-primary hover:text-highlight"><FaInstagram /></a>
          <a href="https://twitter.com/" className="text-primary hover:text-highlight"><FaTwitter /></a>
          <a href="https://www.twitch.tv/" className="text-primary hover:text-highlight"><FaTwitch /></a>
          <a href="https://github.com/" className="text-primary hover:text-highlight"><FaGithub /></a>
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <a href="/" className="text-secondary hover:text-primary">Home</a>
          <a href="/about" className="text-secondary hover:text-primary">About</a>
          <a href="#" className="text-secondary hover:text-primary">Services</a>
          <a href="/our-team" className="text-secondary hover:text-primary">Team</a>
          <a href="#" className="text-secondary hover:text-primary">Contact</a>
        </div>
        <div className="text-center text-secondary">
          <p>&copy; 2024 MaverickTrails. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
