class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :level, :default => 1
      t.integer :hp, :default => 10
      t.integer :att, :default => 1
      t.integer :purse, :default => 5

      t.timestamps
    end
  end
end