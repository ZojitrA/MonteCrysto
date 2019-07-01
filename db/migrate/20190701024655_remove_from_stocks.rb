class RemoveFromStocks < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :created_at
    remove_column :stocks, :updated_at
  end
end
