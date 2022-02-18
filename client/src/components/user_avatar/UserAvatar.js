import React, { useEffect } from "react";
import "./UserAvatar.css";
import Avatar from "@mui/material/Avatar";

const UserAvatar = () => {
  return (
    <div className="userAvatar">
      <Avatar src="https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/d3/33/f9/d333f96c-0c6b-b07c-ff59-700baac2cbc6/C6153D5A-E593-11E4-ADD3-9225ABE918F9.jpg/1200x1200bf-60.jpg" />
      <h5>username</h5>
    </div>
  );
};

export default UserAvatar;
