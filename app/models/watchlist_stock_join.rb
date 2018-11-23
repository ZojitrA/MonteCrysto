# == Schema Information
#
# Table name: watchlist_stock_joins
#
#  id           :bigint(8)        not null, primary key
#  watchlist_id :integer          not null
#  stock_id     :integer          not null
#

class WatchlistStockJoin < ApplicationRecord

validates_uniqueness_of :stock_id, scope: :watchlist_id

  belongs_to :watchlist,
  foreign_key: :watchlist_id,
  class_name: :Watchlist

  belongs_to :stock,
  foreign_key: :stock_id,
  class_name: :Stock

end
