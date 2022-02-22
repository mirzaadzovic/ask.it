import { Avatar } from "@mui/material";
import React from "react";
import "./UserTop3.css";

const UserTop3 = ({ rating, count, Component, question, user }) => {
  return (
    <div className="userTop5">
      <div className="userTop5__left">
        <p>{rating}</p>
        {!user?.avatarUrl ? (
          <Component question={question} />
        ) : (
          <div className="userAvatar">
            <Avatar src={user?.avatarUrl} />
            <h5>{`${user?.firstName} ${user?.lastName}`}</h5>
          </div>
        )}
      </div>
      <div className="userTop5__right">
        <p>{count}</p>
      </div>
    </div>
  );
};

export default UserTop3;
