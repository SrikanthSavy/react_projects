import React from "react";
import "./Navbar.css";
import rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import order from "../../assets/package.png";
import lock from "../../assets/locked.png";
import LinkwithIcon from "./LinkwithIcon";

const Navbar = () => {
  return (
    <nav className=" align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">CartWish</h1>
        <form className=" align_center navbar_form">
          <input
            type="text"
            className="align_center navbar_search"
            placeholder="Search Products"
          />
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <LinkwithIcon title="Home" link="/" emoji={rocket} />
        <LinkwithIcon title="Products" link="/product" emoji={star} />
        <LinkwithIcon title="LogIn" link="/login" emoji={idButton} />
        <LinkwithIcon title="SignUp" link="/signup" emoji={memo} />
        <LinkwithIcon title="My Orders" link="/myorders" emoji={order} />
        <LinkwithIcon title="Logout" link="/logout" emoji={lock} />

        <a href="/cart" className="align_center">
          {"Cart"}
          <p className="align_center cart_counts">0</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
