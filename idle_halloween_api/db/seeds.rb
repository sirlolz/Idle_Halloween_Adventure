# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name:"jared", hp:10, att:1)
User.create(name:"stan",hp:99, att: 99)

Monster.create(name:"bleh", hp:5, att:1, img:"")
Monster.create(name:"Jack o Lantern", hp: 10, att:5, img:"")
Monster.create(name:"Zombie", hp: 10, att:5, img:"")
Monster.create(name:"Mummy", hp: 10, att:5, img:"")
Monster.create(name:"Mike Tyson", hp: 10, att:5, img:"")
Monster.create(name:"Werewolf", hp: 10, att:5, img:"")
Monster.create(name:"Frankenstein", hp: 10, att:5, img:"")
Monster.create(name:"Headless Horseman", hp: 10, att:5, img:"")
Monster.create(name:"Dracula", hp: 10, att:5, img:"")
Monster.create(name:"Swamp Thing", hp: 10, att:5, img:"")
Monster.create(name:"Devil", hp: 10, att:5, img:"")
Monster.create(name:"Jeff Bezos", hp: 10, att:5, img:"")

Item.create(name:"Wood Sword", hp:0, att:2, description:"Maybe it'll cut them, maybe it'll give them some bruises. Who knows?", buyprice:2, sellprice:1 )
Item.create(name:"Iron Sword", hp:0, att:4, description:"A squire's first real weapon.", buyprice: 4, sellprice:2 )
Item.create(name:"Silver Sword", hp:0, att:5, description:"Better than iron.", buyprice: 6, sellprice:3 )
Item.create(name:"Gold Sword", hp:0, att:8, description:"Oooo Shiny!", buyprice: 8, sellprice: 4)
Item.create(name:"Platinum Sword", hp:0, att:10, description:"Better than gold.", buyprice:10 , sellprice: 5)
Item.create(name:"Diamond Sword", hp:0, att:12, description:"Oooo Shinier!", buyprice: 12, sellprice: 6)
Item.create(name:"Master Sword", hp:0, att:14, description:"Better than diamond.", buyprice: 14, sellprice: 7)
Item.create(name:"Challenger Sword", hp:0, att:16, description:"Shiniest... or is it?", buyprice: 16, sellprice: 8)
Item.create(name:"Infinity Edge", hp:0, att:20, description:"Forged by the Gods!", buyprice: 18, sellprice: 9)

Item.create(name:"Wood Armor", hp:2, att:0, description:"Will stop a sword if the sword is wooden.", buyprice:2, sellprice:1)
Item.create(name:"Iron Armor", hp:4, att:0, description:"A squire's first real armor", buyprice:4, sellprice:2)
Item.create(name:"Silver Armor", hp:6, att:0, description:"Better than iron.", buyprice:6, sellprice:3)
Item.create(name:"Gold Armor", hp:8, att:0, description:"Will attract the fairest damsels in the land.", buyprice:8, sellprice:4)
Item.create(name:"Platinum Armor", hp:10, att:0, description:"A rapper's most wanted item.", buyprice:10, sellprice:5)
Item.create(name:"Diamond Armor", hp:12, att:0, description:"Diamonds are forever.", buyprice:12, sellprice:6)
Item.create(name:"Master Armor", hp:14, att:0, description:"Master Chief would be proud.", buyprice:14, sellprice:7)
Item.create(name:"Challenger Armor", hp:16, att:0, description:"You'll be ready to take on the world.", buyprice:16, sellprice:8)
Item.create(name:"Warmog's Armor", hp:20, att:0, description:"You are a warmonger.", buyprice:18, sellprice:9)

Item.create(name:"Wood Shield", hp:1, att:1, description:"Link's first shield.", buyprice: 2, sellprice: 1)
Item.create(name:"Iron Shield", hp:2, att:2, description:"Pantheon's shield.", buyprice: 4, sellprice:2 )
Item.create(name:"Silver Shield", hp:3, att:3, description:"Standard shield of The Army of Doom.", buyprice: 6, sellprice:3 )
Item.create(name:"Gold Shield", hp:4, att:4, description:"Heavy but valueable", buyprice: 8, sellprice: 4)
Item.create(name:"Platinum Shield", hp:5, att:5, description:"Even more valueable than a gold shield", buyprice: 10, sellprice: 5)
Item.create(name:"Diamond Shield", hp:6, att:6, description:"Damn this thing is cool", buyprice: 12, sellprice: 6)
Item.create(name:"Master Shield", hp:7, att:7, description:"Obey your master", buyprice: 14, sellprice: 7)
Item.create(name:"Challenger Shield", hp:8, att:8, description:"You are the best", buyprice: 16, sellprice: 8)
Item.create(name:"Stan's Shield of Stunning Standing Starry Stupid Stuff", hp:10, att:10, description:"You are the best", buyprice: 18, sellprice: 9)

Item.create(name:"Wood Boots", hp:1, att:1, description:"Not very comfortable", buyprice:2, sellprice:1)
Item.create(name:"Iron Boots", hp:2, att:2, description:"Still uncomfortable but a lot healthier", buyprice:4, sellprice:2)
Item.create(name:"Silver Boots", hp:3, att:3, description:"Can kill a vampire by kicking him", buyprice:6, sellprice:3)
Item.create(name:"Gold Boots", hp:4, att:4, description:"Michael Jordan would be jealous", buyprice:8, sellprice:4)
Item.create(name:"Platinum Boots", hp:5, att:5, description:"Migos would be jealous", buyprice:10, sellprice:5)
Item.create(name:"Diamond Boots", hp:6, att:6, description:"Will cut your toes up", buyprice:12, sellprice:6)
Item.create(name:"Master Boots", hp:7, att:7, description:"Makes you jump high", buyprice:14, sellprice:7)
Item.create(name:"Challenger Boots", hp:8, att:8, description:"Usain Bolt made these with his bare hands", buyprice:16, sellprice:8)
Item.create(name:"Booties of Thy Jared", hp:10, att:10, description:"Made by Jared's mum Debbie", buyprice:18, sellprice:9)


