import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "../src/pages/Search";
import Saved from "../src/pages/Saved";
import Home from "./pages/Home";
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
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
