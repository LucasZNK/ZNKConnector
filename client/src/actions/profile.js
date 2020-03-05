import axios from "axios";
import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR } from "./types";
import { URL_API_PROFILE_ME } from "../utils/endpoints";

// GET CURRENT USER'S PROFILE
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get(URL_API_PROFILE_ME);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
