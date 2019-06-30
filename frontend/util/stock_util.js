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

export const queryStocks = (query) => (
  $.ajax({
    url: `api/stocks/search/${query}`,
    method: "GET"
  })
)




export const fetchStocksData = (symbols) => {
  const symzed = symbols.map((arr)=>(arr[0])).join(",");

  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symzed}&tsyms=USD`,
      method: "GET",

    })
  )
}





export const fetchPrice = (sym) => (
  $.ajax({
    url: `https://min-api.cryptocompare.com/data/price?fsym=${sym}&tsyms=USD`,
    method: "GET",

  })
)

export const fetchStockDaily = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histominute?fsym=${sym}&tsym=USD&limit=1441`,
      method: "GET",

    })
  )
}
export const miniFetchStockDaily = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histohour?fsym=${sym}&tsym=USD&limit=25`,
      method: "GET",

    })
  )
}

export const fetchStockWeekly = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histohour?fsym=${sym}&tsym=USD&limit=169`,
      method: "GET",

    })
  )
}

export const fetchStockMonthly = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histoday?fsym=${sym}&tsym=USD&limit=30`,
      method: "GET",

    })
  )
}

export const fetchStockQuarterly = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histoday?fsym=${sym}&tsym=USD&limit=90`,
      method: "GET",

    })
  )
}


export const fetchStockYearly = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histoday?fsym=${sym}&tsym=USD&limit=365`,
      method: "GET",

    })
  )
}

export const fetchStockFiveYearly = (sym) => {
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/histoday?fsym=${sym}&tsym=USD&limit=1825`,
      method: "GET",

    })
  )
}

export const fetchAllNews = (syms) => {
  const categories = ["BTC","ETH","LTC","XMR","ZEC","ETC","XRP","TRX","ADA","DASH","XTZ","USDT"];
  let symbz = syms.map((sym) => {
    if (categories.includes(sym)){
      return sym
    }
  })
  if (symbz.length < 1){
    symbz = ["Blockchain","Market","Exchange","Regulation","Trading"];
  }
  symbz = symbz.join(",");
  return (
    $.ajax({
      url: `https://min-api.cryptocompare.com/data/v2/news/?categories=${symbz}&excludeCategories=Sponsored`,
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
