const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxGaYFJhEseRYp9pJzjGJDAgpzE24YDlAx3LNdbGZxRCjnN9lFVop0tepaWEt7wM-nM/exec';

// ===== SIZE CHART DATA =====
const STD_CHART_HEADERS = ['Размер', 'Грудь (см)', 'Талия (см)', 'Бёдра (см)'];
const STD_MEN_ROWS = [
  ['XS',  '80–84',   '66–70',  '84–88'],
  ['S',   '84–88',   '70–74',  '88–92'],
  ['M',   '88–92',   '74–78',  '92–96'],
  ['L',   '92–96',   '78–82',  '96–100'],
  ['XL',  '96–100',  '82–86',  '100–104'],
  ['XXL', '100–104', '86–90',  '104–108'],
];
const STD_WOMEN_ROWS = [
  ['XS',  '76–80',  '58–62',  '82–86'],
  ['S',   '80–84',  '62–66',  '86–90'],
  ['M',   '84–88',  '66–70',  '90–94'],
  ['L',   '88–92',  '70–74',  '94–98'],
  ['XL',  '92–96',  '74–78',  '98–102'],
  ['XXL', '96–100', '78–82',  '102–106'],
];

// Generate SVG placeholder (replace with real product photos in images/ folder)
function makeThumb(bg, fg, label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750">
    <rect width="600" height="750" fill="${bg}"/>
    <circle cx="300" cy="375" r="220" stroke="${fg}" stroke-width="1" fill="none" opacity="0.08"/>
    <circle cx="300" cy="375" r="160" stroke="${fg}" stroke-width="1" fill="none" opacity="0.08"/>
    <circle cx="300" cy="375" r="100" stroke="${fg}" stroke-width="1" fill="none" opacity="0.08"/>
    <text x="300" y="355" font-family="Arial Black, Arial" font-size="120" font-weight="900" fill="${fg}" text-anchor="middle" dominant-baseline="middle" opacity="0.85">7K</text>
    <text x="300" y="455" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="${fg}" text-anchor="middle" dominant-baseline="middle" opacity="0.4" letter-spacing="8">${label}</text>
    <text x="300" y="710" font-family="Arial, sans-serif" font-size="11" fill="${fg}" text-anchor="middle" opacity="0.2" letter-spacing="3">ЗАМЕНИТЕ НА ФОТО</text>
  </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}

const products = [
  {
    id: 'shorts-men',
    name: 'Мужские шорты',
    category: 'Спортивные шорты · Мужские',
    badge: null,
    gender: 'men',
    price: '3 490 ₸',
    description: 'Лёгкие беговые шорты с эластичным поясом и шнурком. Свободный крой не сковывает движения. Для зала, улицы и любой тренировки.',
    material: 'Состав: 100% полиэстер · Плотность: 130 г/м²',
    images: ['images/shorts-men-front.png', 'images/shorts-men-back.png'],
    colors: [{ name: 'Чёрный', hex: '#111111' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    sizeChartMen:   { headers: STD_CHART_HEADERS, rows: STD_MEN_ROWS },
    sizeChartWomen: null,
  },
  {
    id: 'shorts',
    name: 'Женские шорты',
    category: 'Спортивные шорты · Женские',
    badge: null,
    gender: 'women',
    price: '3 490 ₸',
    description: 'Созданы для тех, кто не останавливается. Цельнокроеный пояс держит форму, эластичная ткань движется вместе с тобой.',
    material: 'Состав: 85% полиэстер, 15% эластан · Плотность: 130 г/м²',
    images: ['images/shorts-front.png', 'images/shorts-back.png'],
    colors: [{ name: 'Чёрный', hex: '#111111' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    sizeChartMen: null,
    sizeChartWomen: {
      headers: ['Размер', 'Талия (см)', 'Бёдра (см)', 'Длина (см)'],
      rows: [
        ['XS',  '60–64', '86–90',   '38'],
        ['S',   '64–68', '90–94',   '40'],
        ['M',   '68–72', '94–98',   '42'],
        ['L',   '72–76', '98–102',  '44'],
        ['XL',  '76–80', '102–106', '46'],
        ['XXL', '80–84', '106–110', '48'],
      ],
    },
  },
  {
    id: 'top',
    name: 'Топ',
    category: 'Спортивный топ',
    badge: 'Новинка',
    gender: 'women',
    badgeNew: true,
    price: '2 990 ₸',
    description: 'Бесшовный топ, который поддерживает и не сдавливает. Для йоги, пилатеса, зала.',
    material: 'Состав: 80% полиамид, 20% эластан · Плотность: 200 г/м²',
    images: [
      makeThumb('#06090F', '#00CADF', 'ТОП'),
      makeThumb('#00CADF', '#06090F', 'BACK'),
      makeThumb('#1C39E0', '#FFFFFF', 'ДЕТАЛЬ'),
    ],
    colors: [
      { name: 'Голубой', hex: '#00CADF' },
      { name: 'Тёмный',  hex: '#0E2841' },
      { name: 'Белый',   hex: '#EEEEEE', border: true },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    sizeChartMen: null,
    sizeChartWomen: {
      headers: ['Размер', 'Грудь (см)', 'Талия (см)', 'Длина (см)'],
      rows: [
        ['XS', '76–80', '58–62', '38'],
        ['S',  '80–84', '62–66', '39'],
        ['M',  '84–88', '66–70', '40'],
        ['L',  '88–92', '70–74', '41'],
        ['XL', '92–96', '74–78', '42'],
      ],
    },
  },
  {
    id: 'hoodie',
    name: 'Худи',
    category: 'Спортивное худи',
    badge: null,
    gender: 'unisex',
    price: '7 990 ₸',
    description: 'После финиша. Перед стартом. Всегда в ходу. Мягкий флис, фирменный принт на груди, свободный крой.',
    material: 'Состав: 65% хлопок, 35% полиэстер · Плотность: 320 г/м²',
    images: ['images/hoodie-yellow.jpg'],
    colors: [
      { name: 'Жёлтый', hex: '#F5E97A', images: ['images/hoodie-yellow.jpg'] },
      { name: 'Графит',  hex: '#2B2D3A', images: ['images/hoodie-graphite.jpg'] },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    sizeChartMen:   { headers: STD_CHART_HEADERS, rows: STD_MEN_ROWS },
    sizeChartWomen: { headers: STD_CHART_HEADERS, rows: STD_WOMEN_ROWS },
  },
  {
    id: 'longsleeve',
    name: 'Лонгслив',
    category: 'Рашгард с длинным рукавом',
    badge: null,
    gender: 'unisex',
    price: '4 990 ₸',
    description: 'Компрессия, которая реально работает. Анатомический крой обнимает мышцы, снижает усталость.',
    material: 'Состав: 88% полиэстер, 12% эластан · Плотность: 180 г/м²',
    images: ['images/longsleeve-graphite-2.png', 'images/longsleeve-graphite-1.png'],
    colors: [
      { name: 'Графит',  hex: '#5A6472', images: ['images/longsleeve-graphite-2.png', 'images/longsleeve-graphite-1.png'] },
      { name: 'Голубой', hex: '#B8D4E8', images: ['images/longsleeve-blue-2.png',     'images/longsleeve-blue-1.png'] },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    sizeChartMen:   { headers: STD_CHART_HEADERS, rows: STD_MEN_ROWS },
    sizeChartWomen: { headers: STD_CHART_HEADERS, rows: STD_WOMEN_ROWS },
  },
];

// ===== MODAL STATE =====
let modalState = { color: null, gender: null, size: null };

// ===== FILTER =====
let activeFilter = 'all';

function setFilter(btn, filter) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCatalog();
}

// ===== RENDER CATALOG =====
function renderCatalog() {
  const grid = document.getElementById('productsGrid');
  const filtered = activeFilter === 'all' ? products
    : activeFilter === 'women' ? products.filter(p => p.gender === 'women')
    : products.filter(p => p.gender === 'men' || p.gender === 'unisex');

  grid.innerHTML = filtered.map(p => `
    <article class="product-card" onclick="openModal('${p.id}')">
      <div class="product-card__img-wrap">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-card__badge${p.badgeNew ? ' product-card__badge--new' : ''}">${p.badge}</span>` : ''}
        <div class="product-card__overlay">
          <button class="product-card__cta">Подробнее</button>
        </div>
      </div>
      <div class="product-card__info">
        <div class="product-card__cat">${p.category}</div>
        <div class="product-card__name">${p.name}</div>
        <div class="product-card__dots">
          ${p.colors.map(c => `<span class="color-dot${c.border ? ' color-dot--bordered' : ''}" style="background:${c.hex}" title="${c.name}"></span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  initReveal();
}

// ===== DETAIL PANEL =====
let currentImages = [];
let currentImgIndex = 0;
let currentProduct = null;

function renderGallery(images) {
  currentImages = images;
  currentImgIndex = 0;
  const imgBox = document.getElementById('detailImgBox');
  imgBox.innerHTML = `
    <img id="modalMainImg" src="${images[0]}" alt="" onclick="openLightbox(currentImgIndex)" title="Нажмите для увеличения">
    ${images.length > 1 ? `
      <button class="gallery__arrow gallery__arrow--prev" onclick="galleryNav(-1)">&#8249;</button>
      <button class="gallery__arrow gallery__arrow--next" onclick="galleryNav(1)">&#8250;</button>
    ` : ''}
  `;
  const thumbsEl = document.getElementById('detailThumbs');
  thumbsEl.innerHTML = images.length > 1 ? images.map((src, i) => `
    <img class="detail-thumb ${i === 0 ? 'active' : ''}" src="${src}" onclick="goToImg(${i})">
  `).join('') : '';
}

function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  currentProduct = p;
  currentImgIndex = 0;
  modalState = {
    color: p.colors[0].name,
    gender: p.gender === 'unisex' ? null : p.gender,
    size: null,
  };

  const defaultImages = (p.colors[0] && p.colors[0].images) ? p.colors[0].images : p.images;
  renderGallery(defaultImages);

  const colorsHTML = p.colors.map((c, i) =>
    `<button class="color-opt${c.border ? ' white-border' : ''}${i === 0 ? ' active' : ''}"
       style="background:${c.hex}" title="${c.name}"
       data-color-idx="${i}"
       onclick="selectColor(this, '${c.name}')"></button>`
  ).join('');

  let genderHTML;
  if (p.gender === 'men') {
    genderHTML = `
      <div class="modal__section-label">Пол</div>
      <div class="modal__gender">
        <button class="gender-btn active" onclick="selectGender(this,'men')">Мужской</button>
        <button class="gender-btn" disabled>Женский</button>
      </div>`;
  } else if (p.gender === 'women') {
    genderHTML = `
      <div class="modal__section-label">Пол</div>
      <div class="modal__gender">
        <button class="gender-btn" disabled>Мужской</button>
        <button class="gender-btn active" onclick="selectGender(this,'women')">Женский</button>
      </div>`;
  } else {
    genderHTML = `
      <div class="modal__section-label">Пол</div>
      <div class="modal__gender">
        <button class="gender-btn" onclick="selectGender(this,'men')">Мужской</button>
        <button class="gender-btn" onclick="selectGender(this,'women')">Женский</button>
      </div>`;
  }

  const sizesVisible = modalState.gender !== null;
  const sizeChartEnabled = sizesVisible;
  const sizesHTML = p.sizes.map(s =>
    `<button class="size-btn" onclick="selectSize(this)">${s}</button>`
  ).join('');

  document.getElementById('detailInfo').innerHTML = `
    <h2 class="modal__name">${p.name}</h2>
    <div class="modal__price">${p.price}</div>
    <div class="modal__material">${p.material}</div>
    <div class="modal__section-label">Цвет <span id="colorLabel">${p.colors[0].name}</span></div>
    <div class="modal__colors">${colorsHTML}</div>
    ${genderHTML}
    <div class="modal__section-label" id="sizeSectionLabel"${sizesVisible ? '' : ' style="display:none"'}>Размер</div>
    <div class="modal__sizes" id="sizesContainer"${sizesVisible ? '' : ' style="display:none"'}>${sizesHTML}</div>
    <div class="modal__order">
      <div class="modal__order-buttons">
        <button class="btn btn--order btn--order-disabled" id="orderBtn" onclick="openOrderModal()" disabled>Заказать</button>
        <button class="btn btn--size-chart${sizeChartEnabled ? '' : ' btn--size-chart-disabled'}" id="sizeChartBtn" onclick="openLightbox(-1)"${sizeChartEnabled ? '' : ' disabled'}>Размерная сетка</button>
      </div>
      <p class="modal__order-note">Мы свяжемся с вами для уточнения деталей заказа</p>
    </div>
  `;

  const panel = document.getElementById('detailPanel');
  panel.classList.add('open');
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);

  updateStickyOrder();
}

function closeDetail() {
  document.getElementById('detailPanel').classList.remove('open');
  const sticky = document.getElementById('mobileStickyOrder');
  if (sticky) sticky.style.display = 'none';
}

function galleryNav(dir) {
  currentImgIndex = (currentImgIndex + dir + currentImages.length) % currentImages.length;
  goToImg(currentImgIndex);
}

function goToImg(index) {
  currentImgIndex = index;
  const main = document.getElementById('modalMainImg');
  if (main) {
    main.src = currentImages[index];
    main.onclick = () => openLightbox(index);
  }
  document.querySelectorAll('.detail-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

function openLightbox(index) {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbChart = document.getElementById('lightboxChart');

  if (index === -1) {
    lb.querySelectorAll('.lb__arrow').forEach(a => a.style.display = 'none');
    lbImg.style.display = 'none';
    lbChart.style.display = 'block';

    const chart = modalState.gender === 'men'
      ? currentProduct?.sizeChartMen
      : currentProduct?.sizeChartWomen;

    if (chart) {
      const title = modalState.gender === 'men' ? 'Мужской размерный ряд' : 'Женский размерный ряд';
      lbChart.innerHTML = `
        <div class="lb__chart-section">
          <div class="lb__chart-title">${title}</div>
          <table class="lb__chart-table">
            <thead><tr>${chart.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${chart.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        </div>
      `;
    } else {
      lbChart.innerHTML = '<p style="color:var(--gray-4);text-align:center;padding:40px 0">Размерная сетка недоступна</p>';
    }
  } else {
    lbImg.src = currentImages[index];
    lbImg.style.display = 'block';
    lbChart.style.display = 'none';
    lb.querySelectorAll('.lb__arrow').forEach(a => a.style.display = '');
    currentImgIndex = index;
  }
  lb.classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

function lightboxNav(dir) {
  currentImgIndex = (currentImgIndex + dir + currentImages.length) % currentImages.length;
  document.getElementById('lightboxImg').src = currentImages[currentImgIndex];
  goToImg(currentImgIndex);
}

function selectColor(btn, name) {
  document.querySelectorAll('.color-opt').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  const label = document.getElementById('colorLabel');
  if (label) label.textContent = name;
  modalState.color = name;
  if (currentProduct) {
    const idx = parseInt(btn.dataset.colorIdx);
    const color = currentProduct.colors[idx];
    if (color && color.images && color.images.length) renderGallery(color.images);
  }
  updateOrderButton();
}

function selectGender(btn, gender) {
  document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const prevGender = modalState.gender;
  modalState.gender = gender;

  const sizesContainer = document.getElementById('sizesContainer');
  const sizeSectionLabel = document.getElementById('sizeSectionLabel');
  if (sizesContainer) sizesContainer.style.display = '';
  if (sizeSectionLabel) sizeSectionLabel.style.display = '';

  const sizeChartBtn = document.getElementById('sizeChartBtn');
  if (sizeChartBtn) {
    sizeChartBtn.disabled = false;
    sizeChartBtn.classList.remove('btn--size-chart-disabled');
  }

  if (prevGender !== gender) {
    modalState.size = null;
    document.querySelectorAll('.size-btn').forEach(s => s.classList.remove('active'));
  }

  updateOrderButton();
}

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  modalState.size = btn.textContent;
  updateOrderButton();
}

function updateOrderButton() {
  const ready = !!(modalState.color && modalState.gender && modalState.size);
  [document.getElementById('orderBtn'), document.getElementById('mobileStickyOrderBtn')].forEach(btn => {
    if (!btn) return;
    btn.disabled = !ready;
    btn.classList.toggle('btn--order-disabled', !ready);
  });
}

// ===== ORDER MODAL =====
function openOrderModal() {
  if (!currentProduct || !modalState.color || !modalState.gender || !modalState.size) return;
  const p = currentProduct;
  const genderLabel = modalState.gender === 'men' ? 'Мужской' : 'Женский';

  document.getElementById('orderModalContent').innerHTML = `
    <button class="order-modal__close" onclick="closeOrderModal()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </button>
    <h3 class="order-modal__title">Оформление заказа</h3>
    <div class="order-modal__summary">
      <div class="order-modal__summary-row"><span class="om-label">Товар</span><span class="om-value">${p.name}</span></div>
      <div class="order-modal__summary-row"><span class="om-label">Цвет</span><span class="om-value">${modalState.color}</span></div>
      <div class="order-modal__summary-row"><span class="om-label">Пол</span><span class="om-value">${genderLabel}</span></div>
      <div class="order-modal__summary-row"><span class="om-label">Размер</span><span class="om-value">${modalState.size}</span></div>
      <div class="order-modal__summary-row"><span class="om-label">Цена</span><span class="om-value om-price">${p.price}</span></div>
    </div>
    <div class="order-modal__form">
      <div class="form-field">
        <label for="om-name">Имя и фамилия</label>
        <input type="text" id="om-name" placeholder="Иван Иванов" oninput="validateOrderForm()">
      </div>
      <div class="form-field">
        <label for="om-phone">Номер телефона</label>
        <input type="tel" id="om-phone" placeholder="+7 777 123 45 67" oninput="validateOrderForm()">
      </div>
      <div class="form-field">
        <label for="om-telegram">Ник в Telegram</label>
        <input type="text" id="om-telegram" placeholder="@username" oninput="validateOrderForm()">
      </div>
      <button class="btn btn--order btn--order-disabled" id="om-submit" onclick="submitOrder()" disabled>Подтвердить заказ</button>
    </div>
  `;

  document.getElementById('orderModal').classList.add('active');
}

function closeOrderModal() {
  document.getElementById('orderModal').classList.remove('active');
}

function validateOrderForm() {
  const name     = (document.getElementById('om-name')?.value     || '').trim();
  const phone    = (document.getElementById('om-phone')?.value    || '').replace(/[\s\-\(\)]/g, '');
  const telegram = (document.getElementById('om-telegram')?.value || '').trim();

  const nameValid     = name.length >= 2;
  const phoneValid    = /^(\+7|[78])\d{10}$/.test(phone);
  const telegramValid = telegram.startsWith('@') && telegram.length >= 3;

  const btn = document.getElementById('om-submit');
  if (btn) {
    const valid = nameValid && phoneValid && telegramValid;
    btn.disabled = !valid;
    btn.classList.toggle('btn--order-disabled', !valid);
  }
}

async function submitOrder() {
  const p           = currentProduct;
  const name        = (document.getElementById('om-name')?.value     || '').trim();
  const phone       = (document.getElementById('om-phone')?.value    || '').trim();
  const telegram    = (document.getElementById('om-telegram')?.value || '').trim();
  const genderLabel = modalState.gender === 'men' ? 'Мужской' : 'Женский';

  const payload = {
    product: p.name,
    color: modalState.color,
    gender: genderLabel,
    size: modalState.size,
    price: p.price,
    name,
    phone,
    telegram,
    timestamp: new Date().toISOString(),
  };

  const submitBtn = document.getElementById('om-submit');
  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Отправка...'; }

  try {
    if (WEBHOOK_URL !== 'YOUR_APPS_SCRIPT_URL') {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors',
      });
    }
  } catch (e) {
    // show success regardless
  }

  document.getElementById('orderModalContent').innerHTML = `
    <div class="order-modal__success">
      <div class="order-modal__success-icon">🎉</div>
      <h3>Спасибо за заказ!</h3>
      <p>Наш менеджер свяжется с вами для решения вопросов по оплате и доставке</p>
      <button class="btn btn--order" onclick="closeOrderModal()">Вернуться в магазин</button>
    </div>
  `;
}

// ===== EVENTS =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('orderModal')?.classList.contains('active')) closeOrderModal();
    else if (document.getElementById('lightbox').classList.contains('active')) closeLightbox();
    else closeDetail();
  }
  if (e.key === 'ArrowLeft')  lightboxNav(-1);
  if (e.key === 'ArrowRight') lightboxNav(1);
});

// ===== SCROLL-REVEAL =====
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('visible');
        observer.unobserve(el.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.product-card, .reveal, .cta-banner__inner > *').forEach(el => {
    observer.observe(el);
  });
}

// ===== INIT =====
renderCatalog();

// ===== TOUCH SWIPE for gallery =====
(function() {
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', e => {
    const box = e.target.closest('.detail-img-box');
    if (!box) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', e => {
    const box = e.target.closest('.detail-img-box');
    if (!box || !currentImages.length) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      galleryNav(dx < 0 ? 1 : -1);
    }
  }, { passive: true });
})();

// ===== MOBILE STICKY ORDER BUTTON =====
function updateStickyOrder() {
  let sticky = document.getElementById('mobileStickyOrder');
  if (!sticky) {
    sticky = document.createElement('div');
    sticky.id = 'mobileStickyOrder';
    sticky.className = 'mobile-sticky-order';
    document.body.appendChild(sticky);
  }
  sticky.innerHTML = `
    <button class="btn btn--order btn--order-disabled" id="mobileStickyOrderBtn" onclick="openOrderModal()" disabled>Заказать</button>
    <button class="btn btn--size-chart" onclick="openLightbox(-1)">Размеры</button>
  `;
  sticky.style.display = 'flex';
}
