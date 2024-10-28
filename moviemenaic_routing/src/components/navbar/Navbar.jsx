import React from "react";
import "./Navbar.css";
import Fire from "../../assets/images/fire.png";
import Star from "../../assets/images/star.png";
import Party from "../../assets/images/partying-face.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <NavLink to="/">
          {"Popular"}
          <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </NavLink>
        <NavLink to="/top_rated">
          {"Top Rated"}
          <img src={Star} alt="start emoji" className="navbar_emoji" />
        </NavLink>
        <NavLink to="/upcoming">
          {"Upcoming"}
          <img src={Party} alt="party emoji" className="navbar_emoji" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
