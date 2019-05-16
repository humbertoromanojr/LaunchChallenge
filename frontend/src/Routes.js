import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Add from "./pages/Add";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" compoment={Home} />
      <Route path="/add" compoment={Add} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
