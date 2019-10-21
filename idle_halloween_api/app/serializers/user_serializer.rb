class UserSerializer < ActiveModel::Serializer
  has_many :items, through: :inventory
  attributes :id, :level, :hp, :att
end
