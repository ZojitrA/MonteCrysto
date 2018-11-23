Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :watchlists, only: [:index]
    end

    resources :watchlists, except: [:index] do
        resources :stocks, only: [:index]
        resources :watch_list_stock_joins, only: [:create]
        delete 'watch_list_stock_joins', to: "watch_list_stock_joins#destroy"
    end



    resource :session, only: [:create, :destroy, :show]

    resources :watchlists, only:[:update]
    # custom for titled watchlists
    get 'watchlists/:selector', to: 'watchlists#titled'
  end


end
