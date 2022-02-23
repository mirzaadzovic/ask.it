import React, { useEffect, useRef, useState } from "react";
import APIService from "../../services/APIService";
import Answer from "../answer/Answer";
import AnswerForm from "../answer_form/AnswerForm";
import LoadingSpinner from "../loading/Loading";
import "./AnswersContainer.css";

const AnswersContainer = ({ questionId }) => {
  const [answers, setAnswers] = useState([]);
  const [page, setPage] = useState(0); // answers pagination
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0); /*if new answer is added in a meantime, 
                                        we want to skip it when loading more answers*/
  const [loadingText, setLoadingText] = useState("Load more comments...");

  const fetchData = async () => {
    setLoading(true);

    const response = await APIService.getAll("/answers", {
      page,
      questionId,
      skip,
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
      <AnswerForm
        questionId={questionId}
        setAnswers={setAnswers}
        setSkip={setSkip}
      />
      {loading ? (
        <center style={{ padding: "20px" }}>
          <LoadingSpinner />
        </center>
      ) : (
        <p onClick={() => setPage(page + 1)}>{loadingText}</p>
      )}

      {answers.map((a) => (
        <Answer key={a?.answerId} answer={a} setAnswers={setAnswers} />
      ))}
    </div>
  );
};

export default AnswersContainer;
