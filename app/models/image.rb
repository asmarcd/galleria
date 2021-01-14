class Image < ApplicationRecord
    validates :url, presence: true
end
