import { put, takeLatest } from "redux-saga/effects";
import {
  GET_FOOD_ITEMS,
  GET_FOOD_ITEMS_FAIL,
  GET_FOOD_ITEMS_SUCCESS,
  SET_FOOD_LOADING,
} from "./actionTypes";
import axios from "../../utils/axios";

function* getFoodItemsSaga() {
  try {
    yield put({ type: SET_FOOD_LOADING });
    const { data } = yield axios.get("/foodAndBeverages/getAll");
    if (data.success) {
      yield put({ type: GET_FOOD_ITEMS_SUCCESS, payload: data.data });
    } else {
      yield put({ type: GET_FOOD_ITEMS_FAIL, message: data.message });
    }
  } catch (error) {
    yield put({ type: GET_FOOD_ITEMS_FAIL, message: "Something went wrong." });
  }
}

function* foodSaga() {
  yield takeLatest(GET_FOOD_ITEMS, getFoodItemsSaga);
}

export default foodSaga;
