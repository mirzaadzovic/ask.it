import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./RatingOption.css";
import Tooltip from "@mui/material/Tooltip";
import { selectUser } from "../../redux/reducers/authReducer";
import { connect } from "react-redux";
import APIService from "../../services/APIService";

const RatingOption = ({
  Icon,
  clicked,
  setClicked,
  otherClicked,
  setOtherClicked,
  count,
  tooltip,
  user,
  questionId,
  isLike,
  setOtherCount,
}) => {
  const style = { color: "var(--black)" };
  const [increment, setIncrement] = useState(0);

  const submit = async (data) => {
    // Check which method will be executed
    if (!clicked && !otherClicked) {
      const reaction = await APIService.post("/reactions", data);
      setIncrement(increment + 1);
    } else if (clicked && !otherClicked) {
      const reaction = await APIService.delete(
        "/reactions/" + questionId,
        questionId
      );
      setIncrement(increment - 1);
    } else if (!clicked && otherClicked) {
      const reaction = await APIService.put("/reactions/" + questionId, {
        question: questionId,
        userid: user.userId,
      });

      // Doing UI like/dislike count updates
      if (clicked) {
        setOtherCount((prev) => prev + 1);
        setIncrement(increment - 1);
      } else {
        setOtherCount((prev) => prev - 1);
        setIncrement(increment + 1);
      }
    }
  };
  const handleClick = async () => {
    const data = {
      islike: isLike,
      userid: user.userId,
      questionid: questionId,
    };

    await submit(data);

    setClicked(!clicked);
    if (otherClicked) {
      setOtherClicked(false);
    }
  };

  return (
    <div className="ratingOption">
      <Tooltip title={tooltip}>
        <IconButton onClick={handleClick} disabled={!user}>
          <Icon className="app__icon" style={clicked && user ? style : null} />
        </IconButton>
      </Tooltip>
      <p>{count + increment}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: selectUser(state),
  };
};

export default connect(mapStateToProps, null)(RatingOption);
