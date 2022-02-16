import React, { useEffect, useState } from "react";
import axios from "axios";
// https://jsonplaceholder.typicode.com/users

const App = () => {
  const [user, setUser] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [names, setNames] = useState(null);

  const getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        const data = result.data;
        const names = data.map((data) => data.name);
        setNames(names);
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
    const filteredName = names.filter((name) =>
      name.toLowerCase().includes(user.toLowerCase()) ? name : null
    );

    if (user.length > 0) {
      setSuggestions(filteredName);
      console.log(suggestions);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={user}
        placeholder={"Search user..."}
        onChange={handleInput}
      />
      {suggestions && suggestions !== [] && (
        <div className="suggestions">
          {suggestions.map((suggestion, key) => {
            return (
              <button
                key={key}
                onClick={({ target }) => {
                  setSuggestions("");
                  setUser(target.textContent);
                }}
              >
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
