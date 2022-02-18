import React from "react";
import "./Dropdown.css";
import PersonIcon from "@mui/icons-material/Person";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { closeDropdown } from "../../redux/actions/dropdownActions";

const Dropdown = ({ close }) => {
  return (
    <div className="dropdown card">
      <ul className="list-group list-group-flush ">
        <li onClick={close} className="dropdown__item list-group-item">
          <PersonIcon className="dropdown__icon" />
          <Link to="my-profile">My profile</Link>
        </li>
        <li onClick={close} className="dropdown__item list-group-item">
          <QuizIcon className="dropdown__icon" />
          <Link to="my-questions">My questions</Link>
        </li>
        <li onClick={close} className="dropdown__item list-group-item">
          <LogoutIcon className="dropdown__icon" />
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => {
      dispatch(closeDropdown());
    },
  };
};
export default connect(null, mapDispatchToProps)(Dropdown);
