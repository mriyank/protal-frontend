import React from "react";
import "../App.css";
import Main from "./Main";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./loginForm";

function App() {
  return (
    <Router>
      <div className="App">{/* <LoginForm className="LoginForm" /> */}
      <Main></Main>
      </div>
    </Router>
  );
}

export default App;
