import { ADD_ITEM, UPDATE_ITEM } from "./actions";

export const addItemAction = (itemDetails) => ({
  type: ADD_ITEM,
  payload: itemDetails,
});

export const updateItemAction = (itemDetails) => ({
  type: UPDATE_ITEM,
  payload: itemDetails,
});
