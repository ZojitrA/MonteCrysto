class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|

      t.string :ticker, null: false
      t.string :company_name, null: false
      t.float :price, null: false
      t.integer :popularity, null: false
      t.integer :market_cap, null: false

      t.timestamps

    end
    add_index :stocks, :ticker, unique: true
  end
end
