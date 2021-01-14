Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'images/index'
      post 'images/create'
      get '/show/:id', to: 'images#show'
      delete '/destroy/:id', to: 'images#destroy'
    end
  end
  root 'gallery#index'
  get '/*path' => 'gallery#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
