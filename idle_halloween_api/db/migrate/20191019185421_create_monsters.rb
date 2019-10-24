class CreateMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :monsters do |t|
      t.string :name
      t.integer :hp
      t.integer :att
      t.string :img
      t.integer :loot, :default => 5

      t.timestamps
    end
  end
end
