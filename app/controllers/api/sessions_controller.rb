class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )



    if @user
      @watchlist = @user.watchlist
      @watchlist_id = @user.watchlist.id
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid Credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
        @watchlist = @user.watchlist
      logout
      render "api/users/show"
    else
      render json: ["Not signed in homie."], status: 404
    end
  end
end
