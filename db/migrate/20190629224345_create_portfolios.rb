class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :portfolio_history_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null:false
      t.float :account_value
    end
    add_index :portfolios, :portfolio_history_id, :unique => false
  end
end
