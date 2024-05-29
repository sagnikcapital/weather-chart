class ApplicationController < ActionController::Base
  before_action :set_meta_tags

  private

  def set_meta_tags
    set_meta_tags site: 'Your Site Name',
                  title: 'Default Title',
                  description: 'Default Description',
                  keywords: %w[keyword1 keyword2 keyword3],
                  og: {
                    title: 'Default OG Title',
                    description: 'Default OG Description',
                    type: 'website',
                    url: request.original_url,
                    image: image_url('default_image.jpg')
                  },
                  twitter: {
                    card: 'summary',
                    site: '@your_twitter_handle',
                    title: 'Default Twitter Title',
                    description: 'Default Twitter Description',
                    image: image_url('default_image.jpg')
                  }
  end
end