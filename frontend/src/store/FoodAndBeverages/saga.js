import { put, takeLatest } from "redux-saga/effects";
import { GET_FOOD_ITEMS, GET_FOOD_ITEMS_FAIL, SET_FOOD_LOADING } from "./actionTypes";
import axios from "../../utils/axios";

function* getFoodItemsSaga() {
  try {
    yield put({ type: SET_FOOD_LOADING });
    const response = yield axios.get("/foodAndBeverages/getAll");
    console.log(response);
  } catch (error) {
    yield put({ type: GET_FOOD_ITEMS_FAIL, payload: { message: "Something went wrong." } });
  }
}

function* foodSaga() {
  yield takeLatest(GET_FOOD_ITEMS, getFoodItemsSaga);
}

export default foodSaga;
