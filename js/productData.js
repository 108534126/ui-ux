const productCoffee = {
    'espresso': {
        name: '濃縮咖啡',
        price: '90',
        image: '../img/咖啡/coffee1.png',
        description: '義式濃縮咖啡是咖啡的精華，濃縮了咖啡的香氣和風味。我們使用精選的咖啡豆，經過專業的烘焙和沖煮，為您帶來最純粹的咖啡體驗。',
        id: 'CF001',
        category: '咖啡'
    },
    'americano': {
        name: '美式咖啡',
        price: '90',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: '美式咖啡以濃縮咖啡為基底，加入熱水沖淡，口感清爽順口，是日常咖啡的經典選擇。',
        id: 'CF002',
        category: '咖啡'
    },
    'latte': {
        name: '拿鐵咖啡',
        price: '120',
        image: '../img/咖啡/coffee2.png',
        description: '拿鐵咖啡是由濃縮咖啡和蒸煮牛奶組成，口感順滑，奶香濃郁。我們的拿鐵使用優質鮮奶，搭配完美比例的濃縮咖啡，為您帶來絕佳的口感體驗。',
        id: 'CF003',
        category: '咖啡'
    },

    'cappuccino': {
        name: '卡布奇諾',
        price: '120',
        image: '../img/咖啡/coffee3.png',
        description: '卡布奇諾融合濃縮咖啡、熱牛奶與奶泡，口感細膩滑順，帶有淡淡苦甜餘韻。',
        id: 'CF004',
        category: '咖啡'
    },
    'flavored-latte': {
        name: '風味拿鐵',
        price: '130',
        image: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: '風味拿鐵在傳統拿鐵中加入焦糖、香草等多種口味選擇，讓您每一口都有驚喜。',
        id: 'CF005',
        category: '咖啡'
    },
    'mocha-latte': {
        name: '摩卡拿鐵',
        price: '140',
        image: '../img/咖啡/coffee4.png',
        description: '摩卡拿鐵融合巧克力與咖啡香氣，是巧克力與咖啡愛好者的絕佳選擇。',
        id: 'CF006',
        category: '咖啡'
    },
    'caramel-macchiato': {
        name: '焦糖瑪奇朵',
        price: '140',
        image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: '焦糖瑪奇朵以濃縮咖啡為基底，搭配香濃牛奶和焦糖醬，層次分明，甜而不膩。',
        id: 'CF007',
        category: '咖啡'
    },
    'salted-caramel': {
        name: '焦糖鹽之花',
        price: '140',
        image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: '焦糖鹽之花融合焦糖的甜與鹽之花的鹹，風味獨特，香氣迷人。',
        id: 'CF008',
        category: '咖啡'
    },
    'sicilian-coffee': {
        name: '西西里咖啡',
        price: '140',
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: '西西里咖啡為義大利特色冷萃咖啡，酸甜清新，炎炎夏日的消暑良伴。',
        id: 'CF009',
        category: '咖啡'
    },
    'creme-brulee-latte': {
        name: '烤布蕾拿鐵',
        price: '140',
        image: '../img/咖啡/coffee25.png',
        description: '將法式烤布蕾風味融入拿鐵之中，甜中帶奶，滑順回甘。',
        id: 'CF010',
        category: '咖啡'
    },
    'iced-brick-latte': {
        name: '冰磚拿鐵',
        price: '150',
        image: '',
        description: '冰磚拿鐵使用咖啡冰磚慢慢溶解，風味層次豐富，讓咖啡風味歷久彌新。',
        id: 'CF011',
        category: '咖啡'
    },
    'matcha-coffee': {
        name: '抹茶咖啡',
        price: '150',
        image: '../img/咖啡/coffee28.png',
        description: '融合日式抹茶與濃縮咖啡，帶有自然茶香與咖啡濃郁的奇妙交融。',
        id: 'CF012',
        category: '咖啡'
    },
    'oreo-latte': {
        name: 'Oreo 拿鐵',
        price: '160',
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: 'Oreo 拿鐵融合餅乾碎片與濃郁拿鐵，香甜酥脆，充滿童趣。',
        id: 'CF013',
        category: '咖啡'
    },
    'grapefruit-americano': {
        name: '冰河柚香美式',
        price: '160',
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: '美式咖啡加入柚子風味，清爽酸甜，適合夏日飲用。',
        id: 'CF014',
        category: '咖啡'
    }}

    // 特色飲品
const productDrink = {
    'thick-milk-tea': {
        name: '厚奶茶',
        price: '140',
        image: 'https://i.pinimg.com/736x/fb/49/58/fb495839fc5b89ccf9f14f3ad27bf35f.jpg',
        description: '奶香濃郁的厚奶茶，口感細膩滑順，是茶與奶的完美結合。',
        id: 'OD001',
        category: '特色飲品'
    },
    'thai-milk-tea': {
        name: '泰式奶茶',
        price: '140',
        image: '../img/咖啡/coffee12.png',
        description: '泰國經典甜茶，帶有香料風味，香甜濃厚，深受喜愛。',
        id: 'OD002',
        category: '特色飲品'
    },
    'classic-cocoa': {
        name: '經典可可',
        price: '140',
        image: '../img/咖啡/coffee11.png',
        description: '濃郁巧克力味的經典可可飲品，暖心又滿足。',
        id: 'OD003',
        category: '特色飲品'
    },
    'black-tea-latte': {
        name: '紅茶拿鐵',
        price: '140',
        image: '../img/咖啡/coffee17.png',
        description: '滑順奶泡與濃厚紅茶結合，香氣四溢的紅茶拿鐵。',
        id: 'OD004',
        category: '特色飲品'
    },
    'matcha-latte': {
        name: '抹茶拿鐵',
        price: '140',
        image: '../img/咖啡/coffee28.png',
        description: '選用優質抹茶，搭配鮮奶製成的濃郁抹茶拿鐵。',
        id: 'OD005',
        category: '特色飲品'
    },
    'brown-sugar-milk': {
        name: '黑糖珍珠鮮奶',
        price: '140',
        image: '../img/咖啡/coffee24.png',
        description: 'Q彈珍珠配上香甜黑糖和鮮奶，口感層次豐富。',
        id: 'OD006',
        category: '特色飲品'
    },
    'brown-sugar-pearl-black-tea-latte': {
        name: '黑糖珍珠紅茶拿鐵',
        price: '150',
        image: '../img/咖啡/coffee24.png',
        description: '黑糖珍珠搭配濃厚紅茶拿鐵，甜而不膩的經典組合。',
        id: 'OD007',
        category: '特色飲品'
    },
    'honey-lemon': {
        name: '蜂蜜檸檬',
        price: '130',
        image: '../img/咖啡/coffee16.png',
        description: '清新檸檬搭配天然蜂蜜，酸甜爽口，解渴又健康。',
        id: 'OD008',
        category: '特色飲品'
    },
    'honey-yuzu': {
        name: '蜂蜜柚子',
        price: '130',
        image: '../img/咖啡/coffee29.png',
        description: '柚子香氣濃郁，配上甜蜜蜂蜜，滋味獨特。',
        id: 'OD009',
        category: '特色飲品'
    },
    'lychee-rose': {
        name: '荔枝玫瑰',
        price: '130',
        image: '',
        description: '甜美荔枝與芳香玫瑰結合，口感清新芬芳。',
        id: 'OD010',
        category: '特色飲品'
    },
    'first-love-strawberry': {
        name: '初戀草莓',
        price: '130',
        image: '',
        description: '酸甜草莓滋味，如初戀般純粹動人。',
        id: 'OD011',
        category: '特色飲品'
    },
    'summer-mango': {
        name: '夏日芒果',
        price: '130',
        image: '../img/特色飲品/夏日芒果.png',
        description: '新鮮芒果果香濃郁，清爽宜人，夏季首選。',
        id: 'OD012',
        category: '特色飲品'
    },
    'fruit-vinegar': {
        name: '果醋 (青莓/蔓越莓)',
        price: '130',
        image: '',
        description: '富含維生素C的果醋，促進健康又提神。',
        id: 'OD013',
        category: '特色飲品'
    },
    'strawberry-milk': {
        name: '草莓牛奶',
        price: '170',
        image: './img/特色飲品/草莓牛奶.png',
        description: '新鮮草莓與牛奶的完美融合，香甜順口。',
        id: 'OD014',
        category: '特色飲品'
    },
    'mango-brulee': {
        name: '芒果布蕾',
        price: '170',
        image: '',
        description: '香濃布蕾搭配芒果甜香，口感細膩迷人。',
        id: 'OD015',
        category: '特色飲品'
    },
    'caramel-cream': {
        name: '焦糖奶霜',
        price: '170',
        image: '',
        description: '香甜焦糖與奶霜交織，濃郁醇厚的滋味。',
        id: 'OD016',
        category: '特色飲品'
    },
    'matcha-cream': {
        name: '抹茶奶霜',
        price: '170',
        image: '../img/咖啡/coffee20.png',
        description: '濃郁抹茶搭配細緻奶霜，層次豐富。',
        id: 'OD017',
        category: '特色飲品'
    },
    'choco-crunch': {
        name: '巧克力可可脆片',
        price: '170',
        image: './img/特色飲品/巧克力可可脆片.jpg',
        description: '巧克力與可可脆片的完美組合，口感酥脆。',
        id: 'OD018',
        category: '特色飲品'
    },
    'cranberry-vinegar': {
        name: '蔓越莓果醋',
        price: '170',
        image: './img/特色飲品/蔓越莓果醋.jpg',
        description: '酸甜蔓越莓果醋，健康又開胃。',
        id: 'OD019',
        category: '特色飲品'
    },
    'jasmine-green-tea': {
        name: '茉莉綠茶',
        price: '90',
        image: '',
        description: '清新茉莉花香，搭配綠茶的清爽口感。',
        id: 'OD020',
        category: '特色飲品'
    },
    'earl-grey-tea': {
        name: '伯爵紅茶',
        price: '90',
        image: '',
        description: '帶有佛手柑香氣的經典伯爵紅茶。',
        id: 'OD021',
        category: '特色飲品'
    },
    'jin-xuan': {
        name: '金萱',
        price: '90',
        image: './img/特色飲品/金萱.png',
        description: '柔和奶香的台灣金萱茶，口感溫潤順口。',
        id: 'OD022',
        category: '特色飲品'
    },
    'osmanthus-oolong': {
        name: '桂花烏龍',
        price: '90',
        image: '',
        description: '烏龍茶配桂花香氣，清香宜人。',
        id: 'OD023',
        category: '特色飲品'
    },
    'genmaicha': {
        name: '玄米煎茶',
        price: '110',
        image: '',
        description: '日本經典玄米茶，烤玄米香氣濃郁，茶味甘醇。',
        id: 'OD024',
        category: '特色飲品'
    },
    'relax-sleep-tea': {
        name: '紓壓好眠茶',
        price: '110',
        image: './img/特色飲品/紓壓好眠茶.png',
        description: '結合多種草本植物，幫助放鬆身心，促進好眠。',
        id: 'OD025',
        category: '特色飲品'
    },
    'royal-berry-tea': {
        name: '皇家梅果茶',
        price: '110',
        image: 'https://example.com/royal-berry-tea.jpg',
        description: '融合多種莓果風味，酸甜適中，滋味濃郁。',
        id: 'OD026',
        category: '特色飲品'
    },
    'versailles-rose-tea': {
        name: '凡爾賽玫瑰果茶',
        price: '110',
        image: 'https://example.com/versailles-rose-tea.jpg',
        description: '以玫瑰花香為基調，清新花果香氣令人心曠神怡。',
        id: 'OD027',
        category: '特色飲品'
    },
    'ruby-wild-berry-tea': {
        name: '紅寶石野莓果茶',
        price: '110',
        image: 'https://example.com/ruby-wild-berry-tea.jpg',
        description: '野莓與紅寶石般的紅色果香完美結合，酸甜適口。',
        id: 'OD028',
        category: '特色飲品'
    },
    'mango-green-tea': {
        name: '芒果綠茶',
        price: '110',
        image: 'https://example.com/mango-green-tea.jpg',
        description: '新鮮芒果果香搭配清爽綠茶，清涼解渴。',
        id: 'OD029',
        category: '特色飲品'
    },
    'strawberry-black-tea': {
        name: '草莓紅茶',
        price: '110',
        image: 'https://example.com/strawberry-black-tea.jpg',
        description: '甜美草莓香氣與濃郁紅茶完美融合，風味獨特。',
        id: 'OD030',
        category: '特色飲品'
    },
    'lemon-black-tea': {
        name: '檸檬紅茶',
        price: '120',
        image: './img/特色飲品/檸檬紅茶.png',
        description: '經典檸檬紅茶，酸甜爽口，夏日消暑首選。',
        id: 'OD031',
        category: '特色飲品'
    },
    'honey-yuzu-tea': {
        name: '蜂蜜柚子茶',
        price: '110',
        image: './img/特色飲品/蜂蜜柚子茶.png',
        description: '柚子香氣濃郁，搭配蜂蜜甜味，清新潤口。',
        id: 'OD032',
        category: '特色飲品'
    },
    'honey-apple-tea': {
        name: '蜂蜜蘋果茶',
        price: '120',
        image: 'https://example.com/honey-apple-tea.jpg',
        description: '甜美蘋果香融合蜂蜜，滋味溫和舒適。',
        id: 'OD033',
        category: '特色飲品'
    },
    'brown-sugar-longan-red-date-tea': {
        name: '黑糖桂圓紅棗茶',
        price: '110',
        image: 'https://example.com/brown-sugar-longan-red-date-tea.jpg',
        description: '傳統黑糖搭配桂圓與紅棗，滋補暖身好選擇。',
        id: 'OD034',
        category: '特色飲品'
    },
    'brown-sugar-ginger-milk-tea': {
        name: '黑糖薑薑撞奶茶',
        price: '120',
        image: 'https://example.com/brown-sugar-ginger-milk-tea.jpg',
        description: '濃郁黑糖與辛辣薑味融合，帶來暖身的溫暖感受。',
        id: 'OD035',
        category: '特色飲品'
    }}

    // 甜點
const productDessert = {
    'original-canele': {
        name: '原味可麗露',
        price: '65',
        image: '../img/甜點/des2.png',
        description: '經典原味可麗露，外皮酥脆焦糖化，內部柔軟濕潤，帶有香草與蘭姆酒香氣，是法國傳統甜點的極致呈現。',
        id: 'DS001',
        category: '甜點'
    },
    'italian-dessert': {
        name: '義式甜品',
        price: '80',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: '義式風味甜點，搭配濃郁奶香與多層次口感，享受地中海甜蜜風情。',
        id: 'DS002',
        category: '甜點'
    },
    'lemon-tart': {
        name: '法式檸檬塔',
        price: '85',
        image: '../img/甜點/des10.png',
        description: '法式檸檬塔酸甜爽口，塔皮酥脆，搭配滑順檸檬內餡，是下午茶的首選甜點。',
        id: 'DS003',
        category: '甜點'
    },
    'blueberry-cheesecake': {
        name: '藍莓起司',
        price: '100',
        image: '../img/甜點/des19.png',
        description: '濃郁奶香搭配新鮮藍莓果醬，完美融合酸甜與奶香的藍莓起司蛋糕。',
        id: 'DS004',
        category: '甜點'
    },
    'classic-cheesecake': {
        name: '經典重乳酪',
        price: '100',
        image: '../img/甜點/des20.png',
        description: '重乳酪蛋糕，口感紮實濃郁，每一口都散發濃濃起司香，是起司愛好者的首選。',
        id: 'DS005',
        category: '甜點'
    },
    'truffe-chocolate': {
        name: '楚浮巧克力',
        price: '100',
        image: '../img/甜點/des14.png',
        description: '濃郁巧克力蛋糕，加入法式楚浮巧克力餡，香濃不甜膩，令人回味無窮。',
        id: 'DS006',
        category: '甜點'
    },
    'matcha-mille-crepe': {
        name: '抹茶千層',
        price: '110',
        image: '../img/甜點/des17.png',
        description: '層層堆疊的千層餅皮，搭配香濃抹茶卡士達內餡，茶香濃郁、甜而不膩。',
        id: 'DS007',
        category: '甜點'
    },
    'oreo-tiramisu': {
        name: 'Oreo 提拉米蘇',
        price: '120',
        image: '../img/甜點/des17.png',
        description: '將經典提拉米蘇融合 Oreo 餅乾的創新甜點，增添香脆與可可香。',
        id: 'DS008',
        category: '甜點'
    },
    'oolong-mille-crepe': {
        name: '炭焙烏龍千層',
        price: '120',
        image: '../img/甜點/des16.png',
        description: '炭焙烏龍茶風味濃郁，融合在層層餅皮與奶餡中，香氣獨特、口感細緻。',
        id: 'DS009',
        category: '甜點'
    },
    'chocolate-muffin': {
        name: '巧克力鬆餅',
        price: '135',
        image: '../img/甜點/des1.png',
        description: '外酥內軟的鬆餅淋上濃郁巧克力醬，每一口都甜蜜滿分。',
        id: 'DS010',
        category: '甜點'
    },
    'honey-pancake': {
        name: '蜂蜜鬆餅',
        price: '135',
        image: '../img/甜點/des6.png',
        description: '經典蜂蜜鬆餅，香氣四溢，搭配蜂蜜與奶油，是早午餐或下午茶的最佳選擇。',
        id: 'DS011',
        category: '甜點'
    },
    'caramel-pancake': {
        name: '焦糖鬆餅',
        price: '135',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: '焦糖醬與鬆餅完美融合，口感香甜不膩，讓人一試成主顧。',
        id: 'DS012',
        category: '甜點'
    },
    'tuna-cheese-pancake': {
        name: '鮪魚起司鬆餅',
        price: '135',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: '鹹香的鮪魚與濃郁起司搭配鬆餅，是鹹甜控的最愛，適合正餐與點心時間享用。',
        id: 'DS013',
        category: '甜點'
    }}

    // 熟食
const productFood = {
    'little-hotdog': {
        name: '小熱狗',
        price: '60',
        image: 'https://i.pinimg.com/736x/13/a9/1f/13a91fc3ba8d8cf48c5fb7a0aa0e2a33.jpg',
        description: '香腸造型小熱狗，外酥內嫩，適合搭配任何飲品享用。',
        id: 'SV001',
        category: '熟食品項'
    },
    'french-fries': {
        name: '薯條',
        price: '80',
        image: 'https://i.pinimg.com/736x/7c/94/6a/7c946a71324c8932b00beb475acec227.jpg',
        description: '黃金酥脆薯條，搭配蕃茄醬與起司粉，絕對經典。',
        id: 'SV003',
        category: '熟食品項'
    },
    'chicken-nuggets': {
        name: '雞塊',
        price: '80',
        image: 'https://i.pinimg.com/736x/31/d3/63/31d363a38c28062f793e98cde5f01b28.jpg',
        description: '外酥內嫩的經典雞塊，適合與朋友共享。',
        id: 'SV004',
        category: '熟食品項'
    },
    'popcorn-chicken': {
        name: '雞米花',
        price: '80',
        image: 'https://i.pinimg.com/736x/7b/0d/18/7b0d18e9a3c3dc7d73a7b1b05d6f5893.jpg',
        description: '一口大小的雞米花，香脆可口，是下午茶的好選擇。',
        id: 'SV005',
        category: '熟食品項'
    },
    'little-sausage': {
        name: '小肉豆',
        price: '60',
        image: 'https://www.ytower.com.tw/eshop_mall/pd-images/SY-020.jpg',
        description: '鹹香迷你香腸，配上特製醬汁，一口接一口停不下來。',
        id: 'SV002',
        category: '熟食品項'
    },
    'grilled-wings': {
        name: '紐澳良烤雞翅',
        price: '135',
        image: 'https://i.pinimg.com/736x/10/99/a4/1099a4328e926b76632de12cc3347347.jpg',
        description: '獨門醃製配方的烤雞翅，香辣多汁。',
        id: 'SV006',
        category: '熟食品項'
    },
    'tantanmen': {
        name: '坦已麻奶拉麵',
        price: '160 | 240',
        image: 'https://shaper.fooday.app/width=1200,quality=75,format=auto/5f3tcDSFTpmfx7atmujKEM',
        description: '融合台式麻奶風味的創意拉麵，辣中帶香，奶中帶麻。',
        id: 'SV007',
        category: '熟食品項'
    },
    'pasta-trio': {
        name: '義大利麵 (青醬/白醬/紅醬)',
        price: '200 | 280',
        image: '../img/鹹食/food11.png',
        description: '三種經典義大利麵醬可選，適合各種口味偏好。',
        id: 'SV008',
        category: '熟食品項'
    },
    'creamy-risotto': {
        name: '白醬燉飯',
        price: '200 | 280',
        image: '',
        description: '以濃郁奶香白醬製成，搭配香煎雞肉或蔬菜配料。',
        id: 'SV009',
        category: '熟食品項'
    },
    'beef-noodles': {
        name: '紅燒牛肉麵',
        price: '200 | 280',
        image: '',
        description: '經典台式紅燒牛肉湯頭，濃郁入味。',
        id: 'SV010',
        category: '熟食品項'
    },
    'braised-pork-rice': {
        name: '梅干燉肉蓋飯',
        price: '200 | 280',
        image: '',
        description: '傳統梅干菜搭配滷豬肉，鹹香下飯。',
        id: 'SV011',
        category: '熟食品項'
    },
    'wine-beef-rice': {
        name: '茄汁紅酒牛肉蓋飯',
        price: '200 | 280',
        image: '',
        description: '茄汁與紅酒燉牛肉，風味濃郁，米飯絕配。',
        id: 'SV012',
        category: '熟食品項'
    },
    'beef-stirfry-rice': {
        name: '蔥爆嫩牛柳蓋飯',
        price: '200 | 280',
        image: '',
        description: '快炒牛柳與青蔥，香氣撲鼻。',
        id: 'SV013',
        category: '熟食品項'
    },
    'three-cup-chicken-rice': {
        name: '三杯雞蓋飯',
        price: '200 | 280',
        image: '',
        description: '經典台灣三杯雞風味，搭配白飯超下飯。',
        id: 'SV014',
        category: '熟食品項'
    },
    'kungpao-sirloin': {
        name: '宮爆莎朗',
        price: '200 | 280',
        image: '',
        description: '中式宮保風味與西式莎朗牛排的完美融合。',
        id: 'SV015',
        category: '熟食品項'
    }}

    // 咖啡豆
const productBean = {
    'perfume-rose': {
        name: '香水月季',
        price: '600',
        image: '/img/咖啡/coffee9.png',
        description: '香水月季是一款香氣撲鼻、風味優雅的精品咖啡豆，帶有花果香氣與淡淡的檸檬酸感，適合喜愛清新風味的您。',
        id: 'BE001',
        category: '咖啡豆'
    },
    'priest': {
        name: '神父',
        price: '600',
        image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: '神父豆風味濃郁、層次豐富，兼具可可與堅果香氣，是一款均衡且令人回味的中深焙咖啡豆。',
        id: 'BE002',
        category: '咖啡豆'
    },
    'seasonal-special': {
        name: '季節限定',
        price: '800',
        image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: '季節限定款以特選莊園豆為主，根據季節更替提供不同風味，讓您每次品嚐都充滿驚喜與期待。',
        id: 'BE003',
        category: '咖啡豆'
    }
};

const productData = {
    productCoffee,
    productDrink,
    productDessert,
    productFood,
    productBean
};