import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTwitch, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/" className="text-primary hover:text-highlight"><FaFacebook /></a>
          <a href="https://www.instagram.com/" className="text-primary hover:text-highlight"><FaInstagram /></a>
          <a href="https://twitter.com/" className="text-primary hover:text-highlight"><FaTwitter /></a>
          <a href="https://www.twitch.tv/" className="text-primary hover:text-highlight"><FaTwitch /></a>
          <a href="https://github.com/" className="text-primary hover:text-highlight"><FaGithub /></a>
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <button onClick={() => navigate('/')} className="text-secondary hover:text-primary">Home</button>
          <button onClick={() => navigate('/about')} className="text-secondary hover:text-primary">About</button>
          <button onClick={() => navigate('/privacy-policy')} className="text-secondary hover:text-primary">Privacy & Policy</button>
          <button onClick={() => navigate('/our-team')} className="text-secondary hover:text-primary">Team</button>
          <button onClick={() => navigate('/contact')} className="text-secondary hover:text-primary">Contact</button>
        </div>
        <div className="text-center text-secondary">
          <p>&copy; 2024 Maverick Trails. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
