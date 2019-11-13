import {connect} from 'react-redux';
import { getStockBy, getAllStocks} from '../../actions/stock_actions';
import Search from './search';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    history: ownProps.history,
    stocks: state.entities.stocks
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getStockBy: (ticker) => dispatch(getStockBy(ticker)),
  getAllStocks: () => dispatch(getAllStocks())

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
