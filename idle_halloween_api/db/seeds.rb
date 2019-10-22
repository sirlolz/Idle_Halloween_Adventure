# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name:"jared", hp:10, att:1)
Monster.create(name:"bleh", hp:5, att:1)

Item.create(name:"Wood Sword", hp:0, att:2, description:"Maybe it'll cut them, maybe it'll give them some bruises. Who knows?", buyprice: , sellprice: )
Item.create(name:"Iron Sword", hp:0, att:4, description:"A squire's first real weapon.", buyprice: , sellprice: )
Item.create(name:"Silver Sword", hp:0, att:5, description:"Better than iron.", buyprice: , sellprice: )
Item.create(name:"Gold Sword", hp:0, att:8, description:"Oooo Shiny!", buyprice: , sellprice: )
Item.create(name:"Platinum Sword", hp:0, att:10, description:"Better than gold.", buyprice: , sellprice: )
Item.create(name:"Diamond Sword", hp:0, att:12, description:"Oooo Shinier!", buyprice: , sellprice: )
Item.create(name:"Master Sword", hp:0, att:14, description:"Better than diamond.", buyprice: , sellprice: )
Item.create(name:"Challenger Sword", hp:0, att:16, description:"Shiniest... or is it?", buyprice: , sellprice: )
Item.create(name:"Infinity Edge", hp:0, att:20, description:"Forged by the Gods!", buyprice: , sellprice: )

Item.create(name:"Wood Armor", hp:2, att:0, description:"Will stop a sword if the sword is wooden.")
Item.create(name:"Iron Armor", hp:4, att:0, description:"A squire's first real armor")
Item.create(name:"Silver Armor", hp:6, att:0, description:"Better than iron.")
Item.create(name:"Gold Armor", hp:8, att:0, description:"Will attract the fairest damsels in the land.")
Item.create(name:"Platinum Armor", hp:10, att:0, description:"A rapper's most wanted item")
Item.create(name:"Diamond Armor", hp:12, att:0, description:"")
Item.create(name:"Master Armor", hp:14, att:0, description:"")
Item.create(name:"Challenger Armor", hp:16, att:0, description:"")
Item.create(name:"Warmog's Armor", hp:20, att:0, description:"")

Item.create(name:"Wood Shield", hp:1, att:1)
Item.create(name:"Iron Shield", hp:2, att:2)
Item.create(name:"Silver Shield", hp:3, att:3)
Item.create(name:"Gold Shield", hp:4, att:4)
Item.create(name:"Platinum Shield", hp:5, att:5)
Item.create(name:"Diamond Shield", hp:6, att:6)
Item.create(name:"Master Shield", hp:7, att:7)
Item.create(name:"Challenger Shield", hp:8, att:8)

Item.create(name:"Wood Boots", hp:1, att:1)
Item.create(name:"Iron Boots", hp:2, att:2)
Item.create(name:"Silver Boots", hp:3, att:3)
Item.create(name:"Gold Boots", hp:4, att:4)
Item.create(name:"Platinum Boots", hp:5, att:5)
Item.create(name:"Diamond Boots", hp:6, att:6)
Item.create(name:"Master Boots", hp:7, att:7)
Item.create(name:"Challenger Boots", hp:8, att:8)


