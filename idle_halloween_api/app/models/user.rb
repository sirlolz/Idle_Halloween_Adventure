class User < ApplicationRecord
    has_many :invent
    has_many :items, through: :invent
end
