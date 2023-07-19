import { combineReducers } from "redux";
import foodReducer from "./FoodAndBeverages/reducer";

const rootReducer = combineReducers({
  foodReducer,
});

export default rootReducer;
