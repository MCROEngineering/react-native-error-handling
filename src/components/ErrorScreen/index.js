import { withTheme } from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Heading from 'src/components/Text/Heading/index';
import Section from 'src/components/SectionWrapper/index';
import Icon from 'src/components/Icon/index';
import assets from 'src/assets/index';

import getError from 'src/utils/getError';

import { ScreenWrapperCustom } from './index.style';

class ErrorScreen extends Component {
  render() {
    const {
      customError,
      theme,
      onRefresh,
    } = this.props;
    const error = getError(customError);

    return (
      <ScreenWrapperCustom onPress={onRefresh}>
        <Section
          style={{ alignItems: 'center' }}
        >
          <Icon
            source={assets.icons.frown}
            touchableDisabled
            imageStyle={{
              tintColor: theme.colors.darkYellow,
            }}
            imageExtraProp={{
              resizeMode: 'contain',
            }}
          />
        </Section>

        <Section>
          <Heading text={error || 'Something went wrong'} />
          <Heading text="Tap to refresh." />
        </Section>
      </ScreenWrapperCustom>
    );
  }
}

ErrorScreen.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  customError: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
  onRefresh: PropTypes.func,
};

ErrorScreen.defaultProps = {
  customError: null,
  onRefresh: () => {},
};

export default withTheme(ErrorScreen);
