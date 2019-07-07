class Api::TransactionsController < ApplicationController

  def create
    @transaction = Transaction.new(transaction_params)
    if @transaction.save
      render "api/transactions/create"
    else
      render json: @transaction.errors.full_messages, status: 422
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
