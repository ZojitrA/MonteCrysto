@stocks.each do |stock|
  json.set! stock.ticker do
    json.extract! stock, :id, :name, :ticker
  end
end
