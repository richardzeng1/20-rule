import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Timer from "./components/timer";

/*
This is the entry point to the application.
All componenets are under the Components directory.
*/
const Index = () => {
  return (
      <Timer/>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
