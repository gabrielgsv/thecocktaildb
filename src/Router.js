import React from "react";
import { Switch, Route } from "react-router-dom";
import { FlexCenter } from "./components/Flex";
import { Card } from "./components/Card";

import Home from "./pages/Home";
import DrinksByCategory from "./pages/DrinksByCategory";
import Drink from "./pages/Drink"

export default function Router() {
  return (
    <FlexCenter>
      <Card>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list-by-category" component={DrinksByCategory} />
          <Route path="/drink" component={Drink} />
        </Switch>
      </Card>
    </FlexCenter>
  );
}
