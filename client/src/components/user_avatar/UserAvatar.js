import React, { useEffect } from "react";
import "./UserAvatar.css";
import Avatar from "@mui/material/Avatar";

const UserAvatar = () => {
  return (
    <div className="userAvatar">
      <Avatar />
      <h5>username</h5>
    </div>
  );
};

export default UserAvatar;
