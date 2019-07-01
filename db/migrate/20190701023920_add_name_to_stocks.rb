class AddNameToStocks < ActiveRecord::Migration[5.2]
  def change
    add_column :stocks, :name, :string, null: false
  end
end
