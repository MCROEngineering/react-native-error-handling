import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Icon from 'src/components/Icon/index';
import assets from 'src/assets/index';

import {
  OfferingCardImage,
  OfferingCardImageWrapper,
  OfferingCardAboveImageWrapper,
  OfferingDetailsAboveImageWrapper,
  CardTitles,
  OfferingsIconsAboveImageWrapper,
  Offer,
  OfferText,
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
      showOfferingIcons,
    } = this.props;
    const {
      image,
      title,
      offer,
    } = sweet;
    let fontSize = 40;

    if (title.length > 24) {
      fontSize = 30;
    }
    if (title.length > 40) {
      fontSize = 24;
    }

    return (
      <OfferingCardImageWrapper>
        <OfferingCardImage
          source={image ? { uri: image } : assets.icons.placeholder}
        />

        <OfferingCardAboveImageWrapper>
          {
            showOfferingIcons
              ? (
              <OfferingsIconsAboveImageWrapper>
                {offer ? (<Offer><OfferText>OFFER</OfferText></Offer>) : null}

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
              </OfferingsIconsAboveImageWrapper>
            )
              : null
          }
          <OfferingDetailsAboveImageWrapper>
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
          </OfferingDetailsAboveImageWrapper>
        </OfferingCardAboveImageWrapper>
      </OfferingCardImageWrapper>
    );
  }
}

SellerContactHeader.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  sweet: PropTypes.shape({}),
  loading: PropTypes.bool,
  showOfferingIcons: PropTypes.bool,
  setModalVisible: PropTypes.func,
};

SellerContactHeader.defaultProps = {
  sweet: {},
  loading: false,
  showOfferingIcons: false,
  setModalVisible: () => {},
};

export default withTheme(SellerContactHeader);
