import { connect } from 'react-redux';
import TransactionsBar from './transactionsBar';
import { createTransaction } from '../../actions/transaction_actions';
import {getAllShares} from '../../actions/share_actions';
import {updateUser} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id]
  return {
    currentUser: currentUser,
    funds: currentUser.funds_usd,
    ticker: ownProps.ticker,
    shares: state.entities.shares,
    allStocks: state.entities.stocks,
    errors: state.errors.transaction
  }
}

const mapDispatchToProps = dispatch => ({
  getAllShares: (user_id) => dispatch(getAllShares(user_id)),

  createTransaction: (transaction) => dispatch(createTransaction(transaction)),
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsBar);
