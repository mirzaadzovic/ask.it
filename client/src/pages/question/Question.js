import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/loading/Loading";
import QuestionComponent from "../../components/question/Question";
import APIService from "../../services/APIService";

const Question = () => {
  const params = useParams();
  const [question, setQuestion] = useState(null);
  useEffect(async () => {
    const response = await APIService.getById("/questions", params["*"]);
    setQuestion(response);
  }, [setQuestion, params]);
  return (
    <div className="app__questions">
      {question ? (
        <QuestionComponent question={question} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Question;
