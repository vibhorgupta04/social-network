import { SET_ALERT, REMOVE_ALERT } from '../actions/type';

const initialState = [];

function alertReducer(state = initialState, action) {
  // console.log(state);
  switch (action.type) {
    case SET_ALERT:
      console.log(action);
      return [...state, action.payload];

    case REMOVE_ALERT:
      // console.log("removeeeee");

      return state.filter(alert => alert.id !== action.payload);

    default:
      return state;
  }
};

export default alertReducer;