import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getLoadedSweets,
  getIsLoadingSweets,
  getLoadSweetsError,
  getSweets,
} from 'src/reducers/sweetshop/selectors';
import { loadSweets } from 'src/reducers/sweetshop/actions';
import Home from './index.component';

const mapStateToProps = state => ({
  loadingSweets: getIsLoadingSweets(state),
  loadedSweets: getLoadedSweets(state),
  loadSweetsError: getLoadSweetsError(state),
  sweets: getSweets(state) || [],
});

const mapActionsToProps = dispatch => bindActionCreators({
  loadSweets,
}, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Home);
