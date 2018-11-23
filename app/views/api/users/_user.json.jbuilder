
# json.user do
  json.extract! user, :id, :email, :first_name, :last_name, :funds_usd, :watchlist_ids, :primary_watchlist_id

  # json.primary_watchlist_id do
  #   primary
  # end
# end
