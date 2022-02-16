import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./state/actions/index";

const App = () => {
  const fetchUsers = useSelector((state) => state.fetchUsers);
  const user = useSelector((state) => state.user);
  const suggestions = useSelector((state) => state.suggestions);

  const dispatch = useDispatch();

  const { setUser, setFetchUsers, setSuggestions } = bindActionCreators(
    actions,
    dispatch
  );

  const getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        const data = result.data;
        const names = data.map((data) => data.name);
        setFetchUsers(names);
      })
      .catch((error) => {
        console.error(error.message);
        return null;
      });
  };

  useEffect(() => {
    getUser(user);
  }, []);

  const handleInput = ({ target }) => {
    setUser(target.value);
    if (user.length > 0 && fetchUsers !== null) {
      const filteredName = fetchUsers.filter((name) =>
        name.toLowerCase().includes(user.toLowerCase()) ? name : null
      );

      setSuggestions(filteredName);
    }
  };

  return (
    <div className='App'>
      <input
        type='text'
        value={user}
        placeholder={"Search user..."}
        onChange={handleInput}
      />
      {suggestions && suggestions !== [] && (
        <div className='suggestions'>
          {suggestions.map((suggestion, key) => {
            return (
              <button
                key={key}
                onClick={({ target }) => {
                  setSuggestions("");
                  setUser(target.textContent);
                }}>
                {suggestion}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
