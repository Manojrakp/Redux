const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const { createStore, applyMiddleware } = redux;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

const fetchUsersRequest = () => ({ type: FETCH_USER_REQUESTED });

const fetchUsersSuccess = (users) => ({
  type: FETCH_USER_SUCCEEDED,
  payload: users,
});

const fetchUsersFailed = (error) => ({
  type: FETCH_USER_FAILED,
  payload: error,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailed(error.message));
      });
  };
};
console.log(typeof thunkMiddleware); // should print "function"

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
