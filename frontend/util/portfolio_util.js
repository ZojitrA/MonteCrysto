export const fetchHistory = () => {
  return(
    $.ajax({
      url: "api/index",
      method: "GET",
    })
  )
}

export const createInstance = (portfolio) => {
  return(
    $.ajax({
      url: "api/portfolios",
      method: "POST",
      data: {portfolio}
    })
  )
}
