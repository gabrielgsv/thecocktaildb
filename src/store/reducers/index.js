import { combineReducers } from "redux";
import category from "./category";

const reducers = combineReducers({
  Category: category,
});

export default reducers;
