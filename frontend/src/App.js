import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Add from "./pages/Add";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collpase navbar-collpase" id="navbar">
        <ul className="navbar-nav">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/add">Add</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
