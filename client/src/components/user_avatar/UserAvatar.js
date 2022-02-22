import React from "react";
import "./UserAvatar.css";
import Avatar from "@mui/material/Avatar";

const UserAvatar = ({ user }) => {
  return (
    <div className="userAvatar">
      <Avatar src={user?.avatarUrl} />
      <h5>{`${user?.firstName} ${user?.lastName}`}</h5>
    </div>
  );
};

export default UserAvatar;
