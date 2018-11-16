class EditUsersNull < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :popularity
    add_column :stocks, :popularity, :integer

    remove_column :users, :email
    add_column :users, :email, :string, null: false

  end
end
