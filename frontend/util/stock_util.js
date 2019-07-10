export const fetchStocks = () => (
  $.ajax({
    url: "api/stocks",
    method: "GET",
  })
);

export const fetchStock = (id) => (
  $.ajax({
    url: `api/stocks/${id}`,
    method: "GET"
  })
)

export const searchStocks = (input) => (
  $.ajax({
    url: `api/stocks/search/${input}`,
    method: "GET"
  })
)




export const fetchStocksData = (symbols) => {
  const symzed = symbols.map((arr)=>(arr[0])).join(",");

  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symzed}&tsyms=USD&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`,
      method: "GET",

    })
  )
}





export const fetchPrice = (sym) => (
  $.ajax({
    url: `https://min-api.cryptocompare.com/data/price?fsym=${sym}&tsyms=USD&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`,
    method: "GET",

  })
)

export const fetchStockDailyByMin = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histominute?fsym=${sym}&tsym=USD&limit=1441`,
      method: "GET",

    })
  )
}
export const fetchStockDailyByHour = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histohour?fsym=${sym}&tsym=USD&limit=25`,
      method: "GET",

    })
  )
}

export const fetchStockWeeklyByHour = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histohour?fsym=${sym}&tsym=USD&limit=169`,
      method: "GET",

    })
  )
}

export const fetchStockMonthlyByDay = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histoday?fsym=${sym}&tsym=USD&limit=30`,
      method: "GET",

    })
  )
}

export const fetchStockQuarterlyByDay = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histoday?fsym=${sym}&tsym=USD&limit=90`,
      method: "GET",

    })
  )
}


export const fetchStockYearlyByDay = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histoday?fsym=${sym}&tsym=USD&limit=365`,
      method: "GET",

    })
  )
}

export const fetchStockFiveYearlyByDay = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histoday?fsym=${sym}&tsym=USD&limit=1825`,
      method: "GET",

    })
  )
}


export const fetchNews = (symbol) => {
  if (symbol.length<3){
    symbol = "Blockchain"
  }
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/v2/news/?categories=${sym}&excludeCategories=Sponsored`,
      method: "GET"
    })
  )
}

// `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=ZRQW53GP2UJEJ1UK`
