class Api::TransactionsController < ApplicationController

  def create
    funds_to_subtract = transaction_params[:quantity].to_i * transaction_params[:buy_price].to_i
    @user = User.find(transaction_params[:user_id])
    ticker = Stock.find(transaction_params[:stock_id]).ticker

    given_quantity = transaction_params[:quantity].to_i
    stock_id = transaction_params[:stock_id].to_i
    quantity = User.find_stock_shares(@user.id, stock_id)[stock_id]
    if @user.funds_usd.to_i < funds_to_subtract
      render json: ["Not Enough Funds USD"], status: 401
    elsif given_quantity < 0 && given_quantity.abs > quantity
      render json: ["Not Enough Cryptocurrency"], status: 401
    else

      @transaction = Transaction.new(transaction_params)
      if @transaction.save
        funds = @user.funds_usd.to_i
        @user.update(funds_usd: funds - funds_to_subtract)
        render "api/transactions/holdings"
      else
        render json: @transaction.errors.full_messages, status: 422
      end
    end
  end

  def holdings
    @holdings = User.find_all_shares(params[:user_id])
  end

  def shares
    @shares = User.find_stock_shares(params[:user_id].to_i,(params[:stock_id]).to_i)
  end





  private
  def transaction_params
    params.require(:transaction).permit(:user_id, :stock_id, :quantity, :buy_price, :ticker)
  end
end
