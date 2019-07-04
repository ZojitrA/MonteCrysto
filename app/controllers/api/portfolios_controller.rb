
class Api::PortfoliosController < ApplicationController

  def create
      @portfolio = Portfolio.new(portfolio_params)
      @portfolio.portfolio_history_id = current_user.portfolio_history.id
      if @portfolio.save
        render "api/portfolios/create"
      else
        render json: @portfolio.errors.full_messages, status: 422
      end
    end

    def index
      @portfolios = current_user.portfolios.order('portfolios.created_at ASC')
    end

    private
    def portfolio_params
      params.require(:portfolio).permit(:account_value)
    end

end
