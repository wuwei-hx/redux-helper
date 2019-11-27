const createIsFetchingReducer = asyncTypes => (state = false, action) => {
  switch (action.type) {
    case asyncTypes.REQUEST:
      return true;
    case asyncTypes.SUCCESS:
    case asyncTypes.FAILURE:
      return false;
    default:
      return state;
  }
};

export default createIsFetchingReducer;

export const getIsFetching = state => state;
