import React, { useState } from "react";
// Components
import PostItem from "./components/PostItem";
// Css
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}

export default App;
