import { SET_SUGGESTIONS, SET_USER, SET_FETCHUSERS } from "./actionType";

export const setUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER,
      user: user,
    });
  };
};

export const setFetchUsers = (fetchUsers) => {
  return (dispatch) => {
    dispatch({
      type: SET_FETCHUSERS,
      fetchUsers: fetchUsers,
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
