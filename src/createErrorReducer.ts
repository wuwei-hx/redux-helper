const createErrorReducer = asyncTypes => (state = null, action) => {
  switch (action.type) {
    case asyncTypes.FAILURE:
      return action.payload;
    case asyncTypes.REQUEST:
    case asyncTypes.SUCCESS:
      return null;
    default:
      return state;
  }
};

export default createErrorReducer;

export const getError = state => state;
