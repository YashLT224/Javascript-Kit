// https://dev.to/jeetvora331/render-props-in-react-frontend-system-design-3f3b


import React, { useState, useEffect } from "react";

function Clock({ render }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return render(time);
}



function App() {
    return (
      <div className="App">
        <h1>Render Props Example</h1>
        <Clock
          render={(time) => {
            return <p>The current time is {time.toLocaleTimeString("en-US")}</p>;
          }}
        />
      </div>
    );
  }