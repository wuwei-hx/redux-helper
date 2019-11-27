const createEntityReducer = (asyncTypes, initialState) => (
  state = initialState,
  action
) => {
  switch (action.type) {
    case asyncTypes.SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default createEntityReducer;
