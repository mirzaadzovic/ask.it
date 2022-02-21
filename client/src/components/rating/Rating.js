import { IconButton } from "@mui/material";
import React, { useState } from "react";
import "./Rating.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import RatingOption from "../rating_option/RatingOption";
import { selectUser } from "../../redux/reducers/authReducer";
import { connect } from "react-redux";

const Rating = ({
  reactions = { likedByUsers: [], likes: 0, dislikes: 0 },
  user,
  questionId,
}) => {
  const { likedByUsers, likes, dislikes } = reactions;
  const isLiked = likedByUsers.filter((r) => r?.userId === user?.userId)[0]
    ?.isLike;

  let likeInitial = false;
  let dislikeInitial = false;
  if (isLiked === undefined) likeInitial = dislikeInitial = false;
  else if (isLiked) likeInitial = true;
  else if (!isLiked) dislikeInitial = true;

  const [like, setLike] = useState(likeInitial);
  const [dislike, setDislike] = useState(dislikeInitial);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [likeCount, setLikeCount] = useState(likes);

  return (
    <div className="rating">
      <RatingOption
        Icon={ThumbUpIcon}
        clicked={like}
        setClicked={setLike}
        otherClicked={dislike}
        setOtherClicked={setDislike}
        count={likeCount}
        tooltip={"Like"}
        questionId={questionId}
        isLike={true}
        setOtherCount={setDislikeCount}
      />
      <RatingOption
        Icon={ThumbDownIcon}
        clicked={dislike}
        setClicked={setDislike}
        otherClicked={like}
        setOtherClicked={setLike}
        count={dislikeCount}
        tooltip={"Dislike"}
        questionId={questionId}
        isLike={false}
        setOtherCount={setLikeCount}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: selectUser(state),
  };
};

export default connect(mapStateToProps, null)(Rating);
