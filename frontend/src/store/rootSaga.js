import { all } from "redux-saga/effects";
import foodSaga from "./FoodAndBeverages/saga";
import contactSaga from "./contact/saga";

function* rootSaga() {
  yield all([foodSaga(), contactSaga()]);
}

export default rootSaga;
