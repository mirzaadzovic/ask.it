import React, { useEffect, useRef, useState } from "react";
import APIService from "../../services/APIService";
import Answer from "../answer/Answer";
import AnswerForm from "../answer_form/AnswerForm";
import LoadingSpinner from "../loading/Loading";
import "./AnswersContainer.css";

const AnswersContainer = ({ questionId }) => {
  const [answers, setAnswers] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Load more comments...");

  const fetchData = async () => {
    setLoading(true);

    const response = await APIService.getAll("/answers", {
      page,
      questionId,
    }).catch((err) => null);

    if (!response.length) setLoadingText("");
    else if (response) setAnswers([...response, ...answers]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [setAnswers, setLoading, page]);

  return (
    <div className="answersContainer">
      <AnswerForm questionId={questionId} setAnswers={setAnswers} />
      {loading ? (
        <center style={{ padding: "20px" }}>
          <LoadingSpinner />
        </center>
      ) : (
        <p onClick={() => setPage(page + 1)}>{loadingText}</p>
      )}

      {answers.map((a) => (
        <Answer key={a?.answerId} answer={a} />
      ))}
    </div>
  );
};

export default AnswersContainer;
