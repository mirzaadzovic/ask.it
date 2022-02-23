import React from "react";
import ReactTimeAgo from "react-time-ago";
import { Avatar, IconButton } from "@mui/material";
import "./Answer.css";
import AnswerReactionInsertDto from "../../models/AnswerReactionInsertDto";
import Rating from "../rating/Rating";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/authReducer";
import { Tooltip } from "@mui/material";
import APIService from "../../services/APIService";
import { Link } from "react-router-dom";

const Answer = ({ answer, setAnswers }) => {
  const user = useSelector(selectUser);
  const { answerId, reactions, answerText, answerDate } = answer;
  const { userId, firstName, lastName, avatarUrl } = answer?.user;

  const handleDelete = async () => {
    await APIService.delete("/answers/" + answerId);
    setAnswers((prevState) => prevState.filter((r) => r.answerId !== answerId));
  };
  return (
    <div key={answerId} className="answer">
      <Avatar src={avatarUrl} style={{ height: "2rem", width: "2rem" }} />
      <div className="answer__body">
        <div className="answer__bodyHeader">
          <Link to={`/user/${userId}`}>{`${firstName} ${lastName}`}</Link>
          {user.userId === userId && (
            <Tooltip title="Delete">
              <IconButton className="answer__delete" onClick={handleDelete}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
        <p>{answerText}</p>
        <Rating
          reactions={reactions}
          questionId={answerId}
          Model={AnswerReactionInsertDto}
          route={"/answer-reactions"}
        />
        <ReactTimeAgo date={new Date(answerDate)} className="answer__time" />
      </div>
    </div>
  );
};

export default Answer;
