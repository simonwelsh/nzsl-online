class PagesController < ApplicationController
  def show
    if @page = Page.find_by_slug(params[:slug])
      if @page.template == 'feedback'
        @feedback = Feedback.new
      end
      render :template => "pages/#{@page.template}"
    elsif @page = Page.find(Setting.get(:'404'))
      render :template => "pages/#{@page.template}", :status => 404
    end
  end
end