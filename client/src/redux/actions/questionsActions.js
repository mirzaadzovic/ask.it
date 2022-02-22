import APIService from "../../services/APIService";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const setQuestions = (data) => {
  return {
    type: SET_QUESTIONS,
    payload: data,
  };
};

export const SET_QUESTIONS_ALL = "SET_QUESTIONS_ALL";
export const setQuestionsAll = (data) => {
  return {
    type: SET_QUESTIONS_ALL,
    payload: data,
  };
};

export const ADD_QUESTION = "ADD_QUESTION";
export const addQuestion = (data) => {
  return {
    type: ADD_QUESTION,
    payload: data,
  };
};

export const LOADING_QUESTIONS = "LOADING_QUESTIONS";
export const loadingQuestions = () => {
  return {
    type: LOADING_QUESTIONS,
  };
};

export const EDIT_QUESTION = "EDIT_QUESTION";
export const editQuestion = (data) => {
  return {
    type: EDIT_QUESTION,
    payload: data,
  };
};

export const DELETE_QUESTION = "DELETE_QUESTION";
export const removeQuestion = (id) => {
  return {
    type: DELETE_QUESTION,
    payload: id,
  };
};

export const RESET_QUESTIONS = "RESET_QUESTIONS";
export const resetQuestions = () => {
  return {
    type: RESET_QUESTIONS,
  };
};

export const REFRESH_QUESTIONS = "REFRESH_QUESTIONS";
export const refreshQuestions = () => {
  return {
    type: REFRESH_QUESTIONS,
  };
};

export const getQuestions = (pages, userId) => {
  return async (dispatch) => {
    dispatch(loadingQuestions());

    const questions = await APIService.getAll("/questions", {
      pages,
      userId,
    }).catch((err) => null);

    if (questions) dispatch(setQuestions(questions));
    return questions;
  };
};

export const postQuestion = (data, user) => {
  return async (dispatch) => {
    const question = await APIService.post("/questions", data).catch(
      (err) => null
    );
    question.user = { ...user };
    if (question) {
      // dispatch(addQuestion(question));
      return question;
    }
  };
};

export const deleteQuestion = (questionId) => {
  return async (dispatch) => {
    await APIService.delete("/questions/" + questionId).catch((err) => null);
    dispatch(removeQuestion(questionId));
  };
};
