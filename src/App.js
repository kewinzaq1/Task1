import React, { useEffect, useState } from "react";
// https://jsonplaceholder.typicode.com/users
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./state/actions/index";

const App = () => {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const suggestions = useSelector((state) => state.suggestions);

  const dispatch = useDispatch();

  console.log(users, user, suggestions);

  const { setUser, setUsers, setSuggestions } = bindActionCreators(
    actions,
    dispatch
  );

  const getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        const data = result.data;
        const names = data.map((data) => data.name);
        setUsers(names);
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
    if (user.length > 0 && users !== null) {
      const filteredName = users.filter((name) =>
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
