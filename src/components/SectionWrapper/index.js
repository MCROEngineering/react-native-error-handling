import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Wrapper } from './index.style';

const SectionWrapper = ({ children, style, theme, type }) => {
  const marginVertical = theme.spacing.section[type] / 2;

  return (
    <Wrapper style={{ marginVertical, ...style }}>
      {children}
    </Wrapper>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.element,
  theme: PropTypes.shape({}),
  type: PropTypes.string,
  style: PropTypes.shape({}),
};

SectionWrapper.defaultProps = {
  children: null,
  theme: {},
  type: 'default', // other valid props: smaller, small, big, bigger, biggest
  style: {},
};

export default withTheme(SectionWrapper);
