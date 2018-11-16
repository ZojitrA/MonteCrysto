class CreateCurrencies < ActiveRecord::Migration[5.2]
  def change
    create_table :currencies do |t|
      t.string :symbol, null: false
      t.string :name, null: false
      t.integer :popularity
    end
    add_index :currencies, :symbol, unique: true
  end
end
