import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import { getStockBy} from '../../actions/stock_actions';
import Stock from './stock';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    ticker: ownProps.match.params.ticker,
    stock: state.entities.ticker
  };

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  getStock: (ticker) => dispatch(getStockBy(ticker)),
  addStock: (stock) => dispatch(createStock(stock)),
  addToList: (user_id, stock) => dispatch(addStock(user_id, stock))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
