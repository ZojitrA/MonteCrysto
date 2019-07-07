

json.watchlist do
    json.set! @watchlist.id do
      json.extract! @watchlist, :id, :stock_ids
    end
  end

json.stocks do
    @watchlist.stocks.each do |stock|
      json.set! stock.id do
        json.extract! stock, :ticker
      end
    end
  end
