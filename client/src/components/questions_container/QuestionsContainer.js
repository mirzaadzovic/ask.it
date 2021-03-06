import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import {
  getQuestions,
  resetQuestions,
} from "../../redux/actions/questionsActions";
import { selectUser } from "../../redux/reducers/authReducer";
import { selectQuestionsLoading } from "../../redux/reducers/questionsReducer";
import LoadingSpinner from "../loading/Loading";
import Question from "../question/Question";
import QuestionForm from "../question__form/QuestionForm";
import "./QuestionsContainer.css";

const QuestionsContainer = ({
  userId = null,
  user,
  fetchQuestions,
  isLoading,
}) => {
  const [pages, setPages] = useState(0);
  const [questions, setQuestions] = useState(null);

  useEffect(async () => {
    setPages(0);
    const response = await fetchQuestions(0, userId);
    setQuestions(response);
  }, [userId]);

  const loadMore = async () => {
    const response = await fetchQuestions(pages + 1, userId);
    setQuestions([...questions, ...response]);
    setPages(pages + 1);
  };

  if (questions?.length === 0)
    return (
      <center style={{ padding: "40px" }}>
        <p>No questions asked</p>
      </center>
    );

  if (!questions)
    return (
      <center style={{ padding: "40px" }}>
        {!userId && <QuestionForm setQuestions={setQuestions} />}
        <LoadingSpinner />
      </center>
    );

  return (
    <div className="questionsContainer app__questions">
      {!userId && user && <QuestionForm setQuestions={setQuestions} />}
      <div className="questionsContainer__questions">
        {questions?.map((q, idx) => (
          <Question
            key={q.questionId}
            question={q}
            setQuestions={setQuestions}
            questions={questions}
          />
        ))}
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <button
          className="btn btn-primary"
          style={{ marginTop: "10px" }}
          onClick={loadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: selectUser(state),
    isLoading: selectQuestionsLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: (pages, userId) => dispatch(getQuestions(pages, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
