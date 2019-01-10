import { generateAsyncActionCreator } from 'src/utils/redux';
import * as c from './constants';

export const loadSweets = generateAsyncActionCreator(c.LOAD_SWEETS);
export const loadRecipe = generateAsyncActionCreator(c.LOAD_RECIPE);
export const placeOrder = generateAsyncActionCreator(c.PLACE_ORDER);
