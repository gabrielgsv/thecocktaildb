import { combineReducers } from 'redux';
import category from './category';
import drinksByCategory from './drinksByCategory';
import drink from './drink';
import search from './search';

const reducers = combineReducers({
  Category: category,
  DrinksByCategory: drinksByCategory,
  Drink: drink,
  Search: search,
});

export default reducers;
