class DeleteTitleColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :watchlists, :title
  end
end
