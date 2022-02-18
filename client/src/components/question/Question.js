import React from "react";
import Rating from "../rating/Rating";
import UserAvatar from "../user_avatar/UserAvatar";
import ReactTimeAgo from "react-time-ago";
import "./Question.css";
import { Link } from "react-router-dom";
import AnswerForm from "../answer_form/AnswerForm";

const Question = () => {
  return (
    <div className="question app__card">
      <UserAvatar />
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
