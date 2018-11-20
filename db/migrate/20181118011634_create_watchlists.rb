class CreateWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.integer :user_id, null: false
      t.string :title, null: false

    end
    add_index :watchlists, :user_id

    create_table :joins do |t|
      t.integer :watchlist_id, null: false
      t.integer :stock_id, null: false
      t.string :title, null: false
    end
    add_index :joins, :watchlist_id

  end
end
