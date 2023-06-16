import Types from "../types/auth";
import Cookies from "js-cookie";

const initialState = {
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.SET_USER_DATA:
      Cookies.set("user", JSON.stringify(payload.user));
      return {
        ...state,
        user: payload.user,
      };
    case Types.LOG_OUT_USER: {
      Cookies.remove("user");
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
