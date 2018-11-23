
class Api::WatchlistsController < ApplicationController
  def create

  end

  def index
    @watchlists = Watchlist.where(user_id: params[:user_id]).includes(:stocks)
    @user = params[:user_id]
    if @watchlists

      render :index
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def update

    @watchlist = Watchlist.find(params[:id])
    @stock = Stock.find_by(ticker: params[:ticker])

    if @stock.nil?
      @stock = Stock.create(ticker: params[:ticker])
    end

      WatchlistStockJoin.create(watchlist_id: @watchlist.id, stock_id: @stock.id)

      render "api/watchlists/show"
    # if @watchlist.update(watchlist_params)
    #   render "api/watchlists/show"
  end

  private

  # def watchlist_params
  #   params.require(:watchlist).permit(:ticker, :quantity, :title)
  # end

end
