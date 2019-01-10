const initialState = {
};

// in order to add any items to pagination, you have to send
// paginationId - string (identifier of collection)
// and result - array of ids
const pagination = (state = initialState, action = {}) => {
  if (action.payload && action.payload.result && action.payload.paginationId) {
    if (state[action.payload.paginationId]) {
      return {
        ...state,
        [action.payload.paginationId]: {
          ids: action.payload.resetIds
            ? action.payload.result
            : [...state[action.payload.paginationId].ids, ...action.payload.result],
          links: action.payload.links,
        },
      };
    }

    return {
      ...state,
      [action.payload.paginationId]: {
        ids: action.payload.result,
        links: action.payload.links,
      },
    };
  }

  return state;
};

export default pagination;
