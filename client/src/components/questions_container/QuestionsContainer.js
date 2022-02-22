import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import {
  getQuestions,
  resetQuestions,
} from "../../redux/actions/questionsActions";
import { selectUser } from "../../redux/reducers/authReducer";
import {
  selectQuestions,
  selectQuestionsLoading,
} from "../../redux/reducers/questionsReducer";
import LoadingSpinner from "../loading/Loading";
import Question from "../question/Question";
import QuestionForm from "../question__form/QuestionForm";
import "./QuestionsContainer.css";

const QuestionsContainer = ({
  userId = null,
  user,
  fetchQuestions,
  isLoading,
  reset,
  questionsGlobal,
}) => {
  const [pages, setPages] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(async () => {
    const response = await fetchQuestions(pages, userId);
    setQuestions([...questions, ...response]);
  }, [userId, pages, fetchQuestions, setQuestions]);

  useEffect(() => {
    if (pages) setQuestions(questionsGlobal);
  }, [questionsGlobal, questions]);

  return (
    <div className="questionsContainer app__questions">
      {!userId && user && <QuestionForm setQuestions={setQuestions} />}
      <div className="questionsContainer__questions">
        {questions?.map((q, idx) => (
          <Question
            key={idx}
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
    questionsGlobal: selectQuestions(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: (pages, userId) => dispatch(getQuestions(pages, userId)),
    reset: () => dispatch(resetQuestions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
