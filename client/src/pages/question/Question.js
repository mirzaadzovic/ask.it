import React from "react";
import QuestionComponent from "../../components/question/Question";

const Question = ({ question }) => {
  return (
    <div className="app__questions">
      <QuestionComponent />
    </div>
  );
};

export default Question;
