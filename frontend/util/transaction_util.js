export const createTransaction = (transaction) => {
  return(
    $.ajax({
      url: "api/transactions",
      method: "POST",
      data: {transaction}
    })
  )
}
