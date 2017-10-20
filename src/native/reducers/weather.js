import * as actionTypes from '../actions/types';

const initialState = {
  currently: null,
  hourly: null,
  daily: null,
  alerts: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_WEATHER_PASS:
      return payload;

    case actionTypes.FETCH_WEATHER_FAIL:
      return initialState;

    default:
      return state;
  }
};