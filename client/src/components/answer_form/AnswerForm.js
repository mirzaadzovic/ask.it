import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./AnswerForm.css";

const AnswerForm = () => {
  const [text, setText] = useState("");
  return (
    <form className="answerForm">
      <div className="answerForm__input">
        <Avatar
          className="answerForm__avatar"
          style={{ height: "2rem", width: "2rem" }}
        />
        <textarea
          className="form-control"
          placeholder="Answer this question..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={(e) => e.preventDefault()}
        disabled={!text}
      >
        Answer
      </button>
    </form>
  );
};

export default AnswerForm;
