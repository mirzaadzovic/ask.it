import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuestionsContainer from "../../components/questions_container/QuestionsContainer";
import { selectUser } from "../../redux/reducers/authReducer";
import "./MyQuestions.css";

const MyQuestions = ({ userId }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <div className="myQuestions app__questions">
      <div className="myQuestions__info app__card">
        <Avatar
          className="myQuestions__avatar"
          src={user.avatarUrl}
          style={{ height: "4rem", width: "4rem" }}
        />
        <p>
          {user.firstName} {user.lastName}
        </p>
      </div>
      <QuestionsContainer userId={userId} />
    </div>
  );
};

export default MyQuestions;
