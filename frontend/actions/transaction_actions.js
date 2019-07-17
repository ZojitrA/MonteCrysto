import * as TransApiUtil from '../util/transaction_util';


export const RECEIVE_ALL_SHARES = "RECEIVE_ALL_SHARES";

export const receiveAllShares = (shares) => {
  return (
    {
      type: RECEIVE_ALL_SHARES,
      shares
    }
  )
}

export const createTransaction = (transaction,user) => dispatch => {
  return(
  TransApiUtil.createTransaction(transaction).then(holdings => {
    return(dispatch(receiveAllShares(holdings)))
  }
))
