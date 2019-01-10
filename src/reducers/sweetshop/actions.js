import { normalize, schema as normalizrSchema } from 'normalizr';
import {
  getSweetsRequest,
  getSweetRecipeRequest,
  placeOrderRequest,
} from 'src/services/api_sweetshop';
import { entitiesUpdateItem } from 'src/reducers/global/organiser';

import * as ac from './actionsCreators';

const entitiesID = 'sweets';

const neighbourhoodSchema = new normalizrSchema.Entity(entitiesID, {}, { idAttribute: 'id' });
const neighbourhoodResultsSchema = [neighbourhoodSchema];

export function loadSweets() {
  return async (dispatch) => {
    dispatch(ac.loadSweets.request());

    try {
      const response = await getSweetsRequest();
      const { data } = response;
      const { sweets } = data;

      const results = normalize(sweets, neighbourhoodResultsSchema);

      return dispatch(ac.loadSweets.success({
        ...results,
        paginationId: entitiesID,
        resetIds: true,
      }));
    } catch (err) {
      return dispatch(ac.loadSweets.error({
        error: err,
      }));
    }
  };
}

export function loadRecipe(sweetId) {
  return async (dispatch) => {
    dispatch(ac.loadRecipe.request({ requestId: sweetId }));

    try {
      const response = await getSweetRecipeRequest(sweetId);

      dispatch(ac.loadRecipe.success({ requestId: sweetId }));
      return dispatch(entitiesUpdateItem({
        entitiesKey: 'sweets',
        itemId: sweetId,
        data: response.data,
      }));
    } catch (err) {
      return dispatch(ac.loadRecipe.error({
        requestId: sweetId,
        error: err,
      }));
    }
  };
}

export function placeOrder(order) {
  return async (dispatch) => {
    const { sweetId } = order || {};
    dispatch(ac.placeOrder.request({ requestId: sweetId }));

    try {
      await placeOrderRequest(order);

      return dispatch(ac.placeOrder.success({ requestId: sweetId, loaded: `The order for ${order.title} was successfully placed.` }));
    } catch (err) {
      return dispatch(ac.placeOrder.error({
        requestId: sweetId,
        error: err,
      }));
    }
  };
}


