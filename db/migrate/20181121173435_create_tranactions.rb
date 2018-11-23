class CreateTranactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.string :ticker, null: false
      t.integer :buy_price, null: false
      t.integer :quantity, null: false
    end
  end
end
