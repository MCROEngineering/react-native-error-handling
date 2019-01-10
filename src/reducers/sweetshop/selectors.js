import * as c from './constants';

const requestStatus = (state, action) => state.requestStatus[action];
const getPagination = (state, type) => state.pagination[type];
const entities = (state, type) => state.entities[type];

export const getIsLoadingSweets = (state) => {
  const sweetsStatus = requestStatus(state, c.LOAD_SWEETS_CONSTANT);

  return sweetsStatus && sweetsStatus.isLoading;
};

export const getLoadedSweets = (state) => {
  const sweetsStatus = requestStatus(state, c.LOAD_SWEETS_CONSTANT);

  return sweetsStatus && sweetsStatus.loaded;
};

export const getLoadSweetsError = (state) => {
  const sweetsStatus = requestStatus(state, c.LOAD_SWEETS_CONSTANT);

  return sweetsStatus && sweetsStatus.error;
};

export const getSweets = (state) => {
  const pagination = getPagination(state, 'sweets');

  return (pagination && pagination.ids.map(id => entities(state, 'sweets')[id])) || [];
};

export const getIsLoadingRecipe = (state, sweetId) => {
  const sweetsStatus = requestStatus(state, c.LOAD_RECIPE_CONSTANT);
  const { isLoading } = sweetId
    ? (sweetsStatus && sweetsStatus[sweetId]) || {}
    : sweetsStatus || {};

  return isLoading;
};

export const getLoadedRecipe = (state, sweetId) => {
  const sweetsStatus = requestStatus(state, c.LOAD_RECIPE_CONSTANT);
  const { loaded } = sweetId ? (sweetsStatus && sweetsStatus[sweetId]) || {} : sweetsStatus || {};

  return loaded;
};

export const getLoadRecipeError = (state, sweetId) => {
  const sweetsStatus = requestStatus(state, c.LOAD_RECIPE_CONSTANT);
  const { error } = sweetId ? (sweetsStatus && sweetsStatus[sweetId]) || {} : sweetsStatus || {};

  return error;
};

export const getSweet = (state, sweetId) => {
  const sweets = entities(state, 'sweets');

  return sweets && sweets[sweetId];
};

export const placingOrder = (state, sweetId) => {
  const status = requestStatus(state, c.PLACE_ORDER_CONSTANT);
  const { isLoading } = sweetId
    ? (status && status[sweetId]) || {}
    : status || {};

  return isLoading;
};

export const placedOrder = (state, sweetId) => {
  const status = requestStatus(state, c.PLACE_ORDER_CONSTANT);
  const { loaded } = sweetId
    ? (status && status[sweetId]) || {}
    : status || {};

  return loaded;
};
