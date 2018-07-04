import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/app-router";

/*
This is the entry point to the application.
All componenets are under the Components directory.
*/
const Index = () => {
  return (
      <div>
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
      </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
