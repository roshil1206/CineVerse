import { GET_FOOD_ITEMS_FAIL, GET_FOOD_ITEMS_SUCCESS, SET_FOOD_LOADING } from "./actionTypes";

const initialState = {
  loading: false,
  foodItems: [],
  error: false,
  message: "",
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD_LOADING:
      return {
        ...initialState,
        loading: true,
      };
    case GET_FOOD_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        foodItems: action.payload,
      };
    case GET_FOOD_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        foodItems: [],
        error: true,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default foodReducer;
