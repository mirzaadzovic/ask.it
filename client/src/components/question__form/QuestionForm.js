import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addQuestion,
  getQuestions,
  postQuestion,
  setQuestions,
} from "../../redux/actions/questionsActions";
import { selectUser } from "../../redux/reducers/authReducer";
import { selectQuestionsLoading } from "../../redux/reducers/questionsReducer";
import UserAvatar from "../user_avatar/UserAvatar";
import "./QuestionForm.css";

const QuestionForm = ({
  user,
  askQuestion,
  isLoading,
  setQuestions,
  reload,
}) => {
  const [text, setText] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const question = { questiontext: text, userid: user.userId };
    await askQuestion(question, user);
    setText("");
    const refresh = await reload();
    setQuestions(refresh);
  };

  return (
    <form className="questionForm app__card">
      <UserAvatar user={user} />
      <textarea
        className="form-control"
        placeholder="Ask your question..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => handleClick(e)}
        disabled={!text || isLoading}
      >
        Ask Question
      </button>
    </form>
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
    askQuestion: (question, user) => dispatch(postQuestion(question, user)),
    reload: () => dispatch(getQuestions(0)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
