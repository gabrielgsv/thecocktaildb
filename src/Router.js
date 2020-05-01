import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/category" component={Category} />
    </Switch>
  );
}
