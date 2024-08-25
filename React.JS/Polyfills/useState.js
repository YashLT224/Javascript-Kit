import { useReducer } from "react";

let hookIdTracker = 0;
let states = [];

export function useMyState(initialValue) {
  // Determine the current hook's state based on hookIdTracker
  const localHookId = hookIdTracker;

  // Initialize state if it's not already set
  if (states[localHookId] === undefined) {
    states[localHookId] = initialValue;
  }

  const currentState = states[localHookId];

  // Force update using useReducer
  const [, rerender] = useReducer(() => ({}), {});

  // Function to force a re-render
  const forceUpdate = () => {
    hookIdTracker = 0; // Reset hook tracker on rerender
    rerender({});
  };

  // Function to update state
  function setValue(newValue) {
    const isValueChanged = !Object.is(newValue, states[localHookId]);
    if (isValueChanged) {
      states[localHookId] = newValue;
      forceUpdate();
    }
  }

  // Increment the hook tracker for the next useMyState call
  hookIdTracker++;

  // Return the current state and the setter function
  return [currentState, setValue];
}
