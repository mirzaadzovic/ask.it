import { IconButton } from "@mui/material";
import React, { useState } from "react";
import "./RatingOption.css";
import Tooltip from "@mui/material/Tooltip";

const RatingOption = ({
  Icon,
  clicked,
  setClicked,
  otherClicked,
  setOtherClicked,
  count,
  tooltip,
}) => {
  const style = { color: "var(--black)" };

  const handleClick = () => {
    setClicked(!clicked);
    if (otherClicked) setOtherClicked(false);
  };

  return (
    <div className="ratingOption">
      <Tooltip title={tooltip}>
        <IconButton onClick={handleClick}>
          <Icon className="app__icon" style={clicked ? style : null} />
        </IconButton>
      </Tooltip>
      <p>{clicked ? count + 1 : count}</p>
    </div>
  );
};

export default RatingOption;
