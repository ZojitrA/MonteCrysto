class Editnameofjoins < ActiveRecord::Migration[5.2]
  def change
    rename_table :joins, :watchlist_stock_joins

    remove_column :watchlist_stock_joins, :quantity
  end
end
