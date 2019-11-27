const createAsyncActions = asyncTypes => ({
  fetch: payload => ({ type: asyncTypes.FETCH, payload }),
  request: payload => ({ type: asyncTypes.REQUEST, payload }),
  success: payload => ({
    type: asyncTypes.SUCCESS,
    payload
  }),
  failure: payload => ({
    type: asyncTypes.FAILURE,
    payload,
    error: true
  })
});

export default createAsyncActions;
