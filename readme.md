# Task #2

## live: https://amazing-curran-4c0b25.netlify.app/

## I performed the task using Redux and useEffect:

- I created a store where and initialized **rootReducer**
- As typo protection, I created **actionTypes** where I entered all the types used.
- I created a **getUser** function that retrieves data from the API and returns names
- In the application, I used useEffect with an empty dependcies to retrieve data using** getUser()**
- I created a **handleInput** function that sets up the user, checks the length and content of the **fetchUsers**, and then returns the proposed names after filtering
