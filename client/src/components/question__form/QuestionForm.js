import React, { useState } from "react";
import UserAvatar from "../user_avatar/UserAvatar";
import "./QuestionForm.css";

const QuestionForm = () => {
  const [text, setText] = useState("");
  return (
    <form className="questionForm app__card">
      <UserAvatar />
      <textarea
        className="form-control"
        placeholder="Ask your question..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => e.preventDefault()}
      >
        Post
      </button>
    </form>
  );
};

export default QuestionForm;
