class AddToStocks < ActiveRecord::Migration[5.2]
  def change
    add_column :stocks, :price_change, :float, allow_nil: true

    remove_index :watchlist_stock_joins, :watchlist_id

    add_index :watchlist_stock_joins, [:watchlist_id, :stock_id], :unique => true
    add_index :watchlist_stock_joins, :watchlist_id, :unique => false

  end
end
