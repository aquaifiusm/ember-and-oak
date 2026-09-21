(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const money = (value) => `EGP ${value.toLocaleString("en-EG")}`;

  const header = $("#siteHeader");
  const progress = $("#scrollProgress");
  const menuToggle = $("#menuToggle");
  const mobileMenu = $("#mobileMenu");
  const overlay = $("#overlay");
  const cartPanel = $("#cart");
  const checkoutDialog = $("#checkoutDialog");
  const lightbox = $("#lightbox");
  const toast = $("#toast");
  const cart = [];
  let lastFocused = null;
  let toastTimer;

  $("#year").textContent = new Date().getFullYear();

  function updateScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle("scrolled", window.scrollY > 24);
    progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  }

  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();

  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px" });
    $$(".reveal").forEach((element) => revealObserver.observe(element));
  } else {
    $$(".reveal").forEach((element) => element.classList.add("in-view"));
  }

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      $$(".desktop-nav a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-35% 0px -55%" });
  $$("main section[id]").forEach((section) => sectionObserver.observe(section));

  function setMobileMenu(open) {
    menuToggle.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    mobileMenu.classList.toggle("open", open);
    mobileMenu.setAttribute("aria-hidden", String(!open));
  }

  menuToggle.addEventListener("click", () => setMobileMenu(!mobileMenu.classList.contains("open")));
  $$("a", mobileMenu).forEach((link) => link.addEventListener("click", () => setMobileMenu(false)));

  $$(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;
      $$(".filter").forEach((filter) => {
        const active = filter === button;
        filter.classList.toggle("active", active);
        filter.setAttribute("aria-pressed", String(active));
      });
      $$(".menu-card").forEach((card) => {
        const visible = category === "all" || card.dataset.category === category;
        card.classList.toggle("hidden", !visible);
        if (visible && !reduceMotion) {
          card.classList.remove("filter-pop");
          void card.offsetWidth;
          card.classList.add("filter-pop");
        }
      });
    });
  });

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
  }

  function renderCart() {
    const count = $("#bagCount");
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    count.textContent = cart.length;
    $("#cartTotal").textContent = money(total);
    $("#checkoutOpen").disabled = cart.length === 0;
    if (!reduceMotion) {
      count.classList.remove("bump");
      void count.offsetWidth;
      count.classList.add("bump");
    }
    $("#cartItems").innerHTML = cart.length
      ? cart.map((item, index) => `<div class="cart-item"><div><strong>${item.name}</strong><br><span>${money(item.price)}</span></div><button type="button" data-remove="${index}" aria-label="Remove ${item.name}">Remove</button></div>`).join("")
      : '<p class="empty-cart">Your bag is empty.<br>Add something from the menu.</p>';
    $$('[data-remove]').forEach((button) => button.addEventListener("click", () => {
      cart.splice(Number(button.dataset.remove), 1);
      renderCart();
    }));
  }

  $$(".add-item").forEach((button) => {
    button.addEventListener("click", () => {
      cart.push({ name: button.dataset.name, price: Number(button.dataset.price) });
      const plus = $("span", button);
      if (!reduceMotion) {
        plus.classList.remove("added");
        button.classList.remove("added");
        void button.offsetWidth;
        button.classList.add("added");
      }
      renderCart();
      showToast(`${button.dataset.name} added to your demo order`);
    });
  });

  function showOverlay() {
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add("open"));
    document.body.classList.add("modal-open");
  }

  function hideOverlay() {
    overlay.classList.remove("open");
    window.setTimeout(() => { overlay.hidden = true; }, reduceMotion ? 0 : 300);
    document.body.classList.remove("modal-open");
  }

  function closeLayers({ restoreFocus = true } = {}) {
    cartPanel.classList.remove("open");
    cartPanel.setAttribute("aria-hidden", "true");
    checkoutDialog.classList.remove("open");
    checkoutDialog.setAttribute("aria-hidden", "true");
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    hideOverlay();
    if (restoreFocus && lastFocused) lastFocused.focus();
  }

  function openCart() {
    lastFocused = document.activeElement;
    showOverlay();
    cartPanel.classList.add("open");
    cartPanel.setAttribute("aria-hidden", "false");
    $("#cartClose").focus();
  }

  $("#cartOpen").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", () => closeLayers());
  overlay.addEventListener("click", () => closeLayers());

  $("#checkoutOpen").addEventListener("click", () => {
    cartPanel.classList.remove("open");
    cartPanel.setAttribute("aria-hidden", "true");
    checkoutDialog.classList.add("open");
    checkoutDialog.setAttribute("aria-hidden", "false");
    $("#checkoutClose").focus();
  });
  $("#checkoutClose").addEventListener("click", () => closeLayers());
  $$(".payment-option").forEach((option) => option.addEventListener("click", () => {
    $$(".payment-option").forEach((item) => item.classList.remove("active"));
    option.classList.add("active");
  }));
  $("#placeOrder").addEventListener("click", () => {
    const payment = $(".payment-option.active").dataset.payment;
    $("#checkoutContent").innerHTML = `<div class="success"><div class="success-mark" aria-hidden="true">✓</div><h3>Demo order complete</h3><p>Your sample order was shown with <strong>${payment}</strong>.<br>No order or payment was processed.</p><button class="button button-copper" type="button" id="demoDone">Done</button></div>`;
    $("#demoDone").addEventListener("click", () => {
      cart.length = 0;
      renderCart();
      closeLayers();
    });
  });

  $$(".gallery-item").forEach((item) => item.addEventListener("click", () => {
    lastFocused = item;
    $("#lightboxImage").src = item.dataset.image;
    $("#lightboxImage").alt = item.dataset.alt;
    showOverlay();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    $("#lightboxClose").focus();
  }));
  $("#lightboxClose").addEventListener("click", () => closeLayers());

  $$('[data-demo-action]').forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(`${link.dataset.demoAction} is a demo placeholder—replace it before launch.`);
  }));

  function trapFocus(event) {
    if (event.key !== "Tab") return;
    const activeLayer = [checkoutDialog, lightbox, cartPanel].find((layer) => layer.classList.contains("open"));
    if (!activeLayer) return;
    const focusable = $$('button:not([disabled]), a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])', activeLayer);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (mobileMenu.classList.contains("open")) setMobileMenu(false);
      if ([cartPanel, checkoutDialog, lightbox].some((layer) => layer.classList.contains("open"))) closeLayers();
    }
    trapFocus(event);
  });
})();
