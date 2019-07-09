
class Api::WatchlistStockJoinsController < ApplicationController
  def create
    @watchlistStockJoin = WatchlistStockJoin.new(watchlist_params)
    if @watchlistStockJoin.save
      render "api/watchliststockjoins/create"
    else
      render json: @watchlistStockJoin.errors.full_messages, status: 422
    end
  end

  def destroy
    @watchlistStockJoin = WatchlistStockJoin.find_by(watchlist_params)
    if @watchlistStockJoin
      @watchlistStockJoin.delete
      render "api/watchliststockjoins/delete"
    else
      render json: ["Stock not on watchlist"], status: 404
    end
  end

  private
  def watchlist_params
    params.require(:watchlistStockJoin).permit(:watchlist_id, :stock_id)
  end

  # def create
  #   @watchlist = Watchlist.find(params[:watchlist_id])
  #   @stock = Stock.find_by(ticker: params[:ticker])
  #
  #   if @stock.nil?
  #     @stock = Stock.create(ticker: params[:ticker])
  #   end
  #
  #     WatchlistStockJoin.create(watchlist_id: @watchlist.id, stock_id: @stock.id)
  #
  #     render "api/watchlist_stocks/show"
  # end
  #
  #
  # def destroy
  #
  #   @stock = Stock.find_by(ticker: params[:ticker])
  #   @watchlist_join = WatchlistStockJoin.find_by(watchlist_id: params[:watchlist_id], stock_id: @stock.id)
  #
  #   @watchlist_join.destroy
  #   @watchlist = @watchlist_join.watchlist
  #
  #   render "api/watchlist_stocks/show"
  #
  # end


end
