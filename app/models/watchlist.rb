class Watchlist < ApplicationRecord

  validates :title, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_many :joins,
  foreign_key: :watchlist_id,
  class_name: :Join

  has_many :stocks,
  through: :joins,
  source: :stock


end
