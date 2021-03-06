import React, { useEffect, useState } from "react";
import Rating from "../rating/Rating";
import UserAvatar from "../user_avatar/UserAvatar";
import ReactTimeAgo from "react-time-ago";
import CloseIcon from "@mui/icons-material/Close";
import "./Question.css";
import { Link } from "react-router-dom";
import AnswerForm from "../answer_form/AnswerForm";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import { selectUser } from "../../redux/reducers/authReducer";
import { connect, useSelector } from "react-redux";
import { deleteQuestion } from "../../redux/actions/questionsActions";
import APIService from "../../services/APIService";
import AnswersContainer from "../answers_container/AnswersContainer";
import ReactionInsertDto from "../../models/ReactionInsertDto";

const Question = ({ question, remove, setQuestions, questions }) => {
  const loggedInUser = useSelector(selectUser);

  const { questionId, questionDate, questionText, user, reactions } = question;
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(questionText);
  const [tempText, setTempText] = useState(text);

  const handleEdit = () => setEdit(true);

  const handleSave = async () => {
    await APIService.put("/questions/" + questionId, {
      questionid: questionId,
      questiontext: tempText,
      userid: user.userId,
    });

    setText(tempText);
    handleClose();
  };
  const handleClose = () => {
    setTempText(text);
    setEdit(false);
  };

  const handleDelete = () => {
    remove(questionId);
    setQuestions((prevstate) =>
      prevstate.filter((q) => q.questionId !== questionId)
    );
  };

  useEffect(async () => {
    return () => {
      setEdit(false);
    };
  }, [loggedInUser, setEdit, questions, questionText, text]);

  return (
    <div className="question app__card">
      <div className="question__header">
        <UserAvatar user={user} />

        {loggedInUser?.userId === user?.userId && (
          <div className="question__controls">
            <Tooltip title={edit ? "Save" : "Edit"}>
              <IconButton onClick={edit ? handleSave : handleEdit}>
                <EditIcon className="app__icon" />
              </IconButton>
            </Tooltip>
            <Tooltip title={edit ? "Close" : "Delete"}>
              <IconButton onClick={edit ? handleClose : handleDelete}>
                <CloseIcon className="app__icon" />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
      <Link to={`/question/${questionId}`} className="question__time">
        <ReactTimeAgo date={new Date(questionDate)} />
      </Link>
      {edit ? (
        <textarea
          className="form-control"
          placeholder="Edit question..."
          value={tempText}
          onChange={(e) => {
            setTempText(e.target.value);
          }}
        />
      ) : (
        <p className="question__text">{text}</p>
      )}
      {!edit && (
        <Rating
          reactions={reactions}
          questionId={questionId}
          Model={ReactionInsertDto}
          route={"/reactions"}
        />
      )}
      {loggedInUser && !edit && <AnswersContainer questionId={questionId} />}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (questionId) => {
      dispatch(deleteQuestion(questionId));
    },
  };
};

export default connect(null, mapDispatchToProps)(Question);
