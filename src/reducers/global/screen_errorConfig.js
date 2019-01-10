import * as sweetshopConstants from 'src/reducers/sweetshop/constants';

const ALL_ROUTES = 'ALL_ROUTES';

export const configuration = {
  [sweetshopConstants.LOAD_SWEETS_CONSTANT]: [],
  [sweetshopConstants.LOAD_RECIPE_CONSTANT]: ['SweetItem'],
  [sweetshopConstants.PLACE_ORDER_CONSTANT]: ALL_ROUTES
};

export const checkRoute = (key, route, innerKey, currentRouteRequestId) => {
  if (configuration[key] === ALL_ROUTES) {
    return true;
  }

  const currentRoute = configuration[key].indexOf(route) >= 0;

  if (innerKey && currentRouteRequestId) {
    return currentRoute && innerKey.toString() === currentRouteRequestId.toString();
  }

  return currentRoute;
};