import * as ShareApiUtil from '../util/share_util';

export const RECEIVE_SHARES = "RECEIVE_SHARES";
export const RECEIVE_ALL_SHARES = "RECEIVE_ALL_SHARES";

export const receiveShares = (shares) => {
  return (
    {
      type: RECEIVE_SHARES,
      shares
    }
  )
}

export const receiveAllShares = (shares) => {
  return (
    {
      type: RECEIVE_ALL_SHARES,
      shares
    }
  )
}

export const getShares = (user_id, stock_id) => dispatch =>{
  return(
    ShareApiUtil.getShares(user_id, stock_id).then(response=>{
      return(
        dispatch(receiveShares(response))
      )
    })
  )
}

export const getAllShares = (user_id) => dispatch => {
  return(
  ShareApiUtil.getAllShares(user_id).then(response=>{
    return(
      dispatch(receiveAllShares(response))
    )
  }
)
  )
}
