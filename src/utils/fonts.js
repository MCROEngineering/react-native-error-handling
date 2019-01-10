import { PixelRatio, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const getFontSize = (fontSize) => {
  const pixelRatio = PixelRatio.get();

  if (pixelRatio <= 2 && height < 600) {
    return fontSize - 2;
  }

  return fontSize;
};

export const getPaddingSize = (paddingSize) => {
  const pixelRatio = PixelRatio.get();

  if (pixelRatio <= 2 && height < 600) {
    return paddingSize - 6;
  }

  return paddingSize;
};
