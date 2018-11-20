class EditUsersWatchlist < ActiveRecord::Migration[5.2]
  def change
    add_column :stocks, :quantity, :integer
  end
end
