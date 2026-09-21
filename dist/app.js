(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const arabicText = {
    "Skip to content": "روح للمحتوى",
    "Ember & Oak · Cairo · Open daily from 12 PM to midnight": "Ember & Oak · القاهرة · فاتحين يوميًا من ١٢ الظهر لحد نص الليل",
    "Fire kitchen · Cairo": "مطبخ النار · القاهرة",
    "Home": "الرئيسية", "Menu": "المنيو", "About": "عننا", "Branches": "فروعنا", "Reviews": "آراء الضيوف", "Gallery": "الصور", "Contact": "تواصل معانا",
    "Order": "اطلب", "Bag": "الطلب", "Book / Contact us": "احجز / كلمنا",
    "Contemporary Egyptian fire kitchen": "مطبخ مصري معاصر على الفحم",
    "Where fire": "هنا النار", "finds": "بتعمل", "flavour.": "الطعم.",
    "A cinematic restaurant concept shaped around glowing charcoal, generous plates, and memorable nights around the table.": "تجربة أكل دافية حوالين الفحم، بطباق كريمة وليالي حلوة بتتجمع فيها الناس على سفرة واحدة.",
    "View the menu": "شوف المنيو",
    "Gather around the fire for generous plates and good company.": "اتجمعوا حوالين النار، أكل كتير وصحبة أحلى.",
    "Tonight": "النهارده", "Open until midnight": "فاتحين لحد نص الليل", "Location": "المكان", "Zamalek, Cairo": "الزمالك، القاهرة", "Get directions": "اعرف الطريق", "WhatsApp": "واتساب", "Explore": "اكتشف",
    "Charcoal grilled": "مشوي على الفحم", "Made to order": "بيتعمل وقت الطلب", "Egyptian-inspired": "بروح مصرية", "Open daily": "فاتحين كل يوم",
    "Our menu · priced in EGP": "المنيو · الأسعار بالجنيه المصري",
    "Built for every": "لكل واحد", "craving.": "مزاجه.",
    "From fire-roasted starters to charcoal-grilled mains, every plate is made for sharing around the table.": "من المقبلات المتحمرة على النار للأطباق الرئيسية المشوية على الفحم، كل طبق معمول عشان يتشارك على السفرة.",
    "All": "الكل", "Appetizers": "مقبلات", "Main courses": "أطباق رئيسية", "Burgers": "برجر", "Specialties": "أطباق مميزة", "Desserts": "حلويات", "Drinks": "مشروبات", "18 dishes": "١٨ طبق",
    "Burgers & sandwiches": "برجر وساندوتشات", "Fire-baked specialties": "مخبوزات على النار", "Add to order": "ضيف للطلب",
    "Ember Half Chicken": "نص فرخة إمبر", "Coal-Kissed Striploin": "ستربلوين على الفحم", "Fire-Roasted Mezze": "مزة مشوية على النار", "Charred Halloumi": "حلومي مشوي", "Crispy Aubergine": "باذنجان مقرمش", "Smoked Kofta Plate": "طبق كفتة مدخنة", "Ember Beef Burger": "برجر إمبر باللحمة", "Harissa Chicken": "فراخ هريسة", "Mushroom Melt": "مشروم ميلت", "Grilled Pepper & Feta": "فلفل مشوي وفيتا", "Grilled Pepper and Feta": "فلفل مشوي وفيتا", "Smoked Kofta Flatbread": "فلات بريد بالكفتة المدخنة", "Wild Mushroom & Thyme": "مشروم بري وزعتر", "Wild Mushroom and Thyme": "مشروم بري وزعتر", "Burnt Honey Basbousa": "بسبوسة بالعسل المحروق", "Warm Date Cake": "كيكة تمر دافية", "Citrus Mahalabia": "مهلبية بالحمضيات", "Hibiscus Cooler": "كركديه ساقع", "Grilled Lemon Mint": "ليمون بالنعناع المشوي", "House Sparkling Water": "مياه غازية بطريقتنا",
    "24-hour herb marinade, burnt lemon, toum, and fire-roasted jus.": "متبلة بالأعشاب ٢٤ ساعة، ليمون مشوي، تومية وصوص تحمير.",
    "250g grain-fed beef, pepper jus, roasted shallots, and garden herbs.": "٢٥٠ جرام لحمة، صوص فلفل، شالوت مشوي وأعشاب طازة.",
    "Smoked aubergine, muhammara, labneh, olives, and house flatbread.": "باذنجان مدخن، محمرة، لبنة، زيتون وخبز البيت.",
    "Fig glaze, toasted sesame, mint, and grilled sourdough.": "صوص تين، سمسم محمص، نعناع وساوردو مشوي.",
    "Date molasses, tahini, spring onion, and warm Egyptian spice.": "دبس تمر، طحينة، بصل أخضر وبهارات مصرية دافية.",
    "Spiced beef kofta, charred tomato, tahini, and toasted pine nuts.": "كفتة لحمة متبلة، طماطم مشوية، طحينة وصنوبر محمص.",
    "Smoked cheddar, caramelized onion, ember sauce, and pickles.": "شيدر مدخن، بصل مكرمل، صوص إمبر ومخلل.",
    "Grilled chicken, cabbage slaw, herb mayo, and soft potato bun.": "فراخ مشوية، كول سلو، مايونيز أعشاب وخبز بطاطس طري.",
    "Roasted mushrooms, Swiss cheese, onion jam, and pepper mayo.": "مشروم محمر، جبنة سويسري، مربى بصل ومايونيز فلفل.",
    "Fire-roasted pepper, whipped feta, olive, and oregano.": "فلفل مشوي على النار، فيتا كريمي، زيتون وأوريجانو.",
    "Kofta, charred tomato, sumac onion, and lemon yoghurt.": "كفتة، طماطم مشوية، بصل بالسماق وزبادي بالليمون.",
    "Wild mushrooms, smoked mozzarella, thyme, and garlic confit.": "مشروم بري، موتزاريلا مدخنة، زعتر وثوم كونفي.",
    "Brown butter, citrus cream, pistachio, and sea salt.": "زبدة بنية، كريمة حمضيات، فستق وملح بحري.",
    "Tahini caramel, vanilla cream, and toasted sesame brittle.": "كراميل طحينة، كريمة فانيليا وسمسم محمص مقرمش.",
    "Orange blossom, fresh citrus, almond, and mint.": "ماء زهر، حمضيات طازة، لوز ونعناع.",
    "Karkade, pomegranate, lime, and sparkling water.": "كركديه، رمان، لايم ومياه غازية.",
    "Charred lemon, garden mint, and a touch of wild honey.": "ليمون مشوي، نعناع طازة ولمسة عسل.",
    "Chilled sparkling water with cucumber and citrus peel.": "مياه غازية ساقعة بالخيار وقشر الحمضيات.",
    "Slow fire": "نار هادية", "Good company": "ولمة حلوة", "About the concept": "حكايتنا", "Modern hospitality,": "ضيافة عصرية،", "rooted in fire.": "أصلها النار.",
    "Ember & Oak brings contemporary Egyptian hospitality together with the warmth and theatre of live-fire cooking.": "Ember & Oak بيجمع الضيافة المصرية العصرية مع دفا ومتعة الطبخ قدام النار.",
    "Our kitchen is built around thoughtful ingredients, charcoal-led flavours, a relaxed late-night atmosphere, and service that feels personal without feeling formal.": "مطبخنا قائم على مكونات مختارة، طعم الفحم، قعدة ليلية مريحة وخدمة ودودة من غير تكلف.",
    "Ingredient-led": "المكون هو الأساس", "Seasonal produce and clear, confident flavors.": "مكونات موسمية وطعم واضح ومتوازن.",
    "Atmosphere first": "القعدة أولاً", "Warm lighting, open flame, and generous tables.": "إضاءة دافية، نار مفتوحة وسفرة كريمة.",
    "Made for people": "معمول للّمة", "Simple booking, ordering, and branch discovery.": "حجز وطلب ووصول لأقرب فرع بكل سهولة.", "See the atmosphere": "شوف القعدة",
    "A look inside": "من جوه المكان", "From the": "من قلب", "pass.": "المطبخ.",
    "A closer look at our fire-led plates, house marinades, and evenings around the table.": "لقطة أقرب لأطباقنا على النار، تتبيلات البيت وليالينا حوالين السفرة.",
    "Evenings around the fire": "ليالي حوالين النار", "House marinades": "تتبيلات البيت", "From the charcoal": "من قلب الفحم", "Made to share": "معمول للمشاركة", "Simple, confident plates": "أطباق بسيطة وواثقة",
    "Three Cairo locations": "٣ فروع في القاهرة", "Our": "فروعنا", "branches.": "قريبة منك.",
    "Find your nearest Ember & Oak and join us for lunch, dinner, or a late-night table.": "اختار أقرب فرع Ember & Oak وتعالى لنا على الغدا أو العشا أو قعدة آخر الليل.",
    "Cairo branch": "فرع القاهرة", "Zamalek": "الزمالك", "New Cairo": "القاهرة الجديدة", "Sheikh Zayed": "الشيخ زايد", "12 Al Gezira Street": "١٢ شارع الجزيرة", "Cairo, Egypt": "القاهرة، مصر", "88 North 90 Street": "٨٨ شارع التسعين الشمالي", "24 Park Avenue": "٢٤ بارك أفينيو", "Giza, Egypt": "الجيزة، مصر", "Hours": "المواعيد", "Phone": "التليفون", "Daily · 12 PM–12 AM": "يوميًا · ١٢ ظهرًا–١٢ منتصف الليل", "Daily · 1 PM–1 AM": "يوميًا · ١ ظهرًا–١ صباحًا", "WhatsApp ↗": "واتساب ↗",
    "Guest stories": "حكايات ضيوفنا", "The table": "السفرة", "is talking.": "بتحكي.", "Average rating · 36 guest reviews": "متوسط التقييم · ٣٦ رأي",
    "Warm evenings, generous plates, and the kind of service that makes every table feel at home.": "ليالي دافية، أطباق كريمة وخدمة تخلي كل سفرة تحس إنها في بيتها.",
    "Guest review": "رأي ضيف", "Recent guest": "ضيف عندنا",
    "“The atmosphere feels refined without losing its warmth, and every plate arrives looking considered.”": "«القعدة راقية ودافية في نفس الوقت، وكل طبق واضح إنه معمول باهتمام.»",
    "“A menu that is easy to understand, beautiful to browse, and full of dishes I would genuinely want to order.”": "«المنيو واضح وشكله حلو، وكل طبق فيه يفتح النفس ويتطلب.»",
    "“The charcoal concept carries through everything—from the room to the food—without ever feeling overdone.”": "«روح الفحم موجودة في كل حاجة من المكان للأكل، من غير ما تبقى زيادة.»",
    "Your table is waiting": "سفرتك مستنياك", "Come for the fire.": "تعالى عشان النار.", "Stay for the night.": "وخليك للسهرة.",
    "Contact us for reservations, private events, delivery enquiries, or anything else we can help with.": "كلمنا للحجز، المناسبات الخاصة، الدليفري أو أي حاجة نقدر نساعدك فيها.",
    "Order / WhatsApp": "اطلب / واتساب", "Email us": "ابعتلنا إيميل", "Contact details": "بيانات التواصل", "Email": "الإيميل", "Address": "العنوان", "12 Al Gezira Street, Zamalek": "١٢ شارع الجزيرة، الزمالك", "Opening hours": "مواعيد العمل", "Instagram": "إنستجرام", "Open in Google Maps": "افتح على خرائط جوجل",
    "Contemporary fire kitchen": "مطبخ عصري على النار", "Contemporary Egyptian hospitality, live-fire cooking, and generous plates made for sharing.": "ضيافة مصرية عصرية، طبخ على النار وأطباق كريمة معمولة للمشاركة.",
    "Visit": "زورنا", "Connect": "تواصل", "All rights reserved.": "كل الحقوق محفوظة.", "Concept & design by Ziad and Omar": "الفكرة والتصميم: زياد وعمر",
    "Your order": "طلبك", "Your bag": "طلبك", "Order total": "إجمالي الطلب", "Continue to checkout": "كمّل للدفع", "Choose your preferred payment method on the next step.": "اختار طريقة الدفع المناسبة في الخطوة الجاية."
  };

  const attributeArabic = {
    "Ember and Oak home": "الصفحة الرئيسية لمطعم Ember & Oak", "Primary navigation": "القائمة الرئيسية", "Mobile navigation": "قائمة الموبايل", "Open order": "افتح الطلب", "Open navigation": "افتح القائمة", "Close navigation": "اقفل القائمة", "Restaurant information": "معلومات المطعم", "Filter menu": "فلتر المنيو", "Close order": "اقفل الطلب", "Close checkout": "اقفل الدفع", "Gallery image": "صورة من المطعم", "Close gallery image": "اقفل الصورة", "5 out of 5 stars": "٥ نجوم من ٥", "4 out of 5 stars": "٤ نجوم من ٥",
    "A candlelit table with a generous mixed-grill feast": "سفرة مشويات مشكلة في إضاءة دافية", "Herb-charred half chicken with roasted lemon": "نص فرخة مشوية بالأعشاب والليمون", "Sliced charcoal-grilled striploin with roasted shallots": "شرائح ستربلوين مشوية على الفحم", "Chargrilled chicken plated with herbs and roasted lemon": "فراخ مشوية مع أعشاب وليمون", "Close detail of a charcoal-grilled beef dish": "تفاصيل طبق لحمة مشوية على الفحم", "Mixed grill feast in a candlelit dining room": "سفرة مشويات مشكلة في قاعة بإضاءة دافية", "Herb-marinated chicken with charred lemon": "فراخ متبلة بالأعشاب مع ليمون مشوي", "Sliced charcoal-grilled beef": "شرائح لحمة مشوية على الفحم", "A table set for a mixed grill dinner": "سفرة عشا ومشويات مشكلة", "Restaurant-style beef plate in warm light": "طبق لحمة في إضاءة دافية"
  };

  const ui = {
    ar: {
      switchLabel: "حوّل الموقع للإنجليزي", switchText: "EN", emptyCart: "طلبك فاضي.<br>اختار حاجة حلوة من المنيو.", remove: "شيل", added: (name) => `اتضاف ${name} لطلبك`, choosePayment: "اختار طريقة الدفع", checkout: "الدفع", paymentIntro: "اختار طريقة الدفع الأنسب ليك.", confirmOrder: "أكد الطلب", orderReady: "طلبك جاهز للتأكيد", orderReadyBody: (payment) => `اخترت الدفع عن طريق <strong>${payment}</strong>.<br>تقدر تكمل الطلب بالتواصل مع المطعم.`, done: "تم",
      actions: { whatsapp: "لينك واتساب هيتضاف هنا قريب.", phone: "رقم الاتصال هيتربط هنا قريب.", instagram: "لينك إنستجرام هيتضاف هنا قريب." }
    },
    en: {
      switchLabel: "Switch to Arabic", switchText: "عربي", emptyCart: "Your bag is empty.<br>Add something from the menu.", remove: "Remove", added: (name) => `${name} added to your order`, choosePayment: "Choose payment", checkout: "Checkout", paymentIntro: "Select the payment method that works best for you.", confirmOrder: "Confirm order", orderReady: "Order ready to confirm", orderReadyBody: (payment) => `You selected <strong>${payment}</strong>.<br>Contact the restaurant to complete your order.`, done: "Done",
      actions: { whatsapp: "The WhatsApp link will be connected soon.", phone: "The call link will be connected soon.", instagram: "The Instagram link will be connected soon." }
    }
  };

  const paymentNames = { "Vodafone Cash": "فودافون كاش", "Cash on delivery": "الدفع عند الاستلام", "PayPal": "باي بال", "Credit card": "كارت بنكي" };
  const header = $("#siteHeader");
  const progress = $("#scrollProgress");
  const menuToggle = $("#menuToggle");
  const mobileMenu = $("#mobileMenu");
  const overlay = $("#overlay");
  const cartPanel = $("#cart");
  const checkoutDialog = $("#checkoutDialog");
  const checkoutContent = $("#checkoutContent");
  const lightbox = $("#lightbox");
  const toast = $("#toast");
  const languageToggle = $("#languageToggle");
  const cart = [];
  const textRecords = [];
  const attributeRecords = [];
  let currentLanguage = "ar";
  let lastFocused = null;
  let toastTimer;
  let checkoutPayment = null;

  function captureTranslations() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const value = node.nodeValue.trim();
      if (!value || (!arabicText[value] && !/^EGP\s+\d/.test(value))) continue;
      textRecords.push({ node, english: value, before: node.nodeValue.match(/^\s*/)[0], after: node.nodeValue.match(/\s*$/)[0] });
    }
    $$('[aria-label], [alt], [data-alt]').forEach((element) => {
      ["aria-label", "alt", "data-alt"].forEach((attribute) => {
        if (element.hasAttribute(attribute)) attributeRecords.push({ element, attribute, english: element.getAttribute(attribute) });
      });
    });
  }

  function translated(value) {
    if (currentLanguage === "en") return value;
    if (arabicText[value]) return arabicText[value];
    return /^EGP\s+\d/.test(value) ? value.replace("EGP", "ج.م") : value;
  }

  function translatedAttribute(value) {
    if (currentLanguage === "en") return value;
    if (attributeArabic[value]) return attributeArabic[value];
    const addMatch = value.match(/^Add (.+) to order$/);
    return addMatch ? `ضيف ${translated(addMatch[1])} للطلب` : value;
  }

  function money(value) {
    const formatted = value.toLocaleString(currentLanguage === "ar" ? "ar-EG" : "en-EG");
    return currentLanguage === "ar" ? `${formatted} ج.م` : `EGP ${formatted}`;
  }

  function setMobileMenu(open) {
    menuToggle.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? (currentLanguage === "ar" ? "اقفل القائمة" : "Close navigation") : (currentLanguage === "ar" ? "افتح القائمة" : "Open navigation"));
    mobileMenu.classList.toggle("open", open);
    mobileMenu.setAttribute("aria-hidden", String(!open));
  }

  function applyLanguage(language, persist = true) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("language-ar", language === "ar");
    textRecords.forEach(({ node, english, before, after }) => { if (node.isConnected) node.nodeValue = `${before}${translated(english)}${after}`; });
    attributeRecords.forEach(({ element, attribute, english }) => { if (element.isConnected) element.setAttribute(attribute, translatedAttribute(english)); });
    languageToggle.innerHTML = `<span aria-hidden="true">${ui[language].switchText}</span>`;
    languageToggle.setAttribute("aria-label", ui[language].switchLabel);
    document.title = language === "ar" ? "Ember & Oak — مطعم المشويات على الفحم" : "Ember & Oak — Premium Fire Kitchen";
    $('meta[name="description"]').setAttribute("content", language === "ar" ? "Ember & Oak مطعم مشويات عصري في القاهرة، بطبخ على الفحم وقعدة دافية وأطباق معمولة للمشاركة." : "Ember & Oak is a premium charcoal-kitchen restaurant in Cairo, serving fire-led dishes in a warm, contemporary setting.");
    setMobileMenu(false);
    renderCart();
    if (checkoutPayment) renderCheckoutSuccess(checkoutPayment);
    if (persist) { try { localStorage.setItem("ember-language", language); } catch (_) { /* Storage can be unavailable. */ } }
    document.documentElement.classList.remove("i18n-pending");
  }

  function renderCart() {
    const count = $("#bagCount");
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    count.textContent = cart.length;
    $("#cartTotal").textContent = money(total);
    $("#checkoutOpen").disabled = cart.length === 0;
    $("#cartItems").innerHTML = cart.length
      ? cart.map((item, index) => `<div class="cart-item"><div><strong>${translated(item.name)}</strong><br><span>${money(item.price)}</span></div><button type="button" data-remove="${index}" aria-label="${ui[currentLanguage].remove} ${translated(item.name)}">${ui[currentLanguage].remove}</button></div>`).join("")
      : `<p class="empty-cart">${ui[currentLanguage].emptyCart}</p>`;
    $$('[data-remove]').forEach((button) => button.addEventListener("click", () => { cart.splice(Number(button.dataset.remove), 1); renderCart(); }));
  }

  function renderCheckoutForm() {
    checkoutPayment = null;
    const isArabic = currentLanguage === "ar";
    const options = [
      ["Vodafone Cash", isArabic ? "تحويل فوري بالمحفظة" : "Instant wallet transfer"],
      ["Cash on delivery", isArabic ? "ادفع لما الطلب يوصل" : "Pay when your order arrives"],
      ["PayPal", isArabic ? "دفع أونلاين بسرعة" : "Fast online checkout"],
      ["Credit card", isArabic ? "فيزا أو ماستركارد" : "Visa or Mastercard"]
    ];
    checkoutContent.innerHTML = `<div class="dialog-header"><div><span class="kicker">${ui[currentLanguage].checkout}</span><h2 id="checkoutTitle">${ui[currentLanguage].choosePayment}</h2></div><button class="close-button dark" id="checkoutClose" type="button" aria-label="${isArabic ? "اقفل الدفع" : "Close checkout"}">×</button></div><p>${ui[currentLanguage].paymentIntro}</p><div class="payment-options">${options.map(([name, helper], index) => `<button class="payment-option${index === 0 ? " active" : ""}" type="button" data-payment="${name}"><strong>${isArabic ? paymentNames[name] : name}</strong><small>${helper}</small></button>`).join("")}</div><button class="button button-copper dialog-submit" id="placeOrder" type="button">${ui[currentLanguage].confirmOrder}</button>`;
    $("#checkoutClose").addEventListener("click", () => closeLayers());
    $$(".payment-option").forEach((option) => option.addEventListener("click", () => { $$(".payment-option").forEach((item) => item.classList.remove("active")); option.classList.add("active"); }));
    $("#placeOrder").addEventListener("click", () => renderCheckoutSuccess($(".payment-option.active").dataset.payment));
  }

  function renderCheckoutSuccess(payment) {
    checkoutPayment = payment;
    const paymentLabel = currentLanguage === "ar" ? paymentNames[payment] : payment;
    checkoutContent.innerHTML = `<div class="success"><div class="success-mark" aria-hidden="true">✓</div><h3>${ui[currentLanguage].orderReady}</h3><p>${ui[currentLanguage].orderReadyBody(paymentLabel)}</p><button class="button button-copper" type="button" id="orderDone">${ui[currentLanguage].done}</button></div>`;
    $("#orderDone").addEventListener("click", () => { cart.length = 0; renderCart(); closeLayers(); renderCheckoutForm(); });
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
  }

  function showOverlay() { overlay.hidden = false; requestAnimationFrame(() => overlay.classList.add("open")); document.body.classList.add("modal-open"); }
  function hideOverlay() { overlay.classList.remove("open"); window.setTimeout(() => { overlay.hidden = true; }, reduceMotion ? 0 : 300); document.body.classList.remove("modal-open"); }
  function closeLayers({ restoreFocus = true } = {}) {
    cartPanel.classList.remove("open"); cartPanel.setAttribute("aria-hidden", "true"); checkoutDialog.classList.remove("open"); checkoutDialog.setAttribute("aria-hidden", "true"); lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden", "true"); hideOverlay(); if (restoreFocus && lastFocused) lastFocused.focus();
  }
  function openCart() { lastFocused = document.activeElement; showOverlay(); cartPanel.classList.add("open"); cartPanel.setAttribute("aria-hidden", "false"); $("#cartClose").focus(); }
  function updateScroll() { const max = document.documentElement.scrollHeight - window.innerHeight; header.classList.toggle("scrolled", window.scrollY > 24); progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`; }

  $("#year").textContent = new Date().getFullYear();
  captureTranslations();
  let storedLanguage = "ar";
  try { storedLanguage = localStorage.getItem("ember-language") || "ar"; } catch (_) { /* Arabic remains the default. */ }
  applyLanguage(storedLanguage === "en" ? "en" : "ar", false);
  languageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "ar" ? "en" : "ar"));

  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();
  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("in-view"); revealObserver.unobserve(entry.target); } }); }, { threshold: 0.12, rootMargin: "0px 0px -30px" });
    $$(".reveal").forEach((element) => revealObserver.observe(element));
  } else { $$(".reveal").forEach((element) => element.classList.add("in-view")); }
  const sectionObserver = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (!entry.isIntersecting) return; $$(".desktop-nav a").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)); }); }, { rootMargin: "-35% 0px -55%" });
  $$("main section[id]").forEach((section) => sectionObserver.observe(section));

  menuToggle.addEventListener("click", () => setMobileMenu(!mobileMenu.classList.contains("open")));
  $$("a", mobileMenu).forEach((link) => link.addEventListener("click", () => setMobileMenu(false)));
  $$(".filter").forEach((button) => button.addEventListener("click", () => {
    const category = button.dataset.filter;
    $$(".filter").forEach((filter) => { const active = filter === button; filter.classList.toggle("active", active); filter.setAttribute("aria-pressed", String(active)); });
    $$(".menu-card").forEach((card) => { const visible = category === "all" || card.dataset.category === category; card.classList.toggle("hidden", !visible); if (visible && !reduceMotion) { card.classList.remove("filter-pop"); void card.offsetWidth; card.classList.add("filter-pop"); } });
  }));
  $$(".add-item").forEach((button) => button.addEventListener("click", () => {
    cart.push({ name: button.dataset.name, price: Number(button.dataset.price) });
    if (!reduceMotion) { button.classList.remove("added"); void button.offsetWidth; button.classList.add("added"); }
    renderCart(); showToast(ui[currentLanguage].added(translated(button.dataset.name)));
  }));

  $("#cartOpen").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", () => closeLayers());
  overlay.addEventListener("click", () => closeLayers());
  $("#checkoutOpen").addEventListener("click", () => { renderCheckoutForm(); cartPanel.classList.remove("open"); cartPanel.setAttribute("aria-hidden", "true"); checkoutDialog.classList.add("open"); checkoutDialog.setAttribute("aria-hidden", "false"); $("#checkoutClose").focus(); });
  $$(".gallery-item").forEach((item) => item.addEventListener("click", () => { lastFocused = item; $("#lightboxImage").src = item.dataset.image; $("#lightboxImage").alt = translatedAttribute(item.dataset.alt); showOverlay(); lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden", "false"); $("#lightboxClose").focus(); }));
  $("#lightboxClose").addEventListener("click", () => closeLayers());
  $$('[data-placeholder-action]').forEach((link) => link.addEventListener("click", (event) => { event.preventDefault(); showToast(ui[currentLanguage].actions[link.dataset.placeholderAction]); }));

  function trapFocus(event) {
    if (event.key !== "Tab") return;
    const activeLayer = [checkoutDialog, lightbox, cartPanel].find((layer) => layer.classList.contains("open"));
    if (!activeLayer) return;
    const focusable = $$('button:not([disabled]), a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])', activeLayer);
    if (!focusable.length) return;
    const first = focusable[0]; const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") { if (mobileMenu.classList.contains("open")) setMobileMenu(false); if ([cartPanel, checkoutDialog, lightbox].some((layer) => layer.classList.contains("open"))) closeLayers(); } trapFocus(event); });
})();
