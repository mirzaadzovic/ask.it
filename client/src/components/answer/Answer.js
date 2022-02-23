import React from "react";
import ReactTimeAgo from "react-time-ago";
import { Avatar } from "@mui/material";
import "./Answer.css";
import AnswerReactionInsertDto from "../../models/AnswerReactionInsertDto";
import Rating from "../rating/Rating";

const Answer = ({ answer }) => {
  const { answerId, reactions, answerText, answerDate } = answer;
  const { firstName, lastName, avatarUrl } = answer?.user;
  return (
    <div key={answerId} className="answer">
      <Avatar src={avatarUrl} style={{ height: "2rem", width: "2rem" }} />
      <div className="answer__body">
        <strong>{`${firstName} ${lastName}`}</strong>
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
