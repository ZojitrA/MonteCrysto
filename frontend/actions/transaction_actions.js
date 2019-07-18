import * as TransApiUtil from '../util/transaction_util';


export const RECEIVE_ALL_SHARES = "RECEIVE_ALL_SHARES";
export const RECEIVE_TRANSACTION_ERRORS = "RECEIVE_TRANSACTION_ERRORS";

export const receiveAllShares = (shares) => {
  return (
    {
      type: RECEIVE_ALL_SHARES,
      shares
    }
  )
}

export const receiveTransactionErrors = transactionErrors => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  transactionErrors,
});



export const createTransaction = userTransaction => dispatch => (
  TransApiUtil.createTransaction(userTransaction)
    .then(holdings => {
        dispatch(receiveAllShares(holdings));
        window.location.reload();
       },
      errors => dispatch(receiveTransactionErrors(errors.responseJSON)))
);
