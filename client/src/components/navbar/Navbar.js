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
import { selectUser } from "../../redux/reducers/authReducer";

const Navbar = ({ toggle, user }) => {
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
            <h5>username</h5>
            <Avatar src="https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/d3/33/f9/d333f96c-0c6b-b07c-ff59-700baac2cbc6/C6153D5A-E593-11E4-ADD3-9225ABE918F9.jpg/1200x1200bf-60.jpg" />
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
