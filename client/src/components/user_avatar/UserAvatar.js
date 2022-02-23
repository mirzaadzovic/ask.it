import React from "react";
import "./UserAvatar.css";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const UserAvatar = ({ user }) => {
  return (
    <div className="userAvatar">
      <Avatar src={user?.avatarUrl} style={{ height: "3rem", width: "3rem" }} />
      <Link
        to={`/user/${user?.userId}`}
      >{`${user?.firstName} ${user?.lastName}`}</Link>
    </div>
  );
};

export default UserAvatar;
