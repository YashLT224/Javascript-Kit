 //https://freedium-mirror.cfd/
 //https://blogs.starkdevelopers.in/implemented-my-own-custom-usestate-hook-in-react-7f38e7531458

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




//way 2
import { createRoot } from "react-dom/client";

const states = [];
let stateCounter = -1;

const useMyState = (initialValue) => {
  const stateIndex = ++stateCounter;

  if (states[stateIndex]) {
    return states[stateIndex];
  }

  // Check if the passed it value is a function then call it
  // otherwise assign the value directly
  let value;
  if (typeof initialValue === "function") {
    value = initialValue();
  } else {
    value = initialValue;
  }

  const setValue = (newValue) => {
    const state = states[stateIndex];

    // If callback is passed then call the function with the currentState value
    // Otherwise assign the new value
    const previousStateValue = state[0];
    if (typeof newValue === "function") {
      state[0] = newValue(previousStateValue);
    } else {
      state[0] = newValue;
    }

    // Check if new value is not the same as previous value
    // If same, do not rerender the component
    if (state[0] !== previousStateValue) {
      renderApp();
    }
  };

  const state = [value, setValue];

  states.push(state);

  return state;
};

export default function App() {
  const [count, setCount] = useMyState(0);
  const [name, setName] = useMyState("");
  const [todos, setTodos] = useMyState([]);
  const [todoItem, setTodoItem] = useMyState("");

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleTodoItemChange = (event) => {
    setTodoItem(event.target.value);
  };

  const handleAddTodo = () => {
    if (!todoItem) return;

    setTodos((prevTodos) => [...prevTodos, todoItem]);
    setTodoItem("");
  };

  return (
    <div className="App">
      <h3>Implementing my own useState</h3>
      <div>Counter: {count}</div>
      <br />
      <button onClick={handleClick}>Click Me!</button>
      <br />
      <br />
      <input value={name} onChange={handleChange} />
      <br />
      <br />
      <h4>Todos</h4>
      <input value={todoItem} onChange={handleTodoItemChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <br />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const renderApp = () => {
  stateCounter = -1;

  root.render(<App />);
};

renderApp();
