import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from './index.style';

const HeadingComponent = ({ text }) => (
  <Heading>{text}</Heading>
);

HeadingComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadingComponent;
