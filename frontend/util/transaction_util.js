export const createTransaction = (transaction,user) => {
  return(
    $.ajax({
      url: "api/transactions",
      method: "POST",
      data: {transaction}
    })
  )
}
