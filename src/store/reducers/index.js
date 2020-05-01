import { combineReducers } from "redux";
import category from "./category";
import drinksByCategory from "./drinksByCategory";
import drink from "./drink";

const reducers = combineReducers({
  Category: category,
  DrinksByCategory: drinksByCategory,
  Drink: drink,
});

export default reducers;
