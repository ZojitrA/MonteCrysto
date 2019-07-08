@stocks.each do |stock|
  json.set! stock.id do
    json.extract! stock, :id, :name, :ticker
  end
end
