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
    address: { en: "12 Al Gezira Street, Zamalek", ar: "١٢ شارع الجزيرة، الزمالك" },
    footerAddress: { en: "12 Al Gezira Street<br>Zamalek, Cairo", ar: "١٢ شارع الجزيرة<br>الزمالك، القاهرة" },
    hours: { en: "Daily · 12 PM–12 AM", ar: "يوميًا · ١٢ ظهرًا–١٢ منتصف الليل" },
    credit: { en: "Concept & design by Ziad and Omar", ar: "الفكرة والتصميم: زياد وعمر" }
  },

  menuItems: [
    { category: "mains", categoryText: { en: "Main courses", ar: "أطباق رئيسية" }, name: { en: "Ember Half Chicken", ar: "نص فرخة إمبر" }, description: { en: "24-hour herb marinade, burnt lemon, toum, and fire-roasted jus.", ar: "متبلة بالأعشاب ٢٤ ساعة، ليمون مشوي، تومية وصوص تحمير." }, price: 285, image: "assets/chicken.webp", imageAlt: { en: "Herb-charred half chicken with roasted lemon", ar: "نص فرخة مشوية بالأعشاب والليمون" } },
    { category: "mains", categoryText: { en: "Main courses", ar: "أطباق رئيسية" }, name: { en: "Coal-Kissed Striploin", ar: "ستربلوين على الفحم" }, description: { en: "250g grain-fed beef, pepper jus, roasted shallots, and garden herbs.", ar: "٢٥٠ جرام لحمة، صوص فلفل، شالوت مشوي وأعشاب طازة." }, price: 495, image: "assets/beef.webp", imageAlt: { en: "Sliced charcoal-grilled striploin with roasted shallots", ar: "شرائح ستربلوين مشوية على الفحم" } },
    { category: "appetizers", categoryText: { en: "Appetizers", ar: "مقبلات" }, name: { en: "Fire-Roasted Mezze", ar: "مزة مشوية على النار" }, description: { en: "Smoked aubergine, muhammara, labneh, olives, and house flatbread.", ar: "باذنجان مدخن، محمرة، لبنة، زيتون وخبز البيت." }, price: 165 },
    { category: "appetizers", categoryText: { en: "Appetizers", ar: "مقبلات" }, name: { en: "Charred Halloumi", ar: "حلومي مشوي" }, description: { en: "Fig glaze, toasted sesame, mint, and grilled sourdough.", ar: "صوص تين، سمسم محمص، نعناع وساوردو مشوي." }, price: 175 },
    { category: "appetizers", categoryText: { en: "Appetizers", ar: "مقبلات" }, name: { en: "Crispy Aubergine", ar: "باذنجان مقرمش" }, description: { en: "Date molasses, tahini, spring onion, and warm Egyptian spice.", ar: "دبس تمر، طحينة، بصل أخضر وبهارات مصرية دافية." }, price: 145 },
    { category: "mains", categoryText: { en: "Main courses", ar: "أطباق رئيسية" }, name: { en: "Smoked Kofta Plate", ar: "طبق كفتة مدخنة" }, description: { en: "Spiced beef kofta, charred tomato, tahini, and toasted pine nuts.", ar: "كفتة لحمة متبلة، طماطم مشوية، طحينة وصنوبر محمص." }, price: 255 },
    { category: "burgers", categoryText: { en: "Burgers & sandwiches", ar: "برجر وساندوتشات" }, name: { en: "Ember Beef Burger", ar: "برجر إمبر باللحمة" }, description: { en: "Smoked cheddar, caramelized onion, ember sauce, and pickles.", ar: "شيدر مدخن، بصل مكرمل، صوص إمبر ومخلل." }, price: 260 },
    { category: "burgers", categoryText: { en: "Burgers & sandwiches", ar: "برجر وساندوتشات" }, name: { en: "Harissa Chicken", ar: "فراخ هريسة" }, description: { en: "Grilled chicken, cabbage slaw, herb mayo, and soft potato bun.", ar: "فراخ مشوية، كول سلو، مايونيز أعشاب وخبز بطاطس طري." }, price: 220 },
    { category: "burgers", categoryText: { en: "Burgers & sandwiches", ar: "برجر وساندوتشات" }, name: { en: "Mushroom Melt", ar: "مشروم ميلت" }, description: { en: "Roasted mushrooms, Swiss cheese, onion jam, and pepper mayo.", ar: "مشروم محمر، جبنة سويسري، مربى بصل ومايونيز فلفل." }, price: 215 },
    { category: "pizza", categoryText: { en: "Fire-baked specialties", ar: "مخبوزات على النار" }, name: { en: "Grilled Pepper & Feta", ar: "فلفل مشوي وفيتا" }, description: { en: "Fire-roasted pepper, whipped feta, olive, and oregano.", ar: "فلفل مشوي على النار، فيتا كريمي، زيتون وأوريجانو." }, price: 240 },
    { category: "pizza", categoryText: { en: "Fire-baked specialties", ar: "مخبوزات على النار" }, name: { en: "Smoked Kofta Flatbread", ar: "فلات بريد بالكفتة المدخنة" }, description: { en: "Kofta, charred tomato, sumac onion, and lemon yoghurt.", ar: "كفتة، طماطم مشوية، بصل بالسماق وزبادي بالليمون." }, price: 265 },
    { category: "pizza", categoryText: { en: "Fire-baked specialties", ar: "مخبوزات على النار" }, name: { en: "Wild Mushroom & Thyme", ar: "مشروم بري وزعتر" }, description: { en: "Wild mushrooms, smoked mozzarella, thyme, and garlic confit.", ar: "مشروم بري، موتزاريلا مدخنة، زعتر وثوم كونفي." }, price: 255 },
    { category: "desserts", categoryText: { en: "Desserts", ar: "حلويات" }, name: { en: "Burnt Honey Basbousa", ar: "بسبوسة بالعسل المحروق" }, description: { en: "Brown butter, citrus cream, pistachio, and sea salt.", ar: "زبدة بنية، كريمة حمضيات، فستق وملح بحري." }, price: 135 },
    { category: "desserts", categoryText: { en: "Desserts", ar: "حلويات" }, name: { en: "Warm Date Cake", ar: "كيكة تمر دافية" }, description: { en: "Tahini caramel, vanilla cream, and toasted sesame brittle.", ar: "كراميل طحينة، كريمة فانيليا وسمسم محمص مقرمش." }, price: 145 },
    { category: "desserts", categoryText: { en: "Desserts", ar: "حلويات" }, name: { en: "Citrus Mahalabia", ar: "مهلبية بالحمضيات" }, description: { en: "Orange blossom, fresh citrus, almond, and mint.", ar: "ماء زهر، حمضيات طازة، لوز ونعناع." }, price: 120 },
    { category: "drinks", categoryText: { en: "Drinks", ar: "مشروبات" }, name: { en: "Hibiscus Cooler", ar: "كركديه ساقع" }, description: { en: "Karkade, pomegranate, lime, and sparkling water.", ar: "كركديه، رمان، لايم ومياه غازية." }, price: 85 },
    { category: "drinks", categoryText: { en: "Drinks", ar: "مشروبات" }, name: { en: "Grilled Lemon Mint", ar: "ليمون بالنعناع المشوي" }, description: { en: "Charred lemon, garden mint, and a touch of wild honey.", ar: "ليمون مشوي، نعناع طازة ولمسة عسل." }, price: 90 },
    { category: "drinks", categoryText: { en: "Drinks", ar: "مشروبات" }, name: { en: "House Sparkling Water", ar: "مياه غازية بطريقتنا" }, description: { en: "Chilled sparkling water with cucumber and citrus peel.", ar: "مياه غازية ساقعة بالخيار وقشر الحمضيات." }, price: 55 }
  ],

  branches: [
    { name: { en: "Zamalek", ar: "الزمالك" }, tag: { en: "Cairo branch", ar: "فرع القاهرة" }, address: { en: ["12 Al Gezira Street", "Cairo, Egypt"], ar: ["١٢ شارع الجزيرة", "القاهرة، مصر"] }, hours: { en: "Daily · 12 PM–12 AM", ar: "يوميًا · ١٢ ظهرًا–١٢ منتصف الليل" }, phone: "+20 10 0000 0000", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Zamalek+Cairo", whatsappUrl: "#contact" },
    { name: { en: "New Cairo", ar: "القاهرة الجديدة" }, tag: { en: "Cairo branch", ar: "فرع القاهرة" }, address: { en: ["88 North 90 Street", "New Cairo"], ar: ["٨٨ شارع التسعين الشمالي", "القاهرة الجديدة"] }, hours: { en: "Daily · 1 PM–1 AM", ar: "يوميًا · ١ ظهرًا–١ صباحًا" }, phone: "+20 10 0000 0001", mapsUrl: "https://www.google.com/maps/search/?api=1&query=New+Cairo", whatsappUrl: "#contact" },
    { name: { en: "Sheikh Zayed", ar: "الشيخ زايد" }, tag: { en: "Cairo branch", ar: "فرع القاهرة" }, address: { en: ["24 Park Avenue", "Giza, Egypt"], ar: ["٢٤ بارك أفينيو", "الجيزة، مصر"] }, hours: { en: "Daily · 12 PM–12 AM", ar: "يوميًا · ١٢ ظهرًا–١٢ منتصف الليل" }, phone: "+20 10 0000 0002", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sheikh+Zayed+City+Egypt", whatsappUrl: "#contact" }
  ],

  galleryItems: [
    { image: "assets/hero.webp", layout: "gallery-wide", caption: { en: "Evenings around the fire", ar: "ليالي حوالين النار" }, alt: { en: "Mixed grill feast in a candlelit dining room", ar: "سفرة مشويات مشكلة في قاعة بإضاءة دافية" } },
    { image: "assets/chicken.webp", layout: "gallery-tall", caption: { en: "House marinades", ar: "تتبيلات البيت" }, alt: { en: "Herb-marinated chicken with charred lemon", ar: "فراخ متبلة بالأعشاب مع ليمون مشوي" } },
    { image: "assets/beef.webp", layout: "", caption: { en: "From the charcoal", ar: "من قلب الفحم" }, alt: { en: "Sliced charcoal-grilled beef", ar: "شرائح لحمة مشوية على الفحم" } },
    { image: "assets/hero.webp", layout: "", caption: { en: "Made to share", ar: "معمول للمشاركة" }, alt: { en: "A table set for a mixed grill dinner", ar: "سفرة عشا ومشويات مشكلة" } },
    { image: "assets/beef.webp", layout: "gallery-wide", caption: { en: "Simple, confident plates", ar: "أطباق بسيطة وواثقة" }, alt: { en: "Restaurant-style beef plate in warm light", ar: "طبق لحمة في إضاءة دافية" } }
  ],

  reviews: [
    { name: { en: "Maya R.", ar: "مايا ر." }, initials: "MR", stars: 5, role: { en: "Recent guest", ar: "ضيف عندنا" }, quote: { en: "The atmosphere feels refined without losing its warmth, and every plate arrives looking considered.", ar: "القعدة راقية ودافية في نفس الوقت، وكل طبق واضح إنه معمول باهتمام." } },
    { name: { en: "Omar K.", ar: "عمر ك." }, initials: "OK", stars: 5, role: { en: "Recent guest", ar: "ضيف عندنا" }, quote: { en: "A menu that is easy to understand, beautiful to browse, and full of dishes I would genuinely want to order.", ar: "المنيو واضح وشكله حلو، وكل طبق فيه يفتح النفس ويتطلب." } },
    { name: { en: "Lina N.", ar: "لينا ن." }, initials: "LN", stars: 4, role: { en: "Recent guest", ar: "ضيف عندنا" }, quote: { en: "The charcoal concept carries through everything—from the room to the food—without ever feeling overdone.", ar: "روح الفحم موجودة في كل حاجة من المكان للأكل، من غير ما تبقى زيادة." } }
  ],

  paymentMethods: [
    { id: "Vodafone Cash", name: { en: "Vodafone Cash", ar: "فودافون كاش" }, helper: { en: "Instant wallet transfer", ar: "تحويل فوري بالمحفظة" } },
    { id: "Cash on delivery", name: { en: "Cash on delivery", ar: "الدفع عند الاستلام" }, helper: { en: "Pay when your order arrives", ar: "ادفع لما الطلب يوصل" } },
    { id: "PayPal", name: { en: "PayPal", ar: "باي بال" }, helper: { en: "Fast online checkout", ar: "دفع أونلاين بسرعة" } },
    { id: "Credit card", name: { en: "Credit card", ar: "كارت بنكي" }, helper: { en: "Visa or Mastercard", ar: "فيزا أو ماستركارد" } }
  ],

  translations: {
    text: {
      "Skip to content": "روح للمحتوى",
      "Ember & Oak · Cairo · Open daily from 12 PM to midnight": "Ember & Oak · القاهرة · فاتحين يوميًا من ١٢ الظهر لحد نص الليل",
      "Fire kitchen · Cairo": "مطبخ النار · القاهرة",
      "Home": "الرئيسية", "Menu": "المنيو", "About": "عننا", "Branches": "فروعنا", "Reviews": "آراء الضيوف", "Gallery": "الصور", "Contact": "تواصل معانا",
      "Order": "اطلب", "Bag": "الطلب", "Book / Contact us": "احجز / كلمنا",
      "Contemporary Egyptian fire kitchen": "مطبخ مصري معاصر على الفحم",
      "Where fire": "هنا النار", "finds": "بتعمل", "flavour.": "الطعم.",
      "A cinematic restaurant concept shaped around glowing charcoal, generous plates, and memorable nights around the table.": "تجربة أكل دافية حوالين الفحم، بطباق كريمة وليالي حلوة بتتجمع فيها الناس على سفرة واحدة.",
      "View the menu": "شوف المنيو", "Gather around the fire for generous plates and good company.": "اتجمعوا حوالين النار، أكل كتير وصحبة أحلى.",
      "Tonight": "النهارده", "Open until midnight": "فاتحين لحد نص الليل", "Location": "المكان", "Zamalek, Cairo": "الزمالك، القاهرة", "Get directions": "اعرف الطريق", "WhatsApp": "واتساب", "Explore": "اكتشف",
      "Charcoal grilled": "مشوي على الفحم", "Made to order": "بيتعمل وقت الطلب", "Egyptian-inspired": "بروح مصرية", "Open daily": "فاتحين كل يوم",
      "Our menu · priced in EGP": "المنيو · الأسعار بالجنيه المصري", "Built for every": "لكل واحد", "craving.": "مزاجه.",
      "From fire-roasted starters to charcoal-grilled mains, every plate is made for sharing around the table.": "من المقبلات المتحمرة على النار للأطباق الرئيسية المشوية على الفحم، كل طبق معمول عشان يتشارك على السفرة.",
      "All": "الكل", "Appetizers": "مقبلات", "Main courses": "أطباق رئيسية", "Burgers": "برجر", "Specialties": "أطباق مميزة", "Desserts": "حلويات", "Drinks": "مشروبات", "Burgers & sandwiches": "برجر وساندوتشات", "Fire-baked specialties": "مخبوزات على النار", "Add to order": "ضيف للطلب",
      "Slow fire": "نار هادية", "Good company": "ولمة حلوة", "About the concept": "حكايتنا", "Modern hospitality,": "ضيافة عصرية،", "rooted in fire.": "أصلها النار.",
      "Ember & Oak brings contemporary Egyptian hospitality together with the warmth and theatre of live-fire cooking.": "Ember & Oak بيجمع الضيافة المصرية العصرية مع دفا ومتعة الطبخ قدام النار.",
      "Our kitchen is built around thoughtful ingredients, charcoal-led flavours, a relaxed late-night atmosphere, and service that feels personal without feeling formal.": "مطبخنا قائم على مكونات مختارة، طعم الفحم، قعدة ليلية مريحة وخدمة ودودة من غير تكلف.",
      "Ingredient-led": "المكون هو الأساس", "Seasonal produce and clear, confident flavors.": "مكونات موسمية وطعم واضح ومتوازن.", "Atmosphere first": "القعدة أولاً", "Warm lighting, open flame, and generous tables.": "إضاءة دافية، نار مفتوحة وسفرة كريمة.", "Made for people": "معمول للّمة", "Simple booking, ordering, and branch discovery.": "حجز وطلب ووصول لأقرب فرع بكل سهولة.", "See the atmosphere": "شوف القعدة",
      "A look inside": "من جوه المكان", "From the": "من قلب", "pass.": "المطبخ.", "A closer look at our fire-led plates, house marinades, and evenings around the table.": "لقطة أقرب لأطباقنا على النار، تتبيلات البيت وليالينا حوالين السفرة.",
      "Evenings around the fire": "ليالي حوالين النار", "House marinades": "تتبيلات البيت", "From the charcoal": "من قلب الفحم", "Made to share": "معمول للمشاركة", "Simple, confident plates": "أطباق بسيطة وواثقة",
      "Three Cairo locations": "٣ فروع في القاهرة", "Our": "فروعنا", "branches.": "قريبة منك.", "Find your nearest Ember & Oak and join us for lunch, dinner, or a late-night table.": "اختار أقرب فرع Ember & Oak وتعالى لنا على الغدا أو العشا أو قعدة آخر الليل.",
      "Hours": "المواعيد", "Phone": "التليفون", "WhatsApp ↗": "واتساب ↗",
      "Guest stories": "حكايات ضيوفنا", "The table": "السفرة", "is talking.": "بتحكي.", "Average rating · 36 guest reviews": "متوسط التقييم · ٣٦ رأي", "Warm evenings, generous plates, and the kind of service that makes every table feel at home.": "ليالي دافية، أطباق كريمة وخدمة تخلي كل سفرة تحس إنها في بيتها.", "Guest review": "رأي ضيف",
      "Your table is waiting": "سفرتك مستنياك", "Come for the fire.": "تعالى عشان النار.", "Stay for the night.": "وخليك للسهرة.", "Contact us for reservations, private events, delivery enquiries, or anything else we can help with.": "كلمنا للحجز، المناسبات الخاصة، الدليفري أو أي حاجة نقدر نساعدك فيها.",
      "Order / WhatsApp": "اطلب / واتساب", "Email us": "ابعتلنا إيميل", "Contact details": "بيانات التواصل", "Email": "الإيميل", "Address": "العنوان", "Opening hours": "مواعيد العمل", "Instagram": "إنستجرام", "Open in Google Maps": "افتح على خرائط جوجل",
      "Contemporary fire kitchen": "مطبخ عصري على النار", "Contemporary Egyptian hospitality, live-fire cooking, and generous plates made for sharing.": "ضيافة مصرية عصرية، طبخ على النار وأطباق كريمة معمولة للمشاركة.",
      "Visit": "زورنا", "Connect": "تواصل", "All rights reserved.": "كل الحقوق محفوظة.", "Your order": "طلبك", "Your bag": "طلبك", "Order total": "إجمالي الطلب", "Continue to checkout": "كمّل للدفع", "Choose your preferred payment method on the next step.": "اختار طريقة الدفع المناسبة في الخطوة الجاية."
    },
    attributes: {
      "Ember and Oak home": "الصفحة الرئيسية لمطعم Ember & Oak", "Primary navigation": "القائمة الرئيسية", "Mobile navigation": "قائمة الموبايل", "Open order": "افتح الطلب", "Open navigation": "افتح القائمة", "Close navigation": "اقفل القائمة", "Restaurant information": "معلومات المطعم", "Filter menu": "فلتر المنيو", "Close order": "اقفل الطلب", "Close checkout": "اقفل الدفع", "Gallery image": "صورة من المطعم", "Close gallery image": "اقفل الصورة", "5 out of 5 stars": "٥ نجوم من ٥", "4 out of 5 stars": "٤ نجوم من ٥",
      "A candlelit table with a generous mixed-grill feast": "سفرة مشويات مشكلة في إضاءة دافية", "Chargrilled chicken plated with herbs and roasted lemon": "فراخ مشوية مع أعشاب وليمون", "Close detail of a charcoal-grilled beef dish": "تفاصيل طبق لحمة مشوية على الفحم", "Mixed grill feast in a candlelit dining room": "سفرة مشويات مشكلة في قاعة بإضاءة دافية", "Herb-marinated chicken with charred lemon": "فراخ متبلة بالأعشاب مع ليمون مشوي", "Sliced charcoal-grilled beef": "شرائح لحمة مشوية على الفحم", "A table set for a mixed grill dinner": "سفرة عشا ومشويات مشكلة", "Restaurant-style beef plate in warm light": "طبق لحمة في إضاءة دافية"
    },
    ui: {
      ar: { switchLabel: "حوّل الموقع للإنجليزي", switchText: "EN", emptyCart: "طلبك فاضي.<br>اختار حاجة حلوة من المنيو.", remove: "شيل", added: (name) => `اتضاف ${name} لطلبك`, choosePayment: "اختار طريقة الدفع", checkout: "الدفع", paymentIntro: "اختار طريقة الدفع الأنسب ليك.", confirmOrder: "أكد الطلب", orderReady: "طلبك جاهز للتأكيد", orderReadyBody: (payment) => `اخترت الدفع عن طريق <strong>${payment}</strong>.<br>تقدر تكمل الطلب بالتواصل مع المطعم.`, done: "تم", actions: { whatsapp: "لينك واتساب هيتضاف هنا قريب.", phone: "رقم الاتصال هيتربط هنا قريب.", instagram: "لينك إنستجرام هيتضاف هنا قريب." } },
      en: { switchLabel: "Switch to Arabic", switchText: "عربي", emptyCart: "Your bag is empty.<br>Add something from the menu.", remove: "Remove", added: (name) => `${name} added to your order`, choosePayment: "Choose payment", checkout: "Checkout", paymentIntro: "Select the payment method that works best for you.", confirmOrder: "Confirm order", orderReady: "Order ready to confirm", orderReadyBody: (payment) => `You selected <strong>${payment}</strong>.<br>Contact the restaurant to complete your order.`, done: "Done", actions: { whatsapp: "The WhatsApp link will be connected soon.", phone: "The call link will be connected soon.", instagram: "The Instagram link will be connected soon." } }
    }
  }
};
