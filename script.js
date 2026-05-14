const products = [
  {
    id: 'shorts-men',
    name: 'Мужские шорты',
    category: 'Спортивные шорты · Мужские',
    badge: null,
    gender: 'men',
    description: 'Лёгкие беговые шорты с эластичным поясом и шнурком. Свободный крой не сковывает движения. Для зала, улицы и любой тренировки.',
    material: 'Состав: 100% полиэстер · Плотность: 130 г/м²',
    images: [
      'images/shorts-men-front.png',
      'images/shorts-men-back.png',
    ],
    colors: [
      { name: 'Чёрный', hex: '#111111' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    sizeChartImage: 'images/shorts-men-size-chart.jpg',
  },
  {
    id: 'shorts',
    name: 'Женские шорты',
    category: 'Спортивные шорты · Женские',
    badge: null,
    gender: 'women',
    description: 'Созданы для тех, кто не останавливается. Цельнокроеный пояс держит форму, эластичная ткань движется вместе с тобой. Твоя скорость — наша разработка.',
    material: 'Состав: 85% полиэстер, 15% эластан · Плотность: 130 г/м²',
    images: [
      'images/shorts-front.png',
      'images/shorts-back.png',
    ],
    colors: [
      { name: 'Чёрный', hex: '#111111' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    sizeChartImage: 'images/shorts-size-chart.jpg',
    sizeChart: {
      headers: ['Размер', 'Талия (см)', 'Бёдра (см)', 'Длина (см)'],
      rows: [
        ['XS', '60–64', '86–90',  '38'],
        ['S',  '64–68', '90–94',  '40'],
        ['M',  '68–72', '94–98',  '42'],
        ['L',  '72–76', '98–102', '44'],
        ['XL', '76–80', '102–106','46'],
        ['XXL','80–84', '106–110','48'],
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
    description: 'Бесшовный топ, который поддерживает и не сдавливает. Для йоги, пилатеса, зала — везде выглядит и ощущается как надо. Мягко. Уверенно. По-чемпионски.',
    material: 'Состав: 80% полиамид, 20% эластан · Плотность: 200 г/м²',
    images: [
      makeThumb('#06090F', '#00CADF', 'ТОП'),
      makeThumb('#00CADF', '#06090F', 'BACK'),
      makeThumb('#1C39E0', '#FFFFFF', 'ДЕТАЛЬ'),
    ],
    colors: [
      { name: 'Голубой', hex: '#00CADF' },
      { name: 'Тёмный', hex: '#0E2841' },
      { name: 'Белый', hex: '#EEEEEE', border: true },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    sizeChart: {
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
    description: 'После финиша. Перед стартом. Всегда в ходу. Мягкий флис, фирменный принт на груди, свободный крой. Разминка начинается с правильного худи.',
    material: 'Состав: 65% хлопок, 35% полиэстер · Плотность: 320 г/м²',
    images: ['images/hoodie-yellow.jpg'],
    colors: [
      { name: 'Жёлтый', hex: '#F5E97A', images: ['images/hoodie-yellow.jpg'] },
      { name: 'Графит', hex: '#2B2D3A', images: ['images/hoodie-graphite.jpg'] },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    sizeChart: {
      headers: ['Размер', 'Грудь (см)', 'Длина (см)', 'Рукав (см)'],
      rows: [
        ['XS–S',   '86–94',  '62–65', '60–62'],
        ['M–L',   '94–102', '65–68', '63–64'],
        ['XL–XXL','102–110','68–72', '65–66'],
      ],
    },
  },
  {
    id: 'longsleeve',
    name: 'Лонгслив',
    category: 'Рашгард с длинным рукавом',
    badge: null,
    gender: 'unisex',
    description: 'Компрессия, которая реально работает. Анатомический крой обнимает мышцы, снижает усталость, держит тепло в прохладную погоду. Тренируйся дольше.',
    material: 'Состав: 88% полиэстер, 12% эластан · Плотность: 180 г/м²',
    images: ['images/longsleeve-graphite-2.png', 'images/longsleeve-graphite-1.png'],
    colors: [
      { name: 'Графит', hex: '#5A6472', images: ['images/longsleeve-graphite-2.png', 'images/longsleeve-graphite-1.png'] },
      { name: 'Голубой', hex: '#B8D4E8', images: ['images/longsleeve-blue-2.png', 'images/longsleeve-blue-1.png'] },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    sizeChartImages: [
      'images/longsleeve-size-chart-men.jpg',
      'images/longsleeve-size-chart-women.jpg',
    ],
  },
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

  // Re-init scroll reveal for new cards
  initReveal();
}

// ===== DETAIL PANEL =====
let currentImages = [];
let currentImgIndex = 0;
let currentSizeChartImage = null;
let currentSizeChartImages = null;
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
  currentSizeChartImage = p.sizeChartImage || null;
  currentSizeChartImages = p.sizeChartImages || null;

  // Use first color's images if defined, else product images
  const defaultImages = (p.colors[0] && p.colors[0].images) ? p.colors[0].images : p.images;
  renderGallery(defaultImages);

  // Info panel
  const colorsHTML = p.colors.map((c, i) =>
    `<button class="color-opt${c.border ? ' white-border' : ''}${i === 0 ? ' active' : ''}"
       style="background:${c.hex}" title="${c.name}"
       data-color-idx="${i}"
       onclick="selectColor(this, '${c.name}')"></button>`
  ).join('');

  const sizesHTML = p.sizes.map(s =>
    `<button class="size-btn" onclick="selectSize(this)">${s}</button>`
  ).join('');

  document.getElementById('detailInfo').innerHTML = `
    <div class="modal__cat">${p.category}</div>
    <h2 class="modal__name">${p.name}</h2>
    <p class="modal__desc">${p.description}</p>
    <div class="modal__material">${p.material}</div>
    <div class="modal__section-label">Цвет <span id="colorLabel">${p.colors[0].name}</span></div>
    <div class="modal__colors">${colorsHTML}</div>
    <div class="modal__section-label">Размер</div>
    <div class="modal__sizes">${sizesHTML}</div>
    <div class="modal__order">
      <div class="modal__order-buttons">
        <button class="btn btn--order" onclick="orderProduct('${p.name}')">Заказать</button>
        <button class="btn btn--size-chart" onclick="openLightbox(-1)">Размерная сетка</button>
      </div>
      <p class="modal__order-note">Мы свяжемся с вами для уточнения деталей заказа</p>
    </div>
  `;

  // Open panel + scroll
  const panel = document.getElementById('detailPanel');
  panel.classList.add('open');
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
}

function closeDetail() {
  document.getElementById('detailPanel').classList.remove('open');
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
    // Size chart
    lb.querySelectorAll('.lb__arrow').forEach(a => a.style.display = 'none');
    if (currentSizeChartImages && currentSizeChartImages.length) {
      // Несколько картинок (муж + жен) — показываем обе стопкой
      lbImg.style.display = 'none';
      lbChart.style.display = 'block';
      lbChart.innerHTML = currentSizeChartImages.map(src =>
        `<img src="${src}" style="width:100%;border-radius:8px;display:block;">`
      ).join('');
    } else if (currentSizeChartImage) {
      lbImg.src = currentSizeChartImage;
      lbImg.style.display = 'block';
      lbChart.style.display = 'none';
    } else {
      lbImg.src = 'images/size-chart.png';
      lbImg.style.display = 'block';
      lbChart.style.display = 'none';
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
  // Switch gallery if this color has its own images
  if (currentProduct) {
    const idx = parseInt(btn.dataset.colorIdx);
    const color = currentProduct.colors[idx];
    if (color && color.images && color.images.length) renderGallery(color.images);
  }
}

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
}

function orderProduct(name) {
  const sizeBtn = document.querySelector('.size-btn.active');
  const colorLabel = document.getElementById('colorLabel');
  const size = sizeBtn ? sizeBtn.textContent : '';
  const color = colorLabel ? colorLabel.textContent : '';
  const subject = encodeURIComponent(`Заказ: 7K Team × Oraz — ${name}` + (size ? `, ${size}` : '') + (color ? `, ${color}` : ''));
  const body = encodeURIComponent(`Здравствуйте!\n\nХочу заказать:\nТовар: ${name}\n` + (size ? `Размер: ${size}\n` : '') + (color ? `Цвет: ${color}\n` : '') + `\nМои контакты: `);
  window.location.href = `mailto:info@7kteam.com?subject=${subject}&body=${body}`;
}

// ===== EVENTS =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('lightbox').classList.contains('active')) closeLightbox();
    else closeDetail();
  }
  if (e.key === 'ArrowLeft') lightboxNav(-1);
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
function updateStickyOrder(productName) {
  let sticky = document.getElementById('mobileStickyOrder');
  if (!sticky) {
    sticky = document.createElement('div');
    sticky.id = 'mobileStickyOrder';
    sticky.className = 'mobile-sticky-order';
    document.body.appendChild(sticky);
  }
  sticky.innerHTML = `
    <button class="btn btn--order" onclick="orderProduct('${productName}')">Заказать</button>
    <button class="btn btn--size-chart" onclick="openLightbox(-1)">Размеры</button>
  `;
  sticky.style.display = 'flex';
}

// Hook into openModal to show sticky button
const _origOpenModal = openModal;
window.openModal = function(id) {
  _origOpenModal(id);
  const p = products.find(x => x.id === id);
  if (p) updateStickyOrder(p.name);
};

// Hide sticky when detail panel closes
const _origCloseDetail = closeDetail;
window.closeDetail = function() {
  _origCloseDetail();
  const sticky = document.getElementById('mobileStickyOrder');
  if (sticky) sticky.style.display = 'none';
};
