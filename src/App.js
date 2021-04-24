import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar.component";
// import Searchbar from "./components/Searchbar/Searchbar.component";
import Home from "./components/Home/Home.component";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Searchbar /> */}
      <Home />
      <Switch>
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
