class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :att, :hp, :description
end
