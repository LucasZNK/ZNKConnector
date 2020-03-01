import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      // Return the state with the new alert
      return [...state, payload];
    case REMOVE_ALERT:
      // Return alerts without the one with this id
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
