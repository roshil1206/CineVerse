import { ADD_FOOD_ITEM, DELETE_FOOD_ITEM, GET_FOOD_ITEMS, UPDATE_FOOD_ITEM } from "./actionTypes";

export const getFoodItemsAction = () => ({
  type: GET_FOOD_ITEMS,
});

export const addFoodItemAction = (data) => ({
  type: ADD_FOOD_ITEM,
  payload: data,
});

export const updateFoodItemAction = (data) => ({
  type: UPDATE_FOOD_ITEM,
  payload: data,
});

export const deleteFoodItem = (data) => ({
  type: DELETE_FOOD_ITEM,
  payload: data,
});
