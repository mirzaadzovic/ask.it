import React from "react";
import UserAvatar from "../user_avatar/UserAvatar";
import "./QuestionForm.css";

const QuestionForm = () => {
  return (
    <form className="questionForm app__card">
      <UserAvatar />
      <textarea className="form-control" placeholder="Ask your question..." />
      <button className="btn btn-primary" onClick={(e) => e.preventDefault()}>
        Post
      </button>
    </form>
  );
};

export default QuestionForm;
