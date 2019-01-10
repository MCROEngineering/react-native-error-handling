import React from 'react';
import PropTypes from 'prop-types';

import { Image, ImageWithoutTint, TouchableOpacity } from './index.style';

const Icon = ({
  touchableDisabled,
  onPress,
  source,
  style,
  imageStyle,
  withoutTintColor,
  imageExtraProp,
}) => (
  <TouchableOpacity disabled={touchableDisabled} style={style} onPress={onPress}>
    {withoutTintColor
      ? <ImageWithoutTint style={imageStyle} source={source} />
      : <Image style={imageStyle} source={source} {...imageExtraProp} />
    }
  </TouchableOpacity>
);

Icon.propTypes = {
  imageStyle: PropTypes.shape({}),
  onPress: PropTypes.func,
  source: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.shape({}),
  touchableDisabled: PropTypes.bool,
  withoutTintColor: PropTypes.bool,
  imageExtraProp: PropTypes.shape({}),
};

Icon.defaultProps = {
  imageStyle: {},
  onPress: () => {},
  style: {},
  touchableDisabled: false,
  withoutTintColor: false,
  imageExtraProp: {},
};

export default Icon;
