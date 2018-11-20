import {connect} from 'react-redux';
import { getStockBy} from '../../../actions/stock_actions';
import Search from './search';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    history: ownProps.history
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getStockBy: (ticker) => dispatch(getStockBy(ticker))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
