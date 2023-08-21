import { createReducer } from "@reduxjs/toolkit";
import { REQUEST, SUCCESS, FAILURE, UPDATE_SUCCESS } from "./constants";

const initialState = {
  users: [],
};

export const userReducer = createReducer(initialState, {
  [REQUEST]: (state) => {
    return {
      ...state,
      loading: true,
    };
  },
  [SUCCESS]: (state, action) => {
    return {
      ...state,
      users: action.payload,
      loading: false,
    };
  },
  [UPDATE_SUCCESS]: (state, action) => {
    return {
      ...state,
      users: action.payload,
      loading: false,
    };
  },
  [FAILURE]: (state) => {
    return {
      ...state,
      users: [],
      loading: false,
    };
  },
});
