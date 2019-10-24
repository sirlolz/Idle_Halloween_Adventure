class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :level, :hp, :att, :purse, :items
end
