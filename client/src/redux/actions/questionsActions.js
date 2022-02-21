import APIService from "../../services/APIService";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const setQuestions = (data) => {
  return {
    type: SET_QUESTIONS,
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
export const deleteQuestion = (id) => {
  return {
    type: DELETE_QUESTION,
    payload: id,
  };
};

export const LOAD_MORE_QUESTIONS = "LOAD_MORE_QUESTIONS";
export const loadMoreQuestions = (data) => {
  return {
    type: LOAD_MORE_QUESTIONS,
    payload: data,
  };
};

export const getQuestions = (pages) => {
  return async (dispatch) => {
    const questions = await APIService.getAll("/questions", { pages }).catch(
      (err) => null
    );

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
    if (question) dispatch(addQuestion(question));
  };
};
