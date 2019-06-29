class AddColumnsToTransactions < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :net_worth_of_user, :float
    add_column :transactions, :stock_id, :integer, null: false
    add_index :transactions, :stock_id, unique: false
    add_index :transactions, :user_id, unique: false
  end
end
