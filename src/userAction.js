import axios from "axios";
import { REQUEST, SUCCESS, FAILURE, UPDATE_SUCCESS } from "./constants";

export const fetchUser = () => async (dispatch) => {
  try {
    dispatch({ type: REQUEST });
    const response = await axios.get("https://dummyjson.com/users");
    // console.log(response.data.users);
    dispatch({ type: SUCCESS, payload: response.data.users });
  } catch (error) {
    dispatch({ type: FAILURE });
  }
};

export const updateUser = (updatedUser) => async (dispatch) => {
  dispatch({ type: UPDATE_SUCCESS, payload: updatedUser });
};

// Path: src\userReducer.js
