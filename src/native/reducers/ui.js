import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
  rehydrated: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};