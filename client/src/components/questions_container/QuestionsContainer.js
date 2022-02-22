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
  const [questions, setQuestions] = useState([]);

  useEffect(async () => {
    const response = await fetchQuestions(pages, userId);
    setQuestions([...questions, ...response]);
  }, [userId, pages, fetchQuestions, setQuestions]);

  if (questions.length === 0)
    return (
      <center style={{ padding: "40px" }}>
        {userId ? (
          <p>No questions asked {user.firstName} my bro</p>
        ) : (
          <LoadingSpinner />
        )}
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
        <button className="btn btn-primary" onClick={() => setPages(pages + 1)}>
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
