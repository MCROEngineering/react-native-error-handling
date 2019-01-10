import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import ReadMore from 'react-native-read-more-text';
import { ActivityIndicator, Modal } from 'react-native';

import Icon from 'src/components/Icon/index';
import HeaderTitle from 'src/components/SweetShop/SweetShopNavigationBar/index';
import assets from 'src/assets/index';

import HeaderComponent from 'src/modules/components/HeaderComponent';
import {
  ScreenWrapper,
  ReadMoreWrapper,
  FooterRow,
  Text,
  RecipeViewer,
  RecipeScroller,
} from './index.style';

const IconDimension = 32;

class SweetView extends React.PureComponent {
  static navigationOptions() {
    return ({ headerTitle: <HeaderTitle alignItems="center" /> });
  }

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };

    this.renderTruncatedFooter = this.renderTruncatedFooter.bind(this);
    this.renderRevealedFooter = this.renderRevealedFooter.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { error, loading } = nextProps;

    if (!this.props.error && this.props.loading && error && !loading) {
      this.setState({ modalVisible: false });
    }
  }

  renderImageSection() {
    const {
      sweetItem,
      loading,
      loadRecipe,
    } = this.props;

    return (
      <HeaderComponent
        showSweetIcons
        sweet={sweetItem}
        loading={loading}
        setModalVisible={() => {
          this.setState({ modalVisible: true });
          if (sweetItem && sweetItem.id && !sweetItem.recipe) {
            loadRecipe(sweetItem.id);
          }
        }}
      />
    );
  }

  renderTruncatedFooter(handlePress) {
    const { theme } = this.props;

    return (
      <Text style={{ color: theme.colors.darkYellow, marginTop: 5, textAlign: 'center' }} onPress={handlePress}>
        Show More
      </Text>
    );
  }

  renderRevealedFooter(handlePress) {
    const { theme } = this.props;

    return (
      <Text style={{ color: theme.colors.darkYellow, marginTop: 5, textAlign: 'center' }} onPress={handlePress}>
        Show Less
      </Text>
    );
  }

  renderContent() {
    const { sweetItem } = this.props;
    const { description } = sweetItem || {};

    return [
      <ReadMoreWrapper key="read-more-wrapper">
        <ReadMore
          numberOfLines={6}
          renderTruncatedFooter={this.renderTruncatedFooter}
          renderRevealedFooter={this.renderRevealedFooter}
        >
          <Text key="description-text">
            {description}
          </Text>
        </ReadMore>
      </ReadMoreWrapper>,
    ];
  }

  renderModal() {
    const { modalVisible } = this.state;
    const { theme, loading, sweetItem } = this.props;
    const { recipe } = sweetItem || {};

    return (
      <Modal
        style={{ flex: 1 }}
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <RecipeViewer key="content-section">
          <Icon
            style={{
              padding: 12,
              backgroundColor: '#fafafa',
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
            }}
            imageStyle={{
              height: 24,
              width: 24,
              tintColor: theme.colors.darkYellow,
            }}
            source={assets.icons.close}
            onPress={() => this.setState({ modalVisible: false })}
          />
          <RecipeScroller>
            <Text
              style={{
                fontFamily: theme.font.family.primary.bold,
                marginHorizontal: 16,
              }}
              key="label-text"
            >
              {loading ? 'Recipe loading...' : 'Recipe:'}
              {recipe || ''}
            </Text>

            {loading && <ActivityIndicator color={theme.colors.darkYellow} size="large" style={{ marginTop: 24 }}/>}
          </RecipeScroller>
        </RecipeViewer>
      </Modal>
    );
  }

  render() {
    const {
      sweetItem,
      navigation,
      theme,
    } = this.props;

    return (
      <ScreenWrapper>
        {this.renderImageSection()}

        {this.renderModal()}
        {this.renderContent()}

        <FooterRow
          onPress={() => navigation.navigate('PlaceSweetOrder', {
            // requestId is extremely IMPORTANT (check AppView.js)
            sweetItem,
            requestId: sweetItem.id
          })}
        >
          <Icon
            imageStyle={{
              height: IconDimension,
              width: IconDimension,
              tintColor: theme.colors.darkYellow,
              marginHorizontal: 8,
            }}
            source={assets.icons.shoppingCart}
            touchableDisabled
          />
          <Text style={{ flex: 1 }}>Place an order</Text>
        </FooterRow>

      </ScreenWrapper>
    );
  }
}

SweetView.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({}).isRequired,
  sweetItem: PropTypes.shape({}),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
};

SweetView.defaultProps = {
  sweetItem: {},
  loading: false,
  error: null,
};

export default withTheme(SweetView);
