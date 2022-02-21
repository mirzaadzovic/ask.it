import { IconButton } from "@mui/material";
import React, { useState } from "react";
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
}) => {
  const style = { color: "var(--black)" };
  const [increment, setIncrement] = useState(0);

  const handleClick = async () => {
    const data = {
      islike: isLike,
      userid: user.userId,
      questionid: questionId,
    };
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
    }

    setClicked(!clicked);
    if (otherClicked) {
      setOtherClicked(false);
    }
  };

  return (
    <div className="ratingOption">
      <Tooltip title={tooltip}>
        <IconButton onClick={handleClick}>
          <Icon className="app__icon" style={clicked ? style : null} />
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
