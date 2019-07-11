
  class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.funds_usd = 10000;
    if @user.save
      # Watchlist.create(user_id: @user.id, title: "portfolio")
      # Watchlist.create(user_id: @user.id, title: "primary_watchlist")
      @watchlist = @user.watchlist
      @watchlist_id = @user.watchlist.id
      WatchlistStockJoin.create!([{
          watchlist_id: @watchlist_id,
          stock_id: Stock.find_by(ticker: "ETH").id,
        }])
      WatchlistStockJoin.create!([{
          watchlist_id: @watchlist_id,
          stock_id: Stock.find_by(ticker: "ADX").id,
        }])
      WatchlistStockJoin.create!([{
          watchlist_id: @watchlist_id,
          stock_id: Stock.find_by(ticker: "QTUM").id,
        }])
      login(@user)

      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = user.find(params[:id])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  # User.create([{
  #   email:"soji@soji.com",
  #     password:"startrek",
  #     first_name: "soji",
  #     last_name: "soji",
  #     funds_usd: 0
  #   }
  #   ])

  def show
    @user = User.find(params[:id])
    @shares = User.find_all_shares(params[:user_id])
    @watchlist = @user.watchlist
  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :funds_usd)
  end
end
