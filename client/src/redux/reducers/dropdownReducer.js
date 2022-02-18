import {
  CLOSE_DROPDOWN,
  OPEN_DROPDOWN,
  TOGGLE_DROPDOWN,
} from "../actions/dropdownActions";

const initialState = {
  openDropdown: false,
};

export const selectOpenDropdown = (state) => state.dropdown.openDropdown;

const dropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DROPDOWN:
      return {
        openDropdown: true,
      };
    case CLOSE_DROPDOWN:
      return {
        openDropdown: false,
      };
    case TOGGLE_DROPDOWN:
      return {
        openDropdown: !state.openDropdown,
      };

    default:
      return state;
  }
};

export default dropdownReducer;
