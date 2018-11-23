
json.watchlists do
  @watchlists.each do |watchlist|
    json.set! watchlist.id do
      json.extract! watchlist, :id, :title, :stock_ids
    end
  end
end

json.stocks do
  @watchlists.each do |watchlist|
    watchlist.stocks.each do |stock|
      json.set! stock.id do
        json.extract! stock, :ticker
      end
    end
  end
end


# watchlists {
#   1: {
#     id: 1, title: "primary_watchlist", stock_ids: [1,2,3,4,5]
#   }
# }
#
# users {
#   1: {
#     id: 1, fname:, lname:, email:, watchlist_ids: [1], primary_watchlist_id: 1
#   }
# }

# json.stock_ids do
#   watchlist.stocks.each do |stock|
#     json.extract! stock, :ticker
#     json.quantity do
#     end
#   end
# end
