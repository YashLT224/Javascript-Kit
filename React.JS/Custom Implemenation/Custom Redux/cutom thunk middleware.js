//Redux cannot execute functions directly, so we write a middleware that:
//Checks if action is a function
//If yes → call it with (dispatch, getState)
//If not → pass to next middleware or reducer


// thunkMiddleware.js
const customThunk = ({ dispatch, getState }) => (next) => (action) => {
  // If action is a function (thunk)
  if (typeof action === "function") {
    return action(dispatch, getState);
  }

  // Otherwise pass action to next middleware (or reducer)
  return next(action);
};

export default customThunk;




//implememntation

import { createStore, applyMiddleware } from "redux";
import customThunk from "./thunkMiddleware";

// Simple reducer
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(customThunk));
export default store;




const incrementAsync = () => {
  return (dispatch, getState) => {
    console.log("Before:", getState());
    setTimeout(() => {
      dispatch({ type: "INCREMENT" });
      console.log("After:", getState());
    }, 1000);
  };
};

store.dispatch(incrementAsync());
