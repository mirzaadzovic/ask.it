import React, { useState } from "react";
import APIService from "../../services/APIService";
import topHOC from "../top_hoc/TopHoc";
import UserAvatar from "../user_avatar/UserAvatar";
import "./MostAnswers.css";

const MostAnswers = () => {
  const [users, setUsers] = useState(null);

  useState(async () => {
    const response = await APIService.getAll("/users/top-responders");
    console.log(response);
    setUsers(response);
  }, []);
  const Component = topHOC(UserAvatar, "Top 3 responders", users);
  return <Component />;
};

export default MostAnswers;
