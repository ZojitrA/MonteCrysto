
  class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.funds_usd = 10000;
    if @user.save
      Watchlist.create(user_id: @user.id, title: "portfolio")
      Watchlist.create(user_id: @user.id, title: "primary_watchlist")
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


  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :funds_usd, :portfolio_id)
  end
end
