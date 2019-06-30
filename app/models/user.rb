# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#  portfolio_id    :integer
#  email           :string           not null
#  funds_usd       :float
#

class User < ApplicationRecord

  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_one :watchlist,
      foreign_key: :user_id,
      class_name: 'Watchlist'

# has_one :primary_watchlist, -> {where title: "primary_watchlist"},
# foreign_key: :user_id,
# class_name: :Watchlist


# has_many :watchlists,
# foreign_key: :user_id,
# class_name: :Watchlist

has_many :stocks,
through: :watchlists,
source: :stocks

has_one :portfolio_history,
  foreign_key: :user_id,
  class_name: :PortfolioHistory

has_many :portfolios,
  through: :portfolio_history,
  source: :portfolios

has_many :transactions,
  foreign_key: :user_id,
  class_name: :Transaction

has_many :shares,
  through: :transactions,
  source: :stock

# has_many :watchlist_stock_joins,
# through: :watchlists,
# source: :watchlist_stock_joins

  def primary_watchlist_id
    self.primary_watchlist.id
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
