"use strict";

// 1,250 bilingual questions. Arabic options are localized/transliterated.
const questions = [
  {
    "category": "General Knowledge",
    "en": "Which planet is known as the Red Planet?",
    "ar": "ما الكوكب المعروف باسم الكوكب الأحمر؟",
    "options": [
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0001",
    "optionsAr": [
      "عطارد",
      "الزهرة",
      "المريخ",
      "المشتري"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "How many days are in a leap year?",
    "ar": "كم عدد أيام السنة الكبيسة؟",
    "options": [
      "365",
      "366",
      "364",
      "367"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0002",
    "optionsAr": [
      "365",
      "366",
      "364",
      "367"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the largest ocean on Earth?",
    "ar": "ما أكبر محيط على الأرض؟",
    "options": [
      "Pacific Ocean",
      "Arctic Ocean",
      "Indian Ocean",
      "Atlantic Ocean"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0003",
    "optionsAr": [
      "المحيط الهادئ",
      "المحيط المتجمد الشمالي",
      "المحيط الهندي",
      "المحيط الأطلسي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which animal is the tallest in the world?",
    "ar": "ما أطول حيوان في العالم؟",
    "options": [
      "Camel",
      "Elephant",
      "Ostrich",
      "Giraffe"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0004",
    "optionsAr": [
      "كاميل",
      "فيل",
      "نعامة",
      "زرافة"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What do bees collect from flowers to make honey?",
    "ar": "ماذا يجمع النحل من الأزهار لصنع العسل؟",
    "options": [
      "Water",
      "Nectar",
      "Pollen only",
      "Sap"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0005",
    "optionsAr": [
      "الماء",
      "نيكتار",
      "بوللين ونلي",
      "ساب"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "How many sides does a hexagon have?",
    "ar": "كم ضلعاً للشكل السداسي؟",
    "options": [
      "Seven",
      "Six",
      "Eight",
      "Five"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0006",
    "optionsAr": [
      "سيفين",
      "سيكس",
      "ييجهت",
      "فيفي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which gas do humans need to breathe?",
    "ar": "ما الغاز الذي يحتاج الإنسان إلى تنفسه؟",
    "options": [
      "Carbon dioxide",
      "Hydrogen",
      "Helium",
      "Oxygen"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0007",
    "optionsAr": [
      "ثاني أكسيد الكربون",
      "الهيدروجين",
      "الهيليوم",
      "الأكسجين"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the freezing point of water in Celsius?",
    "ar": "كم درجة تجمد الماء بالمقياس المئوي؟",
    "options": [
      "0°C",
      "-10°C",
      "10°C",
      "100°C"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0008",
    "optionsAr": [
      "0°ك",
      "-10°ك",
      "10°ك",
      "100°ك"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which country is famous for the pyramids of Giza?",
    "ar": "في أي دولة توجد أهرامات الجيزة؟",
    "options": [
      "India",
      "Greece",
      "Egypt",
      "Mexico"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0009",
    "optionsAr": [
      "الهند",
      "اليونان",
      "مصر",
      "المكسيك"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the main ingredient in traditional hummus?",
    "ar": "ما المكوّن الأساسي في الحمص التقليدي؟",
    "options": [
      "Potatoes",
      "Chickpeas",
      "Rice",
      "Lentils"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0010",
    "optionsAr": [
      "بوتاتويس",
      "كهيككبياس",
      "الأرز",
      "لينتيلس"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which bird is often associated with delivering messages?",
    "ar": "أي طائر ارتبط تقليدياً بنقل الرسائل؟",
    "options": [
      "Pigeon",
      "Owl",
      "Penguin",
      "Eagle"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0011",
    "optionsAr": [
      "حمامة",
      "بومة",
      "بطريق",
      "نسر"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "How many colors are traditionally named in a rainbow?",
    "ar": "كم لوناً يُذكر تقليدياً في قوس قزح؟",
    "options": [
      "Eight",
      "Seven",
      "Six",
      "Five"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0012",
    "optionsAr": [
      "ييجهت",
      "سيفين",
      "سيكس",
      "فيفي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which instrument is used to measure temperature?",
    "ar": "ما الأداة المستخدمة لقياس درجة الحرارة؟",
    "options": [
      "Thermometer",
      "Barometer",
      "Compass",
      "Ruler"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0013",
    "optionsAr": [
      "مقياس الحرارة",
      "البارومتر",
      "البوصلة",
      "رولير"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the currency of Japan?",
    "ar": "ما عملة اليابان؟",
    "options": [
      "Yen",
      "Yuan",
      "Baht",
      "Won"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0014",
    "optionsAr": [
      "يين",
      "يوان",
      "باهت",
      "وون"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which shape has three sides?",
    "ar": "أي شكل له ثلاثة أضلاع؟",
    "options": [
      "Circle",
      "Triangle",
      "Pentagon",
      "Square"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0015",
    "optionsAr": [
      "كيركلي",
      "تريانجلي",
      "بينتاجون",
      "سقواري"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the largest land animal?",
    "ar": "ما أكبر حيوان بري؟",
    "options": [
      "Giraffe",
      "Hippopotamus",
      "Rhinoceros",
      "African elephant"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0016",
    "optionsAr": [
      "زرافة",
      "هيببوبوتاموس",
      "رهينوكيروس",
      "الفيل الأفريقي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which month comes immediately after September?",
    "ar": "أي شهر يأتي مباشرة بعد سبتمبر؟",
    "options": [
      "November",
      "October",
      "August",
      "December"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0017",
    "optionsAr": [
      "نوفيمبير",
      "وكتوبير",
      "اوجوست",
      "ديكيمبير"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the common name for H2O?",
    "ar": "ما الاسم الشائع للمركب H2O؟",
    "options": [
      "Salt",
      "Hydrogen",
      "Oxygen",
      "Water"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0018",
    "optionsAr": [
      "الملح",
      "الهيدروجين",
      "الأكسجين",
      "الماء"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which organ pumps blood around the human body?",
    "ar": "أي عضو يضخ الدم في جسم الإنسان؟",
    "options": [
      "Lungs",
      "Kidneys",
      "Heart",
      "Liver"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0019",
    "optionsAr": [
      "الرئتان",
      "الكليتان",
      "القلب",
      "الكبد"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which country is shaped like a boot?",
    "ar": "أي دولة تشتهر بشكلها الشبيه بالحذاء؟",
    "options": [
      "Italy",
      "Spain",
      "Portugal",
      "Greece"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0020",
    "optionsAr": [
      "إيطاليا",
      "إسبانيا",
      "البرتغال",
      "اليونان"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the young one of a sheep called?",
    "ar": "ماذا يُسمى صغير الخروف؟",
    "options": [
      "Calf",
      "Foal",
      "Lamb",
      "Kid"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0021",
    "optionsAr": [
      "عجل",
      "فوال",
      "حَمَل",
      "كيد"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which metal is liquid at room temperature?",
    "ar": "أي معدن يكون سائلاً في درجة حرارة الغرفة؟",
    "options": [
      "Iron",
      "Copper",
      "Mercury",
      "Aluminium"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0022",
    "optionsAr": [
      "الحديد",
      "النحاس",
      "عطارد",
      "الومينيوم"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "How many hours are in one day?",
    "ar": "كم ساعة في اليوم الواحد؟",
    "options": [
      "36",
      "24",
      "12",
      "18"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0023",
    "optionsAr": [
      "36",
      "24",
      "12",
      "18"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which planet is closest to the Sun?",
    "ar": "ما أقرب كوكب إلى الشمس؟",
    "options": [
      "Mercury",
      "Venus",
      "Mars",
      "Earth"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0024",
    "optionsAr": [
      "عطارد",
      "الزهرة",
      "المريخ",
      "الأرض"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What do you call a person who treats teeth?",
    "ar": "ماذا يُسمى الطبيب المتخصص في علاج الأسنان؟",
    "options": [
      "Pharmacist",
      "Dentist",
      "Surgeon",
      "Optician"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0025",
    "optionsAr": [
      "بهارماكيست",
      "دينتيست",
      "سورجيون",
      "وبتيكيان"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which season comes after spring?",
    "ar": "أي فصل يأتي بعد الربيع؟",
    "options": [
      "Monsoon",
      "Autumn",
      "Summer",
      "Winter"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0026",
    "optionsAr": [
      "مونسوون",
      "اوتومن",
      "سوممير",
      "وينتير"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the largest mammal?",
    "ar": "ما أكبر الثدييات حجماً؟",
    "options": [
      "Orca",
      "Giraffe",
      "Elephant",
      "Blue whale"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0027",
    "optionsAr": [
      "وركا",
      "زرافة",
      "فيل",
      "الحوت الأزرق"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which food is made by bees?",
    "ar": "ما الطعام الذي يصنعه النحل؟",
    "options": [
      "Honey",
      "Yogurt",
      "Butter",
      "Cheese"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0028",
    "optionsAr": [
      "العسل",
      "يوجورت",
      "بوتتير",
      "كهييسي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "How many minutes are in one hour?",
    "ar": "كم دقيقة في الساعة الواحدة؟",
    "options": [
      "60",
      "30",
      "45",
      "90"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0029",
    "optionsAr": [
      "60",
      "30",
      "45",
      "90"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which sense organ is used for hearing?",
    "ar": "ما العضو المستخدم للسمع؟",
    "options": [
      "Tongue",
      "Nose",
      "Eye",
      "Ear"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0030",
    "optionsAr": [
      "تونجوي",
      "نوسي",
      "ييي",
      "يار"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the capital city of Saudi Arabia?",
    "ar": "ما عاصمة المملكة العربية السعودية؟",
    "options": [
      "Jeddah",
      "Makkah",
      "Riyadh",
      "Dammam"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0031",
    "optionsAr": [
      "جدة",
      "مكة المكرمة",
      "الرياض",
      "الدمام"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which sport uses a racket and a shuttlecock?",
    "ar": "أي رياضة تستخدم مضرباً وريشة؟",
    "options": [
      "Squash",
      "Tennis",
      "Table tennis",
      "Badminton"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0032",
    "optionsAr": [
      "سقواسه",
      "التنس",
      "تابلي تيننيس",
      "تنس الريشة"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which animal is known for carrying its home on its back?",
    "ar": "أي حيوان يُعرف بحمل منزله على ظهره؟",
    "options": [
      "Turtle",
      "Fox",
      "Deer",
      "Rabbit"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0033",
    "optionsAr": [
      "سلحفاة",
      "فوكس",
      "ديير",
      "راببيت"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the opposite direction of north?",
    "ar": "ما الاتجاه المعاكس للشمال؟",
    "options": [
      "West",
      "East",
      "Northeast",
      "South"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0034",
    "optionsAr": [
      "ويست",
      "ياست",
      "نورتهياست",
      "سووته"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which fruit is known for having seeds on its outer surface?",
    "ar": "أي فاكهة تتميز بوجود بذورها على سطحها الخارجي؟",
    "options": [
      "Banana",
      "Apple",
      "Strawberry",
      "Orange"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0035",
    "optionsAr": [
      "الموز",
      "التفاح",
      "الفراولة",
      "البرتقال"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the primary source of energy for Earth?",
    "ar": "ما المصدر الأساسي للطاقة على الأرض؟",
    "options": [
      "The ocean",
      "The Moon",
      "The Sun",
      "Wind"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0036",
    "optionsAr": [
      "تهي وكيان",
      "تهي موون",
      "تهي سون",
      "ويند"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which country is home to the city of Barcelona?",
    "ar": "في أي دولة تقع مدينة برشلونة؟",
    "options": [
      "Italy",
      "Argentina",
      "France",
      "Spain"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0037",
    "optionsAr": [
      "إيطاليا",
      "الأرجنتين",
      "فرنسا",
      "إسبانيا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the name of a baby dog?",
    "ar": "ماذا يُسمى صغير الكلب؟",
    "options": [
      "Puppy",
      "Cub",
      "Kitten",
      "Calf"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0038",
    "optionsAr": [
      "جرو",
      "كوب",
      "هريرة",
      "عجل"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which household appliance keeps food cold?",
    "ar": "أي جهاز منزلي يحافظ على برودة الطعام؟",
    "options": [
      "Refrigerator",
      "Washing machine",
      "Toaster",
      "Oven"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0039",
    "optionsAr": [
      "ريفريجيراتور",
      "واسهينج ماكهيني",
      "تواستير",
      "وفين"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "How many wheels does a standard bicycle have?",
    "ar": "كم عجلة للدراجة الهوائية العادية؟",
    "options": [
      "Two",
      "One",
      "Three",
      "Four"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0040",
    "optionsAr": [
      "توو",
      "وني",
      "تهريي",
      "فوور"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which language is primarily spoken in Brazil?",
    "ar": "ما اللغة الأكثر استخداماً في البرازيل؟",
    "options": [
      "French",
      "English",
      "Spanish",
      "Portuguese"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0041",
    "optionsAr": [
      "فرينكه",
      "ينجليسه",
      "سبانيسه",
      "بورتوجويسي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the hardest natural substance commonly found on Earth?",
    "ar": "ما أصلب مادة طبيعية معروفة على الأرض؟",
    "options": [
      "Iron",
      "Granite",
      "Diamond",
      "Quartz"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0042",
    "optionsAr": [
      "الحديد",
      "جرانيتي",
      "الألماس",
      "قوارتز"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which animal is famous for changing its color?",
    "ar": "أي حيوان يشتهر بتغيير لونه؟",
    "options": [
      "Panda",
      "Koala",
      "Chameleon",
      "Kangaroo"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0043",
    "optionsAr": [
      "باندا",
      "كوالا",
      "حرباء",
      "كانجاروو"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the center of our solar system?",
    "ar": "ما مركز مجموعتنا الشمسية؟",
    "options": [
      "The Moon",
      "Earth",
      "The Sun",
      "Jupiter"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0044",
    "optionsAr": [
      "تهي موون",
      "الأرض",
      "تهي سون",
      "المشتري"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which day comes after Friday?",
    "ar": "أي يوم يأتي بعد الجمعة؟",
    "options": [
      "Saturday",
      "Sunday",
      "Thursday",
      "Monday"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0045",
    "optionsAr": [
      "ساتورداي",
      "سونداي",
      "تهورسداي",
      "مونداي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which drink is made by steeping tea leaves in hot water?",
    "ar": "أي مشروب يُحضّر بنقع أوراق الشاي في الماء الساخن؟",
    "options": [
      "Tea",
      "Coffee",
      "Juice",
      "Milk"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0046",
    "optionsAr": [
      "الشاي",
      "القهوة",
      "جويكي",
      "الحليب"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the largest internal organ in the human body?",
    "ar": "ما أكبر عضو داخلي في جسم الإنسان؟",
    "options": [
      "Stomach",
      "Liver",
      "Heart",
      "Lung"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0047",
    "optionsAr": [
      "ستوماكه",
      "الكبد",
      "القلب",
      "لونج"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which animal is known as the king of the jungle?",
    "ar": "أي حيوان يُلقب بملك الغابة؟",
    "options": [
      "Leopard",
      "Wolf",
      "Lion",
      "Tiger"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0048",
    "optionsAr": [
      "ليوبارد",
      "وولف",
      "أسد",
      "نمر"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What do plants absorb from the atmosphere for photosynthesis?",
    "ar": "ماذا تمتص النباتات من الجو خلال عملية البناء الضوئي؟",
    "options": [
      "Helium",
      "Carbon dioxide",
      "Oxygen",
      "Nitrogen"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0049",
    "optionsAr": [
      "الهيليوم",
      "ثاني أكسيد الكربون",
      "الأكسجين",
      "النيتروجين"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which continent is the Sahara Desert located in?",
    "ar": "في أي قارة تقع الصحراء الكبرى؟",
    "options": [
      "Australia",
      "South America",
      "Asia",
      "Africa"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0050",
    "optionsAr": [
      "أستراليا",
      "أمريكا الجنوبية",
      "آسيا",
      "أفريقيا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the usual number of players on a football team on the field?",
    "ar": "كم عدد لاعبي فريق كرة القدم داخل الملعب عادةً؟",
    "options": [
      "9",
      "10",
      "12",
      "11"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0051",
    "optionsAr": [
      "9",
      "10",
      "12",
      "11"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which material is commonly used to make window glass?",
    "ar": "ما المادة الأساسية الشائعة في صناعة زجاج النوافذ؟",
    "options": [
      "Wood",
      "Rubber",
      "Cotton",
      "Silica sand"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0052",
    "optionsAr": [
      "ووود",
      "روببير",
      "كوتتون",
      "سيليكا ساند"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the name of the galaxy that contains our solar system?",
    "ar": "ما اسم المجرة التي تضم مجموعتنا الشمسية؟",
    "options": [
      "Whirlpool",
      "Milky Way",
      "Sombrero",
      "Andromeda"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0053",
    "optionsAr": [
      "وهيرلبوول",
      "ميلكي واي",
      "سومبريرو",
      "اندروميدا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which animal lays the largest eggs?",
    "ar": "أي حيوان يضع أكبر البيض؟",
    "options": [
      "Ostrich",
      "Albatross",
      "Eagle",
      "Penguin"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0054",
    "optionsAr": [
      "نعامة",
      "الباتروسس",
      "نسر",
      "بطريق"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the first month of the year?",
    "ar": "ما أول شهر في السنة الميلادية؟",
    "options": [
      "February",
      "December",
      "January",
      "March"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0055",
    "optionsAr": [
      "فيبرواري",
      "ديكيمبير",
      "جانواري",
      "ماركه"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which part of a plant usually absorbs water from the soil?",
    "ar": "أي جزء من النبات يمتص الماء عادةً من التربة؟",
    "options": [
      "Flowers",
      "Fruit",
      "Roots",
      "Leaves"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0056",
    "optionsAr": [
      "الأزهار",
      "الثمار",
      "الجذور",
      "الأوراق"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the name of the device used to find direction?",
    "ar": "ما اسم الأداة التي تُستخدم لتحديد الاتجاهات؟",
    "options": [
      "Telescope",
      "Thermometer",
      "Microscope",
      "Compass"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0057",
    "optionsAr": [
      "التلسكوب",
      "مقياس الحرارة",
      "المجهر",
      "البوصلة"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which country gifted the Statue of Liberty to the United States?",
    "ar": "أي دولة أهدت تمثال الحرية إلى الولايات المتحدة؟",
    "options": [
      "Canada",
      "Italy",
      "Germany",
      "France"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0058",
    "optionsAr": [
      "كندا",
      "إيطاليا",
      "ألمانيا",
      "فرنسا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which animal is the largest living reptile?",
    "ar": "ما أكبر الزواحف الحية؟",
    "options": [
      "Leatherback turtle",
      "Saltwater crocodile",
      "Komodo dragon",
      "Green anaconda"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0059",
    "optionsAr": [
      "لياتهيرباكك تورتلي",
      "سالتواتير كروكوديلي",
      "كومودو دراجون",
      "جريين اناكوندا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "How many legs does an insect have?",
    "ar": "كم عدد أرجل الحشرة؟",
    "options": [
      "Six",
      "Four",
      "Ten",
      "Eight"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0060",
    "optionsAr": [
      "سيكس",
      "فوور",
      "تين",
      "ييجهت"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which natural satellite orbits Earth?",
    "ar": "ما القمر الطبيعي الذي يدور حول الأرض؟",
    "options": [
      "Phobos",
      "The Moon",
      "Titan",
      "Europa"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0061",
    "optionsAr": [
      "بهوبوس",
      "تهي موون",
      "تيتان",
      "يوروبا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the main language spoken in Argentina?",
    "ar": "ما اللغة الأساسية المستخدمة في الأرجنتين؟",
    "options": [
      "Italian",
      "Portuguese",
      "German",
      "Spanish"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0062",
    "optionsAr": [
      "يتاليان",
      "بورتوجويسي",
      "جيرمان",
      "سبانيسه"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which city is famous for the Eiffel Tower?",
    "ar": "أي مدينة تشتهر ببرج إيفل؟",
    "options": [
      "Vienna",
      "Paris",
      "Prague",
      "Rome"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0063",
    "optionsAr": [
      "فيينا",
      "باريس",
      "براغ",
      "روما"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What do we call water in its solid state?",
    "ar": "ماذا نسمّي الماء في حالته الصلبة؟",
    "options": [
      "Vapor",
      "Ice",
      "Steam",
      "Mist"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0064",
    "optionsAr": [
      "فابور",
      "الجليد",
      "بخار الماء",
      "ميست"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which animal is known for its black-and-white stripes?",
    "ar": "أي حيوان يشتهر بخطوطه البيضاء والسوداء؟",
    "options": [
      "Zebra",
      "Hyena",
      "Cheetah",
      "Giraffe"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0065",
    "optionsAr": [
      "حمار وحشي",
      "هيينا",
      "كهييتاه",
      "زرافة"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which blood cells help the body fight infections?",
    "ar": "أي خلايا في الدم تساعد الجسم على مقاومة العدوى؟",
    "options": [
      "White blood cells",
      "Red blood cells",
      "Platelets",
      "Plasma"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0066",
    "optionsAr": [
      "وهيتي بلوود كيللس",
      "ريد بلوود كيللس",
      "بلاتيليتس",
      "بلاسما"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the common name for a young cat?",
    "ar": "ماذا يُسمى صغير القط؟",
    "options": [
      "Puppy",
      "Cub",
      "Foal",
      "Kitten"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0067",
    "optionsAr": [
      "جرو",
      "كوب",
      "فوال",
      "هريرة"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which ocean lies between Africa and Australia?",
    "ar": "أي محيط يقع بين أفريقيا وأستراليا؟",
    "options": [
      "Indian Ocean",
      "Atlantic Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0068",
    "optionsAr": [
      "المحيط الهندي",
      "المحيط الأطلسي",
      "المحيط الهادئ",
      "المحيط المتجمد الشمالي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which tool is used to observe very small objects?",
    "ar": "ما الأداة المستخدمة لرؤية الأجسام الصغيرة جداً؟",
    "options": [
      "Telescope",
      "Microscope",
      "Binoculars",
      "Periscope"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0069",
    "optionsAr": [
      "التلسكوب",
      "المجهر",
      "بينوكولارس",
      "بيريسكوبي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which planet is famous for its rings?",
    "ar": "أي كوكب يشتهر بحلقاته؟",
    "options": [
      "Mercury",
      "Saturn",
      "Venus",
      "Mars"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0070",
    "optionsAr": [
      "عطارد",
      "زحل",
      "الزهرة",
      "المريخ"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the World Wide Web?",
    "ar": "من يُنسب إليه عادةً ابتكار the World Wide Web؟",
    "options": [
      "Tim Berners-Lee",
      "Jacob Perkins",
      "Richard Trevithick",
      "Louis Pasteur"
    ],
    "optionsAr": [
      "تيم بيرنيرس-ليي",
      "جاكوب بيركينس",
      "ريكهارد تريفيتهيكك",
      "لوويس باستيور"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0071"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the dynamite?",
    "ar": "من يُنسب إليه عادةً ابتكار the dynamite؟",
    "options": [
      "René Laennec",
      "Dmitri Mendeleev",
      "Alfred Nobel",
      "Richard Trevithick"
    ],
    "optionsAr": [
      "رينé لايننيك",
      "دميتري مينديلييف",
      "الفريد نوبيل",
      "ريكهارد تريفيتهيكك"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0072"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the Braille writing system?",
    "ar": "من يُنسب إليه عادةً ابتكار the Braille writing system؟",
    "options": [
      "Alessandro Volta",
      "Daniel Gabriel Fahrenheit",
      "Louis Braille",
      "Edward Jenner"
    ],
    "optionsAr": [
      "اليسساندرو فولتا",
      "دانييل جابرييل فاهرينهييت",
      "لوويس برايللي",
      "يدوارد جيننير"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0073"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the diesel engine?",
    "ar": "من يُنسب إليه عادةً ابتكار the diesel engine؟",
    "options": [
      "Charles Babbage",
      "Louis Pasteur",
      "Rudolf Diesel",
      "James Watt"
    ],
    "optionsAr": [
      "كهارليس بابباجي",
      "لوويس باستيور",
      "رودولف دييسيل",
      "جاميس واتت"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0074"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical telephone?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical telephone؟",
    "options": [
      "Michael Faraday",
      "Alexander Graham Bell",
      "John Bardeen, Walter Brattain and William Shockley",
      "Ada Lovelace"
    ],
    "optionsAr": [
      "ميكهايل فاراداي",
      "اليكساندير جراهام بيلل",
      "جوهن بارديين, والتير براتتاين اند ويلليام سهوككليي",
      "ادا لوفيلاكي"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0075"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the phonograph?",
    "ar": "من يُنسب إليه عادةً ابتكار the phonograph؟",
    "options": [
      "Eli Whitney",
      "Ada Lovelace",
      "Wilhelm Conrad Röntgen",
      "Thomas Edison"
    ],
    "optionsAr": [
      "يلي وهيتنيي",
      "ادا لوفيلاكي",
      "ويلهيلم كونراد رöنتجين",
      "تهوماس يديسون"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0076"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the steam engine improvements?",
    "ar": "من يُنسب إليه عادةً ابتكار the steam engine improvements؟",
    "options": [
      "James Watt",
      "Norman Joseph Woodland and Bernard Silver",
      "Ada Lovelace",
      "Robert H. Goddard"
    ],
    "optionsAr": [
      "جاميس واتت",
      "نورمان جوسيبه ووودلاند اند بيرنارد سيلفير",
      "ادا لوفيلاكي",
      "روبيرت ه. جوددارد"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0077"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful airplane?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful airplane؟",
    "options": [
      "Johannes Gutenberg",
      "Louis Daguerre",
      "Chester Carlson",
      "the Wright brothers"
    ],
    "optionsAr": [
      "جوهاننيس جوتينبيرج",
      "لوويس داجويرري",
      "كهيستير كارلسون",
      "الأخوان رايت"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0078"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical electric light bulb?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical electric light bulb؟",
    "options": [
      "Joseph Murray",
      "John Goodenough, M. Stanley Whittingham and Akira Yoshino",
      "Douglas Engelbart",
      "Thomas Edison"
    ],
    "optionsAr": [
      "جوسيبه مورراي",
      "جوهن جوودينووجه, م. ستانليي وهيتتينجهام اند اكيرا يوسهينو",
      "دووجلاس ينجيلبارت",
      "تهوماس يديسون"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0079"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the printing press in Europe?",
    "ar": "من يُنسب إليه عادةً ابتكار the printing press in Europe؟",
    "options": [
      "Johannes Gutenberg",
      "Christopher Latham Sholes",
      "Wilhelm Conrad Röntgen",
      "John Mauchly and J. Presper Eckert"
    ],
    "optionsAr": [
      "جوهاننيس جوتينبيرج",
      "كهريستوبهير لاتهام سهوليس",
      "ويلهيلم كونراد رöنتجين",
      "جوهن ماوكهلي اند ج. بريسبير يككيرت"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0080"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the periodic table?",
    "ar": "من يُنسب إليه عادةً ابتكار the periodic table؟",
    "options": [
      "Elisha Otis",
      "Dmitri Mendeleev",
      "the Soviet space program",
      "Rosalind Franklin"
    ],
    "optionsAr": [
      "يليسها وتيس",
      "دميتري مينديلييف",
      "تهي سوفييت سباكي بروجرام",
      "روساليند فرانكلين"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0081"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first widely used smallpox vaccine?",
    "ar": "من يُنسب إليه عادةً ابتكار the first widely used smallpox vaccine؟",
    "options": [
      "Edward Jenner",
      "Jack Kilby",
      "Charles Babbage",
      "Ray Tomlinson"
    ],
    "optionsAr": [
      "يدوارد جيننير",
      "جاكك كيلبي",
      "كهارليس بابباجي",
      "راي توملينسون"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0082"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the discovery of penicillin?",
    "ar": "من يُنسب إليه عادةً ابتكار the discovery of penicillin؟",
    "options": [
      "Alexander Fleming",
      "Michael Faraday",
      "Joseph Lister",
      "Dmitri Mendeleev"
    ],
    "optionsAr": [
      "ألكسندر فليمنغ",
      "ميكهايل فاراداي",
      "جوسيبه ليستير",
      "دميتري مينديلييف"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0083"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first polio vaccine?",
    "ar": "من يُنسب إليه عادةً ابتكار the first polio vaccine؟",
    "options": [
      "Jonas Salk",
      "Charles Babbage",
      "Nikola Tesla",
      "John Logie Baird"
    ],
    "optionsAr": [
      "جوناس سالك",
      "كهارليس بابباجي",
      "نيكولا تيسلا",
      "جوهن لوجيي بايرد"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0084"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical typewriter?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical typewriter؟",
    "options": [
      "Alfred Nobel",
      "Werner von Siemens",
      "Christopher Latham Sholes",
      "Nikola Tesla"
    ],
    "optionsAr": [
      "الفريد نوبيل",
      "ويرنير فون سييمينس",
      "كهريستوبهير لاتهام سهوليس",
      "نيكولا تيسلا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0085"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the cotton gin?",
    "ar": "من يُنسب إليه عادةً ابتكار the cotton gin؟",
    "options": [
      "Eli Whitney",
      "David Bushnell",
      "John Logie Baird",
      "Douglas Engelbart"
    ],
    "optionsAr": [
      "يلي وهيتنيي",
      "دافيد بوسهنيلل",
      "جوهن لوجيي بايرد",
      "دووجلاس ينجيلبارت"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0086"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the modern sewing machine?",
    "ar": "من يُنسب إليه عادةً ابتكار the modern sewing machine؟",
    "options": [
      "Ada Lovelace",
      "Thomas Edison",
      "Evangelista Torricelli",
      "Isaac Singer"
    ],
    "optionsAr": [
      "ادا لوفيلاكي",
      "تهوماس يديسون",
      "يفانجيليستا تورريكيللي",
      "يسااك سينجير"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0087"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the diesel motor?",
    "ar": "من يُنسب إليه عادةً ابتكار the diesel motor؟",
    "options": [
      "Willis Carrier",
      "Rudolf Diesel",
      "Richard Trevithick",
      "Douglas Engelbart"
    ],
    "optionsAr": [
      "ويلليس كارريير",
      "رودولف دييسيل",
      "ريكهارد تريفيتهيكك",
      "دووجلاس ينجيلبارت"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0088"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the safety elevator?",
    "ar": "من يُنسب إليه عادةً ابتكار the safety elevator؟",
    "options": [
      "Michael Faraday",
      "Elisha Otis",
      "Ada Lovelace",
      "James Chadwick"
    ],
    "optionsAr": [
      "ميكهايل فاراداي",
      "يليسها وتيس",
      "ادا لوفيلاكي",
      "جاميس كهادويكك"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0089"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical incandescent lamp?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical incandescent lamp؟",
    "options": [
      "John Bardeen, Walter Brattain and William Shockley",
      "Thomas Edison",
      "Alessandro Volta",
      "Nikola Tesla"
    ],
    "optionsAr": [
      "جوهن بارديين, والتير براتتاين اند ويلليام سهوككليي",
      "تهوماس يديسون",
      "اليسساندرو فولتا",
      "نيكولا تيسلا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0090"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the radio control system?",
    "ar": "من يُنسب إليه عادةً ابتكار the radio control system؟",
    "options": [
      "Rosalind Franklin",
      "Henri Becquerel",
      "Nikola Tesla",
      "the Soviet space program"
    ],
    "optionsAr": [
      "روساليند فرانكلين",
      "هينري بيكقويريل",
      "نيكولا تيسلا",
      "تهي سوفييت سباكي بروجرام"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0091"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the alternating-current induction motor?",
    "ar": "من يُنسب إليه عادةً ابتكار the alternating-current induction motor؟",
    "options": [
      "René Laennec",
      "Christopher Latham Sholes",
      "Charles Babbage",
      "Nikola Tesla"
    ],
    "optionsAr": [
      "رينé لايننيك",
      "كهريستوبهير لاتهام سهوليس",
      "كهارليس بابباجي",
      "نيكولا تيسلا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0092"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first computer algorithm?",
    "ar": "من يُنسب إليه عادةً ابتكار the first computer algorithm؟",
    "options": [
      "Daniel Gabriel Fahrenheit",
      "Ada Lovelace",
      "Alessandro Volta",
      "John Logie Baird"
    ],
    "optionsAr": [
      "دانييل جابرييل فاهرينهييت",
      "ادا لوفيلاكي",
      "اليسساندرو فولتا",
      "جوهن لوجيي بايرد"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0093"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the analytical engine design?",
    "ar": "من يُنسب إليه عادةً ابتكار the analytical engine design؟",
    "options": [
      "Eli Whitney",
      "Charles Babbage",
      "Robert H. Goddard",
      "Thomas Edison"
    ],
    "optionsAr": [
      "يلي وهيتنيي",
      "كهارليس بابباجي",
      "روبيرت ه. جوددارد",
      "تهوماس يديسون"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0094"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first general-purpose electronic computer design?",
    "ar": "من يُنسب إليه عادةً ابتكار the first general-purpose electronic computer design؟",
    "options": [
      "John Mauchly and J. Presper Eckert",
      "J. J. Thomson",
      "Rosalind Franklin",
      "Christiaan Barnard"
    ],
    "optionsAr": [
      "جوهن ماوكهلي اند ج. بريسبير يككيرت",
      "ج. ج. تهومسون",
      "روساليند فرانكلين",
      "كهريستياان بارنارد"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0095"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful kidney transplant operation?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful kidney transplant operation؟",
    "options": [
      "Joseph Murray",
      "Jonas Salk",
      "René Laennec",
      "Ada Lovelace"
    ],
    "optionsAr": [
      "جوسيبه مورراي",
      "جوناس سالك",
      "رينé لايننيك",
      "ادا لوفيلاكي"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0096"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful heart transplant operation?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful heart transplant operation؟",
    "options": [
      "Dmitri Mendeleev",
      "Joseph Murray",
      "Christiaan Barnard",
      "John Bardeen, Walter Brattain and William Shockley"
    ],
    "optionsAr": [
      "دميتري مينديلييف",
      "جوسيبه مورراي",
      "كهريستياان بارنارد",
      "جوهن بارديين, والتير براتتاين اند ويلليام سهوككليي"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0097"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first artificial satellite?",
    "ar": "من يُنسب إليه عادةً ابتكار the first artificial satellite؟",
    "options": [
      "Richard Trevithick",
      "J. J. Thomson",
      "the Soviet space program",
      "Jonas Salk"
    ],
    "optionsAr": [
      "ريكهارد تريفيتهيكك",
      "ج. ج. تهومسون",
      "تهي سوفييت سباكي بروجرام",
      "جوناس سالك"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0098"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first liquid-fueled rocket?",
    "ar": "من يُنسب إليه عادةً ابتكار the first liquid-fueled rocket؟",
    "options": [
      "Louis Daguerre",
      "Werner von Siemens",
      "Alessandro Volta",
      "Robert H. Goddard"
    ],
    "optionsAr": [
      "لوويس داجويرري",
      "ويرنير فون سييمينس",
      "اليسساندرو فولتا",
      "روبيرت ه. جوددارد"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0099"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical helicopter?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical helicopter؟",
    "options": [
      "J. J. Thomson",
      "Albert Sabin",
      "Igor Sikorsky",
      "Louis Pasteur"
    ],
    "optionsAr": [
      "ج. ج. تهومسون",
      "البيرت سابين",
      "يجور سيكورسكي",
      "لوويس باستيور"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0100"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first commercial barcode system?",
    "ar": "من يُنسب إليه عادةً ابتكار the first commercial barcode system؟",
    "options": [
      "Alfred Nobel",
      "Norman Joseph Woodland and Bernard Silver",
      "Dmitri Mendeleev",
      "Ada Lovelace"
    ],
    "optionsAr": [
      "الفريد نوبيل",
      "نورمان جوسيبه ووودلاند اند بيرنارد سيلفير",
      "دميتري مينديلييف",
      "ادا لوفيلاكي"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0101"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first laser?",
    "ar": "من يُنسب إليه عادةً ابتكار the first laser؟",
    "options": [
      "Alexander Graham Bell",
      "Theodore Maiman",
      "Wilhelm Conrad Röntgen",
      "the Soviet space program"
    ],
    "optionsAr": [
      "اليكساندير جراهام بيلل",
      "تهيودوري مايمان",
      "ويلهيلم كونراد رöنتجين",
      "تهي سوفييت سباكي بروجرام"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0102"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first working transistor?",
    "ar": "من يُنسب إليه عادةً ابتكار the first working transistor؟",
    "options": [
      "Christopher Latham Sholes",
      "John Bardeen, Walter Brattain and William Shockley",
      "Thomas Edison",
      "Werner von Siemens"
    ],
    "optionsAr": [
      "كهريستوبهير لاتهام سهوليس",
      "جوهن بارديين, والتير براتتاين اند ويلليام سهوككليي",
      "تهوماس يديسون",
      "ويرنير فون سييمينس"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0103"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical photocopier?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical photocopier؟",
    "options": [
      "Chester Carlson",
      "John Logie Baird",
      "Jacob Perkins",
      "Alfred Nobel"
    ],
    "optionsAr": [
      "كهيستير كارلسون",
      "جوهن لوجيي بايرد",
      "جاكوب بيركينس",
      "الفريد نوبيل"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0104"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first modern air conditioner?",
    "ar": "من يُنسب إليه عادةً ابتكار the first modern air conditioner؟",
    "options": [
      "David Bushnell",
      "Isaac Singer",
      "Alexander Graham Bell",
      "Willis Carrier"
    ],
    "optionsAr": [
      "دافيد بوسهنيلل",
      "يسااك سينجير",
      "اليكساندير جراهام بيلل",
      "ويلليس كارريير"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0105"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical refrigerator?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical refrigerator؟",
    "options": [
      "Louis Pasteur",
      "Christiaan Barnard",
      "Joseph Lister",
      "Jacob Perkins"
    ],
    "optionsAr": [
      "لوويس باستيور",
      "كهريستياان بارنارد",
      "جوسيبه ليستير",
      "جاكوب بيركينس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0106"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful powered flight in Europe?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful powered flight in Europe؟",
    "options": [
      "Alberto Santos-Dumont",
      "Alessandro Volta",
      "Ray Tomlinson",
      "John Logie Baird"
    ],
    "optionsAr": [
      "البيرتو سانتوس-دومونت",
      "اليسساندرو فولتا",
      "راي توملينسون",
      "جوهن لوجيي بايرد"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0107"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical submarine?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical submarine؟",
    "options": [
      "David Bushnell",
      "Charles Babbage",
      "Robert H. Goddard",
      "John Logie Baird"
    ],
    "optionsAr": [
      "دافيد بوسهنيلل",
      "كهارليس بابباجي",
      "روبيرت ه. جوددارد",
      "جوهن لوجيي بايرد"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0108"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first working steam locomotive?",
    "ar": "من يُنسب إليه عادةً ابتكار the first working steam locomotive؟",
    "options": [
      "René Laennec",
      "Thomas Edison",
      "Richard Trevithick",
      "Edward Jenner"
    ],
    "optionsAr": [
      "رينé لايننيك",
      "تهوماس يديسون",
      "ريكهارد تريفيتهيكك",
      "يدوارد جيننير"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0109"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical electric battery?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical electric battery؟",
    "options": [
      "Christopher Latham Sholes",
      "Theodore Maiman",
      "Dmitri Mendeleev",
      "Alessandro Volta"
    ],
    "optionsAr": [
      "كهريستوبهير لاتهام سهوليس",
      "تهيودوري مايمان",
      "دميتري مينديلييف",
      "اليسساندرو فولتا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0110"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical mechanical television system?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical mechanical television system؟",
    "options": [
      "Isaac Singer",
      "Edward Jenner",
      "Alfred Nobel",
      "John Logie Baird"
    ],
    "optionsAr": [
      "يسااك سينجير",
      "يدوارد جيننير",
      "الفريد نوبيل",
      "جوهن لوجيي بايرد"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0111"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful polio vaccine used widely?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful polio vaccine used widely؟",
    "options": [
      "Martin Cooper",
      "Ray Tomlinson",
      "Willis Carrier",
      "Jonas Salk"
    ],
    "optionsAr": [
      "مارتين كووبير",
      "راي توملينسون",
      "ويلليس كارريير",
      "جوناس سالك"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0112"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful rabies vaccine?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful rabies vaccine؟",
    "options": [
      "Robert Noyce",
      "John Logie Baird",
      "Louis Pasteur",
      "Douglas Engelbart"
    ],
    "optionsAr": [
      "روبيرت نويكي",
      "جوهن لوجيي بايرد",
      "لوويس باستيور",
      "دووجلاس ينجيلبارت"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0113"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful anthrax vaccine?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful anthrax vaccine؟",
    "options": [
      "Louis Pasteur",
      "James Watt",
      "Henri Becquerel",
      "Tim Berners-Lee"
    ],
    "optionsAr": [
      "لوويس باستيور",
      "جاميس واتت",
      "هينري بيكقويريل",
      "تيم بيرنيرس-ليي"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0114"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first modern antiseptic surgery method?",
    "ar": "من يُنسب إليه عادةً ابتكار the first modern antiseptic surgery method؟",
    "options": [
      "James Chadwick",
      "J. J. Thomson",
      "Joseph Lister",
      "Elisha Otis"
    ],
    "optionsAr": [
      "جاميس كهادويكك",
      "ج. ج. تهومسون",
      "جوسيبه ليستير",
      "يليسها وتيس"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0115"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical stethoscope?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical stethoscope؟",
    "options": [
      "James Watt",
      "René Laennec",
      "Johannes Gutenberg",
      "Norman Joseph Woodland and Bernard Silver"
    ],
    "optionsAr": [
      "جاميس واتت",
      "رينé لايننيك",
      "جوهاننيس جوتينبيرج",
      "نورمان جوسيبه ووودلاند اند بيرنارد سيلفير"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0116"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical mercury thermometer?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical mercury thermometer؟",
    "options": [
      "Daniel Gabriel Fahrenheit",
      "Frederick Banting and Charles Best",
      "Igor Sikorsky",
      "Louis Daguerre"
    ],
    "optionsAr": [
      "دانييل جابرييل فاهرينهييت",
      "فريديريكك بانتينج اند كهارليس بيست",
      "يجور سيكورسكي",
      "لوويس داجويرري"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0117"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical barometer?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical barometer؟",
    "options": [
      "Alfred Nobel",
      "Evangelista Torricelli",
      "Henri Becquerel",
      "Bryan Allen and Paul MacCready’s team"
    ],
    "optionsAr": [
      "الفريد نوبيل",
      "يفانجيليستا تورريكيللي",
      "هينري بيكقويريل",
      "بريان اللين اند باول ماككريادي’س تيام"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0118"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first widely used type of vaccination against smallpox?",
    "ar": "من يُنسب إليه عادةً ابتكار the first widely used type of vaccination against smallpox؟",
    "options": [
      "Louis Daguerre",
      "Isaac Singer",
      "Edward Jenner",
      "Igor Sikorsky"
    ],
    "optionsAr": [
      "لوويس داجويرري",
      "يسااك سينجير",
      "يدوارد جيننير",
      "يجور سيكورسكي"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0119"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical electric motor?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical electric motor؟",
    "options": [
      "Nikola Tesla",
      "Edward Jenner",
      "Michael Faraday",
      "Douglas Engelbart"
    ],
    "optionsAr": [
      "نيكولا تيسلا",
      "يدوارد جيننير",
      "ميكهايل فاراداي",
      "دووجلاس ينجيلبارت"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0120"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical dynamo?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical dynamo؟",
    "options": [
      "Werner von Siemens",
      "John Bardeen, Walter Brattain and William Shockley",
      "Richard Trevithick",
      "Louis Braille"
    ],
    "optionsAr": [
      "ويرنير فون سييمينس",
      "جوهن بارديين, والتير براتتاين اند ويلليام سهوككليي",
      "ريكهارد تريفيتهيكك",
      "لوويس برايللي"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0121"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first modern periodic table arrangement?",
    "ar": "من يُنسب إليه عادةً ابتكار the first modern periodic table arrangement؟",
    "options": [
      "Alfred Nobel",
      "Martin Cooper",
      "Richard Trevithick",
      "Dmitri Mendeleev"
    ],
    "optionsAr": [
      "الفريد نوبيل",
      "مارتين كووبير",
      "ريكهارد تريفيتهيكك",
      "دميتري مينديلييف"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0122"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful human-powered flight across the English Channel?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful human-powered flight across the English Channel؟",
    "options": [
      "Louis Pasteur",
      "Daniel Gabriel Fahrenheit",
      "Nicolas-Joseph Cugnot",
      "Bryan Allen and Paul MacCready’s team"
    ],
    "optionsAr": [
      "لوويس باستيور",
      "دانييل جابرييل فاهرينهييت",
      "نيكولاس-جوسيبه كوجنوت",
      "بريان اللين اند باول ماككريادي’س تيام"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0123"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first computer mouse prototype?",
    "ar": "من يُنسب إليه عادةً ابتكار the first computer mouse prototype؟",
    "options": [
      "Douglas Engelbart",
      "Rudolf Diesel",
      "Richard Trevithick",
      "Alberto Santos-Dumont"
    ],
    "optionsAr": [
      "دووجلاس ينجيلبارت",
      "رودولف دييسيل",
      "ريكهارد تريفيتهيكك",
      "البيرتو سانتوس-دومونت"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0124"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first graphical computer mouse design?",
    "ar": "من يُنسب إليه عادةً ابتكار the first graphical computer mouse design؟",
    "options": [
      "Louis Daguerre",
      "Douglas Engelbart",
      "Christopher Latham Sholes",
      "Jonas Salk"
    ],
    "optionsAr": [
      "لوويس داجويرري",
      "دووجلاس ينجيلبارت",
      "كهريستوبهير لاتهام سهوليس",
      "جوناس سالك"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0125"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical integrated circuit?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical integrated circuit؟",
    "options": [
      "Martin Cooper",
      "Alessandro Volta",
      "Jack Kilby",
      "Ray Tomlinson"
    ],
    "optionsAr": [
      "مارتين كووبير",
      "اليسساندرو فولتا",
      "جاكك كيلبي",
      "راي توملينسون"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0126"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first planar integrated circuit?",
    "ar": "من يُنسب إليه عادةً ابتكار the first planar integrated circuit؟",
    "options": [
      "Ray Tomlinson",
      "Richard Trevithick",
      "Jonas Salk",
      "Robert Noyce"
    ],
    "optionsAr": [
      "راي توملينسون",
      "ريكهارد تريفيتهيكك",
      "جوناس سالك",
      "روبيرت نويكي"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0127"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first working mobile phone prototype?",
    "ar": "من يُنسب إليه عادةً ابتكار the first working mobile phone prototype؟",
    "options": [
      "Louis Braille",
      "Joseph Lister",
      "Martin Cooper",
      "Douglas Engelbart"
    ],
    "optionsAr": [
      "لوويس برايللي",
      "جوسيبه ليستير",
      "مارتين كووبير",
      "دووجلاس ينجيلبارت"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0128"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical lithium-ion battery?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical lithium-ion battery؟",
    "options": [
      "Rosalind Franklin",
      "James Chadwick",
      "John Goodenough, M. Stanley Whittingham and Akira Yoshino",
      "Ray Tomlinson"
    ],
    "optionsAr": [
      "روساليند فرانكلين",
      "جاميس كهادويكك",
      "جوهن جوودينووجه, م. ستانليي وهيتتينجهام اند اكيرا يوسهينو",
      "راي توملينسون"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0129"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first web browser and web server?",
    "ar": "من يُنسب إليه عادةً ابتكار the first web browser and web server؟",
    "options": [
      "Joseph Lister",
      "Tim Berners-Lee",
      "Ada Lovelace",
      "Louis Daguerre"
    ],
    "optionsAr": [
      "جوسيبه ليستير",
      "تيم بيرنيرس-ليي",
      "ادا لوفيلاكي",
      "لوويس داجويرري"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0130"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first email system on ARPANET?",
    "ar": "من يُنسب إليه عادةً ابتكار the first email system on ARPANET؟",
    "options": [
      "Joseph Murray",
      "Thomas Edison",
      "the Soviet space program",
      "Ray Tomlinson"
    ],
    "optionsAr": [
      "جوسيبه مورراي",
      "تهوماس يديسون",
      "تهي سوفييت سباكي بروجرام",
      "راي توملينسون"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0131"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful human insulin treatment?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful human insulin treatment؟",
    "options": [
      "J. J. Thomson",
      "Bryan Allen and Paul MacCready’s team",
      "Frederick Banting and Charles Best",
      "Louis Pasteur"
    ],
    "optionsAr": [
      "ج. ج. تهومسون",
      "بريان اللين اند باول ماككريادي’س تيام",
      "فريديريكك بانتينج اند كهارليس بيست",
      "لوويس باستيور"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0132"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the discovery of X-rays?",
    "ar": "من يُنسب إليه عادةً ابتكار the discovery of X-rays؟",
    "options": [
      "Norman Joseph Woodland and Bernard Silver",
      "Wilhelm Conrad Röntgen",
      "Alexander Graham Bell",
      "Alberto Santos-Dumont"
    ],
    "optionsAr": [
      "نورمان جوسيبه ووودلاند اند بيرنارد سيلفير",
      "ويلهيلم كونراد رöنتجين",
      "اليكساندير جراهام بيلل",
      "البيرتو سانتوس-دومونت"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0133"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the discovery of radioactivity?",
    "ar": "من يُنسب إليه عادةً ابتكار the discovery of radioactivity؟",
    "options": [
      "Werner von Siemens",
      "Alessandro Volta",
      "James Chadwick",
      "Henri Becquerel"
    ],
    "optionsAr": [
      "ويرنير فون سييمينس",
      "اليسساندرو فولتا",
      "جاميس كهادويكك",
      "هينري بيكقويريل"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0134"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the discovery of the electron?",
    "ar": "من يُنسب إليه عادةً ابتكار the discovery of the electron؟",
    "options": [
      "Werner von Siemens",
      "James Chadwick",
      "Louis Pasteur",
      "J. J. Thomson"
    ],
    "optionsAr": [
      "ويرنير فون سييمينس",
      "جاميس كهادويكك",
      "لوويس باستيور",
      "ج. ج. تهومسون"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0135"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the discovery of the neutron?",
    "ar": "من يُنسب إليه عادةً ابتكار the discovery of the neutron؟",
    "options": [
      "James Chadwick",
      "Bryan Allen and Paul MacCready’s team",
      "Elisha Otis",
      "Christiaan Barnard"
    ],
    "optionsAr": [
      "جاميس كهادويكك",
      "بريان اللين اند باول ماككريادي’س تيام",
      "يليسها وتيس",
      "كهريستياان بارنارد"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0136"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the discovery of the structure of DNA using X-ray diffraction evidence?",
    "ar": "من يُنسب إليه عادةً ابتكار the discovery of the structure of DNA using X-ray diffraction evidence؟",
    "options": [
      "Jack Kilby",
      "Jonas Salk",
      "John Logie Baird",
      "Rosalind Franklin"
    ],
    "optionsAr": [
      "جاكك كيلبي",
      "جوناس سالك",
      "جوهن لوجيي بايرد",
      "روساليند فرانكلين"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0137"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first widely used oral polio vaccine?",
    "ar": "من يُنسب إليه عادةً ابتكار the first widely used oral polio vaccine؟",
    "options": [
      "Nikola Tesla",
      "James Chadwick",
      "Albert Sabin",
      "Louis Pasteur"
    ],
    "optionsAr": [
      "نيكولا تيسلا",
      "جاميس كهادويكك",
      "البيرت سابين",
      "لوويس باستيور"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0138"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical photographic process?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical photographic process؟",
    "options": [
      "Nikola Tesla",
      "Rudolf Diesel",
      "Louis Pasteur",
      "Louis Daguerre"
    ],
    "optionsAr": [
      "نيكولا تيسلا",
      "رودولف دييسيل",
      "لوويس باستيور",
      "لوويس داجويرري"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0139"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful steam-powered automobile?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful steam-powered automobile؟",
    "options": [
      "Nicolas-Joseph Cugnot",
      "John Logie Baird",
      "Michael Faraday",
      "Norman Joseph Woodland and Bernard Silver"
    ],
    "optionsAr": [
      "نيكولاس-جوسيبه كوجنوت",
      "جوهن لوجيي بايرد",
      "ميكهايل فاراداي",
      "نورمان جوسيبه ووودلاند اند بيرنارد سيلفير"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0140"
  },
  {
    "category": "General Knowledge",
    "en": "In which year did the Berlin Wall fall?",
    "ar": "في أي عام سقط جدار برلين؟",
    "options": [
      "1979",
      "1989",
      "1991",
      "1985"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0141",
    "optionsAr": [
      "1979",
      "1989",
      "1991",
      "1985"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which ancient civilization developed cuneiform writing?",
    "ar": "أي حضارة قديمة طورت الكتابة المسمارية؟",
    "options": [
      "Romans",
      "Phoenicians",
      "Sumerians",
      "Minoans"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0142",
    "optionsAr": [
      "رومانس",
      "الفينيقيون",
      "السومريون",
      "مينوانس"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the SI unit of electrical resistance?",
    "ar": "ما وحدة قياس المقاومة الكهربائية في النظام الدولي؟",
    "options": [
      "Ohm",
      "Ampere",
      "Watt",
      "Volt"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0143",
    "optionsAr": [
      "أوم",
      "امبيري",
      "واتت",
      "فولت"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which strait separates Spain from Morocco?",
    "ar": "ما المضيق الذي يفصل إسبانيا عن المغرب؟",
    "options": [
      "Dardanelles",
      "Bosporus",
      "Strait of Gibraltar",
      "Bering Strait"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0144",
    "optionsAr": [
      "داردانيلليس",
      "بوسبوروس",
      "مضيق جبل طارق",
      "بيرينج سترايت"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the smallest bone in the human body?",
    "ar": "ما أصغر عظمة في جسم الإنسان؟",
    "options": [
      "Patella",
      "Stapes",
      "Ulna",
      "Femur"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0145",
    "optionsAr": [
      "باتيللا",
      "عظمة الركاب",
      "ولنا",
      "فيمور"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which treaty formally ended the state of war between Germany and the Allied Powers after World War I?",
    "ar": "ما المعاهدة التي أنهت رسمياً حالة الحرب بين ألمانيا والحلفاء بعد الحرب العالمية الأولى؟",
    "options": [
      "Treaty of Tordesillas",
      "Treaty of Utrecht",
      "Treaty of Versailles",
      "Treaty of Paris"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0146",
    "optionsAr": [
      "ترياتي وف تورديسيللاس",
      "ترياتي وف وتريكهت",
      "معاهدة فرساي",
      "ترياتي وف باريس"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which element has the chemical symbol W?",
    "ar": "ما العنصر الذي رمزه الكيميائي W؟",
    "options": [
      "Tin",
      "Titanium",
      "Tungsten",
      "Tantalum"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0147",
    "optionsAr": [
      "تين",
      "تيتانيوم",
      "تونجستين",
      "تانتالوم"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the deepest known ocean trench?",
    "ar": "ما أعمق خندق محيطي معروف؟",
    "options": [
      "Tonga Trench",
      "Puerto Rico Trench",
      "Mariana Trench",
      "Java Trench"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0148",
    "optionsAr": [
      "تونجا ترينكه",
      "بويرتو ريكو ترينكه",
      "خندق ماريانا",
      "جافا ترينكه"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which scientist formulated the three laws of motion?",
    "ar": "من العالم الذي صاغ قوانين الحركة الثلاثة؟",
    "options": [
      "Johannes Kepler",
      "Niels Bohr",
      "Isaac Newton",
      "Galileo Galilei"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0149",
    "optionsAr": [
      "جوهاننيس كيبلير",
      "نييلس بوهر",
      "إسحاق نيوتن",
      "جاليليو جاليليي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which country was formerly known as Abyssinia?",
    "ar": "ما الدولة التي كان يُطلق عليها سابقاً اسم الحبشة؟",
    "options": [
      "Somalia",
      "Eritrea",
      "Sudan",
      "Ethiopia"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0150",
    "optionsAr": [
      "سوماليا",
      "يريتريا",
      "سودان",
      "إثيوبيا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the capital of Bhutan?",
    "ar": "ما عاصمة بوتان؟",
    "options": [
      "Dhaka",
      "Thimphu",
      "Kathmandu",
      "Vientiane"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0151",
    "optionsAr": [
      "دكا",
      "تيمفو",
      "كاتهماندو",
      "فيينتيان"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which layer of Earth lies directly beneath the crust?",
    "ar": "ما الطبقة التي تقع مباشرة أسفل القشرة الأرضية؟",
    "options": [
      "Outer core",
      "Mantle",
      "Lithosphere",
      "Inner core"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0152",
    "optionsAr": [
      "ووتير كوري",
      "الوشاح",
      "ليتهوسبهيري",
      "يننير كوري"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which empire built the road network known as the Qhapaq Ñan?",
    "ar": "أي إمبراطورية بنت شبكة الطرق المعروفة باسم قَباك نيان؟",
    "options": [
      "Roman Empire",
      "Inca Empire",
      "Aztec Empire",
      "Maya civilization"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0153",
    "optionsAr": [
      "رومان يمبيري",
      "إمبراطورية الإنكا",
      "ازتيك يمبيري",
      "مايا كيفيليزاتيون"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the SI unit of luminous intensity?",
    "ar": "ما وحدة قياس شدة الإضاءة في النظام الدولي؟",
    "options": [
      "Lux",
      "Watt",
      "Lumen",
      "Candela"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0154",
    "optionsAr": [
      "لوكس",
      "واتت",
      "لومين",
      "كانديلا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which sea has no coastline and is defined by ocean currents?",
    "ar": "أي بحر لا تحده سواحل ويُحدد بتيارات المحيط؟",
    "options": [
      "Arabian Sea",
      "Baltic Sea",
      "Coral Sea",
      "Sargasso Sea"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0155",
    "optionsAr": [
      "ارابيان سيا",
      "بالتيك سيا",
      "كورال سيا",
      "سارجاسسو سيا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which 1648 settlement is associated with the end of the Thirty Years’ War?",
    "ar": "ما التسوية التي ارتبطت بنهاية حرب الثلاثين عاماً عام 1648؟",
    "options": [
      "Peace of Westphalia",
      "Congress of Vienna",
      "Treaty of Utrecht",
      "Peace of Augsburg"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0156",
    "optionsAr": [
      "صلح وستفاليا",
      "كونجريسس وف فييننا",
      "ترياتي وف وتريكهت",
      "بياكي وف اوجسبورج"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which gas makes up the largest percentage of Earth’s atmosphere?",
    "ar": "ما الغاز الذي يشكل النسبة الأكبر من الغلاف الجوي للأرض؟",
    "options": [
      "Nitrogen",
      "Argon",
      "Carbon dioxide",
      "Oxygen"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0157",
    "optionsAr": [
      "النيتروجين",
      "ارجون",
      "ثاني أكسيد الكربون",
      "الأكسجين"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the study of fungi called?",
    "ar": "ماذا يُسمى علم دراسة الفطريات؟",
    "options": [
      "Ecology",
      "Entomology",
      "Mycology",
      "Ornithology"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0158",
    "optionsAr": [
      "يكولوجي",
      "علم الحشرات",
      "علم الفطريات",
      "ورنيتهولوجي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which African lake is traditionally cited as a major source of the White Nile?",
    "ar": "أي بحيرة تُعد تقليدياً مصدراً رئيسياً للنيل الأبيض؟",
    "options": [
      "Lake Malawi",
      "Lake Chad",
      "Lake Tanganyika",
      "Lake Victoria"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0159",
    "optionsAr": [
      "لاكي مالاوي",
      "لاكي كهاد",
      "لاكي تانجانييكا",
      "بحيرة فيكتوريا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which mathematician is associated with the incompleteness theorems?",
    "ar": "أي عالم رياضيات ارتبطت باسمه مبرهنتا عدم الاكتمال؟",
    "options": [
      "Kurt Gödel",
      "Alan Turing",
      "Blaise Pascal",
      "Euclid"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0160",
    "optionsAr": [
      "كورت غودل",
      "الان تورينج",
      "بلايسي باسكال",
      "يوكليد"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the capital of Kazakhstan?",
    "ar": "ما عاصمة كازاخستان؟",
    "options": [
      "Tashkent",
      "Almaty",
      "Bishkek",
      "Astana"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0161",
    "optionsAr": [
      "طشقند",
      "ألماتي",
      "بيشكيك",
      "أستانا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which ancient city was buried by the eruption of Mount Vesuvius in AD 79?",
    "ar": "أي مدينة قديمة دُفنت بسبب ثوران بركان فيزوف عام 79 ميلادية؟",
    "options": [
      "Pompeii",
      "Sparta",
      "Ephesus",
      "Carthage"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0162",
    "optionsAr": [
      "بومبي",
      "سبارتا",
      "يبهيسوس",
      "كارتهاجي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which blood type is known as the universal red-cell donor?",
    "ar": "ما فصيلة الدم المعروفة بالمتبرع العام لخلايا الدم الحمراء؟",
    "options": [
      "O negative",
      "AB positive",
      "A negative",
      "B positive"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0163",
    "optionsAr": [
      "O سالب",
      "AB موجب",
      "A سالب",
      "B موجب"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the boundary around a black hole beyond which light cannot escape called?",
    "ar": "ماذا يُسمى الحد المحيط بالثقب الأسود الذي لا يستطيع الضوء الإفلات بعد تجاوزه؟",
    "options": [
      "Event horizon",
      "Accretion disk",
      "Singularity",
      "Photon sphere"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0164",
    "optionsAr": [
      "أفق الحدث",
      "اككريتيون ديسك",
      "سينجولاريتي",
      "بهوتون سبهيري"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which country contains the region of Transylvania?",
    "ar": "أي دولة تقع فيها منطقة ترانسلفانيا؟",
    "options": [
      "Serbia",
      "Bulgaria",
      "Hungary",
      "Romania"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0165",
    "optionsAr": [
      "سيربيا",
      "بولجاريا",
      "هونجاري",
      "رومانيا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which architect designed the Sagrada Família in Barcelona?",
    "ar": "من المهندس المعماري الذي صمم كنيسة ساغرادا فاميليا في برشلونة؟",
    "options": [
      "Santiago Calatrava",
      "Antoni Gaudí",
      "Frank Gehry",
      "Le Corbusier"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0166",
    "optionsAr": [
      "سانتياجو كالاترافا",
      "أنطوني غاودي",
      "فرانك جيهري",
      "لي كوربوسيير"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which scale is commonly used to measure mineral hardness?",
    "ar": "ما المقياس الشائع لقياس صلابة المعادن؟",
    "options": [
      "Beaufort scale",
      "Mohs scale",
      "Fujita scale",
      "Richter scale"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0167",
    "optionsAr": [
      "بياوفورت سكالي",
      "مقياس موس",
      "فوجيتا سكالي",
      "ريكهتير سكالي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which ocean current helps moderate the climate of western Europe?",
    "ar": "أي تيار محيطي يساعد على تلطيف مناخ غرب أوروبا؟",
    "options": [
      "Oyashio Current",
      "Gulf Stream",
      "Labrador Current",
      "California Current"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0168",
    "optionsAr": [
      "وياسهيو كوررينت",
      "تيار الخليج",
      "لابرادور كوررينت",
      "كاليفورنيا كوررينت"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the capital of Mongolia?",
    "ar": "ما عاصمة منغوليا؟",
    "options": [
      "Ulaanbaatar",
      "Astana",
      "Bishkek",
      "Dushanbe"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0169",
    "optionsAr": [
      "أولان باتور",
      "أستانا",
      "بيشكيك",
      "دوشنبه"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which branch of biology studies insects?",
    "ar": "أي فرع من علم الأحياء يدرس الحشرات؟",
    "options": [
      "Herpetology",
      "Ichthyology",
      "Entomology",
      "Mycology"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0170",
    "optionsAr": [
      "هيربيتولوجي",
      "يكهتهيولوجي",
      "علم الحشرات",
      "علم الفطريات"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which ancient wonder stood in the city of Alexandria?",
    "ar": "أي عجائب العالم القديم كان قائماً في مدينة الإسكندرية؟",
    "options": [
      "Colossus of Rhodes",
      "Lighthouse of Alexandria",
      "Temple of Artemis",
      "Hanging Gardens of Babylon"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0171",
    "optionsAr": [
      "كولوسسوس وف رهوديس",
      "ليجهتهووسي وف اليكساندريا",
      "تيمبلي وف ارتيميس",
      "هانجينج جاردينس وف بابيلون"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the SI unit of frequency?",
    "ar": "ما وحدة قياس التردد في النظام الدولي؟",
    "options": [
      "Pascal",
      "Newton",
      "Hertz",
      "Joule"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0172",
    "optionsAr": [
      "باسكال",
      "نيوتون",
      "هرتز",
      "جوولي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which country has the most time zones when overseas territories are included?",
    "ar": "أي دولة لديها أكبر عدد من المناطق الزمنية عند احتساب أقاليمها الخارجية؟",
    "options": [
      "Russia",
      "United States",
      "China",
      "France"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0173",
    "optionsAr": [
      "روسيا",
      "الولايات المتحدة",
      "الصين",
      "فرنسا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which philosopher wrote “The Republic”?",
    "ar": "من الفيلسوف الذي ألّف كتاب «الجمهورية»؟",
    "options": [
      "Plato",
      "Socrates",
      "Aristotle",
      "Epicurus"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0174",
    "optionsAr": [
      "أفلاطون",
      "سوكراتيس",
      "اريستوتلي",
      "يبيكوروس"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which mineral is the primary source of aluminium?",
    "ar": "ما المعدن الخام الأساسي لاستخراج الألومنيوم؟",
    "options": [
      "Cassiterite",
      "Hematite",
      "Galena",
      "Bauxite"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0175",
    "optionsAr": [
      "كاسسيتيريتي",
      "هيماتيتي",
      "جالينا",
      "باوكسيتي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the name of the process by which a solid changes directly into a gas?",
    "ar": "ما اسم العملية التي تتحول فيها المادة من الحالة الصلبة إلى الغازية مباشرة؟",
    "options": [
      "Deposition",
      "Condensation",
      "Evaporation",
      "Sublimation"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0176",
    "optionsAr": [
      "ديبوسيتيون",
      "كوندينساتيون",
      "يفابوراتيون",
      "التسامي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which country is home to the ancient city of Petra?",
    "ar": "في أي دولة تقع مدينة البتراء الأثرية؟",
    "options": [
      "Iraq",
      "Lebanon",
      "Jordan",
      "Syria"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0177",
    "optionsAr": [
      "العراق",
      "لبنان",
      "الأردن",
      "سوريا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which treaty established the European Economic Community in 1957?",
    "ar": "أي معاهدة أسست المجموعة الاقتصادية الأوروبية عام 1957؟",
    "options": [
      "Treaty of Paris",
      "Lisbon Treaty",
      "Treaty of Rome",
      "Maastricht Treaty"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0178",
    "optionsAr": [
      "ترياتي وف باريس",
      "ليسبون ترياتي",
      "معاهدة روما",
      "مااستريكهت ترياتي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which part of the cell contains most of its genetic material?",
    "ar": "أي جزء من الخلية يحتوي على معظم مادتها الوراثية؟",
    "options": [
      "Golgi apparatus",
      "Ribosome",
      "Nucleus",
      "Cell membrane"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0179",
    "optionsAr": [
      "جولجي ابباراتوس",
      "ريبوسومي",
      "النواة",
      "كيلل ميمبراني"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the capital of Madagascar?",
    "ar": "ما عاصمة مدغشقر؟",
    "options": [
      "Lilongwe",
      "Maputo",
      "Antananarivo",
      "Moroni"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0180",
    "optionsAr": [
      "ليلونجوي",
      "مابوتو",
      "أنتاناناريفو",
      "موروني"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which desert is the largest hot desert in the world?",
    "ar": "ما أكبر صحراء حارة في العالم؟",
    "options": [
      "Gobi Desert",
      "Sahara",
      "Kalahari",
      "Arabian Desert"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0181",
    "optionsAr": [
      "جوبي ديسيرت",
      "الصحراء الكبرى",
      "كالاهاري",
      "ارابيان ديسيرت"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which scientist discovered penicillin?",
    "ar": "من العالم الذي اكتشف البنسلين؟",
    "options": [
      "Louis Pasteur",
      "Edward Jenner",
      "Alexander Fleming",
      "Robert Koch"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0182",
    "optionsAr": [
      "لوويس باستيور",
      "يدوارد جيننير",
      "ألكسندر فليمنغ",
      "روبيرت كوكه"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the term for animals that are most active at dawn and dusk?",
    "ar": "ما المصطلح الذي يطلق على الحيوانات الأكثر نشاطاً عند الفجر والغسق؟",
    "options": [
      "Crepuscular",
      "Diurnal",
      "Nocturnal",
      "Aquatic"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0183",
    "optionsAr": [
      "كريبوسكولار",
      "ديورنال",
      "نوكتورنال",
      "اقواتيك"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which river flows through Baghdad?",
    "ar": "ما النهر الذي يمر بمدينة بغداد؟",
    "options": [
      "Jordan",
      "Euphrates",
      "Orontes",
      "Tigris"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0184",
    "optionsAr": [
      "الأردن",
      "نهر الفرات",
      "ورونتيس",
      "نهر دجلة"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which ancient civilization used quipu for record keeping?",
    "ar": "أي حضارة قديمة استخدمت الكيبو لتسجيل المعلومات؟",
    "options": [
      "Inca",
      "Egyptian",
      "Maya",
      "Greek"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0185",
    "optionsAr": [
      "الإنكا",
      "يجيبتيان",
      "مايا",
      "جرييك"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the capital of Slovenia?",
    "ar": "ما عاصمة سلوفينيا؟",
    "options": [
      "Ljubljana",
      "Sarajevo",
      "Bratislava",
      "Zagreb"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0186",
    "optionsAr": [
      "ليوبليانا",
      "سراييفو",
      "براتيسلافا",
      "زاجريب"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which law states that pressure and volume are inversely proportional at constant temperature?",
    "ar": "أي قانون ينص على أن الضغط والحجم يتناسبان عكسياً عند ثبات درجة الحرارة؟",
    "options": [
      "Avogadro’s law",
      "Charles’s law",
      "Boyle’s law",
      "Ohm’s law"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0187",
    "optionsAr": [
      "افوجادرو’س لاو",
      "كهارليس’س لاو",
      "بويلي’س لاو",
      "وهم’س لاو"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which mountain range separates Europe from Asia in the conventional boundary?",
    "ar": "ما السلسلة الجبلية التي تفصل أوروبا عن آسيا وفق الحدود الجغرافية التقليدية؟",
    "options": [
      "Carpathians",
      "Pyrenees",
      "Alps",
      "Ural Mountains"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0188",
    "optionsAr": [
      "كارباتهيانس",
      "جبال البرانس",
      "جبال الألب",
      "جبال الأورال"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the capital of Laos?",
    "ar": "ما عاصمة لاوس؟",
    "options": [
      "Phnom Penh",
      "Yangon",
      "Hanoi",
      "Vientiane"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0189",
    "optionsAr": [
      "بهنوم بينه",
      "يانجون",
      "هانوي",
      "فيينتيان"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which organelle is known as the powerhouse of the cell?",
    "ar": "أي عضيّة تُعرف بأنها محطة الطاقة في الخلية؟",
    "options": [
      "Mitochondrion",
      "Chloroplast",
      "Lysosome",
      "Nucleus"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0190",
    "optionsAr": [
      "الميتوكوندريا",
      "البلاستيدة الخضراء",
      "ليسوسومي",
      "النواة"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which civilization developed the first known alphabetic writing system?",
    "ar": "أي حضارة طورت أحد أقدم أنظمة الكتابة الأبجدية المعروفة؟",
    "options": [
      "Sumerians",
      "Phoenicians",
      "Persians",
      "Romans"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0191",
    "optionsAr": [
      "السومريون",
      "الفينيقيون",
      "بيرسيانس",
      "رومانس"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the name of the boundary between the Earth’s troposphere and stratosphere?",
    "ar": "ما اسم الحد الفاصل بين طبقة التروبوسفير والستراتوسفير؟",
    "options": [
      "Mesopause",
      "Thermopause",
      "Tropopause",
      "Stratopause"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0192",
    "optionsAr": [
      "ميسوباوسي",
      "تهيرموباوسي",
      "تروبوباوسي",
      "ستراتوباوسي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which country’s parliament is called the Knesset?",
    "ar": "ما الدولة التي يُسمى برلمانها الكنيست؟",
    "options": [
      "Greece",
      "Israel",
      "Turkey",
      "Cyprus"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0193",
    "optionsAr": [
      "اليونان",
      "إسرائيل",
      "تركيا",
      "كيبروس"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which element is the most abundant in the universe?",
    "ar": "ما العنصر الأكثر وفرة في الكون؟",
    "options": [
      "Helium",
      "Hydrogen",
      "Carbon",
      "Oxygen"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0194",
    "optionsAr": [
      "الهيليوم",
      "الهيدروجين",
      "كاربون",
      "الأكسجين"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which city hosted the first modern Olympic Games in 1896?",
    "ar": "أي مدينة استضافت أول دورة ألعاب أولمبية حديثة عام 1896؟",
    "options": [
      "Athens",
      "Paris",
      "London",
      "Rome"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0195",
    "optionsAr": [
      "أثينا",
      "باريس",
      "لوندون",
      "روما"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the capital of Suriname?",
    "ar": "ما عاصمة سورينام؟",
    "options": [
      "Cayenne",
      "Paramaribo",
      "Belmopan",
      "Georgetown"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0196",
    "optionsAr": [
      "كايينني",
      "باراماريبو",
      "بيلموبان",
      "جيورجيتوون"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which instrument measures atmospheric pressure?",
    "ar": "ما الأداة التي تقيس الضغط الجوي؟",
    "options": [
      "Anemometer",
      "Barometer",
      "Altimeter",
      "Hygrometer"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0197",
    "optionsAr": [
      "انيموميتير",
      "البارومتر",
      "التيميتير",
      "هيجروميتير"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which sea separates the Arabian Peninsula from northeastern Africa?",
    "ar": "ما البحر الذي يفصل شبه الجزيرة العربية عن شمال شرق أفريقيا؟",
    "options": [
      "Black Sea",
      "Mediterranean Sea",
      "Red Sea",
      "Caspian Sea"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0198",
    "optionsAr": [
      "بلاكك سيا",
      "ميديتيررانيان سيا",
      "البحر الأحمر",
      "كاسبيان سيا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which mathematician introduced the symbol commonly used for infinity?",
    "ar": "من عالم الرياضيات الذي قدم الرمز الشائع للانهاية؟",
    "options": [
      "Carl Gauss",
      "Leonhard Euler",
      "René Descartes",
      "John Wallis"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0199",
    "optionsAr": [
      "كارل جاوسس",
      "ليونهارد يولير",
      "رينé ديسكارتيس",
      "جون واليس"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the capital of Moldova?",
    "ar": "ما عاصمة مولدوفا؟",
    "options": [
      "Podgorica",
      "Tirana",
      "Chișinău",
      "Skopje"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0200",
    "optionsAr": [
      "بودغوريتسا",
      "تيرانا",
      "كيشيناو",
      "سكوبيه"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which layer of the atmosphere contains most of the ozone layer?",
    "ar": "في أي طبقة من الغلاف الجوي توجد معظم طبقة الأوزون؟",
    "options": [
      "Stratosphere",
      "Mesosphere",
      "Troposphere",
      "Thermosphere"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0201",
    "optionsAr": [
      "الستراتوسفير",
      "ميسوسبهيري",
      "تروبوسبهيري",
      "تهيرموسبهيري"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which ancient Greek historian is often called the “Father of History”?",
    "ar": "أي مؤرخ يوناني قديم يُلقب غالباً بأبي التاريخ؟",
    "options": [
      "Herodotus",
      "Homer",
      "Thucydides",
      "Xenophon"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0202",
    "optionsAr": [
      "هيرودوت",
      "هومير",
      "تهوكيديديس",
      "كسينوبهون"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the capital of Kyrgyzstan?",
    "ar": "ما عاصمة قيرغيزستان؟",
    "options": [
      "Tashkent",
      "Bishkek",
      "Ashgabat",
      "Dushanbe"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0203",
    "optionsAr": [
      "طشقند",
      "بيشكيك",
      "اسهجابات",
      "دوشنبه"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which scientist proposed the uncertainty principle?",
    "ar": "من العالم الذي طرح مبدأ عدم اليقين؟",
    "options": [
      "Ernest Rutherford",
      "Max Planck",
      "Erwin Schrödinger",
      "Werner Heisenberg"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0204",
    "optionsAr": [
      "يرنيست روتهيرفورد",
      "ماكس بلانكك",
      "يروين سكهرöدينجير",
      "فيرنر هايزنبرغ"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which canal connects the Mediterranean Sea to the Red Sea?",
    "ar": "ما القناة التي تربط البحر المتوسط بالبحر الأحمر؟",
    "options": [
      "Suez Canal",
      "Panama Canal",
      "Kiel Canal",
      "Corinth Canal"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0205",
    "optionsAr": [
      "قناة السويس",
      "باناما كانال",
      "كييل كانال",
      "كورينته كانال"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "What is the study of earthquakes called?",
    "ar": "ماذا يُسمى علم دراسة الزلازل؟",
    "options": [
      "Seismology",
      "Oceanography",
      "Volcanology",
      "Meteorology"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0206",
    "optionsAr": [
      "علم الزلازل",
      "وكيانوجرابهي",
      "فولكانولوجي",
      "ميتيورولوجي"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which country’s traditional writing system includes Hangul?",
    "ar": "أي دولة يرتبط بها نظام الكتابة المعروف باسم الهانغول؟",
    "options": [
      "South Korea",
      "Japan",
      "China",
      "Thailand"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0207",
    "optionsAr": [
      "كوريا الجنوبية",
      "اليابان",
      "الصين",
      "تايلاند"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which city is the seat of the International Court of Justice?",
    "ar": "في أي مدينة يقع مقر محكمة العدل الدولية؟",
    "options": [
      "Brussels",
      "Geneva",
      "The Hague",
      "Vienna"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0208",
    "optionsAr": [
      "بروسسيلس",
      "جينيفا",
      "لاهاي",
      "فيينا"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which element has the atomic number 79?",
    "ar": "ما العنصر الذي عدده الذري 79؟",
    "options": [
      "Copper",
      "Platinum",
      "Silver",
      "Gold"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0209",
    "optionsAr": [
      "النحاس",
      "بلاتينوم",
      "الفضة",
      "الذهب"
    ]
  },
  {
    "category": "General Knowledge",
    "en": "Which European river passes through four capital cities?",
    "ar": "أي نهر أوروبي يمر عبر أربع عواصم؟",
    "options": [
      "Thames",
      "Rhine",
      "Danube",
      "Seine"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0210",
    "optionsAr": [
      "تهاميس",
      "رهيني",
      "دانوبي",
      "سييني"
    ]
  },
  {
    "category": "Sports",
    "en": "Which sport uses a shuttlecock?",
    "ar": "أي رياضة تستخدم الريشة؟",
    "options": [
      "Swimming",
      "Badminton",
      "Kitesurfing",
      "Billiards"
    ],
    "optionsAr": [
      "السباحة",
      "تنس الريشة",
      "كيتيسورفينج",
      "بيللياردس"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0211"
  },
  {
    "category": "Sports",
    "en": "Which sport is played with a puck on ice?",
    "ar": "أي رياضة تُلعب بقرص فوق الجليد؟",
    "options": [
      "Snowboarding",
      "Ice hockey",
      "Volleyball",
      "Boxing"
    ],
    "optionsAr": [
      "سنووبواردينج",
      "يكي هوككيي",
      "الكرة الطائرة",
      "بوكسينج"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0212"
  },
  {
    "category": "Sports",
    "en": "Which sport features a pommel horse?",
    "ar": "أي رياضة تتضمن حصان الحلق؟",
    "options": [
      "Bobsleigh",
      "Shot put",
      "Artistic gymnastics",
      "Rowing"
    ],
    "optionsAr": [
      "بوبسلييجه",
      "سهوت بوت",
      "ارتيستيك جيمناستيكس",
      "رووينج"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0213"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a foil, épée or sabre?",
    "ar": "أي رياضة تستخدم سلاح الفلوريه أو الإيبيه أو السابر؟",
    "options": [
      "Canoeing",
      "Javelin throw",
      "Fencing",
      "Luge"
    ],
    "optionsAr": [
      "كانويينج",
      "جافيلين تهروو",
      "فينكينج",
      "لوجي"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0214"
  },
  {
    "category": "Sports",
    "en": "Which sport uses wickets and a bat?",
    "ar": "أي رياضة تستخدم الويكيت والمضرب؟",
    "options": [
      "Pole vault",
      "Cricket",
      "Surfing",
      "Table tennis"
    ],
    "optionsAr": [
      "بولي فاولت",
      "كريككيت",
      "سورفينج",
      "تابلي تيننيس"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0215"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a mallet while players ride horses?",
    "ar": "أي رياضة تستخدم مطرقة صغيرة أثناء ركوب الخيل؟",
    "options": [
      "Fencing",
      "Basketball",
      "Badminton",
      "Polo"
    ],
    "optionsAr": [
      "فينكينج",
      "كرة السلة",
      "تنس الريشة",
      "بولو"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0216"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a cue to strike balls on a table?",
    "ar": "أي رياضة تستخدم عصا لضرب الكرات على طاولة؟",
    "options": [
      "Snooker",
      "Table tennis",
      "Snowboarding",
      "Sport climbing"
    ],
    "optionsAr": [
      "سنووكير",
      "تابلي تيننيس",
      "سنووبواردينج",
      "سبورت كليمبينج"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0217"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a bow and arrows?",
    "ar": "أي رياضة تستخدم القوس والسهام؟",
    "options": [
      "Association football",
      "Relay racing",
      "Golf",
      "Archery"
    ],
    "optionsAr": [
      "اسسوكياتيون فووتبالل",
      "ريلاي راكينج",
      "جولف",
      "اركهيري"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0218"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a sail to harness the wind?",
    "ar": "أي رياضة تستخدم الشراع للاستفادة من الرياح؟",
    "options": [
      "Team handball",
      "Sailing",
      "Basketball",
      "Kayaking"
    ],
    "optionsAr": [
      "تيام هاندبالل",
      "سايلينج",
      "كرة السلة",
      "كاياكينج"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0219"
  },
  {
    "category": "Sports",
    "en": "Which sport uses oars to move a racing shell?",
    "ar": "أي رياضة تستخدم المجاديف لتحريك قارب السباق؟",
    "options": [
      "Badminton",
      "Sport shooting",
      "Rowing",
      "Athletics relay"
    ],
    "optionsAr": [
      "تنس الريشة",
      "سبورت سهووتينج",
      "رووينج",
      "اتهليتيكس ريلاي"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0220"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a balance beam?",
    "ar": "أي رياضة تستخدم عارضة التوازن؟",
    "options": [
      "Cross-country skiing",
      "Biathlon",
      "Artistic gymnastics",
      "Kitesurfing"
    ],
    "optionsAr": [
      "كروسس-كوونتري سكيينج",
      "بياتهلون",
      "ارتيستيك جيمناستيكس",
      "كيتيسورفينج"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0221"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a vaulting table?",
    "ar": "أي رياضة تستخدم طاولة القفز؟",
    "options": [
      "Track cycling",
      "Relay racing",
      "Artistic gymnastics",
      "Volleyball"
    ],
    "optionsAr": [
      "تراكك كيكلينج",
      "ريلاي راكينج",
      "ارتيستيك جيمناستيكس",
      "الكرة الطائرة"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0222"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a scrum?",
    "ar": "أي رياضة تتضمن تجمعًا يُسمى Scrum؟",
    "options": [
      "Archery",
      "Rowing",
      "Golf",
      "Rugby union"
    ],
    "optionsAr": [
      "اركهيري",
      "رووينج",
      "جولف",
      "روجبي ونيون"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0223"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a net and a spike attack?",
    "ar": "أي رياضة تتضمن شبكة وضربة ساحقة؟",
    "options": [
      "Swimming",
      "Volleyball",
      "Polo",
      "Wrestling"
    ],
    "optionsAr": [
      "السباحة",
      "الكرة الطائرة",
      "بولو",
      "وريستلينج"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0224"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a diamond-shaped field?",
    "ar": "أي رياضة تُلعب في ملعب على شكل ماسة؟",
    "options": [
      "Baseball",
      "Road cycling",
      "Pole vault",
      "Rugby union"
    ],
    "optionsAr": [
      "باسيبالل",
      "رواد كيكلينج",
      "بولي فاولت",
      "روجبي ونيون"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0225"
  },
  {
    "category": "Sports",
    "en": "Which sport features a parallel-bar routine?",
    "ar": "أي رياضة تتضمن أداءً على المتوازي؟",
    "options": [
      "Kitesurfing",
      "Artistic gymnastics",
      "Snooker",
      "Bobsleigh"
    ],
    "optionsAr": [
      "كيتيسورفينج",
      "ارتيستيك جيمناستيكس",
      "سنووكير",
      "بوبسلييجه"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0226"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a protective mask and a foil?",
    "ar": "أي رياضة تستخدم قناعًا واقيًا وسلاح الفلوريه؟",
    "options": [
      "Fencing",
      "Cricket",
      "Shot put",
      "Cross-country skiing"
    ],
    "optionsAr": [
      "فينكينج",
      "كريككيت",
      "سهوت بوت",
      "كروسس-كوونتري سكيينج"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0227"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a tee to start a hole?",
    "ar": "أي رياضة تستخدم حامل الكرة لبدء الحفرة؟",
    "options": [
      "American football",
      "Luge",
      "Golf",
      "Sport climbing"
    ],
    "optionsAr": [
      "اميريكان فووتبالل",
      "لوجي",
      "جولف",
      "سبورت كليمبينج"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0228"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a pitchfork-shaped tool called a divot tool?",
    "ar": "في أي رياضة تُستخدم أداة إصلاح أثر الكرة على العشب؟",
    "options": [
      "Sailing",
      "Golf",
      "Athletics relay",
      "Cross-country skiing"
    ],
    "optionsAr": [
      "سايلينج",
      "جولف",
      "اتهليتيكس ريلاي",
      "كروسس-كوونتري سكيينج"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0229"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a vaulting pole?",
    "ar": "أي رياضة تستخدم عصا طويلة للقفز؟",
    "options": [
      "Discus throw",
      "Golf",
      "Billiards",
      "Pole vault"
    ],
    "optionsAr": [
      "ديسكوس تهروو",
      "جولف",
      "بيللياردس",
      "بولي فاولت"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0230"
  },
  {
    "category": "Sports",
    "en": "Which sport uses starting blocks on a track?",
    "ar": "أي رياضة تستخدم مكعبات الانطلاق على المضمار؟",
    "options": [
      "Formula One",
      "Fencing",
      "Track sprinting",
      "Sport shooting"
    ],
    "optionsAr": [
      "فورمولا وني",
      "فينكينج",
      "تراكك سبرينتينج",
      "سبورت سهووتينج"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0231"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a shot put?",
    "ar": "أي رياضة تتضمن دفع كرة معدنية ثقيلة؟",
    "options": [
      "Archery",
      "Shot put",
      "Track sprinting",
      "Golf"
    ],
    "optionsAr": [
      "اركهيري",
      "سهوت بوت",
      "تراكك سبرينتينج",
      "جولف"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0232"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a discus?",
    "ar": "أي رياضة تتضمن رمي القرص؟",
    "options": [
      "Team handball",
      "Baseball",
      "Discus throw",
      "Golf"
    ],
    "optionsAr": [
      "تيام هاندبالل",
      "باسيبالل",
      "ديسكوس تهروو",
      "جولف"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0233"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a javelin?",
    "ar": "أي رياضة تتضمن رمي الرمح؟",
    "options": [
      "Luge",
      "Javelin throw",
      "Artistic gymnastics",
      "Kayaking"
    ],
    "optionsAr": [
      "لوجي",
      "جافيلين تهروو",
      "ارتيستيك جيمناستيكس",
      "كاياكينج"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0234"
  },
  {
    "category": "Sports",
    "en": "Which sport uses hurdles on a track?",
    "ar": "أي رياضة تتضمن حواجز على المضمار؟",
    "options": [
      "Discus throw",
      "Basketball",
      "Cross-country skiing",
      "Hurdling"
    ],
    "optionsAr": [
      "ديسكوس تهروو",
      "كرة السلة",
      "كروسس-كوونتري سكيينج",
      "هوردلينج"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0235"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a relay baton?",
    "ar": "أي رياضة تستخدم عصا التتابع؟",
    "options": [
      "Wakeboarding",
      "Kayaking",
      "Relay racing",
      "Taekwondo"
    ],
    "optionsAr": [
      "واكيبواردينج",
      "كاياكينج",
      "ريلاي راكينج",
      "تايكووندو"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0236"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a climbing wall and carabiners?",
    "ar": "أي رياضة تستخدم جدار تسلق وموصلات معدنية؟",
    "options": [
      "Bobsleigh",
      "Taekwondo",
      "Skeleton",
      "Sport climbing"
    ],
    "optionsAr": [
      "بوبسلييجه",
      "تايكووندو",
      "سكيليتون",
      "سبورت كليمبينج"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0237"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a snowboard?",
    "ar": "أي رياضة تستخدم لوح التزلج على الثلج؟",
    "options": [
      "Canoeing",
      "Snowboarding",
      "Rowing",
      "Formula One"
    ],
    "optionsAr": [
      "كانويينج",
      "سنووبواردينج",
      "رووينج",
      "فورمولا وني"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0238"
  },
  {
    "category": "Sports",
    "en": "Which sport uses skis and poles on snow?",
    "ar": "أي رياضة تستخدم الزلاجات والعصي على الثلج؟",
    "options": [
      "Archery",
      "Cross-country skiing",
      "Biathlon",
      "Bobsleigh"
    ],
    "optionsAr": [
      "اركهيري",
      "كروسس-كوونتري سكيينج",
      "بياتهلون",
      "بوبسلييجه"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0239"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a bobsleigh?",
    "ar": "أي رياضة تستخدم مزلجة جماعية مغلقة؟",
    "options": [
      "Snowboarding",
      "Judo",
      "Bobsleigh",
      "Rugby union"
    ],
    "optionsAr": [
      "سنووبواردينج",
      "جودو",
      "بوبسلييجه",
      "روجبي ونيون"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0240"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a luge sled?",
    "ar": "أي رياضة تستخدم زلاجة صغيرة يستلقي عليها اللاعب؟",
    "options": [
      "Luge",
      "Bobsleigh",
      "Polo",
      "Table tennis"
    ],
    "optionsAr": [
      "لوجي",
      "بوبسلييجه",
      "بولو",
      "تابلي تيننيس"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0241"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a skeleton sled?",
    "ar": "أي رياضة تستخدم زلاجة ينطلق عليها اللاعب ووجهه للأمام؟",
    "options": [
      "Sport climbing",
      "Basketball",
      "Skeleton",
      "Luge"
    ],
    "optionsAr": [
      "سبورت كليمبينج",
      "كرة السلة",
      "سكيليتون",
      "لوجي"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0242"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a surfboard on ocean waves?",
    "ar": "أي رياضة تستخدم لوحًا لركوب أمواج البحر؟",
    "options": [
      "Rhythmic gymnastics",
      "Team handball",
      "Surfing",
      "Discus throw"
    ],
    "optionsAr": [
      "رهيتهميك جيمناستيكس",
      "تيام هاندبالل",
      "سورفينج",
      "ديسكوس تهروو"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0243"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a wakeboard behind a boat?",
    "ar": "أي رياضة تستخدم لوحًا خلف قارب؟",
    "options": [
      "Track cycling",
      "Wakeboarding",
      "Rowing",
      "American football"
    ],
    "optionsAr": [
      "تراكك كيكلينج",
      "واكيبواردينج",
      "رووينج",
      "اميريكان فووتبالل"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0244"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a kayak paddle with a double blade?",
    "ar": "أي رياضة تستخدم مجداف كاياك ذا شفرتين؟",
    "options": [
      "Track cycling",
      "Kayaking",
      "Kitesurfing",
      "American football"
    ],
    "optionsAr": [
      "تراكك كيكلينج",
      "كاياكينج",
      "كيتيسورفينج",
      "اميريكان فووتبالل"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0245"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a canoe paddle with a single blade?",
    "ar": "أي رياضة تستخدم مجداف كانو بشفرة واحدة؟",
    "options": [
      "Canoeing",
      "Billiards",
      "Table tennis",
      "Field hockey"
    ],
    "optionsAr": [
      "كانويينج",
      "بيللياردس",
      "تابلي تيننيس",
      "فييلد هوككيي"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0246"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a foil kite and a board on water?",
    "ar": "أي رياضة تستخدم طائرة ورقية ولوحًا فوق الماء؟",
    "options": [
      "Baseball",
      "Artistic gymnastics",
      "Rhythmic gymnastics",
      "Kitesurfing"
    ],
    "optionsAr": [
      "باسيبالل",
      "ارتيستيك جيمناستيكس",
      "رهيتهميك جيمناستيكس",
      "كيتيسورفينج"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0247"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a glove and a punching bag?",
    "ar": "أي رياضة تستخدم قفازات وكيس ملاكمة؟",
    "options": [
      "Boxing",
      "Team handball",
      "Skeleton",
      "Kitesurfing"
    ],
    "optionsAr": [
      "بوكسينج",
      "تيام هاندبالل",
      "سكيليتون",
      "كيتيسورفينج"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0248"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a tatami mat and judogi?",
    "ar": "أي رياضة تستخدم بساط التاتامي وبدلة الجودو؟",
    "options": [
      "Formula One",
      "Judo",
      "Kitesurfing",
      "Sport shooting"
    ],
    "optionsAr": [
      "فورمولا وني",
      "جودو",
      "كيتيسورفينج",
      "سبورت سهووتينج"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0249"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a dobok and protective chest gear?",
    "ar": "أي رياضة تستخدم بدلة دوبوك وواقي صدر؟",
    "options": [
      "American football",
      "Motor racing",
      "Rowing",
      "Taekwondo"
    ],
    "optionsAr": [
      "اميريكان فووتبالل",
      "موتور راكينج",
      "رووينج",
      "تايكووندو"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0250"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a wrestling singlet?",
    "ar": "أي رياضة تستخدم لباس المصارعة الموحّد؟",
    "options": [
      "Billiards",
      "Biathlon",
      "Wrestling",
      "Athletics relay"
    ],
    "optionsAr": [
      "بيللياردس",
      "بياتهلون",
      "وريستلينج",
      "اتهليتيكس ريلاي"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0251"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a fencing piste?",
    "ar": "أي رياضة تُقام على ممر يُسمى Piste؟",
    "options": [
      "Billiards",
      "Sport climbing",
      "Bobsleigh",
      "Fencing"
    ],
    "optionsAr": [
      "بيللياردس",
      "سبورت كليمبينج",
      "بوبسلييجه",
      "فينكينج"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0252"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a clay target launched into the air?",
    "ar": "أي رياضة تتطلب إصابة أهداف طينية طائرة؟",
    "options": [
      "Athletics relay",
      "Sport shooting",
      "Track cycling",
      "Snooker"
    ],
    "optionsAr": [
      "اتهليتيكس ريلاي",
      "سبورت سهووتينج",
      "تراكك كيكلينج",
      "سنووكير"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0253"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a biathlon rifle?",
    "ar": "أي رياضة تجمع التزلج الريفي والرماية بالبندقية؟",
    "options": [
      "Taekwondo",
      "Hurdling",
      "Volleyball",
      "Biathlon"
    ],
    "optionsAr": [
      "تايكووندو",
      "هوردلينج",
      "الكرة الطائرة",
      "بياتهلون"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0254"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a velodrome?",
    "ar": "أي رياضة تُقام في مضمار دائري مائل يُسمى فيلودروم؟",
    "options": [
      "Polo",
      "Bobsleigh",
      "Rhythmic gymnastics",
      "Track cycling"
    ],
    "optionsAr": [
      "بولو",
      "بوبسلييجه",
      "رهيتهميك جيمناستيكس",
      "تراكك كيكلينج"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0255"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a peloton?",
    "ar": "أي رياضة يُطلق فيها اسم Peloton على مجموعة المتسابقين؟",
    "options": [
      "Skeleton",
      "Track cycling",
      "Wakeboarding",
      "Road cycling"
    ],
    "optionsAr": [
      "سكيليتون",
      "تراكك كيكلينج",
      "واكيبواردينج",
      "رواد كيكلينج"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0256"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a yellow jersey for the overall leader in a famous stage race?",
    "ar": "أي رياضة يرتدي فيها متصدر سباق طواف فرنسا القميص الأصفر؟",
    "options": [
      "Road cycling",
      "Badminton",
      "Rugby union",
      "Golf"
    ],
    "optionsAr": [
      "رواد كيكلينج",
      "تنس الريشة",
      "روجبي ونيون",
      "جولف"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0257"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a scrum cap?",
    "ar": "أي رياضة قد يستخدم لاعبوها قبعة واقية للرأس تُسمى Scrum cap؟",
    "options": [
      "Rugby union",
      "Sailing",
      "Relay racing",
      "Track sprinting"
    ],
    "optionsAr": [
      "روجبي ونيون",
      "سايلينج",
      "ريلاي راكينج",
      "تراكك سبرينتينج"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0258"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a touchdown?",
    "ar": "أي رياضة تسجل فيها الفرق Touchdown؟",
    "options": [
      "Javelin throw",
      "Discus throw",
      "Swimming",
      "American football"
    ],
    "optionsAr": [
      "جافيلين تهروو",
      "ديسكوس تهروو",
      "السباحة",
      "اميريكان فووتبالل"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0259"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a home run?",
    "ar": "أي رياضة تتضمن تسجيل Home run؟",
    "options": [
      "Baseball",
      "Canoeing",
      "Polo",
      "Billiards"
    ],
    "optionsAr": [
      "باسيبالل",
      "كانويينج",
      "بولو",
      "بيللياردس"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0260"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a free throw?",
    "ar": "أي رياضة تتضمن رمية حرة؟",
    "options": [
      "Basketball",
      "Baseball",
      "Shot put",
      "American football"
    ],
    "optionsAr": [
      "كرة السلة",
      "باسيبالل",
      "سهوت بوت",
      "اميريكان فووتبالل"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0261"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a penalty corner?",
    "ar": "أي رياضة تتضمن ركنية جزائية؟",
    "options": [
      "Artistic gymnastics",
      "Field hockey",
      "Snooker",
      "American football"
    ],
    "optionsAr": [
      "ارتيستيك جيمناستيكس",
      "فييلد هوككيي",
      "سنووكير",
      "اميريكان فووتبالل"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0262"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a penalty shootout after some tied matches?",
    "ar": "أي رياضة قد تحسم التعادل فيها بركلات ترجيح؟",
    "options": [
      "Kayaking",
      "Cricket",
      "Volleyball",
      "Association football"
    ],
    "optionsAr": [
      "كاياكينج",
      "كريككيت",
      "الكرة الطائرة",
      "اسسوكياتيون فووتبالل"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0263"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a libero position?",
    "ar": "أي رياضة تتضمن مركز الليبرو؟",
    "options": [
      "Volleyball",
      "Snowboarding",
      "Javelin throw",
      "Wakeboarding"
    ],
    "optionsAr": [
      "الكرة الطائرة",
      "سنووبواردينج",
      "جافيلين تهروو",
      "واكيبواردينج"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0264"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a scrum-half position?",
    "ar": "أي رياضة تتضمن مركز Scrum-half؟",
    "options": [
      "Badminton",
      "Baseball",
      "Rugby union",
      "Wakeboarding"
    ],
    "optionsAr": [
      "تنس الريشة",
      "باسيبالل",
      "روجبي ونيون",
      "واكيبواردينج"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0265"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a wicketkeeper?",
    "ar": "أي رياضة تتضمن لاعبًا يُسمى حارس الويكيت؟",
    "options": [
      "Rowing",
      "Bobsleigh",
      "Cricket",
      "Discus throw"
    ],
    "optionsAr": [
      "رووينج",
      "بوبسلييجه",
      "كريككيت",
      "ديسكوس تهروو"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0266"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a caddie?",
    "ar": "أي رياضة قد يستعين لاعبها بمساعد يُسمى Caddie؟",
    "options": [
      "Swimming",
      "Field hockey",
      "Golf",
      "Baseball"
    ],
    "optionsAr": [
      "السباحة",
      "فييلد هوككيي",
      "جولف",
      "باسيبالل"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0267"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a pit lane?",
    "ar": "أي رياضة تستخدم ممر الصيانة Pit lane؟",
    "options": [
      "Kayaking",
      "Formula One",
      "Cross-country skiing",
      "Snowboarding"
    ],
    "optionsAr": [
      "كاياكينج",
      "فورمولا وني",
      "كروسس-كوونتري سكيينج",
      "سنووبواردينج"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0268"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a starting grid?",
    "ar": "أي رياضة تستخدم شبكة انطلاق للمتسابقين؟",
    "options": [
      "Artistic gymnastics",
      "Motor racing",
      "Archery",
      "Cross-country skiing"
    ],
    "optionsAr": [
      "ارتيستيك جيمناستيكس",
      "موتور راكينج",
      "اركهيري",
      "كروسس-كوونتري سكيينج"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0269"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a lane rope?",
    "ar": "أي رياضة تستخدم حبالًا فاصلة بين المسارات؟",
    "options": [
      "Volleyball",
      "Cross-country skiing",
      "Rhythmic gymnastics",
      "Swimming"
    ],
    "optionsAr": [
      "الكرة الطائرة",
      "كروسس-كوونتري سكيينج",
      "رهيتهميك جيمناستيكس",
      "السباحة"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0270"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a relay exchange zone?",
    "ar": "أي رياضة تتضمن منطقة تسليم عصا التتابع؟",
    "options": [
      "Kitesurfing",
      "Volleyball",
      "Athletics relay",
      "Rhythmic gymnastics"
    ],
    "optionsAr": [
      "كيتيسورفينج",
      "الكرة الطائرة",
      "اتهليتيكس ريلاي",
      "رهيتهميك جيمناستيكس"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0271"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a scrum machine in training?",
    "ar": "أي رياضة تستخدم جهاز تدريب يسمى Scrum machine؟",
    "options": [
      "Sport shooting",
      "Rugby union",
      "Pole vault",
      "Track cycling"
    ],
    "optionsAr": [
      "سبورت سهووتينج",
      "روجبي ونيون",
      "بولي فاولت",
      "تراكك كيكلينج"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0272"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a handball goal area?",
    "ar": "أي رياضة تتضمن منطقة مرمى مخصصة؟",
    "options": [
      "Motor racing",
      "Team handball",
      "Javelin throw",
      "Sport shooting"
    ],
    "optionsAr": [
      "موتور راكينج",
      "تيام هاندبالل",
      "جافيلين تهروو",
      "سبورت سهووتينج"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0273"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a crease in front of the goal?",
    "ar": "أي رياضة تستخدم منطقة أمام المرمى تُسمى Crease؟",
    "options": [
      "Volleyball",
      "Skeleton",
      "Ice hockey",
      "Bobsleigh"
    ],
    "optionsAr": [
      "الكرة الطائرة",
      "سكيليتون",
      "يكي هوككيي",
      "بوبسلييجه"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0274"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a face-off to restart play?",
    "ar": "أي رياضة تستخدم Face-off لاستئناف اللعب؟",
    "options": [
      "Ice hockey",
      "Canoeing",
      "Volleyball",
      "Pole vault"
    ],
    "optionsAr": [
      "يكي هوككيي",
      "كانويينج",
      "الكرة الطائرة",
      "بولي فاولت"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0275"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a service box?",
    "ar": "أي رياضة تستخدم مربع الإرسال؟",
    "options": [
      "Kitesurfing",
      "Tennis",
      "Volleyball",
      "Rowing"
    ],
    "optionsAr": [
      "كيتيسورفينج",
      "التنس",
      "الكرة الطائرة",
      "رووينج"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0276"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a baseline and a service line?",
    "ar": "أي رياضة تستخدم خط القاعدة وخط الإرسال؟",
    "options": [
      "Tennis",
      "Archery",
      "Wrestling",
      "Kitesurfing"
    ],
    "optionsAr": [
      "التنس",
      "اركهيري",
      "وريستلينج",
      "كيتيسورفينج"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0277"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a table-tennis paddle?",
    "ar": "أي رياضة تستخدم مضربًا صغيرًا وطاولة مقسومة بشبكة؟",
    "options": [
      "Wrestling",
      "Motor racing",
      "Kayaking",
      "Table tennis"
    ],
    "optionsAr": [
      "وريستلينج",
      "موتور راكينج",
      "كاياكينج",
      "تابلي تيننيس"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0278"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a cue tip to strike a white ball?",
    "ar": "أي رياضة تستخدم طرف عصا لضرب كرة بيضاء؟",
    "options": [
      "Volleyball",
      "Billiards",
      "Biathlon",
      "Artistic gymnastics"
    ],
    "optionsAr": [
      "الكرة الطائرة",
      "بيللياردس",
      "بياتهلون",
      "ارتيستيك جيمناستيكس"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0279"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a hula hoop as an apparatus?",
    "ar": "أي رياضة تستخدم الطوق كأداة أداء؟",
    "options": [
      "Field hockey",
      "Rhythmic gymnastics",
      "Biathlon",
      "Formula One"
    ],
    "optionsAr": [
      "فييلد هوككيي",
      "رهيتهميك جيمناستيكس",
      "بياتهلون",
      "فورمولا وني"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0280"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in association football?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة القدم؟",
    "options": [
      "11",
      "5",
      "20",
      "45"
    ],
    "optionsAr": [
      "11",
      "5",
      "20",
      "45"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0281"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the court in basketball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة السلة؟",
    "options": [
      "7",
      "5",
      "45",
      "8"
    ],
    "optionsAr": [
      "7",
      "5",
      "45",
      "8"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0282"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in indoor volleyball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في الكرة الطائرة؟",
    "options": [
      "21",
      "7",
      "10",
      "6"
    ],
    "optionsAr": [
      "21",
      "7",
      "10",
      "6"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0283"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in team handball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة اليد؟",
    "options": [
      "25",
      "7",
      "21",
      "80"
    ],
    "optionsAr": [
      "25",
      "7",
      "21",
      "80"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0284"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in rugby union?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في الرغبي يونيون؟",
    "options": [
      "1",
      "25",
      "11",
      "15"
    ],
    "optionsAr": [
      "1",
      "25",
      "11",
      "15"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0285"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in rugby sevens?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في رغبي السباعيات؟",
    "options": [
      "90",
      "3",
      "7",
      "15"
    ],
    "optionsAr": [
      "90",
      "3",
      "7",
      "15"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0286"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in field hockey?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في هوكي الميدان؟",
    "options": [
      "4",
      "30",
      "45",
      "11"
    ],
    "optionsAr": [
      "4",
      "30",
      "45",
      "11"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0287"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in baseball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في البيسبول؟",
    "options": [
      "11",
      "9",
      "18",
      "20"
    ],
    "optionsAr": [
      "11",
      "9",
      "18",
      "20"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0288"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in cricket?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في فريق الكريكيت؟",
    "options": [
      "11",
      "15",
      "20",
      "45"
    ],
    "optionsAr": [
      "11",
      "15",
      "20",
      "45"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0289"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in water polo?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الماء في كرة الماء؟",
    "options": [
      "6",
      "7",
      "20",
      "10"
    ],
    "optionsAr": [
      "6",
      "7",
      "20",
      "10"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0290"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in futsal?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة الصالات؟",
    "options": [
      "2",
      "45",
      "5",
      "3"
    ],
    "optionsAr": [
      "2",
      "45",
      "5",
      "3"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0291"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in beach volleyball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في الكرة الطائرة الشاطئية؟",
    "options": [
      "80",
      "2",
      "8",
      "45"
    ],
    "optionsAr": [
      "80",
      "2",
      "8",
      "45"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0292"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in doubles badminton?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في زوجي تنس الريشة؟",
    "options": [
      "80",
      "30",
      "2",
      "45"
    ],
    "optionsAr": [
      "80",
      "30",
      "2",
      "45"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0293"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in singles tennis?",
    "ar": "كم لاعبًا يشارك من كل جهة في مباراة التنس الفردية؟",
    "options": [
      "1",
      "4",
      "3",
      "20"
    ],
    "optionsAr": [
      "1",
      "4",
      "3",
      "20"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0294"
  },
  {
    "category": "Sports",
    "en": "How many points are needed to win a standard table-tennis game, with a two-point lead?",
    "ar": "كم نقطة يحتاج اللاعب للفوز بشوط تنس الطاولة مع فارق نقطتين؟",
    "options": [
      "9",
      "11",
      "80",
      "4"
    ],
    "optionsAr": [
      "9",
      "11",
      "80",
      "4"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0295"
  },
  {
    "category": "Sports",
    "en": "How many points are needed to win a standard badminton game, with a two-point lead?",
    "ar": "كم نقطة يحتاج اللاعب للفوز بشوط تنس الريشة مع فارق نقطتين؟",
    "options": [
      "21",
      "20",
      "11",
      "18"
    ],
    "optionsAr": [
      "21",
      "20",
      "11",
      "18"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0296"
  },
  {
    "category": "Sports",
    "en": "How many minutes is a standard association football match, excluding added time?",
    "ar": "كم دقيقة تستغرق مباراة كرة القدم في وقتها الأصلي دون الوقت بدل الضائع؟",
    "options": [
      "90",
      "5",
      "6",
      "8"
    ],
    "optionsAr": [
      "90",
      "5",
      "6",
      "8"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0297"
  },
  {
    "category": "Sports",
    "en": "How many minutes is a standard rugby union match?",
    "ar": "كم دقيقة تستغرق مباراة الرغبي يونيون عادةً؟",
    "options": [
      "5",
      "8",
      "80",
      "6"
    ],
    "optionsAr": [
      "5",
      "8",
      "80",
      "6"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0298"
  },
  {
    "category": "Sports",
    "en": "How many minutes is a standard basketball game under NBA rules?",
    "ar": "كم دقيقة تستغرق مباراة كرة السلة وفق قواعد NBA؟",
    "options": [
      "48",
      "9",
      "80",
      "30"
    ],
    "optionsAr": [
      "48",
      "9",
      "80",
      "30"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0299"
  },
  {
    "category": "Sports",
    "en": "How many innings are in a standard professional baseball game?",
    "ar": "كم شوطًا في مباراة البيسبول الاحترافية؟",
    "options": [
      "2",
      "4",
      "9",
      "8"
    ],
    "optionsAr": [
      "2",
      "4",
      "9",
      "8"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0300"
  },
  {
    "category": "Sports",
    "en": "How many balls are in a standard over in cricket?",
    "ar": "كم كرة قانونية يتكون منها الـOver في الكريكيت؟",
    "options": [
      "25",
      "1",
      "45",
      "6"
    ],
    "optionsAr": [
      "25",
      "1",
      "45",
      "6"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0301"
  },
  {
    "category": "Sports",
    "en": "How many holes are in a standard full round of golf?",
    "ar": "كم حفرة في جولة الغولف الكاملة المعتادة؟",
    "options": [
      "4",
      "48",
      "18",
      "10"
    ],
    "optionsAr": [
      "4",
      "48",
      "18",
      "10"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0302"
  },
  {
    "category": "Sports",
    "en": "How many events are in a standard decathlon?",
    "ar": "كم مسابقة يتضمنها العشاري في ألعاب القوى؟",
    "options": [
      "4",
      "10",
      "21",
      "11"
    ],
    "optionsAr": [
      "4",
      "10",
      "21",
      "11"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0303"
  },
  {
    "category": "Sports",
    "en": "How many events are in a standard heptathlon?",
    "ar": "كم مسابقة تتضمن السباعي في ألعاب القوى؟",
    "options": [
      "7",
      "30",
      "45",
      "2"
    ],
    "optionsAr": [
      "7",
      "30",
      "45",
      "2"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0304"
  },
  {
    "category": "Sports",
    "en": "How many rings appear in the Olympic symbol?",
    "ar": "كم حلقة تظهر في الشعار الأولمبي؟",
    "options": [
      "48",
      "5",
      "25",
      "15"
    ],
    "optionsAr": [
      "48",
      "5",
      "25",
      "15"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0305"
  },
  {
    "category": "Sports",
    "en": "How many Grand Slam tournaments are there in tennis each year?",
    "ar": "كم بطولة كبرى للتنس تُقام عادةً كل عام؟",
    "options": [
      "90",
      "4",
      "9",
      "25"
    ],
    "optionsAr": [
      "90",
      "4",
      "9",
      "25"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0306"
  },
  {
    "category": "Sports",
    "en": "How many sets must a player usually win to take a best-of-five tennis match?",
    "ar": "كم مجموعة يحتاج اللاعب للفوز بها في مباراة تنس من خمس مجموعات؟",
    "options": [
      "45",
      "30",
      "2",
      "3"
    ],
    "optionsAr": [
      "45",
      "30",
      "2",
      "3"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0307"
  },
  {
    "category": "Sports",
    "en": "How many sets must a player win in a best-of-three tennis match?",
    "ar": "كم مجموعة يحتاج اللاعب للفوز بها في مباراة تنس من ثلاث مجموعات؟",
    "options": [
      "5",
      "3",
      "2",
      "21"
    ],
    "optionsAr": [
      "5",
      "3",
      "2",
      "21"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0308"
  },
  {
    "category": "Sports",
    "en": "How many points is a free throw worth in basketball?",
    "ar": "كم نقطة تساوي الرمية الحرة في كرة السلة؟",
    "options": [
      "10",
      "25",
      "1",
      "80"
    ],
    "optionsAr": [
      "10",
      "25",
      "1",
      "80"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0309"
  },
  {
    "category": "Sports",
    "en": "How many points is a shot from beyond the three-point line worth in basketball?",
    "ar": "كم نقطة تساوي التسديدة من خارج خط الثلاث نقاط؟",
    "options": [
      "10",
      "3",
      "4",
      "2"
    ],
    "optionsAr": [
      "10",
      "3",
      "4",
      "2"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0310"
  },
  {
    "category": "Sports",
    "en": "How many points is a field goal inside the three-point line worth in basketball?",
    "ar": "كم نقطة تساوي السلة من داخل خط الثلاث نقاط؟",
    "options": [
      "18",
      "9",
      "45",
      "2"
    ],
    "optionsAr": [
      "18",
      "9",
      "45",
      "2"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0311"
  },
  {
    "category": "Sports",
    "en": "How many points is a touchdown worth in American football before the extra point?",
    "ar": "كم نقطة تساوي الـTouchdown في كرة القدم الأمريكية قبل نقطة الإضافة؟",
    "options": [
      "3",
      "9",
      "6",
      "48"
    ],
    "optionsAr": [
      "3",
      "9",
      "6",
      "48"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0312"
  },
  {
    "category": "Sports",
    "en": "How many points is a try worth in rugby union?",
    "ar": "كم نقطة تساوي المحاولة (Try) في الرغبي يونيون؟",
    "options": [
      "45",
      "18",
      "3",
      "5"
    ],
    "optionsAr": [
      "45",
      "18",
      "3",
      "5"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0313"
  },
  {
    "category": "Sports",
    "en": "How many points is a conversion worth in rugby union?",
    "ar": "كم نقطة تساوي الركلة التحويلية في الرغبي يونيون؟",
    "options": [
      "2",
      "9",
      "4",
      "25"
    ],
    "optionsAr": [
      "2",
      "9",
      "4",
      "25"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0314"
  },
  {
    "category": "Sports",
    "en": "How many points is a safety worth in American football?",
    "ar": "كم نقطة تساوي الـSafety في كرة القدم الأمريكية؟",
    "options": [
      "2",
      "11",
      "7",
      "8"
    ],
    "optionsAr": [
      "2",
      "11",
      "7",
      "8"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0315"
  },
  {
    "category": "Sports",
    "en": "How many bases must a runner touch to complete a home run route in baseball?",
    "ar": "كم قاعدة يجب على لاعب البيسبول لمسها لإكمال دورة الـHome run؟",
    "options": [
      "80",
      "3",
      "1",
      "4"
    ],
    "optionsAr": [
      "80",
      "3",
      "1",
      "4"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0316"
  },
  {
    "category": "Sports",
    "en": "How many strikes generally make a batter out in baseball?",
    "ar": "كم Strike تؤدي عادةً إلى خروج لاعب الضرب في البيسبول؟",
    "options": [
      "11",
      "4",
      "10",
      "3"
    ],
    "optionsAr": [
      "11",
      "4",
      "10",
      "3"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0317"
  },
  {
    "category": "Sports",
    "en": "How many outs does each team get per half-inning in baseball?",
    "ar": "كم حالة خروج يحصل عليها كل فريق في نصف الشوط بالبيسبول؟",
    "options": [
      "2",
      "6",
      "21",
      "3"
    ],
    "optionsAr": [
      "2",
      "6",
      "21",
      "3"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0318"
  },
  {
    "category": "Sports",
    "en": "How many players are on a standard Olympic water-polo team in the pool at once?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك داخل المسبح في كرة الماء؟",
    "options": [
      "21",
      "4",
      "7",
      "15"
    ],
    "optionsAr": [
      "21",
      "4",
      "7",
      "15"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0319"
  },
  {
    "category": "Sports",
    "en": "How many players form a standard doubles team in tennis?",
    "ar": "كم لاعبًا يشكل فريق الزوجي في التنس؟",
    "options": [
      "1",
      "18",
      "80",
      "2"
    ],
    "optionsAr": [
      "1",
      "18",
      "80",
      "2"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0320"
  },
  {
    "category": "Sports",
    "en": "How many minutes are in each standard half of a handball match?",
    "ar": "كم دقيقة في كل شوط من مباراة كرة اليد المعتادة؟",
    "options": [
      "30",
      "11",
      "15",
      "90"
    ],
    "optionsAr": [
      "30",
      "11",
      "15",
      "90"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0321"
  },
  {
    "category": "Sports",
    "en": "How many periods are played in a standard ice-hockey game?",
    "ar": "كم فترة تُلعب في مباراة هوكي الجليد؟",
    "options": [
      "10",
      "2",
      "5",
      "3"
    ],
    "optionsAr": [
      "10",
      "2",
      "5",
      "3"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0322"
  },
  {
    "category": "Sports",
    "en": "How many minutes are in each period of a standard NHL game?",
    "ar": "كم دقيقة في كل فترة من مباراة NHL؟",
    "options": [
      "20",
      "7",
      "6",
      "1"
    ],
    "optionsAr": [
      "20",
      "7",
      "6",
      "1"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0323"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in wheelchair basketball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة السلة على الكراسي المتحركة؟",
    "options": [
      "30",
      "5",
      "1",
      "6"
    ],
    "optionsAr": [
      "30",
      "5",
      "1",
      "6"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0324"
  },
  {
    "category": "Sports",
    "en": "How many players are on the field for one team in lacrosse field play?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في لاكروس الميداني؟",
    "options": [
      "10",
      "11",
      "15",
      "2"
    ],
    "optionsAr": [
      "10",
      "11",
      "15",
      "2"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0325"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in kabaddi?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في الكابادي؟",
    "options": [
      "9",
      "7",
      "30",
      "18"
    ],
    "optionsAr": [
      "9",
      "7",
      "30",
      "18"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0326"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in netball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة الشبكة؟",
    "options": [
      "21",
      "3",
      "7",
      "11"
    ],
    "optionsAr": [
      "21",
      "3",
      "7",
      "11"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0327"
  },
  {
    "category": "Sports",
    "en": "How many players are on court for one team in indoor hockey?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في الهوكي الداخلي؟",
    "options": [
      "1",
      "21",
      "6",
      "18"
    ],
    "optionsAr": [
      "1",
      "21",
      "6",
      "18"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0328"
  },
  {
    "category": "Sports",
    "en": "How many players are on the field for one team in Gaelic football?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في كرة القدم الغيلية؟",
    "options": [
      "15",
      "80",
      "10",
      "48"
    ],
    "optionsAr": [
      "15",
      "80",
      "10",
      "48"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0329"
  },
  {
    "category": "Sports",
    "en": "How many players are on the field for one team in Australian rules football?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في كرة القدم الأسترالية؟",
    "options": [
      "1",
      "90",
      "10",
      "18"
    ],
    "optionsAr": [
      "1",
      "90",
      "10",
      "18"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0330"
  },
  {
    "category": "Sports",
    "en": "How many players are on court for one team in squash singles?",
    "ar": "كم لاعبًا يشارك من كل جهة في الإسكواش الفردي؟",
    "options": [
      "21",
      "2",
      "1",
      "90"
    ],
    "optionsAr": [
      "21",
      "2",
      "1",
      "90"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0331"
  },
  {
    "category": "Sports",
    "en": "How many players are on a standard curling team?",
    "ar": "كم لاعبًا يتكون منه فريق الكيرلنغ المعتاد؟",
    "options": [
      "11",
      "4",
      "8",
      "20"
    ],
    "optionsAr": [
      "11",
      "4",
      "8",
      "20"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0332"
  },
  {
    "category": "Sports",
    "en": "How many players are on a standard baseball batting lineup?",
    "ar": "كم لاعبًا في تشكيلة الضرب الأساسية للبيسبول؟",
    "options": [
      "18",
      "5",
      "7",
      "9"
    ],
    "optionsAr": [
      "18",
      "5",
      "7",
      "9"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0333"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the court in sepak takraw doubles?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في زوجي سيباك تاكراو؟",
    "options": [
      "5",
      "30",
      "2",
      "90"
    ],
    "optionsAr": [
      "5",
      "30",
      "2",
      "90"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0334"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in sepak takraw regu?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في منافسة سيباك تاكراو الجماعية؟",
    "options": [
      "3",
      "4",
      "20",
      "10"
    ],
    "optionsAr": [
      "3",
      "4",
      "20",
      "10"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0335"
  },
  {
    "category": "Sports",
    "en": "How many players are on the field for one team in standard beach soccer?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في كرة القدم الشاطئية؟",
    "options": [
      "80",
      "5",
      "6",
      "1"
    ],
    "optionsAr": [
      "80",
      "5",
      "6",
      "1"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0336"
  },
  {
    "category": "Sports",
    "en": "How many players are on court for one team in pickleball doubles?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في زوجي البيكلبول؟",
    "options": [
      "25",
      "5",
      "2",
      "1"
    ],
    "optionsAr": [
      "25",
      "5",
      "2",
      "1"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0337"
  },
  {
    "category": "Sports",
    "en": "How many points are needed to win a standard volleyball set, excluding a deciding set?",
    "ar": "كم نقطة يحتاج الفريق للفوز بالشوط العادي في الكرة الطائرة دون الشوط الحاسم؟",
    "options": [
      "25",
      "80",
      "8",
      "48"
    ],
    "optionsAr": [
      "25",
      "80",
      "8",
      "48"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0338"
  },
  {
    "category": "Sports",
    "en": "How many players are on court for one team in korfball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة الكورفبال؟",
    "options": [
      "15",
      "45",
      "80",
      "8"
    ],
    "optionsAr": [
      "15",
      "45",
      "80",
      "8"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0339"
  },
  {
    "category": "Sports",
    "en": "How many players are on court for one team in floorball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في الفلوربول؟",
    "options": [
      "6",
      "4",
      "48",
      "3"
    ],
    "optionsAr": [
      "6",
      "4",
      "48",
      "3"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0340"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in association football including the goalkeeper?",
    "ar": "كم لاعبًا من الفريق الواحد داخل ملعب كرة القدم مع احتساب الحارس؟",
    "options": [
      "7",
      "5",
      "3",
      "11"
    ],
    "optionsAr": [
      "7",
      "5",
      "3",
      "11"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0341"
  },
  {
    "category": "Sports",
    "en": "How many minutes are in a standard professional boxing round?",
    "ar": "كم دقيقة في الجولة الواحدة من الملاكمة الاحترافية عادةً؟",
    "options": [
      "7",
      "11",
      "3",
      "2"
    ],
    "optionsAr": [
      "7",
      "11",
      "3",
      "2"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0342"
  },
  {
    "category": "Sports",
    "en": "How many minutes are in a standard amateur boxing round for elite men?",
    "ar": "كم دقيقة في الجولة الواحدة من ملاكمة النخبة للرجال عادةً؟",
    "options": [
      "3",
      "1",
      "10",
      "18"
    ],
    "optionsAr": [
      "3",
      "1",
      "10",
      "18"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0343"
  },
  {
    "category": "Sports",
    "en": "How many players are in a standard doubles badminton match on court?",
    "ar": "كم لاعبًا يشارك في مباراة زوجي تنس الريشة؟",
    "options": [
      "6",
      "15",
      "4",
      "8"
    ],
    "optionsAr": [
      "6",
      "15",
      "4",
      "8"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0344"
  },
  {
    "category": "Sports",
    "en": "How many players are in a standard mixed-doubles tennis match on court?",
    "ar": "كم لاعبًا يشارك في مباراة الزوجي المختلط في التنس؟",
    "options": [
      "9",
      "11",
      "4",
      "2"
    ],
    "optionsAr": [
      "9",
      "11",
      "4",
      "2"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0345"
  },
  {
    "category": "Sports",
    "en": "How many competitors start a standard Olympic 100-metre sprint final?",
    "ar": "كم متسابقًا يشارك عادةً في نهائي سباق 100 متر الأولمبي؟",
    "options": [
      "8",
      "25",
      "48",
      "6"
    ],
    "optionsAr": [
      "8",
      "25",
      "48",
      "6"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0346"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in 3x3 basketball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة السلة 3x3؟",
    "options": [
      "10",
      "30",
      "90",
      "3"
    ],
    "optionsAr": [
      "10",
      "30",
      "90",
      "3"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0347"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in beach handball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة اليد الشاطئية؟",
    "options": [
      "4",
      "7",
      "45",
      "30"
    ],
    "optionsAr": [
      "4",
      "7",
      "45",
      "30"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0348"
  },
  {
    "category": "Sports",
    "en": "How many minutes are in one half of a standard association football match?",
    "ar": "كم دقيقة في الشوط الواحد من مباراة كرة القدم؟",
    "options": [
      "45",
      "2",
      "80",
      "11"
    ],
    "optionsAr": [
      "45",
      "2",
      "80",
      "11"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0349"
  },
  {
    "category": "Sports",
    "en": "How many points is a successful penalty kick worth in association football?",
    "ar": "كم نقطة يساوي تسجيل ركلة جزاء ناجحة في كرة القدم؟",
    "options": [
      "1",
      "5",
      "25",
      "45"
    ],
    "optionsAr": [
      "1",
      "5",
      "25",
      "45"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0350"
  },
  {
    "category": "Sports",
    "en": "In golf, what is a score of one stroke under par on a hole called?",
    "ar": "في الغولف، ماذا تُسمى نتيجة أقل بضربة واحدة من المعدل للحفرة؟",
    "options": [
      "Ace",
      "Pole",
      "Starboard",
      "Birdie"
    ],
    "optionsAr": [
      "اكي",
      "بولي",
      "ستاربوارد",
      "بيرديي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0351"
  },
  {
    "category": "Sports",
    "en": "In golf, what is a score of two strokes under par called?",
    "ar": "في الغولف، ماذا تُسمى نتيجة أقل بضربتين من المعدل؟",
    "options": [
      "Red card",
      "Winner",
      "Surfboard",
      "Eagle"
    ],
    "optionsAr": [
      "ريد كارد",
      "ويننير",
      "سورفبوارد",
      "نسر"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0352"
  },
  {
    "category": "Sports",
    "en": "In golf, what is a score of one stroke over par called?",
    "ar": "في الغولف، ماذا تُسمى نتيجة أعلى بضربة واحدة من المعدل؟",
    "options": [
      "Teeing ground",
      "Pole",
      "Deuce",
      "Bogey"
    ],
    "optionsAr": [
      "تييينج جرووند",
      "بولي",
      "تعادل",
      "بوجيي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0353"
  },
  {
    "category": "Sports",
    "en": "In tennis, what is a serve untouched by the receiver called?",
    "ar": "في التنس، ماذا تُسمى الإرسالية التي لا يلمسها المستقبل؟",
    "options": [
      "Mallet",
      "Jump",
      "Ace",
      "Bull"
    ],
    "optionsAr": [
      "مالليت",
      "جومب",
      "اكي",
      "بولل"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0354"
  },
  {
    "category": "Sports",
    "en": "In tennis, what score comes after 30 in a game?",
    "ar": "في التنس، ما النتيجة التي تأتي بعد 30 في الشوط؟",
    "options": [
      "Block",
      "40",
      "Assist",
      "Pit lane"
    ],
    "optionsAr": [
      "بلوكك",
      "40",
      "اسسيست",
      "بيت لاني"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0355"
  },
  {
    "category": "Sports",
    "en": "In tennis, what is a score of 40–40 called?",
    "ar": "في التنس، ماذا تُسمى نتيجة 40–40؟",
    "options": [
      "Turnover",
      "Deuce",
      "Peloton",
      "Red card"
    ],
    "optionsAr": [
      "تورنوفير",
      "تعادل",
      "بيلوتون",
      "ريد كارد"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0356"
  },
  {
    "category": "Sports",
    "en": "In tennis, what is the point after deuce called when a player leads by one?",
    "ar": "في التنس، ماذا تُسمى النقطة التي تمنح اللاعب أفضلية بعد التعادل؟",
    "options": [
      "Green",
      "Surfboard",
      "Net shot",
      "Advantage"
    ],
    "optionsAr": [
      "جريين",
      "سورفبوارد",
      "نيت سهوت",
      "ادفانتاجي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0357"
  },
  {
    "category": "Sports",
    "en": "In football, what is a restart awarded after a foul inside the penalty area called?",
    "ar": "في كرة القدم، ماذا تُسمى الركلة التي تُمنح بعد مخالفة داخل منطقة الجزاء؟",
    "options": [
      "Catcher",
      "Break",
      "Green",
      "Penalty kick"
    ],
    "optionsAr": [
      "كاتكهير",
      "برياك",
      "جريين",
      "بينالتي كيكك"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0358"
  },
  {
    "category": "Sports",
    "en": "In football, what is the restart from the corner arc called?",
    "ar": "في كرة القدم، ماذا تُسمى الركلة التي تُنفذ من قوس الركنية؟",
    "options": [
      "Missed field goal",
      "Corner kick",
      "Eagle",
      "Strikeout"
    ],
    "optionsAr": [
      "ميسسيد فييلد جوال",
      "كورنير كيكك",
      "نسر",
      "ستريكيووت"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0359"
  },
  {
    "category": "Sports",
    "en": "In football, what is the restart awarded when the ball completely crosses the touchline called?",
    "ar": "في كرة القدم، ماذا يُسمى استئناف اللعب بعد خروج الكرة من خط التماس؟",
    "options": [
      "Over",
      "Yellow card",
      "Throw-in",
      "Ball"
    ],
    "optionsAr": [
      "خارج الملعب",
      "ييللوو كارد",
      "تهروو-ين",
      "الكرة"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0360"
  },
  {
    "category": "Sports",
    "en": "In football, what card means a player is sent off?",
    "ar": "في كرة القدم، أي بطاقة تعني طرد اللاعب؟",
    "options": [
      "Assist",
      "Red card",
      "Starboard",
      "Coxswain"
    ],
    "optionsAr": [
      "اسسيست",
      "ريد كارد",
      "ستاربوارد",
      "كوكسسواين"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0361"
  },
  {
    "category": "Sports",
    "en": "In football, what card is a formal warning?",
    "ar": "في كرة القدم، أي بطاقة تعني إنذار اللاعب؟",
    "options": [
      "Port",
      "Yellow card",
      "Dobok",
      "Count"
    ],
    "optionsAr": [
      "بورت",
      "ييللوو كارد",
      "دوبوك",
      "كوونت"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0362"
  },
  {
    "category": "Sports",
    "en": "In basketball, what is it called when a player takes too many steps without dribbling?",
    "ar": "في كرة السلة، ماذا تُسمى مخالفة المشي دون تنطيط؟",
    "options": [
      "Throw-in",
      "Clear",
      "Traveling",
      "Eagle"
    ],
    "optionsAr": [
      "تهروو-ين",
      "واضح",
      "ترافيلينج",
      "نسر"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0363"
  },
  {
    "category": "Sports",
    "en": "In basketball, what is a shot made while jumping called?",
    "ar": "في كرة السلة، ماذا تُسمى التسديدة أثناء القفز؟",
    "options": [
      "Red card",
      "Backstroke",
      "Clear",
      "Jump shot"
    ],
    "optionsAr": [
      "ريد كارد",
      "باككستروكي",
      "واضح",
      "جومب سهوت"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0364"
  },
  {
    "category": "Sports",
    "en": "In basketball, what is a pass that leads directly to a score called?",
    "ar": "في كرة السلة، ماذا تُسمى التمريرة التي تؤدي مباشرةً إلى تسجيل النقاط؟",
    "options": [
      "Try",
      "Birdie",
      "Red card",
      "Assist"
    ],
    "optionsAr": [
      "تري",
      "بيرديي",
      "ريد كارد",
      "اسسيست"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0365"
  },
  {
    "category": "Sports",
    "en": "In basketball, what is a shot that misses the basket called in statistical records?",
    "ar": "في إحصاءات كرة السلة، ماذا تُسمى التسديدة غير الناجحة؟",
    "options": [
      "Starboard",
      "Missed field goal",
      "Advantage",
      "Red card"
    ],
    "optionsAr": [
      "ستاربوارد",
      "ميسسيد فييلد جوال",
      "ادفانتاجي",
      "ريد كارد"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0366"
  },
  {
    "category": "Sports",
    "en": "In baseball, what is a batter’s successful hit that lets them reach all four bases called?",
    "ar": "في البيسبول، ماذا تُسمى الضربة التي تسمح للاعب بإنهاء دورة القواعد كاملة؟",
    "options": [
      "Home run",
      "Piste",
      "Penalty kick",
      "Libero"
    ],
    "optionsAr": [
      "هومي رون",
      "بيستي",
      "بينالتي كيكك",
      "ليبيرو"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0367"
  },
  {
    "category": "Sports",
    "en": "In baseball, what is a pitch outside the strike zone that the batter does not swing at called?",
    "ar": "في البيسبول، ماذا تُسمى الرمية خارج منطقة الضرب التي لا يحاول اللاعب ضربها؟",
    "options": [
      "Winner",
      "Coxswain",
      "Ball",
      "Backstroke"
    ],
    "optionsAr": [
      "ويننير",
      "كوكسسواين",
      "الكرة",
      "باككستروكي"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0368"
  },
  {
    "category": "Sports",
    "en": "In baseball, what is three strikes against a batter called?",
    "ar": "في البيسبول، ماذا تُسمى ثلاث ضربات Strike ضد اللاعب؟",
    "options": [
      "Winner",
      "Break",
      "Backstroke",
      "Strikeout"
    ],
    "optionsAr": [
      "ويننير",
      "برياك",
      "باككستروكي",
      "ستريكيووت"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0369"
  },
  {
    "category": "Sports",
    "en": "In cricket, what is a delivery that dismisses the batter without a run called?",
    "ar": "في الكريكيت، ماذا تُسمى الكرة التي تُخرج اللاعب دون تسجيل نقطة؟",
    "options": [
      "Seven",
      "Wicket",
      "Surfboard",
      "Peloton"
    ],
    "optionsAr": [
      "سيفين",
      "ويككيت",
      "سورفبوارد",
      "بيلوتون"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0370"
  },
  {
    "category": "Sports",
    "en": "In cricket, what is scoring six runs by hitting the ball over the boundary called?",
    "ar": "في الكريكيت، ماذا يُسمى تسجيل ست نقاط بضرب الكرة خارج الحدود؟",
    "options": [
      "Six",
      "Bull",
      "Goalkeeper",
      "40"
    ],
    "optionsAr": [
      "سيكس",
      "بولل",
      "جوالكييبير",
      "40"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0371"
  },
  {
    "category": "Sports",
    "en": "In cricket, what is a set of six legal deliveries called?",
    "ar": "في الكريكيت، ماذا تُسمى مجموعة من ست كرات قانونية؟",
    "options": [
      "Ippon",
      "Conversion",
      "Over",
      "Cross-country skiing and rifle shooting"
    ],
    "optionsAr": [
      "يببون",
      "كونفيرسيون",
      "خارج الملعب",
      "كروسس-كوونتري سكيينج اند ريفلي سهووتينج"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0372"
  },
  {
    "category": "Sports",
    "en": "In rugby, what is grounding the ball in the opponent’s in-goal area called?",
    "ar": "في الرغبي، ماذا يُسمى وضع الكرة على الأرض في منطقة تسجيل الخصم؟",
    "options": [
      "Try",
      "Clear",
      "Bogey",
      "Breaststroke"
    ],
    "optionsAr": [
      "تري",
      "واضح",
      "بوجيي",
      "برياستستروكي"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0373"
  },
  {
    "category": "Sports",
    "en": "In rugby, what is the kick after a try called?",
    "ar": "في الرغبي، ماذا تُسمى الركلة التي تأتي بعد تسجيل Try؟",
    "options": [
      "Conversion",
      "Over",
      "Birdie",
      "Winner"
    ],
    "optionsAr": [
      "كونفيرسيون",
      "خارج الملعب",
      "بيرديي",
      "ويننير"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0374"
  },
  {
    "category": "Sports",
    "en": "In American football, what is the player who throws the ball usually called?",
    "ar": "في كرة القدم الأمريكية، ماذا يُسمى اللاعب الذي يرمي الكرة عادةً؟",
    "options": [
      "Red card",
      "Quarterback",
      "Chequered flag",
      "Jockey"
    ],
    "optionsAr": [
      "ريد كارد",
      "قوارتيرباكك",
      "كهيقويريد فلاج",
      "جوككيي"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0375"
  },
  {
    "category": "Sports",
    "en": "In American football, what is the defensive play that takes possession from the offense called?",
    "ar": "في كرة القدم الأمريكية، ماذا تُسمى اللعبة الدفاعية التي تستعيد فيها الكرة من الهجوم؟",
    "options": [
      "Turnover",
      "Block",
      "Exchange zone",
      "Winner"
    ],
    "optionsAr": [
      "تورنوفير",
      "بلوكك",
      "يكسكهانجي زوني",
      "ويننير"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0376"
  },
  {
    "category": "Sports",
    "en": "In volleyball, what is a powerful attacking hit called?",
    "ar": "في الكرة الطائرة، ماذا تُسمى الضربة الهجومية القوية؟",
    "options": [
      "Libero",
      "Spike",
      "Dobok",
      "Throw-in"
    ],
    "optionsAr": [
      "ليبيرو",
      "سبيكي",
      "دوبوك",
      "تهروو-ين"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0377"
  },
  {
    "category": "Sports",
    "en": "In volleyball, what is the first defensive contact against an attack at the net called?",
    "ar": "في الكرة الطائرة، ماذا تُسمى محاولة صد الهجوم عند الشبكة؟",
    "options": [
      "Block",
      "Ippon",
      "Throw-in",
      "Penalty kick"
    ],
    "optionsAr": [
      "بلوكك",
      "يببون",
      "تهروو-ين",
      "بينالتي كيكك"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0378"
  },
  {
    "category": "Sports",
    "en": "In volleyball, what is the specialist defensive player wearing a different jersey called?",
    "ar": "في الكرة الطائرة، ماذا يُسمى اللاعب الدفاعي المتخصص الذي يرتدي قميصًا مختلفًا؟",
    "options": [
      "40",
      "Backstroke",
      "Libero",
      "Let"
    ],
    "optionsAr": [
      "40",
      "باككستروكي",
      "ليبيرو",
      "ليت"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0379"
  },
  {
    "category": "Sports",
    "en": "In badminton, what is a shot hit softly just over the net called?",
    "ar": "في تنس الريشة، ماذا تُسمى الضربة الخفيفة التي تعبر الشبكة مباشرة؟",
    "options": [
      "Ten",
      "Freestyle",
      "Ippon",
      "Net shot"
    ],
    "optionsAr": [
      "تين",
      "فرييستيلي",
      "يببون",
      "نيت سهوت"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0380"
  },
  {
    "category": "Sports",
    "en": "In badminton, what is a high defensive shot to the back of the court called?",
    "ar": "في تنس الريشة، ماذا تُسمى الضربة العالية التي تصل إلى مؤخرة الملعب؟",
    "options": [
      "Ten",
      "Home run",
      "Clear",
      "Break"
    ],
    "optionsAr": [
      "تين",
      "هومي رون",
      "واضح",
      "برياك"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0381"
  },
  {
    "category": "Sports",
    "en": "In table tennis, what is a serve that clips the net and still lands correctly called?",
    "ar": "في تنس الطاولة، ماذا يُسمى الإرسال الذي يلمس الشبكة ثم يسقط بشكل صحيح؟",
    "options": [
      "Try",
      "Let",
      "Libero",
      "Ball"
    ],
    "optionsAr": [
      "تري",
      "ليت",
      "ليبيرو",
      "الكرة"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0382"
  },
  {
    "category": "Sports",
    "en": "In swimming, what stroke is performed on the back?",
    "ar": "في السباحة، ما اسم السباحة التي يكون فيها السباح على ظهره؟",
    "options": [
      "Swimming, cycling and running",
      "Crossbar",
      "Backstroke",
      "Exchange zone"
    ],
    "optionsAr": [
      "سويممينج, كيكلينج اند روننينج",
      "كروسسبار",
      "باككستروكي",
      "يكسكهانجي زوني"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0383"
  },
  {
    "category": "Sports",
    "en": "In swimming, what stroke uses a simultaneous arm recovery over the water and a frog-like kick?",
    "ar": "في السباحة، ما اسم الأسلوب الذي يستخدم حركة ذراعين متزامنة وركلة تشبه الضفدع؟",
    "options": [
      "Over",
      "Chequered flag",
      "Breaststroke",
      "Seven"
    ],
    "optionsAr": [
      "خارج الملعب",
      "كهيقويريد فلاج",
      "برياستستروكي",
      "سيفين"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0384"
  },
  {
    "category": "Sports",
    "en": "In swimming, what stroke uses alternating arm movements and a flutter kick?",
    "ar": "في السباحة، ما اسم الأسلوب الذي يستخدم حركة ذراعين متبادلة وركلة رفرفة؟",
    "options": [
      "Freestyle",
      "House",
      "Coxswain",
      "Bull"
    ],
    "optionsAr": [
      "فرييستيلي",
      "هووسي",
      "كوكسسواين",
      "بولل"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0385"
  },
  {
    "category": "Sports",
    "en": "In track athletics, what is the area where a runner hands a baton to a teammate called?",
    "ar": "في سباقات التتابع، ماذا تُسمى المنطقة التي يسلم فيها العداء العصا لزميله؟",
    "options": [
      "Exchange zone",
      "Penalty kick",
      "Conversion",
      "Clear"
    ],
    "optionsAr": [
      "يكسكهانجي زوني",
      "بينالتي كيكك",
      "كونفيرسيون",
      "واضح"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0386"
  },
  {
    "category": "Sports",
    "en": "In high jump, what is the horizontal bar the athlete must clear called?",
    "ar": "في الوثب العالي، ماذا يُسمى الحاجز الأفقي الذي يجب على اللاعب تجاوزه؟",
    "options": [
      "Let",
      "Crossbar",
      "Goalkeeper",
      "Teeing ground"
    ],
    "optionsAr": [
      "ليت",
      "كروسسبار",
      "جوالكييبير",
      "تييينج جرووند"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0387"
  },
  {
    "category": "Sports",
    "en": "In pole vault, what object helps the athlete rise over the bar?",
    "ar": "في القفز بالزانة، ما الأداة التي تساعد اللاعب على تجاوز العارضة؟",
    "options": [
      "Jump",
      "Catcher",
      "Pole",
      "Six"
    ],
    "optionsAr": [
      "جومب",
      "كاتكهير",
      "بولي",
      "سيكس"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0388"
  },
  {
    "category": "Sports",
    "en": "In cycling, what is the group of riders moving together called?",
    "ar": "في سباق الدراجات، ماذا تُسمى مجموعة الدراجين التي تتحرك معًا؟",
    "options": [
      "Ace",
      "Peloton",
      "Advantage",
      "Swimming, cycling and running"
    ],
    "optionsAr": [
      "اكي",
      "بيلوتون",
      "ادفانتاجي",
      "سويممينج, كيكلينج اند روننينج"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0389"
  },
  {
    "category": "Sports",
    "en": "In Formula One, what is the area where cars stop for tire changes called?",
    "ar": "في الفورمولا 1، ماذا تُسمى المنطقة التي تتوقف فيها السيارات لتغيير الإطارات؟",
    "options": [
      "Jockey",
      "Pit lane",
      "Home run",
      "Corner kick"
    ],
    "optionsAr": [
      "جوككيي",
      "بيت لاني",
      "هومي رون",
      "كورنير كيكك"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0390"
  },
  {
    "category": "Sports",
    "en": "In Formula One, what flag signals the end of a race?",
    "ar": "في الفورمولا 1، أي علم يشير إلى نهاية السباق؟",
    "options": [
      "Corner kick",
      "Five",
      "Backstroke",
      "Chequered flag"
    ],
    "optionsAr": [
      "كورنير كيكك",
      "فيفي",
      "باككستروكي",
      "كهيقويريد فلاج"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0391"
  },
  {
    "category": "Sports",
    "en": "In boxing, what is a win when an opponent cannot continue called?",
    "ar": "في الملاكمة، ماذا يُسمى الفوز عندما لا يستطيع الخصم الاستمرار؟",
    "options": [
      "Jump",
      "Six",
      "Knockout",
      "Red card"
    ],
    "optionsAr": [
      "جومب",
      "سيكس",
      "كنوككووت",
      "ريد كارد"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0392"
  },
  {
    "category": "Sports",
    "en": "In boxing, what is a referee’s count after a boxer is knocked down part of?",
    "ar": "في الملاكمة، ماذا يُسمى العد الذي يجريه الحكم بعد سقوط الملاكم؟",
    "options": [
      "Six",
      "Count",
      "Goalkeeper",
      "Red card"
    ],
    "optionsAr": [
      "سيكس",
      "كوونت",
      "جوالكييبير",
      "ريد كارد"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0393"
  },
  {
    "category": "Sports",
    "en": "In judo, what is the highest score that ends a contest immediately called?",
    "ar": "في الجودو، ماذا تُسمى أعلى نتيجة تنهي النزال مباشرة؟",
    "options": [
      "Peloton",
      "Backstroke",
      "Clear",
      "Ippon"
    ],
    "optionsAr": [
      "بيلوتون",
      "باككستروكي",
      "واضح",
      "يببون"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0394"
  },
  {
    "category": "Sports",
    "en": "In taekwondo, what is the uniform worn by competitors called?",
    "ar": "في التايكوندو، ماذا تُسمى البدلة التي يرتديها اللاعبون؟",
    "options": [
      "Dobok",
      "Bullseye",
      "Exchange zone",
      "Quarterback"
    ],
    "optionsAr": [
      "دوبوك",
      "بوللسييي",
      "يكسكهانجي زوني",
      "قوارتيرباكك"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0395"
  },
  {
    "category": "Sports",
    "en": "In fencing, what is the playing area called?",
    "ar": "في المبارزة، ماذا تُسمى مساحة اللعب؟",
    "options": [
      "Corner kick",
      "Piste",
      "Freestyle",
      "Dobok"
    ],
    "optionsAr": [
      "كورنير كيكك",
      "بيستي",
      "فرييستيلي",
      "دوبوك"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0396"
  },
  {
    "category": "Sports",
    "en": "In golf, what is the area of closely mown grass around the hole called?",
    "ar": "في الغولف، ماذا تُسمى المنطقة ذات العشب القصير حول الحفرة؟",
    "options": [
      "Green",
      "Surfboard",
      "House",
      "Try"
    ],
    "optionsAr": [
      "جريين",
      "سورفبوارد",
      "هووسي",
      "تري"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0397"
  },
  {
    "category": "Sports",
    "en": "In golf, what is the starting area for a hole called?",
    "ar": "في الغولف، ماذا تُسمى منطقة بداية الحفرة؟",
    "options": [
      "Conversion",
      "Yellow card",
      "Catcher",
      "Teeing ground"
    ],
    "optionsAr": [
      "كونفيرسيون",
      "ييللوو كارد",
      "كاتكهير",
      "تييينج جرووند"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0398"
  },
  {
    "category": "Sports",
    "en": "In curling, what is the target area of concentric circles called?",
    "ar": "في الكيرلنغ، ماذا تُسمى منطقة الهدف المكوّنة من دوائر متداخلة؟",
    "options": [
      "Coxswain",
      "Starboard",
      "House",
      "Try"
    ],
    "optionsAr": [
      "كوكسسواين",
      "ستاربوارد",
      "هووسي",
      "تري"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0399"
  },
  {
    "category": "Sports",
    "en": "In archery, what is the center of the target called?",
    "ar": "في الرماية بالقوس، ماذا يُسمى مركز الهدف؟",
    "options": [
      "Jump shot",
      "Let",
      "Port",
      "Bullseye"
    ],
    "optionsAr": [
      "جومب سهوت",
      "ليت",
      "بورت",
      "بوللسييي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0400"
  },
  {
    "category": "Sports",
    "en": "In surfing, what is the rider’s board called?",
    "ar": "في ركوب الأمواج، ماذا يُسمى اللوح الذي يقف عليه اللاعب؟",
    "options": [
      "Swimming, cycling and running",
      "Surfboard",
      "Five",
      "Home run"
    ],
    "optionsAr": [
      "سويممينج, كيكلينج اند روننينج",
      "سورفبوارد",
      "فيفي",
      "هومي رون"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0401"
  },
  {
    "category": "Sports",
    "en": "In sailing, what is the left side of a boat facing forward called?",
    "ar": "في الإبحار، ماذا يُسمى الجانب الأيسر من القارب عند النظر إلى الأمام؟",
    "options": [
      "Winner",
      "Port",
      "Dobok",
      "Stick landing"
    ],
    "optionsAr": [
      "ويننير",
      "بورت",
      "دوبوك",
      "ستيكك لاندينج"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0402"
  },
  {
    "category": "Sports",
    "en": "In sailing, what is the right side of a boat facing forward called?",
    "ar": "في الإبحار، ماذا يُسمى الجانب الأيمن من القارب عند النظر إلى الأمام؟",
    "options": [
      "Starboard",
      "Assist",
      "Corner kick",
      "Red card"
    ],
    "optionsAr": [
      "ستاربوارد",
      "اسسيست",
      "كورنير كيكك",
      "ريد كارد"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0403"
  },
  {
    "category": "Sports",
    "en": "In rowing, what is the person who calls rhythm and directs a crew called?",
    "ar": "في التجديف، ماذا يُسمى الشخص الذي يوجه الطاقم وينظم الإيقاع؟",
    "options": [
      "Yellow card",
      "Coxswain",
      "Let",
      "Bullseye"
    ],
    "optionsAr": [
      "ييللوو كارد",
      "كوكسسواين",
      "ليت",
      "بوللسييي"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0404"
  },
  {
    "category": "Sports",
    "en": "In horse racing, what is the person who rides a racehorse called?",
    "ar": "في سباق الخيل، ماذا يُسمى الشخص الذي يمتطي الحصان؟",
    "options": [
      "Jockey",
      "Coxswain",
      "Birdie",
      "Mallet"
    ],
    "optionsAr": [
      "جوككيي",
      "كوكسسواين",
      "بيرديي",
      "مالليت"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0405"
  },
  {
    "category": "Sports",
    "en": "In polo, what is the long-handled tool used to hit the ball called?",
    "ar": "في البولو، ماذا تُسمى العصا الطويلة المستخدمة لضرب الكرة؟",
    "options": [
      "Cross-country skiing and rifle shooting",
      "Try",
      "Mallet",
      "Starboard"
    ],
    "optionsAr": [
      "كروسس-كوونتري سكيينج اند ريفلي سهووتينج",
      "تري",
      "مالليت",
      "ستاربوارد"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0406"
  },
  {
    "category": "Sports",
    "en": "In snooker, what is the act of potting a red followed by a color called in scoring?",
    "ar": "في السنوكر، ماذا يُسمى تسجيل كرة حمراء ثم كرة ملونة في التسلسل؟",
    "options": [
      "Home run",
      "Ippon",
      "Break",
      "Jockey"
    ],
    "optionsAr": [
      "هومي رون",
      "يببون",
      "برياك",
      "جوككيي"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0407"
  },
  {
    "category": "Sports",
    "en": "In darts, what is the central scoring area of the board called?",
    "ar": "في لعبة السهام، ماذا تُسمى المنطقة المركزية في لوحة الأهداف؟",
    "options": [
      "Swimming, cycling and running",
      "Six",
      "Net shot",
      "Bull"
    ],
    "optionsAr": [
      "سويممينج, كيكلينج اند روننينج",
      "سيكس",
      "نيت سهوت",
      "بولل"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0408"
  },
  {
    "category": "Sports",
    "en": "In gymnastics, what is a controlled landing after a jump called?",
    "ar": "في الجمباز، ماذا تُسمى نهاية القفزة بهبوط متحكم به؟",
    "options": [
      "Stick landing",
      "Bowler",
      "Peloton",
      "Swimming, cycling and running"
    ],
    "optionsAr": [
      "ستيكك لاندينج",
      "بوولير",
      "بيلوتون",
      "سويممينج, كيكلينج اند روننينج"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0409"
  },
  {
    "category": "Sports",
    "en": "In figure skating, what is a jump with an edge takeoff and one or more rotations called?",
    "ar": "في التزلج الفني، ماذا تُسمى القفزة التي تنطلق من حافة الشفرة وتتضمن دورانًا؟",
    "options": [
      "Pole",
      "Jump",
      "Conversion",
      "Teeing ground"
    ],
    "optionsAr": [
      "بولي",
      "جومب",
      "كونفيرسيون",
      "تييينج جرووند"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0410"
  },
  {
    "category": "Sports",
    "en": "In biathlon, which two disciplines are combined?",
    "ar": "في البياثلون، ما الرياضتان اللتان يتم الجمع بينهما؟",
    "options": [
      "Cross-country skiing and rifle shooting",
      "Wicket",
      "Turnover",
      "Spike"
    ],
    "optionsAr": [
      "كروسس-كوونتري سكيينج اند ريفلي سهووتينج",
      "ويككيت",
      "تورنوفير",
      "سبيكي"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0411"
  },
  {
    "category": "Sports",
    "en": "In triathlon, which three disciplines are combined?",
    "ar": "في الترايثلون، ما الرياضات الثلاث التي يتم الجمع بينها؟",
    "options": [
      "Swimming, cycling and running",
      "Starboard",
      "Let",
      "Strikeout"
    ],
    "optionsAr": [
      "سويممينج, كيكلينج اند روننينج",
      "ستاربوارد",
      "ليت",
      "ستريكيووت"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0412"
  },
  {
    "category": "Sports",
    "en": "In modern pentathlon, how many disciplines are combined?",
    "ar": "في الخماسي الحديث، كم رياضة يتم الجمع بينها؟",
    "options": [
      "Conversion",
      "Assist",
      "Break",
      "Five"
    ],
    "optionsAr": [
      "كونفيرسيون",
      "اسسيست",
      "برياك",
      "فيفي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0413"
  },
  {
    "category": "Sports",
    "en": "In decathlon, how many athletics events are combined?",
    "ar": "في العشاري، كم مسابقة من ألعاب القوى يتم الجمع بينها؟",
    "options": [
      "Net shot",
      "Starboard",
      "Ten",
      "Knockout"
    ],
    "optionsAr": [
      "نيت سهوت",
      "ستاربوارد",
      "تين",
      "كنوككووت"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0414"
  },
  {
    "category": "Sports",
    "en": "In heptathlon, how many athletics events are combined?",
    "ar": "في السباعي، كم مسابقة من ألعاب القوى يتم الجمع بينها؟",
    "options": [
      "Five",
      "Seven",
      "House",
      "Stick landing"
    ],
    "optionsAr": [
      "فيفي",
      "سيفين",
      "هووسي",
      "ستيكك لاندينج"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0415"
  },
  {
    "category": "Sports",
    "en": "In cricket, what is the player who delivers the ball called?",
    "ar": "في الكريكيت، ماذا يُسمى اللاعب الذي يرمي الكرة؟",
    "options": [
      "Teeing ground",
      "Ace",
      "Dobok",
      "Bowler"
    ],
    "optionsAr": [
      "تييينج جرووند",
      "اكي",
      "دوبوك",
      "بوولير"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0416"
  },
  {
    "category": "Sports",
    "en": "In baseball, what is the player who throws the ball to the batter called?",
    "ar": "في البيسبول، ماذا يُسمى اللاعب الذي يرمي الكرة نحو الضارب؟",
    "options": [
      "Backstroke",
      "Missed field goal",
      "Pitcher",
      "Goalkeeper"
    ],
    "optionsAr": [
      "باككستروكي",
      "ميسسيد فييلد جوال",
      "بيتكهير",
      "جوالكييبير"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0417"
  },
  {
    "category": "Sports",
    "en": "In baseball, what is the player who catches pitches behind home plate called?",
    "ar": "في البيسبول، ماذا يُسمى اللاعب الذي يستقبل الرميات خلف لوحة المنزل؟",
    "options": [
      "Ball",
      "Birdie",
      "Catcher",
      "Block"
    ],
    "optionsAr": [
      "الكرة",
      "بيرديي",
      "كاتكهير",
      "بلوكك"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0418"
  },
  {
    "category": "Sports",
    "en": "In football, what is the player who guards the goal called?",
    "ar": "في كرة القدم، ماذا يُسمى اللاعب الذي يحرس المرمى؟",
    "options": [
      "Goalkeeper",
      "Red card",
      "Green",
      "Starboard"
    ],
    "optionsAr": [
      "جوالكييبير",
      "ريد كارد",
      "جريين",
      "ستاربوارد"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0419"
  },
  {
    "category": "Sports",
    "en": "In tennis, what is a shot that wins the point without the opponent touching it called?",
    "ar": "في التنس، ماذا تُسمى الضربة التي تفوز بالنقطة دون أن يلمسها الخصم؟",
    "options": [
      "Ten",
      "Knockout",
      "Winner",
      "Breaststroke"
    ],
    "optionsAr": [
      "تين",
      "كنوككووت",
      "ويننير",
      "برياستستروكي"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0420"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Shawshank Redemption”?",
    "ar": "من الممثل الرئيسي في فيلم «The Shawshank Redemption»؟",
    "options": [
      "Tobey Maguire",
      "Anthony Gonzalez",
      "Tim Robbins",
      "Cillian Murphy"
    ],
    "optionsAr": [
      "توبيي ماجويري",
      "انتهوني جونزاليز",
      "تيم روببينس",
      "كيلليان موربهي"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0421"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Godfather”?",
    "ar": "من الممثل الرئيسي في فيلم «The Godfather»؟",
    "options": [
      "Marlon Brando",
      "Elijah Wood",
      "Benedict Cumberbatch",
      "Tom Hardy"
    ],
    "optionsAr": [
      "مارلون براندو",
      "يليجاه ووود",
      "بينيديكت كومبيرباتكه",
      "توم هاردي"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0422"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Dark Knight”?",
    "ar": "من الممثل الرئيسي في فيلم «The Dark Knight»؟",
    "options": [
      "Christian Bale",
      "Matt Damon",
      "Harrison Ford",
      "Matthew McConaughey"
    ],
    "optionsAr": [
      "كهريستيان بالي",
      "ماتت دامون",
      "هارريسون فورد",
      "ماتتهيو مككوناوجهيي"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0423"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Pulp Fiction”?",
    "ar": "من الممثل الرئيسي في فيلم «Pulp Fiction»؟",
    "options": [
      "Anthony Gonzalez",
      "Naomi Watts",
      "John Travolta",
      "Harrison Ford"
    ],
    "optionsAr": [
      "انتهوني جونزاليز",
      "ناومي واتتس",
      "جوهن ترافولتا",
      "هارريسون فورد"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0424"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Forrest Gump”?",
    "ar": "من الممثل الرئيسي في فيلم «Forrest Gump»؟",
    "options": [
      "Tim Robbins",
      "Yōji Matsuda",
      "Marlon Brando",
      "Tom Hanks"
    ],
    "optionsAr": [
      "تيم روببينس",
      "يōجي ماتسودا",
      "مارلون براندو",
      "توم هانكس"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0425"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Inception”?",
    "ar": "من الممثل الرئيسي في فيلم «Inception»؟",
    "options": [
      "Leonardo DiCaprio",
      "Michael J. Fox",
      "Macaulay Culkin",
      "Mike Myers"
    ],
    "optionsAr": [
      "ليوناردو ديكابريو",
      "ميكهايل ج. فوكس",
      "ماكاولاي كولكين",
      "ميكي مييرس"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0426"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Titanic”?",
    "ar": "من الممثل الرئيسي في فيلم «Titanic»؟",
    "options": [
      "Miles Teller",
      "Naomi Watts",
      "Leonardo DiCaprio",
      "Liam Neeson"
    ],
    "optionsAr": [
      "ميليس تيللير",
      "ناومي واتتس",
      "ليوناردو ديكابريو",
      "ليام نييسون"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0427"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Avatar”?",
    "ar": "من الممثل الرئيسي في فيلم «Avatar»؟",
    "options": [
      "Jim Carrey",
      "Miles Teller",
      "Sam Worthington",
      "Johnny Depp"
    ],
    "optionsAr": [
      "جيم كارريي",
      "ميليس تيللير",
      "سام وورتهينجتون",
      "جوهنني ديبب"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0428"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Jurassic Park”?",
    "ar": "من الممثل الرئيسي في فيلم «Jurassic Park»؟",
    "options": [
      "Leonardo DiCaprio",
      "Scott Weinger",
      "Sam Neill",
      "Benicio del Toro"
    ],
    "optionsAr": [
      "ليوناردو ديكابريو",
      "سكوتت ويينجير",
      "سام نييلل",
      "بينيكيو ديل تورو"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0429"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “E.T. the Extra-Terrestrial”?",
    "ar": "من الممثل الرئيسي في فيلم «E.T. the Extra-Terrestrial»؟",
    "options": [
      "Christian Bale",
      "Matt Damon",
      "Chadwick Boseman",
      "Henry Thomas"
    ],
    "optionsAr": [
      "كهريستيان بالي",
      "ماتت دامون",
      "كهادويكك بوسيمان",
      "هينري تهوماس"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0430"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Jaws”?",
    "ar": "من الممثل الرئيسي في فيلم «Jaws»؟",
    "options": [
      "Ben Burtt",
      "Elijah Wood",
      "Roy Scheider",
      "Benedict Cumberbatch"
    ],
    "optionsAr": [
      "بين بورتت",
      "يليجاه ووود",
      "روي سكهييدير",
      "بينيديكت كومبيرباتكه"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0431"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Schindler’s List”?",
    "ar": "من الممثل الرئيسي في فيلم «Schindler’s List»؟",
    "options": [
      "Liam Neeson",
      "Johnny Depp",
      "Paige O’Hara",
      "Tom Hardy"
    ],
    "optionsAr": [
      "ليام نييسون",
      "جوهنني ديبب",
      "بايجي و’هارا",
      "توم هاردي"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0432"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Saving Private Ryan”?",
    "ar": "من الممثل الرئيسي في فيلم «Saving Private Ryan»؟",
    "options": [
      "Chadwick Boseman",
      "Roy Scheider",
      "Harrison Ford",
      "Tom Hanks"
    ],
    "optionsAr": [
      "كهادويكك بوسيمان",
      "روي سكهييدير",
      "هارريسون فورد",
      "توم هانكس"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0433"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Back to the Future”?",
    "ar": "من الممثل الرئيسي في فيلم «Back to the Future»؟",
    "options": [
      "Kristen Bell",
      "Benicio del Toro",
      "Michael J. Fox",
      "Chris Hemsworth"
    ],
    "optionsAr": [
      "كريستين بيلل",
      "بينيكيو ديل تورو",
      "ميكهايل ج. فوكس",
      "كهريس هيمسوورته"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0434"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Cast Away”?",
    "ar": "من الممثل الرئيسي في فيلم «Cast Away»؟",
    "options": [
      "Tom Hanks",
      "Christian Bale",
      "Robert De Niro",
      "Fionn Whitehead"
    ],
    "optionsAr": [
      "توم هانكس",
      "كهريستيان بالي",
      "روبيرت دي نيرو",
      "فيونن وهيتيهياد"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0435"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Gladiator”?",
    "ar": "من الممثل الرئيسي في فيلم «Gladiator»؟",
    "options": [
      "Robin Williams",
      "Hugh Jackman",
      "Ben Burtt",
      "Russell Crowe"
    ],
    "optionsAr": [
      "روبين ويلليامس",
      "هوجه جاككمان",
      "بين بورتت",
      "روسسيلل كرووي"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0436"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Alien”?",
    "ar": "من الممثل الرئيسي في فيلم «Alien»؟",
    "options": [
      "Robert De Niro",
      "Sigourney Weaver",
      "Jack Black",
      "Sam Worthington"
    ],
    "optionsAr": [
      "روبيرت دي نيرو",
      "سيجوورنيي ويافير",
      "جاكك بلاكك",
      "سام وورتهينجتون"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0437"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Martian”?",
    "ar": "من الممثل الرئيسي في فيلم «The Martian»؟",
    "options": [
      "Ed Asner",
      "Yōji Matsuda",
      "Matt Damon",
      "Ralph Fiennes"
    ],
    "optionsAr": [
      "يد اسنير",
      "يōجي ماتسودا",
      "ماتت دامون",
      "رالبه فييننيس"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0438"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Blade Runner”?",
    "ar": "من الممثل الرئيسي في فيلم «Blade Runner»؟",
    "options": [
      "Ben Burtt",
      "Johnny Depp",
      "Tom Hanks",
      "Harrison Ford"
    ],
    "optionsAr": [
      "بين بورتت",
      "جوهنني ديبب",
      "توم هانكس",
      "هارريسون فورد"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0439"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Mad Max: Fury Road”?",
    "ar": "من الممثل الرئيسي في فيلم «Mad Max: Fury Road»؟",
    "options": [
      "Jack Black",
      "Tom Hardy",
      "Yōji Matsuda",
      "Martin Freeman"
    ],
    "optionsAr": [
      "جاكك بلاكك",
      "توم هاردي",
      "يōجي ماتسودا",
      "مارتين فرييمان"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0440"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Lord of the Rings: The Fellowship of the Ring”?",
    "ar": "من الممثل الرئيسي في فيلم «The Lord of the Rings: The Fellowship of the Ring»؟",
    "options": [
      "Amy Poehler",
      "Elijah Wood",
      "Russell Crowe",
      "Hugh Jackman"
    ],
    "optionsAr": [
      "امي بويهلير",
      "يليجاه ووود",
      "روسسيلل كرووي",
      "هوجه جاككمان"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0441"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Hobbit: An Unexpected Journey”?",
    "ar": "من الممثل الرئيسي في فيلم «The Hobbit: An Unexpected Journey»؟",
    "options": [
      "Henry Thomas",
      "Martin Freeman",
      "Yōji Matsuda",
      "Tom Hardy"
    ],
    "optionsAr": [
      "هينري تهوماس",
      "مارتين فرييمان",
      "يōجي ماتسودا",
      "توم هاردي"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0442"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “King Kong”?",
    "ar": "من الممثل الرئيسي في فيلم «King Kong»؟",
    "options": [
      "Naomi Watts",
      "Amy Poehler",
      "Kristen Bell",
      "Ed Asner"
    ],
    "optionsAr": [
      "ناومي واتتس",
      "امي بويهلير",
      "كريستين بيلل",
      "يد اسنير"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0443"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Spider-Man”?",
    "ar": "من الممثل الرئيسي في فيلم «Spider-Man»؟",
    "options": [
      "Tobey Maguire",
      "Paige O’Hara",
      "Harrison Ford",
      "Tim Robbins"
    ],
    "optionsAr": [
      "توبيي ماجويري",
      "بايجي و’هارا",
      "هارريسون فورد",
      "تيم روببينس"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0444"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Doctor Strange”?",
    "ar": "من الممثل الرئيسي في فيلم «Doctor Strange»؟",
    "options": [
      "Benedict Cumberbatch",
      "Chris Hemsworth",
      "Jim Carrey",
      "Miles Teller"
    ],
    "optionsAr": [
      "بينيديكت كومبيرباتكه",
      "كهريس هيمسوورته",
      "جيم كارريي",
      "ميليس تيللير"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0445"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Black Panther”?",
    "ar": "من الممثل الرئيسي في فيلم «Black Panther»؟",
    "options": [
      "Chadwick Boseman",
      "Matthew Broderick",
      "Daniel Radcliffe",
      "Liam Neeson"
    ],
    "optionsAr": [
      "كهادويكك بوسيمان",
      "ماتتهيو بروديريكك",
      "دانييل رادكليففي",
      "ليام نييسون"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0446"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Iron Man”?",
    "ar": "من الممثل الرئيسي في فيلم «Iron Man»؟",
    "options": [
      "Henry Thomas",
      "Robert Downey Jr.",
      "Daniel Radcliffe",
      "Naomi Watts"
    ],
    "optionsAr": [
      "هينري تهوماس",
      "روبيرت دوونيي جر.",
      "دانييل رادكليففي",
      "ناومي واتتس"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0447"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Avengers”?",
    "ar": "من الممثل الرئيسي في فيلم «The Avengers»؟",
    "options": [
      "Miles Teller",
      "Robert Downey Jr.",
      "Matt Damon",
      "Kristen Bell"
    ],
    "optionsAr": [
      "ميليس تيللير",
      "روبيرت دوونيي جر.",
      "ماتت دامون",
      "كريستين بيلل"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0448"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Guardians of the Galaxy”?",
    "ar": "من الممثل الرئيسي في فيلم «Guardians of the Galaxy»؟",
    "options": [
      "Chris Pratt",
      "Tobey Maguire",
      "Tom Hardy",
      "Auliʻi Cravalho"
    ],
    "optionsAr": [
      "كهريس براتت",
      "توبيي ماجويري",
      "توم هاردي",
      "اوليʻي كرافالهو"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0449"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Thor: Ragnarok”?",
    "ar": "من الممثل الرئيسي في فيلم «Thor: Ragnarok»؟",
    "options": [
      "Benicio del Toro",
      "Sigourney Weaver",
      "Marlon Brando",
      "Chris Hemsworth"
    ],
    "optionsAr": [
      "بينيكيو ديل تورو",
      "سيجوورنيي ويافير",
      "مارلون براندو",
      "كهريس هيمسوورته"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0450"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Captain America: The First Avenger”?",
    "ar": "من الممثل الرئيسي في فيلم «Captain America: The First Avenger»؟",
    "options": [
      "Chris Evans",
      "Ed Asner",
      "Daniel Radcliffe",
      "Scott Weinger"
    ],
    "optionsAr": [
      "كهريس يفانس",
      "يد اسنير",
      "دانييل رادكليففي",
      "سكوتت ويينجير"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0451"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Frozen”?",
    "ar": "من الممثل الرئيسي في فيلم «Frozen»؟",
    "options": [
      "Anthony Gonzalez",
      "Jim Carrey",
      "Cillian Murphy",
      "Kristen Bell"
    ],
    "optionsAr": [
      "انتهوني جونزاليز",
      "جيم كارريي",
      "كيلليان موربهي",
      "كريستين بيلل"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0452"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Moana”?",
    "ar": "من الممثل الرئيسي في فيلم «Moana»؟",
    "options": [
      "Albert Brooks",
      "Miles Teller",
      "Auliʻi Cravalho",
      "Matthew McConaughey"
    ],
    "optionsAr": [
      "البيرت برووكس",
      "ميليس تيللير",
      "اوليʻي كرافالهو",
      "ماتتهيو مككوناوجهيي"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0453"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Toy Story”?",
    "ar": "من الممثل الرئيسي في فيلم «Toy Story»؟",
    "options": [
      "Albert Brooks",
      "Harrison Ford",
      "Tom Hanks",
      "Johnny Depp"
    ],
    "optionsAr": [
      "البيرت برووكس",
      "هارريسون فورد",
      "توم هانكس",
      "جوهنني ديبب"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0454"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Finding Nemo”?",
    "ar": "من الممثل الرئيسي في فيلم «Finding Nemo»؟",
    "options": [
      "Robert Downey Jr.",
      "Albert Brooks",
      "Chris Pratt",
      "Elijah Wood"
    ],
    "optionsAr": [
      "روبيرت دوونيي جر.",
      "البيرت برووكس",
      "كهريس براتت",
      "يليجاه ووود"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0455"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Up”?",
    "ar": "من الممثل الرئيسي في فيلم «Up»؟",
    "options": [
      "Jack Black",
      "Ed Asner",
      "Chris Evans",
      "Cillian Murphy"
    ],
    "optionsAr": [
      "جاكك بلاكك",
      "يد اسنير",
      "كهريس يفانس",
      "كيلليان موربهي"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0456"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Inside Out”?",
    "ar": "من الممثل الرئيسي في فيلم «Inside Out»؟",
    "options": [
      "Miles Teller",
      "Benedict Cumberbatch",
      "Albert Brooks",
      "Amy Poehler"
    ],
    "optionsAr": [
      "ميليس تيللير",
      "بينيديكت كومبيرباتكه",
      "البيرت برووكس",
      "امي بويهلير"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0457"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Coco”?",
    "ar": "من الممثل الرئيسي في فيلم «Coco»؟",
    "options": [
      "Roy Scheider",
      "Matthew Broderick",
      "Anthony Gonzalez",
      "Kristen Bell"
    ],
    "optionsAr": [
      "روي سكهييدير",
      "ماتتهيو بروديريكك",
      "انتهوني جونزاليز",
      "كريستين بيلل"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0458"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Ratatouille”?",
    "ar": "من الممثل الرئيسي في فيلم «Ratatouille»؟",
    "options": [
      "Christian Bale",
      "Matt Damon",
      "Tom Hanks",
      "Patton Oswalt"
    ],
    "optionsAr": [
      "كهريستيان بالي",
      "ماتت دامون",
      "توم هانكس",
      "باتتون وسوالت"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0459"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “WALL-E”?",
    "ar": "من الممثل الرئيسي في فيلم «WALL-E»؟",
    "options": [
      "Ben Burtt",
      "Benedict Cumberbatch",
      "Jack Black",
      "Chris Pratt"
    ],
    "optionsAr": [
      "بين بورتت",
      "بينيديكت كومبيرباتكه",
      "جاكك بلاكك",
      "كهريس براتت"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0460"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Spirited Away”?",
    "ar": "من الممثل الرئيسي في فيلم «Spirited Away»؟",
    "options": [
      "Ryan Gosling",
      "Martin Freeman",
      "Rumi Hiiragi",
      "Liam Neeson"
    ],
    "optionsAr": [
      "ريان جوسلينج",
      "مارتين فرييمان",
      "رومي هييراجي",
      "ليام نييسون"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0461"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “My Neighbor Totoro”?",
    "ar": "من الممثل الرئيسي في فيلم «My Neighbor Totoro»؟",
    "options": [
      "Sam Neill",
      "Henry Thomas",
      "Noriko Hidaka",
      "Miles Teller"
    ],
    "optionsAr": [
      "سام نييلل",
      "هينري تهوماس",
      "نوريكو هيداكا",
      "ميليس تيللير"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0462"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Princess Mononoke”?",
    "ar": "من الممثل الرئيسي في فيلم «Princess Mononoke»؟",
    "options": [
      "Harrison Ford",
      "Matt Damon",
      "Yōji Matsuda",
      "Chris Evans"
    ],
    "optionsAr": [
      "هارريسون فورد",
      "ماتت دامون",
      "يōجي ماتسودا",
      "كهريس يفانس"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0463"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Lion King”?",
    "ar": "من الممثل الرئيسي في فيلم «The Lion King»؟",
    "options": [
      "Kristen Bell",
      "Robert Downey Jr.",
      "Matthew Broderick",
      "Paige O’Hara"
    ],
    "optionsAr": [
      "كريستين بيلل",
      "روبيرت دوونيي جر.",
      "ماتتهيو بروديريكك",
      "بايجي و’هارا"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0464"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Aladdin”?",
    "ar": "من الممثل الرئيسي في فيلم «Aladdin»؟",
    "options": [
      "Yōji Matsuda",
      "Roy Scheider",
      "Scott Weinger",
      "Daniel Radcliffe"
    ],
    "optionsAr": [
      "يōجي ماتسودا",
      "روي سكهييدير",
      "سكوتت ويينجير",
      "دانييل رادكليففي"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0465"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Beauty and the Beast”?",
    "ar": "من الممثل الرئيسي في فيلم «Beauty and the Beast»؟",
    "options": [
      "Paige O’Hara",
      "Anthony Gonzalez",
      "Henry Thomas",
      "Cillian Murphy"
    ],
    "optionsAr": [
      "بايجي و’هارا",
      "انتهوني جونزاليز",
      "هينري تهوماس",
      "كيلليان موربهي"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0466"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Shrek”?",
    "ar": "من الممثل الرئيسي في فيلم «Shrek»؟",
    "options": [
      "Patton Oswalt",
      "Mike Myers",
      "Sam Neill",
      "Ryan Gosling"
    ],
    "optionsAr": [
      "باتتون وسوالت",
      "ميكي مييرس",
      "سام نييلل",
      "ريان جوسلينج"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0467"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Kung Fu Panda”?",
    "ar": "من الممثل الرئيسي في فيلم «Kung Fu Panda»؟",
    "options": [
      "Matthew Broderick",
      "Albert Brooks",
      "Jack Black",
      "Ryan Gosling"
    ],
    "optionsAr": [
      "ماتتهيو بروديريكك",
      "البيرت برووكس",
      "جاكك بلاكك",
      "ريان جوسلينج"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0468"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “How to Train Your Dragon”?",
    "ar": "من الممثل الرئيسي في فيلم «How to Train Your Dragon»؟",
    "options": [
      "Sigourney Weaver",
      "Jay Baruchel",
      "Naomi Watts",
      "Tim Robbins"
    ],
    "optionsAr": [
      "سيجوورنيي ويافير",
      "جاي باروكهيل",
      "ناومي واتتس",
      "تيم روببينس"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0469"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Despicable Me”?",
    "ar": "من الممثل الرئيسي في فيلم «Despicable Me»؟",
    "options": [
      "Fionn Whitehead",
      "Matthew Broderick",
      "Amy Poehler",
      "Steve Carell"
    ],
    "optionsAr": [
      "فيونن وهيتيهياد",
      "ماتتهيو بروديريكك",
      "امي بويهلير",
      "ستيفي كاريلل"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0470"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Home Alone”?",
    "ar": "من الممثل الرئيسي في فيلم «Home Alone»؟",
    "options": [
      "Chadwick Boseman",
      "Chris Hemsworth",
      "Macaulay Culkin",
      "Robin Williams"
    ],
    "optionsAr": [
      "كهادويكك بوسيمان",
      "كهريس هيمسوورته",
      "ماكاولاي كولكين",
      "روبين ويلليامس"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0471"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Mrs. Doubtfire”?",
    "ar": "من الممثل الرئيسي في فيلم «Mrs. Doubtfire»؟",
    "options": [
      "Robin Williams",
      "Macaulay Culkin",
      "Sam Worthington",
      "Ryan Gosling"
    ],
    "optionsAr": [
      "روبين ويلليامس",
      "ماكاولاي كولكين",
      "سام وورتهينجتون",
      "ريان جوسلينج"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0472"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Harry Potter and the Sorcerer’s Stone”?",
    "ar": "من الممثل الرئيسي في فيلم «Harry Potter and the Sorcerer’s Stone»؟",
    "options": [
      "Naomi Watts",
      "Johnny Depp",
      "Daniel Radcliffe",
      "Jay Baruchel"
    ],
    "optionsAr": [
      "ناومي واتتس",
      "جوهنني ديبب",
      "دانييل رادكليففي",
      "جاي باروكهيل"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0473"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Harry Potter and the Chamber of Secrets”?",
    "ar": "من الممثل الرئيسي في فيلم «Harry Potter and the Chamber of Secrets»؟",
    "options": [
      "Chris Hemsworth",
      "Daniel Radcliffe",
      "Naomi Watts",
      "Roy Scheider"
    ],
    "optionsAr": [
      "كهريس هيمسوورته",
      "دانييل رادكليففي",
      "ناومي واتتس",
      "روي سكهييدير"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0474"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Pirates of the Caribbean: The Curse of the Black Pearl”?",
    "ar": "من الممثل الرئيسي في فيلم «Pirates of the Caribbean: The Curse of the Black Pearl»؟",
    "options": [
      "Michael J. Fox",
      "Noriko Hidaka",
      "Jack Black",
      "Johnny Depp"
    ],
    "optionsAr": [
      "ميكهايل ج. فوكس",
      "نوريكو هيداكا",
      "جاكك بلاكك",
      "جوهنني ديبب"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0475"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Mask”?",
    "ar": "من الممثل الرئيسي في فيلم «The Mask»؟",
    "options": [
      "Jim Carrey",
      "Paige O’Hara",
      "Sam Worthington",
      "Ray Liotta"
    ],
    "optionsAr": [
      "جيم كارريي",
      "بايجي و’هارا",
      "سام وورتهينجتون",
      "راي ليوتتا"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0476"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Truman Show”?",
    "ar": "من الممثل الرئيسي في فيلم «The Truman Show»؟",
    "options": [
      "Jim Carrey",
      "Chris Evans",
      "Robert De Niro",
      "Amy Poehler"
    ],
    "optionsAr": [
      "جيم كارريي",
      "كهريس يفانس",
      "روبيرت دي نيرو",
      "امي بويهلير"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0477"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Grand Budapest Hotel”?",
    "ar": "من الممثل الرئيسي في فيلم «The Grand Budapest Hotel»؟",
    "options": [
      "Harrison Ford",
      "Tom Hanks",
      "Fionn Whitehead",
      "Ralph Fiennes"
    ],
    "optionsAr": [
      "هارريسون فورد",
      "توم هانكس",
      "فيونن وهيتيهياد",
      "رالبه فييننيس"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0478"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The French Dispatch”?",
    "ar": "من الممثل الرئيسي في فيلم «The French Dispatch»؟",
    "options": [
      "Robert De Niro",
      "Noriko Hidaka",
      "Benicio del Toro",
      "Ryan Gosling"
    ],
    "optionsAr": [
      "روبيرت دي نيرو",
      "نوريكو هيداكا",
      "بينيكيو ديل تورو",
      "ريان جوسلينج"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0479"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “La La Land”?",
    "ar": "من الممثل الرئيسي في فيلم «La La Land»؟",
    "options": [
      "Ralph Fiennes",
      "Robert Downey Jr.",
      "Chris Evans",
      "Ryan Gosling"
    ],
    "optionsAr": [
      "رالبه فييننيس",
      "روبيرت دوونيي جر.",
      "كهريس يفانس",
      "ريان جوسلينج"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0480"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Whiplash”?",
    "ar": "من الممثل الرئيسي في فيلم «Whiplash»؟",
    "options": [
      "Tom Hanks",
      "Liam Neeson",
      "Yōji Matsuda",
      "Miles Teller"
    ],
    "optionsAr": [
      "توم هانكس",
      "ليام نييسون",
      "يōجي ماتسودا",
      "ميليس تيللير"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0481"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Interstellar”?",
    "ar": "من الممثل الرئيسي في فيلم «Interstellar»؟",
    "options": [
      "Paige O’Hara",
      "Matthew McConaughey",
      "Miles Teller",
      "Martin Freeman"
    ],
    "optionsAr": [
      "بايجي و’هارا",
      "ماتتهيو مككوناوجهيي",
      "ميليس تيللير",
      "مارتين فرييمان"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0482"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Dunkirk”?",
    "ar": "من الممثل الرئيسي في فيلم «Dunkirk»؟",
    "options": [
      "Sigourney Weaver",
      "Scott Weinger",
      "Patton Oswalt",
      "Fionn Whitehead"
    ],
    "optionsAr": [
      "سيجوورنيي ويافير",
      "سكوتت ويينجير",
      "باتتون وسوالت",
      "فيونن وهيتيهياد"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0483"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Oppenheimer”?",
    "ar": "من الممثل الرئيسي في فيلم «Oppenheimer»؟",
    "options": [
      "Miles Teller",
      "Sigourney Weaver",
      "Kristen Bell",
      "Cillian Murphy"
    ],
    "optionsAr": [
      "ميليس تيللير",
      "سيجوورنيي ويافير",
      "كريستين بيلل",
      "كيلليان موربهي"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0484"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Prestige”?",
    "ar": "من الممثل الرئيسي في فيلم «The Prestige»؟",
    "options": [
      "Hugh Jackman",
      "Rumi Hiiragi",
      "Noriko Hidaka",
      "Albert Brooks"
    ],
    "optionsAr": [
      "هوجه جاككمان",
      "رومي هييراجي",
      "نوريكو هيداكا",
      "البيرت برووكس"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0485"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Departed”?",
    "ar": "من الممثل الرئيسي في فيلم «The Departed»؟",
    "options": [
      "Ralph Fiennes",
      "Leonardo DiCaprio",
      "Scott Weinger",
      "Matthew Broderick"
    ],
    "optionsAr": [
      "رالبه فييننيس",
      "ليوناردو ديكابريو",
      "سكوتت ويينجير",
      "ماتتهيو بروديريكك"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0486"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Goodfellas”?",
    "ar": "من الممثل الرئيسي في فيلم «Goodfellas»؟",
    "options": [
      "Noriko Hidaka",
      "Ray Liotta",
      "Elijah Wood",
      "Robin Williams"
    ],
    "optionsAr": [
      "نوريكو هيداكا",
      "راي ليوتتا",
      "يليجاه ووود",
      "روبين ويلليامس"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0487"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Wolf of Wall Street”?",
    "ar": "من الممثل الرئيسي في فيلم «The Wolf of Wall Street»؟",
    "options": [
      "Amy Poehler",
      "Leonardo DiCaprio",
      "Ryan Gosling",
      "Johnny Depp"
    ],
    "optionsAr": [
      "امي بويهلير",
      "ليوناردو ديكابريو",
      "ريان جوسلينج",
      "جوهنني ديبب"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0488"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Irishman”?",
    "ar": "من الممثل الرئيسي في فيلم «The Irishman»؟",
    "options": [
      "Anthony Gonzalez",
      "Jay Baruchel",
      "Robert De Niro",
      "John Travolta"
    ],
    "optionsAr": [
      "انتهوني جونزاليز",
      "جاي باروكهيل",
      "روبيرت دي نيرو",
      "جوهن ترافولتا"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0489"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Taxi Driver”?",
    "ar": "من الممثل الرئيسي في فيلم «Taxi Driver»؟",
    "options": [
      "Henry Thomas",
      "Auliʻi Cravalho",
      "Matthew McConaughey",
      "Robert De Niro"
    ],
    "optionsAr": [
      "هينري تهوماس",
      "اوليʻي كرافالهو",
      "ماتتهيو مككوناوجهيي",
      "روبيرت دي نيرو"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0490"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Shawshank Redemption”?",
    "ar": "من أخرج فيلم «The Shawshank Redemption»؟",
    "options": [
      "Steven Spielberg",
      "John Lasseter",
      "Ron Clements and John Musker",
      "Frank Darabont"
    ],
    "optionsAr": [
      "ستيفين سبييلبيرج",
      "جوهن لاسسيتير",
      "رون كليمينتس اند جوهن موسكير",
      "فرانك دارابونت"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0491"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Godfather”?",
    "ar": "من أخرج فيلم «The Godfather»؟",
    "options": [
      "Wes Anderson",
      "Chris Columbus",
      "Quentin Tarantino",
      "Francis Ford Coppola"
    ],
    "optionsAr": [
      "ويس انديرسون",
      "كهريس كولومبوس",
      "قوينتين تارانتينو",
      "فرانكيس فورد كوببولا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0492"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Dark Knight”?",
    "ar": "من أخرج فيلم «The Dark Knight»؟",
    "options": [
      "Frank Darabont",
      "Andrew Stanton",
      "Christopher Nolan",
      "Steven Spielberg"
    ],
    "optionsAr": [
      "فرانك دارابونت",
      "اندريو ستانتون",
      "كهريستوبهير نولان",
      "ستيفين سبييلبيرج"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0493"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Pulp Fiction”?",
    "ar": "من أخرج فيلم «Pulp Fiction»؟",
    "options": [
      "Jon Favreau",
      "Quentin Tarantino",
      "Gary Trousdale and Kirk Wise",
      "Gore Verbinski"
    ],
    "optionsAr": [
      "جون فافرياو",
      "قوينتين تارانتينو",
      "جاري ترووسدالي اند كيرك ويسي",
      "جوري فيربينسكي"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0494"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Forrest Gump”?",
    "ar": "من أخرج فيلم «Forrest Gump»؟",
    "options": [
      "George Miller",
      "Pete Docter",
      "Dean DeBlois and Chris Sanders",
      "Robert Zemeckis"
    ],
    "optionsAr": [
      "جيورجي ميللير",
      "بيتي دوكتير",
      "ديان ديبلويس اند كهريس سانديرس",
      "روبيرت زيميككيس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0495"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Inception”?",
    "ar": "من أخرج فيلم «Inception»؟",
    "options": [
      "Mark Osborne and John Stevenson",
      "Joe Johnston",
      "Christopher Nolan",
      "Jon Favreau"
    ],
    "optionsAr": [
      "مارك وسبورني اند جوهن ستيفينسون",
      "جوي جوهنستون",
      "كهريستوبهير نولان",
      "جون فافرياو"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0496"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Titanic”?",
    "ar": "من أخرج فيلم «Titanic»؟",
    "options": [
      "Ron Clements and John Musker",
      "Christopher Nolan",
      "Gary Trousdale and Kirk Wise",
      "James Cameron"
    ],
    "optionsAr": [
      "رون كليمينتس اند جوهن موسكير",
      "كهريستوبهير نولان",
      "جاري ترووسدالي اند كيرك ويسي",
      "جاميس كاميرون"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0497"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Avatar”?",
    "ar": "من أخرج فيلم «Avatar»؟",
    "options": [
      "Mark Osborne and John Stevenson",
      "Gore Verbinski",
      "Dean DeBlois and Chris Sanders",
      "James Cameron"
    ],
    "optionsAr": [
      "مارك وسبورني اند جوهن ستيفينسون",
      "جوري فيربينسكي",
      "ديان ديبلويس اند كهريس سانديرس",
      "جاميس كاميرون"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0498"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Jurassic Park”?",
    "ar": "من أخرج فيلم «Jurassic Park»؟",
    "options": [
      "Taika Waititi",
      "Pete Docter",
      "Steven Spielberg",
      "Christopher Nolan"
    ],
    "optionsAr": [
      "تايكا وايتيتي",
      "بيتي دوكتير",
      "ستيفين سبييلبيرج",
      "كهريستوبهير نولان"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0499"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “E.T. the Extra-Terrestrial”?",
    "ar": "من أخرج فيلم «E.T. the Extra-Terrestrial»؟",
    "options": [
      "James Cameron",
      "Steven Spielberg",
      "Chuck Russell",
      "George Miller"
    ],
    "optionsAr": [
      "جاميس كاميرون",
      "ستيفين سبييلبيرج",
      "كهوكك روسسيلل",
      "جيورجي ميللير"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0500"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Jaws”?",
    "ar": "من أخرج فيلم «Jaws»؟",
    "options": [
      "Martin Scorsese",
      "Scott Derrickson",
      "James Cameron",
      "Steven Spielberg"
    ],
    "optionsAr": [
      "مارتين سكورسيسي",
      "سكوتت ديرريككسون",
      "جاميس كاميرون",
      "ستيفين سبييلبيرج"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0501"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Schindler’s List”?",
    "ar": "من أخرج فيلم «Schindler’s List»؟",
    "options": [
      "Francis Ford Coppola",
      "Christopher Nolan",
      "Andrew Adamson and Vicky Jenson",
      "Steven Spielberg"
    ],
    "optionsAr": [
      "فرانكيس فورد كوببولا",
      "كهريستوبهير نولان",
      "اندريو ادامسون اند فيككي جينسون",
      "ستيفين سبييلبيرج"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0502"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Saving Private Ryan”?",
    "ar": "من أخرج فيلم «Saving Private Ryan»؟",
    "options": [
      "Peter Weir",
      "Steven Spielberg",
      "Chuck Russell",
      "Joe Johnston"
    ],
    "optionsAr": [
      "بيتير ويير",
      "ستيفين سبييلبيرج",
      "كهوكك روسسيلل",
      "جوي جوهنستون"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0503"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Back to the Future”?",
    "ar": "من أخرج فيلم «Back to the Future»؟",
    "options": [
      "Gore Verbinski",
      "Robert Zemeckis",
      "Frank Darabont",
      "Chris Buck and Jennifer Lee"
    ],
    "optionsAr": [
      "جوري فيربينسكي",
      "روبيرت زيميككيس",
      "فرانك دارابونت",
      "كهريس بوكك اند جيننيفير ليي"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0504"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Cast Away”?",
    "ar": "من أخرج فيلم «Cast Away»؟",
    "options": [
      "John Lasseter",
      "Francis Ford Coppola",
      "Robert Zemeckis",
      "Joss Whedon"
    ],
    "optionsAr": [
      "جوهن لاسسيتير",
      "فرانكيس فورد كوببولا",
      "روبيرت زيميككيس",
      "جوسس وهيدون"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0505"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Gladiator”?",
    "ar": "من أخرج فيلم «Gladiator»؟",
    "options": [
      "Mark Osborne and John Stevenson",
      "Ridley Scott",
      "Brad Bird",
      "Peter Weir"
    ],
    "optionsAr": [
      "مارك وسبورني اند جوهن ستيفينسون",
      "ريدليي سكوتت",
      "براد بيرد",
      "بيتير ويير"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0506"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Alien”?",
    "ar": "من أخرج فيلم «Alien»؟",
    "options": [
      "Wes Anderson",
      "Chris Columbus",
      "Pete Docter",
      "Ridley Scott"
    ],
    "optionsAr": [
      "ويس انديرسون",
      "كهريس كولومبوس",
      "بيتي دوكتير",
      "ريدليي سكوتت"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0507"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Martian”?",
    "ar": "من أخرج فيلم «The Martian»؟",
    "options": [
      "Scott Derrickson",
      "Steven Spielberg",
      "Andrew Stanton",
      "Ridley Scott"
    ],
    "optionsAr": [
      "سكوتت ديرريككسون",
      "ستيفين سبييلبيرج",
      "اندريو ستانتون",
      "ريدليي سكوتت"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0508"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Blade Runner”?",
    "ar": "من أخرج فيلم «Blade Runner»؟",
    "options": [
      "Quentin Tarantino",
      "Ridley Scott",
      "Peter Weir",
      "John Lasseter"
    ],
    "optionsAr": [
      "قوينتين تارانتينو",
      "ريدليي سكوتت",
      "بيتير ويير",
      "جوهن لاسسيتير"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0509"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Mad Max: Fury Road”?",
    "ar": "من أخرج فيلم «Mad Max: Fury Road»؟",
    "options": [
      "Chuck Russell",
      "George Miller",
      "Wes Anderson",
      "Christopher Nolan"
    ],
    "optionsAr": [
      "كهوكك روسسيلل",
      "جيورجي ميللير",
      "ويس انديرسون",
      "كهريستوبهير نولان"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0510"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Lord of the Rings: The Fellowship of the Ring”?",
    "ar": "من أخرج فيلم «The Lord of the Rings: The Fellowship of the Ring»؟",
    "options": [
      "Joss Whedon",
      "Peter Jackson",
      "Brad Bird",
      "Taika Waititi"
    ],
    "optionsAr": [
      "جوسس وهيدون",
      "بيتير جاككسون",
      "براد بيرد",
      "تايكا وايتيتي"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0511"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Hobbit: An Unexpected Journey”?",
    "ar": "من أخرج فيلم «The Hobbit: An Unexpected Journey»؟",
    "options": [
      "Jon Favreau",
      "Peter Jackson",
      "Andrew Adamson and Vicky Jenson",
      "Peter Weir"
    ],
    "optionsAr": [
      "جون فافرياو",
      "بيتير جاككسون",
      "اندريو ادامسون اند فيككي جينسون",
      "بيتير ويير"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0512"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “King Kong”?",
    "ar": "من أخرج فيلم «King Kong»؟",
    "options": [
      "James Cameron",
      "Peter Jackson",
      "Christopher Nolan",
      "John Lasseter"
    ],
    "optionsAr": [
      "جاميس كاميرون",
      "بيتير جاككسون",
      "كهريستوبهير نولان",
      "جوهن لاسسيتير"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0513"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Spider-Man”?",
    "ar": "من أخرج فيلم «Spider-Man»؟",
    "options": [
      "Steven Spielberg",
      "Sam Raimi",
      "Gary Trousdale and Kirk Wise",
      "Andrew Stanton"
    ],
    "optionsAr": [
      "ستيفين سبييلبيرج",
      "سام رايمي",
      "جاري ترووسدالي اند كيرك ويسي",
      "اندريو ستانتون"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0514"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Doctor Strange”?",
    "ar": "من أخرج فيلم «Doctor Strange»؟",
    "options": [
      "Christopher Nolan",
      "Chris Columbus",
      "Francis Ford Coppola",
      "Scott Derrickson"
    ],
    "optionsAr": [
      "كهريستوبهير نولان",
      "كهريس كولومبوس",
      "فرانكيس فورد كوببولا",
      "سكوتت ديرريككسون"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0515"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Black Panther”?",
    "ar": "من أخرج فيلم «Black Panther»؟",
    "options": [
      "Hayao Miyazaki",
      "Ryan Coogler",
      "Taika Waititi",
      "Sam Raimi"
    ],
    "optionsAr": [
      "هاياو مييازاكي",
      "ريان كووجلير",
      "تايكا وايتيتي",
      "سام رايمي"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0516"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Iron Man”?",
    "ar": "من أخرج فيلم «Iron Man»؟",
    "options": [
      "Jon Favreau",
      "Peter Weir",
      "Wes Anderson",
      "Andrew Stanton"
    ],
    "optionsAr": [
      "جون فافرياو",
      "بيتير ويير",
      "ويس انديرسون",
      "اندريو ستانتون"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0517"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Avengers”?",
    "ar": "من أخرج فيلم «The Avengers»؟",
    "options": [
      "Sam Raimi",
      "Joss Whedon",
      "Francis Ford Coppola",
      "Brad Bird"
    ],
    "optionsAr": [
      "سام رايمي",
      "جوسس وهيدون",
      "فرانكيس فورد كوببولا",
      "براد بيرد"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0518"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Guardians of the Galaxy”?",
    "ar": "من أخرج فيلم «Guardians of the Galaxy»؟",
    "options": [
      "Peter Weir",
      "Lee Unkrich",
      "Martin Scorsese",
      "James Gunn"
    ],
    "optionsAr": [
      "بيتير ويير",
      "ليي ونكريكه",
      "مارتين سكورسيسي",
      "جاميس جونن"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0519"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Thor: Ragnarok”?",
    "ar": "من أخرج فيلم «Thor: Ragnarok»؟",
    "options": [
      "Taika Waititi",
      "Joss Whedon",
      "Jon Favreau",
      "Gary Trousdale and Kirk Wise"
    ],
    "optionsAr": [
      "تايكا وايتيتي",
      "جوسس وهيدون",
      "جون فافرياو",
      "جاري ترووسدالي اند كيرك ويسي"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0520"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Captain America: The First Avenger”?",
    "ar": "من أخرج فيلم «Captain America: The First Avenger»؟",
    "options": [
      "Joe Johnston",
      "Steven Spielberg",
      "Frank Darabont",
      "Chris Columbus"
    ],
    "optionsAr": [
      "جوي جوهنستون",
      "ستيفين سبييلبيرج",
      "فرانك دارابونت",
      "كهريس كولومبوس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0521"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Frozen”?",
    "ar": "من أخرج فيلم «Frozen»؟",
    "options": [
      "Roger Allers and Rob Minkoff",
      "Chris Buck and Jennifer Lee",
      "John Lasseter",
      "Wes Anderson"
    ],
    "optionsAr": [
      "روجير الليرس اند روب مينكوفف",
      "كهريس بوكك اند جيننيفير ليي",
      "جوهن لاسسيتير",
      "ويس انديرسون"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0522"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Moana”?",
    "ar": "من أخرج فيلم «Moana»؟",
    "options": [
      "Francis Ford Coppola",
      "Frank Darabont",
      "Ron Clements and John Musker",
      "Wes Anderson"
    ],
    "optionsAr": [
      "فرانكيس فورد كوببولا",
      "فرانك دارابونت",
      "رون كليمينتس اند جوهن موسكير",
      "ويس انديرسون"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0523"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Toy Story”?",
    "ar": "من أخرج فيلم «Toy Story»؟",
    "options": [
      "Chuck Russell",
      "Mark Osborne and John Stevenson",
      "John Lasseter",
      "Peter Jackson"
    ],
    "optionsAr": [
      "كهوكك روسسيلل",
      "مارك وسبورني اند جوهن ستيفينسون",
      "جوهن لاسسيتير",
      "بيتير جاككسون"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0524"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Finding Nemo”?",
    "ar": "من أخرج فيلم «Finding Nemo»؟",
    "options": [
      "Peter Weir",
      "Scott Derrickson",
      "Andrew Stanton",
      "Francis Ford Coppola"
    ],
    "optionsAr": [
      "بيتير ويير",
      "سكوتت ديرريككسون",
      "اندريو ستانتون",
      "فرانكيس فورد كوببولا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0525"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Up”?",
    "ar": "من أخرج فيلم «Up»؟",
    "options": [
      "Ridley Scott",
      "Gary Trousdale and Kirk Wise",
      "Pete Docter",
      "Gore Verbinski"
    ],
    "optionsAr": [
      "ريدليي سكوتت",
      "جاري ترووسدالي اند كيرك ويسي",
      "بيتي دوكتير",
      "جوري فيربينسكي"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0526"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Inside Out”?",
    "ar": "من أخرج فيلم «Inside Out»؟",
    "options": [
      "Gary Trousdale and Kirk Wise",
      "Mark Osborne and John Stevenson",
      "John Lasseter",
      "Pete Docter"
    ],
    "optionsAr": [
      "جاري ترووسدالي اند كيرك ويسي",
      "مارك وسبورني اند جوهن ستيفينسون",
      "جوهن لاسسيتير",
      "بيتي دوكتير"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0527"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Coco”?",
    "ar": "من أخرج فيلم «Coco»؟",
    "options": [
      "Ridley Scott",
      "Sam Raimi",
      "Mark Osborne and John Stevenson",
      "Lee Unkrich"
    ],
    "optionsAr": [
      "ريدليي سكوتت",
      "سام رايمي",
      "مارك وسبورني اند جوهن ستيفينسون",
      "ليي ونكريكه"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0528"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Ratatouille”?",
    "ar": "من أخرج فيلم «Ratatouille»؟",
    "options": [
      "Brad Bird",
      "Gore Verbinski",
      "Peter Weir",
      "Peter Jackson"
    ],
    "optionsAr": [
      "براد بيرد",
      "جوري فيربينسكي",
      "بيتير ويير",
      "بيتير جاككسون"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0529"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “WALL-E”?",
    "ar": "من أخرج فيلم «WALL-E»؟",
    "options": [
      "Christopher Nolan",
      "Ryan Coogler",
      "Andrew Stanton",
      "Chris Columbus"
    ],
    "optionsAr": [
      "كهريستوبهير نولان",
      "ريان كووجلير",
      "اندريو ستانتون",
      "كهريس كولومبوس"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0530"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Spirited Away”?",
    "ar": "من أخرج فيلم «Spirited Away»؟",
    "options": [
      "James Cameron",
      "Ryan Coogler",
      "Hayao Miyazaki",
      "Steven Spielberg"
    ],
    "optionsAr": [
      "جاميس كاميرون",
      "ريان كووجلير",
      "هاياو مييازاكي",
      "ستيفين سبييلبيرج"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0531"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “My Neighbor Totoro”?",
    "ar": "من أخرج فيلم «My Neighbor Totoro»؟",
    "options": [
      "Martin Scorsese",
      "Andrew Stanton",
      "Ridley Scott",
      "Hayao Miyazaki"
    ],
    "optionsAr": [
      "مارتين سكورسيسي",
      "اندريو ستانتون",
      "ريدليي سكوتت",
      "هاياو مييازاكي"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0532"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Princess Mononoke”?",
    "ar": "من أخرج فيلم «Princess Mononoke»؟",
    "options": [
      "Wes Anderson",
      "Ryan Coogler",
      "Hayao Miyazaki",
      "Peter Jackson"
    ],
    "optionsAr": [
      "ويس انديرسون",
      "ريان كووجلير",
      "هاياو مييازاكي",
      "بيتير جاككسون"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0533"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Lion King”?",
    "ar": "من أخرج فيلم «The Lion King»؟",
    "options": [
      "Frank Darabont",
      "John Lasseter",
      "Joe Johnston",
      "Roger Allers and Rob Minkoff"
    ],
    "optionsAr": [
      "فرانك دارابونت",
      "جوهن لاسسيتير",
      "جوي جوهنستون",
      "روجير الليرس اند روب مينكوفف"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0534"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Aladdin”?",
    "ar": "من أخرج فيلم «Aladdin»؟",
    "options": [
      "Pierre Coffin and Chris Renaud",
      "Ron Clements and John Musker",
      "Brad Bird",
      "Peter Weir"
    ],
    "optionsAr": [
      "بييرري كوففين اند كهريس ريناود",
      "رون كليمينتس اند جوهن موسكير",
      "براد بيرد",
      "بيتير ويير"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0535"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Beauty and the Beast”?",
    "ar": "من أخرج فيلم «Beauty and the Beast»؟",
    "options": [
      "Frank Darabont",
      "Ridley Scott",
      "Scott Derrickson",
      "Gary Trousdale and Kirk Wise"
    ],
    "optionsAr": [
      "فرانك دارابونت",
      "ريدليي سكوتت",
      "سكوتت ديرريككسون",
      "جاري ترووسدالي اند كيرك ويسي"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0536"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Shrek”?",
    "ar": "من أخرج فيلم «Shrek»؟",
    "options": [
      "Joe Johnston",
      "Brad Bird",
      "Lee Unkrich",
      "Andrew Adamson and Vicky Jenson"
    ],
    "optionsAr": [
      "جوي جوهنستون",
      "براد بيرد",
      "ليي ونكريكه",
      "اندريو ادامسون اند فيككي جينسون"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0537"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Kung Fu Panda”?",
    "ar": "من أخرج فيلم «Kung Fu Panda»؟",
    "options": [
      "Mark Osborne and John Stevenson",
      "Peter Weir",
      "Chris Buck and Jennifer Lee",
      "James Cameron"
    ],
    "optionsAr": [
      "مارك وسبورني اند جوهن ستيفينسون",
      "بيتير ويير",
      "كهريس بوكك اند جيننيفير ليي",
      "جاميس كاميرون"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0538"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “How to Train Your Dragon”?",
    "ar": "من أخرج فيلم «How to Train Your Dragon»؟",
    "options": [
      "Ron Clements and John Musker",
      "John Lasseter",
      "Peter Jackson",
      "Dean DeBlois and Chris Sanders"
    ],
    "optionsAr": [
      "رون كليمينتس اند جوهن موسكير",
      "جوهن لاسسيتير",
      "بيتير جاككسون",
      "ديان ديبلويس اند كهريس سانديرس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0539"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Despicable Me”?",
    "ar": "من أخرج فيلم «Despicable Me»؟",
    "options": [
      "Joe Johnston",
      "Pierre Coffin and Chris Renaud",
      "Scott Derrickson",
      "Hayao Miyazaki"
    ],
    "optionsAr": [
      "جوي جوهنستون",
      "بييرري كوففين اند كهريس ريناود",
      "سكوتت ديرريككسون",
      "هاياو مييازاكي"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0540"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Home Alone”?",
    "ar": "من أخرج فيلم «Home Alone»؟",
    "options": [
      "Christopher Nolan",
      "Chris Columbus",
      "Brad Bird",
      "Damien Chazelle"
    ],
    "optionsAr": [
      "كهريستوبهير نولان",
      "كهريس كولومبوس",
      "براد بيرد",
      "داميين كهازيللي"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0541"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Mrs. Doubtfire”?",
    "ar": "من أخرج فيلم «Mrs. Doubtfire»؟",
    "options": [
      "Lee Unkrich",
      "Peter Jackson",
      "Sam Raimi",
      "Chris Columbus"
    ],
    "optionsAr": [
      "ليي ونكريكه",
      "بيتير جاككسون",
      "سام رايمي",
      "كهريس كولومبوس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0542"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Harry Potter and the Sorcerer’s Stone”?",
    "ar": "من أخرج فيلم «Harry Potter and the Sorcerer’s Stone»؟",
    "options": [
      "Gary Trousdale and Kirk Wise",
      "James Cameron",
      "George Miller",
      "Chris Columbus"
    ],
    "optionsAr": [
      "جاري ترووسدالي اند كيرك ويسي",
      "جاميس كاميرون",
      "جيورجي ميللير",
      "كهريس كولومبوس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0543"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Harry Potter and the Chamber of Secrets”?",
    "ar": "من أخرج فيلم «Harry Potter and the Chamber of Secrets»؟",
    "options": [
      "Chris Columbus",
      "Chuck Russell",
      "Martin Scorsese",
      "Ryan Coogler"
    ],
    "optionsAr": [
      "كهريس كولومبوس",
      "كهوكك روسسيلل",
      "مارتين سكورسيسي",
      "ريان كووجلير"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0544"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Pirates of the Caribbean: The Curse of the Black Pearl”?",
    "ar": "من أخرج فيلم «Pirates of the Caribbean: The Curse of the Black Pearl»؟",
    "options": [
      "Brad Bird",
      "Robert Zemeckis",
      "Ron Clements and John Musker",
      "Gore Verbinski"
    ],
    "optionsAr": [
      "براد بيرد",
      "روبيرت زيميككيس",
      "رون كليمينتس اند جوهن موسكير",
      "جوري فيربينسكي"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0545"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Mask”?",
    "ar": "من أخرج فيلم «The Mask»؟",
    "options": [
      "Joe Johnston",
      "Chris Columbus",
      "Scott Derrickson",
      "Chuck Russell"
    ],
    "optionsAr": [
      "جوي جوهنستون",
      "كهريس كولومبوس",
      "سكوتت ديرريككسون",
      "كهوكك روسسيلل"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0546"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Truman Show”?",
    "ar": "من أخرج فيلم «The Truman Show»؟",
    "options": [
      "Peter Weir",
      "Dean DeBlois and Chris Sanders",
      "Frank Darabont",
      "Brad Bird"
    ],
    "optionsAr": [
      "بيتير ويير",
      "ديان ديبلويس اند كهريس سانديرس",
      "فرانك دارابونت",
      "براد بيرد"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0547"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Grand Budapest Hotel”?",
    "ar": "من أخرج فيلم «The Grand Budapest Hotel»؟",
    "options": [
      "Sam Raimi",
      "Chris Columbus",
      "Wes Anderson",
      "Peter Jackson"
    ],
    "optionsAr": [
      "سام رايمي",
      "كهريس كولومبوس",
      "ويس انديرسون",
      "بيتير جاككسون"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0548"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The French Dispatch”?",
    "ar": "من أخرج فيلم «The French Dispatch»؟",
    "options": [
      "Mark Osborne and John Stevenson",
      "Jon Favreau",
      "John Lasseter",
      "Wes Anderson"
    ],
    "optionsAr": [
      "مارك وسبورني اند جوهن ستيفينسون",
      "جون فافرياو",
      "جوهن لاسسيتير",
      "ويس انديرسون"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0549"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “La La Land”?",
    "ar": "من أخرج فيلم «La La Land»؟",
    "options": [
      "Roger Allers and Rob Minkoff",
      "James Gunn",
      "Dean DeBlois and Chris Sanders",
      "Damien Chazelle"
    ],
    "optionsAr": [
      "روجير الليرس اند روب مينكوفف",
      "جاميس جونن",
      "ديان ديبلويس اند كهريس سانديرس",
      "داميين كهازيللي"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0550"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Whiplash”?",
    "ar": "من أخرج فيلم «Whiplash»؟",
    "options": [
      "Brad Bird",
      "Lee Unkrich",
      "Damien Chazelle",
      "Roger Allers and Rob Minkoff"
    ],
    "optionsAr": [
      "براد بيرد",
      "ليي ونكريكه",
      "داميين كهازيللي",
      "روجير الليرس اند روب مينكوفف"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0551"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Interstellar”?",
    "ar": "من أخرج فيلم «Interstellar»؟",
    "options": [
      "Pierre Coffin and Chris Renaud",
      "Scott Derrickson",
      "Christopher Nolan",
      "Taika Waititi"
    ],
    "optionsAr": [
      "بييرري كوففين اند كهريس ريناود",
      "سكوتت ديرريككسون",
      "كهريستوبهير نولان",
      "تايكا وايتيتي"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0552"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Dunkirk”?",
    "ar": "من أخرج فيلم «Dunkirk»؟",
    "options": [
      "Gary Trousdale and Kirk Wise",
      "Gore Verbinski",
      "Steven Spielberg",
      "Christopher Nolan"
    ],
    "optionsAr": [
      "جاري ترووسدالي اند كيرك ويسي",
      "جوري فيربينسكي",
      "ستيفين سبييلبيرج",
      "كهريستوبهير نولان"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0553"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Oppenheimer”?",
    "ar": "من أخرج فيلم «Oppenheimer»؟",
    "options": [
      "Christopher Nolan",
      "Sam Raimi",
      "Gore Verbinski",
      "James Cameron"
    ],
    "optionsAr": [
      "كهريستوبهير نولان",
      "سام رايمي",
      "جوري فيربينسكي",
      "جاميس كاميرون"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0554"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Prestige”?",
    "ar": "من أخرج فيلم «The Prestige»؟",
    "options": [
      "Gary Trousdale and Kirk Wise",
      "Peter Jackson",
      "Christopher Nolan",
      "Martin Scorsese"
    ],
    "optionsAr": [
      "جاري ترووسدالي اند كيرك ويسي",
      "بيتير جاككسون",
      "كهريستوبهير نولان",
      "مارتين سكورسيسي"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0555"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Departed”?",
    "ar": "من أخرج فيلم «The Departed»؟",
    "options": [
      "Martin Scorsese",
      "James Gunn",
      "Joss Whedon",
      "Sam Raimi"
    ],
    "optionsAr": [
      "مارتين سكورسيسي",
      "جاميس جونن",
      "جوسس وهيدون",
      "سام رايمي"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0556"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Goodfellas”?",
    "ar": "من أخرج فيلم «Goodfellas»؟",
    "options": [
      "Martin Scorsese",
      "Christopher Nolan",
      "Andrew Adamson and Vicky Jenson",
      "Wes Anderson"
    ],
    "optionsAr": [
      "مارتين سكورسيسي",
      "كهريستوبهير نولان",
      "اندريو ادامسون اند فيككي جينسون",
      "ويس انديرسون"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0557"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Wolf of Wall Street”?",
    "ar": "من أخرج فيلم «The Wolf of Wall Street»؟",
    "options": [
      "John Lasseter",
      "Ridley Scott",
      "Chuck Russell",
      "Martin Scorsese"
    ],
    "optionsAr": [
      "جوهن لاسسيتير",
      "ريدليي سكوتت",
      "كهوكك روسسيلل",
      "مارتين سكورسيسي"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0558"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Irishman”?",
    "ar": "من أخرج فيلم «The Irishman»؟",
    "options": [
      "Martin Scorsese",
      "Andrew Stanton",
      "Jon Favreau",
      "Pete Docter"
    ],
    "optionsAr": [
      "مارتين سكورسيسي",
      "اندريو ستانتون",
      "جون فافرياو",
      "بيتي دوكتير"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0559"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Taxi Driver”?",
    "ar": "من أخرج فيلم «Taxi Driver»؟",
    "options": [
      "Brad Bird",
      "George Miller",
      "Joe Johnston",
      "Martin Scorsese"
    ],
    "optionsAr": [
      "براد بيرد",
      "جيورجي ميللير",
      "جوي جوهنستون",
      "مارتين سكورسيسي"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0560"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Shawshank Redemption” released?",
    "ar": "في أي سنة صدر فيلم «The Shawshank Redemption»؟",
    "options": [
      "1994",
      "1995",
      "2021",
      "2017"
    ],
    "optionsAr": [
      "1994",
      "1995",
      "2021",
      "2017"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0561"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Godfather” released?",
    "ar": "في أي سنة صدر فيلم «The Godfather»؟",
    "options": [
      "1976",
      "1972",
      "2018",
      "2017"
    ],
    "optionsAr": [
      "1976",
      "1972",
      "2018",
      "2017"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0562"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Dark Knight” released?",
    "ar": "في أي سنة صدر فيلم «The Dark Knight»؟",
    "options": [
      "1976",
      "2008",
      "1988",
      "1985"
    ],
    "optionsAr": [
      "1976",
      "2008",
      "1988",
      "1985"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0563"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Pulp Fiction” released?",
    "ar": "في أي سنة صدر فيلم «Pulp Fiction»؟",
    "options": [
      "1994",
      "2001",
      "2012",
      "1982"
    ],
    "optionsAr": [
      "1994",
      "2001",
      "2012",
      "1982"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0564"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Forrest Gump” released?",
    "ar": "في أي سنة صدر فيلم «Forrest Gump»؟",
    "options": [
      "1994",
      "2010",
      "2000",
      "2009"
    ],
    "optionsAr": [
      "1994",
      "2010",
      "2000",
      "2009"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0565"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Inception” released?",
    "ar": "في أي سنة صدر فيلم «Inception»؟",
    "options": [
      "2008",
      "2007",
      "2010",
      "1997"
    ],
    "optionsAr": [
      "2008",
      "2007",
      "2010",
      "1997"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0566"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Titanic” released?",
    "ar": "في أي سنة صدر فيلم «Titanic»؟",
    "options": [
      "1997",
      "2002",
      "2001",
      "2010"
    ],
    "optionsAr": [
      "1997",
      "2002",
      "2001",
      "2010"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0567"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Avatar” released?",
    "ar": "في أي سنة صدر فيلم «Avatar»؟",
    "options": [
      "2016",
      "1998",
      "1992",
      "2009"
    ],
    "optionsAr": [
      "2016",
      "1998",
      "1992",
      "2009"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0568"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Jurassic Park” released?",
    "ar": "في أي سنة صدر فيلم «Jurassic Park»؟",
    "options": [
      "1972",
      "1991",
      "1993",
      "2002"
    ],
    "optionsAr": [
      "1972",
      "1991",
      "1993",
      "2002"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0569"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “E.T. the Extra-Terrestrial” released?",
    "ar": "في أي سنة صدر فيلم «E.T. the Extra-Terrestrial»؟",
    "options": [
      "2010",
      "1982",
      "2016",
      "1998"
    ],
    "optionsAr": [
      "2010",
      "1982",
      "2016",
      "1998"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0570"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Jaws” released?",
    "ar": "في أي سنة صدر فيلم «Jaws»؟",
    "options": [
      "2010",
      "1975",
      "2001",
      "2002"
    ],
    "optionsAr": [
      "2010",
      "1975",
      "2001",
      "2002"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0571"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Schindler’s List” released?",
    "ar": "في أي سنة صدر فيلم «Schindler’s List»؟",
    "options": [
      "1993",
      "2018",
      "2006",
      "2000"
    ],
    "optionsAr": [
      "1993",
      "2018",
      "2006",
      "2000"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0572"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Saving Private Ryan” released?",
    "ar": "في أي سنة صدر فيلم «Saving Private Ryan»؟",
    "options": [
      "2017",
      "1972",
      "2003",
      "1998"
    ],
    "optionsAr": [
      "2017",
      "1972",
      "2003",
      "1998"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0573"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Back to the Future” released?",
    "ar": "في أي سنة صدر فيلم «Back to the Future»؟",
    "options": [
      "2017",
      "1985",
      "2009",
      "2002"
    ],
    "optionsAr": [
      "2017",
      "1985",
      "2009",
      "2002"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0574"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Cast Away” released?",
    "ar": "في أي سنة صدر فيلم «Cast Away»؟",
    "options": [
      "1994",
      "2000",
      "1990",
      "2008"
    ],
    "optionsAr": [
      "1994",
      "2000",
      "1990",
      "2008"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0575"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Gladiator” released?",
    "ar": "في أي سنة صدر فيلم «Gladiator»؟",
    "options": [
      "1985",
      "2000",
      "1972",
      "1994"
    ],
    "optionsAr": [
      "1985",
      "2000",
      "1972",
      "1994"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0576"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Alien” released?",
    "ar": "في أي سنة صدر فيلم «Alien»؟",
    "options": [
      "2011",
      "2017",
      "1990",
      "1979"
    ],
    "optionsAr": [
      "2011",
      "2017",
      "1990",
      "1979"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0577"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Martian” released?",
    "ar": "في أي سنة صدر فيلم «The Martian»؟",
    "options": [
      "2019",
      "2015",
      "1992",
      "2013"
    ],
    "optionsAr": [
      "2019",
      "2015",
      "1992",
      "2013"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0578"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Blade Runner” released?",
    "ar": "في أي سنة صدر فيلم «Blade Runner»؟",
    "options": [
      "2001",
      "2007",
      "1982",
      "1975"
    ],
    "optionsAr": [
      "2001",
      "2007",
      "1982",
      "1975"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0579"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Mad Max: Fury Road” released?",
    "ar": "في أي سنة صدر فيلم «Mad Max: Fury Road»؟",
    "options": [
      "1991",
      "2015",
      "1988",
      "2005"
    ],
    "optionsAr": [
      "1991",
      "2015",
      "1988",
      "2005"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0580"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Lord of the Rings: The Fellowship of the Ring” released?",
    "ar": "في أي سنة صدر فيلم «The Lord of the Rings: The Fellowship of the Ring»؟",
    "options": [
      "2003",
      "1991",
      "1972",
      "2001"
    ],
    "optionsAr": [
      "2003",
      "1991",
      "1972",
      "2001"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0581"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Hobbit: An Unexpected Journey” released?",
    "ar": "في أي سنة صدر فيلم «The Hobbit: An Unexpected Journey»؟",
    "options": [
      "1979",
      "2012",
      "2018",
      "1997"
    ],
    "optionsAr": [
      "1979",
      "2012",
      "2018",
      "1997"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0582"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “King Kong” released?",
    "ar": "في أي سنة صدر فيلم «King Kong»؟",
    "options": [
      "2003",
      "2005",
      "2014",
      "1972"
    ],
    "optionsAr": [
      "2003",
      "2005",
      "2014",
      "1972"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0583"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Spider-Man” released?",
    "ar": "في أي سنة صدر فيلم «Spider-Man»؟",
    "options": [
      "2011",
      "2003",
      "1976",
      "2002"
    ],
    "optionsAr": [
      "2011",
      "2003",
      "1976",
      "2002"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0584"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Doctor Strange” released?",
    "ar": "في أي سنة صدر فيلم «Doctor Strange»؟",
    "options": [
      "2016",
      "1994",
      "2021",
      "2015"
    ],
    "optionsAr": [
      "2016",
      "1994",
      "2021",
      "2015"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0585"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Black Panther” released?",
    "ar": "في أي سنة صدر فيلم «Black Panther»؟",
    "options": [
      "2009",
      "1988",
      "2018",
      "2008"
    ],
    "optionsAr": [
      "2009",
      "1988",
      "2018",
      "2008"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0586"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Iron Man” released?",
    "ar": "في أي سنة صدر فيلم «Iron Man»؟",
    "options": [
      "1972",
      "2012",
      "2006",
      "2008"
    ],
    "optionsAr": [
      "1972",
      "2012",
      "2006",
      "2008"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0587"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Avengers” released?",
    "ar": "في أي سنة صدر فيلم «The Avengers»؟",
    "options": [
      "2017",
      "1988",
      "2012",
      "2016"
    ],
    "optionsAr": [
      "2017",
      "1988",
      "2012",
      "2016"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0588"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Guardians of the Galaxy” released?",
    "ar": "في أي سنة صدر فيلم «Guardians of the Galaxy»؟",
    "options": [
      "2021",
      "2014",
      "2017",
      "2006"
    ],
    "optionsAr": [
      "2021",
      "2014",
      "2017",
      "2006"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0589"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Thor: Ragnarok” released?",
    "ar": "في أي سنة صدر فيلم «Thor: Ragnarok»؟",
    "options": [
      "1990",
      "1975",
      "2018",
      "2017"
    ],
    "optionsAr": [
      "1990",
      "1975",
      "2018",
      "2017"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0590"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Captain America: The First Avenger” released?",
    "ar": "في أي سنة صدر فيلم «Captain America: The First Avenger»؟",
    "options": [
      "2015",
      "2011",
      "2006",
      "2005"
    ],
    "optionsAr": [
      "2015",
      "2011",
      "2006",
      "2005"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0591"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Frozen” released?",
    "ar": "في أي سنة صدر فيلم «Frozen»؟",
    "options": [
      "2013",
      "1991",
      "2003",
      "1976"
    ],
    "optionsAr": [
      "2013",
      "1991",
      "2003",
      "1976"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0592"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Moana” released?",
    "ar": "في أي سنة صدر فيلم «Moana»؟",
    "options": [
      "1990",
      "1998",
      "2007",
      "2016"
    ],
    "optionsAr": [
      "1990",
      "1998",
      "2007",
      "2016"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0593"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Toy Story” released?",
    "ar": "في أي سنة صدر فيلم «Toy Story»؟",
    "options": [
      "2017",
      "2019",
      "1995",
      "2002"
    ],
    "optionsAr": [
      "2017",
      "2019",
      "1995",
      "2002"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0594"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Finding Nemo” released?",
    "ar": "في أي سنة صدر فيلم «Finding Nemo»؟",
    "options": [
      "2011",
      "2003",
      "1991",
      "2008"
    ],
    "optionsAr": [
      "2011",
      "2003",
      "1991",
      "2008"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0595"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Up” released?",
    "ar": "في أي سنة صدر فيلم «Up»؟",
    "options": [
      "1995",
      "2009",
      "1975",
      "2012"
    ],
    "optionsAr": [
      "1995",
      "2009",
      "1975",
      "2012"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0596"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Inside Out” released?",
    "ar": "في أي سنة صدر فيلم «Inside Out»؟",
    "options": [
      "2015",
      "2012",
      "1992",
      "2016"
    ],
    "optionsAr": [
      "2015",
      "2012",
      "1992",
      "2016"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0597"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Coco” released?",
    "ar": "في أي سنة صدر فيلم «Coco»؟",
    "options": [
      "2019",
      "2017",
      "2008",
      "2018"
    ],
    "optionsAr": [
      "2019",
      "2017",
      "2008",
      "2018"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0598"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Ratatouille” released?",
    "ar": "في أي سنة صدر فيلم «Ratatouille»؟",
    "options": [
      "2016",
      "1998",
      "1982",
      "2007"
    ],
    "optionsAr": [
      "2016",
      "1998",
      "1982",
      "2007"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0599"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “WALL-E” released?",
    "ar": "في أي سنة صدر فيلم «WALL-E»؟",
    "options": [
      "2002",
      "1991",
      "1975",
      "2008"
    ],
    "optionsAr": [
      "2002",
      "1991",
      "1975",
      "2008"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0600"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Spirited Away” released?",
    "ar": "في أي سنة صدر فيلم «Spirited Away»؟",
    "options": [
      "2008",
      "2010",
      "1985",
      "2001"
    ],
    "optionsAr": [
      "2008",
      "2010",
      "1985",
      "2001"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0601"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “My Neighbor Totoro” released?",
    "ar": "في أي سنة صدر فيلم «My Neighbor Totoro»؟",
    "options": [
      "1988",
      "2019",
      "2000",
      "1991"
    ],
    "optionsAr": [
      "1988",
      "2019",
      "2000",
      "1991"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0602"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Princess Mononoke” released?",
    "ar": "في أي سنة صدر فيلم «Princess Mononoke»؟",
    "options": [
      "1976",
      "1997",
      "1972",
      "1979"
    ],
    "optionsAr": [
      "1976",
      "1997",
      "1972",
      "1979"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0603"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Lion King” released?",
    "ar": "في أي سنة صدر فيلم «The Lion King»؟",
    "options": [
      "2018",
      "1994",
      "1995",
      "2012"
    ],
    "optionsAr": [
      "2018",
      "1994",
      "1995",
      "2012"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0604"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Aladdin” released?",
    "ar": "في أي سنة صدر فيلم «Aladdin»؟",
    "options": [
      "1994",
      "2009",
      "1992",
      "2015"
    ],
    "optionsAr": [
      "1994",
      "2009",
      "1992",
      "2015"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0605"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Beauty and the Beast” released?",
    "ar": "في أي سنة صدر فيلم «Beauty and the Beast»؟",
    "options": [
      "2016",
      "2001",
      "2010",
      "1991"
    ],
    "optionsAr": [
      "2016",
      "2001",
      "2010",
      "1991"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0606"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Shrek” released?",
    "ar": "في أي سنة صدر فيلم «Shrek»؟",
    "options": [
      "2009",
      "1988",
      "2011",
      "2001"
    ],
    "optionsAr": [
      "2009",
      "1988",
      "2011",
      "2001"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0607"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Kung Fu Panda” released?",
    "ar": "في أي سنة صدر فيلم «Kung Fu Panda»؟",
    "options": [
      "2008",
      "2005",
      "1997",
      "2011"
    ],
    "optionsAr": [
      "2008",
      "2005",
      "1997",
      "2011"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0608"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “How to Train Your Dragon” released?",
    "ar": "في أي سنة صدر فيلم «How to Train Your Dragon»؟",
    "options": [
      "2000",
      "2010",
      "1975",
      "1972"
    ],
    "optionsAr": [
      "2000",
      "2010",
      "1975",
      "1972"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0609"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Despicable Me” released?",
    "ar": "في أي سنة صدر فيلم «Despicable Me»؟",
    "options": [
      "2018",
      "2019",
      "1994",
      "2010"
    ],
    "optionsAr": [
      "2018",
      "2019",
      "1994",
      "2010"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0610"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Home Alone” released?",
    "ar": "في أي سنة صدر فيلم «Home Alone»؟",
    "options": [
      "2003",
      "2002",
      "1990",
      "2023"
    ],
    "optionsAr": [
      "2003",
      "2002",
      "1990",
      "2023"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0611"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Mrs. Doubtfire” released?",
    "ar": "في أي سنة صدر فيلم «Mrs. Doubtfire»؟",
    "options": [
      "2002",
      "1995",
      "1993",
      "1985"
    ],
    "optionsAr": [
      "2002",
      "1995",
      "1993",
      "1985"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0612"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Harry Potter and the Sorcerer’s Stone” released?",
    "ar": "في أي سنة صدر فيلم «Harry Potter and the Sorcerer’s Stone»؟",
    "options": [
      "2001",
      "2012",
      "1976",
      "2018"
    ],
    "optionsAr": [
      "2001",
      "2012",
      "1976",
      "2018"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0613"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Harry Potter and the Chamber of Secrets” released?",
    "ar": "في أي سنة صدر فيلم «Harry Potter and the Chamber of Secrets»؟",
    "options": [
      "2003",
      "2010",
      "2002",
      "1994"
    ],
    "optionsAr": [
      "2003",
      "2010",
      "2002",
      "1994"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0614"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Pirates of the Caribbean: The Curse of the Black Pearl” released?",
    "ar": "في أي سنة صدر فيلم «Pirates of the Caribbean: The Curse of the Black Pearl»؟",
    "options": [
      "1991",
      "2003",
      "2010",
      "2015"
    ],
    "optionsAr": [
      "1991",
      "2003",
      "2010",
      "2015"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0615"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Mask” released?",
    "ar": "في أي سنة صدر فيلم «The Mask»؟",
    "options": [
      "2003",
      "2017",
      "1994",
      "2012"
    ],
    "optionsAr": [
      "2003",
      "2017",
      "1994",
      "2012"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0616"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Truman Show” released?",
    "ar": "في أي سنة صدر فيلم «The Truman Show»؟",
    "options": [
      "1998",
      "2009",
      "2017",
      "2013"
    ],
    "optionsAr": [
      "1998",
      "2009",
      "2017",
      "2013"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0617"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Grand Budapest Hotel” released?",
    "ar": "في أي سنة صدر فيلم «The Grand Budapest Hotel»؟",
    "options": [
      "2014",
      "2023",
      "1988",
      "2002"
    ],
    "optionsAr": [
      "2014",
      "2023",
      "1988",
      "2002"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0618"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The French Dispatch” released?",
    "ar": "في أي سنة صدر فيلم «The French Dispatch»؟",
    "options": [
      "2001",
      "1992",
      "2021",
      "1997"
    ],
    "optionsAr": [
      "2001",
      "1992",
      "2021",
      "1997"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0619"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “La La Land” released?",
    "ar": "في أي سنة صدر فيلم «La La Land»؟",
    "options": [
      "2000",
      "2011",
      "2016",
      "2006"
    ],
    "optionsAr": [
      "2000",
      "2011",
      "2016",
      "2006"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0620"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Whiplash” released?",
    "ar": "في أي سنة صدر فيلم «Whiplash»؟",
    "options": [
      "2014",
      "2012",
      "2000",
      "1985"
    ],
    "optionsAr": [
      "2014",
      "2012",
      "2000",
      "1985"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0621"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Interstellar” released?",
    "ar": "في أي سنة صدر فيلم «Interstellar»؟",
    "options": [
      "2002",
      "2008",
      "2014",
      "2018"
    ],
    "optionsAr": [
      "2002",
      "2008",
      "2014",
      "2018"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0622"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Dunkirk” released?",
    "ar": "في أي سنة صدر فيلم «Dunkirk»؟",
    "options": [
      "1988",
      "1979",
      "2017",
      "2005"
    ],
    "optionsAr": [
      "1988",
      "1979",
      "2017",
      "2005"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0623"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Oppenheimer” released?",
    "ar": "في أي سنة صدر فيلم «Oppenheimer»؟",
    "options": [
      "2023",
      "1993",
      "2000",
      "2014"
    ],
    "optionsAr": [
      "2023",
      "1993",
      "2000",
      "2014"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0624"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Prestige” released?",
    "ar": "في أي سنة صدر فيلم «The Prestige»؟",
    "options": [
      "2006",
      "2015",
      "2014",
      "2010"
    ],
    "optionsAr": [
      "2006",
      "2015",
      "2014",
      "2010"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0625"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Departed” released?",
    "ar": "في أي سنة صدر فيلم «The Departed»؟",
    "options": [
      "1982",
      "2019",
      "2006",
      "1991"
    ],
    "optionsAr": [
      "1982",
      "2019",
      "2006",
      "1991"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0626"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Goodfellas” released?",
    "ar": "في أي سنة صدر فيلم «Goodfellas»؟",
    "options": [
      "2006",
      "2016",
      "1990",
      "1998"
    ],
    "optionsAr": [
      "2006",
      "2016",
      "1990",
      "1998"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0627"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Wolf of Wall Street” released?",
    "ar": "في أي سنة صدر فيلم «The Wolf of Wall Street»؟",
    "options": [
      "2005",
      "1992",
      "1993",
      "2013"
    ],
    "optionsAr": [
      "2005",
      "1992",
      "1993",
      "2013"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0628"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Irishman” released?",
    "ar": "في أي سنة صدر فيلم «The Irishman»؟",
    "options": [
      "2013",
      "1988",
      "2019",
      "2010"
    ],
    "optionsAr": [
      "2013",
      "1988",
      "2019",
      "2010"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0629"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Taxi Driver” released?",
    "ar": "في أي سنة صدر فيلم «Taxi Driver»؟",
    "options": [
      "1975",
      "1976",
      "2019",
      "1998"
    ],
    "optionsAr": [
      "1975",
      "1976",
      "2019",
      "1998"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0630"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Hydrogen?",
    "ar": "ما الرمز الكيميائي لعنصر الهيدروجين؟",
    "options": [
      "Pd",
      "H",
      "Fe",
      "Nd"
    ],
    "optionsAr": [
      "Pd",
      "H",
      "Fe",
      "Nd"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0631"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Helium?",
    "ar": "ما الرمز الكيميائي لعنصر الهيليوم؟",
    "options": [
      "Li",
      "Cu",
      "He",
      "Sm"
    ],
    "optionsAr": [
      "Li",
      "Cu",
      "He",
      "Sm"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0632"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Lithium?",
    "ar": "ما الرمز الكيميائي لعنصر الليثيوم؟",
    "options": [
      "Li",
      "Cr",
      "As",
      "O"
    ],
    "optionsAr": [
      "Li",
      "Cr",
      "As",
      "O"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0633"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Beryllium?",
    "ar": "ما الرمز الكيميائي لعنصر البيريليوم؟",
    "options": [
      "K",
      "Sn",
      "Be",
      "Zn"
    ],
    "optionsAr": [
      "K",
      "Sn",
      "Be",
      "Zn"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0634"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Boron?",
    "ar": "ما الرمز الكيميائي لعنصر البورون؟",
    "options": [
      "Ga",
      "B",
      "Sc",
      "Nd"
    ],
    "optionsAr": [
      "Ga",
      "B",
      "Sc",
      "Nd"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0635"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Carbon?",
    "ar": "ما الرمز الكيميائي لعنصر الكربون؟",
    "options": [
      "Ne",
      "Cr",
      "V",
      "C"
    ],
    "optionsAr": [
      "Ne",
      "Cr",
      "V",
      "C"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0636"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Nitrogen?",
    "ar": "ما الرمز الكيميائي لعنصر النيتروجين؟",
    "options": [
      "B",
      "F",
      "Cl",
      "N"
    ],
    "optionsAr": [
      "B",
      "F",
      "Cl",
      "N"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0637"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Oxygen?",
    "ar": "ما الرمز الكيميائي لعنصر الأكسجين؟",
    "options": [
      "O",
      "S",
      "Nb",
      "Zr"
    ],
    "optionsAr": [
      "O",
      "S",
      "Nb",
      "Zr"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0638"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Fluorine?",
    "ar": "ما الرمز الكيميائي لعنصر الفلور؟",
    "options": [
      "F",
      "Cu",
      "Gd",
      "Ho"
    ],
    "optionsAr": [
      "F",
      "Cu",
      "Gd",
      "Ho"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0639"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Neon?",
    "ar": "ما الرمز الكيميائي لعنصر النيون؟",
    "options": [
      "Li",
      "Sc",
      "Ne",
      "Ho"
    ],
    "optionsAr": [
      "Li",
      "Sc",
      "Ne",
      "Ho"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0640"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Sodium?",
    "ar": "ما الرمز الكيميائي لعنصر الصوديوم؟",
    "options": [
      "Sm",
      "K",
      "Na",
      "Tm"
    ],
    "optionsAr": [
      "Sm",
      "K",
      "Na",
      "Tm"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0641"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Magnesium?",
    "ar": "ما الرمز الكيميائي لعنصر المغنيسيوم؟",
    "options": [
      "H",
      "Be",
      "Tb",
      "Mg"
    ],
    "optionsAr": [
      "H",
      "Be",
      "Tb",
      "Mg"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0642"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Aluminium?",
    "ar": "ما الرمز الكيميائي لعنصر الألومنيوم؟",
    "options": [
      "Na",
      "P",
      "Al",
      "Rb"
    ],
    "optionsAr": [
      "Na",
      "P",
      "Al",
      "Rb"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0643"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Silicon?",
    "ar": "ما الرمز الكيميائي لعنصر السيليكون؟",
    "options": [
      "Si",
      "Nd",
      "Tb",
      "Ar"
    ],
    "optionsAr": [
      "Si",
      "Nd",
      "Tb",
      "Ar"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0644"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Phosphorus?",
    "ar": "ما الرمز الكيميائي لعنصر الفوسفور؟",
    "options": [
      "P",
      "Cd",
      "O",
      "Tb"
    ],
    "optionsAr": [
      "P",
      "Cd",
      "O",
      "Tb"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0645"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Sulfur?",
    "ar": "ما الرمز الكيميائي لعنصر الكبريت؟",
    "options": [
      "Nb",
      "Ar",
      "S",
      "Tb"
    ],
    "optionsAr": [
      "Nb",
      "Ar",
      "S",
      "Tb"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0646"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Chlorine?",
    "ar": "ما الرمز الكيميائي لعنصر الكلور؟",
    "options": [
      "Cl",
      "Co",
      "Cr",
      "P"
    ],
    "optionsAr": [
      "Cl",
      "Co",
      "Cr",
      "P"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0647"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Argon?",
    "ar": "ما الرمز الكيميائي لعنصر الأرجون؟",
    "options": [
      "In",
      "Rh",
      "Ar",
      "Li"
    ],
    "optionsAr": [
      "In",
      "Rh",
      "Ar",
      "Li"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0648"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Potassium?",
    "ar": "ما الرمز الكيميائي لعنصر البوتاسيوم؟",
    "options": [
      "N",
      "K",
      "Li",
      "Sc"
    ],
    "optionsAr": [
      "N",
      "K",
      "Li",
      "Sc"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0649"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Calcium?",
    "ar": "ما الرمز الكيميائي لعنصر الكالسيوم؟",
    "options": [
      "Pd",
      "Ca",
      "Ga",
      "Ce"
    ],
    "optionsAr": [
      "Pd",
      "Ca",
      "Ga",
      "Ce"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0650"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Scandium?",
    "ar": "ما الرمز الكيميائي لعنصر السكانديوم؟",
    "options": [
      "Zr",
      "Sb",
      "Tb",
      "Sc"
    ],
    "optionsAr": [
      "Zr",
      "Sb",
      "Tb",
      "Sc"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0651"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Titanium?",
    "ar": "ما الرمز الكيميائي لعنصر التيتانيوم؟",
    "options": [
      "Ti",
      "Cu",
      "Si",
      "K"
    ],
    "optionsAr": [
      "Ti",
      "Cu",
      "Si",
      "K"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0652"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Vanadium?",
    "ar": "ما الرمز الكيميائي لعنصر الفاناديوم؟",
    "options": [
      "Ga",
      "B",
      "V",
      "I"
    ],
    "optionsAr": [
      "Ga",
      "B",
      "V",
      "I"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0653"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Chromium?",
    "ar": "ما الرمز الكيميائي لعنصر الكروم؟",
    "options": [
      "Mn",
      "Fe",
      "Cr",
      "Pm"
    ],
    "optionsAr": [
      "Mn",
      "Fe",
      "Cr",
      "Pm"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0654"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Manganese?",
    "ar": "ما الرمز الكيميائي لعنصر المنغنيز؟",
    "options": [
      "O",
      "Y",
      "Sb",
      "Mn"
    ],
    "optionsAr": [
      "O",
      "Y",
      "Sb",
      "Mn"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0655"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Iron?",
    "ar": "ما الرمز الكيميائي لعنصر الحديد؟",
    "options": [
      "S",
      "K",
      "Fe",
      "Ga"
    ],
    "optionsAr": [
      "S",
      "K",
      "Fe",
      "Ga"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0656"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Cobalt?",
    "ar": "ما الرمز الكيميائي لعنصر الكوبالت؟",
    "options": [
      "Cd",
      "Co",
      "Ba",
      "Ce"
    ],
    "optionsAr": [
      "Cd",
      "Co",
      "Ba",
      "Ce"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0657"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Nickel?",
    "ar": "ما الرمز الكيميائي لعنصر النيكل؟",
    "options": [
      "I",
      "Xe",
      "Ne",
      "Ni"
    ],
    "optionsAr": [
      "I",
      "Xe",
      "Ne",
      "Ni"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0658"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Copper?",
    "ar": "ما الرمز الكيميائي لعنصر النحاس؟",
    "options": [
      "Nd",
      "Ga",
      "Cu",
      "Ti"
    ],
    "optionsAr": [
      "Nd",
      "Ga",
      "Cu",
      "Ti"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0659"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Zinc?",
    "ar": "ما الرمز الكيميائي لعنصر الزنك؟",
    "options": [
      "Zn",
      "Nb",
      "Ge",
      "Tc"
    ],
    "optionsAr": [
      "Zn",
      "Nb",
      "Ge",
      "Tc"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0660"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Gallium?",
    "ar": "ما الرمز الكيميائي لعنصر الغاليوم؟",
    "options": [
      "Ar",
      "Mn",
      "Ho",
      "Ga"
    ],
    "optionsAr": [
      "Ar",
      "Mn",
      "Ho",
      "Ga"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0661"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Germanium?",
    "ar": "ما الرمز الكيميائي لعنصر الجرمانيوم؟",
    "options": [
      "Y",
      "Cd",
      "Ge",
      "N"
    ],
    "optionsAr": [
      "Y",
      "Cd",
      "Ge",
      "N"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0662"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Arsenic?",
    "ar": "ما الرمز الكيميائي لعنصر الزرنيخ؟",
    "options": [
      "As",
      "He",
      "Rb",
      "Ba"
    ],
    "optionsAr": [
      "As",
      "He",
      "Rb",
      "Ba"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0663"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Selenium?",
    "ar": "ما الرمز الكيميائي لعنصر السيلينيوم؟",
    "options": [
      "Se",
      "Cs",
      "Cd",
      "Mn"
    ],
    "optionsAr": [
      "Se",
      "Cs",
      "Cd",
      "Mn"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0664"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Bromine?",
    "ar": "ما الرمز الكيميائي لعنصر البروم؟",
    "options": [
      "Ho",
      "Nd",
      "Si",
      "Br"
    ],
    "optionsAr": [
      "Ho",
      "Nd",
      "Si",
      "Br"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0665"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Krypton?",
    "ar": "ما الرمز الكيميائي لعنصر الكريبتون؟",
    "options": [
      "Mo",
      "I",
      "Yb",
      "Kr"
    ],
    "optionsAr": [
      "Mo",
      "I",
      "Yb",
      "Kr"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0666"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Rubidium?",
    "ar": "ما الرمز الكيميائي لعنصر الروبيديوم؟",
    "options": [
      "I",
      "Rb",
      "Cd",
      "Ge"
    ],
    "optionsAr": [
      "I",
      "Rb",
      "Cd",
      "Ge"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0667"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Strontium?",
    "ar": "ما الرمز الكيميائي لعنصر السترونشيوم؟",
    "options": [
      "Sr",
      "Tc",
      "I",
      "S"
    ],
    "optionsAr": [
      "Sr",
      "Tc",
      "I",
      "S"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0668"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Yttrium?",
    "ar": "ما الرمز الكيميائي لعنصر الإيتريوم؟",
    "options": [
      "La",
      "Y",
      "In",
      "N"
    ],
    "optionsAr": [
      "La",
      "Y",
      "In",
      "N"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0669"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Zirconium?",
    "ar": "ما الرمز الكيميائي لعنصر الزركونيوم؟",
    "options": [
      "Zr",
      "Ru",
      "O",
      "Br"
    ],
    "optionsAr": [
      "Zr",
      "Ru",
      "O",
      "Br"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0670"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Niobium?",
    "ar": "ما الرمز الكيميائي لعنصر النيوبيوم؟",
    "options": [
      "As",
      "Nb",
      "Cs",
      "Rh"
    ],
    "optionsAr": [
      "As",
      "Nb",
      "Cs",
      "Rh"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0671"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Molybdenum?",
    "ar": "ما الرمز الكيميائي لعنصر الموليبدينوم؟",
    "options": [
      "Ag",
      "Mo",
      "Ge",
      "Cu"
    ],
    "optionsAr": [
      "Ag",
      "Mo",
      "Ge",
      "Cu"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0672"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Technetium?",
    "ar": "ما الرمز الكيميائي لعنصر التكنيتيوم؟",
    "options": [
      "Tc",
      "Nd",
      "H",
      "Be"
    ],
    "optionsAr": [
      "Tc",
      "Nd",
      "H",
      "Be"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0673"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Ruthenium?",
    "ar": "ما الرمز الكيميائي لعنصر الروثينيوم؟",
    "options": [
      "Co",
      "Ru",
      "Se",
      "Nb"
    ],
    "optionsAr": [
      "Co",
      "Ru",
      "Se",
      "Nb"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0674"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Rhodium?",
    "ar": "ما الرمز الكيميائي لعنصر الروديوم؟",
    "options": [
      "Rh",
      "Gd",
      "Rb",
      "C"
    ],
    "optionsAr": [
      "Rh",
      "Gd",
      "Rb",
      "C"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0675"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Palladium?",
    "ar": "ما الرمز الكيميائي لعنصر البلاديوم؟",
    "options": [
      "Ge",
      "Al",
      "P",
      "Pd"
    ],
    "optionsAr": [
      "Ge",
      "Al",
      "P",
      "Pd"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0676"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Silver?",
    "ar": "ما الرمز الكيميائي لعنصر الفضة؟",
    "options": [
      "Ag",
      "Fe",
      "Mn",
      "Cl"
    ],
    "optionsAr": [
      "Ag",
      "Fe",
      "Mn",
      "Cl"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0677"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Cadmium?",
    "ar": "ما الرمز الكيميائي لعنصر الكادميوم؟",
    "options": [
      "Cd",
      "Dy",
      "Sb",
      "Rb"
    ],
    "optionsAr": [
      "Cd",
      "Dy",
      "Sb",
      "Rb"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0678"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Indium?",
    "ar": "ما الرمز الكيميائي لعنصر الإنديوم؟",
    "options": [
      "Ag",
      "Ho",
      "In",
      "Li"
    ],
    "optionsAr": [
      "Ag",
      "Ho",
      "In",
      "Li"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0679"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Tin?",
    "ar": "ما الرمز الكيميائي لعنصر القصدير؟",
    "options": [
      "Na",
      "Kr",
      "Ar",
      "Sn"
    ],
    "optionsAr": [
      "Na",
      "Kr",
      "Ar",
      "Sn"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0680"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Antimony?",
    "ar": "ما الرمز الكيميائي لعنصر الأنتيمون؟",
    "options": [
      "Sb",
      "Eu",
      "Ce",
      "V"
    ],
    "optionsAr": [
      "Sb",
      "Eu",
      "Ce",
      "V"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0681"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Tellurium?",
    "ar": "ما الرمز الكيميائي لعنصر التيلوريوم؟",
    "options": [
      "S",
      "Te",
      "Cd",
      "Co"
    ],
    "optionsAr": [
      "S",
      "Te",
      "Cd",
      "Co"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0682"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Iodine?",
    "ar": "ما الرمز الكيميائي لعنصر اليود؟",
    "options": [
      "Be",
      "Rh",
      "I",
      "H"
    ],
    "optionsAr": [
      "Be",
      "Rh",
      "I",
      "H"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0683"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Xenon?",
    "ar": "ما الرمز الكيميائي لعنصر الزينون؟",
    "options": [
      "Ag",
      "Xe",
      "Sb",
      "Cl"
    ],
    "optionsAr": [
      "Ag",
      "Xe",
      "Sb",
      "Cl"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0684"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Caesium?",
    "ar": "ما الرمز الكيميائي لعنصر السيزيوم؟",
    "options": [
      "Sb",
      "Cd",
      "H",
      "Cs"
    ],
    "optionsAr": [
      "Sb",
      "Cd",
      "H",
      "Cs"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0685"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Barium?",
    "ar": "ما الرمز الكيميائي لعنصر الباريوم؟",
    "options": [
      "Ti",
      "He",
      "B",
      "Ba"
    ],
    "optionsAr": [
      "Ti",
      "He",
      "B",
      "Ba"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0686"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Lanthanum?",
    "ar": "ما الرمز الكيميائي لعنصر اللانثانوم؟",
    "options": [
      "Cu",
      "La",
      "He",
      "Ge"
    ],
    "optionsAr": [
      "Cu",
      "La",
      "He",
      "Ge"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0687"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Cerium?",
    "ar": "ما الرمز الكيميائي لعنصر السيريوم؟",
    "options": [
      "V",
      "Cr",
      "Rh",
      "Ce"
    ],
    "optionsAr": [
      "V",
      "Cr",
      "Rh",
      "Ce"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0688"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Praseodymium?",
    "ar": "ما الرمز الكيميائي لعنصر البراسيوديميوم؟",
    "options": [
      "Pr",
      "P",
      "O",
      "Be"
    ],
    "optionsAr": [
      "Pr",
      "P",
      "O",
      "Be"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0689"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Neodymium?",
    "ar": "ما الرمز الكيميائي لعنصر النيوديميوم؟",
    "options": [
      "Nd",
      "La",
      "Y",
      "Ba"
    ],
    "optionsAr": [
      "Nd",
      "La",
      "Y",
      "Ba"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0690"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Promethium?",
    "ar": "ما الرمز الكيميائي لعنصر البروميثيوم؟",
    "options": [
      "As",
      "Pm",
      "In",
      "Yb"
    ],
    "optionsAr": [
      "As",
      "Pm",
      "In",
      "Yb"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0691"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Samarium?",
    "ar": "ما الرمز الكيميائي لعنصر الساماريوم؟",
    "options": [
      "Pd",
      "Sm",
      "K",
      "Tc"
    ],
    "optionsAr": [
      "Pd",
      "Sm",
      "K",
      "Tc"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0692"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Europium?",
    "ar": "ما الرمز الكيميائي لعنصر اليوروبيوم؟",
    "options": [
      "Eu",
      "Cr",
      "Ti",
      "Mn"
    ],
    "optionsAr": [
      "Eu",
      "Cr",
      "Ti",
      "Mn"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0693"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Gadolinium?",
    "ar": "ما الرمز الكيميائي لعنصر الغادولينيوم؟",
    "options": [
      "Te",
      "Gd",
      "Kr",
      "Dy"
    ],
    "optionsAr": [
      "Te",
      "Gd",
      "Kr",
      "Dy"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0694"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Terbium?",
    "ar": "ما الرمز الكيميائي لعنصر التيربيوم؟",
    "options": [
      "Tb",
      "Tc",
      "V",
      "Xe"
    ],
    "optionsAr": [
      "Tb",
      "Tc",
      "V",
      "Xe"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0695"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Dysprosium?",
    "ar": "ما الرمز الكيميائي لعنصر الديسبروسيوم؟",
    "options": [
      "Sn",
      "Ga",
      "Br",
      "Dy"
    ],
    "optionsAr": [
      "Sn",
      "Ga",
      "Br",
      "Dy"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0696"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Holmium?",
    "ar": "ما الرمز الكيميائي لعنصر الهولميوم؟",
    "options": [
      "Yb",
      "Sr",
      "Ho",
      "V"
    ],
    "optionsAr": [
      "Yb",
      "Sr",
      "Ho",
      "V"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0697"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Erbium?",
    "ar": "ما الرمز الكيميائي لعنصر الإربيوم؟",
    "options": [
      "Sn",
      "P",
      "Xe",
      "Er"
    ],
    "optionsAr": [
      "Sn",
      "P",
      "Xe",
      "Er"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0698"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Thulium?",
    "ar": "ما الرمز الكيميائي لعنصر الثوليوم؟",
    "options": [
      "Ni",
      "Y",
      "Sn",
      "Tm"
    ],
    "optionsAr": [
      "Ni",
      "Y",
      "Sn",
      "Tm"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0699"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Ytterbium?",
    "ar": "ما الرمز الكيميائي لعنصر الإيتربيوم؟",
    "options": [
      "Y",
      "Cu",
      "Yb",
      "Ni"
    ],
    "optionsAr": [
      "Y",
      "Cu",
      "Yb",
      "Ni"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0700"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Hydrogen?",
    "ar": "ما العدد الذري لعنصر الهيدروجين؟",
    "options": [
      "1",
      "62",
      "30",
      "32"
    ],
    "optionsAr": [
      "1",
      "62",
      "30",
      "32"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0701"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Helium?",
    "ar": "ما العدد الذري لعنصر الهيليوم؟",
    "options": [
      "56",
      "28",
      "4",
      "2"
    ],
    "optionsAr": [
      "56",
      "28",
      "4",
      "2"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0702"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Lithium?",
    "ar": "ما العدد الذري لعنصر الليثيوم؟",
    "options": [
      "20",
      "3",
      "7",
      "65"
    ],
    "optionsAr": [
      "20",
      "3",
      "7",
      "65"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0703"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Beryllium?",
    "ar": "ما العدد الذري لعنصر البيريليوم؟",
    "options": [
      "4",
      "53",
      "19",
      "36"
    ],
    "optionsAr": [
      "4",
      "53",
      "19",
      "36"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0704"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Boron?",
    "ar": "ما العدد الذري لعنصر البورون؟",
    "options": [
      "48",
      "53",
      "5",
      "35"
    ],
    "optionsAr": [
      "48",
      "53",
      "5",
      "35"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0705"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Carbon?",
    "ar": "ما العدد الذري لعنصر الكربون؟",
    "options": [
      "65",
      "30",
      "6",
      "36"
    ],
    "optionsAr": [
      "65",
      "30",
      "6",
      "36"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0706"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Nitrogen?",
    "ar": "ما العدد الذري لعنصر النيتروجين؟",
    "options": [
      "43",
      "25",
      "7",
      "11"
    ],
    "optionsAr": [
      "43",
      "25",
      "7",
      "11"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0707"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Oxygen?",
    "ar": "ما العدد الذري لعنصر الأكسجين؟",
    "options": [
      "58",
      "3",
      "8",
      "1"
    ],
    "optionsAr": [
      "58",
      "3",
      "8",
      "1"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0708"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Fluorine?",
    "ar": "ما العدد الذري لعنصر الفلور؟",
    "options": [
      "38",
      "56",
      "9",
      "31"
    ],
    "optionsAr": [
      "38",
      "56",
      "9",
      "31"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0709"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Neon?",
    "ar": "ما العدد الذري لعنصر النيون؟",
    "options": [
      "10",
      "13",
      "9",
      "52"
    ],
    "optionsAr": [
      "10",
      "13",
      "9",
      "52"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0710"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Sodium?",
    "ar": "ما العدد الذري لعنصر الصوديوم؟",
    "options": [
      "8",
      "29",
      "11",
      "43"
    ],
    "optionsAr": [
      "8",
      "29",
      "11",
      "43"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0711"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Magnesium?",
    "ar": "ما العدد الذري لعنصر المغنيسيوم؟",
    "options": [
      "62",
      "12",
      "6",
      "32"
    ],
    "optionsAr": [
      "62",
      "12",
      "6",
      "32"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0712"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Aluminium?",
    "ar": "ما العدد الذري لعنصر الألومنيوم؟",
    "options": [
      "13",
      "26",
      "15",
      "21"
    ],
    "optionsAr": [
      "13",
      "26",
      "15",
      "21"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0713"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Silicon?",
    "ar": "ما العدد الذري لعنصر السيليكون؟",
    "options": [
      "28",
      "14",
      "67",
      "58"
    ],
    "optionsAr": [
      "28",
      "14",
      "67",
      "58"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0714"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Phosphorus?",
    "ar": "ما العدد الذري لعنصر الفوسفور؟",
    "options": [
      "68",
      "15",
      "50",
      "7"
    ],
    "optionsAr": [
      "68",
      "15",
      "50",
      "7"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0715"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Sulfur?",
    "ar": "ما العدد الذري لعنصر الكبريت؟",
    "options": [
      "16",
      "40",
      "1",
      "61"
    ],
    "optionsAr": [
      "16",
      "40",
      "1",
      "61"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0716"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Chlorine?",
    "ar": "ما العدد الذري لعنصر الكلور؟",
    "options": [
      "27",
      "58",
      "17",
      "60"
    ],
    "optionsAr": [
      "27",
      "58",
      "17",
      "60"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0717"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Argon?",
    "ar": "ما العدد الذري لعنصر الأرجون؟",
    "options": [
      "18",
      "51",
      "48",
      "36"
    ],
    "optionsAr": [
      "18",
      "51",
      "48",
      "36"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0718"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Potassium?",
    "ar": "ما العدد الذري لعنصر البوتاسيوم؟",
    "options": [
      "24",
      "57",
      "19",
      "51"
    ],
    "optionsAr": [
      "24",
      "57",
      "19",
      "51"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0719"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Calcium?",
    "ar": "ما العدد الذري لعنصر الكالسيوم؟",
    "options": [
      "38",
      "29",
      "20",
      "5"
    ],
    "optionsAr": [
      "38",
      "29",
      "20",
      "5"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0720"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Scandium?",
    "ar": "ما العدد الذري لعنصر السكانديوم؟",
    "options": [
      "53",
      "21",
      "19",
      "39"
    ],
    "optionsAr": [
      "53",
      "21",
      "19",
      "39"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0721"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Titanium?",
    "ar": "ما العدد الذري لعنصر التيتانيوم؟",
    "options": [
      "22",
      "34",
      "37",
      "48"
    ],
    "optionsAr": [
      "22",
      "34",
      "37",
      "48"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0722"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Vanadium?",
    "ar": "ما العدد الذري لعنصر الفاناديوم؟",
    "options": [
      "64",
      "39",
      "23",
      "42"
    ],
    "optionsAr": [
      "64",
      "39",
      "23",
      "42"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0723"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Chromium?",
    "ar": "ما العدد الذري لعنصر الكروم؟",
    "options": [
      "14",
      "69",
      "24",
      "62"
    ],
    "optionsAr": [
      "14",
      "69",
      "24",
      "62"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0724"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Manganese?",
    "ar": "ما العدد الذري لعنصر المنغنيز؟",
    "options": [
      "36",
      "63",
      "5",
      "25"
    ],
    "optionsAr": [
      "36",
      "63",
      "5",
      "25"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0725"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Iron?",
    "ar": "ما العدد الذري لعنصر الحديد؟",
    "options": [
      "26",
      "10",
      "18",
      "66"
    ],
    "optionsAr": [
      "26",
      "10",
      "18",
      "66"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0726"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Cobalt?",
    "ar": "ما العدد الذري لعنصر الكوبالت؟",
    "options": [
      "16",
      "27",
      "55",
      "7"
    ],
    "optionsAr": [
      "16",
      "27",
      "55",
      "7"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0727"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Nickel?",
    "ar": "ما العدد الذري لعنصر النيكل؟",
    "options": [
      "9",
      "26",
      "15",
      "28"
    ],
    "optionsAr": [
      "9",
      "26",
      "15",
      "28"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0728"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Copper?",
    "ar": "ما العدد الذري لعنصر النحاس؟",
    "options": [
      "29",
      "59",
      "7",
      "25"
    ],
    "optionsAr": [
      "29",
      "59",
      "7",
      "25"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0729"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Zinc?",
    "ar": "ما العدد الذري لعنصر الزنك؟",
    "options": [
      "29",
      "35",
      "23",
      "30"
    ],
    "optionsAr": [
      "29",
      "35",
      "23",
      "30"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0730"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Gallium?",
    "ar": "ما العدد الذري لعنصر الغاليوم؟",
    "options": [
      "31",
      "54",
      "35",
      "52"
    ],
    "optionsAr": [
      "31",
      "54",
      "35",
      "52"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0731"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Germanium?",
    "ar": "ما العدد الذري لعنصر الجرمانيوم؟",
    "options": [
      "32",
      "47",
      "20",
      "35"
    ],
    "optionsAr": [
      "32",
      "47",
      "20",
      "35"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0732"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Arsenic?",
    "ar": "ما العدد الذري لعنصر الزرنيخ؟",
    "options": [
      "33",
      "32",
      "46",
      "57"
    ],
    "optionsAr": [
      "33",
      "32",
      "46",
      "57"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0733"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Selenium?",
    "ar": "ما العدد الذري لعنصر السيلينيوم؟",
    "options": [
      "8",
      "34",
      "2",
      "55"
    ],
    "optionsAr": [
      "8",
      "34",
      "2",
      "55"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0734"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Bromine?",
    "ar": "ما العدد الذري لعنصر البروم؟",
    "options": [
      "29",
      "35",
      "61",
      "25"
    ],
    "optionsAr": [
      "29",
      "35",
      "61",
      "25"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0735"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Krypton?",
    "ar": "ما العدد الذري لعنصر الكريبتون؟",
    "options": [
      "55",
      "36",
      "23",
      "51"
    ],
    "optionsAr": [
      "55",
      "36",
      "23",
      "51"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0736"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Rubidium?",
    "ar": "ما العدد الذري لعنصر الروبيديوم؟",
    "options": [
      "49",
      "37",
      "29",
      "52"
    ],
    "optionsAr": [
      "49",
      "37",
      "29",
      "52"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0737"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Strontium?",
    "ar": "ما العدد الذري لعنصر السترونشيوم؟",
    "options": [
      "29",
      "38",
      "28",
      "52"
    ],
    "optionsAr": [
      "29",
      "38",
      "28",
      "52"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0738"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Yttrium?",
    "ar": "ما العدد الذري لعنصر الإيتريوم؟",
    "options": [
      "20",
      "10",
      "43",
      "39"
    ],
    "optionsAr": [
      "20",
      "10",
      "43",
      "39"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0739"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Zirconium?",
    "ar": "ما العدد الذري لعنصر الزركونيوم؟",
    "options": [
      "10",
      "40",
      "7",
      "50"
    ],
    "optionsAr": [
      "10",
      "40",
      "7",
      "50"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0740"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Niobium?",
    "ar": "ما العدد الذري لعنصر النيوبيوم؟",
    "options": [
      "23",
      "18",
      "4",
      "41"
    ],
    "optionsAr": [
      "23",
      "18",
      "4",
      "41"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0741"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Molybdenum?",
    "ar": "ما العدد الذري لعنصر الموليبدينوم؟",
    "options": [
      "42",
      "26",
      "63",
      "51"
    ],
    "optionsAr": [
      "42",
      "26",
      "63",
      "51"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0742"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Technetium?",
    "ar": "ما العدد الذري لعنصر التكنيتيوم؟",
    "options": [
      "43",
      "58",
      "1",
      "52"
    ],
    "optionsAr": [
      "43",
      "58",
      "1",
      "52"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0743"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Ruthenium?",
    "ar": "ما العدد الذري لعنصر الروثينيوم؟",
    "options": [
      "52",
      "18",
      "1",
      "44"
    ],
    "optionsAr": [
      "52",
      "18",
      "1",
      "44"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0744"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Rhodium?",
    "ar": "ما العدد الذري لعنصر الروديوم؟",
    "options": [
      "45",
      "23",
      "30",
      "38"
    ],
    "optionsAr": [
      "45",
      "23",
      "30",
      "38"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0745"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Palladium?",
    "ar": "ما العدد الذري لعنصر البلاديوم؟",
    "options": [
      "38",
      "46",
      "57",
      "41"
    ],
    "optionsAr": [
      "38",
      "46",
      "57",
      "41"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0746"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Silver?",
    "ar": "ما العدد الذري لعنصر الفضة؟",
    "options": [
      "47",
      "70",
      "40",
      "28"
    ],
    "optionsAr": [
      "47",
      "70",
      "40",
      "28"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0747"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Cadmium?",
    "ar": "ما العدد الذري لعنصر الكادميوم؟",
    "options": [
      "47",
      "48",
      "25",
      "42"
    ],
    "optionsAr": [
      "47",
      "48",
      "25",
      "42"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0748"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Indium?",
    "ar": "ما العدد الذري لعنصر الإنديوم؟",
    "options": [
      "14",
      "26",
      "49",
      "37"
    ],
    "optionsAr": [
      "14",
      "26",
      "49",
      "37"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0749"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Tin?",
    "ar": "ما العدد الذري لعنصر القصدير؟",
    "options": [
      "57",
      "38",
      "50",
      "59"
    ],
    "optionsAr": [
      "57",
      "38",
      "50",
      "59"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0750"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Antimony?",
    "ar": "ما العدد الذري لعنصر الأنتيمون؟",
    "options": [
      "36",
      "6",
      "51",
      "50"
    ],
    "optionsAr": [
      "36",
      "6",
      "51",
      "50"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0751"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Tellurium?",
    "ar": "ما العدد الذري لعنصر التيلوريوم؟",
    "options": [
      "46",
      "24",
      "52",
      "35"
    ],
    "optionsAr": [
      "46",
      "24",
      "52",
      "35"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0752"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Iodine?",
    "ar": "ما العدد الذري لعنصر اليود؟",
    "options": [
      "53",
      "18",
      "47",
      "54"
    ],
    "optionsAr": [
      "53",
      "18",
      "47",
      "54"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0753"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Xenon?",
    "ar": "ما العدد الذري لعنصر الزينون؟",
    "options": [
      "33",
      "63",
      "47",
      "54"
    ],
    "optionsAr": [
      "33",
      "63",
      "47",
      "54"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0754"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Caesium?",
    "ar": "ما العدد الذري لعنصر السيزيوم؟",
    "options": [
      "30",
      "55",
      "64",
      "19"
    ],
    "optionsAr": [
      "30",
      "55",
      "64",
      "19"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0755"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Barium?",
    "ar": "ما العدد الذري لعنصر الباريوم؟",
    "options": [
      "61",
      "56",
      "50",
      "2"
    ],
    "optionsAr": [
      "61",
      "56",
      "50",
      "2"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0756"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Lanthanum?",
    "ar": "ما العدد الذري لعنصر اللانثانوم؟",
    "options": [
      "7",
      "50",
      "57",
      "8"
    ],
    "optionsAr": [
      "7",
      "50",
      "57",
      "8"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0757"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Cerium?",
    "ar": "ما العدد الذري لعنصر السيريوم؟",
    "options": [
      "58",
      "16",
      "15",
      "62"
    ],
    "optionsAr": [
      "58",
      "16",
      "15",
      "62"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0758"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Praseodymium?",
    "ar": "ما العدد الذري لعنصر البراسيوديميوم؟",
    "options": [
      "22",
      "43",
      "23",
      "59"
    ],
    "optionsAr": [
      "22",
      "43",
      "23",
      "59"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0759"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Neodymium?",
    "ar": "ما العدد الذري لعنصر النيوديميوم؟",
    "options": [
      "69",
      "59",
      "4",
      "60"
    ],
    "optionsAr": [
      "69",
      "59",
      "4",
      "60"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0760"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Promethium?",
    "ar": "ما العدد الذري لعنصر البروميثيوم؟",
    "options": [
      "61",
      "19",
      "45",
      "4"
    ],
    "optionsAr": [
      "61",
      "19",
      "45",
      "4"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0761"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Samarium?",
    "ar": "ما العدد الذري لعنصر الساماريوم؟",
    "options": [
      "62",
      "11",
      "47",
      "26"
    ],
    "optionsAr": [
      "62",
      "11",
      "47",
      "26"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0762"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Europium?",
    "ar": "ما العدد الذري لعنصر اليوروبيوم؟",
    "options": [
      "40",
      "52",
      "17",
      "63"
    ],
    "optionsAr": [
      "40",
      "52",
      "17",
      "63"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0763"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Gadolinium?",
    "ar": "ما العدد الذري لعنصر الغادولينيوم؟",
    "options": [
      "31",
      "69",
      "56",
      "64"
    ],
    "optionsAr": [
      "31",
      "69",
      "56",
      "64"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0764"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Terbium?",
    "ar": "ما العدد الذري لعنصر التيربيوم؟",
    "options": [
      "48",
      "65",
      "49",
      "6"
    ],
    "optionsAr": [
      "48",
      "65",
      "49",
      "6"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0765"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Dysprosium?",
    "ar": "ما العدد الذري لعنصر الديسبروسيوم؟",
    "options": [
      "51",
      "66",
      "5",
      "12"
    ],
    "optionsAr": [
      "51",
      "66",
      "5",
      "12"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0766"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Holmium?",
    "ar": "ما العدد الذري لعنصر الهولميوم؟",
    "options": [
      "69",
      "67",
      "61",
      "38"
    ],
    "optionsAr": [
      "69",
      "67",
      "61",
      "38"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0767"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Erbium?",
    "ar": "ما العدد الذري لعنصر الإربيوم؟",
    "options": [
      "15",
      "36",
      "68",
      "22"
    ],
    "optionsAr": [
      "15",
      "36",
      "68",
      "22"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0768"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Thulium?",
    "ar": "ما العدد الذري لعنصر الثوليوم؟",
    "options": [
      "4",
      "69",
      "10",
      "14"
    ],
    "optionsAr": [
      "4",
      "69",
      "10",
      "14"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0769"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Ytterbium?",
    "ar": "ما العدد الذري لعنصر الإيتربيوم؟",
    "options": [
      "70",
      "39",
      "41",
      "52"
    ],
    "optionsAr": [
      "70",
      "39",
      "41",
      "52"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0770"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 1.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 1.0 وحدة كتلة ذرية؟",
    "options": [
      "Titanium",
      "Krypton",
      "Aluminium",
      "Hydrogen"
    ],
    "optionsAr": [
      "تيتانيوم",
      "كريبتون",
      "الومينيوم",
      "الهيدروجين"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0771"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 4.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 4.0 وحدة كتلة ذرية؟",
    "options": [
      "Ytterbium",
      "Aluminium",
      "Argon",
      "Helium"
    ],
    "optionsAr": [
      "يتتيربيوم",
      "الومينيوم",
      "ارجون",
      "الهيليوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0772"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 6.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 6.9 وحدة كتلة ذرية؟",
    "options": [
      "Selenium",
      "Lithium",
      "Carbon",
      "Beryllium"
    ],
    "optionsAr": [
      "سيلينيوم",
      "ليتهيوم",
      "كاربون",
      "بيريلليوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0773"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 9.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 9.0 وحدة كتلة ذرية؟",
    "options": [
      "Neon",
      "Tellurium",
      "Iron",
      "Beryllium"
    ],
    "optionsAr": [
      "نيون",
      "تيللوريوم",
      "الحديد",
      "بيريلليوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0774"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 10.8 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 10.8 وحدة كتلة ذرية؟",
    "options": [
      "Promethium",
      "Zinc",
      "Boron",
      "Caesium"
    ],
    "optionsAr": [
      "بروميتهيوم",
      "زينك",
      "بورون",
      "كايسيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0775"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 12.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 12.0 وحدة كتلة ذرية؟",
    "options": [
      "Carbon",
      "Aluminium",
      "Rhodium",
      "Yttrium"
    ],
    "optionsAr": [
      "كاربون",
      "الومينيوم",
      "رهوديوم",
      "يتتريوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0776"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 14.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 14.0 وحدة كتلة ذرية؟",
    "options": [
      "Fluorine",
      "Nitrogen",
      "Arsenic",
      "Iodine"
    ],
    "optionsAr": [
      "فلووريني",
      "النيتروجين",
      "ارسينيك",
      "يوديني"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0777"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 16.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 16.0 وحدة كتلة ذرية؟",
    "options": [
      "Xenon",
      "Oxygen",
      "Zinc",
      "Fluorine"
    ],
    "optionsAr": [
      "كسينون",
      "الأكسجين",
      "زينك",
      "فلووريني"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0778"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 19.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 19.0 وحدة كتلة ذرية؟",
    "options": [
      "Erbium",
      "Fluorine",
      "Silver",
      "Sodium"
    ],
    "optionsAr": [
      "يربيوم",
      "فلووريني",
      "الفضة",
      "سوديوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0779"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 20.2 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 20.2 وحدة كتلة ذرية؟",
    "options": [
      "Krypton",
      "Germanium",
      "Neon",
      "Arsenic"
    ],
    "optionsAr": [
      "كريبتون",
      "جيرمانيوم",
      "نيون",
      "ارسينيك"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0780"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 23.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 23.0 وحدة كتلة ذرية؟",
    "options": [
      "Vanadium",
      "Sodium",
      "Carbon",
      "Beryllium"
    ],
    "optionsAr": [
      "فاناديوم",
      "سوديوم",
      "كاربون",
      "بيريلليوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0781"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 24.3 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 24.3 وحدة كتلة ذرية؟",
    "options": [
      "Manganese",
      "Tellurium",
      "Magnesium",
      "Erbium"
    ],
    "optionsAr": [
      "مانجانيسي",
      "تيللوريوم",
      "ماجنيسيوم",
      "يربيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0782"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 27.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 27.0 وحدة كتلة ذرية؟",
    "options": [
      "Scandium",
      "Iodine",
      "Aluminium",
      "Fluorine"
    ],
    "optionsAr": [
      "سكانديوم",
      "يوديني",
      "الومينيوم",
      "فلووريني"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0783"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 28.1 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 28.1 وحدة كتلة ذرية؟",
    "options": [
      "Silicon",
      "Antimony",
      "Chromium",
      "Tin"
    ],
    "optionsAr": [
      "سيليكون",
      "انتيموني",
      "كهروميوم",
      "تين"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0784"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 31.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 31.0 وحدة كتلة ذرية؟",
    "options": [
      "Cobalt",
      "Phosphorus",
      "Lithium",
      "Potassium"
    ],
    "optionsAr": [
      "كوبالت",
      "بهوسبهوروس",
      "ليتهيوم",
      "بوتاسسيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0785"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 32.1 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 32.1 وحدة كتلة ذرية؟",
    "options": [
      "Antimony",
      "Sulfur",
      "Bromine",
      "Ytterbium"
    ],
    "optionsAr": [
      "انتيموني",
      "سولفور",
      "بروميني",
      "يتتيربيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0786"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 35.5 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 35.5 وحدة كتلة ذرية؟",
    "options": [
      "Chlorine",
      "Ruthenium",
      "Europium",
      "Caesium"
    ],
    "optionsAr": [
      "كهلوريني",
      "روتهينيوم",
      "يوروبيوم",
      "كايسيوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0787"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 39.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 39.9 وحدة كتلة ذرية؟",
    "options": [
      "Strontium",
      "Praseodymium",
      "Thulium",
      "Argon"
    ],
    "optionsAr": [
      "سترونتيوم",
      "براسيوديميوم",
      "تهوليوم",
      "ارجون"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0788"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 39.1 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 39.1 وحدة كتلة ذرية؟",
    "options": [
      "Aluminium",
      "Potassium",
      "Terbium",
      "Caesium"
    ],
    "optionsAr": [
      "الومينيوم",
      "بوتاسسيوم",
      "تيربيوم",
      "كايسيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0789"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 40.1 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 40.1 وحدة كتلة ذرية؟",
    "options": [
      "Fluorine",
      "Rubidium",
      "Promethium",
      "Calcium"
    ],
    "optionsAr": [
      "فلووريني",
      "روبيديوم",
      "بروميتهيوم",
      "كالكيوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0790"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 45.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 45.0 وحدة كتلة ذرية؟",
    "options": [
      "Silicon",
      "Scandium",
      "Molybdenum",
      "Aluminium"
    ],
    "optionsAr": [
      "سيليكون",
      "سكانديوم",
      "موليبدينوم",
      "الومينيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0791"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 47.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 47.9 وحدة كتلة ذرية؟",
    "options": [
      "Titanium",
      "Barium",
      "Nickel",
      "Nitrogen"
    ],
    "optionsAr": [
      "تيتانيوم",
      "باريوم",
      "نيككيل",
      "النيتروجين"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0792"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 50.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 50.9 وحدة كتلة ذرية؟",
    "options": [
      "Vanadium",
      "Silver",
      "Helium",
      "Strontium"
    ],
    "optionsAr": [
      "فاناديوم",
      "الفضة",
      "الهيليوم",
      "سترونتيوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0793"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 52.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 52.0 وحدة كتلة ذرية؟",
    "options": [
      "Yttrium",
      "Chromium",
      "Krypton",
      "Nickel"
    ],
    "optionsAr": [
      "يتتريوم",
      "كهروميوم",
      "كريبتون",
      "نيككيل"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0794"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 54.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 54.9 وحدة كتلة ذرية؟",
    "options": [
      "Cerium",
      "Yttrium",
      "Manganese",
      "Neon"
    ],
    "optionsAr": [
      "كيريوم",
      "يتتريوم",
      "مانجانيسي",
      "نيون"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0795"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 55.8 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 55.8 وحدة كتلة ذرية؟",
    "options": [
      "Iron",
      "Germanium",
      "Potassium",
      "Silver"
    ],
    "optionsAr": [
      "الحديد",
      "جيرمانيوم",
      "بوتاسسيوم",
      "الفضة"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0796"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 58.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 58.9 وحدة كتلة ذرية؟",
    "options": [
      "Argon",
      "Cobalt",
      "Antimony",
      "Gadolinium"
    ],
    "optionsAr": [
      "ارجون",
      "كوبالت",
      "انتيموني",
      "جادولينيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0797"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 58.7 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 58.7 وحدة كتلة ذرية؟",
    "options": [
      "Titanium",
      "Ytterbium",
      "Nickel",
      "Phosphorus"
    ],
    "optionsAr": [
      "تيتانيوم",
      "يتتيربيوم",
      "نيككيل",
      "بهوسبهوروس"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0798"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 63.5 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 63.5 وحدة كتلة ذرية؟",
    "options": [
      "Selenium",
      "Indium",
      "Molybdenum",
      "Copper"
    ],
    "optionsAr": [
      "سيلينيوم",
      "ينديوم",
      "موليبدينوم",
      "النحاس"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0799"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 65.4 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 65.4 وحدة كتلة ذرية؟",
    "options": [
      "Lanthanum",
      "Selenium",
      "Zinc",
      "Europium"
    ],
    "optionsAr": [
      "لانتهانوم",
      "سيلينيوم",
      "زينك",
      "يوروبيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0800"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 69.7 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 69.7 وحدة كتلة ذرية؟",
    "options": [
      "Selenium",
      "Boron",
      "Gallium",
      "Sulfur"
    ],
    "optionsAr": [
      "سيلينيوم",
      "بورون",
      "جالليوم",
      "سولفور"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0801"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 72.6 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 72.6 وحدة كتلة ذرية؟",
    "options": [
      "Copper",
      "Germanium",
      "Chlorine",
      "Calcium"
    ],
    "optionsAr": [
      "النحاس",
      "جيرمانيوم",
      "كهلوريني",
      "كالكيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0802"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 74.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 74.9 وحدة كتلة ذرية؟",
    "options": [
      "Boron",
      "Arsenic",
      "Argon",
      "Hydrogen"
    ],
    "optionsAr": [
      "بورون",
      "ارسينيك",
      "ارجون",
      "الهيدروجين"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0803"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 79.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 79.0 وحدة كتلة ذرية؟",
    "options": [
      "Boron",
      "Hydrogen",
      "Selenium",
      "Gallium"
    ],
    "optionsAr": [
      "بورون",
      "الهيدروجين",
      "سيلينيوم",
      "جالليوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0804"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 79.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 79.9 وحدة كتلة ذرية؟",
    "options": [
      "Dysprosium",
      "Krypton",
      "Thulium",
      "Bromine"
    ],
    "optionsAr": [
      "ديسبروسيوم",
      "كريبتون",
      "تهوليوم",
      "بروميني"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0805"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 83.8 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 83.8 وحدة كتلة ذرية؟",
    "options": [
      "Bromine",
      "Sulfur",
      "Krypton",
      "Copper"
    ],
    "optionsAr": [
      "بروميني",
      "سولفور",
      "كريبتون",
      "النحاس"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0806"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 85.5 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 85.5 وحدة كتلة ذرية؟",
    "options": [
      "Krypton",
      "Calcium",
      "Thulium",
      "Rubidium"
    ],
    "optionsAr": [
      "كريبتون",
      "كالكيوم",
      "تهوليوم",
      "روبيديوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0807"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 87.6 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 87.6 وحدة كتلة ذرية؟",
    "options": [
      "Hydrogen",
      "Boron",
      "Gadolinium",
      "Strontium"
    ],
    "optionsAr": [
      "الهيدروجين",
      "بورون",
      "جادولينيوم",
      "سترونتيوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0808"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 88.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 88.9 وحدة كتلة ذرية؟",
    "options": [
      "Praseodymium",
      "Tellurium",
      "Yttrium",
      "Ytterbium"
    ],
    "optionsAr": [
      "براسيوديميوم",
      "تيللوريوم",
      "يتتريوم",
      "يتتيربيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0809"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 91.2 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 91.2 وحدة كتلة ذرية؟",
    "options": [
      "Zinc",
      "Scandium",
      "Gallium",
      "Zirconium"
    ],
    "optionsAr": [
      "زينك",
      "سكانديوم",
      "جالليوم",
      "زيركونيوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0810"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 92.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 92.9 وحدة كتلة ذرية؟",
    "options": [
      "Silicon",
      "Sulfur",
      "Terbium",
      "Niobium"
    ],
    "optionsAr": [
      "سيليكون",
      "سولفور",
      "تيربيوم",
      "نيوبيوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0811"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 95.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 95.9 وحدة كتلة ذرية؟",
    "options": [
      "Molybdenum",
      "Europium",
      "Barium",
      "Cobalt"
    ],
    "optionsAr": [
      "موليبدينوم",
      "يوروبيوم",
      "باريوم",
      "كوبالت"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0812"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 98.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 98.0 وحدة كتلة ذرية؟",
    "options": [
      "Silicon",
      "Technetium",
      "Carbon",
      "Gallium"
    ],
    "optionsAr": [
      "سيليكون",
      "تيكهنيتيوم",
      "كاربون",
      "جالليوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0813"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 101.1 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 101.1 وحدة كتلة ذرية؟",
    "options": [
      "Cobalt",
      "Ruthenium",
      "Hydrogen",
      "Titanium"
    ],
    "optionsAr": [
      "كوبالت",
      "روتهينيوم",
      "الهيدروجين",
      "تيتانيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0814"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 102.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 102.9 وحدة كتلة ذرية؟",
    "options": [
      "Rhodium",
      "Calcium",
      "Vanadium",
      "Titanium"
    ],
    "optionsAr": [
      "رهوديوم",
      "كالكيوم",
      "فاناديوم",
      "تيتانيوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0815"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 106.4 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 106.4 وحدة كتلة ذرية؟",
    "options": [
      "Lithium",
      "Tin",
      "Palladium",
      "Rubidium"
    ],
    "optionsAr": [
      "ليتهيوم",
      "تين",
      "باللاديوم",
      "روبيديوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0816"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 107.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 107.9 وحدة كتلة ذرية؟",
    "options": [
      "Xenon",
      "Fluorine",
      "Silver",
      "Ytterbium"
    ],
    "optionsAr": [
      "كسينون",
      "فلووريني",
      "الفضة",
      "يتتيربيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0817"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 112.4 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 112.4 وحدة كتلة ذرية؟",
    "options": [
      "Molybdenum",
      "Rhodium",
      "Cadmium",
      "Nitrogen"
    ],
    "optionsAr": [
      "موليبدينوم",
      "رهوديوم",
      "كادميوم",
      "النيتروجين"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0818"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 114.8 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 114.8 وحدة كتلة ذرية؟",
    "options": [
      "Indium",
      "Erbium",
      "Ytterbium",
      "Titanium"
    ],
    "optionsAr": [
      "ينديوم",
      "يربيوم",
      "يتتيربيوم",
      "تيتانيوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0819"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 118.7 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 118.7 وحدة كتلة ذرية؟",
    "options": [
      "Scandium",
      "Cobalt",
      "Tin",
      "Boron"
    ],
    "optionsAr": [
      "سكانديوم",
      "كوبالت",
      "تين",
      "بورون"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0820"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 121.8 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 121.8 وحدة كتلة ذرية؟",
    "options": [
      "Antimony",
      "Fluorine",
      "Iodine",
      "Samarium"
    ],
    "optionsAr": [
      "انتيموني",
      "فلووريني",
      "يوديني",
      "ساماريوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0821"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 127.6 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 127.6 وحدة كتلة ذرية؟",
    "options": [
      "Potassium",
      "Indium",
      "Tellurium",
      "Antimony"
    ],
    "optionsAr": [
      "بوتاسسيوم",
      "ينديوم",
      "تيللوريوم",
      "انتيموني"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0822"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 126.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 126.9 وحدة كتلة ذرية؟",
    "options": [
      "Iodine",
      "Erbium",
      "Terbium",
      "Ruthenium"
    ],
    "optionsAr": [
      "يوديني",
      "يربيوم",
      "تيربيوم",
      "روتهينيوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0823"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 131.3 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 131.3 وحدة كتلة ذرية؟",
    "options": [
      "Nickel",
      "Samarium",
      "Xenon",
      "Dysprosium"
    ],
    "optionsAr": [
      "نيككيل",
      "ساماريوم",
      "كسينون",
      "ديسبروسيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0824"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 132.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 132.9 وحدة كتلة ذرية؟",
    "options": [
      "Phosphorus",
      "Holmium",
      "Chlorine",
      "Caesium"
    ],
    "optionsAr": [
      "بهوسبهوروس",
      "هولميوم",
      "كهلوريني",
      "كايسيوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0825"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 137.3 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 137.3 وحدة كتلة ذرية؟",
    "options": [
      "Barium",
      "Lanthanum",
      "Silicon",
      "Vanadium"
    ],
    "optionsAr": [
      "باريوم",
      "لانتهانوم",
      "سيليكون",
      "فاناديوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0826"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 138.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 138.9 وحدة كتلة ذرية؟",
    "options": [
      "Lanthanum",
      "Nitrogen",
      "Vanadium",
      "Germanium"
    ],
    "optionsAr": [
      "لانتهانوم",
      "النيتروجين",
      "فاناديوم",
      "جيرمانيوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0827"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 140.1 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 140.1 وحدة كتلة ذرية؟",
    "options": [
      "Nickel",
      "Selenium",
      "Cerium",
      "Manganese"
    ],
    "optionsAr": [
      "نيككيل",
      "سيلينيوم",
      "كيريوم",
      "مانجانيسي"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0828"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 140.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 140.9 وحدة كتلة ذرية؟",
    "options": [
      "Terbium",
      "Yttrium",
      "Praseodymium",
      "Niobium"
    ],
    "optionsAr": [
      "تيربيوم",
      "يتتريوم",
      "براسيوديميوم",
      "نيوبيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0829"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 144.2 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 144.2 وحدة كتلة ذرية؟",
    "options": [
      "Rubidium",
      "Dysprosium",
      "Neodymium",
      "Caesium"
    ],
    "optionsAr": [
      "روبيديوم",
      "ديسبروسيوم",
      "نيوديميوم",
      "كايسيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0830"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 145.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 145.0 وحدة كتلة ذرية؟",
    "options": [
      "Erbium",
      "Gallium",
      "Promethium",
      "Lithium"
    ],
    "optionsAr": [
      "يربيوم",
      "جالليوم",
      "بروميتهيوم",
      "ليتهيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0831"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 150.4 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 150.4 وحدة كتلة ذرية؟",
    "options": [
      "Magnesium",
      "Thulium",
      "Samarium",
      "Nitrogen"
    ],
    "optionsAr": [
      "ماجنيسيوم",
      "تهوليوم",
      "ساماريوم",
      "النيتروجين"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0832"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 152.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 152.0 وحدة كتلة ذرية؟",
    "options": [
      "Beryllium",
      "Cobalt",
      "Europium",
      "Dysprosium"
    ],
    "optionsAr": [
      "بيريلليوم",
      "كوبالت",
      "يوروبيوم",
      "ديسبروسيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0833"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 157.2 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 157.2 وحدة كتلة ذرية؟",
    "options": [
      "Molybdenum",
      "Terbium",
      "Gadolinium",
      "Sodium"
    ],
    "optionsAr": [
      "موليبدينوم",
      "تيربيوم",
      "جادولينيوم",
      "سوديوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0834"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 158.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 158.9 وحدة كتلة ذرية؟",
    "options": [
      "Terbium",
      "Cadmium",
      "Holmium",
      "Antimony"
    ],
    "optionsAr": [
      "تيربيوم",
      "كادميوم",
      "هولميوم",
      "انتيموني"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0835"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 162.5 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 162.5 وحدة كتلة ذرية؟",
    "options": [
      "Praseodymium",
      "Bromine",
      "Cadmium",
      "Dysprosium"
    ],
    "optionsAr": [
      "براسيوديميوم",
      "بروميني",
      "كادميوم",
      "ديسبروسيوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0836"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 164.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 164.9 وحدة كتلة ذرية؟",
    "options": [
      "Iron",
      "Europium",
      "Holmium",
      "Copper"
    ],
    "optionsAr": [
      "الحديد",
      "يوروبيوم",
      "هولميوم",
      "النحاس"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0837"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 167.3 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 167.3 وحدة كتلة ذرية؟",
    "options": [
      "Nickel",
      "Lanthanum",
      "Erbium",
      "Technetium"
    ],
    "optionsAr": [
      "نيككيل",
      "لانتهانوم",
      "يربيوم",
      "تيكهنيتيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0838"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 168.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 168.9 وحدة كتلة ذرية؟",
    "options": [
      "Fluorine",
      "Dysprosium",
      "Thulium",
      "Zirconium"
    ],
    "optionsAr": [
      "فلووريني",
      "ديسبروسيوم",
      "تهوليوم",
      "زيركونيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0839"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 173.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 173.0 وحدة كتلة ذرية؟",
    "options": [
      "Ytterbium",
      "Zirconium",
      "Neon",
      "Nickel"
    ],
    "optionsAr": [
      "يتتيربيوم",
      "زيركونيوم",
      "نيون",
      "نيككيل"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0840"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Super Mario Bros.”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Super Mario Bros.»؟",
    "options": [
      "Cloud Strife",
      "Doomguy",
      "The Chosen Undead",
      "Mario"
    ],
    "optionsAr": [
      "كلوود ستريفي",
      "دوومجوي",
      "المختار غير الميت",
      "ماريو"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0841"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Minecraft”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Minecraft»؟",
    "options": [
      "A group of survivors",
      "Steve",
      "Peter Parker",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "مجموعة من الناجين",
      "ستيفي",
      "بيتير باركير",
      "لا توجد شخصية رئيسية ثابتة"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0842"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “The Legend of Zelda: Breath of the Wild”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «The Legend of Zelda: Breath of the Wild»؟",
    "options": [
      "Aloy",
      "Link",
      "Cole Phelps",
      "Master Chief"
    ],
    "optionsAr": [
      "الوي",
      "لينك",
      "كولي بهيلبس",
      "ماستير كهييف"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0843"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “The Legend of Zelda: Tears of the Kingdom”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «The Legend of Zelda: Tears of the Kingdom»؟",
    "options": [
      "The player-created character",
      "Mario",
      "Link",
      "The Hunter"
    ],
    "optionsAr": [
      "الشخصية التي ينشئها اللاعب",
      "ماريو",
      "لينك",
      "الصياد"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0844"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Pokémon Red and Blue”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Pokémon Red and Blue»؟",
    "options": [
      "Red",
      "Ratchet",
      "Joel",
      "Jin Sakai"
    ],
    "optionsAr": [
      "ريد",
      "راتكهيت",
      "جويل",
      "جين ساكاي"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0845"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Tetris”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Tetris»؟",
    "options": [
      "Pac-Man",
      "No fixed protagonist",
      "Joel",
      "Dante"
    ],
    "optionsAr": [
      "باك-مان",
      "لا توجد شخصية رئيسية ثابتة",
      "جويل",
      "دانتي"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0846"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Sonic the Hedgehog”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Sonic the Hedgehog»؟",
    "options": [
      "Arthur Morgan",
      "Sonic",
      "Jimmy Hopkins",
      "Link"
    ],
    "optionsAr": [
      "ارتهور مورجان",
      "سونيك",
      "جيممي هوبكينس",
      "لينك"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0847"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Pac-Man”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Pac-Man»؟",
    "options": [
      "Pac-Man",
      "Sonic",
      "The player character",
      "Steve"
    ],
    "optionsAr": [
      "باك-مان",
      "سونيك",
      "تهي بلايير كهاراكتير",
      "ستيفي"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0848"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Donkey Kong”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Donkey Kong»؟",
    "options": [
      "A group of survivors",
      "Tracer and other heroes",
      "Mario",
      "Joel"
    ],
    "optionsAr": [
      "مجموعة من الناجين",
      "تراكير اند وتهير هيرويس",
      "ماريو",
      "جويل"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0849"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Metroid”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Metroid»؟",
    "options": [
      "Samus Aran",
      "The Sole Survivor",
      "No fixed protagonist",
      "The player character"
    ],
    "optionsAr": [
      "ساموس اران",
      "تهي سولي سورفيفور",
      "لا توجد شخصية رئيسية ثابتة",
      "تهي بلايير كهاراكتير"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0850"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Final Fantasy VII”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Final Fantasy VII»؟",
    "options": [
      "Leon S. Kennedy",
      "Cloud Strife",
      "Pac-Man",
      "A group of survivors"
    ],
    "optionsAr": [
      "ليون س. كيننيدي",
      "كلوود ستريفي",
      "باك-مان",
      "مجموعة من الناجين"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0851"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Final Fantasy X”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Final Fantasy X»؟",
    "options": [
      "The Hunter",
      "Joel",
      "Tidus",
      "The player avatar"
    ],
    "optionsAr": [
      "الصياد",
      "جويل",
      "تيدوس",
      "تهي بلايير افاتار"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0852"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Dragon Quest XI”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Dragon Quest XI»؟",
    "options": [
      "Samus Aran",
      "Sonic",
      "Jin Sakai",
      "The Luminary"
    ],
    "optionsAr": [
      "ساموس اران",
      "سونيك",
      "جين ساكاي",
      "تهي لوميناري"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0853"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Kingdom Hearts”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Kingdom Hearts»؟",
    "options": [
      "Gordon Freeman",
      "Dante",
      "Sora",
      "A selectable class hero"
    ],
    "optionsAr": [
      "جوردون فرييمان",
      "دانتي",
      "سورا",
      "ا سيليكتابلي كلاسس هيرو"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0854"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Street Fighter II”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Street Fighter II»؟",
    "options": [
      "Doomguy",
      "The Chosen Undead",
      "Steve",
      "Ryu"
    ],
    "optionsAr": [
      "دوومجوي",
      "المختار غير الميت",
      "ستيفي",
      "ريو"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0855"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Resident Evil”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Resident Evil»؟",
    "options": [
      "The player avatar",
      "Chris Redfield and Jill Valentine",
      "The Sole Survivor",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "تهي بلايير افاتار",
      "كهريس ريدفييلد اند جيلل فالينتيني",
      "تهي سولي سورفيفور",
      "لا توجد شخصية رئيسية ثابتة"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0856"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Resident Evil 4”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Resident Evil 4»؟",
    "options": [
      "A choice of playable heroes",
      "The Sole Survivor",
      "Leon S. Kennedy",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "ا كهويكي وف بلايابلي هيرويس",
      "تهي سولي سورفيفور",
      "ليون س. كيننيدي",
      "لا توجد شخصية رئيسية ثابتة"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0857"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Mega Man”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Mega Man»؟",
    "options": [
      "Mega Man",
      "Gordon Freeman",
      "Ratchet",
      "Jin Kazama"
    ],
    "optionsAr": [
      "ميجا مان",
      "جوردون فرييمان",
      "راتكهيت",
      "جين كازاما"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0858"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Devil May Cry”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Devil May Cry»؟",
    "options": [
      "Kratos",
      "Chell",
      "Dante",
      "Aloy"
    ],
    "optionsAr": [
      "كراتوس",
      "كهيلل",
      "دانتي",
      "الوي"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0859"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Monster Hunter: World”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Monster Hunter: World»؟",
    "options": [
      "The Hunter",
      "Master Chief",
      "Cloud Strife",
      "V"
    ],
    "optionsAr": [
      "الصياد",
      "ماستير كهييف",
      "كلوود ستريفي",
      "V"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0860"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Halo: Combat Evolved”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Halo: Combat Evolved»؟",
    "options": [
      "The player-created character",
      "The Hunter",
      "Marcus Fenix",
      "Master Chief"
    ],
    "optionsAr": [
      "الشخصية التي ينشئها اللاعب",
      "الصياد",
      "ماركوس فينيكس",
      "ماستير كهييف"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0861"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Halo Infinite”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Halo Infinite»؟",
    "options": [
      "The Sole Survivor",
      "Red",
      "Jim Raynor",
      "Master Chief"
    ],
    "optionsAr": [
      "تهي سولي سورفيفور",
      "ريد",
      "جيم راينور",
      "ماستير كهييف"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0862"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Gears of War”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Gears of War»؟",
    "options": [
      "Peter Parker",
      "Wolf",
      "Marcus Fenix",
      "The player-created Sims"
    ],
    "optionsAr": [
      "بيتير باركير",
      "وولف",
      "ماركوس فينيكس",
      "تهي بلايير-كرياتيد سيمس"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0863"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Forza Horizon 5”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Forza Horizon 5»؟",
    "options": [
      "The Luminary",
      "Doomguy",
      "The player avatar",
      "Kratos"
    ],
    "optionsAr": [
      "تهي لوميناري",
      "دوومجوي",
      "تهي بلايير افاتار",
      "كراتوس"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0864"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Age of Empires II”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Age of Empires II»؟",
    "options": [
      "The player-created Sims",
      "Jim Raynor",
      "Marcus Fenix",
      "No single fixed protagonist"
    ],
    "optionsAr": [
      "تهي بلايير-كرياتيد سيمس",
      "جيم راينور",
      "ماركوس فينيكس",
      "نو سينجلي فيكسيد بروتاجونيست"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0865"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Doom”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Doom»؟",
    "options": [
      "Doomguy",
      "Geralt of Rivia",
      "Chell",
      "Aloy"
    ],
    "optionsAr": [
      "دوومجوي",
      "جيرالت وف ريفيا",
      "كهيلل",
      "الوي"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0866"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Quake”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Quake»؟",
    "options": [
      "Leon S. Kennedy",
      "Ranger",
      "Ratchet",
      "Mario"
    ],
    "optionsAr": [
      "ليون س. كيننيدي",
      "رانجير",
      "راتكهيت",
      "ماريو"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0867"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Wolfenstein 3D”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Wolfenstein 3D»؟",
    "options": [
      "The Sole Survivor",
      "A group of survivors",
      "Ryu",
      "B. J. Blazkowicz"
    ],
    "optionsAr": [
      "تهي سولي سورفيفور",
      "مجموعة من الناجين",
      "ريو",
      "ب. ج. بلازكوويكز"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0868"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “The Elder Scrolls V: Skyrim”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «The Elder Scrolls V: Skyrim»؟",
    "options": [
      "The Hunter",
      "Peter Parker",
      "No single fixed protagonist",
      "The Dragonborn"
    ],
    "optionsAr": [
      "الصياد",
      "بيتير باركير",
      "نو سينجلي فيكسيد بروتاجونيست",
      "تهي دراجونبورن"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0869"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Fallout 4”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Fallout 4»؟",
    "options": [
      "The Sole Survivor",
      "Jimmy Hopkins",
      "Joel",
      "A group of survivors"
    ],
    "optionsAr": [
      "تهي سولي سورفيفور",
      "جيممي هوبكينس",
      "جويل",
      "مجموعة من الناجين"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0870"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Starfield”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Starfield»؟",
    "options": [
      "The player character",
      "Aloy",
      "A group of survivors",
      "The player-created Sims"
    ],
    "optionsAr": [
      "تهي بلايير كهاراكتير",
      "الوي",
      "مجموعة من الناجين",
      "تهي بلايير-كرياتيد سيمس"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0871"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “The Witcher 3: Wild Hunt”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «The Witcher 3: Wild Hunt»؟",
    "options": [
      "Geralt of Rivia",
      "Kratos",
      "A selectable class hero",
      "Steve"
    ],
    "optionsAr": [
      "جيرالت وف ريفيا",
      "كراتوس",
      "ا سيليكتابلي كلاسس هيرو",
      "ستيفي"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0872"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Cyberpunk 2077”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Cyberpunk 2077»؟",
    "options": [
      "Jin Kazama",
      "B. J. Blazkowicz",
      "Crash Bandicoot",
      "V"
    ],
    "optionsAr": [
      "جين كازاما",
      "ب. ج. بلازكوويكز",
      "كراسه بانديكووت",
      "V"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0873"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Baldur’s Gate 3”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Baldur’s Gate 3»؟",
    "options": [
      "Steve",
      "Pac-Man",
      "The player-created character",
      "A selectable class hero"
    ],
    "optionsAr": [
      "ستيفي",
      "باك-مان",
      "الشخصية التي ينشئها اللاعب",
      "ا سيليكتابلي كلاسس هيرو"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0874"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Dota 2”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Dota 2»؟",
    "options": [
      "Pac-Man",
      "The player-created Sims",
      "Jimmy Hopkins",
      "A choice of playable heroes"
    ],
    "optionsAr": [
      "باك-مان",
      "تهي بلايير-كرياتيد سيمس",
      "جيممي هوبكينس",
      "ا كهويكي وف بلايابلي هيرويس"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0875"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Counter-Strike 2”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Counter-Strike 2»؟",
    "options": [
      "Nathan Drake",
      "Mega Man",
      "Chris Redfield and Jill Valentine",
      "No single fixed protagonist"
    ],
    "optionsAr": [
      "ناتهان دراكي",
      "ميجا مان",
      "كهريس ريدفييلد اند جيلل فالينتيني",
      "نو سينجلي فيكسيد بروتاجونيست"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0876"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Half-Life”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Half-Life»؟",
    "options": [
      "Mega Man",
      "Leon S. Kennedy",
      "Cole Phelps",
      "Gordon Freeman"
    ],
    "optionsAr": [
      "ميجا مان",
      "ليون س. كيننيدي",
      "كولي بهيلبس",
      "جوردون فرييمان"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0877"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Portal”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Portal»؟",
    "options": [
      "A choice of playable heroes",
      "Chell",
      "Sonic",
      "Link"
    ],
    "optionsAr": [
      "ا كهويكي وف بلايابلي هيرويس",
      "كهيلل",
      "سونيك",
      "لينك"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0878"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Left 4 Dead”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Left 4 Dead»؟",
    "options": [
      "Chris Redfield and Jill Valentine",
      "The Dragonborn",
      "A group of survivors",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "كهريس ريدفييلد اند جيلل فالينتيني",
      "تهي دراجونبورن",
      "مجموعة من الناجين",
      "لا توجد شخصية رئيسية ثابتة"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0879"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Overwatch”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Overwatch»؟",
    "options": [
      "Wolf",
      "A selectable class hero",
      "Claude",
      "Tracer and other heroes"
    ],
    "optionsAr": [
      "وولف",
      "ا سيليكتابلي كلاسس هيرو",
      "كلاودي",
      "تراكير اند وتهير هيرويس"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0880"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “World of Warcraft”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «World of Warcraft»؟",
    "options": [
      "The player-created character",
      "The Chosen Undead",
      "Claude",
      "Sonic"
    ],
    "optionsAr": [
      "الشخصية التي ينشئها اللاعب",
      "المختار غير الميت",
      "كلاودي",
      "سونيك"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0881"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Diablo II”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Diablo II»؟",
    "options": [
      "Jin Sakai",
      "A selectable class hero",
      "The Luminary",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "جين ساكاي",
      "ا سيليكتابلي كلاسس هيرو",
      "تهي لوميناري",
      "لا توجد شخصية رئيسية ثابتة"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0882"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “StarCraft”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «StarCraft»؟",
    "options": [
      "Pac-Man",
      "The player-created Sims",
      "Jim Raynor",
      "Chell"
    ],
    "optionsAr": [
      "باك-مان",
      "تهي بلايير-كرياتيد سيمس",
      "جيم راينور",
      "كهيلل"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0883"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Hearthstone”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Hearthstone»؟",
    "options": [
      "Ryu",
      "A selectable hero",
      "Sonic",
      "V"
    ],
    "optionsAr": [
      "ريو",
      "ا سيليكتابلي هيرو",
      "سونيك",
      "V"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0884"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “The Sims”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «The Sims»؟",
    "options": [
      "Michael, Franklin and Trevor",
      "Jin Sakai",
      "Pac-Man",
      "The player-created Sims"
    ],
    "optionsAr": [
      "ميكهايل, فرانكلين اند تريفور",
      "جين ساكاي",
      "باك-مان",
      "تهي بلايير-كرياتيد سيمس"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0885"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “SimCity”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «SimCity»؟",
    "options": [
      "Cole Phelps",
      "Dante",
      "Ranger",
      "The player as mayor"
    ],
    "optionsAr": [
      "كولي بهيلبس",
      "دانتي",
      "رانجير",
      "تهي بلايير اس مايور"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0886"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Grand Theft Auto III”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Grand Theft Auto III»؟",
    "options": [
      "Marcus Fenix",
      "Claude",
      "Wolf",
      "B. J. Blazkowicz"
    ],
    "optionsAr": [
      "ماركوس فينيكس",
      "كلاودي",
      "وولف",
      "ب. ج. بلازكوويكز"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0887"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Grand Theft Auto V”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Grand Theft Auto V»؟",
    "options": [
      "Link",
      "Red",
      "Michael, Franklin and Trevor",
      "Ryu"
    ],
    "optionsAr": [
      "لينك",
      "ريد",
      "ميكهايل, فرانكلين اند تريفور",
      "ريو"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0888"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Red Dead Redemption 2”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Red Dead Redemption 2»؟",
    "options": [
      "Dante",
      "Jimmy Hopkins",
      "Arthur Morgan",
      "Wolf"
    ],
    "optionsAr": [
      "دانتي",
      "جيممي هوبكينس",
      "ارتهور مورجان",
      "وولف"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0889"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Bully”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Bully»؟",
    "options": [
      "Jimmy Hopkins",
      "Doomguy",
      "Jim Raynor",
      "The player avatar"
    ],
    "optionsAr": [
      "جيممي هوبكينس",
      "دوومجوي",
      "جيم راينور",
      "تهي بلايير افاتار"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0890"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “L.A. Noire”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «L.A. Noire»؟",
    "options": [
      "Cole Phelps",
      "Jin Sakai",
      "Ryu",
      "Ratchet"
    ],
    "optionsAr": [
      "كولي بهيلبس",
      "جين ساكاي",
      "ريو",
      "راتكهيت"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0891"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Uncharted 2: Among Thieves”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Uncharted 2: Among Thieves»؟",
    "options": [
      "The Chosen Undead",
      "Steve",
      "Samus Aran",
      "Nathan Drake"
    ],
    "optionsAr": [
      "المختار غير الميت",
      "ستيفي",
      "ساموس اران",
      "ناتهان دراكي"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0892"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “The Last of Us”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «The Last of Us»؟",
    "options": [
      "Joel",
      "Jak",
      "V",
      "Cloud Strife"
    ],
    "optionsAr": [
      "جويل",
      "جاك",
      "V",
      "كلوود ستريفي"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0893"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Crash Bandicoot”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Crash Bandicoot»؟",
    "options": [
      "Jimmy Hopkins",
      "Crash Bandicoot",
      "The Luminary",
      "The Tarnished"
    ],
    "optionsAr": [
      "جيممي هوبكينس",
      "كراسه بانديكووت",
      "تهي لوميناري",
      "تهي تارنيسهيد"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0894"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Jak and Daxter: The Precursor Legacy”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Jak and Daxter: The Precursor Legacy»؟",
    "options": [
      "A selectable hero",
      "Leon S. Kennedy",
      "Jak",
      "Mega Man"
    ],
    "optionsAr": [
      "ا سيليكتابلي هيرو",
      "ليون س. كيننيدي",
      "جاك",
      "ميجا مان"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0895"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “God of War”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «God of War»؟",
    "options": [
      "Kratos",
      "A choice of playable heroes",
      "Pac-Man",
      "Geralt of Rivia"
    ],
    "optionsAr": [
      "كراتوس",
      "ا كهويكي وف بلايابلي هيرويس",
      "باك-مان",
      "جيرالت وف ريفيا"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0896"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “God of War Ragnarök”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «God of War Ragnarök»؟",
    "options": [
      "The Luminary",
      "Sora",
      "Kratos",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "تهي لوميناري",
      "سورا",
      "كراتوس",
      "لا توجد شخصية رئيسية ثابتة"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0897"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Horizon Zero Dawn”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Horizon Zero Dawn»؟",
    "options": [
      "Pac-Man",
      "Aloy",
      "Michael, Franklin and Trevor",
      "Steve"
    ],
    "optionsAr": [
      "باك-مان",
      "الوي",
      "ميكهايل, فرانكلين اند تريفور",
      "ستيفي"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0898"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Ghost of Tsushima”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Ghost of Tsushima»؟",
    "options": [
      "Red",
      "A selectable class hero",
      "B. J. Blazkowicz",
      "Jin Sakai"
    ],
    "optionsAr": [
      "ريد",
      "ا سيليكتابلي كلاسس هيرو",
      "ب. ج. بلازكوويكز",
      "جين ساكاي"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0899"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Marvel’s Spider-Man”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Marvel’s Spider-Man»؟",
    "options": [
      "The player avatar",
      "The Hunter",
      "Sora",
      "Peter Parker"
    ],
    "optionsAr": [
      "تهي بلايير افاتار",
      "الصياد",
      "سورا",
      "بيتير باركير"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0900"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Ratchet & Clank”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Ratchet & Clank»؟",
    "options": [
      "Wolf",
      "Kratos",
      "Ratchet",
      "Chell"
    ],
    "optionsAr": [
      "وولف",
      "كراتوس",
      "راتكهيت",
      "كهيلل"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0901"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Gran Turismo 7”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Gran Turismo 7»؟",
    "options": [
      "No fixed protagonist",
      "Steve",
      "Link",
      "A selectable class hero"
    ],
    "optionsAr": [
      "لا توجد شخصية رئيسية ثابتة",
      "ستيفي",
      "لينك",
      "ا سيليكتابلي كلاسس هيرو"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0902"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Elden Ring”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Elden Ring»؟",
    "options": [
      "Claude",
      "Link",
      "The Tarnished",
      "The Luminary"
    ],
    "optionsAr": [
      "كلاودي",
      "لينك",
      "تهي تارنيسهيد",
      "تهي لوميناري"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0903"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Dark Souls”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Dark Souls»؟",
    "options": [
      "The player-created Sims",
      "The Chosen Undead",
      "The player as mayor",
      "Michael, Franklin and Trevor"
    ],
    "optionsAr": [
      "تهي بلايير-كرياتيد سيمس",
      "المختار غير الميت",
      "تهي بلايير اس مايور",
      "ميكهايل, فرانكلين اند تريفور"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0904"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Bloodborne”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Bloodborne»؟",
    "options": [
      "Samus Aran",
      "Tracer and other heroes",
      "Arthur Morgan",
      "The Hunter"
    ],
    "optionsAr": [
      "ساموس اران",
      "تراكير اند وتهير هيرويس",
      "ارتهور مورجان",
      "الصياد"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0905"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Sekiro: Shadows Die Twice”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Sekiro: Shadows Die Twice»؟",
    "options": [
      "Samus Aran",
      "Chris Redfield and Jill Valentine",
      "Wolf",
      "Jak"
    ],
    "optionsAr": [
      "ساموس اران",
      "كهريس ريدفييلد اند جيلل فالينتيني",
      "وولف",
      "جاك"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0906"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Tekken 8”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Tekken 8»؟",
    "options": [
      "Tidus",
      "The Dragonborn",
      "A choice of playable heroes",
      "Jin Kazama"
    ],
    "optionsAr": [
      "تيدوس",
      "تهي دراجونبورن",
      "ا كهويكي وف بلايابلي هيرويس",
      "جين كازاما"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0907"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Fortnite”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Fortnite»؟",
    "options": [
      "A selectable hero",
      "The player avatar",
      "A choice of playable heroes",
      "A selectable class hero"
    ],
    "optionsAr": [
      "ا سيليكتابلي هيرو",
      "تهي بلايير افاتار",
      "ا كهويكي وف بلايابلي هيرويس",
      "ا سيليكتابلي كلاسس هيرو"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0908"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Rocket League”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Rocket League»؟",
    "options": [
      "A choice of playable heroes",
      "Jimmy Hopkins",
      "The Tarnished",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "ا كهويكي وف بلايابلي هيرويس",
      "جيممي هوبكينس",
      "تهي تارنيسهيد",
      "لا توجد شخصية رئيسية ثابتة"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0909"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Super Mario Bros.”?",
    "ar": "أي استوديو طوّر لعبة «Super Mario Bros.»؟",
    "options": [
      "Naughty Dog",
      "Playground Games",
      "Sega",
      "Nintendo"
    ],
    "optionsAr": [
      "ناوجهتي دوج",
      "بلايجرووند جاميس",
      "سيجا",
      "نينتيندو"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0910"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Minecraft”?",
    "ar": "أي استوديو طوّر لعبة «Minecraft»؟",
    "options": [
      "Square Enix",
      "Mojang",
      "Maxis",
      "Rockstar Games"
    ],
    "optionsAr": [
      "سقواري ينيكس",
      "موجانج",
      "ماكسيس",
      "روككستار جاميس"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0911"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “The Legend of Zelda: Breath of the Wild”?",
    "ar": "أي استوديو طوّر لعبة «The Legend of Zelda: Breath of the Wild»؟",
    "options": [
      "Nintendo",
      "Sucker Punch Productions",
      "Santa Monica Studio",
      "Insomniac Games"
    ],
    "optionsAr": [
      "نينتيندو",
      "سوككير بونكه برودوكتيونس",
      "سانتا مونيكا ستوديو",
      "ينسومنياك جاميس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0912"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “The Legend of Zelda: Tears of the Kingdom”?",
    "ar": "أي استوديو طوّر لعبة «The Legend of Zelda: Tears of the Kingdom»؟",
    "options": [
      "Mojang",
      "Naughty Dog",
      "Nintendo",
      "Santa Monica Studio"
    ],
    "optionsAr": [
      "موجانج",
      "ناوجهتي دوج",
      "نينتيندو",
      "سانتا مونيكا ستوديو"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0913"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Pokémon Red and Blue”?",
    "ar": "أي استوديو طوّر لعبة «Pokémon Red and Blue»؟",
    "options": [
      "Game Freak",
      "Rockstar Games",
      "Polyphony Digital",
      "Blizzard Entertainment"
    ],
    "optionsAr": [
      "جامي فرياك",
      "روككستار جاميس",
      "بوليبهوني ديجيتال",
      "بليززارد ينتيرتاينمينت"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0914"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Tetris”?",
    "ar": "أي استوديو طوّر لعبة «Tetris»؟",
    "options": [
      "Rockstar Games",
      "Larian Studios",
      "Alexey Pajitnov",
      "Namco"
    ],
    "optionsAr": [
      "روككستار جاميس",
      "لاريان ستوديوس",
      "اليكسيي باجيتنوف",
      "نامكو"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0915"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Sonic the Hedgehog”?",
    "ar": "أي استوديو طوّر لعبة «Sonic the Hedgehog»؟",
    "options": [
      "Santa Monica Studio",
      "CD Projekt Red",
      "Blizzard Entertainment",
      "Sega"
    ],
    "optionsAr": [
      "سانتا مونيكا ستوديو",
      "كد بروجيكت ريد",
      "بليززارد ينتيرتاينمينت",
      "سيجا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0916"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Pac-Man”?",
    "ar": "أي استوديو طوّر لعبة «Pac-Man»؟",
    "options": [
      "Namco",
      "Bandai Namco Studios",
      "Playground Games",
      "Alexey Pajitnov"
    ],
    "optionsAr": [
      "نامكو",
      "بانداي نامكو ستوديوس",
      "بلايجرووند جاميس",
      "اليكسيي باجيتنوف"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0917"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Donkey Kong”?",
    "ar": "أي استوديو طوّر لعبة «Donkey Kong»؟",
    "options": [
      "id Software",
      "Capcom",
      "Nintendo",
      "Polyphony Digital"
    ],
    "optionsAr": [
      "يد سوفتواري",
      "كابكوم",
      "نينتيندو",
      "بوليبهوني ديجيتال"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0918"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Metroid”?",
    "ar": "أي استوديو طوّر لعبة «Metroid»؟",
    "options": [
      "Naughty Dog",
      "Ensemble Studios",
      "Nintendo",
      "Valve"
    ],
    "optionsAr": [
      "ناوجهتي دوج",
      "ينسيمبلي ستوديوس",
      "نينتيندو",
      "فالفي"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0919"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Final Fantasy VII”?",
    "ar": "أي استوديو طوّر لعبة «Final Fantasy VII»؟",
    "options": [
      "Blizzard Entertainment",
      "Bungie",
      "Square",
      "Valve"
    ],
    "optionsAr": [
      "بليززارد ينتيرتاينمينت",
      "بونجيي",
      "سقواري",
      "فالفي"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0920"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Final Fantasy X”?",
    "ar": "أي استوديو طوّر لعبة «Final Fantasy X»؟",
    "options": [
      "Square",
      "Valve",
      "Maxis",
      "Nintendo"
    ],
    "optionsAr": [
      "سقواري",
      "فالفي",
      "ماكسيس",
      "نينتيندو"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0921"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Dragon Quest XI”?",
    "ar": "أي استوديو طوّر لعبة «Dragon Quest XI»؟",
    "options": [
      "Polyphony Digital",
      "Sucker Punch Productions",
      "Square Enix",
      "Valve"
    ],
    "optionsAr": [
      "بوليبهوني ديجيتال",
      "سوككير بونكه برودوكتيونس",
      "سقواري ينيكس",
      "فالفي"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0922"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Kingdom Hearts”?",
    "ar": "أي استوديو طوّر لعبة «Kingdom Hearts»؟",
    "options": [
      "343 Industries",
      "Square Enix",
      "id Software",
      "Game Freak"
    ],
    "optionsAr": [
      "343 يندوسترييس",
      "سقواري ينيكس",
      "يد سوفتواري",
      "جامي فرياك"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0923"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Street Fighter II”?",
    "ar": "أي استوديو طوّر لعبة «Street Fighter II»؟",
    "options": [
      "CD Projekt Red",
      "Capcom",
      "Larian Studios",
      "FromSoftware"
    ],
    "optionsAr": [
      "كد بروجيكت ريد",
      "كابكوم",
      "لاريان ستوديوس",
      "فرومسوفتواري"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0924"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Resident Evil”?",
    "ar": "أي استوديو طوّر لعبة «Resident Evil»؟",
    "options": [
      "Blizzard Entertainment",
      "Bandai Namco Studios",
      "FromSoftware",
      "Capcom"
    ],
    "optionsAr": [
      "بليززارد ينتيرتاينمينت",
      "بانداي نامكو ستوديوس",
      "فرومسوفتواري",
      "كابكوم"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0925"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Resident Evil 4”?",
    "ar": "أي استوديو طوّر لعبة «Resident Evil 4»؟",
    "options": [
      "Capcom",
      "id Software",
      "Blizzard Entertainment",
      "Alexey Pajitnov"
    ],
    "optionsAr": [
      "كابكوم",
      "يد سوفتواري",
      "بليززارد ينتيرتاينمينت",
      "اليكسيي باجيتنوف"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0926"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Mega Man”?",
    "ar": "أي استوديو طوّر لعبة «Mega Man»؟",
    "options": [
      "Capcom",
      "Maxis",
      "Bethesda Game Studios",
      "CD Projekt Red"
    ],
    "optionsAr": [
      "كابكوم",
      "ماكسيس",
      "بيتهيسدا جامي ستوديوس",
      "كد بروجيكت ريد"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0927"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Devil May Cry”?",
    "ar": "أي استوديو طوّر لعبة «Devil May Cry»؟",
    "options": [
      "Capcom",
      "Santa Monica Studio",
      "FromSoftware",
      "Blizzard Entertainment"
    ],
    "optionsAr": [
      "كابكوم",
      "سانتا مونيكا ستوديو",
      "فرومسوفتواري",
      "بليززارد ينتيرتاينمينت"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0928"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Monster Hunter: World”?",
    "ar": "أي استوديو طوّر لعبة «Monster Hunter: World»؟",
    "options": [
      "Guerrilla Games",
      "Capcom",
      "Epic Games",
      "Larian Studios"
    ],
    "optionsAr": [
      "جويرريللا جاميس",
      "كابكوم",
      "يبيك جاميس",
      "لاريان ستوديوس"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0929"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Halo: Combat Evolved”?",
    "ar": "أي استوديو طوّر لعبة «Halo: Combat Evolved»؟",
    "options": [
      "Bungie",
      "343 Industries",
      "Playground Games",
      "Alexey Pajitnov"
    ],
    "optionsAr": [
      "بونجيي",
      "343 يندوسترييس",
      "بلايجرووند جاميس",
      "اليكسيي باجيتنوف"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0930"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Halo Infinite”?",
    "ar": "أي استوديو طوّر لعبة «Halo Infinite»؟",
    "options": [
      "Capcom",
      "343 Industries",
      "Insomniac Games",
      "Polyphony Digital"
    ],
    "optionsAr": [
      "كابكوم",
      "343 يندوسترييس",
      "ينسومنياك جاميس",
      "بوليبهوني ديجيتال"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0931"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Gears of War”?",
    "ar": "أي استوديو طوّر لعبة «Gears of War»؟",
    "options": [
      "Rockstar Games",
      "Square",
      "Nintendo",
      "Epic Games"
    ],
    "optionsAr": [
      "روككستار جاميس",
      "سقواري",
      "نينتيندو",
      "يبيك جاميس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0932"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Forza Horizon 5”?",
    "ar": "أي استوديو طوّر لعبة «Forza Horizon 5»؟",
    "options": [
      "Game Freak",
      "Insomniac Games",
      "Polyphony Digital",
      "Playground Games"
    ],
    "optionsAr": [
      "جامي فرياك",
      "ينسومنياك جاميس",
      "بوليبهوني ديجيتال",
      "بلايجرووند جاميس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0933"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Age of Empires II”?",
    "ar": "أي استوديو طوّر لعبة «Age of Empires II»؟",
    "options": [
      "Ensemble Studios",
      "Sucker Punch Productions",
      "Blizzard Entertainment",
      "Larian Studios"
    ],
    "optionsAr": [
      "ينسيمبلي ستوديوس",
      "سوككير بونكه برودوكتيونس",
      "بليززارد ينتيرتاينمينت",
      "لاريان ستوديوس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0934"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Doom”?",
    "ar": "أي استوديو طوّر لعبة «Doom»؟",
    "options": [
      "Naughty Dog",
      "id Software",
      "Ensemble Studios",
      "Namco"
    ],
    "optionsAr": [
      "ناوجهتي دوج",
      "يد سوفتواري",
      "ينسيمبلي ستوديوس",
      "نامكو"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0935"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Quake”?",
    "ar": "أي استوديو طوّر لعبة «Quake»؟",
    "options": [
      "CD Projekt Red",
      "id Software",
      "Sucker Punch Productions",
      "Nintendo"
    ],
    "optionsAr": [
      "كد بروجيكت ريد",
      "يد سوفتواري",
      "سوككير بونكه برودوكتيونس",
      "نينتيندو"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0936"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Wolfenstein 3D”?",
    "ar": "أي استوديو طوّر لعبة «Wolfenstein 3D»؟",
    "options": [
      "id Software",
      "Larian Studios",
      "Insomniac Games",
      "Ensemble Studios"
    ],
    "optionsAr": [
      "يد سوفتواري",
      "لاريان ستوديوس",
      "ينسومنياك جاميس",
      "ينسيمبلي ستوديوس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0937"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “The Elder Scrolls V: Skyrim”?",
    "ar": "أي استوديو طوّر لعبة «The Elder Scrolls V: Skyrim»؟",
    "options": [
      "Bethesda Game Studios",
      "Playground Games",
      "Epic Games",
      "Rockstar Games"
    ],
    "optionsAr": [
      "بيتهيسدا جامي ستوديوس",
      "بلايجرووند جاميس",
      "يبيك جاميس",
      "روككستار جاميس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0938"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Fallout 4”?",
    "ar": "أي استوديو طوّر لعبة «Fallout 4»؟",
    "options": [
      "Bethesda Game Studios",
      "Bandai Namco Studios",
      "Capcom",
      "Ensemble Studios"
    ],
    "optionsAr": [
      "بيتهيسدا جامي ستوديوس",
      "بانداي نامكو ستوديوس",
      "كابكوم",
      "ينسيمبلي ستوديوس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0939"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Starfield”?",
    "ar": "أي استوديو طوّر لعبة «Starfield»؟",
    "options": [
      "Sucker Punch Productions",
      "Maxis",
      "Bethesda Game Studios",
      "Santa Monica Studio"
    ],
    "optionsAr": [
      "سوككير بونكه برودوكتيونس",
      "ماكسيس",
      "بيتهيسدا جامي ستوديوس",
      "سانتا مونيكا ستوديو"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0940"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “The Witcher 3: Wild Hunt”?",
    "ar": "أي استوديو طوّر لعبة «The Witcher 3: Wild Hunt»؟",
    "options": [
      "Ensemble Studios",
      "CD Projekt Red",
      "Blizzard Entertainment",
      "Valve"
    ],
    "optionsAr": [
      "ينسيمبلي ستوديوس",
      "كد بروجيكت ريد",
      "بليززارد ينتيرتاينمينت",
      "فالفي"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0941"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Cyberpunk 2077”?",
    "ar": "أي استوديو طوّر لعبة «Cyberpunk 2077»؟",
    "options": [
      "CD Projekt Red",
      "Mojang",
      "Bethesda Game Studios",
      "Larian Studios"
    ],
    "optionsAr": [
      "كد بروجيكت ريد",
      "موجانج",
      "بيتهيسدا جامي ستوديوس",
      "لاريان ستوديوس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0942"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Baldur’s Gate 3”?",
    "ar": "أي استوديو طوّر لعبة «Baldur’s Gate 3»؟",
    "options": [
      "Larian Studios",
      "Bungie",
      "343 Industries",
      "Capcom"
    ],
    "optionsAr": [
      "لاريان ستوديوس",
      "بونجيي",
      "343 يندوسترييس",
      "كابكوم"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0943"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Dota 2”?",
    "ar": "أي استوديو طوّر لعبة «Dota 2»؟",
    "options": [
      "Guerrilla Games",
      "Sucker Punch Productions",
      "Sega",
      "Valve"
    ],
    "optionsAr": [
      "جويرريللا جاميس",
      "سوككير بونكه برودوكتيونس",
      "سيجا",
      "فالفي"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0944"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Counter-Strike 2”?",
    "ar": "أي استوديو طوّر لعبة «Counter-Strike 2»؟",
    "options": [
      "Maxis",
      "Bethesda Game Studios",
      "Square",
      "Valve"
    ],
    "optionsAr": [
      "ماكسيس",
      "بيتهيسدا جامي ستوديوس",
      "سقواري",
      "فالفي"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0945"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Half-Life”?",
    "ar": "أي استوديو طوّر لعبة «Half-Life»؟",
    "options": [
      "Maxis",
      "FromSoftware",
      "Playground Games",
      "Valve"
    ],
    "optionsAr": [
      "ماكسيس",
      "فرومسوفتواري",
      "بلايجرووند جاميس",
      "فالفي"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0946"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Portal”?",
    "ar": "أي استوديو طوّر لعبة «Portal»؟",
    "options": [
      "Blizzard Entertainment",
      "Guerrilla Games",
      "Valve",
      "FromSoftware"
    ],
    "optionsAr": [
      "بليززارد ينتيرتاينمينت",
      "جويرريللا جاميس",
      "فالفي",
      "فرومسوفتواري"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0947"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Left 4 Dead”?",
    "ar": "أي استوديو طوّر لعبة «Left 4 Dead»؟",
    "options": [
      "Valve",
      "Bandai Namco Studios",
      "Bungie",
      "Nintendo"
    ],
    "optionsAr": [
      "فالفي",
      "بانداي نامكو ستوديوس",
      "بونجيي",
      "نينتيندو"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0948"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Overwatch”?",
    "ar": "أي استوديو طوّر لعبة «Overwatch»؟",
    "options": [
      "Team Bondi",
      "Blizzard Entertainment",
      "CD Projekt Red",
      "Epic Games"
    ],
    "optionsAr": [
      "تيام بوندي",
      "بليززارد ينتيرتاينمينت",
      "كد بروجيكت ريد",
      "يبيك جاميس"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0949"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “World of Warcraft”?",
    "ar": "أي استوديو طوّر لعبة «World of Warcraft»؟",
    "options": [
      "Maxis",
      "Blizzard Entertainment",
      "Nintendo",
      "Epic Games"
    ],
    "optionsAr": [
      "ماكسيس",
      "بليززارد ينتيرتاينمينت",
      "نينتيندو",
      "يبيك جاميس"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0950"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Diablo II”?",
    "ar": "أي استوديو طوّر لعبة «Diablo II»؟",
    "options": [
      "Blizzard Entertainment",
      "Game Freak",
      "Sega",
      "Capcom"
    ],
    "optionsAr": [
      "بليززارد ينتيرتاينمينت",
      "جامي فرياك",
      "سيجا",
      "كابكوم"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0951"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “StarCraft”?",
    "ar": "أي استوديو طوّر لعبة «StarCraft»؟",
    "options": [
      "Blizzard Entertainment",
      "Alexey Pajitnov",
      "Epic Games",
      "Polyphony Digital"
    ],
    "optionsAr": [
      "بليززارد ينتيرتاينمينت",
      "اليكسيي باجيتنوف",
      "يبيك جاميس",
      "بوليبهوني ديجيتال"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0952"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Hearthstone”?",
    "ar": "أي استوديو طوّر لعبة «Hearthstone»؟",
    "options": [
      "Square",
      "Sucker Punch Productions",
      "Game Freak",
      "Blizzard Entertainment"
    ],
    "optionsAr": [
      "سقواري",
      "سوككير بونكه برودوكتيونس",
      "جامي فرياك",
      "بليززارد ينتيرتاينمينت"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0953"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “The Sims”?",
    "ar": "أي استوديو طوّر لعبة «The Sims»؟",
    "options": [
      "Maxis",
      "id Software",
      "Bethesda Game Studios",
      "CD Projekt Red"
    ],
    "optionsAr": [
      "ماكسيس",
      "يد سوفتواري",
      "بيتهيسدا جامي ستوديوس",
      "كد بروجيكت ريد"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0954"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “SimCity”?",
    "ar": "أي استوديو طوّر لعبة «SimCity»؟",
    "options": [
      "Epic Games",
      "Namco",
      "Guerrilla Games",
      "Maxis"
    ],
    "optionsAr": [
      "يبيك جاميس",
      "نامكو",
      "جويرريللا جاميس",
      "ماكسيس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0955"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Grand Theft Auto III”?",
    "ar": "أي استوديو طوّر لعبة «Grand Theft Auto III»؟",
    "options": [
      "Guerrilla Games",
      "343 Industries",
      "Sega",
      "Rockstar Games"
    ],
    "optionsAr": [
      "جويرريللا جاميس",
      "343 يندوسترييس",
      "سيجا",
      "روككستار جاميس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0956"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Grand Theft Auto V”?",
    "ar": "أي استوديو طوّر لعبة «Grand Theft Auto V»؟",
    "options": [
      "Rockstar Games",
      "Namco",
      "CD Projekt Red",
      "id Software"
    ],
    "optionsAr": [
      "روككستار جاميس",
      "نامكو",
      "كد بروجيكت ريد",
      "يد سوفتواري"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0957"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Red Dead Redemption 2”?",
    "ar": "أي استوديو طوّر لعبة «Red Dead Redemption 2»؟",
    "options": [
      "343 Industries",
      "Rockstar Games",
      "Insomniac Games",
      "Valve"
    ],
    "optionsAr": [
      "343 يندوسترييس",
      "روككستار جاميس",
      "ينسومنياك جاميس",
      "فالفي"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0958"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Bully”?",
    "ar": "أي استوديو طوّر لعبة «Bully»؟",
    "options": [
      "Bandai Namco Studios",
      "Bethesda Game Studios",
      "Namco",
      "Rockstar Games"
    ],
    "optionsAr": [
      "بانداي نامكو ستوديوس",
      "بيتهيسدا جامي ستوديوس",
      "نامكو",
      "روككستار جاميس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0959"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “L.A. Noire”?",
    "ar": "أي استوديو طوّر لعبة «L.A. Noire»؟",
    "options": [
      "Alexey Pajitnov",
      "Nintendo",
      "id Software",
      "Team Bondi"
    ],
    "optionsAr": [
      "اليكسيي باجيتنوف",
      "نينتيندو",
      "يد سوفتواري",
      "تيام بوندي"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0960"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Uncharted 2: Among Thieves”?",
    "ar": "أي استوديو طوّر لعبة «Uncharted 2: Among Thieves»؟",
    "options": [
      "Namco",
      "Naughty Dog",
      "Team Bondi",
      "id Software"
    ],
    "optionsAr": [
      "نامكو",
      "ناوجهتي دوج",
      "تيام بوندي",
      "يد سوفتواري"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0961"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “The Last of Us”?",
    "ar": "أي استوديو طوّر لعبة «The Last of Us»؟",
    "options": [
      "343 Industries",
      "Larian Studios",
      "Insomniac Games",
      "Naughty Dog"
    ],
    "optionsAr": [
      "343 يندوسترييس",
      "لاريان ستوديوس",
      "ينسومنياك جاميس",
      "ناوجهتي دوج"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0962"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Crash Bandicoot”?",
    "ar": "أي استوديو طوّر لعبة «Crash Bandicoot»؟",
    "options": [
      "Namco",
      "Team Bondi",
      "Nintendo",
      "Naughty Dog"
    ],
    "optionsAr": [
      "نامكو",
      "تيام بوندي",
      "نينتيندو",
      "ناوجهتي دوج"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0963"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Jak and Daxter: The Precursor Legacy”?",
    "ar": "أي استوديو طوّر لعبة «Jak and Daxter: The Precursor Legacy»؟",
    "options": [
      "Alexey Pajitnov",
      "Naughty Dog",
      "Game Freak",
      "Blizzard Entertainment"
    ],
    "optionsAr": [
      "اليكسيي باجيتنوف",
      "ناوجهتي دوج",
      "جامي فرياك",
      "بليززارد ينتيرتاينمينت"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0964"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “God of War”?",
    "ar": "أي استوديو طوّر لعبة «God of War»؟",
    "options": [
      "Sucker Punch Productions",
      "343 Industries",
      "Santa Monica Studio",
      "Epic Games"
    ],
    "optionsAr": [
      "سوككير بونكه برودوكتيونس",
      "343 يندوسترييس",
      "سانتا مونيكا ستوديو",
      "يبيك جاميس"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0965"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “God of War Ragnarök”?",
    "ar": "أي استوديو طوّر لعبة «God of War Ragnarök»؟",
    "options": [
      "Team Bondi",
      "Santa Monica Studio",
      "id Software",
      "Larian Studios"
    ],
    "optionsAr": [
      "تيام بوندي",
      "سانتا مونيكا ستوديو",
      "يد سوفتواري",
      "لاريان ستوديوس"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0966"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Horizon Zero Dawn”?",
    "ar": "أي استوديو طوّر لعبة «Horizon Zero Dawn»؟",
    "options": [
      "Capcom",
      "Guerrilla Games",
      "Maxis",
      "Insomniac Games"
    ],
    "optionsAr": [
      "كابكوم",
      "جويرريللا جاميس",
      "ماكسيس",
      "ينسومنياك جاميس"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0967"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Ghost of Tsushima”?",
    "ar": "أي استوديو طوّر لعبة «Ghost of Tsushima»؟",
    "options": [
      "Sucker Punch Productions",
      "Team Bondi",
      "Square",
      "Insomniac Games"
    ],
    "optionsAr": [
      "سوككير بونكه برودوكتيونس",
      "تيام بوندي",
      "سقواري",
      "ينسومنياك جاميس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0968"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Marvel’s Spider-Man”?",
    "ar": "أي استوديو طوّر لعبة «Marvel’s Spider-Man»؟",
    "options": [
      "Insomniac Games",
      "Valve",
      "id Software",
      "Polyphony Digital"
    ],
    "optionsAr": [
      "ينسومنياك جاميس",
      "فالفي",
      "يد سوفتواري",
      "بوليبهوني ديجيتال"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0969"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Ratchet & Clank”?",
    "ar": "أي استوديو طوّر لعبة «Ratchet & Clank»؟",
    "options": [
      "Insomniac Games",
      "Team Bondi",
      "Rockstar Games",
      "Naughty Dog"
    ],
    "optionsAr": [
      "ينسومنياك جاميس",
      "تيام بوندي",
      "روككستار جاميس",
      "ناوجهتي دوج"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0970"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Gran Turismo 7”?",
    "ar": "أي استوديو طوّر لعبة «Gran Turismo 7»؟",
    "options": [
      "Namco",
      "Polyphony Digital",
      "Rockstar Games",
      "Bethesda Game Studios"
    ],
    "optionsAr": [
      "نامكو",
      "بوليبهوني ديجيتال",
      "روككستار جاميس",
      "بيتهيسدا جامي ستوديوس"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0971"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Elden Ring”?",
    "ar": "أي استوديو طوّر لعبة «Elden Ring»؟",
    "options": [
      "Valve",
      "FromSoftware",
      "Namco",
      "Sega"
    ],
    "optionsAr": [
      "فالفي",
      "فرومسوفتواري",
      "نامكو",
      "سيجا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0972"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Dark Souls”?",
    "ar": "أي استوديو طوّر لعبة «Dark Souls»؟",
    "options": [
      "Nintendo",
      "FromSoftware",
      "Larian Studios",
      "Sucker Punch Productions"
    ],
    "optionsAr": [
      "نينتيندو",
      "فرومسوفتواري",
      "لاريان ستوديوس",
      "سوككير بونكه برودوكتيونس"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0973"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Bloodborne”?",
    "ar": "أي استوديو طوّر لعبة «Bloodborne»؟",
    "options": [
      "Valve",
      "FromSoftware",
      "343 Industries",
      "Team Bondi"
    ],
    "optionsAr": [
      "فالفي",
      "فرومسوفتواري",
      "343 يندوسترييس",
      "تيام بوندي"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0974"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Sekiro: Shadows Die Twice”?",
    "ar": "أي استوديو طوّر لعبة «Sekiro: Shadows Die Twice»؟",
    "options": [
      "Ensemble Studios",
      "343 Industries",
      "Square",
      "FromSoftware"
    ],
    "optionsAr": [
      "ينسيمبلي ستوديوس",
      "343 يندوسترييس",
      "سقواري",
      "فرومسوفتواري"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0975"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Tekken 8”?",
    "ar": "أي استوديو طوّر لعبة «Tekken 8»؟",
    "options": [
      "Square",
      "Namco",
      "Bandai Namco Studios",
      "Santa Monica Studio"
    ],
    "optionsAr": [
      "سقواري",
      "نامكو",
      "بانداي نامكو ستوديوس",
      "سانتا مونيكا ستوديو"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0976"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Fortnite”?",
    "ar": "أي استوديو طوّر لعبة «Fortnite»؟",
    "options": [
      "Epic Games",
      "Alexey Pajitnov",
      "Sega",
      "Game Freak"
    ],
    "optionsAr": [
      "يبيك جاميس",
      "اليكسيي باجيتنوف",
      "سيجا",
      "جامي فرياك"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0977"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Super Mario Bros.” first released?",
    "ar": "في أي سنة صدرت لعبة «Super Mario Bros.» لأول مرة؟",
    "options": [
      "2017",
      "1985",
      "2002",
      "2019"
    ],
    "optionsAr": [
      "2017",
      "1985",
      "2002",
      "2019"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0978"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Minecraft” first released?",
    "ar": "في أي سنة صدرت لعبة «Minecraft» لأول مرة؟",
    "options": [
      "2009",
      "2021",
      "1992",
      "2011"
    ],
    "optionsAr": [
      "2009",
      "2021",
      "1992",
      "2011"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0979"
  },
  {
    "category": "Gaming",
    "en": "In which year was “The Legend of Zelda: Breath of the Wild” first released?",
    "ar": "في أي سنة صدرت لعبة «The Legend of Zelda: Breath of the Wild» لأول مرة؟",
    "options": [
      "2007",
      "2006",
      "2001",
      "2017"
    ],
    "optionsAr": [
      "2007",
      "2006",
      "2001",
      "2017"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0980"
  },
  {
    "category": "Gaming",
    "en": "In which year was “The Legend of Zelda: Tears of the Kingdom” first released?",
    "ar": "في أي سنة صدرت لعبة «The Legend of Zelda: Tears of the Kingdom» لأول مرة؟",
    "options": [
      "2008",
      "1984",
      "2023",
      "2017"
    ],
    "optionsAr": [
      "2008",
      "1984",
      "2023",
      "2017"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0981"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Pokémon Red and Blue” first released?",
    "ar": "في أي سنة صدرت لعبة «Pokémon Red and Blue» لأول مرة؟",
    "options": [
      "1996",
      "1997",
      "2013",
      "2020"
    ],
    "optionsAr": [
      "1996",
      "1997",
      "2013",
      "2020"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0982"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Tetris” first released?",
    "ar": "في أي سنة صدرت لعبة «Tetris» لأول مرة؟",
    "options": [
      "2007",
      "1984",
      "2017",
      "2009"
    ],
    "optionsAr": [
      "2007",
      "1984",
      "2017",
      "2009"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0983"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Sonic the Hedgehog” first released?",
    "ar": "في أي سنة صدرت لعبة «Sonic the Hedgehog» لأول مرة؟",
    "options": [
      "2006",
      "2015",
      "1986",
      "1991"
    ],
    "optionsAr": [
      "2006",
      "2015",
      "1986",
      "1991"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0984"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Pac-Man” first released?",
    "ar": "في أي سنة صدرت لعبة «Pac-Man» لأول مرة؟",
    "options": [
      "1980",
      "2011",
      "2013",
      "2024"
    ],
    "optionsAr": [
      "1980",
      "2011",
      "2013",
      "2024"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0985"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Donkey Kong” first released?",
    "ar": "في أي سنة صدرت لعبة «Donkey Kong» لأول مرة؟",
    "options": [
      "1998",
      "1986",
      "1981",
      "2013"
    ],
    "optionsAr": [
      "1998",
      "1986",
      "1981",
      "2013"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0986"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Metroid” first released?",
    "ar": "في أي سنة صدرت لعبة «Metroid» لأول مرة؟",
    "options": [
      "2002",
      "1986",
      "1993",
      "1980"
    ],
    "optionsAr": [
      "2002",
      "1986",
      "1993",
      "1980"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0987"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Final Fantasy VII” first released?",
    "ar": "في أي سنة صدرت لعبة «Final Fantasy VII» لأول مرة؟",
    "options": [
      "1998",
      "2018",
      "2004",
      "1997"
    ],
    "optionsAr": [
      "1998",
      "2018",
      "2004",
      "1997"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0988"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Final Fantasy X” first released?",
    "ar": "في أي سنة صدرت لعبة «Final Fantasy X» لأول مرة؟",
    "options": [
      "2006",
      "2001",
      "1998",
      "1981"
    ],
    "optionsAr": [
      "2006",
      "2001",
      "1998",
      "1981"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0989"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Dragon Quest XI” first released?",
    "ar": "في أي سنة صدرت لعبة «Dragon Quest XI» لأول مرة؟",
    "options": [
      "2002",
      "2017",
      "1986",
      "1984"
    ],
    "optionsAr": [
      "2002",
      "2017",
      "1986",
      "1984"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0990"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Kingdom Hearts” first released?",
    "ar": "في أي سنة صدرت لعبة «Kingdom Hearts» لأول مرة؟",
    "options": [
      "1986",
      "2002",
      "2000",
      "1985"
    ],
    "optionsAr": [
      "1986",
      "2002",
      "2000",
      "1985"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0991"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Street Fighter II” first released?",
    "ar": "في أي سنة صدرت لعبة «Street Fighter II» لأول مرة؟",
    "options": [
      "2001",
      "2008",
      "1991",
      "2024"
    ],
    "optionsAr": [
      "2001",
      "2008",
      "1991",
      "2024"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0992"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Resident Evil” first released?",
    "ar": "في أي سنة صدرت لعبة «Resident Evil» لأول مرة؟",
    "options": [
      "2022",
      "1996",
      "2006",
      "2001"
    ],
    "optionsAr": [
      "2022",
      "1996",
      "2006",
      "2001"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0993"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Resident Evil 4” first released?",
    "ar": "في أي سنة صدرت لعبة «Resident Evil 4» لأول مرة؟",
    "options": [
      "2005",
      "2020",
      "1993",
      "2009"
    ],
    "optionsAr": [
      "2005",
      "2020",
      "1993",
      "2009"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0994"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Mega Man” first released?",
    "ar": "في أي سنة صدرت لعبة «Mega Man» لأول مرة؟",
    "options": [
      "1997",
      "2018",
      "1987",
      "1981"
    ],
    "optionsAr": [
      "1997",
      "2018",
      "1987",
      "1981"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0995"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Devil May Cry” first released?",
    "ar": "في أي سنة صدرت لعبة «Devil May Cry» لأول مرة؟",
    "options": [
      "2001",
      "1998",
      "2023",
      "1999"
    ],
    "optionsAr": [
      "2001",
      "1998",
      "2023",
      "1999"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0996"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Monster Hunter: World” first released?",
    "ar": "في أي سنة صدرت لعبة «Monster Hunter: World» لأول مرة؟",
    "options": [
      "1989",
      "2018",
      "2019",
      "1992"
    ],
    "optionsAr": [
      "1989",
      "2018",
      "2019",
      "1992"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0997"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Halo: Combat Evolved” first released?",
    "ar": "في أي سنة صدرت لعبة «Halo: Combat Evolved» لأول مرة؟",
    "options": [
      "2000",
      "2001",
      "1984",
      "2007"
    ],
    "optionsAr": [
      "2000",
      "2001",
      "1984",
      "2007"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0998"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Halo Infinite” first released?",
    "ar": "في أي سنة صدرت لعبة «Halo Infinite» لأول مرة؟",
    "options": [
      "1993",
      "2011",
      "2021",
      "1991"
    ],
    "optionsAr": [
      "1993",
      "2011",
      "2021",
      "1991"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0999"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Gears of War” first released?",
    "ar": "في أي سنة صدرت لعبة «Gears of War» لأول مرة؟",
    "options": [
      "2014",
      "1987",
      "1999",
      "2006"
    ],
    "optionsAr": [
      "2014",
      "1987",
      "1999",
      "2006"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1000"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Forza Horizon 5” first released?",
    "ar": "في أي سنة صدرت لعبة «Forza Horizon 5» لأول مرة؟",
    "options": [
      "1984",
      "1997",
      "2019",
      "2021"
    ],
    "optionsAr": [
      "1984",
      "1997",
      "2019",
      "2021"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1001"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Age of Empires II” first released?",
    "ar": "في أي سنة صدرت لعبة «Age of Empires II» لأول مرة؟",
    "options": [
      "1991",
      "2023",
      "1999",
      "1996"
    ],
    "optionsAr": [
      "1991",
      "2023",
      "1999",
      "1996"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1002"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Doom” first released?",
    "ar": "في أي سنة صدرت لعبة «Doom» لأول مرة؟",
    "options": [
      "1980",
      "1993",
      "2021",
      "2020"
    ],
    "optionsAr": [
      "1980",
      "1993",
      "2021",
      "2020"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1003"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Quake” first released?",
    "ar": "في أي سنة صدرت لعبة «Quake» لأول مرة؟",
    "options": [
      "2021",
      "2014",
      "1980",
      "1996"
    ],
    "optionsAr": [
      "2021",
      "2014",
      "1980",
      "1996"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1004"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Wolfenstein 3D” first released?",
    "ar": "في أي سنة صدرت لعبة «Wolfenstein 3D» لأول مرة؟",
    "options": [
      "2019",
      "2016",
      "1992",
      "2006"
    ],
    "optionsAr": [
      "2019",
      "2016",
      "1992",
      "2006"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1005"
  },
  {
    "category": "Gaming",
    "en": "In which year was “The Elder Scrolls V: Skyrim” first released?",
    "ar": "في أي سنة صدرت لعبة «The Elder Scrolls V: Skyrim» لأول مرة؟",
    "options": [
      "2020",
      "1986",
      "2011",
      "2019"
    ],
    "optionsAr": [
      "2020",
      "1986",
      "2011",
      "2019"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1006"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Fallout 4” first released?",
    "ar": "في أي سنة صدرت لعبة «Fallout 4» لأول مرة؟",
    "options": [
      "2007",
      "1998",
      "2015",
      "2022"
    ],
    "optionsAr": [
      "2007",
      "1998",
      "2015",
      "2022"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1007"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Starfield” first released?",
    "ar": "في أي سنة صدرت لعبة «Starfield» لأول مرة؟",
    "options": [
      "2009",
      "2023",
      "2013",
      "1987"
    ],
    "optionsAr": [
      "2009",
      "2023",
      "2013",
      "1987"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1008"
  },
  {
    "category": "Gaming",
    "en": "In which year was “The Witcher 3: Wild Hunt” first released?",
    "ar": "في أي سنة صدرت لعبة «The Witcher 3: Wild Hunt» لأول مرة؟",
    "options": [
      "1981",
      "2009",
      "2015",
      "1998"
    ],
    "optionsAr": [
      "1981",
      "2009",
      "2015",
      "1998"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1009"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Cyberpunk 2077” first released?",
    "ar": "في أي سنة صدرت لعبة «Cyberpunk 2077» لأول مرة؟",
    "options": [
      "1989",
      "1991",
      "2020",
      "1986"
    ],
    "optionsAr": [
      "1989",
      "1991",
      "2020",
      "1986"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1010"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Baldur’s Gate 3” first released?",
    "ar": "في أي سنة صدرت لعبة «Baldur’s Gate 3» لأول مرة؟",
    "options": [
      "2006",
      "2023",
      "1986",
      "2016"
    ],
    "optionsAr": [
      "2006",
      "2023",
      "1986",
      "2016"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1011"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Dota 2” first released?",
    "ar": "في أي سنة صدرت لعبة «Dota 2» لأول مرة؟",
    "options": [
      "2013",
      "1980",
      "2024",
      "1999"
    ],
    "optionsAr": [
      "2013",
      "1980",
      "2024",
      "1999"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1012"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Counter-Strike 2” first released?",
    "ar": "في أي سنة صدرت لعبة «Counter-Strike 2» لأول مرة؟",
    "options": [
      "2023",
      "2009",
      "2024",
      "2011"
    ],
    "optionsAr": [
      "2023",
      "2009",
      "2024",
      "2011"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1013"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Half-Life” first released?",
    "ar": "في أي سنة صدرت لعبة «Half-Life» لأول مرة؟",
    "options": [
      "1992",
      "2016",
      "1998",
      "1981"
    ],
    "optionsAr": [
      "1992",
      "2016",
      "1998",
      "1981"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1014"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Portal” first released?",
    "ar": "في أي سنة صدرت لعبة «Portal» لأول مرة؟",
    "options": [
      "1999",
      "2006",
      "2007",
      "2001"
    ],
    "optionsAr": [
      "1999",
      "2006",
      "2007",
      "2001"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1015"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Left 4 Dead” first released?",
    "ar": "في أي سنة صدرت لعبة «Left 4 Dead» لأول مرة؟",
    "options": [
      "2007",
      "2008",
      "2022",
      "1984"
    ],
    "optionsAr": [
      "2007",
      "2008",
      "2022",
      "1984"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1016"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Overwatch” first released?",
    "ar": "في أي سنة صدرت لعبة «Overwatch» لأول مرة؟",
    "options": [
      "2016",
      "2014",
      "2019",
      "2022"
    ],
    "optionsAr": [
      "2016",
      "2014",
      "2019",
      "2022"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1017"
  },
  {
    "category": "Gaming",
    "en": "In which year was “World of Warcraft” first released?",
    "ar": "في أي سنة صدرت لعبة «World of Warcraft» لأول مرة؟",
    "options": [
      "2004",
      "2017",
      "2016",
      "2002"
    ],
    "optionsAr": [
      "2004",
      "2017",
      "2016",
      "2002"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1018"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Diablo II” first released?",
    "ar": "في أي سنة صدرت لعبة «Diablo II» لأول مرة؟",
    "options": [
      "1985",
      "2000",
      "2002",
      "1997"
    ],
    "optionsAr": [
      "1985",
      "2000",
      "2002",
      "1997"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1019"
  },
  {
    "category": "Gaming",
    "en": "In which year was “StarCraft” first released?",
    "ar": "في أي سنة صدرت لعبة «StarCraft» لأول مرة؟",
    "options": [
      "2020",
      "2006",
      "2000",
      "1998"
    ],
    "optionsAr": [
      "2020",
      "2006",
      "2000",
      "1998"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1020"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Hearthstone” first released?",
    "ar": "في أي سنة صدرت لعبة «Hearthstone» لأول مرة؟",
    "options": [
      "2016",
      "2017",
      "2009",
      "2014"
    ],
    "optionsAr": [
      "2016",
      "2017",
      "2009",
      "2014"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1021"
  },
  {
    "category": "Gaming",
    "en": "In which year was “The Sims” first released?",
    "ar": "في أي سنة صدرت لعبة «The Sims» لأول مرة؟",
    "options": [
      "2024",
      "2000",
      "2011",
      "2016"
    ],
    "optionsAr": [
      "2024",
      "2000",
      "2011",
      "2016"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1022"
  },
  {
    "category": "Gaming",
    "en": "In which year was “SimCity” first released?",
    "ar": "في أي سنة صدرت لعبة «SimCity» لأول مرة؟",
    "options": [
      "2002",
      "2004",
      "1996",
      "1989"
    ],
    "optionsAr": [
      "2002",
      "2004",
      "1996",
      "1989"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1023"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Grand Theft Auto III” first released?",
    "ar": "في أي سنة صدرت لعبة «Grand Theft Auto III» لأول مرة؟",
    "options": [
      "2016",
      "2001",
      "2023",
      "2005"
    ],
    "optionsAr": [
      "2016",
      "2001",
      "2023",
      "2005"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1024"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Grand Theft Auto V” first released?",
    "ar": "في أي سنة صدرت لعبة «Grand Theft Auto V» لأول مرة؟",
    "options": [
      "2021",
      "2005",
      "2004",
      "2013"
    ],
    "optionsAr": [
      "2021",
      "2005",
      "2004",
      "2013"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1025"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Red Dead Redemption 2” first released?",
    "ar": "في أي سنة صدرت لعبة «Red Dead Redemption 2» لأول مرة؟",
    "options": [
      "2018",
      "2022",
      "2014",
      "1985"
    ],
    "optionsAr": [
      "2018",
      "2022",
      "2014",
      "1985"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1026"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Bully” first released?",
    "ar": "في أي سنة صدرت لعبة «Bully» لأول مرة؟",
    "options": [
      "1993",
      "2006",
      "2014",
      "2016"
    ],
    "optionsAr": [
      "1993",
      "2006",
      "2014",
      "2016"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1027"
  },
  {
    "category": "Gaming",
    "en": "In which year was “L.A. Noire” first released?",
    "ar": "في أي سنة صدرت لعبة «L.A. Noire» لأول مرة؟",
    "options": [
      "2011",
      "1993",
      "2017",
      "2001"
    ],
    "optionsAr": [
      "2011",
      "1993",
      "2017",
      "2001"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1028"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Uncharted 2: Among Thieves” first released?",
    "ar": "في أي سنة صدرت لعبة «Uncharted 2: Among Thieves» لأول مرة؟",
    "options": [
      "2009",
      "2002",
      "2011",
      "1997"
    ],
    "optionsAr": [
      "2009",
      "2002",
      "2011",
      "1997"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1029"
  },
  {
    "category": "Gaming",
    "en": "In which year was “The Last of Us” first released?",
    "ar": "في أي سنة صدرت لعبة «The Last of Us» لأول مرة؟",
    "options": [
      "2023",
      "2020",
      "2013",
      "2022"
    ],
    "optionsAr": [
      "2023",
      "2020",
      "2013",
      "2022"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1030"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Crash Bandicoot” first released?",
    "ar": "في أي سنة صدرت لعبة «Crash Bandicoot» لأول مرة؟",
    "options": [
      "1996",
      "2021",
      "2011",
      "2000"
    ],
    "optionsAr": [
      "1996",
      "2021",
      "2011",
      "2000"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1031"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Jak and Daxter: The Precursor Legacy” first released?",
    "ar": "في أي سنة صدرت لعبة «Jak and Daxter: The Precursor Legacy» لأول مرة؟",
    "options": [
      "2013",
      "2006",
      "2008",
      "2001"
    ],
    "optionsAr": [
      "2013",
      "2006",
      "2008",
      "2001"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1032"
  },
  {
    "category": "Gaming",
    "en": "In which year was “God of War” first released?",
    "ar": "في أي سنة صدرت لعبة «God of War» لأول مرة؟",
    "options": [
      "2005",
      "2001",
      "2009",
      "2017"
    ],
    "optionsAr": [
      "2005",
      "2001",
      "2009",
      "2017"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1033"
  },
  {
    "category": "Gaming",
    "en": "In which year was “God of War Ragnarök” first released?",
    "ar": "في أي سنة صدرت لعبة «God of War Ragnarök» لأول مرة؟",
    "options": [
      "2006",
      "2015",
      "2022",
      "1987"
    ],
    "optionsAr": [
      "2006",
      "2015",
      "2022",
      "1987"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1034"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Horizon Zero Dawn” first released?",
    "ar": "في أي سنة صدرت لعبة «Horizon Zero Dawn» لأول مرة؟",
    "options": [
      "2017",
      "1992",
      "1993",
      "2016"
    ],
    "optionsAr": [
      "2017",
      "1992",
      "1993",
      "2016"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1035"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Ghost of Tsushima” first released?",
    "ar": "في أي سنة صدرت لعبة «Ghost of Tsushima» لأول مرة؟",
    "options": [
      "1987",
      "2020",
      "2007",
      "1996"
    ],
    "optionsAr": [
      "1987",
      "2020",
      "2007",
      "1996"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1036"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Marvel’s Spider-Man” first released?",
    "ar": "في أي سنة صدرت لعبة «Marvel’s Spider-Man» لأول مرة؟",
    "options": [
      "1985",
      "2016",
      "2018",
      "1989"
    ],
    "optionsAr": [
      "1985",
      "2016",
      "2018",
      "1989"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1037"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Ratchet & Clank” first released?",
    "ar": "في أي سنة صدرت لعبة «Ratchet & Clank» لأول مرة؟",
    "options": [
      "2013",
      "2002",
      "2001",
      "2000"
    ],
    "optionsAr": [
      "2013",
      "2002",
      "2001",
      "2000"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1038"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Gran Turismo 7” first released?",
    "ar": "في أي سنة صدرت لعبة «Gran Turismo 7» لأول مرة؟",
    "options": [
      "1981",
      "2022",
      "2009",
      "1998"
    ],
    "optionsAr": [
      "1981",
      "2022",
      "2009",
      "1998"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1039"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Elden Ring” first released?",
    "ar": "في أي سنة صدرت لعبة «Elden Ring» لأول مرة؟",
    "options": [
      "2007",
      "2023",
      "2005",
      "2022"
    ],
    "optionsAr": [
      "2007",
      "2023",
      "2005",
      "2022"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1040"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Dark Souls” first released?",
    "ar": "في أي سنة صدرت لعبة «Dark Souls» لأول مرة؟",
    "options": [
      "2014",
      "1981",
      "2011",
      "2008"
    ],
    "optionsAr": [
      "2014",
      "1981",
      "2011",
      "2008"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1041"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Bloodborne” first released?",
    "ar": "في أي سنة صدرت لعبة «Bloodborne» لأول مرة؟",
    "options": [
      "2009",
      "2002",
      "2015",
      "2005"
    ],
    "optionsAr": [
      "2009",
      "2002",
      "2015",
      "2005"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1042"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Sekiro: Shadows Die Twice” first released?",
    "ar": "في أي سنة صدرت لعبة «Sekiro: Shadows Die Twice» لأول مرة؟",
    "options": [
      "2008",
      "1986",
      "2019",
      "2000"
    ],
    "optionsAr": [
      "2008",
      "1986",
      "2019",
      "2000"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1043"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Tekken 8” first released?",
    "ar": "في أي سنة صدرت لعبة «Tekken 8» لأول مرة؟",
    "options": [
      "2017",
      "2000",
      "1985",
      "2024"
    ],
    "optionsAr": [
      "2017",
      "2000",
      "1985",
      "2024"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1044"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Fortnite” first released?",
    "ar": "في أي سنة صدرت لعبة «Fortnite» لأول مرة؟",
    "options": [
      "2006",
      "2008",
      "1999",
      "2017"
    ],
    "optionsAr": [
      "2006",
      "2008",
      "1999",
      "2017"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1045"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Afghanistan?",
    "ar": "ما عاصمة أفغانستان؟",
    "options": [
      "Muscat",
      "Berlin",
      "Kabul",
      "Algiers"
    ],
    "optionsAr": [
      "مسقط",
      "برلين",
      "كابل",
      "الجزائر العاصمة"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1046"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Albania?",
    "ar": "ما عاصمة ألبانيا؟",
    "options": [
      "Tirana",
      "Nairobi",
      "Tokyo",
      "Dhaka"
    ],
    "optionsAr": [
      "تيرانا",
      "نيروبي",
      "طوكيو",
      "دكا"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1047"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Algeria?",
    "ar": "ما عاصمة الجزائر؟",
    "options": [
      "Buenos Aires",
      "Reykjavik",
      "Warsaw",
      "Algiers"
    ],
    "optionsAr": [
      "بوينس آيرس",
      "ريكيافيك",
      "وارسو",
      "الجزائر العاصمة"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1048"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Angola?",
    "ar": "ما عاصمة أنغولا؟",
    "options": [
      "Kuala Lumpur",
      "Luanda",
      "Santo Domingo",
      "Kabul"
    ],
    "optionsAr": [
      "كوالالمبور",
      "لواندا",
      "سانتو دومينغو",
      "كابل"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1049"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Argentina?",
    "ar": "ما عاصمة الأرجنتين؟",
    "options": [
      "Gaborone",
      "Rome",
      "Quito",
      "Buenos Aires"
    ],
    "optionsAr": [
      "غابورون",
      "روما",
      "قويتو",
      "بوينس آيرس"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1050"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Armenia?",
    "ar": "ما عاصمة أرمينيا؟",
    "options": [
      "Tehran",
      "Helsinki",
      "Yerevan",
      "Phnom Penh"
    ],
    "optionsAr": [
      "تيهران",
      "هيلسينكي",
      "ييريفان",
      "بهنوم بينه"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1051"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Australia?",
    "ar": "ما عاصمة أستراليا؟",
    "options": [
      "Reykjavik",
      "Ottawa",
      "Canberra",
      "Vienna"
    ],
    "optionsAr": [
      "ريكيافيك",
      "وتتاوا",
      "كانبيررا",
      "فيينا"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1052"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Austria?",
    "ar": "ما عاصمة النمسا؟",
    "options": [
      "Ulan Bator",
      "Tallinn",
      "Vienna",
      "Budapest"
    ],
    "optionsAr": [
      "ولان باتور",
      "تاللينن",
      "فيينا",
      "بودابيست"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1053"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Azerbaijan?",
    "ar": "ما عاصمة أذربيجان؟",
    "options": [
      "Kathmandu",
      "Zagreb",
      "Baku",
      "Tokyo"
    ],
    "optionsAr": [
      "كاتهماندو",
      "زاجريب",
      "باكو",
      "طوكيو"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1054"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Bangladesh?",
    "ar": "ما عاصمة بنغلاديش؟",
    "options": [
      "Buenos Aires",
      "Copenhagen",
      "Luanda",
      "Dhaka"
    ],
    "optionsAr": [
      "بوينس آيرس",
      "كوبينهاجين",
      "لواندا",
      "دكا"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1055"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Belarus?",
    "ar": "ما عاصمة بيلاروس؟",
    "options": [
      "Bogotá",
      "Athens",
      "Phnom Penh",
      "Minsk"
    ],
    "optionsAr": [
      "بوجوتá",
      "أثينا",
      "بهنوم بينه",
      "مينسك"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1056"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Belgium?",
    "ar": "ما عاصمة بلجيكا؟",
    "options": [
      "Lima",
      "Jerusalem",
      "Brussels",
      "Tirana"
    ],
    "optionsAr": [
      "ليما",
      "جيروساليم",
      "بروسسيلس",
      "تيرانا"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1057"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Bolivia?",
    "ar": "ما عاصمة بوليفيا؟",
    "options": [
      "Sucre",
      "Havana",
      "Quito",
      "Jerusalem"
    ],
    "optionsAr": [
      "سوكري",
      "هافانا",
      "قويتو",
      "جيروساليم"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1058"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Bosnia And Herzegovina?",
    "ar": "ما عاصمة البوسنة والهرسك؟",
    "options": [
      "Baghdad",
      "Havana",
      "Berlin",
      "Sarajevo"
    ],
    "optionsAr": [
      "باجهداد",
      "هافانا",
      "برلين",
      "سراييفو"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1059"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Botswana?",
    "ar": "ما عاصمة بوتسوانا؟",
    "options": [
      "Rome",
      "Addis Ababa",
      "Santiago",
      "Gaborone"
    ],
    "optionsAr": [
      "روما",
      "ادديس ابابا",
      "سانتياجو",
      "غابورون"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1060"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Brazil?",
    "ar": "ما عاصمة البرازيل؟",
    "options": [
      "Brasília",
      "Berlin",
      "Dublin",
      "Kathmandu"
    ],
    "optionsAr": [
      "براسíليا",
      "برلين",
      "دوبلين",
      "كاتهماندو"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1061"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Bulgaria?",
    "ar": "ما عاصمة بلغاريا؟",
    "options": [
      "Brussels",
      "Islamabad",
      "Sofia",
      "Amsterdam"
    ],
    "optionsAr": [
      "بروسسيلس",
      "يسلاماباد",
      "سوفيا",
      "امستيردام"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1062"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Cambodia?",
    "ar": "ما عاصمة كمبوديا؟",
    "options": [
      "Phnom Penh",
      "Luanda",
      "Tokyo",
      "Amsterdam"
    ],
    "optionsAr": [
      "بهنوم بينه",
      "لواندا",
      "طوكيو",
      "امستيردام"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1063"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Cameroon?",
    "ar": "ما عاصمة الكاميرون؟",
    "options": [
      "Vienna",
      "Muscat",
      "Santiago",
      "Yaoundé"
    ],
    "optionsAr": [
      "فيينا",
      "مسقط",
      "سانتياجو",
      "ياووندé"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1064"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Canada?",
    "ar": "ما عاصمة كندا؟",
    "options": [
      "Baghdad",
      "Ottawa",
      "Sofia",
      "Copenhagen"
    ],
    "optionsAr": [
      "باجهداد",
      "وتتاوا",
      "سوفيا",
      "كوبينهاجين"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1065"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Chile?",
    "ar": "ما عاصمة تشيلي؟",
    "options": [
      "Canberra",
      "Santiago",
      "Havana",
      "Kuwait City"
    ],
    "optionsAr": [
      "كانبيررا",
      "سانتياجو",
      "هافانا",
      "كووايت كيتي"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1066"
  },
  {
    "category": "Geography",
    "en": "What is the capital of China?",
    "ar": "ما عاصمة الصين؟",
    "options": [
      "Beijing",
      "Abuja",
      "Kathmandu",
      "Islamabad"
    ],
    "optionsAr": [
      "بكين",
      "ابوجا",
      "كاتهماندو",
      "يسلاماباد"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1067"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Colombia?",
    "ar": "ما عاصمة كولومبيا؟",
    "options": [
      "Guatemala City",
      "Baghdad",
      "Kuwait City",
      "Bogotá"
    ],
    "optionsAr": [
      "جواتيمالا كيتي",
      "باجهداد",
      "كووايت كيتي",
      "بوجوتá"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1068"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Costa Rica?",
    "ar": "ما عاصمة كوستاريكا؟",
    "options": [
      "Nairobi",
      "Dhaka",
      "San José",
      "Santiago"
    ],
    "optionsAr": [
      "نيروبي",
      "دكا",
      "سان جوسé",
      "سانتياجو"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1069"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Croatia?",
    "ar": "ما عاصمة كرواتيا؟",
    "options": [
      "Buenos Aires",
      "Havana",
      "Manila",
      "Zagreb"
    ],
    "optionsAr": [
      "بوينس آيرس",
      "هافانا",
      "مانيلا",
      "زاجريب"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1070"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Cuba?",
    "ar": "ما عاصمة كوبا؟",
    "options": [
      "Muscat",
      "Havana",
      "San José",
      "Minsk"
    ],
    "optionsAr": [
      "مسقط",
      "هافانا",
      "سان جوسé",
      "مينسك"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1071"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Cyprus?",
    "ar": "ما عاصمة قبرص؟",
    "options": [
      "Buenos Aires",
      "Addis Ababa",
      "Nicosia",
      "Havana"
    ],
    "optionsAr": [
      "بوينس آيرس",
      "ادديس ابابا",
      "نيكوسيا",
      "هافانا"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1072"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Denmark?",
    "ar": "ما عاصمة الدانمرك؟",
    "options": [
      "Ulan Bator",
      "Copenhagen",
      "Sucre",
      "Kuwait City"
    ],
    "optionsAr": [
      "ولان باتور",
      "كوبينهاجين",
      "سوكري",
      "كووايت كيتي"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1073"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Dominican Republic?",
    "ar": "ما عاصمة جمهورية الدومينيكان؟",
    "options": [
      "Santo Domingo",
      "Beirut",
      "Warsaw",
      "Lima"
    ],
    "optionsAr": [
      "سانتو دومينغو",
      "بييروت",
      "وارسو",
      "ليما"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1074"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Ecuador?",
    "ar": "ما عاصمة الإكوادور؟",
    "options": [
      "Tehran",
      "Quito",
      "Santo Domingo",
      "Dublin"
    ],
    "optionsAr": [
      "تيهران",
      "قويتو",
      "سانتو دومينغو",
      "دوبلين"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1075"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Egypt?",
    "ar": "ما عاصمة مصر؟",
    "options": [
      "Oslo",
      "Nairobi",
      "Dhaka",
      "Cairo"
    ],
    "optionsAr": [
      "وسلو",
      "نيروبي",
      "دكا",
      "القاهرة"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1076"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Estonia?",
    "ar": "ما عاصمة إستونيا؟",
    "options": [
      "Tallinn",
      "Buenos Aires",
      "Canberra",
      "Santiago"
    ],
    "optionsAr": [
      "تاللينن",
      "بوينس آيرس",
      "كانبيررا",
      "سانتياجو"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1077"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Ethiopia?",
    "ar": "ما عاصمة إثيوبيا؟",
    "options": [
      "Baghdad",
      "Helsinki",
      "Reykjavik",
      "Addis Ababa"
    ],
    "optionsAr": [
      "باجهداد",
      "هيلسينكي",
      "ريكيافيك",
      "ادديس ابابا"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1078"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Finland?",
    "ar": "ما عاصمة فنلندا؟",
    "options": [
      "Ulan Bator",
      "Nicosia",
      "Helsinki",
      "Wellington"
    ],
    "optionsAr": [
      "ولان باتور",
      "نيكوسيا",
      "هيلسينكي",
      "ويللينجتون"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1079"
  },
  {
    "category": "Geography",
    "en": "What is the capital of France?",
    "ar": "ما عاصمة فرنسا؟",
    "options": [
      "Bogotá",
      "Paris",
      "Helsinki",
      "Amman"
    ],
    "optionsAr": [
      "بوجوتá",
      "باريس",
      "هيلسينكي",
      "اممان"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1080"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Georgia?",
    "ar": "ما عاصمة جورجيا؟",
    "options": [
      "Kuala Lumpur",
      "Athens",
      "Sarajevo",
      "Tbilisi"
    ],
    "optionsAr": [
      "كوالالمبور",
      "أثينا",
      "سراييفو",
      "تبيليسي"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1081"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Germany?",
    "ar": "ما عاصمة ألمانيا؟",
    "options": [
      "Tehran",
      "Minsk",
      "Berlin",
      "Algiers"
    ],
    "optionsAr": [
      "تيهران",
      "مينسك",
      "برلين",
      "الجزائر العاصمة"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1082"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Ghana?",
    "ar": "ما عاصمة غانا؟",
    "options": [
      "Guatemala City",
      "Accra",
      "Mexico City",
      "Sarajevo"
    ],
    "optionsAr": [
      "جواتيمالا كيتي",
      "اككرا",
      "ميكسيكو كيتي",
      "سراييفو"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1083"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Greece?",
    "ar": "ما عاصمة اليونان؟",
    "options": [
      "Athens",
      "Sofia",
      "Sucre",
      "Phnom Penh"
    ],
    "optionsAr": [
      "أثينا",
      "سوفيا",
      "سوكري",
      "بهنوم بينه"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1084"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Guatemala?",
    "ar": "ما عاصمة غواتيمالا؟",
    "options": [
      "Beijing",
      "Guatemala City",
      "Zagreb",
      "Beirut"
    ],
    "optionsAr": [
      "بكين",
      "جواتيمالا كيتي",
      "زاجريب",
      "بييروت"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1085"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Hungary?",
    "ar": "ما عاصمة هنغاريا؟",
    "options": [
      "Canberra",
      "Athens",
      "Budapest",
      "Manila"
    ],
    "optionsAr": [
      "كانبيررا",
      "أثينا",
      "بودابيست",
      "مانيلا"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1086"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Iceland?",
    "ar": "ما عاصمة آيسلندا؟",
    "options": [
      "Baku",
      "Athens",
      "Reykjavik",
      "Tokyo"
    ],
    "optionsAr": [
      "باكو",
      "أثينا",
      "ريكيافيك",
      "طوكيو"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1087"
  },
  {
    "category": "Geography",
    "en": "What is the capital of India?",
    "ar": "ما عاصمة الهند؟",
    "options": [
      "Rome",
      "New Delhi",
      "Vienna",
      "Abuja"
    ],
    "optionsAr": [
      "روما",
      "نيو ديلهي",
      "فيينا",
      "ابوجا"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1088"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Indonesia?",
    "ar": "ما عاصمة إندونيسيا؟",
    "options": [
      "Vienna",
      "Yaoundé",
      "Amman",
      "Jakarta"
    ],
    "optionsAr": [
      "فيينا",
      "ياووندé",
      "اممان",
      "جاكارتا"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1089"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Iran?",
    "ar": "ما عاصمة إيران؟",
    "options": [
      "Kathmandu",
      "Tokyo",
      "Quito",
      "Tehran"
    ],
    "optionsAr": [
      "كاتهماندو",
      "طوكيو",
      "قويتو",
      "تيهران"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1090"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Iraq?",
    "ar": "ما عاصمة العراق؟",
    "options": [
      "Baghdad",
      "Sarajevo",
      "Guatemala City",
      "Yerevan"
    ],
    "optionsAr": [
      "باجهداد",
      "سراييفو",
      "جواتيمالا كيتي",
      "ييريفان"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1091"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Ireland?",
    "ar": "ما عاصمة أيرلندا؟",
    "options": [
      "Luanda",
      "Jerusalem",
      "Dublin",
      "Ottawa"
    ],
    "optionsAr": [
      "لواندا",
      "جيروساليم",
      "دوبلين",
      "وتتاوا"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1092"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Israel?",
    "ar": "ما عاصمة إسرائيل؟",
    "options": [
      "Santo Domingo",
      "Jerusalem",
      "Baghdad",
      "Lima"
    ],
    "optionsAr": [
      "سانتو دومينغو",
      "جيروساليم",
      "باجهداد",
      "ليما"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1093"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Italy?",
    "ar": "ما عاصمة إيطاليا؟",
    "options": [
      "Rome",
      "Manila",
      "Kabul",
      "Kathmandu"
    ],
    "optionsAr": [
      "روما",
      "مانيلا",
      "كابل",
      "كاتهماندو"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1094"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Japan?",
    "ar": "ما عاصمة اليابان؟",
    "options": [
      "Luanda",
      "Yerevan",
      "Copenhagen",
      "Tokyo"
    ],
    "optionsAr": [
      "لواندا",
      "ييريفان",
      "كوبينهاجين",
      "طوكيو"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1095"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Jordan?",
    "ar": "ما عاصمة الأردن؟",
    "options": [
      "Budapest",
      "Amman",
      "Kabul",
      "Sofia"
    ],
    "optionsAr": [
      "بودابيست",
      "اممان",
      "كابل",
      "سوفيا"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1096"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Kazakhstan?",
    "ar": "ما عاصمة كازاخستان؟",
    "options": [
      "Paris",
      "Astana",
      "Kuwait City",
      "Canberra"
    ],
    "optionsAr": [
      "باريس",
      "أستانا",
      "كووايت كيتي",
      "كانبيررا"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1097"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Kenya?",
    "ar": "ما عاصمة كينيا؟",
    "options": [
      "Nairobi",
      "New Delhi",
      "Jakarta",
      "Brussels"
    ],
    "optionsAr": [
      "نيروبي",
      "نيو ديلهي",
      "جاكارتا",
      "بروسسيلس"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1098"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Kuwait?",
    "ar": "ما عاصمة الكويت؟",
    "options": [
      "Reykjavik",
      "Lima",
      "Ulan Bator",
      "Kuwait City"
    ],
    "optionsAr": [
      "ريكيافيك",
      "ليما",
      "ولان باتور",
      "كووايت كيتي"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1099"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Lebanon?",
    "ar": "ما عاصمة لبنان؟",
    "options": [
      "Kabul",
      "Algiers",
      "Tallinn",
      "Beirut"
    ],
    "optionsAr": [
      "كابل",
      "الجزائر العاصمة",
      "تاللينن",
      "بييروت"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1100"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Malaysia?",
    "ar": "ما عاصمة ماليزيا؟",
    "options": [
      "Ottawa",
      "Kuala Lumpur",
      "Gaborone",
      "Muscat"
    ],
    "optionsAr": [
      "وتتاوا",
      "كوالالمبور",
      "غابورون",
      "مسقط"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1101"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Mexico?",
    "ar": "ما عاصمة المكسيك؟",
    "options": [
      "Lima",
      "Amman",
      "Mexico City",
      "Tirana"
    ],
    "optionsAr": [
      "ليما",
      "اممان",
      "ميكسيكو كيتي",
      "تيرانا"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1102"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Mongolia?",
    "ar": "ما عاصمة منغوليا؟",
    "options": [
      "Rabat",
      "New Delhi",
      "Lima",
      "Ulan Bator"
    ],
    "optionsAr": [
      "رابات",
      "نيو ديلهي",
      "ليما",
      "ولان باتور"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1103"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Morocco?",
    "ar": "ما عاصمة المغرب؟",
    "options": [
      "Reykjavik",
      "New Delhi",
      "Rabat",
      "Minsk"
    ],
    "optionsAr": [
      "ريكيافيك",
      "نيو ديلهي",
      "رابات",
      "مينسك"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1104"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Nepal?",
    "ar": "ما عاصمة نيبال؟",
    "options": [
      "Muscat",
      "Tallinn",
      "Ulan Bator",
      "Kathmandu"
    ],
    "optionsAr": [
      "مسقط",
      "تاللينن",
      "ولان باتور",
      "كاتهماندو"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1105"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Netherlands?",
    "ar": "ما عاصمة هولندا؟",
    "options": [
      "Amsterdam",
      "Baku",
      "Paris",
      "Athens"
    ],
    "optionsAr": [
      "امستيردام",
      "باكو",
      "باريس",
      "أثينا"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1106"
  },
  {
    "category": "Geography",
    "en": "What is the capital of New Zealand?",
    "ar": "ما عاصمة نيوزيلندا؟",
    "options": [
      "Minsk",
      "Amsterdam",
      "Wellington",
      "New Delhi"
    ],
    "optionsAr": [
      "مينسك",
      "امستيردام",
      "ويللينجتون",
      "نيو ديلهي"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1107"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Nigeria?",
    "ar": "ما عاصمة نيجيريا؟",
    "options": [
      "Lima",
      "Tallinn",
      "Quito",
      "Abuja"
    ],
    "optionsAr": [
      "ليما",
      "تاللينن",
      "قويتو",
      "ابوجا"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1108"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Norway?",
    "ar": "ما عاصمة النرويج؟",
    "options": [
      "Oslo",
      "Addis Ababa",
      "Yaoundé",
      "Accra"
    ],
    "optionsAr": [
      "وسلو",
      "ادديس ابابا",
      "ياووندé",
      "اككرا"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1109"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Oman?",
    "ar": "ما عاصمة عُمان؟",
    "options": [
      "Muscat",
      "Rabat",
      "Budapest",
      "Addis Ababa"
    ],
    "optionsAr": [
      "مسقط",
      "رابات",
      "بودابيست",
      "ادديس ابابا"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1110"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Pakistan?",
    "ar": "ما عاصمة باكستان؟",
    "options": [
      "Baghdad",
      "Jakarta",
      "Yaoundé",
      "Islamabad"
    ],
    "optionsAr": [
      "باجهداد",
      "جاكارتا",
      "ياووندé",
      "يسلاماباد"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1111"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Peru?",
    "ar": "ما عاصمة بيرو؟",
    "options": [
      "San José",
      "Lima",
      "Dhaka",
      "Zagreb"
    ],
    "optionsAr": [
      "سان جوسé",
      "ليما",
      "دكا",
      "زاجريب"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1112"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Philippines?",
    "ar": "ما عاصمة الفلبين؟",
    "options": [
      "Ottawa",
      "Manila",
      "Brussels",
      "Reykjavik"
    ],
    "optionsAr": [
      "وتتاوا",
      "مانيلا",
      "بروسسيلس",
      "ريكيافيك"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1113"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Poland?",
    "ar": "ما عاصمة بولندا؟",
    "options": [
      "Manila",
      "Santo Domingo",
      "Minsk",
      "Warsaw"
    ],
    "optionsAr": [
      "مانيلا",
      "سانتو دومينغو",
      "مينسك",
      "وارسو"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1114"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Afghanistan part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي أفغانستان؟",
    "options": [
      "Americas",
      "Oceania",
      "Asia",
      "Africa"
    ],
    "optionsAr": [
      "اميريكاس",
      "وكيانيا",
      "آسيا",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1115"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Albania part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي ألبانيا؟",
    "options": [
      "Europe",
      "Asia",
      "Africa",
      "Americas"
    ],
    "optionsAr": [
      "أوروبا",
      "آسيا",
      "أفريقيا",
      "اميريكاس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1116"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Algeria part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الجزائر؟",
    "options": [
      "Oceania",
      "Americas",
      "Africa",
      "Asia"
    ],
    "optionsAr": [
      "وكيانيا",
      "اميريكاس",
      "أفريقيا",
      "آسيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1117"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Angola part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي أنغولا؟",
    "options": [
      "Africa",
      "Oceania",
      "Americas",
      "Europe"
    ],
    "optionsAr": [
      "أفريقيا",
      "وكيانيا",
      "اميريكاس",
      "أوروبا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1118"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Argentina part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الأرجنتين؟",
    "options": [
      "Africa",
      "Asia",
      "Europe",
      "Americas"
    ],
    "optionsAr": [
      "أفريقيا",
      "آسيا",
      "أوروبا",
      "اميريكاس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1119"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Armenia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي أرمينيا؟",
    "options": [
      "Asia",
      "Europe",
      "Oceania",
      "Americas"
    ],
    "optionsAr": [
      "آسيا",
      "أوروبا",
      "وكيانيا",
      "اميريكاس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1120"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Australia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي أستراليا؟",
    "options": [
      "Asia",
      "Africa",
      "Europe",
      "Oceania"
    ],
    "optionsAr": [
      "آسيا",
      "أفريقيا",
      "أوروبا",
      "وكيانيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1121"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Austria part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي النمسا؟",
    "options": [
      "Europe",
      "Africa",
      "Americas",
      "Oceania"
    ],
    "optionsAr": [
      "أوروبا",
      "أفريقيا",
      "اميريكاس",
      "وكيانيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1122"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Azerbaijan part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي أذربيجان؟",
    "options": [
      "Asia",
      "Europe",
      "Oceania",
      "Americas"
    ],
    "optionsAr": [
      "آسيا",
      "أوروبا",
      "وكيانيا",
      "اميريكاس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1123"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Bangladesh part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بنغلاديش؟",
    "options": [
      "Oceania",
      "Europe",
      "Africa",
      "Asia"
    ],
    "optionsAr": [
      "وكيانيا",
      "أوروبا",
      "أفريقيا",
      "آسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1124"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Belarus part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بيلاروس؟",
    "options": [
      "Europe",
      "Oceania",
      "Africa",
      "Americas"
    ],
    "optionsAr": [
      "أوروبا",
      "وكيانيا",
      "أفريقيا",
      "اميريكاس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1125"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Belgium part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بلجيكا؟",
    "options": [
      "Americas",
      "Africa",
      "Europe",
      "Asia"
    ],
    "optionsAr": [
      "اميريكاس",
      "أفريقيا",
      "أوروبا",
      "آسيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1126"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Bolivia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بوليفيا؟",
    "options": [
      "Americas",
      "Oceania",
      "Asia",
      "Europe"
    ],
    "optionsAr": [
      "اميريكاس",
      "وكيانيا",
      "آسيا",
      "أوروبا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1127"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Bosnia And Herzegovina part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي البوسنة والهرسك؟",
    "options": [
      "Asia",
      "Oceania",
      "Europe",
      "Americas"
    ],
    "optionsAr": [
      "آسيا",
      "وكيانيا",
      "أوروبا",
      "اميريكاس"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1128"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Botswana part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بوتسوانا؟",
    "options": [
      "Asia",
      "Europe",
      "Africa",
      "Oceania"
    ],
    "optionsAr": [
      "آسيا",
      "أوروبا",
      "أفريقيا",
      "وكيانيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1129"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Brazil part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي البرازيل؟",
    "options": [
      "Africa",
      "Asia",
      "Americas",
      "Europe"
    ],
    "optionsAr": [
      "أفريقيا",
      "آسيا",
      "اميريكاس",
      "أوروبا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1130"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Bulgaria part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بلغاريا؟",
    "options": [
      "Asia",
      "Europe",
      "Africa",
      "Americas"
    ],
    "optionsAr": [
      "آسيا",
      "أوروبا",
      "أفريقيا",
      "اميريكاس"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1131"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Cambodia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كمبوديا؟",
    "options": [
      "Europe",
      "Americas",
      "Asia",
      "Africa"
    ],
    "optionsAr": [
      "أوروبا",
      "اميريكاس",
      "آسيا",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1132"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Cameroon part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الكاميرون؟",
    "options": [
      "Oceania",
      "Europe",
      "Africa",
      "Asia"
    ],
    "optionsAr": [
      "وكيانيا",
      "أوروبا",
      "أفريقيا",
      "آسيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1133"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Canada part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كندا؟",
    "options": [
      "Asia",
      "Africa",
      "Oceania",
      "Americas"
    ],
    "optionsAr": [
      "آسيا",
      "أفريقيا",
      "وكيانيا",
      "اميريكاس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1134"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Chile part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي تشيلي؟",
    "options": [
      "Africa",
      "Americas",
      "Europe",
      "Oceania"
    ],
    "optionsAr": [
      "أفريقيا",
      "اميريكاس",
      "أوروبا",
      "وكيانيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1135"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is China part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الصين؟",
    "options": [
      "Africa",
      "Asia",
      "Americas",
      "Europe"
    ],
    "optionsAr": [
      "أفريقيا",
      "آسيا",
      "اميريكاس",
      "أوروبا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1136"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Colombia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كولومبيا؟",
    "options": [
      "Americas",
      "Oceania",
      "Asia",
      "Africa"
    ],
    "optionsAr": [
      "اميريكاس",
      "وكيانيا",
      "آسيا",
      "أفريقيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1137"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Costa Rica part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كوستاريكا؟",
    "options": [
      "Europe",
      "Africa",
      "Americas",
      "Oceania"
    ],
    "optionsAr": [
      "أوروبا",
      "أفريقيا",
      "اميريكاس",
      "وكيانيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1138"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Croatia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كرواتيا؟",
    "options": [
      "Americas",
      "Oceania",
      "Europe",
      "Africa"
    ],
    "optionsAr": [
      "اميريكاس",
      "وكيانيا",
      "أوروبا",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1139"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Cuba part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كوبا؟",
    "options": [
      "Europe",
      "Asia",
      "Oceania",
      "Americas"
    ],
    "optionsAr": [
      "أوروبا",
      "آسيا",
      "وكيانيا",
      "اميريكاس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1140"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Cyprus part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي قبرص؟",
    "options": [
      "Europe",
      "Americas",
      "Oceania",
      "Asia"
    ],
    "optionsAr": [
      "أوروبا",
      "اميريكاس",
      "وكيانيا",
      "آسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1141"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Denmark part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الدانمرك؟",
    "options": [
      "Europe",
      "Africa",
      "Americas",
      "Oceania"
    ],
    "optionsAr": [
      "أوروبا",
      "أفريقيا",
      "اميريكاس",
      "وكيانيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1142"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Dominican Republic part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي جمهورية الدومينيكان؟",
    "options": [
      "Oceania",
      "Americas",
      "Africa",
      "Asia"
    ],
    "optionsAr": [
      "وكيانيا",
      "اميريكاس",
      "أفريقيا",
      "آسيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1143"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Ecuador part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الإكوادور؟",
    "options": [
      "Africa",
      "Oceania",
      "Europe",
      "Americas"
    ],
    "optionsAr": [
      "أفريقيا",
      "وكيانيا",
      "أوروبا",
      "اميريكاس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1144"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Egypt part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي مصر؟",
    "options": [
      "Africa",
      "Asia",
      "Americas",
      "Oceania"
    ],
    "optionsAr": [
      "أفريقيا",
      "آسيا",
      "اميريكاس",
      "وكيانيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1145"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Estonia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي إستونيا؟",
    "options": [
      "Oceania",
      "Asia",
      "Europe",
      "Americas"
    ],
    "optionsAr": [
      "وكيانيا",
      "آسيا",
      "أوروبا",
      "اميريكاس"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1146"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Ethiopia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي إثيوبيا؟",
    "options": [
      "Africa",
      "Asia",
      "Americas",
      "Europe"
    ],
    "optionsAr": [
      "أفريقيا",
      "آسيا",
      "اميريكاس",
      "أوروبا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1147"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Finland part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي فنلندا؟",
    "options": [
      "Oceania",
      "Americas",
      "Europe",
      "Africa"
    ],
    "optionsAr": [
      "وكيانيا",
      "اميريكاس",
      "أوروبا",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1148"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is France part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي فرنسا؟",
    "options": [
      "Americas",
      "Oceania",
      "Africa",
      "Europe"
    ],
    "optionsAr": [
      "اميريكاس",
      "وكيانيا",
      "أفريقيا",
      "أوروبا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1149"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Georgia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي جورجيا؟",
    "options": [
      "Oceania",
      "Americas",
      "Europe",
      "Asia"
    ],
    "optionsAr": [
      "وكيانيا",
      "اميريكاس",
      "أوروبا",
      "آسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1150"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Germany part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي ألمانيا؟",
    "options": [
      "Europe",
      "Asia",
      "Africa",
      "Oceania"
    ],
    "optionsAr": [
      "أوروبا",
      "آسيا",
      "أفريقيا",
      "وكيانيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1151"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Ghana part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي غانا؟",
    "options": [
      "Africa",
      "Europe",
      "Oceania",
      "Asia"
    ],
    "optionsAr": [
      "أفريقيا",
      "أوروبا",
      "وكيانيا",
      "آسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1152"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Greece part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي اليونان؟",
    "options": [
      "Americas",
      "Europe",
      "Africa",
      "Asia"
    ],
    "optionsAr": [
      "اميريكاس",
      "أوروبا",
      "أفريقيا",
      "آسيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1153"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Guatemala part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي غواتيمالا؟",
    "options": [
      "Oceania",
      "Africa",
      "Europe",
      "Americas"
    ],
    "optionsAr": [
      "وكيانيا",
      "أفريقيا",
      "أوروبا",
      "اميريكاس"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1154"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Hungary part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي هنغاريا؟",
    "options": [
      "Europe",
      "Oceania",
      "Asia",
      "Africa"
    ],
    "optionsAr": [
      "أوروبا",
      "وكيانيا",
      "آسيا",
      "أفريقيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1155"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Iceland part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي آيسلندا؟",
    "options": [
      "Asia",
      "Africa",
      "Europe",
      "Oceania"
    ],
    "optionsAr": [
      "آسيا",
      "أفريقيا",
      "أوروبا",
      "وكيانيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1156"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is India part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الهند؟",
    "options": [
      "Europe",
      "Oceania",
      "Africa",
      "Asia"
    ],
    "optionsAr": [
      "أوروبا",
      "وكيانيا",
      "أفريقيا",
      "آسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1157"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Indonesia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي إندونيسيا؟",
    "options": [
      "Americas",
      "Oceania",
      "Asia",
      "Africa"
    ],
    "optionsAr": [
      "اميريكاس",
      "وكيانيا",
      "آسيا",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1158"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Iran part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي إيران؟",
    "options": [
      "Americas",
      "Asia",
      "Africa",
      "Europe"
    ],
    "optionsAr": [
      "اميريكاس",
      "آسيا",
      "أفريقيا",
      "أوروبا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1159"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Iraq part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي العراق؟",
    "options": [
      "Africa",
      "Asia",
      "Americas",
      "Europe"
    ],
    "optionsAr": [
      "أفريقيا",
      "آسيا",
      "اميريكاس",
      "أوروبا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1160"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Ireland part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي أيرلندا؟",
    "options": [
      "Europe",
      "Oceania",
      "Asia",
      "Americas"
    ],
    "optionsAr": [
      "أوروبا",
      "وكيانيا",
      "آسيا",
      "اميريكاس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1161"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Israel part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي إسرائيل؟",
    "options": [
      "Oceania",
      "Europe",
      "Americas",
      "Asia"
    ],
    "optionsAr": [
      "وكيانيا",
      "أوروبا",
      "اميريكاس",
      "آسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1162"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Italy part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي إيطاليا؟",
    "options": [
      "Europe",
      "Africa",
      "Oceania",
      "Asia"
    ],
    "optionsAr": [
      "أوروبا",
      "أفريقيا",
      "وكيانيا",
      "آسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1163"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Japan part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي اليابان؟",
    "options": [
      "Americas",
      "Oceania",
      "Europe",
      "Asia"
    ],
    "optionsAr": [
      "اميريكاس",
      "وكيانيا",
      "أوروبا",
      "آسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1164"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Jordan part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الأردن؟",
    "options": [
      "Asia",
      "Oceania",
      "Europe",
      "Americas"
    ],
    "optionsAr": [
      "آسيا",
      "وكيانيا",
      "أوروبا",
      "اميريكاس"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1165"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Kazakhstan part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كازاخستان؟",
    "options": [
      "Asia",
      "Americas",
      "Africa",
      "Oceania"
    ],
    "optionsAr": [
      "آسيا",
      "اميريكاس",
      "أفريقيا",
      "وكيانيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1166"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Kenya part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كينيا؟",
    "options": [
      "Americas",
      "Europe",
      "Africa",
      "Oceania"
    ],
    "optionsAr": [
      "اميريكاس",
      "أوروبا",
      "أفريقيا",
      "وكيانيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1167"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Kuwait part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الكويت؟",
    "options": [
      "Europe",
      "Asia",
      "Americas",
      "Oceania"
    ],
    "optionsAr": [
      "أوروبا",
      "آسيا",
      "اميريكاس",
      "وكيانيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1168"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Lebanon part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي لبنان؟",
    "options": [
      "Europe",
      "Asia",
      "Americas",
      "Africa"
    ],
    "optionsAr": [
      "أوروبا",
      "آسيا",
      "اميريكاس",
      "أفريقيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1169"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Malaysia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي ماليزيا؟",
    "options": [
      "Africa",
      "Americas",
      "Asia",
      "Oceania"
    ],
    "optionsAr": [
      "أفريقيا",
      "اميريكاس",
      "آسيا",
      "وكيانيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1170"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Mexico part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي المكسيك؟",
    "options": [
      "Americas",
      "Africa",
      "Oceania",
      "Asia"
    ],
    "optionsAr": [
      "اميريكاس",
      "أفريقيا",
      "وكيانيا",
      "آسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1171"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Mongolia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي منغوليا؟",
    "options": [
      "Americas",
      "Asia",
      "Oceania",
      "Africa"
    ],
    "optionsAr": [
      "اميريكاس",
      "آسيا",
      "وكيانيا",
      "أفريقيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1172"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Morocco part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي المغرب؟",
    "options": [
      "Americas",
      "Africa",
      "Asia",
      "Oceania"
    ],
    "optionsAr": [
      "اميريكاس",
      "أفريقيا",
      "آسيا",
      "وكيانيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1173"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Nepal part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي نيبال؟",
    "options": [
      "Americas",
      "Asia",
      "Europe",
      "Oceania"
    ],
    "optionsAr": [
      "اميريكاس",
      "آسيا",
      "أوروبا",
      "وكيانيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1174"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Netherlands part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي هولندا؟",
    "options": [
      "Oceania",
      "Europe",
      "Africa",
      "Americas"
    ],
    "optionsAr": [
      "وكيانيا",
      "أوروبا",
      "أفريقيا",
      "اميريكاس"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1175"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is New Zealand part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي نيوزيلندا؟",
    "options": [
      "Americas",
      "Asia",
      "Oceania",
      "Europe"
    ],
    "optionsAr": [
      "اميريكاس",
      "آسيا",
      "وكيانيا",
      "أوروبا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1176"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Nigeria part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي نيجيريا؟",
    "options": [
      "Oceania",
      "Asia",
      "Americas",
      "Africa"
    ],
    "optionsAr": [
      "وكيانيا",
      "آسيا",
      "اميريكاس",
      "أفريقيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1177"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Norway part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي النرويج؟",
    "options": [
      "Africa",
      "Europe",
      "Americas",
      "Oceania"
    ],
    "optionsAr": [
      "أفريقيا",
      "أوروبا",
      "اميريكاس",
      "وكيانيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1178"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Oman part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي عُمان؟",
    "options": [
      "Americas",
      "Oceania",
      "Asia",
      "Africa"
    ],
    "optionsAr": [
      "اميريكاس",
      "وكيانيا",
      "آسيا",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1179"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Pakistan part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي باكستان؟",
    "options": [
      "Africa",
      "Americas",
      "Asia",
      "Oceania"
    ],
    "optionsAr": [
      "أفريقيا",
      "اميريكاس",
      "آسيا",
      "وكيانيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1180"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Peru part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بيرو؟",
    "options": [
      "Oceania",
      "Asia",
      "Americas",
      "Africa"
    ],
    "optionsAr": [
      "وكيانيا",
      "آسيا",
      "اميريكاس",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1181"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Philippines part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الفلبين؟",
    "options": [
      "Americas",
      "Africa",
      "Europe",
      "Asia"
    ],
    "optionsAr": [
      "اميريكاس",
      "أفريقيا",
      "أوروبا",
      "آسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1182"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Afghanistan?",
    "ar": "ما رمز العملة المتداولة رسميًا في أفغانستان؟",
    "options": [
      "DOP",
      "AFN",
      "EUR",
      "KWD"
    ],
    "optionsAr": [
      "DOP",
      "AFN",
      "EUR",
      "KWD"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1183"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Albania?",
    "ar": "ما رمز العملة المتداولة رسميًا في ألبانيا؟",
    "options": [
      "CNY",
      "ALL",
      "GTQ",
      "NGN"
    ],
    "optionsAr": [
      "CNY",
      "ALL",
      "GTQ",
      "NGN"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1184"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Algeria?",
    "ar": "ما رمز العملة المتداولة رسميًا في الجزائر؟",
    "options": [
      "MYR",
      "ISK",
      "DZD",
      "BRL"
    ],
    "optionsAr": [
      "MYR",
      "ISK",
      "DZD",
      "BRL"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1185"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Angola?",
    "ar": "ما رمز العملة المتداولة رسميًا في أنغولا؟",
    "options": [
      "DZD",
      "NPR",
      "AOA",
      "PHP"
    ],
    "optionsAr": [
      "DZD",
      "NPR",
      "AOA",
      "PHP"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1186"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Argentina?",
    "ar": "ما رمز العملة المتداولة رسميًا في الأرجنتين؟",
    "options": [
      "IDR",
      "AOA",
      "ARS",
      "ETB"
    ],
    "optionsAr": [
      "IDR",
      "AOA",
      "ARS",
      "ETB"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1187"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Armenia?",
    "ar": "ما رمز العملة المتداولة رسميًا في أرمينيا؟",
    "options": [
      "AMD",
      "KHR",
      "MAD",
      "AZN"
    ],
    "optionsAr": [
      "AMD",
      "KHR",
      "MAD",
      "AZN"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1188"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Australia?",
    "ar": "ما رمز العملة المتداولة رسميًا في أستراليا؟",
    "options": [
      "KHR",
      "AUD",
      "DOP",
      "PEN"
    ],
    "optionsAr": [
      "KHR",
      "AUD",
      "DOP",
      "PEN"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1189"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Austria?",
    "ar": "ما رمز العملة المتداولة رسميًا في النمسا؟",
    "options": [
      "BWP",
      "AMD",
      "EUR",
      "DOP"
    ],
    "optionsAr": [
      "BWP",
      "AMD",
      "EUR",
      "DOP"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1190"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Azerbaijan?",
    "ar": "ما رمز العملة المتداولة رسميًا في أذربيجان؟",
    "options": [
      "LBP",
      "DKK",
      "PLN",
      "AZN"
    ],
    "optionsAr": [
      "LBP",
      "DKK",
      "PLN",
      "AZN"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1191"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Bangladesh?",
    "ar": "ما رمز العملة المتداولة رسميًا في بنغلاديش؟",
    "options": [
      "ILS",
      "ARS",
      "KHR",
      "BDT"
    ],
    "optionsAr": [
      "ILS",
      "ARS",
      "KHR",
      "BDT"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1192"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Belarus?",
    "ar": "ما رمز العملة المتداولة رسميًا في بيلاروس؟",
    "options": [
      "NPR",
      "NZD",
      "BYR",
      "GHS"
    ],
    "optionsAr": [
      "NPR",
      "NZD",
      "BYR",
      "GHS"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1193"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Belgium?",
    "ar": "ما رمز العملة المتداولة رسميًا في بلجيكا؟",
    "options": [
      "ISK",
      "DOP",
      "LBP",
      "EUR"
    ],
    "optionsAr": [
      "ISK",
      "DOP",
      "LBP",
      "EUR"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1194"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Bolivia?",
    "ar": "ما رمز العملة المتداولة رسميًا في بوليفيا؟",
    "options": [
      "KHR",
      "NGN",
      "BOB",
      "PLN"
    ],
    "optionsAr": [
      "KHR",
      "NGN",
      "BOB",
      "PLN"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1195"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Bosnia And Herzegovina?",
    "ar": "ما رمز العملة المتداولة رسميًا في البوسنة والهرسك؟",
    "options": [
      "GEL",
      "AOA",
      "LBP",
      "BAM"
    ],
    "optionsAr": [
      "GEL",
      "AOA",
      "LBP",
      "BAM"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1196"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Botswana?",
    "ar": "ما رمز العملة المتداولة رسميًا في بوتسوانا؟",
    "options": [
      "BWP",
      "IQD",
      "ETB",
      "EUR"
    ],
    "optionsAr": [
      "BWP",
      "IQD",
      "ETB",
      "EUR"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1197"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Brazil?",
    "ar": "ما رمز العملة المتداولة رسميًا في البرازيل؟",
    "options": [
      "DKK",
      "GTQ",
      "HUF",
      "BRL"
    ],
    "optionsAr": [
      "DKK",
      "GTQ",
      "HUF",
      "BRL"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1198"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Bulgaria?",
    "ar": "ما رمز العملة المتداولة رسميًا في بلغاريا؟",
    "options": [
      "BGN",
      "PEN",
      "ALL",
      "CUC"
    ],
    "optionsAr": [
      "BGN",
      "PEN",
      "ALL",
      "CUC"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1199"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Cambodia?",
    "ar": "ما رمز العملة المتداولة رسميًا في كمبوديا؟",
    "options": [
      "MXN",
      "KZT",
      "KHR",
      "ETB"
    ],
    "optionsAr": [
      "MXN",
      "KZT",
      "KHR",
      "ETB"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1200"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Cameroon?",
    "ar": "ما رمز العملة المتداولة رسميًا في الكاميرون؟",
    "options": [
      "ISK",
      "MYR",
      "XAF",
      "PEN"
    ],
    "optionsAr": [
      "ISK",
      "MYR",
      "XAF",
      "PEN"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1201"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Canada?",
    "ar": "ما رمز العملة المتداولة رسميًا في كندا؟",
    "options": [
      "CAD",
      "NZD",
      "NGN",
      "BWP"
    ],
    "optionsAr": [
      "CAD",
      "NZD",
      "NGN",
      "BWP"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1202"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Chile?",
    "ar": "ما رمز العملة المتداولة رسميًا في تشيلي؟",
    "options": [
      "BGN",
      "BRL",
      "DKK",
      "CLF"
    ],
    "optionsAr": [
      "BGN",
      "BRL",
      "DKK",
      "CLF"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1203"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of China?",
    "ar": "ما رمز العملة المتداولة رسميًا في الصين؟",
    "options": [
      "CNY",
      "JPY",
      "BRL",
      "ALL"
    ],
    "optionsAr": [
      "CNY",
      "JPY",
      "BRL",
      "ALL"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1204"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Colombia?",
    "ar": "ما رمز العملة المتداولة رسميًا في كولومبيا؟",
    "options": [
      "COP",
      "KZT",
      "USD",
      "AMD"
    ],
    "optionsAr": [
      "COP",
      "KZT",
      "USD",
      "AMD"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1205"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Costa Rica?",
    "ar": "ما رمز العملة المتداولة رسميًا في كوستاريكا؟",
    "options": [
      "CNY",
      "ISK",
      "CRC",
      "KES"
    ],
    "optionsAr": [
      "CNY",
      "ISK",
      "CRC",
      "KES"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1206"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Croatia?",
    "ar": "ما رمز العملة المتداولة رسميًا في كرواتيا؟",
    "options": [
      "HRK",
      "CUC",
      "GHS",
      "ETB"
    ],
    "optionsAr": [
      "HRK",
      "CUC",
      "GHS",
      "ETB"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1207"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Cuba?",
    "ar": "ما رمز العملة المتداولة رسميًا في كوبا؟",
    "options": [
      "PKR",
      "PHP",
      "CUC",
      "CRC"
    ],
    "optionsAr": [
      "PKR",
      "PHP",
      "CUC",
      "CRC"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1208"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Cyprus?",
    "ar": "ما رمز العملة المتداولة رسميًا في قبرص؟",
    "options": [
      "XAF",
      "ISK",
      "EUR",
      "JPY"
    ],
    "optionsAr": [
      "XAF",
      "ISK",
      "EUR",
      "JPY"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1209"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Denmark?",
    "ar": "ما رمز العملة المتداولة رسميًا في الدانمرك؟",
    "options": [
      "DKK",
      "NGN",
      "PEN",
      "CLF"
    ],
    "optionsAr": [
      "DKK",
      "NGN",
      "PEN",
      "CLF"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1210"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Dominican Republic?",
    "ar": "ما رمز العملة المتداولة رسميًا في جمهورية الدومينيكان؟",
    "options": [
      "AZN",
      "DOP",
      "PKR",
      "NPR"
    ],
    "optionsAr": [
      "AZN",
      "DOP",
      "PKR",
      "NPR"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1211"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Ecuador?",
    "ar": "ما رمز العملة المتداولة رسميًا في الإكوادور؟",
    "options": [
      "DKK",
      "USD",
      "PKR",
      "ILS"
    ],
    "optionsAr": [
      "DKK",
      "USD",
      "PKR",
      "ILS"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1212"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Egypt?",
    "ar": "ما رمز العملة المتداولة رسميًا في مصر؟",
    "options": [
      "COP",
      "CNY",
      "EGP",
      "BYR"
    ],
    "optionsAr": [
      "COP",
      "CNY",
      "EGP",
      "BYR"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1213"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Estonia?",
    "ar": "ما رمز العملة المتداولة رسميًا في إستونيا؟",
    "options": [
      "OMR",
      "EUR",
      "BOB",
      "USD"
    ],
    "optionsAr": [
      "OMR",
      "EUR",
      "BOB",
      "USD"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1214"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Ethiopia?",
    "ar": "ما رمز العملة المتداولة رسميًا في إثيوبيا؟",
    "options": [
      "GEL",
      "BYR",
      "ETB",
      "BWP"
    ],
    "optionsAr": [
      "GEL",
      "BYR",
      "ETB",
      "BWP"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1215"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Finland?",
    "ar": "ما رمز العملة المتداولة رسميًا في فنلندا؟",
    "options": [
      "EUR",
      "AUD",
      "ILS",
      "KZT"
    ],
    "optionsAr": [
      "EUR",
      "AUD",
      "ILS",
      "KZT"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1216"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of France?",
    "ar": "ما رمز العملة المتداولة رسميًا في فرنسا؟",
    "options": [
      "COP",
      "EUR",
      "XAF",
      "BRL"
    ],
    "optionsAr": [
      "COP",
      "EUR",
      "XAF",
      "BRL"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1217"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Georgia?",
    "ar": "ما رمز العملة المتداولة رسميًا في جورجيا؟",
    "options": [
      "PHP",
      "GHS",
      "GEL",
      "AZN"
    ],
    "optionsAr": [
      "PHP",
      "GHS",
      "GEL",
      "AZN"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1218"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Germany?",
    "ar": "ما رمز العملة المتداولة رسميًا في ألمانيا؟",
    "options": [
      "EUR",
      "IRR",
      "INR",
      "AOA"
    ],
    "optionsAr": [
      "EUR",
      "IRR",
      "INR",
      "AOA"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1219"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Ghana?",
    "ar": "ما رمز العملة المتداولة رسميًا في غانا؟",
    "options": [
      "OMR",
      "GTQ",
      "GHS",
      "CUC"
    ],
    "optionsAr": [
      "OMR",
      "GTQ",
      "GHS",
      "CUC"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1220"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Greece?",
    "ar": "ما رمز العملة المتداولة رسميًا في اليونان؟",
    "options": [
      "IQD",
      "EUR",
      "USD",
      "PLN"
    ],
    "optionsAr": [
      "IQD",
      "EUR",
      "USD",
      "PLN"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1221"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Guatemala?",
    "ar": "ما رمز العملة المتداولة رسميًا في غواتيمالا؟",
    "options": [
      "JOD",
      "PEN",
      "GTQ",
      "PHP"
    ],
    "optionsAr": [
      "JOD",
      "PEN",
      "GTQ",
      "PHP"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1222"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Hungary?",
    "ar": "ما رمز العملة المتداولة رسميًا في هنغاريا؟",
    "options": [
      "HUF",
      "BRL",
      "BOB",
      "NGN"
    ],
    "optionsAr": [
      "HUF",
      "BRL",
      "BOB",
      "NGN"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1223"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Iceland?",
    "ar": "ما رمز العملة المتداولة رسميًا في آيسلندا؟",
    "options": [
      "BWP",
      "ISK",
      "KZT",
      "HRK"
    ],
    "optionsAr": [
      "BWP",
      "ISK",
      "KZT",
      "HRK"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1224"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of India?",
    "ar": "ما رمز العملة المتداولة رسميًا في الهند؟",
    "options": [
      "CLF",
      "XAF",
      "INR",
      "KHR"
    ],
    "optionsAr": [
      "CLF",
      "XAF",
      "INR",
      "KHR"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1225"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Indonesia?",
    "ar": "ما رمز العملة المتداولة رسميًا في إندونيسيا؟",
    "options": [
      "IDR",
      "INR",
      "PEN",
      "CAD"
    ],
    "optionsAr": [
      "IDR",
      "INR",
      "PEN",
      "CAD"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1226"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Iran?",
    "ar": "ما رمز العملة المتداولة رسميًا في إيران؟",
    "options": [
      "BOB",
      "GTQ",
      "LBP",
      "IRR"
    ],
    "optionsAr": [
      "BOB",
      "GTQ",
      "LBP",
      "IRR"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1227"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Iraq?",
    "ar": "ما رمز العملة المتداولة رسميًا في العراق؟",
    "options": [
      "NGN",
      "MXN",
      "AMD",
      "IQD"
    ],
    "optionsAr": [
      "NGN",
      "MXN",
      "AMD",
      "IQD"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1228"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Ireland?",
    "ar": "ما رمز العملة المتداولة رسميًا في أيرلندا؟",
    "options": [
      "BRL",
      "KES",
      "JOD",
      "EUR"
    ],
    "optionsAr": [
      "BRL",
      "KES",
      "JOD",
      "EUR"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1229"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Israel?",
    "ar": "ما رمز العملة المتداولة رسميًا في إسرائيل؟",
    "options": [
      "CAD",
      "ILS",
      "ISK",
      "PEN"
    ],
    "optionsAr": [
      "CAD",
      "ILS",
      "ISK",
      "PEN"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1230"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Italy?",
    "ar": "ما رمز العملة المتداولة رسميًا في إيطاليا؟",
    "options": [
      "EUR",
      "ALL",
      "HUF",
      "GEL"
    ],
    "optionsAr": [
      "EUR",
      "ALL",
      "HUF",
      "GEL"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1231"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Japan?",
    "ar": "ما رمز العملة المتداولة رسميًا في اليابان؟",
    "options": [
      "JPY",
      "NZD",
      "KHR",
      "HRK"
    ],
    "optionsAr": [
      "JPY",
      "NZD",
      "KHR",
      "HRK"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1232"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Jordan?",
    "ar": "ما رمز العملة المتداولة رسميًا في الأردن؟",
    "options": [
      "GHS",
      "IQD",
      "JOD",
      "PKR"
    ],
    "optionsAr": [
      "GHS",
      "IQD",
      "JOD",
      "PKR"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1233"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Kazakhstan?",
    "ar": "ما رمز العملة المتداولة رسميًا في كازاخستان؟",
    "options": [
      "COP",
      "KWD",
      "ALL",
      "KZT"
    ],
    "optionsAr": [
      "COP",
      "KWD",
      "ALL",
      "KZT"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1234"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Kenya?",
    "ar": "ما رمز العملة المتداولة رسميًا في كينيا؟",
    "options": [
      "ALL",
      "OMR",
      "KES",
      "ILS"
    ],
    "optionsAr": [
      "ALL",
      "OMR",
      "KES",
      "ILS"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1235"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Kuwait?",
    "ar": "ما رمز العملة المتداولة رسميًا في الكويت؟",
    "options": [
      "NOK",
      "CLF",
      "PHP",
      "KWD"
    ],
    "optionsAr": [
      "NOK",
      "CLF",
      "PHP",
      "KWD"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1236"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Lebanon?",
    "ar": "ما رمز العملة المتداولة رسميًا في لبنان؟",
    "options": [
      "PEN",
      "DKK",
      "BDT",
      "LBP"
    ],
    "optionsAr": [
      "PEN",
      "DKK",
      "BDT",
      "LBP"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1237"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Malaysia?",
    "ar": "ما رمز العملة المتداولة رسميًا في ماليزيا؟",
    "options": [
      "KES",
      "MXN",
      "DZD",
      "MYR"
    ],
    "optionsAr": [
      "KES",
      "MXN",
      "DZD",
      "MYR"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1238"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Mexico?",
    "ar": "ما رمز العملة المتداولة رسميًا في المكسيك؟",
    "options": [
      "HUF",
      "AOA",
      "MXN",
      "GTQ"
    ],
    "optionsAr": [
      "HUF",
      "AOA",
      "MXN",
      "GTQ"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1239"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Mongolia?",
    "ar": "ما رمز العملة المتداولة رسميًا في منغوليا؟",
    "options": [
      "MNT",
      "NPR",
      "KHR",
      "BOB"
    ],
    "optionsAr": [
      "MNT",
      "NPR",
      "KHR",
      "BOB"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1240"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Morocco?",
    "ar": "ما رمز العملة المتداولة رسميًا في المغرب؟",
    "options": [
      "NOK",
      "AUD",
      "MAD",
      "HUF"
    ],
    "optionsAr": [
      "NOK",
      "AUD",
      "MAD",
      "HUF"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1241"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Nepal?",
    "ar": "ما رمز العملة المتداولة رسميًا في نيبال؟",
    "options": [
      "NPR",
      "AUD",
      "KZT",
      "BGN"
    ],
    "optionsAr": [
      "NPR",
      "AUD",
      "KZT",
      "BGN"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1242"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Netherlands?",
    "ar": "ما رمز العملة المتداولة رسميًا في هولندا؟",
    "options": [
      "EUR",
      "AUD",
      "EGP",
      "ALL"
    ],
    "optionsAr": [
      "EUR",
      "AUD",
      "EGP",
      "ALL"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1243"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of New Zealand?",
    "ar": "ما رمز العملة المتداولة رسميًا في نيوزيلندا؟",
    "options": [
      "CAD",
      "EUR",
      "NZD",
      "BYR"
    ],
    "optionsAr": [
      "CAD",
      "EUR",
      "NZD",
      "BYR"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1244"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Nigeria?",
    "ar": "ما رمز العملة المتداولة رسميًا في نيجيريا؟",
    "options": [
      "DOP",
      "NGN",
      "CNY",
      "PEN"
    ],
    "optionsAr": [
      "DOP",
      "NGN",
      "CNY",
      "PEN"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1245"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Norway?",
    "ar": "ما رمز العملة المتداولة رسميًا في النرويج؟",
    "options": [
      "EGP",
      "PLN",
      "BRL",
      "NOK"
    ],
    "optionsAr": [
      "EGP",
      "PLN",
      "BRL",
      "NOK"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1246"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Oman?",
    "ar": "ما رمز العملة المتداولة رسميًا في عُمان؟",
    "options": [
      "OMR",
      "PKR",
      "IQD",
      "ILS"
    ],
    "optionsAr": [
      "OMR",
      "PKR",
      "IQD",
      "ILS"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1247"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Pakistan?",
    "ar": "ما رمز العملة المتداولة رسميًا في باكستان؟",
    "options": [
      "GTQ",
      "MYR",
      "USD",
      "PKR"
    ],
    "optionsAr": [
      "GTQ",
      "MYR",
      "USD",
      "PKR"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1248"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Peru?",
    "ar": "ما رمز العملة المتداولة رسميًا في بيرو؟",
    "options": [
      "KES",
      "AOA",
      "CNY",
      "PEN"
    ],
    "optionsAr": [
      "KES",
      "AOA",
      "CNY",
      "PEN"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1249"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Philippines?",
    "ar": "ما رمز العملة المتداولة رسميًا في الفلبين؟",
    "options": [
      "GTQ",
      "IQD",
      "PHP",
      "BGN"
    ],
    "optionsAr": [
      "GTQ",
      "IQD",
      "PHP",
      "BGN"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1250"
  }
];

module.exports = questions;
