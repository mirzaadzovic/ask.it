import { IconButton } from "@mui/material";
import React, { useState } from "react";
import "./RatingOption.css";

const RatingOption = ({
  Icon,
  clicked,
  setClicked,
  otherClicked,
  setOtherClicked,
  count,
}) => {
  const style = { color: "var(--black)" };

  const handleClick = () => {
    setClicked(!clicked);
    if (otherClicked) setOtherClicked(false);
  };

  return (
    <div className="ratingOption">
      <IconButton onClick={handleClick}>
        <Icon className="app__icon" style={clicked ? style : null} />
      </IconButton>
      <p>{clicked ? count + 1 : count}</p>
    </div>
  );
};

export default RatingOption;
