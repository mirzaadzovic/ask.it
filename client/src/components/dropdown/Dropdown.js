import React from "react";
import "./Dropdown.css";
import PersonIcon from "@mui/icons-material/Person";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { closeDropdown } from "../../redux/actions/dropdownActions";
import { logout } from "../../redux/actions/authActions";
import { selectUser } from "../../redux/reducers/authReducer";

const Dropdown = ({ close, logoutUser, user }) => {
  const onLogout = () => {
    close();
    logoutUser();
  };
  return (
    <div className="dropdown card">
      <ul className="list-group list-group-flush ">
        <li onClick={close} className="list-group-item">
          <Link className="dropdown__item" to="my-profile">
            <PersonIcon className="dropdown__icon" />
            <p>My profile</p>
          </Link>
        </li>
        <li onClick={close} className="list-group-item">
          <Link className="dropdown__item" to={`/user/${user.userId}`}>
            <QuizIcon className="dropdown__icon" />
            <p>My questions</p>
          </Link>
        </li>
        <li onClick={onLogout} className="list-group-item">
          <Link className="dropdown__item" to="/">
            <LogoutIcon className="dropdown__icon" />
            <p>Logout</p>
          </Link>
        </li>
      </ul>
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
    close: () => {
      dispatch(closeDropdown());
    },
    logoutUser: () => {
      dispatch(logout());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
