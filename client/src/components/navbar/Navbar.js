import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";
import UserAvatar from "../user_profile/UserAvatar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      <div className="navbar__options">
        {/* <div className="navbar__optionsLogin">
          <Link className="navbar__link" to="/login">
            Login
          </Link>
          <Link className="navbar__link" to="/register">
            Register
          </Link>
        </div> */}
        <div className="navbar__optionsUser">
          <UserAvatar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
