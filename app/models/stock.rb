class Stock < ApplicationRecord

  validates :ticker, uniqueness: true, presence: true
  validates :company_name, :market_cap, presence: true


  has_many :joins,
  foreign_key: :stock_id,
  class_name: :Join

  has_many :watchlists,
  through: :joins,
  source: :watchlist



end
