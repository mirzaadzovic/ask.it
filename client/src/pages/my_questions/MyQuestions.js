import React from "react";
import QuestionsContainer from "../../components/questions_container/QuestionsContainer";
import "./MyQuestions.css";

const MyQuestions = () => {
  return (
    <div className="myQuestions app__questions">
      <QuestionsContainer userId={1} />
    </div>
  );
};

export default MyQuestions;
