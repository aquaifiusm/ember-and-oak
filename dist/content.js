/*
 * EMBER & OAK — EDITABLE WEBSITE CONTENT
 * ---------------------------------------
 * This is the only file you need to edit for normal content changes.
 *
 * - Each { en, ar } pair controls the English and Arabic versions.
 * - Prices are plain numbers in EGP.
 * - Keep commas, quotes, and brackets in place.
 * - Add or remove complete menuItems, branches, or reviews objects as needed.
 */
window.EMBER_CONTENT = {
  defaultLanguage: "ar",

  restaurant: {
    name: "Ember & Oak",
    phone: "+20 10 0000 0000",
    email: "hello@emberandoak.example",
    instagram: "@emberandoak.cairo",
    instagramUrl: "#",
    whatsappUrl: "#",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Zamalek+Cairo",

    address: {
      en: "12 Al Gezira Street, Zamalek",
      ar: "١٢ شارع الجزيرة، الزمالك"
    },

    footerAddress: {
      en: "12 Al Gezira Street<br>Zamalek, Cairo",
      ar: "١٢ شارع الجزيرة<br>الزمالك، القاهرة"
    },

    hours: {
      en: "Daily · 12 PM–12 AM",
      ar: "يوميًا من ١٢ ظهرًا لحد ١٢ بالليل"
    },

    credit: {
      en: "Concept & design by Ziad and Omar",
      ar: "تصميم وتطوير زياد وعمر"
    }
  },

  menuItems: [
    {
      category: "mains",
      categoryText: { en: "Main courses", ar: "أطباق رئيسية" },
      name: {
        en: "Ember Half Chicken",
        ar: "نص فرخة مشوية على الفحم"
      },
      description: {
        en: "24-hour herb marinade, burnt lemon, toum, and fire-roasted jus.",
        ar: "نص فرخة متبلة بالأعشاب ومشوية على الفحم، مع تومية وليمون مشوي."
      },
      price: 285,
      image: "assets/chicken.webp",
      imageAlt: {
        en: "Herb-charred half chicken with roasted lemon",
        ar: "نص فرخة مشوية على الفحم مع ليمون"
      }
    },

    {
      category: "mains",
      categoryText: { en: "Main courses", ar: "أطباق رئيسية" },
      name: {
        en: "Coal-Kissed Striploin",
        ar: "ستيك ستريب لوين"
      },
      description: {
        en: "250g grain-fed beef, pepper jus, roasted shallots, and garden herbs.",
        ar: "٢٥٠ جرام ستيك مشوي على الفحم، مع صوص الفلفل وبصل مشوي."
      },
      price: 495,
      image: "assets/beef.webp",
      imageAlt: {
        en: "Sliced charcoal-grilled striploin with roasted shallots",
        ar: "ستيك مشوي على الفحم مع بصل مشوي"
      }
    },

    {
      category: "appetizers",
      categoryText: { en: "Appetizers", ar: "مقبلات" },
      name: {
        en: "Fire-Roasted Mezze",
        ar: "طبق مقبلات مشكل"
      },
      description: {
        en: "Smoked aubergine, muhammara, labneh, olives, and house flatbread.",
        ar: "باذنجان مدخن، محمرة، لبنة، زيتون وخبز طازة."
      },
      price: 165
    },

    {
      category: "appetizers",
      categoryText: { en: "Appetizers", ar: "مقبلات" },
      name: {
        en: "Charred Halloumi",
        ar: "حلومي مشوي"
      },
      description: {
        en: "Fig glaze, toasted sesame, mint, and grilled sourdough.",
        ar: "جبنة حلومي مشوية مع صوص تين، سمسم ونعناع."
      },
      price: 175
    },

    {
      category: "appetizers",
      categoryText: { en: "Appetizers", ar: "مقبلات" },
      name: {
        en: "Crispy Aubergine",
        ar: "باذنجان مقرمش"
      },
      description: {
        en: "Date molasses, tahini, spring onion, and warm Egyptian spice.",
        ar: "باذنجان مقرمش مع طحينة، دبس تمر وبصل أخضر."
      },
      price: 145
    },

    {
      category: "mains",
      categoryText: { en: "Main courses", ar: "أطباق رئيسية" },
      name: {
        en: "Smoked Kofta Plate",
        ar: "كفتة مشوية على الفحم"
      },
      description: {
        en: "Spiced beef kofta, charred tomato, tahini, and toasted pine nuts.",
        ar: "كفتة لحمة مشوية مع طماطم مشوية، طحينة وصنوبر."
      },
      price: 255
    },

    {
      category: "burgers",
      categoryText: { en: "Burgers & sandwiches", ar: "برجر وساندوتشات" },
      name: {
        en: "Ember Beef Burger",
        ar: "إمبر بيف برجر"
      },
      description: {
        en: "Smoked cheddar, caramelized onion, ember sauce, and pickles.",
        ar: "برجر لحمة مع شيدر، بصل مكرمل، صوص إمبر ومخلل."
      },
      price: 260
    },

    {
      category: "burgers",
      categoryText: { en: "Burgers & sandwiches", ar: "برجر وساندوتشات" },
      name: {
        en: "Harissa Chicken",
        ar: "ساندوتش فراخ هريسة"
      },
      description: {
        en: "Grilled chicken, cabbage slaw, herb mayo, and soft potato bun.",
        ar: "فراخ مشوية مع كول سلو، مايونيز أعشاب وخبز بطاطس."
      },
      price: 220
    },

    {
      category: "burgers",
      categoryText: { en: "Burgers & sandwiches", ar: "برجر وساندوتشات" },
      name: {
        en: "Mushroom Melt",
        ar: "مشروم ميلت"
      },
      description: {
        en: "Roasted mushrooms, Swiss cheese, onion jam, and pepper mayo.",
        ar: "مشروم مشوي مع جبنة سويسري، بصل مكرمل ومايونيز بالفلفل."
      },
      price: 215
    },

    {
      category: "pizza",
      categoryText: { en: "Fire-baked specialties", ar: "مخبوزات" },
      name: {
        en: "Grilled Pepper & Feta",
        ar: "فلفل مشوي وفيتا"
      },
      description: {
        en: "Fire-roasted pepper, whipped feta, olive, and oregano.",
        ar: "فلفل مشوي، جبنة فيتا، زيتون وأوريجانو."
      },
      price: 240
    },

    {
      category: "pizza",
      categoryText: { en: "Fire-baked specialties", ar: "مخبوزات" },
      name: {
        en: "Smoked Kofta Flatbread",
        ar: "فلات بريد كفتة"
      },
      description: {
        en: "Kofta, charred tomato, sumac onion, and lemon yoghurt.",
        ar: "كفتة مشوية مع طماطم، بصل بالسماق وصوص زبادي بالليمون."
      },
      price: 265
    },

    {
      category: "pizza",
      categoryText: { en: "Fire-baked specialties", ar: "مخبوزات" },
      name: {
        en: "Wild Mushroom & Thyme",
        ar: "مشروم وزعتر"
      },
      description: {
        en: "Wild mushrooms, smoked mozzarella, thyme, and garlic confit.",
        ar: "مشروم مع موتزاريلا مدخنة، زعتر وثوم."
      },
      price: 255
    },

    {
      category: "desserts",
      categoryText: { en: "Desserts", ar: "حلويات" },
      name: {
        en: "Burnt Honey Basbousa",
        ar: "بسبوسة بالعسل"
      },
      description: {
        en: "Brown butter, citrus cream, pistachio, and sea salt.",
        ar: "بسبوسة دافية مع عسل، كريمة وفستق."
      },
      price: 135
    },

    {
      category: "desserts",
      categoryText: { en: "Desserts", ar: "حلويات" },
      name: {
        en: "Warm Date Cake",
        ar: "كيكة تمر دافية"
      },
      description: {
        en: "Tahini caramel, vanilla cream, and toasted sesame brittle.",
        ar: "كيكة تمر دافية مع كراميل طحينة وكريمة فانيليا."
      },
      price: 145
    },

    {
      category: "desserts",
      categoryText: { en: "Desserts", ar: "حلويات" },
      name: {
        en: "Citrus Mahalabia",
        ar: "مهلبية بالبرتقال"
      },
      description: {
        en: "Orange blossom, fresh citrus, almond, and mint.",
        ar: "مهلبية خفيفة بنكهة البرتقال وماء الزهر مع لوز."
      },
      price: 120
    },

    {
      category: "drinks",
      categoryText: { en: "Drinks", ar: "مشروبات" },
      name: {
        en: "Hibiscus Cooler",
        ar: "كركديه بارد"
      },
      description: {
        en: "Karkade, pomegranate, lime, and sparkling water.",
        ar: "كركديه بارد مع رمان ولايم."
      },
      price: 85
    },

    {
      category: "drinks",
      categoryText: { en: "Drinks", ar: "مشروبات" },
      name: {
        en: "Grilled Lemon Mint",
        ar: "ليمون بالنعناع"
      },
      description: {
        en: "Charred lemon, garden mint, and a touch of wild honey.",
        ar: "ليمون طازة مع نعناع ولمسة عسل."
      },
      price: 90
    },

    {
      category: "drinks",
      categoryText: { en: "Drinks", ar: "مشروبات" },
      name: {
        en: "House Sparkling Water",
        ar: "مياه غازية"
      },
      description: {
        en: "Chilled sparkling water with cucumber and citrus peel.",
        ar: "مياه غازية ساقعة مع شرائح خيار وليمون."
      },
      price: 55
    }
  ],

  branches: [
    {
      name: { en: "Zamalek", ar: "الزمالك" },
      tag: { en: "Cairo branch", ar: "فرع الزمالك" },
      address: {
        en: ["12 Al Gezira Street", "Cairo, Egypt"],
        ar: ["١٢ شارع الجزيرة", "الزمالك، القاهرة"]
      },
      hours: {
        en: "Daily · 12 PM–12 AM",
        ar: "يوميًا من ١٢ ظهرًا لحد ١٢ بالليل"
      },
      phone: "+20 10 0000 0000",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Zamalek+Cairo",
      whatsappUrl: "#contact"
    },

    {
      name: { en: "New Cairo", ar: "التجمع الخامس" },
      tag: { en: "Cairo branch", ar: "فرع التجمع" },
      address: {
        en: ["88 North 90 Street", "New Cairo"],
        ar: ["٨٨ شارع التسعين الشمالي", "التجمع الخامس"]
      },
      hours: {
        en: "Daily · 1 PM–1 AM",
        ar: "يوميًا من ١ ظهرًا لحد ١ صباحًا"
      },
      phone: "+20 10 0000 0001",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=New+Cairo",
      whatsappUrl: "#contact"
    },

    {
      name: { en: "Sheikh Zayed", ar: "الشيخ زايد" },
      tag: { en: "Cairo branch", ar: "فرع الشيخ زايد" },
      address: {
        en: ["24 Park Avenue", "Giza, Egypt"],
        ar: ["٢٤ بارك أفينيو", "الشيخ زايد، الجيزة"]
      },
      hours: {
        en: "Daily · 12 PM–12 AM",
        ar: "يوميًا من ١٢ ظهرًا لحد ١٢ بالليل"
      },
      phone: "+20 10 0000 0002",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sheikh+Zayed+City+Egypt",
      whatsappUrl: "#contact"
    }
  ],

  galleryItems: [
    {
      image: "assets/hero.webp",
      layout: "gallery-wide",
      caption: {
        en: "Evenings around the fire",
        ar: "أجواء Ember & Oak"
      },
      alt: {
        en: "Mixed grill feast in a candlelit dining room",
        ar: "سفرة مشويات في المطعم"
      }
    },

    {
      image: "assets/chicken.webp",
      layout: "gallery-tall",
      caption: {
        en: "House marinades",
        ar: "من أطباقنا"
      },
      alt: {
        en: "Herb-marinated chicken with charred lemon",
        ar: "فراخ مشوية مع ليمون"
      }
    },

    {
      image: "assets/beef.webp",
      layout: "",
      caption: {
        en: "From the charcoal",
        ar: "مشويات على الفحم"
      },
      alt: {
        en: "Sliced charcoal-grilled beef",
        ar: "شرائح لحمة مشوية"
      }
    },

    {
      image: "assets/hero.webp",
      layout: "",
      caption: {
        en: "Made to share",
        ar: "أكل يتشارك"
      },
      alt: {
        en: "A table set for a mixed grill dinner",
        ar: "سفرة مشويات مشكلة"
      }
    },

    {
      image: "assets/beef.webp",
      layout: "gallery-wide",
      caption: {
        en: "Simple, confident plates",
        ar: "أطباق بسيطة بطعم واضح"
      },
      alt: {
        en: "Restaurant-style beef plate in warm light",
        ar: "طبق لحمة مشوية"
      }
    }
  ],

  reviews: [
    {
      name: { en: "Maya R.", ar: "مايا ر." },
      initials: "MR",
      stars: 5,
      role: { en: "Recent guest", ar: "زارتنا مؤخرًا" },
      quote: {
        en: "The atmosphere feels refined without losing its warmth, and every plate arrives looking considered.",
        ar: "المكان هادي ومريح جدًا، والأكل وصل سخن والتقديم كان حلو. أكيد هنكرر الزيارة."
      }
    },

    {
      name: { en: "Omar K.", ar: "عمر ك." },
      initials: "OK",
      stars: 5,
      role: { en: "Recent guest", ar: "زارنا مؤخرًا" },
      quote: {
        en: "A menu that is easy to understand, beautiful to browse, and full of dishes I would genuinely want to order.",
        ar: "جربنا الكفتة والبرجر وكانوا ممتازين، والكميات كويسة جدًا بالنسبة للسعر."
      }
    },

    {
      name: { en: "Lina N.", ar: "لينا ن." },
      initials: "LN",
      stars: 4,
      role: { en: "Recent guest", ar: "زارتنا مؤخرًا" },
      quote: {
        en: "The charcoal concept carries through everything—from the room to the food—without ever feeling overdone.",
        ar: "القعدة لطيفة والخدمة سريعة، والفراخ المشوية كانت أحسن حاجة طلبناها."
      }
    }
  ],

  paymentMethods: [
    {
      id: "Vodafone Cash",
      name: { en: "Vodafone Cash", ar: "فودافون كاش" },
      helper: {
        en: "Instant wallet transfer",
        ar: "تحويل عن طريق فودافون كاش"
      }
    },

    {
      id: "Cash on delivery",
      name: { en: "Cash on delivery", ar: "الدفع عند الاستلام" },
      helper: {
        en: "Pay when your order arrives",
        ar: "ادفع لما الطلب يوصلك"
      }
    },

    {
      id: "PayPal",
      name: { en: "PayPal", ar: "PayPal" },
      helper: {
        en: "Fast online checkout",
        ar: "الدفع أونلاين عن طريق PayPal"
      }
    },

    {
      id: "Credit card",
      name: { en: "Credit card", ar: "بطاقة بنكية" },
      helper: {
        en: "Visa or Mastercard",
        ar: "Visa أو Mastercard"
      }
    }
  ],

  translations: {
    text: {
      "Skip to content": "روح للمحتوى",

      "Ember & Oak · Cairo · Open daily from 12 PM to midnight":
        "Ember & Oak · القاهرة · فاتحين يوميًا من ١٢ ظهرًا لحد ١٢ بالليل",

      "Fire kitchen · Cairo": "مشويات وأطباق على الفحم · القاهرة",

      "Home": "الرئيسية",
      "Menu": "المنيو",
      "About": "عن المطعم",
      "Branches": "الفروع",
      "Reviews": "آراء العملاء",
      "Gallery": "الصور",
      "Contact": "تواصل معانا",

      "Order": "اطلب",
      "Bag": "طلبك",
      "Book / Contact us": "احجز أو كلمنا",

      "Contemporary Egyptian fire kitchen":
        "مشويات وأكل مصري بطابع عصري",

      "Where fire": "أكل",
      "finds": "على",
      "flavour.": "الفحم.",

      "A cinematic restaurant concept shaped around glowing charcoal, generous plates, and memorable nights around the table.":
        "أطباق مشوية على الفحم، مكونات طازة وقعدة مريحة تناسب الغدا والعشا واللمة.",

      "View the menu": "شوف المنيو",

      "Gather around the fire for generous plates and good company.":
        "أكل حلو، كميات كويسة وقعدة تتبسط فيها مع أصحابك وأهلك.",

      "Tonight": "النهارده",
      "Open until midnight": "فاتحين لحد ١٢ بالليل",

      "Location": "المكان",
      "Zamalek, Cairo": "الزمالك، القاهرة",
      "Get directions": "اعرف الطريق",
      "WhatsApp": "واتساب",
      "Explore": "اعرف أكتر",

      "Charcoal grilled": "مشوي على الفحم",
      "Made to order": "بيتعمل وقت الطلب",
      "Egyptian-inspired": "بطابع مصري",
      "Open daily": "فاتحين كل يوم",

      "Our menu · priced in EGP":
        "المنيو · الأسعار بالجنيه",

      "Built for every": "اختيارات",
      "craving.": "لكل الأذواق.",

      "From fire-roasted starters to charcoal-grilled mains, every plate is made for sharing around the table.":
        "من المقبلات للأطباق الرئيسية والحلويات، عندنا اختيارات تناسب كل الأذواق.",

      "All": "الكل",
      "Appetizers": "مقبلات",
      "Main courses": "أطباق رئيسية",
      "Burgers": "برجر",
      "Specialties": "مخبوزات",
      "Desserts": "حلويات",
      "Drinks": "مشروبات",
      "Burgers & sandwiches": "برجر وساندوتشات",
      "Fire-baked specialties": "مخبوزات",
      "Add to order": "ضيف للطلب",

      "Slow fire": "مشويات على الفحم",
      "Good company": "قعدة حلوة",

      "About the concept": "عن Ember & Oak",

      "Modern hospitality,":
        "أكل كويس،",

      "rooted in fire.":
        "وقعدة مريحة.",

      "Ember & Oak brings contemporary Egyptian hospitality together with the warmth and theatre of live-fire cooking.":
        "في Ember & Oak بنقدم أكل بسيط بطابع عصري، مع تركيز كبير على المشويات والأطباق اللي بتتعمل على الفحم.",

      "Our kitchen is built around thoughtful ingredients, charcoal-led flavours, a relaxed late-night atmosphere, and service that feels personal without feeling formal.":
        "بنختار مكوناتنا بعناية، وبنركز على الطعم والجودة مع خدمة بسيطة ومكان مريح من غير تكلف.",

      "Ingredient-led": "مكونات كويسة",

      "Seasonal produce and clear, confident flavors.":
        "مكونات طازة وطعم بسيط وواضح.",

      "Atmosphere first": "قعدة مريحة",

      "Warm lighting, open flame, and generous tables.":
        "إضاءة هادية، مكان مريح وترابيزات مناسبة للّمة.",

      "Made for people": "مناسب للّمة",

      "Simple booking, ordering, and branch discovery.":
        "احجز أو اطلب واعرف أقرب فرع بسهولة.",

      "See the atmosphere": "شوف المكان",

      "A look inside": "صور من المكان",

      "From the": "من",
      "pass.": "مطبخنا.",

      "A closer look at our fire-led plates, house marinades, and evenings around the table.":
        "شوف مجموعة من أطباقنا والمشويات وأجواء المطعم.",

      "Evenings around the fire": "أجواء المطعم",
      "House marinades": "من أطباقنا",
      "From the charcoal": "مشويات على الفحم",
      "Made to share": "مناسب للمشاركة",
      "Simple, confident plates": "أطباق بسيطة بطعم مميز",

      "Three Cairo locations":
        "٣ فروع في القاهرة",

      "Our": "اختار",
      "branches.": "أقرب فرع.",

      "Find your nearest Ember & Oak and join us for lunch, dinner, or a late-night table.":
        "شوف أقرب فرع ليك ومواعيد العمل والعنوان وطرق التواصل.",

      "Hours": "المواعيد",
      "Phone": "رقم التليفون",
      "WhatsApp ↗": "واتساب ↗",

      "Guest stories": "آراء العملاء",

      "The table": "الناس",
      "is talking.": "قالوا عننا.",

      "Average rating · 36 guest reviews":
        "تقييم العملاء · ٣٦ مراجعة",

      "Warm evenings, generous plates, and the kind of service that makes every table feel at home.":
        "آراء ناس جربوا الأكل والقعدة والخدمة عندنا.",

      "Guest review": "رأي عميل",

      "Your table is waiting":
        "مستنيينك",

      "Come for the fire.":
        "تعالى جرّب الأكل.",

      "Stay for the night.":
        "واستمتع بالقعدة.",

      "Contact us for reservations, private events, delivery enquiries, or anything else we can help with.":
        "كلمنا للحجز، الاستفسار عن الدليفري، المناسبات أو أي حاجة محتاج تعرفها.",

      "Order / WhatsApp":
        "اطلب على واتساب",

      "Email us":
        "ابعتلنا إيميل",

      "Contact details":
        "بيانات التواصل",

      "Email":
        "الإيميل",

      "Address":
        "العنوان",

      "Opening hours":
        "مواعيد العمل",

      "Instagram":
        "إنستجرام",

      "Open in Google Maps":
        "افتح على Google Maps",

      "Contemporary fire kitchen":
        "مشويات وأطباق على الفحم",

      "Contemporary Egyptian hospitality, live-fire cooking, and generous plates made for sharing.":
        "مشويات وأطباق بطابع عصري، وقعدة مناسبة للأصحاب والعيلة.",

      "Visit": "زورنا",
      "Connect": "تواصل معانا",
      "All rights reserved.": "كل الحقوق محفوظة.",

      "Your order": "طلبك",
      "Your bag": "طلبك",
      "Order total": "إجمالي الطلب",
      "Continue to checkout": "كمّل الطلب",

      "Choose your preferred payment method on the next step.":
        "اختار طريقة الدفع المناسبة ليك في الخطوة الجاية."
    },

    attributes: {
      "Ember and Oak home":
        "الصفحة الرئيسية لـ Ember & Oak",

      "Primary navigation":
        "القائمة الرئيسية",

      "Mobile navigation":
        "قائمة الموبايل",

      "Open order":
        "افتح الطلب",

      "Open navigation":
        "افتح القائمة",

      "Close navigation":
        "اقفل القائمة",

      "Restaurant information":
        "معلومات المطعم",

      "Filter menu":
        "فلتر المنيو",

      "Close order":
        "اقفل الطلب",

      "Close checkout":
        "اقفل الدفع",

      "Gallery image":
        "صورة من المطعم",

      "Close gallery image":
        "اقفل الصورة",

      "5 out of 5 stars":
        "٥ نجوم من ٥",

      "4 out of 5 stars":
        "٤ نجوم من ٥",

      "A candlelit table with a generous mixed-grill feast":
        "سفرة مشويات مشكلة",

      "Chargrilled chicken plated with herbs and roasted lemon":
        "فراخ مشوية مع ليمون",

      "Close detail of a charcoal-grilled beef dish":
        "طبق لحمة مشوية على الفحم",

      "Mixed grill feast in a candlelit dining room":
        "سفرة مشويات مشكلة",

      "Herb-marinated chicken with charred lemon":
        "فراخ مشوية مع ليمون",

      "Sliced charcoal-grilled beef":
        "شرائح لحمة مشوية",

      "A table set for a mixed grill dinner":
        "سفرة مشويات مشكلة",

      "Restaurant-style beef plate in warm light":
        "طبق لحمة مشوية"
    },

    ui: {
      ar: {
        switchLabel: "حوّل الموقع للإنجليزي",
        switchText: "EN",

        emptyCart:
          "طلبك لسه فاضي.<br>اختار حاجة من المنيو.",

        remove:
          "شيل",

        added: (name) =>
          `تم إضافة ${name} للطلب`,

        choosePayment:
          "اختار طريقة الدفع",

        checkout:
          "إتمام الطلب",

        paymentIntro:
          "اختار طريقة الدفع المناسبة ليك.",

        confirmOrder:
          "أكد الطلب",

        orderReady:
          "طلبك جاهز",

        orderReadyBody: (payment) =>
          `اخترت الدفع عن طريق <strong>${payment}</strong>.<br>تقدر تكمل الطلب بالتواصل مع المطعم.`,

        done:
          "تمام",

        actions: {
          whatsapp:
            "رقم واتساب المطعم هيتضاف هنا.",

          phone:
            "رقم المطعم هيتضاف هنا.",

          instagram:
            "حساب إنستجرام المطعم هيتضاف هنا."
        }
      },

      en: {
        switchLabel: "Switch to Arabic",
        switchText: "عربي",

        emptyCart:
          "Your bag is empty.<br>Add something from the menu.",

        remove:
          "Remove",

        added: (name) =>
          `${name} added to your order`,

        choosePayment:
          "Choose payment",

        checkout:
          "Checkout",

        paymentIntro:
          "Select the payment method that works best for you.",

        confirmOrder:
          "Confirm order",

        orderReady:
          "Order ready to confirm",

        orderReadyBody: (payment) =>
          `You selected <strong>${payment}</strong>.<br>Contact the restaurant to complete your order.`,

        done:
          "Done",

        actions: {
          whatsapp:
            "The WhatsApp link will be connected soon.",

          phone:
            "The call link will be connected soon.",

          instagram:
            "The Instagram link will be connected soon."
        }
      }
    }
  }
};
