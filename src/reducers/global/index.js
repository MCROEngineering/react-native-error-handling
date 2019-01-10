import {combineReducers} from 'redux';

import navigation from './navigation/nav';
import Entities from 'src/reducers/global/entities';
import Pagination from 'src/reducers/global/pagination';
import RequestStatus from 'src/reducers/global/requestStatus/requestStatus';

const reducers = {
  navigatorState: navigation,
  entities: Entities,
  pagination: Pagination,
  requestStatus: RequestStatus,
};

const appReducer = combineReducers(reducers);

export default (state, action) => appReducer(state, action);
