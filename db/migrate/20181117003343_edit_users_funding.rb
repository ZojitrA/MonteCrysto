class EditUsersFunding < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :funds_usd, :float
    remove_column :users, :account_value
  end
end
