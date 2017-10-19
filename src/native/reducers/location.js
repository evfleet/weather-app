import * as actionTypes from '../actions/types';

const initialState = {
  name: null,
  coords: null,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_LOCATION_PASS:
      return {
        name: payload.name,
        coords: payload.coords,
        error: null
      };

    case actionTypes.SET_LOCATION_FAIL:
      return state;

    default:
      return state;
  }
};