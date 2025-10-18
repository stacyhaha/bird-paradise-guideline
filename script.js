// Bird data structure
const birdData = {
    "wings-of-asia": [
        {
            id: "bar-headed-goose",
            name: "Bar-headed Goose",
            chineseName: "斑头雁",
            image: "bar-headed-goose.jpg",
            zone: "Wings of Asia",
            lifespan: "15-20 years",
            diet: "Grasses, seeds, aquatic plants",
            habitat: "High altitude lakes, wetlands",
            range: "Central Asia, Himalayas",
            iucnStatus: "Least Concern",
            funFact: "As one of the world's highest-flying birds, the bar-headed goose has reached a record altitude of over 7,000m. It migrates over the Himalayas, flying from Mongolia to India to escape the harsh winters."
        },
        {
            id: "black-faced-spoonbill",
            name: "Black-faced Spoonbill",
            chineseName: "黑脸琵鹭",
            image: "black-faced-spoonbill.jpg",
            zone: "Wings of Asia",
            lifespan: "15-20 years",
            diet: "Fish, crustaceans, insects",
            habitat: "Mudflats, wetlands, coastal areas",
            range: "East Asia",
            iucnStatus: "Endangered",
            funFact: "Black-faced spoonbills are the rarest spoonbills and the only species of spoonbill to be classed as Endangered on the IUCN Red List."
        },
        {
            id: "great-argus",
            name: "Great Argus",
            chineseName: "大眼斑雉",
            image: "great-argus.jpg",
            zone: "Wings of Asia",
            lifespan: "15-20 years",
            diet: "Fruits, seeds, insects, small animals",
            habitat: "Tropical forests",
            range: "Southeast Asia",
            iucnStatus: "Near Threatened",
            funFact: "Great Argus are amongst the largest pheasants, related to the peafowls."
        },
        {
            id: "milky-stork",
            name: "Milky Stork",
            chineseName: "白鹳",
            image: "milky-stork.jpg",
            zone: "Wings of Asia",
            lifespan: "20-25 years",
            diet: "Fish, frogs, insects, small reptiles",
            habitat: "Mangroves, wetlands, coastal areas",
            range: "Southeast Asia",
            iucnStatus: "Endangered",
            funFact: "The Milky Stork is classified as endangered, facing significant threats primarily from habitat loss and degradation due to human activities."
        },
        {
            id: "oriental-pied-hornbill",
            name: "Oriental Pied Hornbill",
            chineseName: "东方斑犀鸟",
            image: "oriental-pied-hornbill.jpg",
            zone: "Wings of Asia",
            lifespan: "30-40 years",
            diet: "Fruits, insects, small animals",
            habitat: "Tropical forests, mangroves",
            range: "Southeast Asia",
            iucnStatus: "Least Concern",
            funFact: "Hornbills usually pair for life but for both Stumpy and her current partner, it is love at second sight. Stumpy was one of a pair previously released to the wild. The pair were often seen flying together but one day the male disappeared."
        },
        {
            id: "papuan-hornbill",
            name: "Papuan Hornbill",
            chineseName: "巴布亚犀鸟",
            image: "papuan-hornbill.jpg",
            zone: "Wings of Asia",
            lifespan: "30-40 years",
            diet: "Fruits, insects, small animals",
            habitat: "Tropical forests",
            range: "New Guinea",
            iucnStatus: "Least Concern",
            funFact: "The Papuan hornbill is the only hornbill in New Guinea. Called 'Kokomo' in local Tok Pisin language, it is a show stealer. In flight, its wings give off a very loud whooshing sound."
        }
    ],
    "african-treetops": [
        {
            id: "great-blue-turaco",
            name: "Great Blue Turaco",
            chineseName: "大蓝蕉鹃",
            image: "great-blue-turaco.jpg",
            zone: "Heart of Africa",
            lifespan: "15-20 years",
            diet: "Fruits, leaves, flowers",
            habitat: "Dense forests",
            range: "Central and West Africa",
            iucnStatus: "Least Concern",
            funFact: "This shy bird is not easily observed among the forest foliage except when small groups gather and call in chorus, sometimes for several minutes."
        },
        {
            id: "grey-parrot",
            name: "Grey Parrot",
            chineseName: "灰鹦鹉",
            image: "grey-parrot.jpg",
            zone: "Heart of Africa",
            lifespan: "40-60 years",
            diet: "Seeds, nuts, fruits, vegetables",
            habitat: "Dense forests, savannas",
            range: "Central and West Africa",
            iucnStatus: "Endangered",
            funFact: "Among the 350 odd parrot species worldwide, grey parrots are best able to mimic human speech. Known as the 'Einstein of the Bird World'."
        },
        {
            id: "lesser-flamingo",
            name: "Lesser Flamingo",
            chineseName: "小火烈鸟",
            image: "lesser-flamingo.jpg",
            zone: "Heart of Africa",
            lifespan: "20-30 years",
            diet: "Algae, small crustaceans, mollusks",
            habitat: "Alkaline lakes, salt pans",
            range: "Africa, Asia",
            iucnStatus: "Near Threatened",
            funFact: "Out of six flamingo species, the lesser flamingo is the smallest and most numerous with around three million individuals."
        },
        {
            id: "red-crested-turaco",
            name: "Red-crested Turaco",
            chineseName: "红冠蕉鹃",
            image: "red-crested-turaco.jpg",
            zone: "Heart of Africa",
            lifespan: "15-20 years",
            diet: "Fruits, leaves, flowers",
            habitat: "Forests, woodlands",
            range: "Sub-Saharan Africa",
            iucnStatus: "Least Concern",
            funFact: "The only family of birds that is entirely endemic to sub-Saharan Africa, the turacos are known for their punk 'hairdos'. The feathers around their head do not have barbules, which gives a glossy appearance to their raised crest."
        },
        {
            id: "superb-starling",
            name: "Superb Starling",
            chineseName: "华丽椋鸟",
            image: "superb-starling.jpg",
            zone: "Heart of Africa",
            lifespan: "8-12 years",
            diet: "Insects, fruits, seeds",
            habitat: "Savannas, woodlands, urban areas",
            range: "East Africa",
            iucnStatus: "Least Concern",
            funFact: "The superb starling (Lamprotornis superbus) is a member of the starling family of birds. It was formerly known as Spreo superbus."
        }
    ],
    "crimson-wetlands": [
        {
            id: "american-flamingo",
            name: "American Flamingo",
            chineseName: "美洲火烈鸟",
            image: "american-flamingo.jpg",
            zone: "Crimson Wetlands",
            lifespan: "20-30 years",
            diet: "Algae, small crustaceans, mollusks",
            habitat: "Shallow lakes, lagoons, salt pans",
            range: "Caribbean, South America",
            iucnStatus: "Least Concern",
            funFact: "This species has the most vibrant plumage of all flamingo species."
        },
        {
            id: "blue-winged-macaw",
            name: "Blue-winged Macaw",
            chineseName: "蓝翅金刚鹦鹉",
            image: "blue-winged-macaw.jpg",
            zone: "Crimson Wetlands",
            lifespan: "30-50 years",
            diet: "Seeds, nuts, fruits, flowers",
            habitat: "Tropical forests, savannas",
            range: "Brazil, Paraguay, Argentina",
            iucnStatus: "Near Threatened",
            funFact: "Whittled down by habitat loss, trapping for the pet trade and persecution as crop pests, there are only 1,500 to 7,000 mature blue-winged macaws left in Brazil, Paraguay and Argentina."
        },
        {
            id: "chestnut-fronted-macaw",
            name: "Chestnut-fronted Macaw",
            chineseName: "栗额金刚鹦鹉",
            image: "chestnut-fronted-macaw.jpg",
            zone: "Crimson Wetlands",
            lifespan: "30-50 years",
            diet: "Fruits, nuts, seeds, flowers",
            habitat: "Tropical forests",
            range: "Central and South America",
            iucnStatus: "Least Concern",
            funFact: "In spite of their bright colours, macaws are camouflaged in the forest canopy as they blend in with the colourful fruits and flowers they feed on. The chestnut-fronted macaw is found throughout Central and South America."
        },
        {
            id: "great-green-macaw",
            name: "Great Green Macaw",
            chineseName: "大绿金刚鹦鹉",
            image: "great-green-macaw.jpg",
            zone: "Crimson Wetlands",
            lifespan: "40-60 years",
            diet: "Fruits, nuts, seeds",
            habitat: "Tropical forests",
            range: "Central America",
            iucnStatus: "Critically Endangered",
            funFact: "Hailing from the forests of Central America, the great green macaw is Critically Endangered with only 500 to 1,000 mature individuals surviving in the wild."
        },
        {
            id: "hyacinth-macaw",
            name: "Hyacinth Macaw",
            chineseName: "风信子金刚鹦鹉",
            image: "hyacinth-macaw.jpg",
            zone: "Crimson Wetlands",
            lifespan: "50-80 years",
            diet: "Nuts, fruits, seeds",
            habitat: "Palm forests, savannas",
            range: "Brazil, Bolivia, Paraguay",
            iucnStatus: "Vulnerable",
            funFact: "The hyacinth macaw stands out as the largest of all parrots at 1 m long, attractively cloaked in cobalt blue feathers."
        },
        {
            id: "military-macaw",
            name: "Military Macaw",
            chineseName: "军用金刚鹦鹉",
            image: "military-macaw.jpg",
            zone: "Crimson Wetlands",
            lifespan: "40-60 years",
            diet: "Seeds, nuts, fruits, flowers",
            habitat: "Mountain forests",
            range: "Mexico to Argentina",
            iucnStatus: "Vulnerable",
            funFact: "The military macaw's curious name is inspired by the green hue of its feathers, similar to the colour of military uniforms. Ranging from Mexico to Argentina, it makes a throaty roar that carries for long distances."
        },
        {
            id: "northern-red-shouldered-macaw",
            name: "Northern Red-shouldered Macaw",
            chineseName: "北红肩金刚鹦鹉",
            image: "northern-red-shouldered-macaw.jpg",
            zone: "Crimson Wetlands",
            lifespan: "25-40 years",
            diet: "Seeds, fruits, flowers",
            habitat: "Forests, savannas",
            range: "South America",
            iucnStatus: "Least Concern",
            funFact: "Like other parrots, the northern red-shouldered macaw moves around in flocks, seeking out seeds, fruits, and flowers. These gregarious birds are also known to raid crops and rice fields."
        },
        {
            id: "red-and-green-macaw",
            name: "Red-and-green Macaw",
            chineseName: "红绿金刚鹦鹉",
            image: "red-and-green-macaw.jpg",
            zone: "Crimson Wetlands",
            lifespan: "40-60 years",
            diet: "Nuts, seeds, fruits",
            habitat: "Tropical forests",
            range: "Central and South America",
            iucnStatus: "Least Concern",
            funFact: "Widespread in Central and South America, the red-and-green macaw resembles the better-known scarlet macaw except that it has green instead of yellow wing coverts."
        },
        {
            id: "red-bellied-macaw",
            name: "Red-bellied Macaw",
            chineseName: "红腹金刚鹦鹉",
            image: "red-bellied-macaw.jpg",
            zone: "Crimson Wetlands",
            lifespan: "30-50 years",
            diet: "Palm fruits, nuts, seeds",
            habitat: "Palm forests, savannas",
            range: "South America",
            iucnStatus: "Least Concern",
            funFact: "The red-bellied macaw of South America eats Mauritia palm fruits almost exclusively, expertly peeling away the scaly husk with its hooked bill, muscular tongue and dexterous toes."
        },
        {
            id: "red-fronted-macaw",
            name: "Red-fronted Macaw",
            chineseName: "红额金刚鹦鹉",
            image: "red-fronted-macaw.jpg",
            zone: "Crimson Wetlands",
            lifespan: "30-50 years",
            diet: "Seeds, fruits, nuts",
            habitat: "Arid valleys",
            range: "Bolivia",
            iucnStatus: "Critically Endangered",
            funFact: "The critically endangered red-fronted macaw is only found in the Andean valleys of three rivers in Bolivia, with about 272 mature individuals in the wild."
        },
        {
            id: "roseate-spoonbill",
            name: "Roseate Spoonbill",
            chineseName: "玫瑰琵鹭",
            image: "roseate-spoonbill.jpg",
            zone: "Crimson Wetlands",
            lifespan: "10-15 years",
            diet: "Small fish, crustaceans, insects",
            habitat: "Mangroves, marshes, lagoons",
            range: "Americas",
            iucnStatus: "Least Concern",
            funFact: "Named for its unique spoon-shaped bill, the roseate spoonbill has attractive pink plumage and a defined carmine wing patch. The bare green skin on its head takes on a yellowish hue during the breeding season."
        },
        {
            id: "scarlet-ibis",
            name: "Scarlet Ibis",
            chineseName: "猩红鹮",
            image: "scarlet-ibis.jpg",
            zone: "Crimson Wetlands",
            lifespan: "15-20 years",
            diet: "Crustaceans, insects, small fish",
            habitat: "Mangroves, wetlands",
            range: "South America, Caribbean",
            iucnStatus: "Least Concern",
            funFact: "They are what they eat – scarlet ibises feed on crayfish, crabs and aquatic insects which give their plumage the bright red colour."
        },
        {
            id: "scarlet-macaw",
            name: "Scarlet Macaw",
            chineseName: "猩红金刚鹦鹉",
            image: "scarlet-macaw.jpg",
            zone: "Crimson Wetlands",
            lifespan: "40-60 years",
            diet: "Nuts, seeds, fruits, flowers",
            habitat: "Tropical forests",
            range: "Central and South America",
            iucnStatus: "Least Concern",
            funFact: "A macaw's beak can crack the hardest nut and even crush your finger. Its flexible and scaly tongue contains a bone."
        },
        {
            id: "sun-parakeet",
            name: "Sun Parakeet",
            chineseName: "太阳锥尾鹦鹉",
            image: "sun-parakeet.jpg",
            zone: "Crimson Wetlands",
            lifespan: "15-25 years",
            diet: "Seeds, fruits, flowers",
            habitat: "Savannas, grasslands",
            range: "Northeastern Brazil",
            iucnStatus: "Endangered",
            funFact: "The sun parakeet is green on the wings, scarlet on the breast and golden orange on the head and neck. This brilliant mix of colours is characteristic of their genus Aratinga, a group of 'mini-macaws' found predominantly in northeastern Brazil."
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
    "lory-loft": [
        {
            id: "luzon-hornbill",
            name: "Luzon Hornbill",
            chineseName: "吕宋犀鸟",
            image: "luzon-hornbill.jpg",
            zone: "Lory Loft",
            lifespan: "20-30 years",
            diet: "Fruits, insects, small animals",
            habitat: "Tropical forests",
            range: "Luzon and nearby islands, Philippines",
            iucnStatus: "Near Threatened",
            funFact: "This diminutive hornbill is restricted to Luzon and nearby islands in the Philippines. Males and females look different, with males being mostly pale while females are entirely black."
        },
        {
            id: "northern-cassowary",
            name: "Northern Cassowary",
            chineseName: "北食火鸡",
            image: "northern-cassowary.jpg",
            zone: "Lory Loft",
            lifespan: "40-50 years",
            diet: "Fruits, insects, small animals",
            habitat: "Tropical rainforests",
            range: "Northern New Guinea",
            iucnStatus: "Vulnerable",
            funFact: "The northern cassowary, the world's fourth largest bird, is incredibly agile, able to run 50 kilometers (30 miles) per hour through dense undergrowth, leap 2 meters (7 ft) into the air, and even swim."
        },
        {
            id: "purple-naped-lory",
            name: "Purple-naped Lory",
            chineseName: "紫颈鹦鹉",
            image: "purple-naped-lory.jpg",
            zone: "Lory Loft",
            lifespan: "15-25 years",
            diet: "Nectar, fruits, flowers",
            habitat: "Tropical forests",
            range: "Seram Island, Indonesia",
            iucnStatus: "Near Threatened",
            funFact: "Endemic to the island of Seram in the vast Indonesian archipelago, the purple-naped lory is the only red parrot in its forests with green wings."
        },
        {
            id: "rainbow-lorikeet",
            name: "Rainbow Lorikeet",
            chineseName: "彩虹吸蜜鹦鹉",
            image: "rainbow-lorikeet.jpg",
            zone: "Lory Loft",
            lifespan: "15-25 years",
            diet: "Nectar, pollen, fruits",
            habitat: "Forests, woodlands, urban areas",
            range: "Australia",
            iucnStatus: "Least Concern",
            funFact: "Rainbow lorikeets, found in habitats ranging from forest edges to urban areas, once had a broader range. Today, however, they are confined to Australia, with populations elsewhere now recognized as distinct species."
        },
        {
            id: "scarlet-breasted-lorikeet",
            name: "Scarlet-breasted Lorikeet",
            chineseName: "红胸吸蜜鹦鹉",
            image: "scarlet-breasted-lorikeet.jpg",
            zone: "Lory Loft",
            lifespan: "15-25 years",
            diet: "Nectar, fruits, flowers",
            habitat: "Lowland forests",
            range: "Bali, Lombok, and nearby islands",
            iucnStatus: "Near Threatened",
            funFact: "Found only in Bali, Lombok, and nearby islands, this restricted-range lorikeet inhabits lowland forests and is recognized by its four subspecies."
        },
        {
            id: "umbrella-cockatoo",
            name: "Umbrella Cockatoo",
            chineseName: "白凤头鹦鹉",
            image: "umbrella-cockatoo.jpg",
            zone: "Lory Loft",
            lifespan: "40-60 years",
            diet: "Seeds, nuts, fruits, insects",
            habitat: "Tropical forests",
            range: "Northern Moluccas, Indonesia",
            iucnStatus: "Endangered",
            funFact: "This endangered cockatoo from Northern Moluccas, Indonesia, is so named as it has a crest that looks like an umbrella when erected, which happens when the bird is excited or alarmed."
        },
        {
            id: "western-crowned-pigeon",
            name: "Western Crowned-Pigeon",
            chineseName: "西冠鸠",
            image: "western-crowned-pigeon.jpg",
            zone: "Lory Loft",
            lifespan: "15-20 years",
            diet: "Fruits, seeds, insects",
            habitat: "Tropical forests",
            range: "West Papua, Indonesia",
            iucnStatus: "Vulnerable",
            funFact: "Crowned with a lacy crest, this massive pigeon lives in West Papua, Indonesia. It feeds on fruits and insects on the forest floor during the day and roosts in trees at night."
        },
        {
            id: "yellow-mantled-chattering-lory",
            name: "Yellow-Mantled Chattering Lory",
            chineseName: "黄背喋喋鹦鹉",
            image: "yellow-mantled-chattering-lory.jpg",
            zone: "Lory Loft",
            lifespan: "15-25 years",
            diet: "Nectar, fruits, flowers",
            habitat: "Tropical forests",
            range: "North Moluccas, Indonesia",
            iucnStatus: "Near Threatened",
            funFact: "Chattering lories are predominantly red in colour with green wings. Three subspecies are endemic to the forests of North Moluccas, with each occupying different island clusters and varying slightly in appearance."
        }
    ],
    "mysterious-papua": [
        {
            id: "palm-cockatoo",
            name: "Palm Cockatoo",
            chineseName: "棕榈凤头鹦鹉",
            image: "palm-cockatoo.jpg",
            zone: "Mysterious Papua",
            lifespan: "40-60 years",
            diet: "Nuts, seeds, fruits, insects",
            habitat: "Tropical rainforests",
            range: "Northern Australia, New Guinea",
            iucnStatus: "Vulnerable",
            funFact: "The palm cockatoo is the world's largest cockatoo. Its distinctive cheek patch of bare skin flushes from pink to bright red when the bird is alarmed or excited."
        },
        {
            id: "salmon-crested-cockatoo",
            name: "Salmon-crested Cockatoo",
            chineseName: "鲑冠凤头鹦鹉",
            image: "salmon-crested-cockatoo.jpg",
            zone: "Mysterious Papua",
            lifespan: "40-60 years",
            diet: "Seeds, nuts, fruits, insects",
            habitat: "Tropical forests",
            range: "Seram Island, Indonesia",
            iucnStatus: "Vulnerable",
            funFact: "Cockatoos have distinctive head crests which are normally kept folded back on the top of the head when relaxed. These are raised as a sign of agitation or curiosity, and to signal threat or romantic intentions."
        },
        {
            id: "southern-cassowary",
            name: "Southern Cassowary",
            chineseName: "南食火鸡",
            image: "southern-cassowary.jpg",
            zone: "Mysterious Papua",
            lifespan: "40-50 years",
            diet: "Fruits, insects, small animals",
            habitat: "Tropical rainforests",
            range: "Northern Australia, New Guinea",
            iucnStatus: "Vulnerable",
            funFact: "The southern cassowary is the third biggest bird after the ostrich and emu. Compared to the single wattled northern cassowary, it is slightly larger and has two wattles, which hang loosely from its neck."
        },
        {
            id: "sumba-eclectus",
            name: "Sumba Eclectus",
            chineseName: "松巴折衷鹦鹉",
            image: "sumba-eclectus.jpg",
            zone: "Mysterious Papua",
            lifespan: "30-50 years",
            diet: "Fruits, nuts, seeds, flowers",
            habitat: "Tropical forests",
            range: "Sumba Island, Indonesia",
            iucnStatus: "Endangered",
            funFact: "Male and female eclectus parrots look so different that they were once thought to be separate species. Males are predominantly green; females are red or purplish red."
        }
    ],
    "penguin-cove": [
        {
            id: "gentoo-penguin",
            name: "Gentoo Penguin",
            chineseName: "巴布亚企鹅",
            image: "gentoo-penguin.jpg",
            zone: "Penguin Cove",
            lifespan: "15-20 years",
            diet: "Fish, krill, squid",
            habitat: "Antarctic and sub-Antarctic islands",
            range: "Antarctic Peninsula, sub-Antarctic islands",
            iucnStatus: "Near Threatened",
            funFact: "Gentoo Penguins is the world's fastest underwater bird, swimming at speeds of up to 36km/h!"
        },
        {
            id: "humboldt-penguin",
            name: "Humboldt Penguin",
            chineseName: "洪堡企鹅",
            image: "humboldt-penguin.jpg",
            zone: "Penguin Cove",
            lifespan: "15-20 years",
            diet: "Fish, squid, krill",
            habitat: "Coastal areas",
            range: "Peru and Chile",
            iucnStatus: "Vulnerable",
            funFact: "The Humboldt penguin is a medium-sized black-and-white penguin."
        },
        {
            id: "king-penguin",
            name: "King Penguin",
            chineseName: "国王企鹅",
            image: "king-penguin.jpg",
            zone: "Penguin Cove",
            lifespan: "15-20 years",
            diet: "Fish, squid, krill",
            habitat: "Sub-Antarctic islands",
            range: "South Atlantic, South Indian Ocean",
            iucnStatus: "Least Concern",
            funFact: "The King Penguin stands at a height of 1 metre. It is the second tallest penguin, after the Emperor Penguin, which is 1.3m tall."
        },
        {
            id: "northern-rockhopper-penguin",
            name: "Northern Rockhopper Penguin",
            chineseName: "北跳岩企鹅",
            image: "northern-rockhopper-penguin.jpg",
            zone: "Penguin Cove",
            lifespan: "10-15 years",
            diet: "Fish, krill, squid",
            habitat: "Rocky coastlines",
            range: "Tristan da Cunha, Gough Island",
            iucnStatus: "Endangered",
            funFact: "Rockhopper penguins are so named because of their ability to hop over rocks and boulders, sometimes reaching heights of up to 1.8m."
        }
    ],
    "songs-of-the-forest": [
        {
            id: "bali-myna",
            name: "Bali Myna",
            chineseName: "巴厘岛八哥",
            image: "bali-myna.jpg",
            zone: "Songs of the Forest",
            lifespan: "15-20 years",
            diet: "Insects, fruits, seeds",
            habitat: "Forests, woodlands",
            range: "Bali, Indonesia",
            iucnStatus: "Critically Endangered",
            funFact: "The Bali myna is almost entirely white with long head plumes and black wing-tips. Endemic to Bali where it formerly ranged across the north-west third of the island, the species was never very widely distributed."
        },
        {
            id: "black-winged-myna",
            name: "Black-winged Myna",
            chineseName: "黑翅八哥",
            image: "black-winged-myna.jpg",
            zone: "Songs of the Forest",
            lifespan: "10-15 years",
            diet: "Insects, fruits, seeds",
            habitat: "Forests, woodlands",
            range: "Southeast Asia",
            iucnStatus: "Endangered",
            funFact: "The black-winged mynas' melodious song, along with their lively temperament and striking plumage make them highly-prized in the cage bird trade."
        },
        {
            id: "greater-green-leafbird",
            name: "Greater Green Leafbird",
            chineseName: "大绿叶鸟",
            image: "greater-green-leafbird.jpg",
            zone: "Songs of the Forest",
            lifespan: "8-12 years",
            diet: "Fruits, insects, nectar",
            habitat: "Tropical forests",
            range: "Southeast Asia",
            iucnStatus: "Near Threatened",
            funFact: "The largest and heaviest leafbird, this bird has a powerful, hooked bill that it uses to pierce mid-sized fruits with a tough covering."
        },
        {
            id: "santa-cruz-ground-dove",
            name: "Santa Cruz Ground-Dove",
            chineseName: "圣克鲁斯地鸠",
            image: "santa-cruz-ground-dove.jpg",
            zone: "Songs of the Forest",
            lifespan: "5-8 years",
            diet: "Seeds, fruits, insects",
            habitat: "Forests, woodlands",
            range: "Santa Cruz Islands",
            iucnStatus: "Critically Endangered",
            funFact: "This bird is observed to perch on low branches and roost in trees. It comes to the ground to forage for food and this is when it is most vulnerable to the introduced rats, cats, dogs and pigs that are found in much of its range."
        },
        {
            id: "straw-headed-bulbul",
            name: "Straw-headed Bulbul",
            chineseName: "稻草头鹎",
            image: "straw-headed-bulbul.jpg",
            zone: "Songs of the Forest",
            lifespan: "8-12 years",
            diet: "Fruits, insects, nectar",
            habitat: "Forests, woodlands",
            range: "Southeast Asia",
            iucnStatus: "Critically Endangered",
            funFact: "Known for its melodious calls, the straw-headed bulbul has been hunted to extinction across much of its range in Southeast Asia."
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

// Backup and restore functions
function exportData() {
    const data = {
        foundBirds: JSON.parse(localStorage.getItem('foundBirds') || '{}'),
        birdPhotos: JSON.parse(localStorage.getItem('birdPhotos') || '{}'),
        exportDate: new Date().toISOString(),
        version: '1.0'
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `bird-paradise-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert('数据已导出！请保存这个文件作为备份。');
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    if (data.foundBirds) {
                        localStorage.setItem('foundBirds', JSON.stringify(data.foundBirds));
                    }
                    if (data.birdPhotos) {
                        localStorage.setItem('birdPhotos', JSON.stringify(data.birdPhotos));
                    }
                    
                    alert('数据导入成功！页面将刷新。');
                    location.reload();
                } catch (error) {
                    alert('文件格式错误，请选择正确的备份文件。');
                }
            };
            reader.readAsText(file);
        }
    };
    
    input.click();
}

function clearAllData() {
    if (confirm('确定要清除所有数据吗？此操作不可恢复！')) {
        localStorage.removeItem('foundBirds');
        localStorage.removeItem('birdPhotos');
        alert('所有数据已清除！页面将刷新。');
        location.reload();
    }
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
        
        if (zone === 'found') {
            // Show only found birds
            Object.values(birdData).flat().forEach(bird => {
                if (foundBirds[bird.id]) {
                    createBirdCard(bird);
                }
            });
        } else if (zone === 'not-found') {
            // Show only not found birds
            Object.values(birdData).flat().forEach(bird => {
                if (!foundBirds[bird.id]) {
                    createBirdCard(bird);
                }
            });
        } else if (birdData[zone]) {
            // Show birds from specific zone
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
