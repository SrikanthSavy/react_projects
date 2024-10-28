import React from "react";
import "./Navbar.css";
import Fire from "../../assets/images/fire.png";
import Star from "../../assets/images/star.png";
import Party from "../../assets/images/partying-face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <a href="#popular">
          {"Popular"}
          <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </a>
        <a href="#top_rated">
          {"Top Rated"}
          <img src={Star} alt="start emoji" className="navbar_emoji" />
        </a>
        <a href="#upcoming">
          {"Upcoming"}
          <img src={Party} alt="party emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
