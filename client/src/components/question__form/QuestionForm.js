import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/authReducer";
import UserAvatar from "../user_avatar/UserAvatar";
import "./QuestionForm.css";

const QuestionForm = () => {
  const user = useSelector(selectUser);
  const [text, setText] = useState("");
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
        onClick={(e) => e.preventDefault()}
        disabled={!text}
      >
        Ask Question
      </button>
    </form>
  );
};

export default QuestionForm;
