Rails.application.routes.draw do
  root 'accounts#index'
  devise_for :users

  resources :accounts do 
    resources :items
  end
  # resources :items do
  #   resources :comments
  # end


end
