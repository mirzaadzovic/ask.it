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
import { selectUser } from "../../redux/reducers/authReducer";
import { useSelector } from "react-redux";

const Question = ({ question }) => {
  const loggedInUser = useSelector(selectUser);

  const { questionId, questionDate, questionText, user, reactions } = question;

  return (
    <div className="question app__card">
      <div className="question__header">
        <UserAvatar user={user} />

        {loggedInUser?.userId === user?.userId && (
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
        )}
      </div>
      <Link to={`/question/${questionId}`} className="question__time">
        <ReactTimeAgo date={new Date(questionDate)} />
      </Link>
      <p className="question__text">{questionText}</p>
      <Rating reactions={reactions} questionId={questionId} />
      {loggedInUser && <AnswerForm />}
    </div>
  );
};

export default Question;
