Rails.application.routes.draw do
  namespace :api do
    resources :profiles
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
