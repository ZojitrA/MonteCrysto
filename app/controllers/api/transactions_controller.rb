class Api::TransactionsController < ApplicationController

  def create
    funds_to_subtract = params[:quantity] * params[:buy_price]
    @user = User.find_by(params[:user_id])
    if @user.funds_usd < funds_to_subtract
      render json ["Not Enough Funds"], status: 422
    else
      @transaction = Transaction.new(transaction_params)
      if @transaction.save
        @user.fund_usd = @user.funds_usd - funds_to_subtract
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
    params.require(:transaction).permit(:user_id, :stock_id, :quantity, :buy_price)
  end
end
