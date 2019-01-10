const initialState = {
  currentRoute: 'SweetShop'
};

export default (state = initialState, action) => {
  if (action.type === 'NAVIGATION') {
    return {
      ...state,
      currentRoute: action.payload.currentScreen,
      requestId: action.payload.requestId,
    }
  }

  return state;
};
