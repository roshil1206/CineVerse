import Types from "../types/auth";

export const setUser = (user) => {
  return async function (dispatch) {
    dispatch({
      type: Types.SET_USER_DATA,
      payload: {
        user,
      },
    });
  };
};

export const logOutUser = () => {
  return async function (dispatch) {
    dispatch({
      type: Types.LOG_OUT_USER,
    });
  };
};
