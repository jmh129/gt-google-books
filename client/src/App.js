import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/Search";
import Saved from "../src/pages/Saved";
import NoMatch from "../src/pages/NoMatch";
import Navigation from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
