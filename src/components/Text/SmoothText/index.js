import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './index.style';

const SmoothText = ({ text }) => (
  <Text>{text}</Text>
);

SmoothText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SmoothText;
