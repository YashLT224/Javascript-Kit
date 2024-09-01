
import React, { useState } from "react";

  export default function Input() {
    const [input, setInput] = useState("");

    return (
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
        placeholder="Type something..."
      />
    );
  }