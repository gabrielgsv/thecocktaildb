import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FlexCenter } from './components/Flex';
import Card from './components/Card';
import Search from './components/Search';

import Home from './pages/Home';
import DrinksByCategory from './pages/DrinksByCategory';
import Drink from './pages/Drink';
import SearchPage from './pages/Search';

export default function Router() {
  return (
    <FlexCenter>
      <Card>
        <Search />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list-by-category" component={DrinksByCategory} />
          <Route path="/drink" component={Drink} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </Card>
    </FlexCenter>
  );
}
