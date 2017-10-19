const initialState = {
  current: null,
  hourly: null,
  daily: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};