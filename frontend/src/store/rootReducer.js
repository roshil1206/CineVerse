import { combineReducers } from "redux";
import foodReducer from "./FoodAndBeverages/reducer";
import cartReducer from "./Cart/reducer";
import contactReducer from "./contact/reducer";

const rootReducer = combineReducers({
  foodReducer,
  cartReducer,
  contactReducer,
});

export default rootReducer;
