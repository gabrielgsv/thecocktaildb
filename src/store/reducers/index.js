import { combineReducers } from "redux";
import category from "./category";
import drinksByCategory from "./drinksByCategory"

const reducers = combineReducers({
  Category: category,
  DrinksByCategory: drinksByCategory
});

export default reducers;
