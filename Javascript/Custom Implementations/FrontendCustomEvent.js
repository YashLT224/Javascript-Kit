//Step 1: Header Component (Header.js)
import React, { useState } from "react";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);

    // 🔹 Dispatch custom event when toggled
    const event = new CustomEvent("headerToggle", {
      detail: { expanded: newState },
    });
    window.dispatchEvent(event);
  };

  return (
    <header
      style={{
        background: "#f0f0f0",
        padding: "10px",
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={handleToggle}
    >
      <h2>{isExpanded ? "Collapse Header ▲" : "Expand Header ▼"}</h2>
      {isExpanded && <p>Here is some hidden header content!</p>}
    </header>
  );
};

export default Header;




//Step 2: Listener Component (HeaderListener.js)
import React, { useEffect } from "react";

const HeaderListener = () => {
  useEffect(() => {
    const handleHeaderToggle = (e) => {
      const { expanded } = e.detail;
      console.log("📢 Header toggled:", expanded ? "Expanded" : "Collapsed");
    };

    // 🔹 Listen for the custom event
    window.addEventListener("headerToggle", handleHeaderToggle);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("headerToggle", handleHeaderToggle);
    };
  }, []);

  return <div>✅ Listening for header expand/collapse events...</div>;
};

export default HeaderListener;

