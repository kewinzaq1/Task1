import { SET_SUGGESTIONS, SET_USER, SET_USERS } from "../actions/actionType";

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
    case SET_USERS:
      return {
        ...state,
        users: action.users,
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
