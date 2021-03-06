class Api::ProfilesController < ApplicationController
  before_action :authenticate_user!

  def index
    # render json: Profile.random_profiles
    render json: Profile.all
  end

  def my_profiles
    render json: Profile.liked(current_user.liked_profiles)
  end

  def update
    current_user.liked_profiles << params[:id].to_i
    current_user.save
  end
end
