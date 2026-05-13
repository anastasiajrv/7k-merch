const products = [
  {
    id: 'tshirt',
    name: 'Майка',
    category: 'Спортивная футболка',
    badge: null,
    description: 'Не просто футболка — твой второй скин на тренировке. Дышащая технология отводит влагу, плоские швы не натирают. Надел — забыл — победил.',
    material: 'Состав: 90% полиэстер, 10% эластан · Плотность: 160 г/м²',
    // Замените на реальные фото: images/tshirt-1.jpg, images/tshirt-2.jpg, images/tshirt-3.jpg
    images: [
      makeThumb('#0E2841', '#00CADF', 'МАЙКА'),
      makeThumb('#1C39E0', '#FFFFFF', 'BACK'),
      makeThumb('#06090F', '#1C39E0', 'ДЕТАЛЬ'),
    ],
    colors: [
      { name: 'Тёмно-синий', hex: '#0E2841' },
      { name: 'Синий', hex: '#1C39E0' },
      { name: 'Белый', hex: '#EEEEEE', border: true },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    sizeChart: {
      headers: ['Размер', 'Грудь (см)', 'Длина (см)'],
      rows: [
        ['XS', '80–84', '64'],
        ['S',  '84–88', '66'],
        ['M',  '88–92', '68'],
        ['L',  '92–96', '70'],
        ['XL', '96–100', '72'],
        ['XXL','100–104','74'],
      ],
    },
  },
  {
    id: 'shorts',
    name: 'Женские шорты',
    category: 'Спортивные шорты · Женские',
    badge: null,
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
    id: 'longsleeve',
    name: 'Лонгслив',
    category: 'Рашгард с длинным рукавом',
    badge: null,
    description: 'Компрессия, которая реально работает. Анатомический крой обнимает мышцы, снижает усталость, держит тепло в прохладную погоду. Тренируйся дольше.',
    material: 'Состав: 88% полиэстер, 12% эластан · Плотность: 180 г/м²',
    images: [
      makeThumb('#06090F', '#1C39E0', 'ЛОНГСЛИВ'),
      makeThumb('#1C39E0', '#FFFFFF', 'BACK'),
      makeThumb('#0E2841', '#00CADF', 'ДЕТАЛЬ'),
    ],
    colors: [
      { name: 'Тёмный', hex: '#06090F' },
      { name: 'Синий', hex: '#1C39E0' },
      { name: 'Голубой', hex: '#00CADF' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    sizeChart: {
      headers: ['Размер', 'Грудь (см)', 'Длина (см)', 'Рукав (см)'],
      rows: [
        ['XS', '82–86',  '64', '58'],
        ['S',  '86–90',  '66', '60'],
        ['M',  '90–94',  '68', '62'],
        ['L',  '94–98',  '70', '63'],
        ['XL', '98–102', '72', '64'],
        ['XXL','102–106','74', '65'],
      ],
    },
  },
  {
    id: 'hoodie',
    name: 'Худи',
    category: 'Спортивное худи',
    badge: null,
    description: 'После финиша. Перед стартом. Всегда в ходу. Тёплый флис, вышивка 7K на груди, карман для всего нужного. Разминка начинается с правильного худи.',
    material: 'Состав: 65% хлопок, 35% полиэстер · Плотность: 320 г/м²',
    images: [
      makeThumb('#0E2841', '#E85918', 'ХУДИ'),
      makeThumb('#E85918', '#FFFFFF', 'BACK'),
      makeThumb('#06090F', '#1C39E0', 'ДЕТАЛЬ'),
    ],
    colors: [
      { name: 'Тёмно-синий', hex: '#0E2841' },
      { name: 'Оранжевый', hex: '#E85918' },
      { name: 'Синий', hex: '#1C39E0' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    sizeChart: {
      headers: ['Размер', 'Грудь (см)', 'Длина (см)', 'Рукав (см)'],
      rows: [
        ['XS',   '86–90',  '66', '60'],
        ['S',    '90–94',  '68', '62'],
        ['M',    '94–98',  '70', '63'],
        ['L',    '98–102', '72', '64'],
        ['XL',   '102–106','74', '65'],
        ['XXL',  '106–110','76', '66'],
        ['XXXL', '110–114','78', '67'],
      ],
    },
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

// ===== RENDER CATALOG =====
function renderCatalog() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = products.map(p => `
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
}

// ===== DETAIL PANEL =====
let currentImages = [];
let currentImgIndex = 0;
let currentSizeChartImage = 'images/size-chart.png';

function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  currentImages = p.images;
  currentImgIndex = 0;
  currentSizeChartImage = p.sizeChartImage || 'images/size-chart.png';

  // Image box: first image + arrows
  const imgBox = document.getElementById('detailImgBox');
  imgBox.innerHTML = `
    <img id="modalMainImg" src="${p.images[0]}" alt="${p.name}" onclick="openLightbox(currentImgIndex)" title="Нажмите для увеличения">
    ${p.images.length > 1 ? `
      <button class="gallery__arrow gallery__arrow--prev" onclick="galleryNav(-1)">&#8249;</button>
      <button class="gallery__arrow gallery__arrow--next" onclick="galleryNav(1)">&#8250;</button>
    ` : ''}
  `;

  // Thumbnails
  const thumbsEl = document.getElementById('detailThumbs');
  thumbsEl.innerHTML = p.images.length > 1 ? p.images.map((src, i) => `
    <img class="detail-thumb ${i === 0 ? 'active' : ''}" src="${src}" alt="${p.name} ${i+1}" onclick="goToImg(${i})">
  `).join('') : '';

  // Info panel
  const colorsHTML = p.colors.map((c, i) =>
    `<button class="color-opt${c.border ? ' white-border' : ''}${i === 0 ? ' active' : ''}"
       style="background:${c.hex}" title="${c.name}"
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
  const src = index === -1 ? currentSizeChartImage : currentImages[index];
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = src;
  lb.classList.add('active');
  lb.querySelectorAll('.lb__arrow').forEach(a => a.style.display = index === -1 ? 'none' : '');
  if (index !== -1) currentImgIndex = index;
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
initReveal();
