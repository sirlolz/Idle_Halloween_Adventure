class CreateInvent < ActiveRecord::Migration[5.2]
  def change
    create_table :invents do |t|
      t.integer :user_id#, foreign_key: true
      t.integer :item_id#, foreign_key: true

      t.timestamps
    end
  end
end
