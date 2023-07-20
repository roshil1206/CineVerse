import { combineReducers } from "redux";
import foodReducer from "./FoodAndBeverages/reducer";
import cartReducer from "./Cart/reducer";
const rootReducer = combineReducers({
  foodReducer,
  cartReducer,
});

export default rootReducer;
