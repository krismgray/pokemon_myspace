class CreateProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :move
      t.string :move

      t.timestamps
    end
  end
end
