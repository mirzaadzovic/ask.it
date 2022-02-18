import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";
import UserAvatar from "../user_avatar/UserAvatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { connect } from "react-redux";
import { toggleDropdown } from "../../redux/actions/dropdownActions";

const Navbar = ({ toggle }) => {
  return (
    <div className="navbar">
      <Link className="navbar__logo" to="/">
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

        <div className="navbar__optionsUser" onClick={(e) => toggle(e)}>
          <UserAvatar />
          <ArrowDropDownIcon className="app__icon" />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (e) => {
      e.stopPropagation();
      dispatch(toggleDropdown());
    },
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
