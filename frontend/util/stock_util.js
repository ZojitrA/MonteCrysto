


export const getStockBy = ticker => (
  $.ajax({
    method: 'GET',
    url: `https://api.iextrading.com/1.0/stock/${ticker}/quote`
    })
);

export const getChartBy = (ticker, timeframe) => (
  $.ajax({
    method: 'GET',
    url: `https://api.iextrading.com/1.0/stock/${ticker}/chart/${timeframe}`
    })
)



// `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=ZRQW53GP2UJEJ1UK`
