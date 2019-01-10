import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  ActivityIndicator,
  View,
} from 'react-native';
import { withTheme } from 'styled-components';


import HomePageTitle from 'src/components/SweetShop/SweetShopNavigationBar/index';
import ErrorScreen from 'src/components/ErrorScreen/index';
import Icon from 'src/components/Icon/index';
import assets from 'src/assets/index';

import {
  MatchingPropertiesText,
  Heading,
  SweetCard,
  SweetCardHeader,
  SweetCardTitle,
  SweetImage,
  HatIconWrapper,
  ArrowIconWrapper,
  SweetCardHeaderMain,
} from './index.style';

const MatchingPercentageWrapperHeight = 40;

class HomePage extends React.PureComponent {
  static navigationOptions() {
    return { headerLeft: <HomePageTitle /> };
  }

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.renderSweets = this.renderSweets.bind(this);
  }

  componentDidMount() {
    const { loadSweets } = this.props;

    loadSweets();
  }

  renderItem({ item }) {
    const { navigation, theme } = this.props;
    const {
      image,
      id,
      title,
      points,
    } = item || {};
    const imageStyle = { tintColor: theme.colors.greyedYellow, height: MatchingPercentageWrapperHeight };
    const imageExtraProp = { resizeMode: 'contain' };

    return (
      <SweetCard
        onPress={() => navigation.navigate('SweetItem', {
          // requestId is extremely IMPORTANT (check AppView.js)
          sweetItem: item,
          requestId: item.id,
        })}
        key={`SWEET-${id}`}
      >
        <SweetCardHeader height={MatchingPercentageWrapperHeight + (2 * 16)}>
          <SweetCardHeaderMain>
            <HatIconWrapper key={`matching-properties-wrapper-${id}`}>
              <Icon
                touchableDisabled
                style={{ position: 'relative', marginRight: 0 }}
                source={assets.icons.chef}
                imageStyle={imageStyle}
                imageExtraProp={imageExtraProp}
              />
              <MatchingPropertiesText>{`${points}`}</MatchingPropertiesText>
            </HatIconWrapper>
            <SweetCardTitle numberOfLines={2}>{title}</SweetCardTitle>
          </SweetCardHeaderMain>

          <ArrowIconWrapper>
            <Icon
              touchableDisabled
              style={{ marginRight: -8 }}
              source={assets.icons.arrowRight}
              imageStyle={imageStyle}
              imageExtraProp={imageExtraProp}
            />
          </ArrowIconWrapper>
        </SweetCardHeader>

        <SweetImage
          key={`sweet-image-${id}`}
          source={image ? { uri: image } : assets.icons.placeholder}
          resizeMode="cover"
        />
      </SweetCard>
    );
  }

  renderSweets() {
    const { sweets, theme } = this.props;

    return (
      <FlatList
        listKey="sweets-list"
        keyExtractor={item => `sweet-item-${item && item.id}`}
        ListHeaderComponent={<Heading key="heading">Pick some Sweets!</Heading>}
        ListFooterComponent={<View style={{ height: 24 }} />}
        style={{ paddingTop: theme.spacing.screen.vertical, flex: 1 }}
        data={sweets}
        renderItem={this.renderItem}
        removeClippedSubviews
      />
    );
  }

  render() {
    const {
      loadingSweets,
      loadSweetsError,
      loadSweets,
      theme,
    } = this.props;

    if (!loadingSweets && loadSweetsError) {
      return (<ErrorScreen customError={loadSweetsError.message} onRefresh={loadSweets} />);
    }

    return (
      <View style={{ backgroundColor: theme.colors.lightYellow, flex: 1 }}>
        {
          loadingSweets
            ? (
              <ActivityIndicator
                style={{ margin: 100 }}
                color={theme.colors.darkYellow}
                size="large"
              />
            )
            : this.renderSweets()}
      </View>
    );
  }
}

HomePage.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({}).isRequired,
  loadingSweets: PropTypes.bool,
  loadSweets: PropTypes.func,
  loadSweetsError: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  sweets: PropTypes.arrayOf(PropTypes.object),
};

HomePage.defaultProps = {
  loadingSweets: false,
  loadSweets: () => {},
  loadSweetsError: null,
  sweets: [],
};

export default withTheme(HomePage);
