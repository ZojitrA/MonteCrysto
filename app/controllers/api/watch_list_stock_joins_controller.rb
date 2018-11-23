
class Api::WatchListStockJoinsController < ApplicationController


  def create
    @watchlist = Watchlist.find(params[:watchlist_id])
    @stock = Stock.find_by(ticker: params[:ticker])

    if @stock.nil?
      @stock = Stock.create(ticker: params[:ticker])
    end

      WatchlistStockJoin.create(watchlist_id: @watchlist.id, stock_id: @stock.id)

      render "api/watchlist_stocks/show"
  end


  def destroy

    @stock = Stock.find_by(ticker: params[:ticker])
    @watchlist_join = WatchlistStockJoin.find_by(watchlist_id: params[:watchlist_id], stock_id: @stock.id)
    @watchlist_join.destroy
    @watchlist = @watchlist_join.watchlist

    render "api/watchlist_stocks/show"

  end


end
