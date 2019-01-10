import { entitiesUpdateType } from './organiser';

const initialState = {
};

// in order to add items in entities
// you have to send entities as param (object with string
// identifier for collection of entities)
// if you have pagination for the entities and you don't want to reset the entities,
// you have to send entitiesId (this will add new items to the existent items)

const entities = (state = initialState, action = {}) => {
  if (action.payload && action.payload.entities) {
    if (action.payload.entitiesId) {
      return {
        ...state,
        [action.payload.entitiesId]: {
          ...state[action.payload.entitiesId],
          ...action.payload.entities,
        },
      };
    }

    return {
      ...state,
      ...action.payload.entities,
    };
  }

  if (action.type === entitiesUpdateType) {
    return {
      ...state,
      [action.payload.entitiesKey]: {
        ...state[action.payload.entitiesKey],
        [action.payload.itemId]: {
          ...state[action.payload.entitiesKey][action.payload.itemId],
          ...action.payload.data,
        },
      },
    };
  }

  return state;
};

export default entities;
