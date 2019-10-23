class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.integer :att
      t.integer :hp
      t.integer :sellprice
      t.integer :buyprice

      t.timestamps
    end
  end
end
