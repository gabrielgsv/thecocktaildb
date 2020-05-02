import React from "react";
import { Switch, Route } from "react-router-dom";
import { FlexCenter } from "./components/Flex";
import { Card } from "./components/Card";
import { useSelector } from "react-redux";
import Search from "./components/Search";

import Home from "./pages/Home";
import DrinksByCategory from "./pages/DrinksByCategory";
import Drink from "./pages/Drink";
import SearchPage from "./pages/Search";

export default function Router() {
  const searchDrink = useSelector((state) => state.Search.drink);
  return (
    <FlexCenter>
      <Card>
        <Search />
        {searchDrink ? (
          <SearchPage drinks={searchDrink} />
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list-by-category" component={DrinksByCategory} />
            <Route path="/drink" component={Drink} />
          </Switch>
        )}
      </Card>
    </FlexCenter>
  );
}
