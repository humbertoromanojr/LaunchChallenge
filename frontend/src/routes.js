import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import Add from "./pages/Add";

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" compoment={App} />
          <Route path="/add" compoment={Add} />
        </Switch>
      </main>
    );
  }
}

export default Routes;
