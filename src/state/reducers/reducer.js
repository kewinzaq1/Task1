import {
  SET_FETCHUSERS,
  SET_SUGGESTIONS,
  SET_USER,
} from "../actions/actionType";

const INITIAL_STATE = {
  user: "",
  fetchUsers: "",
  suggestions: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_FETCHUSERS:
      return {
        ...state,
        fetchUsers: action.fetchUsers,
      };
    case SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.suggestions,
      };
    default:
      return state;
  }
};

export default reducer;
