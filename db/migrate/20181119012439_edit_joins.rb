class EditJoins < ActiveRecord::Migration[5.2]
  def change
    remove_column :joins, :title
  end
end
