# == Schema Information
#
# Table name: stocks
#
#  id         :bigint(8)        not null, primary key
#  ticker     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  popularity :integer
#  price      :float
#

class Stock < ApplicationRecord

  validates :ticker, uniqueness: true, presence: true
  


  has_many :watchlist_stock_joins,
  foreign_key: :stock_id,
  class_name: :WatchlistStockJoin

  has_many :watchlists,
  through: :watchlist_stock_joins,
  source: :watchlist





end
