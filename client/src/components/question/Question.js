import React from "react";
import Rating from "../rating/Rating";
import UserAvatar from "../user_avatar/UserAvatar";
import "./Question.css";

const Question = () => {
  return (
    <div className="question app__card">
      <UserAvatar />
      <p className="question__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis
        veritatis pariatur nam culpa soluta quibusdam quam eligendi reiciendis
        repellat sed excepturi provident illum assumenda odio minus, doloribus
        odit. Tempora expedita assumenda eum ipsam?
      </p>
      <Rating />
    </div>
  );
};

export default Question;
