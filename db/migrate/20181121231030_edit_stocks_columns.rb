class EditStocksColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :market_cap
    remove_column :stocks, :company_name
  end
end
