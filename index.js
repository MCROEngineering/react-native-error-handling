import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/assets/theme';
import DropdownAlert from './src/components/DropdownAlert';
import AppView from './src/AppView';
import store from './src/store';
import { name as appName } from './app.json';

const Shop = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <DropdownAlert>
          <AppView />
        </DropdownAlert>
      </ThemeProvider>
    </Provider>
  );
};


AppRegistry.registerComponent(appName, () => Shop);
