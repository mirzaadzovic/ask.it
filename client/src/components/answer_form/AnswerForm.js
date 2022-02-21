import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { selectUser } from "../../redux/reducers/authReducer";
import "./AnswerForm.css";

const AnswerForm = ({ user }) => {
  const [text, setText] = useState("");
  return (
    <form className="answerForm">
      <div className="answerForm__input">
        <Avatar
          src={user.avatarUrl}
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
      {text && (
        <button className="btn btn-primary" onClick={(e) => e.preventDefault()}>
          Send Answer
        </button>
      )}
    </form>
  );
};

const mapStateToPros = (state) => {
  return {
    user: selectUser(state),
  };
};

export default connect(mapStateToPros, null)(AnswerForm);
