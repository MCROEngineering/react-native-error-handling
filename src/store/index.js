import {applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Reactotron from 'src/utils/ReactotronConfig';

import rootReducer from 'src/reducers/global/navigation/index';

import { NavigationActions } from 'react-navigation';

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

const screenTracking = ({ getState }) => next => (action) => {
  if (
    action.type !== NavigationActions.NAVIGATE
    && action.type !== NavigationActions.BACK
  ) {
    return next(action);
  }

  const currentScreen = getActiveRouteName(getState().navigation);
  const result = next(action);
  const nextScreen = getActiveRouteName(getState().navigation);
  if (nextScreen !== currentScreen) {
    // the line below uses the Google Analytics tracker
    // change the tracker here to use other Mobile analytics SDK.
    tracker.trackScreenView(nextScreen);
  }
  return result;
};

const enhancers = [
  // applyMiddleware(screenTracking),
  applyMiddleware(thunk),
];

/* Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */
/* eslint-disable no-undef */
const composeEnhancers = (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers);

// create the store
const store = Reactotron.createStore(
  rootReducer,
  {},
  enhancer,
);

export default store;
