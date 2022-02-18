import { IconButton } from "@mui/material";
import React, { useState } from "react";
import "./Rating.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import RatingOption from "../rating_option/RatingOption";

const Rating = () => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  return (
    <div className="rating">
      <RatingOption
        Icon={ThumbUpIcon}
        clicked={like}
        setClicked={setLike}
        otherClicked={dislike}
        setOtherClicked={setDislike}
        count={43}
        tooltip={"Like"}
      />
      <RatingOption
        Icon={ThumbDownIcon}
        clicked={dislike}
        setClicked={setDislike}
        otherClicked={like}
        setOtherClicked={setLike}
        count={23}
        tooltip={"Dislike"}
      />
    </div>
  );
};

export default Rating;
