import React from "react";
import topHOC from "../top_hoc/TopHoc";
import UserAvatar from "../user_avatar/UserAvatar";
import "./MostAnswers.css";

const MostAnswers = () => {
  const Component = topHOC(UserAvatar, [16, 13, 8], "Top 3 responders");
  return <Component />;
};

export default MostAnswers;
