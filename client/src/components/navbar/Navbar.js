import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";
import UserAvatar from "../user_avatar/UserAvatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { connect } from "react-redux";
import { toggleDropdown } from "../../redux/actions/dropdownActions";
import { Avatar } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import {
  selectUser,
  selectUserFullName,
} from "../../redux/reducers/authReducer";

const Navbar = ({ toggle, user, name }) => {
  return (
    <div className="navbar">
      <Link className="navbar__logo" to="/">
        <Logo />
      </Link>
      <div className="navbar__options">
        {!user ? (
          <div className="navbar__optionsLogin">
            <Link className="navbar__link" to="/login">
              <LoginIcon className="navbar__icon" />
              Login
            </Link>
            <Link className="navbar__link" to="/register">
              <PersonIcon className="navbar__icon" />
              Register
            </Link>
          </div>
        ) : (
          <div className="navbar__optionsUser" onClick={(e) => toggle(e)}>
            <h5>{name}</h5>
            <Avatar src={user.avatarUrl} />
            <ArrowDropDownIcon className="app__icon" />
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: selectUser(state),
    name: selectUserFullName(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (e) => {
      e.stopPropagation();
      dispatch(toggleDropdown());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
