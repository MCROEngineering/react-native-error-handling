import { checkRoute } from 'src/reducers/global/screenErrorConfig';

const getCurrentRoute = (state) => state.navigatorState.currentRoute;
const getCurrentRouteRequestId = (state) => state.navigatorState.requestId;

const filterRequestStatus = (requestStatus, currentRoute, currentRouteRequestId) => {
  const filteredLoading = {};
  const filteredLoaded = {};
  const filteredErrors = {};

  const handleSingleApiRequest = (key, value) => {
    const { error, loaded, isLoading } = value;

    if (error && error.message) {
      filteredErrors[key] = error;
    }

    if (loaded && loaded.length) {
      filteredLoaded[key] = loaded;
    }

    if (isLoading) {
      filteredLoading[key] = true;
    }
  };

  const handleMultipleApiRequest = (key, value) => {
    Object.keys(value).filter(innerKey => {
      const innerValue = value[innerKey] || {};

      // check if the requestId parameter is the same with current route requestId
      // as I pointed out in the article at 1.a.
      // because we don't want to display the error from item1 if we are on item2's screen
      if (checkRoute(key, currentRoute, innerKey, currentRouteRequestId)) {
        handleSingleApiRequest(`${key}__${innerKey}`, innerValue);
      }
    });
  };

  Object.keys(requestStatus).filter(key => {
    if (checkRoute(key, currentRoute)) {
      const value = requestStatus[key] || {};

      // This checks if the api request is not a request that can be done for multiple items (eg.: LOAD_SWEETS)
      if (value.hasOwnProperty('isLoading')) {
        handleSingleApiRequest(key, value);
      } else {
        // this is for API requests that can be done for multiple items (eg.: LOAD_RECIPE)
        handleMultipleApiRequest(key, value);
      }
    }
  });

  return {
    loading: filteredLoading,
    loaded: filteredLoaded,
    errors: filteredErrors,
  };
};

export const getRequestStatuses = (state) => {
  const requestStatus = state.requestStatus;
  const currentRoute = getCurrentRoute(state);
  const currentRouteRequestId = getCurrentRouteRequestId(state);

  return filterRequestStatus(requestStatus, currentRoute, currentRouteRequestId);
};
