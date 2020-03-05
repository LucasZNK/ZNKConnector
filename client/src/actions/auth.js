import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";
import { URL_API_AUTH, URL_API_USERS } from "../utils/endpoints";
import { alerts } from "../utils/constants";

//lOAD USER, check if have token put in global header
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(URL_API_AUTH);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

//REGISTER USER
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(URL_API_USERS, body, config);
    if (res.status === 400) {
    }
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
    dispatch(
      setAlert(`Welcome ${name} to the ZNKConnector comunnity`, alerts.success)
    );
  } catch (error) {
    const errors = error.response.data;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, alerts.danger)));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

//Login USER
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(URL_API_AUTH, body, config);
    if (res.status === 400) {
    }
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
    dispatch(setAlert(`Welcome again ${email}`, "success"));
  } catch (error) {
    const errors = error.response.data;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
