class Stock < ApplicationRecord

  validates :ticker, uniqueness: true, presence: true
  validates :company_name, :market_cap, presence: true



end
