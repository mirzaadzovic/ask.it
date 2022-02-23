import { Avatar } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import APIService from "../../services/APIService";
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
        <div key={a?.answerId} className="answersContainer__answer">
          <Avatar
            src={a?.user.avatarUrl}
            style={{ height: "2rem", width: "2rem" }}
          />
          <div className="answersContainer__answerBody">
            <strong>{`${a?.user?.firstName} ${a?.user?.lastName}`}</strong>
            <p>{a?.answerText}</p>
            <ReactTimeAgo
              date={new Date(a?.answerDate)}
              className="answersContainer__time"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnswersContainer;
