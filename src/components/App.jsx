import React from "react";
import Login from "./Login";

var isLoggedIn = false;


// const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}

      {/* Message that can be rendered based on current time */}
      {/* {currentTime > 18 && <h1>Why are you still working?</h1>} */}
    </div>
  );
}

export default App;