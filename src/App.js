import React, { useState, useEffect } from "react";
import "./App.css";
import MemberList from "./components/MemberList";
import { BrowserRouter } from "react-router-dom";
import RootRouter from "./root-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h2>Logo and navbar</h2>
        <RootRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
