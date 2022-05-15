import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import websitelogo from "../../assets/websitelogo.png";
import { BsPerson } from "react-icons/bs";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={websitelogo} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="hello" to="/home">
          HOME
        </NavLink>
        <NavLink
          className="the-journey"
          exact="true"
          activeclassname="active"
          to="/journey"
        >
          <span>THE JOURNEY</span>
        </NavLink>
        <NavLink
          className="team"
          exact="true"
          activeclassname="active"
          to="/team"
        >
          TEAM
        </NavLink>
        <NavLink
          className="store"
          exact="true"
          activeclassname="active"
          to="/store"
        >
          STORE
        </NavLink>
        <NavLink
          className="contact"
          exact="true"
          activeclassname="active"
          to="/contact"
        >
          CONTACT
        </NavLink>
      </nav>
      <div className="account">
        <BsPerson
          style={{
            display: "inline-block",
            fontSize: "25px",
            margin: "2px",
            padding: "0px",
          }}
        />
        <div className="account">
          <span>Gagan</span>
        </div>
      </div>
    </div>
  );
};
