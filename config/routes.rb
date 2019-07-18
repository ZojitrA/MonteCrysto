Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :watchlists, only: [:index]
    end

resources :stocks, only: [:index, :show, :create]

    resources :watchlists, except: [:index] do

        resources :watch_list_stock_joins, only: [:create]

    end
    resources :transactions, only: [:create]

    get 'shares', :to => 'transactions#shares'
    get 'holdings', :to=> 'transactions#holdings'

    resources :watchlist_stock_joins, only: [:create]

    delete 'watchlist_stock_joins', :to => 'watchlist_stock_joins#destroy'


    resource :session, only: [:create, :destroy, :show]

    resources :watchlists, only:[:update]
    # custom for titled watchlists
    get 'watchlists/:selector', to: 'watchlists#titled'

    get 'stocks/search/:input', :to => 'stocks#search'
  end


end
