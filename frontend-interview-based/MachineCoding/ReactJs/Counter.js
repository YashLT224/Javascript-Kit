import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [undo, setUndo] = useState([]);
  const [redo, setRedo] = useState([]);

  const increment = () => {
    setCounter((val) => val + 1);
    setUndo((val) => [...val, counter]);
    setRedo([]);
  };
  const decrement = () => {
    if (counter > 0) {
      setUndo((val) => [...val, counter]);
      setCounter((val) => val - 1);
      setRedo([]); // Clear the redo stack after a new action
    }
  };

  const reset = () => {
    setCounter(0);
    setUndo((val) => [...val, counter]);
    setRedo([]); // Clear the redo stack after a new action
  };

  const undoHandler = () => {
    if (undo.length > 0) {
      const lastValue = undo.pop();
      setCounter(lastValue);
      setRedo((val) => [...val, counter]);
      setUndo([...undo]); // Update undo state without mutating it directly
    }
  };
  console.log(undo);
  console.log(redo);
  const redoHandler = () => {
    if (redo.length > 0) {
      const lastRedoValue = redo.pop();
      setUndo((val) => [...val, counter]);
      setCounter(lastRedoValue);
      setRedo([...redo]); // Update redo state without mutating it directly
    }
  };
  return (
    <>
      {counter}
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>reset</button>
      <button onClick={() => undoHandler()}>undo</button>
      <button onClick={() => redoHandler()}>redo</button>
    </>
  );
};
export default Counter;
