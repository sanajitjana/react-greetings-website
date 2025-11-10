import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "./EnhancedApp.css";

function App() {
  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting;
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isTimeUpdating, setIsTimeUpdating] = useState(false);

  const UpdateTime = () => {
    setIsTimeUpdating(true);
    setTimeout(() => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
      setIsTimeUpdating(false);
    }, 150);
  };

  useEffect(() => {
    const interval = setInterval(UpdateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Time-based greeting logic
  if (currDate >= 0 && currDate < 12) {
    greeting = "Good Morning";
  } else if (currDate >= 12 && currDate < 18) {
    greeting = "Good Afternoon";
  } else if (currDate >= 18 && currDate < 20) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return (
    <div className="app-container">
      {/* Decorative floating circles */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Main Greeting Card */}
      <div className="greeting-card">
        <h1 className="greeting-text">
          Wishing You a very{" "}
          <span className="greeting-dynamic">
            {greeting}
          </span>
        </h1>
        
        <div className={`time-display ${isTimeUpdating ? 'time-updating' : ''}`}>
          <span className="time-icon">🕐</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
