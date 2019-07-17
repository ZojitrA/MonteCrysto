export const getShares = (user_id, stock_id) => {
  return(
    $.ajax({
      url: 'api/shares',
      method: "GET",
      data: {
        user_id,
        stock_id
      }
    })
  )
}

export const getAllShares = (user_id) => {
  return(
    $.ajax({
      url: 'api/holdings',
      method: "GET",
      data: {
        user_id
      }
    })
  )
}
