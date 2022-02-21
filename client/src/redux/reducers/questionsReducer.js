import {
  ADD_QUESTION,
  DELETE_QUESTION,
  LOADING_QUESTIONS,
  SET_QUESTIONS,
  LOAD_MORE_QUESTIONS,
} from "../actions/questionsActions";

const initialState = {
  questions: [],
  loading: false,
};

export const selectQuestions = (state) => state.questions.questions;
export const selectQuestionsLoading = (state) => state.questions.loading;

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        questions: [...state.questions, ...action.payload],
        loading: false,
      };
    case ADD_QUESTION:
      return {
        questions: [action.payload, ...state.questions],
        loading: false,
      };
    case DELETE_QUESTION:
      return {
        questions: state.questions.filter(
          (q) => q.questionId !== action.payload
        ),
        loading: false,
      };
    case LOADING_QUESTIONS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default questionsReducer;
