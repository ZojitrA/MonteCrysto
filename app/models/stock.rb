class Stock < ApplicationRecord

  validates :ticker, uniqueness: true, presence: true
  


  has_many :watchlist_stock_joins,
  foreign_key: :stock_id,
  class_name: :WatchlistStockJoin

  has_many :watchlists,
  through: :watchlist_stock_joins,
  source: :watchlist





end
