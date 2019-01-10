import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTheme } from 'styled-components';

import PlaceOrder from './index.component';
import { placeOrder } from 'src/reducers/sweetshop/actions';
import { placingOrder, placedOrder } from 'src/reducers/sweetshop/selectors';

const mapStateToProps = (state, ownProps) => {
  const sweetItem = ownProps.navigation.getParam('sweetItem');
  const {id } = sweetItem || {};// to get id

  return {
    sweetItem,
    placingOrder: placingOrder(state, id),
    placedOrder: placedOrder(state, id),
  };
};

const mapActionsToProps = dispatch => bindActionCreators({
  placeOrder,
}, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(withTheme(PlaceOrder));
