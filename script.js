/**
 * KantinKu - Mobile Web Application Logic
 * Pure Vanilla JavaScript
 */

// --- Data Store ---
const menuItems = [
  {
    id: 'nasi-ayam',
    name: 'Nasi Ayam',
    category: 'Makanan',
    price: 18000,
    meta: 'Makanan &middot; tersedia',
    type: 'food',
    description: 'Nasi pulen hangat dengan ayam goreng renyah bumbu kuning, sambal spesial, dan lalapan timun segar.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
        <circle cx="50" cy="50" r="38" fill="#F8FAFC"/>
        <!-- Nasi -->
        <path d="M28 58C28 45 37 36 50 36C55 36 60 38 64 42C67 45 70 51 70 58C70 63 60 66 50 66C38 66 28 63 28 58Z" fill="#F1F5F9"/>
        <ellipse cx="48" cy="50" rx="16" ry="10" fill="#FFFFFF"/>
        <!-- Ayam Goreng -->
        <path d="M52 38C52 33 58 28 66 31C73 34 76 43 72 50C68 56 58 56 54 48C52 44 52 41 52 38Z" fill="#93532B"/>
        <path d="M55 40C55 36 60 32 65 34C70 36 72 42 69 47C66 51 59 50 56 45C55 43 55 41 55 40Z" fill="#B46533"/>
        <ellipse cx="61" cy="40" rx="4" ry="2.5" fill="#C97B45"/>
        <circle cx="57" cy="44" r="1" fill="#FFFFFF" opacity="0.6"/>
        <circle cx="63" cy="38" r="1" fill="#FFFFFF" opacity="0.6"/>
        <!-- Sambal -->
        <circle cx="36" cy="45" r="7" fill="#DC2626"/>
        <circle cx="38" cy="44" r="5" fill="#EF4444"/>
        <circle cx="35" cy="46" r="1.5" fill="#FDE047"/>
        <circle cx="39" cy="43" r="1" fill="#B91C1C"/>
        <!-- Timun -->
        <ellipse cx="42" cy="60" rx="7" ry="4" transform="rotate(-15 42 60)" fill="#22C55E"/>
        <ellipse cx="42" cy="60" rx="4" ry="2" transform="rotate(-15 42 60)" fill="#86EFAC"/>
      </svg>
    `
  },
  {
    id: 'es-teh',
    name: 'Es Teh',
    category: 'Minuman',
    price: 5000,
    meta: 'Minuman &middot; tersedia',
    type: 'drink',
    description: 'Es teh manis segar diseduh dari daun teh melati asli berkualitas dengan takaran manis pas.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Cup Body -->
        <path d="M30 25L36 82C36.5 86 40 89 44 89H56C60 89 63.5 86 64 82L70 25H30Z" fill="#C26A28"/>
        <path d="M32 30L37 80C37.3 83 40 85 43 85H57C60 85 62.7 83 63 80L68 30H32Z" fill="#A4551B"/>
        <!-- Ice Tea Gradient Highlight -->
        <path d="M34 32L38 78C38.2 80 40 82 42 82H48L44 32H34Z" fill="#B86222" opacity="0.8"/>
        <!-- Ice Cubes -->
        <rect x="42" y="38" width="13" height="13" rx="3" transform="rotate(12 42 38)" fill="#FFFFFF" fill-opacity="0.5" stroke="#FFFFFF" stroke-opacity="0.7"/>
        <rect x="46" y="55" width="11" height="11" rx="2.5" transform="rotate(-10 46 55)" fill="#FFFFFF" fill-opacity="0.45" stroke="#FFFFFF" stroke-opacity="0.6"/>
        <!-- Cup Rim / Lid -->
        <rect x="27" y="21" width="46" height="5" rx="2.5" fill="#4B5563"/>
        <!-- Green Straw -->
        <path d="M52 10L47 21H51L56 10H52Z" fill="#15803D"/>
        <path d="M51 21L43 80H46L54 21H51Z" fill="#16A34A" opacity="0.85"/>
        <path d="M52 7C50.5 7 49 8.5 49 10H53C53 9.5 53.5 9 54 9H57L58 7H52Z" fill="#15803D"/>
      </svg>
    `
  },
  {
    id: 'nasi-goreng',
    name: 'Nasi Goreng',
    category: 'Makanan',
    price: 16000,
    meta: 'Makanan &middot; tersedia',
    type: 'food',
    description: 'Nasi goreng racikan bumbu khas kantin dengan suwiran ayam, telur ceplok mata sapi, dan kerupuk.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
        <circle cx="50" cy="50" r="38" fill="#F8FAFC"/>
        <!-- Fried Rice Mound -->
        <ellipse cx="50" cy="53" rx="26" ry="16" fill="#C26A28"/>
        <ellipse cx="49" cy="51" rx="23" ry="13" fill="#D97706"/>
        <!-- Telur Mata Sapi -->
        <ellipse cx="48" cy="46" rx="13" ry="9" fill="#FFFFFF"/>
        <circle cx="48" cy="46" r="5" fill="#F59E0B"/>
        <circle cx="46" cy="44" r="1.5" fill="#FCD34D"/>
        <!-- Kerupuk -->
        <circle cx="68" cy="44" r="7" fill="#FDE68A" stroke="#F59E0B" stroke-dasharray="2 2"/>
        <!-- Taburan Daun Bawang -->
        <circle cx="40" cy="57" r="1.5" fill="#15803D"/>
        <circle cx="58" cy="56" r="1.5" fill="#15803D"/>
      </svg>
    `
  },
  {
    id: 'ayam-geprek',
    name: 'Ayam Geprek',
    category: 'Makanan',
    price: 17000,
    meta: 'Makanan &middot; tersedia',
    type: 'food',
    description: 'Ayam krispi digeprek langsung dengan cabai rawit pedas mantap level 1 - 5 sesuai selera.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
        <circle cx="50" cy="50" r="38" fill="#F8FAFC"/>
        <!-- Ayam Krispi -->
        <path d="M34 50C32 40 40 33 50 33C60 33 68 41 66 52C64 61 54 65 44 64C36 62 34 56 34 50Z" fill="#B45309"/>
        <path d="M36 50C35 43 41 36 50 36C57 36 64 42 62 50C60 57 52 61 44 60C38 59 36 55 36 50Z" fill="#D97706"/>
        <!-- Sambal Rawit Geprek Bawang -->
        <circle cx="45" cy="44" r="4" fill="#DC2626"/>
        <circle cx="53" cy="42" r="5" fill="#EF4444"/>
        <circle cx="49" cy="48" r="4.5" fill="#DC2626"/>
        <circle cx="58" cy="49" r="3" fill="#EF4444"/>
        <circle cx="42" cy="49" r="2.5" fill="#FEF08A"/>
        <circle cx="52" cy="47" r="1.5" fill="#FEF08A"/>
      </svg>
    `
  },
  {
    id: 'kopi-susu',
    name: 'Kopi Susu Aren',
    category: 'Minuman',
    price: 10000,
    meta: 'Minuman &middot; tersedia',
    type: 'drink',
    description: 'Perpaduan espresso robusta mantap dengan susu segar lembut dan gula aren murni.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 26L37 82C37.5 86 40.5 89 44 89H56C59.5 89 62.5 86 63 82L68 26H32Z" fill="#3E2723"/>
        <!-- Susu Layer -->
        <path d="M34 44L36 66C39 67 43 65 50 67C57 69 61 67 64 66L66 44H34Z" fill="#F5F5F4"/>
        <!-- Kopi Layer -->
        <path d="M33 28L34 45C38 46 42 44 50 46C58 48 62 46 66 45L67 28H33Z" fill="#5D4037"/>
        <!-- Gula Aren Bottom Layer -->
        <path d="M37 72L37.5 82C38 85 40.5 87 44 87H56C59.5 87 62 85 62.5 82L63 72C60 73 56 71 50 72C44 73 40 71 37 72Z" fill="#2E1C14"/>
        <!-- Rim -->
        <rect x="28" y="22" width="44" height="5" rx="2.5" fill="#4B5563"/>
        <path d="M51 12L47 22H51L55 12H51Z" fill="#78716C"/>
      </svg>
    `
  },
  {
    id: 'es-jeruk',
    name: 'Es Jeruk',
    category: 'Minuman',
    price: 6000,
    meta: 'Minuman &middot; tersedia',
    type: 'drink',
    description: 'Perasan jeruk asli segar kaya vitamin C dengan es batu menyegarkan dahaga siang hari.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 25L36 82C36.5 86 40 89 44 89H56C60 89 63.5 86 64 82L70 25H30Z" fill="#F97316"/>
        <path d="M32 30L37 80C37.3 83 40 85 43 85H57C60 85 62.7 83 63 80L68 30H32Z" fill="#EA580C"/>
        <!-- Jeruk Slice -->
        <circle cx="50" cy="36" r="11" fill="#FDBA74" stroke="#F97316" stroke-width="2"/>
        <circle cx="50" cy="36" r="8" fill="#FFEDD5"/>
        <path d="M50 28V44M42 36H58M44 30L56 42M44 42L56 30" stroke="#F97316" stroke-width="1.5"/>
        <!-- Straw -->
        <rect x="27" y="21" width="46" height="5" rx="2.5" fill="#4B5563"/>
        <path d="M52 10L47 21H51L56 10H52Z" fill="#EAB308"/>
      </svg>
    `
  }
];

// App State
let activeTab = 'menu';
let activeCategory = 'Semua';
let searchQuery = '';
let cart = {}; // { itemId: quantity }
let orders = []; // List of placed orders
let userWallet = 45000;

// Format Currency Utility
function formatRupiah(amount) {
  return 'Rp' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Update live time in status bar
function updateStatusBarTime() {
  const timeElem = document.getElementById('status-time');
  if (timeElem) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElem.textContent = `${hours}.${minutes}`;
  }
}

// --- DOM References ---
const menuListEl = document.getElementById('menu-list');
const categoryChipsEl = document.getElementById('category-chips');
const searchInput = document.getElementById('search-input');
const searchClearBtn = document.getElementById('search-clear-btn');
const cartBadge = document.getElementById('cart-badge');
const headerLeftBtn = document.getElementById('header-left-btn');
const toastEl = document.getElementById('toast-notice');
const cartDrawer = document.getElementById('cart-drawer');
const modalOverlay = document.getElementById('modal-overlay');
const infoDrawer = document.getElementById('info-drawer');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartTotalEl = document.getElementById('cart-total');
const cartCheckoutBtn = document.getElementById('cart-checkout-btn');

// --- Render Menu Items ---
function renderMenu() {
  if (!menuListEl) return;

  // Filter items
  const filtered = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'Semua' || item.category === activeCategory;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const countEl = document.getElementById('item-count-text');
  if (countEl) {
    countEl.textContent = `${filtered.length} menu`;
  }

  if (filtered.length === 0) {
    menuListEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <div class="empty-title">Menu tidak ditemukan</div>
        <div class="empty-desc">Coba cari dengan kata kunci lain atau pilih kategori Semua.</div>
        <button class="empty-action-btn" onclick="resetFilter()">Tampilkan Semua</button>
      </div>
    `;
    return;
  }

  menuListEl.innerHTML = filtered.map(item => {
    const itemQtyInCart = cart[item.id] || 0;
    const thumbClass = item.type === 'food' ? 'thumb-food' : 'thumb-drink';

    return `
      <div class="menu-card" data-id="${item.id}">
        <div class="item-thumb ${thumbClass}">
          ${item.svgIcon}
          ${itemQtyInCart > 0 ? `<div class="qty-badge">${itemQtyInCart}</div>` : ''}
        </div>
        <div class="item-details">
          <div class="item-name">${item.name}</div>
          <div class="item-meta">
            <span>${item.meta}</span>
          </div>
          <div class="item-price">${formatRupiah(item.price)}</div>
        </div>
        <button class="add-btn" onclick="addToCart('${item.id}', event)" title="Tambah ke Keranjang" aria-label="Tambah ${item.name}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
    `;
  }).join('');
}

// Reset filter back to default
window.resetFilter = function() {
  activeCategory = 'Semua';
  searchQuery = '';
  if (searchInput) searchInput.value = '';
  if (searchClearBtn) searchClearBtn.classList.remove('visible');
  updateCategoryUI();
  updateHeaderLeftIcon();
  renderMenu();
};

// --- Category Handling ---
function setupCategoryChips() {
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      activeCategory = chip.getAttribute('data-category');
      updateCategoryUI();
      updateHeaderLeftIcon();
      renderMenu();
    });
  });
}

function updateCategoryUI() {
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    const cat = chip.getAttribute('data-category');
    if (cat === activeCategory) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}

// Match the screenshot: when category is NOT "Semua", show Back Arrow ← instead of Hamburger ☰
function updateHeaderLeftIcon() {
  if (!headerLeftBtn) return;
  if (activeCategory !== 'Semua') {
    // Show back button
    headerLeftBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    `;
    headerLeftBtn.setAttribute('title', 'Kembali ke Semua');
    headerLeftBtn.setAttribute('aria-label', 'Kembali ke Semua');
  } else {
    // Show hamburger menu
    headerLeftBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    `;
    headerLeftBtn.setAttribute('title', 'Menu Kantin');
    headerLeftBtn.setAttribute('aria-label', 'Menu Kantin');
  }
}

// Header left button click handler
if (headerLeftBtn) {
  headerLeftBtn.addEventListener('click', () => {
    if (activeCategory !== 'Semua') {
      // If in filtered state, go back to "Semua"
      activeCategory = 'Semua';
      updateCategoryUI();
      updateHeaderLeftIcon();
      renderMenu();
    } else {
      // If in "Semua", toggle sidebar info drawer
      toggleInfoDrawer();
    }
  });
}

// --- Search Handling ---
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    if (searchClearBtn) {
      if (searchQuery.length > 0) {
        searchClearBtn.classList.add('visible');
      } else {
        searchClearBtn.classList.remove('visible');
      }
    }
    renderMenu();
  });
}

if (searchClearBtn) {
  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.classList.remove('visible');
    renderMenu();
    searchInput.focus();
  });
}

// --- Cart Management ---
window.addToCart = function(itemId, event) {
  if (event) event.stopPropagation();

  cart[itemId] = (cart[itemId] || 0) + 1;
  const item = menuItems.find(m => m.id === itemId);

  updateCartBadge();
  renderMenu();
  showToast(`${item.name} dimasukkan ke keranjang`);
};

window.decreaseCart = function(itemId) {
  if (cart[itemId]) {
    cart[itemId] -= 1;
    if (cart[itemId] <= 0) {
      delete cart[itemId];
    }
    updateCartBadge();
    renderMenu();
    renderCartDrawer();
  }
};

window.increaseCart = function(itemId) {
  cart[itemId] = (cart[itemId] || 0) + 1;
  updateCartBadge();
  renderMenu();
  renderCartDrawer();
};

function getCartCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function getCartSubtotal() {
  let subtotal = 0;
  for (const [id, qty] of Object.entries(cart)) {
    const item = menuItems.find(m => m.id === id);
    if (item) {
      subtotal += item.price * qty;
    }
  }
  return subtotal;
}

function updateCartBadge() {
  const count = getCartCount();
  if (cartBadge) {
    if (count > 0) {
      cartBadge.textContent = count > 99 ? '99+' : count;
      cartBadge.classList.add('show');
    } else {
      cartBadge.classList.remove('show');
    }
  }
}

// Show Toast
let toastTimeout;
function showToast(message) {
  if (!toastEl) return;
  toastEl.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toastEl.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2200);
}

// Cart Drawer Interaction
window.openCart = function() {
  renderCartDrawer();
  if (cartDrawer && modalOverlay) {
    cartDrawer.classList.add('active');
    modalOverlay.classList.add('active');
  }
};

window.closeCart = function() {
  if (cartDrawer && modalOverlay) {
    cartDrawer.classList.remove('active');
    if (!infoDrawer.classList.contains('active')) {
      modalOverlay.classList.remove('active');
    }
  }
};

function renderCartDrawer() {
  if (!cartItemsContainer) return;
  const itemIds = Object.keys(cart);

  if (itemIds.length === 0) {
    cartItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 30px 10px; color: var(--text-muted);">
        <p style="font-size: 15px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Keranjang Masih Kosong</p>
        <p style="font-size: 13px;">Pilih menu makanan atau minuman favoritmu terlebih dahulu.</p>
      </div>
    `;
    if (cartSubtotalEl) cartSubtotalEl.textContent = 'Rp0';
    if (cartTotalEl) cartTotalEl.textContent = 'Rp0';
    if (cartCheckoutBtn) {
      cartCheckoutBtn.disabled = true;
      cartCheckoutBtn.style.opacity = '0.5';
      cartCheckoutBtn.style.cursor = 'not-allowed';
      cartCheckoutBtn.textContent = 'Keranjang Kosong';
    }
    return;
  }

  cartItemsContainer.innerHTML = itemIds.map(id => {
    const item = menuItems.find(m => m.id === id);
    const qty = cart[id];
    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${formatRupiah(item.price * qty)}</p>
        </div>
        <div class="cart-item-stepper">
          <button class="stepper-btn" onclick="decreaseCart('${id}')" title="Kurangi">&minus;</button>
          <span class="stepper-value">${qty}</span>
          <button class="stepper-btn" onclick="increaseCart('${id}')" title="Tambah">+</button>
        </div>
      </div>
    `;
  }).join('');

  const subtotal = getCartSubtotal();
  const fee = 1000; // Biaya layanan/kemasan
  const total = subtotal + fee;

  if (cartSubtotalEl) cartSubtotalEl.textContent = formatRupiah(subtotal);
  if (cartTotalEl) cartTotalEl.textContent = formatRupiah(total);

  if (cartCheckoutBtn) {
    cartCheckoutBtn.disabled = false;
    cartCheckoutBtn.style.opacity = '1';
    cartCheckoutBtn.style.cursor = 'pointer';
    cartCheckoutBtn.textContent = `Pesan Sekarang \u2022 ${formatRupiah(total)}`;
  }
}

// Checkout action
window.checkoutOrder = function() {
  const count = getCartCount();
  if (count === 0) return;

  const subtotal = getCartSubtotal();
  const fee = 1000;
  const total = subtotal + fee;

  // Generate randomized order ticket
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const queueCode = 'A-' + Math.floor(10 + Math.random() * 90);
  
  const orderData = {
    id: `KTK-${randomNum}`,
    queueCode: queueCode,
    date: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    items: Object.entries(cart).map(([id, qty]) => {
      const item = menuItems.find(m => m.id === id);
      return { name: item.name, price: item.price, qty: qty };
    }),
    subtotal: subtotal,
    fee: fee,
    total: total,
    status: 'Sedang Disiapkan'
  };

  orders.unshift(orderData); // Add to beginning
  cart = {}; // Clear cart
  updateCartBadge();
  renderMenu();
  closeCart();

  showToast('Pesanan berhasil dibuat!');

  // Switch to Pesanan Tab
  switchTab('pesanan');
};

// --- Bottom Navigation Tab Switching ---
window.switchTab = function(tabName) {
  activeTab = tabName;

  // Update nav item buttons
  const navBtns = document.querySelectorAll('.nav-item');
  navBtns.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Switch Tab View
  const tabViews = document.querySelectorAll('.tab-view');
  tabViews.forEach(view => {
    if (view.id === `view-${tabName}`) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });

  if (tabName === 'pesanan') {
    renderPesananView();
  } else if (tabName === 'akun') {
    renderAkunView();
  }
};

// Render Pesanan (Orders) View
function renderPesananView() {
  const ordersListEl = document.getElementById('orders-list');
  if (!ordersListEl) return;

  if (orders.length === 0) {
    ordersListEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <div class="empty-title">Pesanan Kosong</div>
        <div class="empty-desc">Belum ada pesanan aktif. Pesan dulu makanan lezatmu agar siap saat jeda kuliah!</div>
        <button class="empty-action-btn" onclick="switchTab('menu')">Lihat Menu</button>
      </div>
    `;
    return;
  }

  ordersListEl.innerHTML = orders.map((order, index) => `
    <div class="order-card">
      <div class="order-header">
        <span class="order-code-badge">${order.id} &bull; ${order.date}</span>
        <span class="order-status ${index === 0 ? '' : 'ready'}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          ${order.status}
        </span>
      </div>

      <div class="order-pickup-box">
        <div class="pickup-title">Nomor Antrean Pengambilan</div>
        <div class="pickup-number">${order.queueCode}</div>
        <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;">Tunjukkan nomor ini di kasir Kantin Kampus</div>
      </div>

      <div style="margin-top: 14px; margin-bottom: 8px; font-weight: 700; font-size: 13px;">Daftar Menu:</div>
      <div class="order-items-list">
        ${order.items.map(it => `
          <div class="order-item-row">
            <span><span class="order-item-qty">${it.qty}x</span> ${it.name}</span>
            <span style="font-weight: 600;">${formatRupiah(it.price * it.qty)}</span>
          </div>
        `).join('')}
      </div>

      <div class="summary-row total">
        <span>Total Pembayaran</span>
        <span style="color: var(--primary);">${formatRupiah(order.total)}</span>
      </div>
    </div>
  `).join('');
}

// Render Akun View
function renderAkunView() {
  const walletBalanceEl = document.getElementById('user-wallet-balance');
  if (walletBalanceEl) {
    walletBalanceEl.textContent = formatRupiah(userWallet);
  }
}

// Simulate Top Up KantinPay
window.topUpKantinPay = function() {
  const nominal = 20000;
  userWallet += nominal;
  renderAkunView();
  showToast(`Top up ${formatRupiah(nominal)} berhasil!`);
};

// Promo code handler
window.usePromoCode = function(code, discountText) {
  navigator.clipboard?.writeText(code).catch(() => {});
  showToast(`Kode "${code}" disalin! Gunakan saat bayar.`);
};

// Hamburger Side Drawer
function toggleInfoDrawer() {
  if (infoDrawer && modalOverlay) {
    const isOpen = infoDrawer.classList.contains('active');
    if (isOpen) {
      infoDrawer.classList.remove('active');
      modalOverlay.classList.remove('active');
    } else {
      infoDrawer.classList.add('active');
      modalOverlay.classList.add('active');
    }
  }
}

window.closeInfoDrawer = function() {
  if (infoDrawer && modalOverlay) {
    infoDrawer.classList.remove('active');
    modalOverlay.classList.remove('active');
  }
};

// Overlay click to close open drawer or cart
if (modalOverlay) {
  modalOverlay.addEventListener('click', () => {
    closeCart();
    closeInfoDrawer();
  });
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  setupCategoryChips();
  renderMenu();
  updateStatusBarTime();
  setInterval(updateStatusBarTime, 30000);
});
