import React from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';

import { View, Text, Text2 } from './index.style';

const NavigationBar = ({ alignItems }) => (
  <View style={alignItems ? { alignItems } : {}}>
    <Text2>Sweet</Text2>
    <Text>SHOP</Text>
  </View>
);

NavigationBar.propTypes = {
  alignItems: PropTypes.string,
};

NavigationBar.defaultProps = {
  alignItems: null,
};

export default withTheme(NavigationBar);
