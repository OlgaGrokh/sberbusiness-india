/* ================= Иконки (линейные, 24×24) ================= */
const P = {
  plus: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  import: '<path d="M8 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M14 4h6v6M20 4l-8 8"/><path d="M8 12v4h4"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14"/><circle cx="12" cy="17" r=".6"/>',
  login: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M9 12h7M13 9l3 3-3 3"/>',
  report: '<path d="M14 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/><path d="M15 4h5v5M20 4l-7 7"/><path d="M8 13h4M8 16h6"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 19a6 6 0 0 1 12 0"/><rect x="14" y="13" width="7" height="6" rx="1"/><path d="M16 13v-1a1.5 1.5 0 0 1 3 0v1"/>',
  template: '<path d="M14 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/><path d="M17 3l1 2 2 .3-1.5 1.5.4 2.2-1.9-1-1.9 1 .4-2.2L14 5.3l2-.3z"/><path d="M8 14h5"/>',
  cert: '<path d="M13 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8l4 4v3"/><circle cx="17" cy="15" r="3"/><path d="M15.5 17.5 15 21l2-1 2 1-.5-3.5"/>',
  card: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/>',
  salary: '<rect x="3" y="7" width="18" height="12" rx="2"/><circle cx="12" cy="13" r="2.5"/><path d="M8 7V5h8v2"/>',
  credit: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M9 16l6-6"/><circle cx="9.5" cy="11" r=".8"/><circle cx="14.5" cy="15" r=".8"/>',
  acq: '<path d="M4 8h16l-2 9H6z"/><path d="M8 8l2-4M16 8l-2-4"/><path d="M12 11v4M10.5 13h3"/>',
  cash: '<rect x="4" y="9" width="14" height="10" rx="2"/><path d="M14 5h6v6M20 5l-5 5"/><circle cx="11" cy="14" r="2"/>',
  docflow: '<path d="M14 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10"/><path d="M8 12h6M8 16h4"/><path d="M15 6l2 2 4-4"/>',
  cart: '<path d="M3 4h2l2.5 11h11L21 8H7"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/>',
  monitor: '<rect x="3" y="4" width="13" height="10" rx="1.5"/><path d="M9.5 14v4M6 18h7"/><circle cx="18" cy="8" r="3"/><path d="M20 10.5l2 2"/>',
  truck: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/><path d="M1 10h4M2 13h3"/>',
  meet: '<circle cx="9" cy="6" r="2.2"/><path d="M5.5 12a3.5 3.5 0 0 1 7 0"/><circle cx="15" cy="15" r="2.2"/><path d="M11.5 21a3.5 3.5 0 0 1 7 0"/><path d="M17 4a6 6 0 0 1 3 5M4 16a6 6 0 0 0 3 5"/>',
  kp: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  percent: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M9 16l6-6"/><circle cx="9.5" cy="11" r=".8"/><circle cx="14.5" cy="15" r=".8"/>',
  car: '<path d="M5 15l1.5-5h11L19 15"/><rect x="3" y="15" width="18" height="4" rx="1.5"/><path d="M17 4l3 3M20 4l-3 3"/>',
  factoring: '<path d="M14 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/><path d="M8 9h5M8 13h7M8 17h4"/><path d="M17 3l4 4M21 3l-4 4"/>',
  history: '<path d="M4 12a8 8 0 1 0 2.3-5.6L4 9"/><path d="M4 4v5h5"/><path d="M12 8v4l2 2"/><path d="M17 17l4 4"/>',
  coins: '<circle cx="12" cy="13" r="7"/><path d="M12 10v6M10 4h4M12 4v2"/>',
  bell: '<path d="M4 6h10M4 6l3-3M4 6l3 3"/><path d="M20 18H10M20 18l-3-3M20 18l-3 3"/><rect x="3" y="11" width="18" height="2" rx="1" opacity="0"/>',
  incas: '<path d="M3 15l3-6h9l3 6"/><rect x="2" y="15" width="18" height="4" rx="1.5"/><circle cx="18" cy="7" r="3.5"/><path d="M17 5.5h1.5a1 1 0 0 1 0 2H17V9"/>',
  hub: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5M12 12l-6 5.5M12 12l6 5.5"/>',
  atm: '<rect x="4" y="4" width="16" height="10" rx="1.5"/><path d="M8 14v6h8v-6M10 17h4"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01"/>',
  basket: '<path d="M4 9h16l-2 10H6z"/><path d="M8 9l3-5M16 9l-3-5M10 15l4-3"/>',
  userbag: '<circle cx="9" cy="7" r="3"/><path d="M3 20a6 6 0 0 1 9-5"/><path d="M14 14h7l-1 6h-5z"/>',
  usercalc: '<circle cx="8" cy="6" r="2.5"/><path d="M3 14a5 5 0 0 1 9-3"/><rect x="12" y="11" width="9" height="10" rx="1.5"/><path d="M14 15h5M14 18h5"/>',
  plusminus: '<path d="M4 7h6M7 4v6M14 7h6M4 17l5-5M9 17l-5-5M14 15h6M14 19h6"/>',
  gov: '<rect x="3" y="5" width="12" height="15" rx="1.5"/><path d="M6 10h6M6 14h6"/><path d="M15 9h6M16 9v8M18 9v8M20 9v8M15 17h6M18 5l3 3h-6z"/>',
  cloudcalc: '<path d="M6 10a4 4 0 0 1 8-1"/><path d="M4 13a3 3 0 0 1 2-3"/><rect x="11" y="11" width="10" height="10" rx="1.5"/><path d="M13 15h6M13 18h6"/>',
  analytics: '<path d="M3 14l3-6 3 9 3-11 2 6"/><circle cx="17" cy="16" r="3"/><path d="M19.2 18.2L22 21"/>',
  wave: '<path d="M2 12h4l3-7 4 14 3-7h3"/><circle cx="19" cy="17" r="3"/><path d="M18 17l1 1 2-2"/>',
  forward: '<path d="M7 4a8 8 0 0 0 0 16"/><path d="M5 4h3v3"/><text x="9" y="9" font-size="7" stroke="none" fill="currentColor">$</text><path d="M14 12a5 5 0 0 1 0 8M12.5 16h4M14 14v5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  userplus: '<circle cx="10" cy="7" r="3.5"/><path d="M3 20a7 7 0 0 1 12-5"/><path d="M18 14v6M15 17h6"/>',
  question: '<circle cx="12" cy="12" r="9" stroke-dasharray="4 2"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14"/><circle cx="12" cy="17" r=".6"/>',
  userbox: '<circle cx="9" cy="7" r="3"/><path d="M3 20a6 6 0 0 1 9-5"/><rect x="14" y="13" width="7" height="7" rx="1.5"/>',
  user: '<circle cx="12" cy="7" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/><path d="M8 18h8"/>',
  usergear: '<circle cx="12" cy="8" r="3"/><path d="M6 20a6 6 0 0 1 12 0"/><path d="M12 2v1M7 4l.7.7M17 4l-.7.7"/>',
  umbrella: '<path d="M3 12a9 9 0 0 1 18 0z"/><path d="M12 12v7a2 2 0 0 1-4 0"/>',
  edit: '<path d="M13 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/><path d="M8 12h4M8 16h6"/><path d="M15 9l5-5 2 2-5 5h-2z"/>',
  userheart: '<circle cx="9" cy="7" r="3"/><path d="M3 20a6 6 0 0 1 9-5"/><path d="M17 21l-3.5-3.5a2 2 0 0 1 3.5-2 2 2 0 0 1 3.5 2z"/>',
  list: '<rect x="4" y="4" width="16" height="16" rx="1.5"/><path d="M8 9h8M8 13h8M8 17h5"/>',
  usersearch: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="2.5"/><path d="M8 17a4 4 0 0 1 8 0"/><path d="M18.5 18.5L22 22"/>',
  cbonus: '<circle cx="12" cy="12" r="9"/><path d="M15 9a4 4 0 1 0 0 6"/>',
  taxi: '<path d="M5 14l1.5-5h11L19 14"/><rect x="3" y="14" width="18" height="5" rx="1.5"/><path d="M9 5h6M8 3h1M11 3h1M14 3h1M10 7h.01M13 7h.01"/>',
  globe: '<circle cx="11" cy="13" r="8"/><path d="M3 13h16M11 5a12 12 0 0 1 0 16M11 5a12 12 0 0 0 0 16"/><path d="M19 2v6M17.5 3.5h2.5a1 1 0 0 1 0 2h-2a1 1 0 0 0 0 2H21"/>',
  taxback: '<circle cx="12" cy="12" r="8"/><path d="M10 16V8h3a2.5 2.5 0 0 1 0 5h-4M9 14.5h4"/><path d="M2 10l2 2 2-2"/>',
  customs: '<path d="M6 3h12M7 6h10M8 3v5a4 4 0 0 0 8 0V3"/><path d="M4 21v-3a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3"/>',
  partner: '<circle cx="9" cy="7" r="3"/><path d="M3 19a6 6 0 0 1 10-4.5"/><path d="M15 21l6-6M16 15h.01M20 21h.01"/>',
  customsguard: '<path d="M5 3h10M6 6h8M7 3v5a3 3 0 0 0 6 0V3"/><path d="M3 21v-2a4 4 0 0 1 4-4h3"/><path d="M17 12l4 1.5v3c0 2.5-2 4-4 4.5-2-.5-4-2-4-4.5v-3z"/>',
  shieldpct: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 15l6-6"/><circle cx="9.5" cy="9.5" r=".8"/><circle cx="14.5" cy="14.5" r=".8"/>',
  shieldum: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8 12a4 4 0 0 1 8 0zM12 12v3"/>',
  api: '<path d="M7 17a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4 4 0 0 1-1 8"/><path d="M10 13l-2 2 2 2M14 13l2 2-2 2M12.5 12l-1 6"/>',
  safe: '<rect x="5" y="3" width="14" height="17" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M8 20v1M16 20v1"/>',
  bag: '<rect x="4" y="7" width="16" height="13" rx="2"/><path d="M9 7V4h6v3M10 12h4"/>',
  lc: '<path d="M3 20h12M4 9h10M5 9v9M9 9v9M13 9v9M9 4l5 5H4z"/><path d="M18 13l3 1v2.5c0 2-1.5 3-3 3.5-1.5-.5-3-1.5-3-3.5V14z"/>',
  sign: '<rect x="8" y="3" width="8" height="18" rx="2"/><path d="M4 8v8M20 8v8M2 10v4M22 10v4"/><path d="M11 17h2"/>',
  invoice: '<path d="M14 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M8 9h5M8 13h5M8 17h3"/><path d="M15 8h6M18 5l3 3-3 3"/>',
  edo: '<path d="M14 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/><path d="M8 9h5M8 13h5M8 17h3"/><path d="M15 6l2 2 4-4"/>',
  archive: '<path d="M6 11a5 5 0 0 1 10-2 4 4 0 0 1 2 7.5"/><path d="M7 15h10M7 18h10M9 21h6"/>',
  cloudrub: '<path d="M7 17a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4 4 0 0 1-1 8"/><path d="M11 21v-7h2a1.5 1.5 0 0 1 0 3h-3M10 19.5h3"/>',
  acqrub: '<path d="M3 6h18l-2 8H5z"/><path d="M7 6l2-3M17 6l-2-3"/><path d="M11 22v-6h2a1.5 1.5 0 0 1 0 3h-3M10 20.5h3"/>',
  userrub: '<circle cx="9" cy="6" r="3"/><path d="M3 18a6 6 0 0 1 9-5"/><path d="M15 22v-7h2.5a2 2 0 0 1 0 4H14M14 20.5h3"/>',
  ukassa: '<path d="M14 3L6 12l8 9"/><path d="M10 12h.01"/><path d="M18 7l-5 5 5 5"/>',
  evotor: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9h5a3 3 0 0 1 0 6H9M9 12h5"/>',
  profile: '<circle cx="8" cy="7" r="3"/><path d="M3 18a5 5 0 0 1 10 0"/><path d="M14 10h7M14 14h7M14 18h7"/>',
  pos: '<path d="M3 6h18l-2 8H5z"/><path d="M7 6l2-3M17 6l-2-3"/><path d="M12 22l-2-6 6 2-2 1z"/>',
  b2b: '<circle cx="8" cy="6" r="3"/><path d="M3 17a5 5 0 0 1 9-3"/><rect x="13" y="13" width="8" height="8" rx="1.5"/><path d="M4 21v-2h3"/>',
  sale: '<rect x="5" y="5" width="14" height="16" rx="1.5"/><path d="M9 5V3h6v2M9 17l3-6 3 6"/>',
  site: '<rect x="4" y="3" width="16" height="12" rx="1.5"/><path d="M7 12l3-4 2 3 2-2 3 3"/><path d="M6 18h12M8 21h8"/>',
  gauge: '<circle cx="12" cy="12" r="9"/><path d="M12 12l4-4M7 16h10"/>',
  pin: '<circle cx="12" cy="11" r="8"/><path d="M12 7a3 3 0 0 1 3 3c0 2-3 5-3 5s-3-3-3-5a3 3 0 0 1 3-3z"/>',
  click: '<path d="M10 10l10 4-4 2-2 4z"/><path d="M5 5l2 2M10 3v3M3 10h3M5 15l2-2"/>',
  chevron: '<path d="M6 9l6 6 6-6"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  mail: '<rect x="3" y="6" width="14" height="11" rx="1.5"/><path d="M3 7l7 5 7-5"/><path d="M18 11a3 3 0 0 1 3 3v3h-6v-3a3 3 0 0 1 3-3z"/>',
  exit: '<path d="M14 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8"/><path d="M10 12h11M17 8l4 4-4 4"/>',
  promo: '<rect x="2" y="7" width="15" height="11" rx="2"/><path d="M6 4h11a2 2 0 0 1 2 2v9"/><path d="M8 13l3-2 3 2M11 11v5"/>'
};
const ico = (k, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ${extra}>${P[k] || P.list}</svg>`;

/* ================= Данные страницы ================= */
const NAV = [
  [["plus", "Создать"], ["import", "Импорт"], ["help", "Помощь"]],
  [["login", "Счета и платежи"], ["report", "Выписки и отчёты"], ["people", "Контрагенты"], ["template", "Шаблоны и автоплатежи"], ["cert", "Справки"]],
  [["card", "Бизнес-карты"], ["salary", "Зарплатный проект"], ["credit", "Кредиты"], ["acq", "Торговый эквайринг"], ["cash", "Самоинкассация"], ["docflow", "Документооборот (E-inv)"]]
];

const RECOMMEND = [
  { t: "Бизнес мосты<br>с Индией", ill: () => ILL.rupee("₹"), india: true },
  { t: "Интернет –<br>эквайринг", ill: ILL.phone },
  { t: "Бизнес-карты", ill: ILL.card },
  { t: "Кредиты для<br>бизнеса", ill: () => ILL.rupee("₽") }
];

const INDUSTRY = [
  { t: "Поиск поставщика<br>в Индии", s: "Полное сопровождение<br>на всех этапах сделки", ill: ILL.container, india: true },
  { t: "Услуги", s: "Сопровождение закупок<br>из Индии под ключ", ill: ILL.cubes, india: true },
  { t: "Недвижимость+", s: "Удобное управление<br>объектами недвижимости,<br>договорами аренды", ill: ILL.building, status: "Подключено", dark: true }
];

const INCLUDED = [
  ["monitor", "Поиск поставщика в Индии", "Полное сопровождение на всех<br>этапах сделки"],
  ["truck", "Предоставление образцов", "Поможем привезти образцы<br>продукции, включая<br>юридическое оформление"],
  ["meet", "Организация встреч", "Организуем видео встречу,<br>предоставим переводчика<br>и многое другое"],
  ["kp", "Предоставление КП", "Запросим коммерческие<br>предложения по выбранным<br>поставщикам на уникальных<br>условиях"]
];

/* Витрина: [иконка, название, подпись?, статус?, флаги] */
const SHOWCASE = [
  [
    ["Кредитные продукты", [["percent", "Кредиты"], ["car", "Лизинг"], ["factoring", "Факторинг"], ["history", "Кредитные истории"]]],
    ["Ведение счёта", [
      ["coins", "Заказ наличных", "Заказ денег через интернет-банк", null, { mega: true }],
      ["salary", "Зарплатный проект", "Удобный инструмент для выплаты зарплаты"],
      ["bell", "Уведомления об операциях по счёту"],
      ["incas", "Инкассация"],
      ["hub", "Центр управления счетами", "Работайте по нескольким компаниям сразу"],
      ["atm", "Внесение наличных", "Пополняйте счёт через банкомат", null, { guess: true }],
      ["card", "Бизнес-карты", null, "Подключено", { muted: true }],
      ["star", "Гособоронзаказ", "Банковское сопровождение в рамках 275-ФЗ"],
      "sep",
      ["calc", "Пакеты услуг СберБизнес", "Пакеты услуг — это бесплатное ведение счёта, СМС-уведомления, платежи без комиссии юрлицам-клиентам Сбера, выгодное обслуживание бизнес-карты."]
    ]],
    ["Сервисы для торговли", [
      ["basket", "«На полке»", "Выгодные оптовые закупки онлайн"],
      ["userbag", "Моя торговля", "Управление, учёт и продажи"],
      ["userbag", "Оператор фискальных данных — ОФД", "Подключение к лицензионному опертору"]
    ]],
    ["Бухгалтерия и финансовый учёт", [
      ["usercalc", "Бухгалтерия для ИП"], ["plusminus", "Моя бухглтерия Онлайн"], ["gov", "Отчётность в гос. органы"],
      ["cloudcalc", "Моя бухгалтерия Аутсорсинг"], ["analytics", "Бизнес-аналитика"]
    ]],
    ["Продукты глобальных рынков", [
      ["wave", "SberCIB Terminal", "Заключение сделок на финансовых рынках"],
      ["forward", "Валютный форвард (деривативы)", "Зафиксируйте курс будущего обмена валюты"]
    ]]
  ],
  [
    ["В помощь бизнесу", [
      ["clock", "Советы бизнесу за 120 секунд"], ["userplus", "Работа.ру"], ["question", "СберРейтинг"], ["userbox", "СберЛогистика"],
      ["user", "Юрист для бизнеса"], ["user", "Витрина спецпредложений"], ["usergear", "Проверка штрафов и начислений"],
      ["umbrella", "Комплаенс—помощник"], ["edit", "Изменения в ЕГРЮЛ/ЕГРИП"], ["userheart", "СберЗдоровье"],
      ["list", "CRM24", "Управление процессами и продажами"], ["usersearch", "Онлайн-проверка сотрудника"],
      ["cbonus", "Спасибо Бизнес"], ["taxi", "Корпоративное такси"],
      ["monitor", "Поиск поставщика в Индии", "Проверенные экспортеры из Индии", null, { india: true }]
    ]],
    ["Внешнеэкономическая деятельность", [
      ["globe", "Единое окно участника ВЭД"], ["taxback", "Возмещение налогов"], ["customs", "Таможенные платежи"], ["globe", "Уведомления ВК"],
      ["partner", "Банк бизнес-партнёров"], ["customsguard", "Таможенная гарантия"], ["shieldpct", "Страхование кредита поставщика"]
    ]],
    ["Страхование", [
      ["shieldum", "Страхование залога", "Защита имущества от непредвиженных рисков"],
      ["shieldum", "Личное страхование", "Страхование жизни и здоровья"]
    ]],
    ["СберБизнес API", [["api", "SberBusinessAPI", "Интеграция учётных систем"]]]
  ],
  [
    ["Финансовые и страховые услуги", [
      ["safe", "Депозиты и НСО на публичных условиях"], ["safe", "Депозиты и НСО на индивидуальных условиях"], ["bag", "Портал DA: залоговые активы"],
      ["safe", "Структурный депозит Range Accrual", null, "Подключено", { muted: true }], ["lc", "Аккредитивы"], ["lc", "Аккредитивы физических лиц"],
      ["safe", "Бивалютный депозит", "Выгодное размещение средств"]
    ]],
    ["Взаиморасчёты и документооборот", [
      ["sign", "Электронная подпись для торгов"], ["invoice", "Сервис выставления счетов"], ["edo", "Электронный документооборот"],
      ["archive", "Электронный архив"], ["taxback", "Возмещение налогов"]
    ]],
    ["Приём платежей", [
      ["cloudrub", "Интернет-эквайринг"], ["acqrub", "Торговый эквайринг"], ["userrub", "Платежи от физ. лиц"], ["ukassa", "ЮКасса"],
      ["evotor", "Онлайн-касса Эвотор"], ["profile", "Бизнес-профиль"], ["pos", "Смарт-POS"], ["b2b", "B2B-платежи"], ["sale", "Продажи в кредит"]
    ]],
    ["Продвижение в интернете", [
      ["site", "Создание сайтов для бизнеса"], ["gauge", "Продвижение бизнеса онлайн"], ["pin", "Вывеска в 2ГИС"], ["click", "СберКликстрим"]
    ]]
  ]
];

/* ================= Рендер страницы ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function renderSidebar() {
  $("#nav").innerHTML = NAV.map(g => g.map(([i, t]) => `<div class="nav-item">${ico(i)}<span>${t}</span></div>`).join("")).join('<div class="nav-sep"></div>');
}

function renderPage() {
  $("#recommend").innerHTML =
    `<div class="promo-stack edit-card" data-edit="promo" hidden>
       ${ico("promo", 'class="ico"')}<span class="badge">4</span>
       <div class="promo india-open"><div class="t">Поиск поставщика в Индии</div><div class="s">Полное сопровождение сделки на всех этапах</div></div>
     </div>` +
    RECOMMEND.map(c => `<div class="promo ${c.india ? "india-open" : ""}"><div class="t">${c.t}</div>${c.ill()}</div>`).join("");

  $("#industry").innerHTML = INDUSTRY.map(c => `
    <div class="promo tall ${c.india ? "india-open" : ""}">
      <div class="t">${c.t}</div><div class="s" style="${c.dark ? "color:var(--text)" : ""}">${c.s}</div>
      ${c.status ? `<div class="status">${c.status}</div>` : ""}${c.ill()}
    </div>`).join("");

  $("#included").innerHTML = INCLUDED.map(([i, t, s], n) => `
    <div class="mini ${n === 0 ? "india-open" : ""}">${ico(i)}<div><div class="t">${t}</div><div class="s">${s}</div></div></div>`).join("");

  $("#showcase").innerHTML = SHOWCASE.map(col => `<div class="sc-col">${col.map(([h, items]) => `
    <div class="sc-card"><h3>${h}</h3>${items.map(it => {
      if (it === "sep") return '<div class="sc-sep"></div>';
      const [i, t, s, st, f = {}] = it;
      return `<div class="sc-item ${f.muted ? "muted" : ""} ${f.india ? "india-open" : ""}" ${f.guess ? 'title="Пункт восстановлен по фрагменту — на фото виден только кусок подписи"' : ""}>
        ${ico(i)}<div class="body"><div class="t">${t}</div>${s ? `<div class="s">${s}</div>` : ""}${f.mega ? '<div class="mega"><i>★</i>Мега акция!</div>' : ""}</div>
        ${st ? `<div class="st">${st}</div>` : ""}</div>`;
    }).join("")}</div>`).join("")}</div>`).join("");
}

/* ================= Одностраничник IndiaMall ================= */
const FAQ_CURRENT = [
  ["— Могу ли я передать вам список интересующих меня позиций для подбора производителя?", "Текст ответа не виден на скриншоте (вопрос в макете свёрнут)."],
  ["— Имеют ли поставщики из Индии опыт работы с Российским рынком?", "Текст ответа не виден на скриншоте (вопрос в макете свёрнут)."],
  ["— У меня уже есть надежные поставщики из других стран. Зачем мне искать новых?", "Текст ответа не виден на скриншоте (вопрос в макете свёрнут)."]
];
const FAQ_NEW = [
  ["Какая стоимость услуги?", "Оплата 5000 рублей взимается только при заключении договора поставки. Сбербанк не увеличивает стоимость индийских товаров — наоборот, поддерживает клиента в переговорах с поставщиками, помогая добиться наиболее выгодных цен."],
  ["Что входит в услугу?", "Поиск и подбор поставщиков в Индии, проверка компаний, организация переговоров, сопровождение общения. Также возможна помощь с логистикой, расчётами и первыми поставками."],
  ["Проверяются ли поставщики?", "Да, проводится предварительная квалификация и базовая проверка компании по ключевым параметрам. Это позволяет снизить риск недобросовестных контрагентов."],
  ["По каким отраслям доступны списки поставщиков?", "Услуга доступна компаниям из основных направлений: агропромышленного комплекса, лёгкой промышленности, строительства и недвижимости, телекома, электроники, фармацевтики и химической промышленности, транспорта, топливно-энергетического комплекса, тяжёлой промышленности, а также других отраслей по запросу."],
  ["Как быстро можно получить список поставщиков?", "Если товар уже в базе — доступ к автореестру появится сразу после оплаты. Если нет — вы можете оставить заявку на подбор, наш менеджер свяжется с вами и озвучит сроки подбора. Стандартно — 5–10 рабочих дней."]
];
const faqHtml = (list) => list.map(([q, a]) => `<div class="faq-item"><button class="faq-q">${q}${ico("chevron")}</button><div class="faq-a">${a}</div></div>`).join("");

function indiaCurrent() {
  return `
  <section class="im-hero">
    ${ILL.heroBox()}
    <h1>IndiaMall</h1>
    <p>Онлайн сервис по выстраиванию надежных и взаимовыгодных торговых отношений между Индией и Россией</p>
    <button class="btn sm">Подключить</button>
  </section>
  <section class="im-sec alt">
    <div>${ILL.supplier()}</div>
    <div><h2>Работаем только с проверенными поставщиками</h2><ul>
      <li>Комплексное решение подбора поставщиков</li><li>Индивидуальный подход в выстраивании торговых связей</li>
      <li>Безопасные расчеты и юридическое сопровождение</li><li>Гибкий подход в выстраивании долгосрочных отношений</li></ul></div>
  </section>
  <section class="im-sec tight" style="background:#F7F7F7">
    <div><h2>Прозрачный и понятный подход</h2><ul>
      <li>Проверенна информация о поставщиках-производителях</li><li>Актуальные цены</li><li>Детальная спецификация на товары</li></ul></div>
    <div style="text-align:right">${ILL.transparent()}</div>
  </section>
  <section class="im-sec mint tight">
    <div>${ILL.services()}</div>
    <div><h2>Полный спектр услуг, покрывающий все потребности</h2><ul>
      <li>Организация и обеспечение переговоров</li><li>Юридическое сопровождение</li><li>Аудит производства</li><li>Сюрвейер товаров</li>
      <li>Сертификация</li><li>Доставка образцов товаров</li><li>Логистика - оценка, организация, контроль</li><li>Безопасные взаиморасчеты</li><li>Страхование</li></ul></div>
  </section>
  <section class="im-faq"><h2>Отвечаем на ваши вопросы</h2>${faqHtml(FAQ_CURRENT)}</section>
  <div class="im-cta"><button class="btn sm">Подключить</button></div>`;
}

function indiaNew() {
  return `
  <section class="im-hero">
    ${ILL.heroBox()}
    <h1>Поиск поставщика в Индии</h1>
    <p style="font-size:20px;background:none;padding:0">Проверенная база экспортеров.<br>Команда экспертов в России и Индии.<br>Комплексное сопровождение сделки на всех этапах.</p>
    <p style="font-size:15px;max-width:520px;background:rgba(255,255,255,.35);padding:12px 14px;border-radius:12px">Сбер работает в Индии с 2010 года. Мы — один из ключевых партнёров российско-индийского бизнеса. Наши решения помогают клиентам выстраивать эффективный международный бизнес и достигать стратегических целей.</p>
    <button class="btn sm">Оставить заявку</button>
  </section>
  <section class="im-sec alt">
    <div>${ILL.benefits()}</div>
    <div><h2>Преимущества сервиса</h2><ul>
      <li>Полный цикл сделки от подбора до логистики и расчетов</li><li>3000+ проверенных поставщиков в базе</li>
      <li>Доступность для всех категорий товаров</li><li>Поддержка на русском, английском и хинди</li>
      <li>Оплата по факту сделки</li><li>Офисы в Индии и команда в Москве</li></ul></div>
  </section>
  <section class="im-sec" style="background:#F7F7F7">
    <div><h2>Как это работает</h2>
      <ol style="margin:0;padding-left:22px">
        <li style="font-size:15px;font-weight:600;margin-bottom:12px">Заявка → <span style="font-weight:400">продукция, объёмы, цена</span></li>
        <li style="font-size:15px;font-weight:600;margin-bottom:12px">Подбор → <span style="font-weight:400">автореестр или ручной подбор, 5–10 дней</span></li>
        <li style="font-size:15px;font-weight:600;margin-bottom:12px">Проверка → <span style="font-weight:400">квалификация и репутация</span></li>
        <li style="font-size:15px;font-weight:600;margin-bottom:12px">Сделка → <span style="font-weight:400">помощь в организации переговоров, логистики, расчётов</span></li>
      </ol>
      <p style="margin:18px 0 0;font-size:15px">Персональный менеджер на всех этапах. Оплата — по факту сделки.</p></div>
    <div style="text-align:right">${ILL.steps()}</div>
  </section>
  <section class="im-sec mint tight">
    <div>${ILL.price()}</div>
    <div><h2>Сколько стоит услуга</h2>
      <div style="font-size:30px;font-weight:600;margin:-4px 0 4px">5000 ₽</div>
      <div style="font-size:15px;margin-bottom:18px">— только при заключении договора поставки.</div>
      <div style="font-size:15px;font-weight:600;margin-bottom:8px">Что входит:</div><ul>
      <li>Поиск и подбор поставщиков</li><li>Проверка компании</li><li>Организация переговоров</li>
      <li>Помощь с заказом и сертификацией образцов</li><li>Сопровождение сделки командой Сбера</li><li>Помощь с логистикой, расчётами и первой поставкой</li></ul></div>
  </section>
  <section class="im-faq"><h2>Вопросы</h2>${faqHtml(FAQ_NEW)}</section>
  <div class="im-cta"><button class="btn sm">Оставить заявку</button></div>`;
}

let indiaVersion = "current";
function openIndia(version) {
  if (version) indiaVersion = version;
  $("#india-body").innerHTML = indiaVersion === "new" ? indiaNew() : indiaCurrent();
  $$(".ver-btn").forEach(b => b.classList.toggle("on", b.dataset.ver === indiaVersion));
  openOverlay("#ov-india");
  $("#ov-india").scrollTop = 0;
}

/* ================= Модалки ================= */
function openOverlay(sel) { closePop(); $(sel).classList.add("open"); document.body.style.overflow = "hidden"; }
function closeOverlays() { $$(".overlay").forEach(o => o.classList.remove("open")); document.body.style.overflow = ""; }

/* ================= Комментарии (правки из Pixso) ================= */
const COMMENTS = [
  { id: "c1", anchor: "#sec-industry", x: -44, y: 60, date: "2026/10/30 10:09",
    html: `<p><b>Одностраничник</b> — новая версия текста страницы «IndiaMall».</p><p>1й скролл: Поиск поставщика в Индии… 2й скролл: Преимущества сервиса… 3й скролл: Как это работает… 4й скролл: Сколько стоит услуга… Вопросы…</p><p><em>Полный текст правки внесён в версию «С правками».</em></p>`,
    actions: [["Текущий макет", () => openIndia("current")], ["Версия с правками", () => openIndia("new")]] },
  { id: "c2", anchor: "#sec-recommend", x: -44, y: 60, date: "2026/10/30 10:07",
    html: `<p>Баннер Акции и новинки:<br>-веб</p><p>Поиск поставщика в Индии<br>Полное сопровождение сделки на всех этапах</p>`,
    actions: [["Показать карточку на странице", () => toggleEdit("promo", true)]] },
  { id: "c3", anchor: "#page-title", x: -44, y: -2, date: "2026/10/30 10:14",
    html: `<p>Контекстное предложение в виде алерта:</p><p>Текст: Поиск поставщика в Индии<br>Оставьте заявку на подбор поставщика с сопровождением от Сбера на всех этапах сделки.<br>- кнопка: Оставить заявку</p><p><em>Пример контекстного предложения: «Подписка СберБизнес Прайм»</em></p>`,
    actions: [["Показать алерт на странице", () => toggleEdit("alert", true)]] },
  { id: "c4", anchor: "#tabs-row", x: -44, y: 0, date: "2026/10/30 10:18 · 10:19",
    html: `<p>Поиск поставщика в Индии<br>или "Бизнес с Индией"<br><em>баннер</em></p><hr style="border:0;border-top:1px solid #eee"><p><em>Продажа продукта в Ghost Tab, гост таб Web</em></p><p>"Поиск поставщика в Индии"<br>или "Бизнес с Индией"</p>`,
    actions: [["Показать гост-таб", () => toggleEdit("ghost", true)]] },
  { id: "c5", anchor: "#sec-included", x: -44, y: 0, date: "2026/10/30 10:15",
    html: `<p><em>Success screen, аккордион</em><br>Заголовок: "Поиск поставщика в Индии"<br>Контекст: "Подбор поставщика с сопровождением на всех этапах сделки"</p><p><em>Переход на одностраничник с информацией</em></p>`,
    actions: [["Открыть экран успеха", () => openOverlay("#ov-success")]] },
  { id: "c6", anchor: "#sec-showcase", x: -44, y: 0, date: "2026/10/30 10:17",
    html: `<p><em>Блок персональные предложения по рекомендациям</em><br>Заголовок: "Поиск поставщика в Индии"<br>Контекст: "Полное сопровождение на всех этапах сделки"</p><p><em>Пример: блок «Рекомендации» с карточкой «Бизнес-карта»</em></p>`,
    actions: [["Открыть блок рекомендаций", () => openOverlay("#ov-reco")]] }
];

function renderPins() {
  COMMENTS.forEach(c => {
    const host = $(c.anchor); host.style.position = "relative";
    const b = document.createElement("button");
    b.className = "pin"; b.style.left = c.x + "px"; b.style.top = c.y + "px"; b.title = "Комментарий";
    b.innerHTML = "<span>A</span>";
    b.addEventListener("click", e => { e.stopPropagation(); openPop(c, b); });
    host.appendChild(b);
  });
}
function openPop(c, pinEl) {
  const pop = $("#cpop");
  $("#cpop-body").innerHTML = `
    <div class="cpop-head"><div class="av">A</div><div><div class="nm">amikhaylo…</div><div class="dt">${c.date}</div></div></div>
    ${c.html}<div class="cpop-actions"></div>`;
  const act = $(".cpop-actions", pop);
  c.actions.forEach(([label, fn]) => { const btn = document.createElement("button"); btn.className = "btn sm"; btn.textContent = label; btn.onclick = fn; act.appendChild(btn); });
  pop.classList.add("open");
  const r = pinEl.getBoundingClientRect();
  pop.style.left = Math.min(window.innerWidth - 380, r.right + 10) + "px";
  pop.style.top = Math.max(76, Math.min(window.innerHeight - pop.offsetHeight - 20, r.top)) + "px";
}
function closePop() { $("#cpop").classList.remove("open"); }

/* ================= Правки на странице ================= */
const editState = { promo: false, alert: false, ghost: false };
function toggleEdit(key, force) {
  editState[key] = force ?? !editState[key];
  $$(`[data-edit="${key}"]`).forEach(el => el.hidden = !editState[key]);
  const grid = $("#recommend");
  if (key === "promo") grid.classList.toggle("carousel", editState.promo);
  syncBar();
  if (force) { const el = $(`[data-edit="${key}"]`); el && el.scrollIntoView({ behavior: "smooth", block: "center" }); }
}
function syncBar() {
  $("#bar-comments").classList.toggle("on", document.body.classList.contains("show-comments"));
  const any = Object.values(editState).some(Boolean);
  $("#bar-edits").classList.toggle("on", any);
}

/* ================= События ================= */
document.addEventListener("click", e => {
  const t = e.target;
  if (t.closest(".faq-q")) t.closest(".faq-item").classList.toggle("open");
  if (t.closest(".acc-h")) t.closest(".acc").classList.toggle("open");
  if (t.closest(".india-open") && !t.closest(".pin")) { e.preventDefault(); openIndia(); }
  if (t.closest("[data-close]") || t.classList.contains("overlay")) closeOverlays();
  if (!t.closest("#cpop") && !t.closest(".pin")) closePop();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeOverlays(); closePop(); } });

window.addEventListener("DOMContentLoaded", () => {
  renderSidebar(); renderPage(); renderPins();
  $$(".ver-btn").forEach(b => b.onclick = () => openIndia(b.dataset.ver));
  $("#cpop-close").onclick = closePop;
  $("#bar-comments").onclick = () => { document.body.classList.toggle("show-comments"); closePop(); syncBar(); };
  $("#bar-edits").onclick = () => { const on = !Object.values(editState).some(Boolean); ["promo", "alert", "ghost"].forEach(k => toggleEdit(k, on)); };
  $("#bar-india").onclick = () => openIndia();
  $("#alert-close").onclick = () => toggleEdit("alert", false);
  $("#reco-ill").innerHTML = ILL.promoShield();
  $("#succ-ill").innerHTML = ILL.promoShield();
  // Открыть сразу одностраничник: index.html#india или #india-new
  if (location.hash === "#india") openIndia("current");
  if (location.hash === "#india-new") openIndia("new");
  syncBar();
});
