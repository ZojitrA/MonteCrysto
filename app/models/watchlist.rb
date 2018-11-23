# == Schema Information
#
# Table name: watchlists
#
#  id      :bigint(8)        not null, primary key
#  user_id :integer          not null
#  title   :string           not null
#

class Watchlist < ApplicationRecord

  validates :title, presence: true
  validates_uniqueness_of :title, scope: :user_id



  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_many :watchlist_stock_joins,
  foreign_key: :watchlist_id,
  class_name: :WatchlistStockJoin

  has_many :stocks,
  through: :watchlist_stock_joins,
  source: :stock


# json.jbuilder
# watch.stock_ids --- > you wanna send this up
#
# json.watchlist do
#  @watchlist
# end
#
# json.stocks do
#  @watchlist.stocks
# end

end
