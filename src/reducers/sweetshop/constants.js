import { createRequestTypes } from 'src/utils/redux';

export const LOAD_SWEETS_CONSTANT = 'LOAD_SWEETS';
export const LOAD_SWEETS = createRequestTypes(LOAD_SWEETS_CONSTANT);

export const LOAD_RECIPE_CONSTANT = 'LOAD_RECIPE';
export const LOAD_RECIPE = createRequestTypes(LOAD_RECIPE_CONSTANT);

export const PLACE_ORDER_CONSTANT = 'PLACE_ORDER';
export const PLACE_ORDER = createRequestTypes(PLACE_ORDER_CONSTANT);