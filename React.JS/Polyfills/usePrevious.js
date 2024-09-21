import { useEffect, useRef } from "react";

function usePrevious(value) {
  console.log("dsds", value);
  // Create a ref that stores the previous value
  const prevRef = useRef();

  // Update the ref to the current value after every render
  useEffect(() => {
    prevRef.current = value;
  }, [value]); // Runs whenever the value changes

  // Return the previous value (stored in prevRef)
  return prevRef.current;
}

export default usePrevious;
