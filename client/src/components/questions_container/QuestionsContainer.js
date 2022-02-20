import React from "react";
import Question from "../question/Question";
import QuestionForm from "../question__form/QuestionForm";
import "./QuestionsContainer.css";

const QuestionsContainer = ({ userId = null }) => {
  return (
    <div className="questionsContainer">
      {!userId && <QuestionForm />}
      <div className="questionsContainer__questions">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
};

export default QuestionsContainer;
