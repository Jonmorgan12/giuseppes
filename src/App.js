import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar.component";
// import Searchbar from "./components/Searchbar/Searchbar.component";
import Home from "./components/Home/Home.component";
import About from "./components/About/About.component";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Searchbar /> */}
      <Home />
      <About />
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
