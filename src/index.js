import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

/*
This is the entry point to the application.
All componenets are under the Components directory.
*/
const Index = () => {
  return <App />;
};

ReactDOM.render(<Index />, document.getElementById("index"));
