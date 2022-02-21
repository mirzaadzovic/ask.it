import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { getQuestions } from "../../redux/actions/questionsActions";
import { selectUser } from "../../redux/reducers/authReducer";
import { selectQuestions } from "../../redux/reducers/questionsReducer";
import Question from "../question/Question";
import QuestionForm from "../question__form/QuestionForm";
import "./QuestionsContainer.css";

const QuestionsContainer = ({
  userId = null,
  user,
  fetchQuestions,
  questions,
}) => {
  const [pages, setPages] = useState(0);
  // const [questions, setQuestions] = useState(null);

  useEffect(async () => {
    await fetchQuestions(pages);
  }, [pages, fetchQuestions]);
  return (
    <div className="questionsContainer app__questions">
      {!userId && user && <QuestionForm />}
      <div className="questionsContainer__questions">
        {questions?.map((q, idx) => (
          <Question key={idx} question={q} />
        ))}
      </div>
      <button className="btn btn-primary" onClick={() => setPages(pages + 1)}>
        Load more
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: selectUser(state),
    questions: selectQuestions(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: (pages) => dispatch(getQuestions(pages)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
