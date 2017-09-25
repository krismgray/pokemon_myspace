100.times do
  name = Faker::Pokemon.name
  Faker::Config.random
  move = Faker::Pokemon.unique.move
  move = Faker::Pokemon.move
  Profile.create(name: name, move: move)
end


puts 'Seeded'
