import React from "react";
import UserAvatar from "../user_avatar/UserAvatar";
import "./UserTop3.css";

const UserTop3 = ({ rating, count, Component, question }) => {
  return (
    <div className="userTop5">
      <div className="userTop5__left">
        <p>{rating}</p>
        {question ? (
          <Component question={question} />
        ) : (
          <Component className="userTop5__avatar" />
        )}
      </div>
      <div className="userTop5__right">
        <p>{count}</p>
      </div>
    </div>
  );
};

export default UserTop3;
