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


/*
Reason for Resetting hookIdTracker to 0:
Hook Order and Consistency:

React requires hooks to be called in the same order on every render. The hookIdTracker serves as a way to track which hook (or state) corresponds to which call of useMyState within a component.
Each render, hookIdTracker starts at 0 and increments with each useMyState call. This mechanism mimics how React maintains state consistency by relying on the call order of hooks.
Reset on Re-render:

When forceUpdate is called via rerender({}), the component re-renders. To ensure that each hook retrieves and manages the correct state, hookIdTracker is reset to 0. This allows the hook calls during the new render cycle to correctly align with their respective states in the states array.
Without resetting hookIdTracker, subsequent renders would not start tracking from 0, leading to mismatches where hooks access the wrong states, resulting in unpredictable behavior.


*/
