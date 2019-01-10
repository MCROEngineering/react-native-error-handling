export const apiRequestType = '_REQUEST';
export const apiSuccessType = '_SUCCESS';
export const apiFailureType = '_FAILURE';

const initialState = {};

const apiRequestTypes = {
  request: apiRequestType,
  success: apiSuccessType,
  failure: apiFailureType,
};

// if action.type is an API request, it will return _REQUEST, _SUCCESS or _FAILURE depending on API request status
// otherwise, will return false
const getApiRequestActionType = type =>
  (type.endsWith(apiRequestType) && apiRequestTypes.request) ||
  (type.endsWith(apiSuccessType) && apiRequestTypes.success) ||
  (type.endsWith(apiFailureType) && apiRequestTypes.failure);

// this function will return the action type removing one of the suffixes: _REQUEST, _SUCCESS, _FAILURE
const getApiRequestType = (type, actionType) => type.substring(0, type.lastIndexOf(actionType));

// in order to add any items to request status, you have to dispatch actions
// that are prefixed with _REQUEST, _SUCCESS, _FAILURE
const requestStatus = (state = initialState, action = {}) => {
  const apiRequestActionType = getApiRequestActionType(action.type);

  if (apiRequestActionType) {
    let requestApiValue = {};
    const apiRequestType = getApiRequestType(action.type, apiRequestActionType);
    const { loaded, requestId } = action.payload || {};

    // according to action type status, we populate the state
    switch (apiRequestActionType) {
      case apiRequestTypes.request:
        requestApiValue = {
          isLoading: true,
          loaded: false,
          error: null,
        };
        break;
      case apiRequestTypes.success:
        requestApiValue = {
          isLoading: false,
          loaded: loaded || true,
          error: null,
        };
        break;
      case apiRequestTypes.failure:
        requestApiValue = {
          isLoading: false,
          loaded: false,
          error: action.payload.error,
        };
        break;
      default:
        break;
    }

    // if we have requestId parameter, it means that we can make this type of API request for multiple items
    // so we add an extra level to track API request status for all the possible items
    if (requestId) {
      return {
        ...state,
        [apiRequestType]: {
          ...state[apiRequestType],
          [requestId]: requestApiValue,
        },
      };
    }

    return {
      ...state,
      [apiRequestType]: requestApiValue,
    };
  }

  return state;
};

export default requestStatus;
