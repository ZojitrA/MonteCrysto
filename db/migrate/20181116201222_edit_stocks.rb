class EditStocks < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :price
    add_column :stocks, :price, :float
  end
end
