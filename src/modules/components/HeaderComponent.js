import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Icon from 'src/components/Icon/index';
import assets from 'src/assets/index';

import {
  CardImage,
  CardImageWrapper,
  CardAboveImageWrapper,
  DetailsAboveImageWrapper,
  CardTitles,
  IconsAboveImageWrapper,
  IconsWrapper,
} from './index.style';

const IconDimension = 32;

class SellerContactHeader extends React.PureComponent {
  render() {
    const {
      theme,
      sweet,
      loading,
      setModalVisible,
      showSweetIcons,
    } = this.props;
    const {
      image,
      title,
    } = sweet;
    let sweetIcons = null;

    if (showSweetIcons) {
      sweetIcons = (
        <IconsAboveImageWrapper>
          <IconsWrapper>
            <Icon
              style={{
                marginRight: 16,
              }}
              imageStyle={{
                height: IconDimension,
                width: IconDimension,
                tintColor: loading ? theme.colors.border : theme.colors.white,
              }}
              source={assets.icons.chef}
              onPress={setModalVisible}
            />
          </IconsWrapper>
        </IconsAboveImageWrapper>
      );
    }

    let fontSize = 40;

    if (title.length > 24) {
      fontSize = 30;
    }
    if (title.length > 40) {
      fontSize = 24;
    }

    return (
      <CardImageWrapper>
        <CardImage source={image ? { uri: image } : assets.icons.placeholder} />

        <CardAboveImageWrapper>
          {sweetIcons}
          <DetailsAboveImageWrapper>
            <CardTitles
              style={{
                fontSize,
                lineHeight: fontSize + 4,
                color: theme.colors.white,
                fontFamily: theme.font.family.primary.bold,
              }}
              numberOfLines={3}
            >
              {title}
            </CardTitles>
          </DetailsAboveImageWrapper>
        </CardAboveImageWrapper>
      </CardImageWrapper>
    );
  }
}

SellerContactHeader.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  sweet: PropTypes.shape({}),
  loading: PropTypes.bool,
  showSweetIcons: PropTypes.bool,
  setModalVisible: PropTypes.func,
};

SellerContactHeader.defaultProps = {
  sweet: {},
  loading: false,
  showSweetIcons: false,
  setModalVisible: () => {},
};

export default withTheme(SellerContactHeader);
