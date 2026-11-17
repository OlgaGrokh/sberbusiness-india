/* Заполненные иллюстрации для одностраничника «Поиск поставщика в Индии» (палитра Сбера: бирюза + мята). */
(function () {
  const C = { deep: "#0B6670", teal: "#107F8C", green: "#2AA394", leaf: "#21A038", mint: "#CDEFE3", mint2: "#E3F6EF", ink: "#1F3B40", star: "#FFC94D" };

  // Общие градиенты, тень и «блик»; id уникальны для каждой иллюстрации
  const defs = (p) => `
    <defs>
      <linearGradient id="${p}g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3CC0A6"/><stop offset="1" stop-color="${C.teal}"/></linearGradient>
      <linearGradient id="${p}g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#F1F8F5"/></linearGradient>
      <linearGradient id="${p}g3" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#A6E8C9"/><stop offset="1" stop-color="${C.leaf}"/></linearGradient>
      <radialGradient id="${p}bg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#DDF3EA"/><stop offset="1" stop-color="#DDF3EA" stop-opacity="0"/></radialGradient>
      <filter id="${p}sh" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="8" stdDeviation="9" flood-color="#0B6670" flood-opacity=".16"/></filter>
    </defs>`;
  const sparkle = (x, y, s = 1, c = C.green) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0-10C1-3 3-1 10 0 3 1 1 3 0 10-1 3-3 1-10 0-3-1-1-3 0-10z" fill="${c}"/>`;
  const starPath = (x, y, r, fill) => {
    let d = ""; for (let i = 0; i < 10; i++) { const a = Math.PI / 5 * i - Math.PI / 2, rr = i % 2 ? r * .45 : r; d += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); }
    return `<path d="${d}Z" fill="${fill}"/>`;
  };
  const tile = (x, y, p, inner) => `<g transform="translate(${x} ${y})"><rect width="80" height="80" rx="20" fill="url(#${p}g2)" filter="url(#${p}sh)"/>${inner}</g>`;
  const svg = (p, body, vb = "0 0 440 300") => `<svg class="pic" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${defs(p)}${body}</svg>`;

  window.ILL = window.ILL || {};

  /* 1. Работаем только с проверенными поставщиками — карточка поставщика с рейтингом + щит */
  ILL.supplier = () => svg("sp", `
    <circle cx="210" cy="155" r="150" fill="url(#spbg)"/>
    <rect x="70" y="52" width="230" height="190" rx="22" fill="url(#spg2)" filter="url(#spsh)"/>
    <circle cx="116" cy="98" r="26" fill="url(#spg1)"/>
    <path d="M102 112v-16l8 5v-5l8 5v-5l8 5V88h4v24z" fill="#fff"/>
    <rect x="154" y="86" width="104" height="11" rx="5.5" fill="${C.ink}"/>
    <rect x="154" y="105" width="70" height="9" rx="4.5" fill="#B9DCD3"/>
    ${[0, 1, 2, 3, 4].map(i => starPath(100 + i * 26, 146, 10, i < 4 ? C.star : "#E4EAE8")).join("")}
    <rect x="92" y="172" width="186" height="10" rx="5" fill="#E3F0EC"/>
    <rect x="92" y="192" width="132" height="10" rx="5" fill="#E3F0EC"/>
    <rect x="92" y="212" width="88" height="18" rx="9" fill="${C.mint2}"/>
    <circle cx="104" cy="221" r="5" fill="${C.green}"/>
    <rect x="114" y="218" width="56" height="6" rx="3" fill="${C.green}" opacity=".6"/>
    <path d="M318 112l62 23v50c0 44-28 70-62 82-34-12-62-38-62-82v-50z" fill="url(#spg1)" filter="url(#spsh)"/>
    <path d="M318 126l48 18v41c0 34-21 55-48 65z" fill="#fff" opacity=".12"/>
    <path d="M292 190l18 18 36-38" fill="none" stroke="#fff" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
    ${sparkle(396, 92, 1.1)}${sparkle(240, 40, .8, C.leaf)}${sparkle(48, 210, .7, "#9ED8C4")}
  `);

  /* 2. Прозрачный и понятный подход — документ со спецификацией и лупа */
  ILL.transparent = () => svg("tr", `
    <circle cx="220" cy="155" r="150" fill="url(#trbg)"/>
    <rect x="96" y="54" width="180" height="220" rx="18" fill="#BFE6D9" transform="rotate(-8 186 164)"/>
    <path d="M118 36h120l46 46v172a18 18 0 0 1-18 18H118a18 18 0 0 1-18-18V54a18 18 0 0 1 18-18z" fill="url(#trg2)" filter="url(#trsh)"/>
    <path d="M238 36v30a16 16 0 0 0 16 16h30z" fill="${C.mint}"/>
    <rect x="124" y="64" width="84" height="12" rx="6" fill="${C.ink}"/>
    ${[0, 1, 2, 3].map(i => `
      <circle cx="134" cy="${112 + i * 40}" r="11" fill="${i < 3 ? `url(#trg1)` : "#E3F0EC"}"/>
      ${i < 3 ? `<path d="M129 ${112 + i * 40}l4 4 7-8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>` : ""}
      <rect x="154" y="${106 + i * 40}" width="${[70, 56, 64, 48][i]}" height="10" rx="5" fill="#D5E7E2"/>
      <rect x="236" y="${103 + i * 40}" width="32" height="18" rx="9" fill="${C.mint2}"/>
      <text x="252" y="${116 + i * 40}" text-anchor="middle" font-family="Arial" font-weight="700" font-size="12" fill="${C.teal}">₹</text>`).join("")}
    <path d="M332 232l40 40" stroke="${C.deep}" stroke-width="24" stroke-linecap="round"/>
    <circle cx="300" cy="196" r="58" fill="#fff" opacity=".88" filter="url(#trsh)"/>
    <circle cx="300" cy="196" r="58" fill="none" stroke="url(#trg1)" stroke-width="15"/>
    <rect x="272" y="196" width="14" height="26" rx="4" fill="${C.mint}"/>
    <rect x="293" y="180" width="14" height="42" rx="4" fill="${C.green}"/>
    <rect x="314" y="166" width="14" height="56" rx="4" fill="${C.teal}"/>
    <path d="M268 170a40 40 0 0 1 24-22" stroke="#fff" stroke-width="6" stroke-linecap="round" fill="none" opacity=".9"/>
    ${sparkle(392, 120, 1)}${sparkle(70, 90, .8, C.leaf)}
  `);

  /* 3. Полный спектр услуг — шесть плиток-услуг на фоне растущего графика */
  ILL.services = () => {
    const p = "sv";
    const icons = [
      // переговоры
      `<path d="M18 22h30a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H32l-10 8v-8h-4a8 8 0 0 1-8-8V30a8 8 0 0 1 8-8z" fill="url(#${p}g1)"/><path d="M40 38h18a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8h-2v7l-9-7h-7a8 8 0 0 1-8-8" fill="${C.mint}"/><circle cx="24" cy="37" r="3" fill="#fff"/><circle cx="33" cy="37" r="3" fill="#fff"/><circle cx="42" cy="37" r="3" fill="#fff"/>`,
      // юридическое сопровождение — весы
      `<rect x="38" y="16" width="4" height="46" rx="2" fill="${C.ink}"/><rect x="24" y="60" width="32" height="8" rx="4" fill="url(#${p}g1)"/><path d="M16 28h48" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/><path d="M10 46l9-18 9 18a9 9 0 0 1-18 0z" fill="${C.mint}"/><path d="M52 46l9-18 9 18a9 9 0 0 1-18 0z" fill="url(#${p}g1)"/><circle cx="40" cy="16" r="5" fill="${C.green}"/>`,
      // аудит производства — завод
      `<path d="M12 66V38l16 10V38l16 10V38l16 10V20h8v46z" fill="url(#${p}g1)"/><rect x="18" y="54" width="8" height="8" rx="2" fill="#fff"/><rect x="34" y="54" width="8" height="8" rx="2" fill="#fff"/><rect x="50" y="54" width="8" height="8" rx="2" fill="#fff"/><circle cx="64" cy="14" r="5" fill="${C.mint}"/>`,
      // сертификация — медаль
      `<path d="M28 44l-8 26 12-6 6 10 6-22z" fill="${C.mint}"/><path d="M52 44l8 26-12-6-6 10-6-22z" fill="${C.green}" opacity=".7"/><circle cx="40" cy="34" r="20" fill="url(#${p}g1)"/><circle cx="40" cy="34" r="12" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/><path d="M34 34l4 4 8-8" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
      // логистика — грузовик
      `<rect x="8" y="26" width="38" height="30" rx="5" fill="url(#${p}g1)"/><path d="M46 34h14l10 12v10H46z" fill="${C.mint}"/><path d="M50 38h8l6 8H50z" fill="#fff"/><circle cx="22" cy="58" r="7" fill="${C.ink}"/><circle cx="58" cy="58" r="7" fill="${C.ink}"/><circle cx="22" cy="58" r="2.5" fill="#fff"/><circle cx="58" cy="58" r="2.5" fill="#fff"/>`,
      // страхование — щит
      `<path d="M40 12l24 9v19c0 17-11 27-24 32-13-5-24-15-24-32V21z" fill="url(#${p}g1)"/><path d="M40 12l24 9v19c0 17-11 27-24 32z" fill="#fff" opacity=".14"/><path d="M30 41l7 7 13-14" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`
    ];
    const pos = [[86, 104], [182, 104], [278, 104], [86, 200], [182, 200], [278, 200]];
    return svg(p, `
      <circle cx="220" cy="160" r="150" fill="url(#${p}bg)"/>
      <path d="M36 236l84-70 52 34 160-136" fill="none" stroke="url(#${p}g3)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
      <path d="M318 46l46-8-8 46z" fill="${C.leaf}"/>
      ${pos.map(([x, y], i) => tile(x, y - 8, p, icons[i])).join("")}
      ${sparkle(398, 140, 1)}${sparkle(60, 120, .8, "#9ED8C4")}
    `);
  };

  /* 4. Преимущества сервиса (версия с правками) — глобус с маршрутом и бейдж 3000+ */
  ILL.benefits = () => svg("bn", `
    <circle cx="210" cy="160" r="150" fill="url(#bnbg)"/>
    <circle cx="200" cy="166" r="104" fill="url(#bng1)" filter="url(#bnsh)"/>
    <path d="M128 110c20 6 30-8 52-2s20 26 4 34-36 0-48 14-30-4-28-22zM214 196c14-8 38-4 46 10s-6 34-26 34-28-14-34-22 2-16 14-22zM236 96c12-4 34 2 40 14s-8 18-22 14-26-24-18-28z" fill="#fff" opacity=".22"/>
    <ellipse cx="200" cy="166" rx="104" ry="40" fill="none" stroke="#fff" stroke-width="2" opacity=".35"/>
    <ellipse cx="200" cy="166" rx="44" ry="104" fill="none" stroke="#fff" stroke-width="2" opacity=".35"/>
    <path d="M150 116C190 60 270 110 262 180" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="2 10" stroke-linecap="round"/>
    <path d="M150 122c-12 0-20-9-20-19a20 20 0 0 1 40 0c0 10-8 19-20 19z" fill="${C.leaf}" transform="translate(0 -6)"/>
    <circle cx="150" cy="97" r="7" fill="#fff"/>
    <path d="M262 186c-12 0-20-9-20-19a20 20 0 0 1 40 0c0 10-8 19-20 19z" fill="#fff" transform="translate(0 -6)"/>
    <circle cx="262" cy="161" r="7" fill="${C.teal}"/>
    <rect x="292" y="36" width="122" height="62" rx="18" fill="url(#bng2)" filter="url(#bnsh)"/>
    <text x="353" y="68" text-anchor="middle" font-family="SB Sans Interface, Arial" font-weight="700" font-size="24" fill="${C.teal}">3000+</text>
    <rect x="320" y="78" width="66" height="7" rx="3.5" fill="#B9DCD3"/>
    <rect x="26" y="214" width="112" height="46" rx="16" fill="url(#bng2)" filter="url(#bnsh)"/>
    <text x="82" y="243" text-anchor="middle" font-family="SB Sans Interface, Arial" font-weight="700" font-size="14" fill="${C.ink}">RU · EN · HI</text>
    ${sparkle(400, 200, 1)}${sparkle(60, 70, .8, C.leaf)}
  `);

  /* 5. Как это работает (версия с правками) — четыре шага по маршруту */
  ILL.steps = () => {
    const p = "st";
    const glyph = [
      `<rect x="26" y="20" width="28" height="40" rx="5" fill="#fff"/><rect x="32" y="30" width="16" height="4" rx="2" fill="${C.teal}"/><rect x="32" y="40" width="12" height="4" rx="2" fill="${C.teal}" opacity=".5"/>`,
      `<circle cx="36" cy="36" r="13" fill="none" stroke="#fff" stroke-width="6"/><path d="M46 46l10 10" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,
      `<path d="M40 16l20 8v15c0 14-9 22-20 26-11-4-20-12-20-26V24z" fill="#fff"/><path d="M32 40l6 6 10-11" fill="none" stroke="${C.teal}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
      `<rect x="20" y="18" width="34" height="44" rx="6" fill="#fff"/><path d="M27 48c5-7 8 3 13-3s6 4 10 0" fill="none" stroke="${C.teal}" stroke-width="3" stroke-linecap="round"/><rect x="27" y="27" width="18" height="4" rx="2" fill="${C.teal}" opacity=".5"/><circle cx="56" cy="56" r="11" fill="${C.leaf}" stroke="#fff" stroke-width="3"/><path d="M51 56l4 4 6-7" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`
    ];
    const pos = [[40, 40], [180, 40], [320, 100], [180, 190]];
    return svg(p, `
      <circle cx="220" cy="150" r="150" fill="url(#${p}bg)"/>
      <path d="M120 80H220M260 80c50 0 80 20 80 60M340 180c0 30-40 50-80 50H220" fill="none" stroke="${C.mint}" stroke-width="10" stroke-linecap="round" stroke-dasharray="1 18"/>
      ${pos.map(([x, y], i) => `
        <g transform="translate(${x} ${y})">
          <rect width="80" height="80" rx="24" fill="url(#${p}g1)" filter="url(#${p}sh)"/>${glyph[i]}
          <circle cx="76" cy="6" r="15" fill="#fff" filter="url(#${p}sh)"/>
          <text x="76" y="11" text-anchor="middle" font-family="SB Sans Interface, Arial" font-weight="700" font-size="14" fill="${C.teal}">${i + 1}</text>
        </g>`).join("")}
      ${sparkle(70, 220, 1)}${sparkle(400, 40, .8, C.leaf)}
    `);
  };

  /* 6. Сколько стоит услуга (версия с правками) — договор, кошелёк и монеты ₽ */
  ILL.price = () => svg("pr", `
    <circle cx="210" cy="160" r="150" fill="url(#prbg)"/>
    <g transform="rotate(-10 180 120)">
      <rect x="110" y="30" width="150" height="190" rx="16" fill="url(#prg2)" filter="url(#prsh)"/>
      <rect x="132" y="56" width="80" height="11" rx="5.5" fill="${C.ink}"/>
      <rect x="132" y="80" width="106" height="8" rx="4" fill="#D5E7E2"/><rect x="132" y="96" width="92" height="8" rx="4" fill="#D5E7E2"/><rect x="132" y="112" width="100" height="8" rx="4" fill="#D5E7E2"/>
      <path d="M134 168c10-14 18 6 28-6s14 8 24 0" fill="none" stroke="${C.teal}" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="226" cy="168" r="16" fill="url(#prg1)"/><path d="M219 168l5 5 9-10" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <rect x="180" y="140" width="190" height="124" rx="22" fill="url(#prg1)" filter="url(#prsh)"/>
    <path d="M180 170h190v-8a22 22 0 0 0-22-22H202a22 22 0 0 0-22 22z" fill="${C.deep}" opacity=".35"/>
    <rect x="318" y="186" width="64" height="40" rx="14" fill="${C.deep}"/>
    <circle cx="340" cy="206" r="8" fill="#fff"/>
    ${[0, 1, 2].map(i => `<ellipse cx="110" cy="${250 - i * 16}" rx="40" ry="12" fill="${i === 2 ? "#3FBF6A" : C.leaf}" stroke="#1C8A33" stroke-width="2"/>`).join("")}
    <circle cx="110" cy="182" r="34" fill="url(#prg3)" stroke="#1C8A33" stroke-width="3" filter="url(#prsh)"/>
    <text x="110" y="196" text-anchor="middle" font-family="Arial" font-weight="700" font-size="36" fill="#fff">₽</text>
    ${sparkle(400, 110, 1)}${sparkle(60, 100, .8, "#9ED8C4")}
  `);
})();
