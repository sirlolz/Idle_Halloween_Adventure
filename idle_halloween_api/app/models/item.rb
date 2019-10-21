class Item < ApplicationRecord
    has_many :invents
    has_many :users, through: :invent
end
