import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getIsLoadingRecipe,
  getLoadedRecipe,
  getLoadRecipeError,
  getSweet,
} from 'src/reducers/sweetshop/selectors';
import { loadRecipe } from 'src/reducers/sweetshop/actions';

import Sweet from './index.component';

const mapStateToProps = (state, ownProps) => {
  const sweetItem = ownProps.navigation.getParam('sweetItem');
  const { id: sweetItemId } = sweetItem || {}; // to get id

  return {
    sweetItem: getSweet(state, sweetItemId),
    loading: getIsLoadingRecipe(state, sweetItemId),
    loaded: getLoadedRecipe(state, sweetItemId),
    error: getLoadRecipeError(state, sweetItemId),
  };
};

const mapActionsToProps = dispatch => bindActionCreators({
  loadRecipe,
}, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Sweet);
