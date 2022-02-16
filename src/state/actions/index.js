import { SET_SUGGESTIONS, SET_USER, SET_USERS } from "./actionType";

export const setUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER,
      user: user,
    });
  };
};

export const setUsers = (users) => {
  return (dispatch) => {
    dispatch({
      type: SET_USERS,
      users: users,
    });
  };
};

export const setSuggestions = (suggestions) => {
  return (dispatch) => {
    dispatch({
      type: SET_SUGGESTIONS,
      suggestions: suggestions,
    });
  };
};
