(() => {
  "use strict";
  const content = window.EMBER_CONTENT;
  if (!content) return;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [
    ...scope.querySelectorAll(selector),
  ];
  const escape = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const cart = new Map();
  let language = content.defaultLanguage || "ar";
  let category = "all";
  let toastTimer;
  let galleryIndex = 0;
  let returnFocus;
  const brandName = () =>
    typeof content.restaurant.name === "string"
      ? content.restaurant.name
      : content.restaurant.name[language];
  const text = (value) =>
    String(
      typeof value === "object"
        ? value?.[language] || value?.en || ""
        : value || "",
    )
      .replaceAll("{restaurant}", brandName())
      .replaceAll("Ember & Oak", brandName());
  const t = (english) =>
    text(
      language === "ar"
        ? content.translations.text[english] ||
            content.translations.attributes[english] ||
            english
        : english,
    );
  const ui = () => content.translations.ui[language];
  const money = (value) =>
    `${Number(value).toLocaleString(language === "ar" ? "ar-EG" : "en-EG")} ${language === "ar" ? "ج.م" : "EGP"}`;
  const resolve = (path) =>
    path.split(".").reduce((value, key) => value?.[key], content);
  const total = () =>
    [...cart].reduce(
      (sum, [index, count]) => sum + content.menuItems[index].price * count,
      0,
    );

  // Empty or disabled optional sections disappear together with their navigation links.
  for (const [id, items] of [
    ["branches", content.branches],
    ["reviews", content.reviews],
    ["gallery", content.galleryItems],
  ]) {
    const hidden = content.sections?.[id] === false || !items.length;
    $(`#${id}`).hidden = hidden;
    $$(`a[href="#${id}"]`).forEach((link) => { link.hidden = hidden; });
  }

  for (const [key, value] of Object.entries(content.theme || {})) {
    if (/^#[\da-f]{3,8}$/i.test(value))
      document.documentElement.style.setProperty(`--${key}`, value);
  }
  $$("[data-image]").forEach((image) => {
    if (content.media[image.dataset.image])
      image.src = content.media[image.dataset.image];
  });
  $$("[data-logo]").forEach((mark) => {
    if (content.restaurant.logo) {
      mark.classList.add("has-logo");
      mark.innerHTML = `<img src="${escape(content.restaurant.logo)}" alt="" width="56" height="48">`;
    } else
      mark.textContent = content.restaurant.monogram || brandName().slice(0, 2);
  });
  if (content.restaurant.logo)
    $('link[rel="icon"]').href = content.restaurant.logo;

  function linkFor(kind) {
    const restaurant = content.restaurant;
    if (kind === "maps") return restaurant.mapsUrl;
    if (kind === "email") return `mailto:${restaurant.email}`;
    if (kind === "phone") return restaurant.phoneUrl || "#contact";
    return restaurant[`${kind}Url`] || "#contact";
  }
  function linkAttributes(kind, url = linkFor(kind)) {
    const placeholder = !url || url === "#" || url === "#contact";
    return `href="${escape(url || "#contact")}"${placeholder ? ` data-placeholder="${kind}"` : /^(https?:)/.test(url) ? ' target="_blank" rel="noopener"' : ""}`;
  }
  function renderMenu() {
    const featured = new Set(content.featuredItems || []);
    let featuredHTML = "",
      listHTML = "";
    content.menuItems.forEach((item, index) => {
      const name = escape(text(item.name)),
        description = escape(text(item.description));
      const alt = escape(text(item.imageAlt || item.name));
      const categoryName = escape(text(item.categoryText));
      const addLabel = escape(
        language === "ar"
          ? `ضيف ${text(item.name)} للطلب`
          : `Add ${text(item.name)} to order`,
      );
      if (featured.has(index) && item.image) {
        featuredHTML += `<article class="menu-card" data-category="${escape(item.category)}"><div class="menu-photo"><img src="${escape(item.image)}" alt="${alt}" width="900" height="600" loading="lazy"></div><div class="menu-card-body"><span class="item-category">${categoryName}</span><div class="item-title"><h3>${name}</h3><strong>${money(item.price)}</strong></div><p>${description}</p><button class="add-item" type="button" data-add="${index}" aria-label="${addLabel}"><span>${t("Add to order")}</span><span aria-hidden="true">+</span></button></div></article>`;
      } else {
        listHTML += `<article class="menu-row" data-category="${escape(item.category)}">${item.image ? `<img src="${escape(item.image)}" alt="${alt}" width="74" height="74" loading="lazy">` : ""}<div class="menu-row-copy"><span class="item-category">${categoryName}</span><div class="item-title"><h3>${name}</h3><strong>${money(item.price)}</strong></div><p>${description}</p></div><button class="row-add" type="button" data-add="${index}" aria-label="${addLabel}">+</button></article>`;
      }
    });
    $("#featuredMenu").innerHTML = featuredHTML;
    $("#menuGrid").innerHTML = listHTML;
    $("#menuFilters").innerHTML = content.menuCategories
      .filter(
        (item) =>
          item.id === "all" ||
          content.menuItems.some((dish) => dish.category === item.id),
      )
      .map(
        (item) =>
          `<button type="button" class="filter${item.id === category ? " active" : ""}" data-filter="${escape(item.id)}" aria-pressed="${item.id === category}">${escape(text(item.name))}</button>`,
      )
      .join("");
    filterMenu();
  }
  function filterMenu(animate = false) {
    $$("[data-category]").forEach((item) => {
      item.hidden = category !== "all" && item.dataset.category !== category;
      if (animate && !reduceMotion && !item.hidden) {
        item.classList.remove("filter-pop");
        void item.offsetWidth;
        item.classList.add("filter-pop");
      }
    });
    $$("[data-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === category);
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.filter === category),
      );
    });
    const visible = $$("[data-category]:not([hidden])").length;
    $("#menuCount").textContent =
      `${visible.toLocaleString(language === "ar" ? "ar-EG" : "en-EG")} ${language === "ar" ? "طبق · الأسعار بالجنيه" : "dishes · prices in EGP"}`;
    $("#featuredMenu").hidden = !$$(
      "[data-category]:not([hidden])",
      $("#featuredMenu"),
    ).length;
    const hasList = !!$$("[data-category]:not([hidden])", $("#menuGrid"))
      .length;
    $("#menuGrid").hidden = !hasList;
    $("#menuListLabel").hidden = !hasList || $("#featuredMenu").hidden;
  }
  function renderBranches() {
    $("#branchesGrid").innerHTML = content.branches
      .map(
        (branch, index) =>
          `<article class="branch-card"><div class="branch-top"><small>${escape(text(branch.tag))}</small><span class="branch-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span></div><h3>${escape(text(branch.name))}</h3><p>${branch.address[language].map(escape).join("<br>")}</p><dl><div><dt>${t("Hours")}</dt><dd>${escape(text(branch.hours))}</dd></div><div><dt>${t("Phone")}</dt><dd class="phone">${escape(branch.phone)}</dd></div></dl><div class="branch-actions"><a class="button button-outline" ${linkAttributes("maps", branch.mapsUrl)}>${t("Get directions")}</a><a class="branch-whatsapp" ${linkAttributes("whatsapp", branch.whatsappUrl)}>${t("WhatsApp")} ↗</a></div></article>`,
      )
      .join("");
  }
  function renderGallery() {
    $("#galleryGrid").innerHTML = content.galleryItems
      .map(
        (item, index) =>
          `<button class="gallery-item ${escape(item.layout)}" data-gallery="${index}" type="button" aria-label="${escape(text(item.caption))}"><img src="${escape(item.image)}" alt="${escape(text(item.alt))}" width="900" height="600" loading="lazy"><span>${escape(text(item.caption))}</span><i aria-hidden="true">↗</i></button>`,
      )
      .join("");
  }
  function renderReviews() {
    $("#reviewsGrid").innerHTML = content.reviews
      .map(
        (review) =>
          `<article class="review-card"><div class="stars" aria-label="${review.stars} ${language === "ar" ? "نجوم من ٥" : "out of 5 stars"}">${"★".repeat(review.stars)}${"☆".repeat(5 - review.stars)}</div><blockquote>${language === "ar" ? "«" : "“"}${escape(text(review.quote))}${language === "ar" ? "»" : "”"}</blockquote><footer><span class="avatar" aria-hidden="true">${escape(review.initials)}</span><div><strong>${escape(text(review.name))}</strong><small>${escape(text(review.role))}</small></div></footer></article>`,
      )
      .join("");
  }
  function renderContact() {
    const restaurant = content.restaurant;
    $("#contactCard").innerHTML =
      [
        ["Phone", restaurant.phone, "phone", true],
        ["Email", restaurant.email, "email", true],
        ["Address", text(restaurant.address), "maps"],
        ["Opening hours", text(restaurant.hours), null],
        ["Instagram", restaurant.instagram, "instagram", true],
      ]
        .map(([label, value, kind, latin]) => {
          const tag = kind ? "a" : "div";
          return `<${tag} class="contact-row" ${kind ? linkAttributes(kind) : ""}><span>${t(label)}</span><strong${latin ? ' class="latin"' : ""}>${escape(value)}</strong>${kind ? '<b aria-hidden="true">↗</b>' : "<b></b>"}</${tag}>`;
        })
        .join("") +
      `<a class="text-link" ${linkAttributes("maps")}>${t("Open in Google Maps")} <span aria-hidden="true">↗</span></a>`;
  }
  function renderCart() {
    const count = [...cart.values()].reduce((sum, value) => sum + value, 0);
    $("#bagCount").textContent = count;
    $("#cartOpen").setAttribute("aria-label", `${t("Open order")} (${count})`);
    $("#cartTotal").textContent = money(total());
    $("#checkoutOpen").disabled = count === 0;
    $("#cartItems").innerHTML = count
      ? [...cart]
          .map(([index, quantity]) => {
            const item = content.menuItems[index],
              name = text(item.name);
            return `<div class="cart-item">${item.image ? `<img src="${escape(item.image)}" alt="" width="58" height="58">` : ""}<div class="cart-item-copy"><strong>${escape(name)}</strong><small>${money(item.price * quantity)}</small><div class="quantity"><button type="button" data-quantity="${index}" data-change="-1" aria-label="${escape(language === "ar" ? `قلل كمية ${name}` : `Decrease ${name}`)}">−</button><span>${quantity}</span><button type="button" data-quantity="${index}" data-change="1" aria-label="${escape(language === "ar" ? `زود كمية ${name}` : `Increase ${name}`)}">+</button></div></div><button class="remove-item" type="button" data-remove="${index}" aria-label="${escape(`${ui().remove} ${name}`)}">${ui().remove}</button></div>`;
          })
          .join("")
      : `<p class="empty-cart">${ui().emptyCart}</p>`;
  }
  function applyLanguage(next, persist = true) {
    language = next;
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    $$("[data-t]").forEach((node) => {
      node.textContent = t(node.dataset.t);
    });
    $$("[data-copy]").forEach((node) => {
      node.textContent = text(resolve(node.dataset.copy));
    });
    $$("[data-brand]").forEach((node) => {
      node.textContent = brandName();
    });
    $$("[data-alt-copy]").forEach((node) => {
      node.alt = text(resolve(node.dataset.altCopy));
    });
    $$("[data-aria]").forEach((node) => {
      node.setAttribute(
        "aria-label",
        content.translations.attributes[node.dataset.aria] && next === "ar"
          ? content.translations.attributes[node.dataset.aria]
          : t(node.dataset.aria),
      );
    });
    $$("[data-link]").forEach((node) => {
      const kind = node.dataset.link,
        url = linkFor(kind);
      node.href = url || "#contact";
      if (!url || url === "#" || url === "#contact")
        node.dataset.placeholder = kind;
      else delete node.dataset.placeholder;
    });
    $("#languageToggle").textContent = ui().switchText;
    $("#languageToggle").setAttribute("aria-label", ui().switchLabel);
    document.title = text(content.restaurant.pageTitle);
    $('meta[name="description"]').content = text(
      content.restaurant.description,
    );
    $('meta[property="og:title"]').content = document.title;
    $('meta[property="og:description"]').content = text(
      content.restaurant.description,
    );
    $('meta[property="og:site_name"]').content = brandName();
    $('meta[property="og:image"]').content = new URL(
      content.media.hero,
      content.restaurant.siteUrl || location.href,
    ).href;
    $('meta[name="theme-color"]').content = content.theme.paper;
    renderMenu();
    renderBranches();
    renderGallery();
    renderReviews();
    renderContact();
    renderCart();
    setMobileMenu(false);
    if (persist) {
      try {
        localStorage.setItem("ember-language", language);
      } catch (_) {}
    }
  }
  function setMobileMenu(open) {
    $("#mobileMenu").hidden = !open;
    $("#menuToggle").classList.toggle("open", open);
    $("#menuToggle").setAttribute("aria-expanded", String(open));
    $("#menuToggle").setAttribute(
      "aria-label",
      t(open ? "Close navigation" : "Open navigation"),
    );
  }
  function showToast(message) {
    clearTimeout(toastTimer);
    $("#toast").textContent = message;
    $("#toast").classList.add("show");
    toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 2600);
  }
  function openDialog(dialog) {
    const opener = document.activeElement;
    returnFocus = opener.closest("dialog") ? $("#cartOpen") : opener;
    $$("dialog[open]").forEach((other) => other.close());
    dialog.showModal();
    document.body.classList.add("modal-open");
  }
  function renderCheckout() {
    $("#checkoutContent").innerHTML =
      `<div class="dialog-header"><div><p class="eyebrow">${ui().checkout}</p><h2 id="checkoutTitle">${ui().choosePayment}</h2></div><button class="close-button" type="button" data-close aria-label="${t("Close checkout")}">×</button></div><p>${ui().paymentIntro}</p><div class="payment-options">${content.paymentMethods.map((method, index) => `<button class="payment-option${index === 0 ? " active" : ""}" type="button" data-payment="${index}" aria-pressed="${index === 0}"><strong>${escape(text(method.name))}</strong><small>${escape(text(method.helper))}</small></button>`).join("")}</div><div class="dialog-total"><span>${t("Order total")}</span><strong>${money(total())}</strong></div><button class="button button-accent dialog-submit" id="placeOrder" type="button">${ui().confirmOrder}</button>`;
  }
  function completeOrder() {
    const method =
      content.paymentMethods[
        Number($(".payment-option.active").dataset.payment)
      ];
    $("#checkoutContent").innerHTML =
      `<div class="success"><div class="success-mark" aria-hidden="true">✓</div><h2 id="checkoutTitle">${ui().orderReady}</h2><p>${ui().orderReadyBody(escape(text(method.name)))}</p><button class="button button-accent" type="button" id="orderDone">${ui().done}</button></div>`;
    $("#orderDone").focus();
  }
  document.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add]");
    if (add) {
      const index = Number(add.dataset.add);
      cart.set(index, (cart.get(index) || 0) + 1);
      renderCart();
      showToast(ui().added(text(content.menuItems[index].name)));
      add.classList.add("added");
      setTimeout(() => add.classList.remove("added"), 750);
    }
    const filter = event.target.closest("[data-filter]");
    if (filter) {
      category = filter.dataset.filter;
      filterMenu(true);
    }
    const quantity = event.target.closest("[data-quantity]");
    if (quantity) {
      const index = Number(quantity.dataset.quantity),
        next = cart.get(index) + Number(quantity.dataset.change);
      if (next > 0) cart.set(index, next);
      else cart.delete(index);
      renderCart();
      const updated = $(
        `[data-quantity="${index}"][data-change="${quantity.dataset.change}"]`,
      );
      (updated || $("#cartTitle")).focus();
    }
    const remove = event.target.closest("[data-remove]");
    if (remove) {
      cart.delete(Number(remove.dataset.remove));
      renderCart();
      $("#checkoutOpen").disabled
        ? $("#cart").querySelector("[data-close]").focus()
        : $("#checkoutOpen").focus();
    }
    const gallery = event.target.closest("[data-gallery]");
    if (gallery) {
      galleryIndex = Number(gallery.dataset.gallery);
      const item = content.galleryItems[galleryIndex];
      $("#lightboxImage").src = item.image;
      $("#lightboxImage").alt = text(item.alt);
      $("#lightboxCaption").textContent = text(item.caption);
      openDialog($("#lightbox"));
    }
    const close = event.target.closest("[data-close]");
    if (close) close.closest("dialog").close();
    const placeholder = event.target.closest("[data-placeholder]");
    if (placeholder) {
      event.preventDefault();
      showToast(
        ui().actions[placeholder.dataset.placeholder] || ui().actions.whatsapp,
      );
    }
    const payment = event.target.closest("[data-payment]");
    if (payment)
      $$("[data-payment]").forEach((button) => {
        button.classList.toggle("active", button === payment);
        button.setAttribute("aria-pressed", String(button === payment));
      });
    if (event.target.closest("#placeOrder")) completeOrder();
    if (event.target.closest("#orderDone")) {
      cart.clear();
      renderCart();
      $("#checkoutDialog").close();
    }
  });
  $("#cartOpen").addEventListener("click", () => openDialog($("#cart")));
  $("#checkoutOpen").addEventListener("click", () => {
    renderCheckout();
    openDialog($("#checkoutDialog"));
  });
  $$("dialog").forEach((dialog) => {
    dialog.addEventListener("close", () => {
      if (!$("dialog[open]")) {
        document.body.classList.remove("modal-open");
        returnFocus?.focus();
      }
    });
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom
      )
        dialog.close();
    });
  });
  $("#menuToggle").addEventListener("click", () =>
    setMobileMenu($("#mobileMenu").hidden),
  );
  $$("#mobileMenu a").forEach((link) =>
    link.addEventListener("click", () => setMobileMenu(false)),
  );
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !$("#mobileMenu").hidden) {
      setMobileMenu(false);
      $("#menuToggle").focus();
    }
  });
  $("#languageToggle").addEventListener("click", () =>
    applyLanguage(language === "ar" ? "en" : "ar"),
  );
  let storedLanguage = language;
  try {
    storedLanguage = localStorage.getItem("ember-language") || language;
  } catch (_) {}
  applyLanguage(storedLanguage === "en" ? "en" : "ar", false);
  $("#year").textContent = new Date().getFullYear();
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("motion-ready");
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            reveal.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    $$(".reveal").forEach((node) => reveal.observe(node));
  }
  if ("IntersectionObserver" in window) {
    const sections = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            $$(".desktop-nav a").forEach((link) =>
              link.classList.toggle(
                "active",
                link.hash === `#${entry.target.id}`,
              ),
            );
        }),
      { rootMargin: "-20% 0px -60% 0px" },
    );
    $$("main section[id]").forEach((section) => sections.observe(section));
  }
  let scrollPending = false;
  window.addEventListener(
    "scroll",
    () => {
      if (scrollPending) return;
      scrollPending = true;
      requestAnimationFrame(() => {
        $("#siteHeader").classList.toggle("scrolled", scrollY > 10);
        scrollPending = false;
      });
    },
    { passive: true },
  );
})();
