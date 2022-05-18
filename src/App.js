import './App.css';
import React, { useState, useEffect } from "react";
import FillableForm from "./components/FillableForm";


const {Configuration, OpenAIApi} = require("openai");
const App = () => {
  return (
    <div className="App">
        <h1>Fun with AI</h1>
        <FillableForm/>
    </div>
  );
}


export default App;
