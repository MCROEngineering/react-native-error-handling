const prefixKey = '@@redux-state-org/';
export const entitiesUpdateType = `${prefixKey}/entities/update`;

export const entitiesUpdateItem = ({ entitiesKey, data, itemId }) => ({
  type: `${entitiesUpdateType}`,
  payload: {
    entitiesKey,
    itemId,
    data,
  },
});
