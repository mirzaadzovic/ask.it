import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { selectUser } from "../../redux/reducers/authReducer";
import APIService from "../../services/APIService";
import "./AnswerForm.css";

const AnswerForm = ({ user, questionId, setAnswers }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await APIService.post("/answers", {
      userid: user.userId,
      questionid: questionId,
      answertext: text,
    }).catch((err) => null);

    response.user = { ...user };
    if (response) setAnswers((prevState) => [...prevState, response]);
    setText("");
  };

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
        <button className="btn btn-primary" onClick={handleSubmit}>
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
