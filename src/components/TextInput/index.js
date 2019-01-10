import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import defaultTheme from 'src/assets/theme';

import {
  Text,
  TextInput,
  TouchableIcon,
  Icon,
  View,
  TouchableText,
} from './index.style';

class TextInputComponent extends Component {
  constructor() {
    super();
    this.state = {
      focusColor: '',
    };
    this.handleOnEndEditing = this.handleOnEndEditing.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnTouchableIconPress = this.handleOnTouchableIconPress.bind(this);
  }

  handleOnFocus() {
    const { focusColor, onFocus } = this.props;

    if (focusColor && focusColor.length) {
      this.setState({ focusColor });
    }
    if (onFocus) {
      onFocus();
    }
  }

  handleOnEndEditing() {
    const { onEndEditing } = this.props;

    this.setState({ focusColor: '' });

    if (onEndEditing) {
      onEndEditing();
    }
  }

  handleOnTouchableIconPress() {
    const { onRightIconPress } = this.props;

    onRightIconPress();
  }

  renderContent() {
    const {
      theme, hasError, type, onSubmitEditing, showOnlyPlainText, numberOfLines, maxLength, value, placeholder,
      onChange, trim, onBlur, rightIconDisabled, rightIconStyle, rightIcon, rightIconChildStyle,
      inputRef, style, rightIconAlignmentTop, autoCapitalize, keyboardType, onPressInteraction,
      withoutTextInputInteraction,
    } = this.props;
    const { focusColor } = this.state;

    const isPassword = type === 'password';
    const highlightBorder = hasError ? { borderColor: theme.colors.danger } : {};
    const focusBorder = focusColor.length ? {} : {}; // { borderColor: focusColor } - disabled for now
    const inputStyle = [focusBorder, highlightBorder, style];

    return (
      <View>
        {
          withoutTextInputInteraction
            ? (
              <TouchableText onPress={onPressInteraction}>
                <Text
                  ref={inputRef}
                  onSubmitEditing={onSubmitEditing}
                  editable={!showOnlyPlainText}
                  style={[inputStyle, {
                    color: (!value || !value.length) ? theme.colors.gray : theme.colors.black,
                  }]}
                >
                  {value || placeholder}
                </Text>
              </TouchableText>
            )
            : (
              <TextInput
                ref={inputRef}
                onSubmitEditing={onSubmitEditing}
                editable={!showOnlyPlainText}
                style={inputStyle}
                underlineColorAndroid="transparent"
                secureTextEntry={isPassword}
                multiline={!!(numberOfLines)}
                maxLength={maxLength}
                value={value}
                placeholder={placeholder}
                onEndEditing={this.handleOnEndEditing}
                onFocus={this.handleOnFocus}
                onBlur={onBlur}
                onChangeText={text => onChange(trim ? text.trim() : text)}
                placeholderTextColor={theme.colors.gray}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
              />
            )
        }

        {rightIcon ? (
          <TouchableIcon
            disabled={rightIconDisabled}
            onPress={this.handleOnTouchableIconPress}
            style={[rightIconStyle]}
            rightIconAlignmentTop={rightIconAlignmentTop}
          >
            <Icon source={rightIcon} style={rightIconChildStyle} />
          </TouchableIcon>
        ) : null}
      </View>
    );
  }

  renderErrorIfAny() {
    const { hasError, showErrorUnderInput, theme } = this.props;

    if (hasError && showErrorUnderInput) {
      return (
        <Text style={{ color: theme.colors.danger }}>
          {hasError}
        </Text>
      );
    }
    return null;
  }

  render() {
    const { style } = this.props;

    return (
      <View style={[style]}>
        {this.renderContent()}
        {this.renderErrorIfAny()}
      </View>
    );
  }
}


TextInputComponent.propTypes = {
  hasError: PropTypes.bool,
  focusColor: PropTypes.string,
  inputRef: PropTypes.string,
  numberOfLines: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func,
  onFocus: PropTypes.func,
  onRightIconPress: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rightIconChildStyle: PropTypes.shape({}),
  rightIconDisabled: PropTypes.bool,
  rightIconStyle: PropTypes.shape({}),
  rightIconAlignmentTop: PropTypes.bool,
  showErrorUnderInput: PropTypes.bool,
  showOnlyPlainText: PropTypes.bool,
  style: PropTypes.shape({}),
  theme: PropTypes.shape({}),
  value: PropTypes.string,
  trim: PropTypes.bool,
  type: PropTypes.string,
  autoCapitalize: PropTypes.string,
  keyboardType: PropTypes.string,
  onPressInteraction: PropTypes.func,
  withoutTextInputInteraction: PropTypes.bool,
};

TextInputComponent.defaultProps = {
  focusColor: defaultTheme.colors.borderHighlighted,
  hasError: false,
  inputRef: '',
  onBlur: () => {},
  onEndEditing: () => {},
  onFocus: () => {},
  onRightIconPress: () => {},
  onSubmitEditing: () => {},
  numberOfLines: 0,
  maxLength: 100,
  placeholder: '',
  rightIcon: '',
  rightIconChildStyle: {},
  rightIconDisabled: true,
  rightIconStyle: {},
  rightIconAlignmentTop: false,
  showErrorUnderInput: false,
  showOnlyPlainText: false,
  style: {},
  theme: {},
  trim: false,
  type: '',
  value: '',
  autoCapitalize: null,
  keyboardType: null,
  onPressInteraction: () => {},
  withoutTextInputInteraction: false,
};

export default withTheme(TextInputComponent);
