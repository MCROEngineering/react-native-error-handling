import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import SweetShop from 'src/modules/HomePage/index';
import SweetItem from 'src/modules/SweetPage/index';
import PlaceSweetOrder from 'src/modules/PlaceOrder/index';
import theme from 'src/assets/theme';

export const AppNavigator = createStackNavigator({
  SweetShop: {
    screen: SweetShop,
  },
  SweetItem: {
    screen: SweetItem,
  },
  PlaceSweetOrder: {
    screen: PlaceSweetOrder,
  },
},   {
  initialRouteName: 'SweetShop',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: theme.colors.mediumYellow,
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(AppNavigator);