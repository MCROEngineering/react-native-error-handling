import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Icon from 'src/components/Icon/index';
import { Button, Text } from './index.style';

class ButtonComponent extends React.PureComponent {
  constructor() {
    super();
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  getButtonExtraStyle() {
    const { disabled, icon, theme } = this.props;

    const style = {
      opacity: disabled ? 0.5 : 1,
    };

    if (icon) {
      style.justifyContent = 'flex-start';
      style.backgroundColor = theme.colors.white;
    }

    return style;
  }

  getTextExtraStyle() {
    const { icon, theme } = this.props;

    const style = {};

    if (icon) {
      style.color = theme.colors.black;
    }

    return style;
  }


  handleOnPress() {
    const { disabled, onPress } = this.props;

    if (!disabled) {
      onPress();
    }
  }

  renderIcon() {
    const { icon, theme } = this.props;

    if (icon) {
      return (
        <Icon
          withoutTintColor
          source={icon}
          style={{ marginRight: theme.spacing.component.big }}
        />
      );
    }
    return null;
  }

  render() {
    const { title, disabled, style } = this.props;
    const extraStyleButton = this.getButtonExtraStyle();
    const extraStyleText = this.getTextExtraStyle();

    return (
      <Button
        disabled={disabled}
        style={[extraStyleButton, style]}
        onPress={this.handleOnPress}
      >
        {this.renderIcon()}
        <Text style={[extraStyleText]}>{title}</Text>
      </Button>
    );
  }
}

ButtonComponent.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  theme: PropTypes.shape({}),
  title: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.shape({}),
};

ButtonComponent.defaultProps = {
  disabled: false,
  icon: '',
  theme: {
    colors: {
      textLight: 'lightBlue',
      accent: 'blue',
    },
  },
  title: '',
  onPress: () => {},
  style: {},
};

export default withTheme(ButtonComponent);
