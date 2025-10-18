// Bird data structure
const birdData = {
    "wings-of-asia": [
        {
            id: "javan-rhinoceros-hornbill",
            name: "Javan Rhinoceros Hornbill",
            chineseName: "爪哇犀鸟",
            image: "https://images.unsplash.com/photo-1549366021-9f761d040c22?w=400&h=300&fit=crop&q=80&auto=format",
            zone: "Wings of Asia",
            lifespan: "35-40 years",
            diet: "Fruits, small animals, insects",
            habitat: "Tropical rainforests",
            range: "Java, Indonesia",
            iucnStatus: "Near Threatened",
            funFact: "The massive casque on its head acts as a resonating chamber to amplify its calls, which can be heard up to 2km away."
        },
        {
            id: "oriental-magpie-robin",
            name: "Oriental Magpie Robin",
            chineseName: "东方鹊鸲",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
            zone: "Wings of Asia",
            lifespan: "8-12 years",
            diet: "Insects, berries, small reptiles",
            habitat: "Urban areas, gardens, forests",
            range: "South and Southeast Asia",
            iucnStatus: "Least Concern",
            funFact: "Known for their beautiful melodious songs, they are often kept as pets in some Asian countries."
        },
        {
            id: "red-whiskered-bulbul",
            name: "Red-whiskered Bulbul",
            chineseName: "红耳鹎",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
            zone: "Wings of Asia",
            lifespan: "6-10 years",
            diet: "Fruits, insects, nectar",
            habitat: "Gardens, parks, forests",
            range: "South Asia, introduced worldwide",
            iucnStatus: "Least Concern",
            funFact: "Has distinctive red 'whiskers' (ear patches) and a pointed black crest on its head."
        },
        {
            id: "white-throated-kingfisher",
            name: "White-throated Kingfisher",
            chineseName: "白喉翠鸟",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Wings of Asia",
            lifespan: "10-15 years",
            diet: "Fish, insects, small reptiles",
            habitat: "Rivers, lakes, wetlands",
            range: "South and Southeast Asia",
            iucnStatus: "Least Concern",
            funFact: "Despite its name, it doesn't always live near water and often hunts on land for insects and small animals."
        },
        {
            id: "asian-koel",
            name: "Asian Koel",
            chineseName: "亚洲鸦鹃",
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
            zone: "Wings of Asia",
            lifespan: "12-15 years",
            diet: "Fruits, insects, eggs",
            habitat: "Forests, gardens, urban areas",
            range: "South and Southeast Asia",
            iucnStatus: "Least Concern",
            funFact: "A brood parasite that lays its eggs in other birds' nests, particularly crows and mynas."
        },
        {
            id: "common-myna",
            name: "Common Myna",
            chineseName: "家八哥",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
            zone: "Wings of Asia",
            lifespan: "8-12 years",
            diet: "Omnivorous - insects, fruits, scraps",
            habitat: "Urban areas, agricultural land",
            range: "South Asia, introduced worldwide",
            iucnStatus: "Least Concern",
            funFact: "Highly intelligent and adaptable, known for their ability to mimic human speech and other sounds."
        },
        {
            id: "asian-pied-starling",
            name: "Asian Pied Starling",
            chineseName: "亚洲斑椋鸟",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
            zone: "Wings of Asia",
            lifespan: "6-10 years",
            diet: "Insects, fruits, seeds",
            habitat: "Open woodlands, agricultural areas",
            range: "South and Southeast Asia",
            iucnStatus: "Least Concern",
            funFact: "Forms large flocks and is known for its synchronized flying displays."
        },
        {
            id: "yellow-vented-bulbul",
            name: "Yellow-vented Bulbul",
            chineseName: "黄臀鹎",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
            zone: "Wings of Asia",
            lifespan: "5-8 years",
            diet: "Fruits, insects, nectar",
            habitat: "Gardens, parks, secondary forests",
            range: "Southeast Asia",
            iucnStatus: "Least Concern",
            funFact: "Named for its distinctive yellow undertail coverts, it's a common garden bird in Southeast Asia."
        }
    ],
    "african-treetops": [
        {
            id: "african-grey-parrot",
            name: "African Grey Parrot",
            chineseName: "非洲灰鹦鹉",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&q=80",
            zone: "African Treetops",
            lifespan: "40-60 years",
            diet: "Seeds, nuts, fruits, vegetables",
            habitat: "Dense forests, savannas",
            range: "Central and West Africa",
            iucnStatus: "Endangered",
            funFact: "Considered one of the most intelligent birds, capable of learning hundreds of words and understanding concepts like colors and numbers."
        },
        {
            id: "lovebird",
            name: "Lovebird",
            chineseName: "爱情鸟",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
            zone: "African Treetops",
            lifespan: "10-15 years",
            diet: "Seeds, fruits, vegetables",
            habitat: "Savannas, woodlands",
            range: "Africa",
            iucnStatus: "Least Concern",
            funFact: "Forms strong pair bonds and mates for life, often seen sitting close together and preening each other."
        },
        {
            id: "senegal-parrot",
            name: "Senegal Parrot",
            chineseName: "塞内加尔鹦鹉",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "African Treetops",
            lifespan: "25-30 years",
            diet: "Seeds, fruits, nuts, flowers",
            habitat: "Savannas, woodlands",
            range: "West Africa",
            iucnStatus: "Least Concern",
            funFact: "Known for their gentle nature and ability to mimic speech, making them popular pets."
        },
        {
            id: "blue-and-gold-macaw",
            name: "Blue and Gold Macaw",
            chineseName: "蓝黄金刚鹦鹉",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "African Treetops",
            lifespan: "30-50 years",
            diet: "Nuts, seeds, fruits, vegetables",
            habitat: "Tropical forests",
            range: "South America (but displayed in African zone)",
            iucnStatus: "Least Concern",
            funFact: "One of the largest parrots, with a wingspan up to 1.2 meters, and can live up to 80 years in captivity."
        },
        {
            id: "cockatiel",
            name: "Cockatiel",
            chineseName: "玄凤鹦鹉",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
            zone: "African Treetops",
            lifespan: "15-25 years",
            diet: "Seeds, fruits, vegetables",
            habitat: "Arid and semi-arid regions",
            range: "Australia",
            iucnStatus: "Least Concern",
            funFact: "The smallest member of the cockatoo family, known for their distinctive crest and whistling abilities."
        },
        {
            id: "eclectus-parrot",
            name: "Eclectus Parrot",
            chineseName: "折衷鹦鹉",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "African Treetops",
            lifespan: "30-50 years",
            diet: "Fruits, nuts, seeds, flowers",
            habitat: "Tropical rainforests",
            range: "New Guinea, Solomon Islands",
            iucnStatus: "Least Concern",
            funFact: "Shows extreme sexual dimorphism - males are bright green while females are red and purple."
        }
    ],
    "crimson-wetlands": [
        {
            id: "american-flamingo",
            name: "American Flamingo",
            chineseName: "美洲红鹤",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Crimson Wetlands",
            lifespan: "20-30 years",
            diet: "Algae, small crustaceans, mollusks",
            habitat: "Shallow lakes, lagoons, salt pans",
            range: "Caribbean, South America",
            iucnStatus: "Least Concern",
            funFact: "Their pink color comes from carotenoid pigments in their food. They often stand on one leg to conserve body heat."
        },
        {
            id: "great-blue-heron",
            name: "Great Blue Heron",
            chineseName: "大蓝鹭",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Crimson Wetlands",
            lifespan: "15-20 years",
            diet: "Fish, amphibians, small mammals",
            habitat: "Wetlands, marshes, rivers",
            range: "North and Central America",
            iucnStatus: "Least Concern",
            funFact: "Can stand motionless for hours waiting for prey, and has a wingspan of up to 2 meters."
        },
        {
            id: "roseate-spoonbill",
            name: "Roseate Spoonbill",
            chineseName: "玫瑰琵鹭",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Crimson Wetlands",
            lifespan: "10-15 years",
            diet: "Small fish, crustaceans, insects",
            habitat: "Mangroves, marshes, lagoons",
            range: "Americas",
            iucnStatus: "Least Concern",
            funFact: "Uses its unique spoon-shaped bill to sweep through shallow water, feeling for prey with its sensitive bill."
        },
        {
            id: "white-ibis",
            name: "White Ibis",
            chineseName: "白鹮",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Crimson Wetlands",
            lifespan: "8-12 years",
            diet: "Crustaceans, insects, small fish",
            habitat: "Wetlands, marshes, mangroves",
            range: "Americas",
            iucnStatus: "Least Concern",
            funFact: "Uses its long, curved bill to probe in mud and shallow water for food, often foraging in groups."
        },
        {
            id: "wood-duck",
            name: "Wood Duck",
            chineseName: "林鸳鸯",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Crimson Wetlands",
            lifespan: "5-10 years",
            diet: "Seeds, fruits, insects, small fish",
            habitat: "Forested wetlands, swamps",
            range: "North America",
            iucnStatus: "Least Concern",
            funFact: "One of the most colorful North American ducks, with males having iridescent plumage and distinctive patterns."
        },
        {
            id: "mandarin-duck",
            name: "Mandarin Duck",
            chineseName: "鸳鸯",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Crimson Wetlands",
            lifespan: "6-10 years",
            diet: "Seeds, acorns, insects, small fish",
            habitat: "Forests near water",
            range: "East Asia",
            iucnStatus: "Least Concern",
            funFact: "Considered a symbol of love and fidelity in Chinese culture, often depicted in traditional art."
        },
        {
            id: "black-crowned-night-heron",
            name: "Black-crowned Night Heron",
            chineseName: "夜鹭",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Crimson Wetlands",
            lifespan: "10-15 years",
            diet: "Fish, amphibians, insects, small mammals",
            habitat: "Wetlands, marshes, rivers",
            range: "Worldwide",
            iucnStatus: "Least Concern",
            funFact: "Most active at dawn and dusk, with excellent night vision for hunting in low light conditions."
        }
    ],
    "australian-outback": [
        {
            id: "common-emu",
            name: "Common Emu",
            chineseName: "普通鸸鹋",
            image: "common-emu.jpg",
            zone: "Australian Outback",
            lifespan: "10-20 years",
            diet: "Plants, seeds, fruits, insects",
            habitat: "Grasslands, savannas, forests",
            range: "Australia",
            iucnStatus: "Least Concern",
            funFact: "Emus belong to a family of flightless birds called ratites, which also include ostriches, rheas, cassowaries and kiwis."
        },
        {
            id: "golden-shouldered-parrot",
            name: "Golden-shouldered Parrot",
            chineseName: "金肩鹦鹉",
            image: "golden-shouldered-parrot.jpg",
            zone: "Australian Outback",
            lifespan: "15-20 years",
            diet: "Seeds, fruits, flowers",
            habitat: "Tropical savannas",
            range: "Northern Australia",
            iucnStatus: "Endangered",
            funFact: "The golden-shouldered parrot nests in conical termite mounds. Dubbed the 'antbed parrot', it excavates its nest during the wet season when the mound is rain softened."
        },
        {
            id: "laughing-kookaburra",
            name: "Laughing Kookaburra",
            chineseName: "笑翠鸟",
            image: "laughing-kookaburra.jpg",
            zone: "Australian Outback",
            lifespan: "15-20 years",
            diet: "Insects, small mammals, reptiles, other birds",
            habitat: "Dry eucalypt forests",
            range: "Eastern Australia",
            iucnStatus: "Least Concern",
            funFact: "The cackle of the laughing kookaburra is an iconic sound of the dry eucalypt forests of eastern Australia at dawn and dusk."
        },
        {
            id: "major-mitchells-cockatoo",
            name: "Major Mitchell's Cockatoo",
            chineseName: "米切尔少校凤头鹦鹉",
            image: "major-mitchells-cockatoo.jpg",
            zone: "Australian Outback",
            lifespan: "40-60 years",
            diet: "Seeds, nuts, fruits",
            habitat: "Arid and semi-arid regions",
            range: "Central and southern Australia",
            iucnStatus: "Least Concern",
            funFact: "Being seedeaters, cockatoos have large beaks with which seeds can be dehusked efficiently. Watch for the flamboyant hairdo of the Major Mitchell's cockatoo."
        },
        {
            id: "masked-lapwing",
            name: "Masked Lapwing",
            chineseName: "蒙面鸻",
            image: "masked-lapwing.jpg",
            zone: "Australian Outback",
            lifespan: "8-12 years",
            diet: "Insects, worms, small invertebrates",
            habitat: "Wetlands, grasslands, urban areas",
            range: "Australia, New Zealand",
            iucnStatus: "Least Concern",
            funFact: "Natives call the masked lapwing the 'spear-carrying bird' due to the sharp yellow spurs on its wings."
        },
        {
            id: "red-tailed-black-cockatoo",
            name: "Red-tailed Black-cockatoo",
            chineseName: "红尾黑凤头鹦鹉",
            image: "red-tailed-black-cockatoo.jpg",
            zone: "Australian Outback",
            lifespan: "40-70 years",
            diet: "Seeds, nuts, fruits, insects",
            habitat: "Forests, woodlands",
            range: "Australia",
            iucnStatus: "Least Concern",
            funFact: "Cockatoos are large parrots, known for their long life spans that range from 40 to 70 years. They differ from other parrots in that they have a head crest and no blue or green feathers. Black cockatoos are found only in Australia."
        },
        {
            id: "tawny-frogmouth",
            name: "Tawny Frogmouth",
            chineseName: "茶色蟆口鸱",
            image: "tawny-frogmouth.jpg",
            zone: "Australian Outback",
            lifespan: "10-14 years",
            diet: "Insects, small mammals, reptiles",
            habitat: "Forests, woodlands, urban areas",
            range: "Australia, New Guinea",
            iucnStatus: "Least Concern",
            funFact: "Often confused with owls, the nocturnal tawny frogmouth is closely related to night jars. It has a flat, wide beak like a frog's mouth, hence its common name."
        }
    ],
    "amazonian-jewel": [
        {
            id: "amazonian-motmot",
            name: "Amazonian Motmot",
            chineseName: "亚马逊翠鸟",
            image: "amazonian-motmot.jpg",
            zone: "Amazonian Jewel",
            lifespan: "8-12 years",
            diet: "Insects, small reptiles, fruits",
            habitat: "Lowland forests",
            range: "Broad swathe of lowland forests",
            iucnStatus: "Least Concern",
            funFact: "Multi-coloured with a long tail ending in two racquets, this dashing crow-sized bird can be found across a broad swathe of lowland forests."
        },
        {
            id: "andean-cock-of-the-rock",
            name: "Andean Cock-of-the-rock",
            chineseName: "安第斯冠伞鸟",
            image: "andean-cock-of-the-rock.jpg",
            zone: "Amazonian Jewel",
            lifespan: "15-20 years",
            diet: "Fruits, insects",
            habitat: "Mountain forests",
            range: "Andes Mountains",
            iucnStatus: "Least Concern",
            funFact: "The Andean cock-of-the-rock belongs to the cotinga family of colourful fruit-eating forest birds. Males have striking orange plumage and rounded crest."
        },
        {
            id: "capuchinbird",
            name: "Capuchinbird",
            chineseName: "僧帽鸟",
            image: "capuchinbird.jpg",
            zone: "Amazonian Jewel",
            lifespan: "10-15 years",
            diet: "Fruits, large insects",
            habitat: "Evergreen lowland rainforests",
            range: "South America",
            iucnStatus: "Least Concern",
            funFact: "This bizarre bird has a bald head ringed by feathers that can be puffed up to give it a hunchback look. It inhabits the evergreen lowland rainforests of South America."
        },
        {
            id: "crimson-bellied-parakeet",
            name: "Crimson-bellied Parakeet",
            chineseName: "深红腹鹦鹉",
            image: "crimson-bellied-parakeet.jpg",
            zone: "Amazonian Jewel",
            lifespan: "15-20 years",
            diet: "Fruits, flowers",
            habitat: "Amazon rainforest",
            range: "Amazon rainforest",
            iucnStatus: "Least Concern",
            funFact: "Living in small flocks in the Amazon rainforest, this parakeet is often seen foraging for fruits and flowers."
        },
        {
            id: "green-cheeked-amazon",
            name: "Green-cheeked Amazon",
            chineseName: "绿颊亚马逊鹦鹉",
            image: "green-cheeked-amazon.jpg",
            zone: "Amazonian Jewel",
            lifespan: "40-60 years",
            diet: "Fruits, nuts, seeds",
            habitat: "Tropical forests",
            range: "Central and South America",
            iucnStatus: "Least Concern",
            funFact: "This parrot loves company. Hundreds of them gather to roost communally in a few trees, socialising in animated chatters before spending the night together."
        },
        {
            id: "pompadour-cotinga",
            name: "Pompadour Cotinga",
            chineseName: "蓬帕杜伞鸟",
            image: "pompadour-cotinga.jpg",
            zone: "Amazonian Jewel",
            lifespan: "10-15 years",
            diet: "Fruits, insects",
            habitat: "Tropical forests",
            range: "South America",
            iucnStatus: "Least Concern",
            funFact: "This cotinga showcases sexual dimorphism where the sexes take on different looks. The male has handsome burgundy feathers coloured by carotenoid pigments while the female is ashy grey."
        },
        {
            id: "red-crested-cardinal",
            name: "Red-crested Cardinal",
            chineseName: "红冠红雀",
            image: "red-crested-cardinal.jpg",
            zone: "Amazonian Jewel",
            lifespan: "8-12 years",
            diet: "Seeds, fruits, insects",
            habitat: "Open areas, gardens",
            range: "South America",
            iucnStatus: "Least Concern",
            funFact: "Hailing from South America, this cardinal forages on the ground for seeds, fruits, and insects. It is kept as a pet on account of its good looks and melodious song."
        },
        {
            id: "saffron-toucanet",
            name: "Saffron Toucanet",
            chineseName: "藏红花小巨嘴鸟",
            image: "saffron-toucanet.jpg",
            zone: "Amazonian Jewel",
            lifespan: "15-20 years",
            diet: "Fruits, insects, small animals",
            habitat: "Atlantic forests",
            range: "Argentina, Brazil, Paraguay",
            iucnStatus: "Least Concern",
            funFact: "A relative of toucans and aracaris, the smallish saffron toucanet occupies the Atlantic Forests of Argentina, Brazil, and Paraguay."
        }
    ],
    "penguin-cove": [
        {
            id: "king-penguin",
            name: "King Penguin",
            chineseName: "国王企鹅",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Penguin Cove",
            lifespan: "15-20 years",
            diet: "Fish, squid, krill",
            habitat: "Sub-Antarctic islands",
            range: "South Atlantic, South Indian Ocean",
            iucnStatus: "Least Concern",
            funFact: "The second largest penguin species. They can dive to depths of over 300 meters and hold their breath for up to 5 minutes."
        },
        {
            id: "gentoo-penguin",
            name: "Gentoo Penguin",
            chineseName: "巴布亚企鹅",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Penguin Cove",
            lifespan: "15-20 years",
            diet: "Fish, krill, squid",
            habitat: "Antarctic and sub-Antarctic islands",
            range: "Antarctic Peninsula, sub-Antarctic islands",
            iucnStatus: "Near Threatened",
            funFact: "The fastest swimming penguin, reaching speeds of up to 36 km/h underwater. They build nests using stones."
        },
        {
            id: "rockhopper-penguin",
            name: "Rockhopper Penguin",
            chineseName: "跳岩企鹅",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Penguin Cove",
            lifespan: "10-15 years",
            diet: "Fish, krill, squid",
            habitat: "Rocky coastlines",
            range: "Sub-Antarctic islands",
            iucnStatus: "Vulnerable",
            funFact: "Named for their ability to hop from rock to rock. They have distinctive yellow crests and red eyes, and are known for their aggressive behavior."
        },
        {
            id: "chinstrap-penguin",
            name: "Chinstrap Penguin",
            chineseName: "帽带企鹅",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Penguin Cove",
            lifespan: "15-20 years",
            diet: "Fish, krill, squid",
            habitat: "Antarctic islands",
            range: "Antarctic Peninsula, South Sandwich Islands",
            iucnStatus: "Least Concern",
            funFact: "Named for the thin black line under their chin. They are one of the most aggressive penguin species and can swim up to 80 km per day."
        }
    ],
    "song-birds": [
        {
            id: "canary",
            name: "Canary",
            chineseName: "金丝雀",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Song Birds",
            lifespan: "10-15 years",
            diet: "Seeds, fruits, vegetables, insects",
            habitat: "Forests, gardens, urban areas",
            range: "Canary Islands, Madeira, Azores",
            iucnStatus: "Least Concern",
            funFact: "Bred for their beautiful songs for over 500 years. Male canaries sing to attract mates and establish territory."
        },
        {
            id: "nightingale",
            name: "Nightingale",
            chineseName: "夜莺",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Song Birds",
            lifespan: "5-8 years",
            diet: "Insects, berries, seeds",
            habitat: "Dense forests, thickets",
            range: "Europe, Asia, Africa",
            iucnStatus: "Least Concern",
            funFact: "Famous for its beautiful, complex song that can include over 200 different phrases. Males sing at night to attract mates."
        },
        {
            id: "cardinal",
            name: "Cardinal",
            chineseName: "红衣主教鸟",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Song Birds",
            lifespan: "3-5 years",
            diet: "Seeds, fruits, insects",
            habitat: "Woodlands, gardens, shrublands",
            range: "North America",
            iucnStatus: "Least Concern",
            funFact: "The male's bright red color comes from carotenoids in their diet. They are one of the few birds where females also sing."
        },
        {
            id: "robin",
            name: "Robin",
            chineseName: "知更鸟",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Song Birds",
            lifespan: "2-3 years",
            diet: "Insects, worms, berries, seeds",
            habitat: "Gardens, parks, woodlands",
            range: "Europe, Asia, North America",
            iucnStatus: "Least Concern",
            funFact: "Often associated with Christmas and spring. They are territorial birds that will defend their territory year-round."
        },
        {
            id: "goldfinch",
            name: "Goldfinch",
            chineseName: "金翅雀",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Song Birds",
            lifespan: "3-6 years",
            diet: "Seeds, especially thistle seeds",
            habitat: "Gardens, parks, open woodlands",
            range: "Europe, Asia, North America",
            iucnStatus: "Least Concern",
            funFact: "Known for their acrobatic feeding behavior, often hanging upside down to reach seeds. They have a beautiful, tinkling song."
        },
        {
            id: "lark",
            name: "Lark",
            chineseName: "云雀",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Song Birds",
            lifespan: "3-5 years",
            diet: "Seeds, insects",
            habitat: "Open grasslands, fields",
            range: "Europe, Asia, Africa",
            iucnStatus: "Least Concern",
            funFact: "Famous for their melodious song, often delivered while hovering high in the air. They can sing for hours without stopping."
        }
    ],
    "birds-of-prey": [
        {
            id: "bald-eagle",
            name: "Bald Eagle",
            chineseName: "白头海雕",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Birds of Prey",
            lifespan: "20-30 years",
            diet: "Fish, waterfowl, small mammals",
            habitat: "Lakes, rivers, coastal areas",
            range: "North America",
            iucnStatus: "Least Concern",
            funFact: "The national bird of the United States. Despite its name, it's not actually bald - the white head appears at 4-5 years old."
        },
        {
            id: "peregrine-falcon",
            name: "Peregrine Falcon",
            chineseName: "游隼",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Birds of Prey",
            lifespan: "8-15 years",
            diet: "Birds, small mammals",
            habitat: "Mountains, cliffs, urban areas",
            range: "Worldwide",
            iucnStatus: "Least Concern",
            funFact: "The fastest animal on Earth, reaching speeds of over 320 km/h during its hunting dive (stoop)."
        },
        {
            id: "red-tailed-hawk",
            name: "Red-tailed Hawk",
            chineseName: "红尾鵟",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Birds of Prey",
            lifespan: "10-21 years",
            diet: "Small mammals, birds, reptiles",
            habitat: "Open areas, woodlands, deserts",
            range: "North America",
            iucnStatus: "Least Concern",
            funFact: "One of the most common hawks in North America. Their distinctive scream is often used in movies to represent any bird of prey."
        },
        {
            id: "great-horned-owl",
            name: "Great Horned Owl",
            chineseName: "大角鸮",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Birds of Prey",
            lifespan: "13-15 years",
            diet: "Small mammals, birds, reptiles",
            habitat: "Forests, deserts, urban areas",
            range: "Americas",
            iucnStatus: "Least Concern",
            funFact: "One of the most powerful owls, capable of taking prey larger than itself. Their 'horns' are actually feather tufts."
        },
        {
            id: "osprey",
            name: "Osprey",
            chineseName: "鹗",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Birds of Prey",
            lifespan: "7-10 years",
            diet: "Fish",
            habitat: "Lakes, rivers, coastal areas",
            range: "Worldwide except Antarctica",
            iucnStatus: "Least Concern",
            funFact: "The only raptor that dives feet-first into water to catch fish. Their feet have reversible outer toes and spiny scales for gripping slippery fish."
        }
    ],
    "tropical-forest": [
        {
            id: "resplendent-quetzal",
            name: "Resplendent Quetzal",
            chineseName: "凤尾绿咬鹃",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Tropical Forest",
            lifespan: "20-25 years",
            diet: "Fruits, insects, small reptiles",
            habitat: "Cloud forests",
            range: "Central America",
            iucnStatus: "Near Threatened",
            funFact: "Considered sacred by the Aztecs and Mayans. The male's tail feathers can be up to 1 meter long and were used in royal headdresses."
        },
        {
            id: "hornbill",
            name: "Hornbill",
            chineseName: "犀鸟",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Tropical Forest",
            lifespan: "20-40 years",
            diet: "Fruits, insects, small animals",
            habitat: "Tropical forests",
            range: "Africa, Asia",
            iucnStatus: "Varies by species",
            funFact: "The female seals herself in a tree cavity during nesting, leaving only a small opening for the male to feed her and the chicks."
        },
        {
            id: "trogon",
            name: "Trogon",
            chineseName: "咬鹃",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Tropical Forest",
            lifespan: "10-15 years",
            diet: "Fruits, insects, small reptiles",
            habitat: "Tropical forests",
            range: "Americas, Africa, Asia",
            iucnStatus: "Varies by species",
            funFact: "Known for their brilliant colors and unique toe arrangement - two toes point forward and two backward, unlike most birds."
        },
        {
            id: "toucan-barbet",
            name: "Toucan Barbet",
            chineseName: "巨嘴拟啄木鸟",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Tropical Forest",
            lifespan: "8-12 years",
            diet: "Fruits, insects, small reptiles",
            habitat: "Tropical forests",
            range: "South America",
            iucnStatus: "Least Concern",
            funFact: "Despite its name, it's not a toucan but a barbet. They are cooperative breeders, with multiple birds helping to raise the young."
        },
        {
            id: "paradise-tanager",
            name: "Paradise Tanager",
            chineseName: "天堂唐纳雀",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Tropical Forest",
            lifespan: "8-12 years",
            diet: "Fruits, insects, nectar",
            habitat: "Tropical forests",
            range: "South America",
            iucnStatus: "Least Concern",
            funFact: "One of the most colorful birds in the world, with brilliant blue, green, and yellow plumage. They are highly social and travel in mixed-species flocks."
        },
        {
            id: "cotinga",
            name: "Cotinga",
            chineseName: "伞鸟",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Tropical Forest",
            lifespan: "10-15 years",
            diet: "Fruits, insects",
            habitat: "Tropical forests",
            range: "South America",
            iucnStatus: "Varies by species",
            funFact: "Known for their elaborate courtship displays. Some species have males that gather in groups called 'leks' to compete for females."
        }
    ],
    "coastal-birds": [
        {
            id: "albatross",
            name: "Albatross",
            chineseName: "信天翁",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Coastal Birds",
            lifespan: "40-60 years",
            diet: "Fish, squid, krill",
            habitat: "Open ocean, coastal areas",
            range: "Southern Ocean, North Pacific",
            iucnStatus: "Varies by species",
            funFact: "Has the largest wingspan of any living bird (up to 3.7 meters). They can fly for hours without flapping their wings, using wind currents."
        },
        {
            id: "seagull",
            name: "Seagull",
            chineseName: "海鸥",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Coastal Birds",
            lifespan: "10-25 years",
            diet: "Fish, crustaceans, insects, scraps",
            habitat: "Coasts, lakes, urban areas",
            range: "Worldwide",
            iucnStatus: "Least Concern",
            funFact: "Highly intelligent birds that can learn to use tools and have been observed dropping shells on rocks to break them open."
        },
        {
            id: "pelican",
            name: "Pelican",
            chineseName: "鹈鹕",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Coastal Birds",
            lifespan: "15-25 years",
            diet: "Fish",
            habitat: "Lakes, rivers, coastal areas",
            range: "Worldwide",
            iucnStatus: "Least Concern",
            funFact: "Can hold up to 13 liters of water in their pouch. They often fish cooperatively, herding fish into shallow water."
        },
        {
            id: "cormorant",
            name: "Cormorant",
            chineseName: "鸬鹚",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Coastal Birds",
            lifespan: "10-15 years",
            diet: "Fish",
            habitat: "Coasts, lakes, rivers",
            range: "Worldwide",
            iucnStatus: "Least Concern",
            funFact: "Excellent divers that can swim underwater for up to 70 seconds. They have been used by fishermen in some cultures to catch fish."
        },
        {
            id: "tern",
            name: "Tern",
            chineseName: "燕鸥",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            zone: "Coastal Birds",
            lifespan: "10-20 years",
            diet: "Fish, crustaceans, insects",
            habitat: "Coasts, lakes, rivers",
            range: "Worldwide",
            iucnStatus: "Varies by species",
            funFact: "Known for their graceful flight and spectacular diving behavior. They can hover in the air before plunging into water to catch fish."
        }
    ]
};

// Local storage functions
function saveFoundBirds() {
    localStorage.setItem('foundBirds', JSON.stringify(foundBirds));
}

function loadFoundBirds() {
    const saved = localStorage.getItem('foundBirds');
    return saved ? JSON.parse(saved) : {};
}

function saveBirdPhoto(birdId, photoData) {
    const birdPhotos = JSON.parse(localStorage.getItem('birdPhotos') || '{}');
    birdPhotos[birdId] = photoData;
    localStorage.setItem('birdPhotos', JSON.stringify(birdPhotos));
}

function loadBirdPhoto(birdId) {
    const birdPhotos = JSON.parse(localStorage.getItem('birdPhotos') || '{}');
    return birdPhotos[birdId] || null;
}

// Global variables
let foundBirds = loadFoundBirds();

// Back button function
function goBackToBirds() {
    // Reload the main page
    location.reload();
}

// Image fallback system - prioritize local images
function getBirdImage(bird) {
    // First priority: local images folder
    const localImagePath = `images/${bird.id}.jpg`;
    
    // Second priority: original bird.image
    // Third priority: fallback placeholder
    return localImagePath;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const zoneFilters = document.querySelector('.zone-filters');
    const birdsGrid = document.getElementById('birdsGrid');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    // Load all birds initially
    loadAllBirds();

    // Zone filter click handlers
    zoneFilters.addEventListener('click', function(e) {
        const filterTag = e.target.closest('.filter-tag');
        if (filterTag) {
            // Remove active class from all tags
            document.querySelectorAll('.filter-tag').forEach(tag => {
                tag.classList.remove('active');
            });
            
            // Add active class to clicked tag
            filterTag.classList.add('active');
            
            const zone = filterTag.dataset.zone;
            if (zone === 'all') {
                loadAllBirds();
            } else {
                loadBirdsByZone(zone);
            }
        }
    });

    // Search functionality
    searchBtn.addEventListener('click', searchBirds);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBirds();
        }
    });

    function loadAllBirds() {
        birdsGrid.innerHTML = '';
        Object.values(birdData).flat().forEach(bird => {
            createBirdCard(bird);
        });
    }

    function loadBirdsByZone(zone) {
        birdsGrid.innerHTML = '';
        if (birdData[zone]) {
            birdData[zone].forEach(bird => {
                createBirdCard(bird);
            });
        }
    }

    function searchBirds() {
        const searchTerm = searchInput.value.toLowerCase();
        birdsGrid.innerHTML = '';
        
        Object.values(birdData).flat().forEach(bird => {
            if (bird.name.toLowerCase().includes(searchTerm) || 
                bird.chineseName.includes(searchTerm) ||
                bird.zone.toLowerCase().includes(searchTerm)) {
                createBirdCard(bird);
            }
        });
    }

    function createBirdCard(bird) {
        const birdCard = document.createElement('div');
        const isFound = foundBirds[bird.id];
        const foundClass = isFound ? 'found' : '';
        const foundIndicator = isFound ? '<div class="found-indicator">✓</div>' : '';
        const statusBadge = isFound ? 
            '<div class="found-status-badge found">Found</div>' : 
            '<div class="found-status-badge not-found">Not Found</div>';
        
        birdCard.className = `bird-card ${foundClass}`;
        birdCard.innerHTML = `
            ${foundIndicator}
            ${statusBadge}
            <img src="${getBirdImage(bird)}" alt="${bird.name}" class="bird-image">
            <h3 class="bird-name">${bird.name}</h3>
            <p class="bird-chinese-name">${bird.chineseName}</p>
            <div class="bird-zone">${bird.zone}</div>
            <div class="bird-status">
                <div class="status-item">${bird.lifespan}</div>
                <div class="status-item">${bird.iucnStatus}</div>
            </div>
        `;
        
        birdCard.addEventListener('click', () => {
            showBirdPage(bird);
        });
        
        birdsGrid.appendChild(birdCard);
    }

    function showBirdPage(bird) {
        const isFound = foundBirds[bird.id];
        const userPhoto = loadBirdPhoto(bird.id);
        const foundStatus = isFound ? 'Found ✓' : 'Not Found';
        const foundButtonText = isFound ? 'Mark as Not Found' : 'Mark as Found';
        
        const birdPageHTML = `
            <div class="bird-page">
                <button class="back-btn" onclick="goBackToBirds()">← Back to Birds</button>
                <div class="bird-page-header">
                    <img src="${userPhoto || getBirdImage(bird)}" alt="${bird.name}" class="bird-page-image">
                    <h1 class="bird-page-name">${bird.name}</h1>
                    <h2 class="bird-page-chinese">${bird.chineseName}</h2>
                    <div class="found-status">Status: ${foundStatus}</div>
                </div>
                
                <div class="photo-upload-section">
                    <h3>📸 Upload Your Photo</h3>
                    <p style="color: #556B2F; margin-bottom: 15px; font-size: 0.9rem;">
                        💡 Tip: You can screenshot birds from the official website and upload them here!
                    </p>
                    <input type="file" id="photoUpload" accept="image/*" style="margin: 10px 0;">
                    <button id="uploadBtn" style="margin: 10px 5px; padding: 10px 20px; background: #90EE90; border: none; border-radius: 10px; cursor: pointer;">Upload Photo</button>
                    <button id="markFoundBtn" style="margin: 10px 5px; padding: 10px 20px; background: #FFD700; border: none; border-radius: 10px; cursor: pointer;">${foundButtonText}</button>
                </div>
                
                <div class="bird-info-grid">
                    <div class="info-card">
                        <h3>📍 Location</h3>
                        <p>Find me in: <strong>${bird.zone}</strong></p>
                    </div>
                    
                    <div class="info-card">
                        <h3>⏰ Life Span</h3>
                        <p>${bird.lifespan}</p>
                    </div>
                    
                    <div class="info-card">
                        <h3>🍽️ Diet</h3>
                        <p>${bird.diet}</p>
                    </div>
                    
                    <div class="info-card">
                        <h3>🏠 Habitat</h3>
                        <p>${bird.habitat}</p>
                    </div>
                    
                    <div class="info-card">
                        <h3>🌍 Range</h3>
                        <p>${bird.range}</p>
                    </div>
                    
                    <div class="info-card">
                        <h3>⚠️ IUCN Status</h3>
                        <p>${bird.iucnStatus}</p>
                    </div>
                </div>
                
                <div class="fun-fact">
                    <h3>✨ Fun Fact</h3>
                    <p>${bird.funFact}</p>
                </div>
            </div>
        `;
        
        document.body.innerHTML = birdPageHTML;
        
        // Add event listeners for the new buttons
        const uploadBtn = document.getElementById('uploadBtn');
        const markFoundBtn = document.getElementById('markFoundBtn');
        const photoUpload = document.getElementById('photoUpload');
        
        if (uploadBtn) {
            uploadBtn.addEventListener('click', () => {
                const file = photoUpload.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        saveBirdPhoto(bird.id, e.target.result);
                        alert('Photo uploaded successfully!');
                        showBirdPage(bird); // Refresh the page
                    };
                    reader.readAsDataURL(file);
                } else {
                    alert('Please select a photo first!');
                }
            });
        }
        
        if (markFoundBtn) {
            markFoundBtn.addEventListener('click', () => {
                if (foundBirds[bird.id]) {
                    delete foundBirds[bird.id];
                } else {
                    foundBirds[bird.id] = true;
                }
                saveFoundBirds();
                showBirdPage(bird); // Refresh the page
            });
        }
    }
});
