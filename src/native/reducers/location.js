const initialState = {
  name: null,
  coords: null,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};