import { all } from "redux-saga/effects";
import foodSaga from "./FoodAndBeverages/saga";

function* rootSaga() {
  yield all([foodSaga()]);
}

export default rootSaga;
