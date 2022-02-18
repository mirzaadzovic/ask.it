import React from "react";
import Rating from "../rating/Rating";
import UserAvatar from "../user_avatar/UserAvatar";
import ReactTimeAgo from "react-time-ago";
import CloseIcon from "@mui/icons-material/Close";
import "./Question.css";
import { Link } from "react-router-dom";
import AnswerForm from "../answer_form/AnswerForm";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";

const Question = () => {
  return (
    <div className="question app__card">
      <div className="question__header">
        <UserAvatar />
        <div className="question__controls">
          <Tooltip title="Edit">
            <IconButton>
              <EditIcon className="app__icon" />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Delete"}>
            <IconButton>
              <CloseIcon className="app__icon" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <Link to="question/" className="question__time">
        <ReactTimeAgo date={new Date("2022-02-18 12:43:39.848+01")} />
      </Link>
      <p className="question__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis
        veritatis pariatur nam culpa soluta quibusdam quam eligendi reiciendis
        repellat sed excepturi provident illum assumenda odio minus, doloribus
        odit. Tempora expedita assumenda eum ipsam?
      </p>
      <Rating />
      <AnswerForm />
    </div>
  );
};

export default Question;
