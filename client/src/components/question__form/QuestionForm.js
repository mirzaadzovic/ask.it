import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import {
  addQuestion,
  postQuestion,
} from "../../redux/actions/questionsActions";
import { selectUser } from "../../redux/reducers/authReducer";
import { selectQuestionsLoading } from "../../redux/reducers/questionsReducer";
import UserAvatar from "../user_avatar/UserAvatar";
import "./QuestionForm.css";

const QuestionForm = ({ user, askQuestion, isLoading }) => {
  const [text, setText] = useState("");
  const handleClick = () => {
    const question = { questiontext: text, userid: user.userId };
    askQuestion(question, user);
    setText("");
  };
  return (
    <form className="questionForm app__card">
      <UserAvatar user={user} />
      <textarea
        className="form-control"
        placeholder="Ask your question..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => handleClick()}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
