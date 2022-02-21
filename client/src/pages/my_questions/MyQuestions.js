import React from "react";
import QuestionsContainer from "../../components/questions_container/QuestionsContainer";
import "./MyQuestions.css";

const MyQuestions = ({ userId }) => {
  return (
    <div className="myQuestions app__questions">
      <QuestionsContainer userId={userId} />
    </div>
  );
};

export default MyQuestions;
