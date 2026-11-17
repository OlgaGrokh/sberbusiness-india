/* Упрощённые векторные иллюстрации — заглушки вместо 3D-картинок из макета.
   Чтобы поставить оригиналы, положите PNG в /img и замените SVG на <img> (см. README). */
window.ILL = {
  rupee: (sym = "₹") => `
  <svg class="ill" viewBox="0 0 200 168" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sph${sym === "₹" ? "r" : "b"}" cx="35%" cy="30%" r="75%">
        <stop offset="0" stop-color="#9AA0A6"/><stop offset=".35" stop-color="#3A3F44"/><stop offset="1" stop-color="#0D0F11"/>
      </radialGradient>
    </defs>
    <rect x="40" y="140" width="170" height="40" fill="#EEF0F2"/>
    <circle cx="125" cy="88" r="62" fill="url(#sph${sym === "₹" ? "r" : "b"})"/>
    <ellipse cx="105" cy="55" rx="22" ry="10" fill="#fff" opacity=".18" transform="rotate(-25 105 55)"/>
    <text x="125" y="112" text-anchor="middle" font-family="Arial" font-weight="700" font-size="72" fill="#5C6268" opacity=".9">${sym}</text>
  </svg>`,
  phone: () => `
  <svg class="ill" viewBox="0 0 200 168" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="gph" cx="40%" cy="30%" r="80%"><stop offset="0" stop-color="#8FE3C0"/><stop offset=".6" stop-color="#1D8C74"/><stop offset="1" stop-color="#0E4D52"/></radialGradient>
      <linearGradient id="gpb" x1="0" x2="1"><stop offset="0" stop-color="#2F8FB0"/><stop offset="1" stop-color="#1D5E7A"/></linearGradient>
    </defs>
    <circle cx="130" cy="96" r="60" fill="url(#gph)"/>
    <circle cx="78" cy="132" r="22" fill="url(#gpb)"/><circle cx="78" cy="132" r="11" fill="#163E52"/>
    <g transform="rotate(-14 130 80)">
      <rect x="100" y="22" width="62" height="112" rx="12" fill="#1E3F4B" stroke="#7FD3C8" stroke-width="3"/>
      <rect x="106" y="34" width="50" height="62" rx="4" fill="#E9F4F6"/>
      <path d="M118 70a9 9 0 0 1 2-17 12 12 0 0 1 22 3 8 8 0 0 1 0 15z" fill="none" stroke="#2B6E7E" stroke-width="2.5"/>
      <text x="131" y="88" text-anchor="middle" font-family="Arial" font-weight="700" font-size="14" fill="#2B6E7E">₽</text>
      <rect x="106" y="102" width="50" height="22" rx="3" fill="#2A5560"/>
    </g>
  </svg>`,
  card: () => `
  <svg class="ill" viewBox="0 0 200 168" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="gcd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5DB65A"/><stop offset="1" stop-color="#2E8B3A"/></linearGradient></defs>
    <rect x="44" y="40" width="150" height="96" rx="10" fill="#4C5A52"/>
    <rect x="40" y="30" width="150" height="96" rx="10" fill="url(#gcd)"/>
    <circle cx="54" cy="44" r="5" fill="none" stroke="#fff" stroke-width="2"/>
    <text x="63" y="48" font-family="Arial" font-weight="700" font-size="11" fill="#fff">СБЕР</text>
    <text x="96" y="48" font-family="Arial" font-size="9" fill="#E3F4E3">Бизнес</text>
    <circle cx="164" cy="108" r="8" fill="#EB001B"/><circle cx="174" cy="108" r="8" fill="#F79E1B" opacity=".9"/>
  </svg>`,
  container: () => `
  <svg class="ill" viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gct" x1="0" x2="1"><stop offset="0" stop-color="#9BE39B"/><stop offset="1" stop-color="#5FBF6A"/></linearGradient>
      <linearGradient id="gcs" x1="0" x2="1"><stop offset="0" stop-color="#4FAE5C"/><stop offset="1" stop-color="#2F8A43"/></linearGradient>
    </defs>
    <polygon points="20,60 150,30 236,52 106,82" fill="url(#gct)"/>
    <polygon points="20,60 106,82 106,210 20,186" fill="url(#gcs)"/>
    <polygon points="106,82 236,52 236,184 106,210" fill="#6BCB72"/>
    ${Array.from({length: 13}, (_, i) => `<line x1="${114 + i * 9.5}" y1="${81 - i * 2.2}" x2="${114 + i * 9.5}" y2="${206 - i * 2}" stroke="#3E9B4D" stroke-width="3"/>`).join("")}
    <line x1="48" y1="70" x2="48" y2="192" stroke="#2B7A3A" stroke-width="3"/>
    <line x1="78" y1="76" x2="78" y2="200" stroke="#2B7A3A" stroke-width="3"/>
  </svg>`,
  cubes: () => `
  <svg class="ill" viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gq1" x1="0" x2="1"><stop offset="0" stop-color="#BFEDE3"/><stop offset="1" stop-color="#7CCFC2"/></linearGradient>
      <linearGradient id="gq2" x1="0" x2="1"><stop offset="0" stop-color="#6CC4B8"/><stop offset="1" stop-color="#C9E86A"/></linearGradient>
    </defs>
    <polygon points="10,170 140,205 240,175 110,140" fill="#D8EFEA"/>
    ${[[30,120],[95,135],[150,80],[150,20],[205,95]].map(([x,y]) => `
      <g transform="translate(${x},${y})">
        <polygon points="0,10 30,0 60,10 30,20" fill="#E4F7F3"/>
        <polygon points="0,10 30,20 30,65 0,55" fill="url(#gq1)"/>
        <polygon points="30,20 60,10 60,55 30,65" fill="url(#gq2)"/>
      </g>`).join("")}
  </svg>`,
  building: () => `
  <svg class="ill" viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="gbd" x1="0" x2="1"><stop offset="0" stop-color="#DDEBFA"/><stop offset="1" stop-color="#8FB6EA"/></linearGradient></defs>
    <rect x="0" y="0" width="220" height="210" fill="#F4F8FD"/>
    <polygon points="60,40 120,20 120,210 60,210" fill="url(#gbd)"/>
    <polygon points="120,20 175,40 175,210 120,210" fill="#A9C7F0"/>
    <polygon points="20,120 70,105 70,210 20,210" fill="#C9DCF5"/>
    <polygon points="150,110 210,90 210,210 150,210" fill="#4A79D8"/>
    ${Array.from({length: 7}, (_, r) => Array.from({length: 3}, (_, c) => `<rect x="${70 + c * 15}" y="${55 + r * 20}" width="8" height="10" fill="#fff" opacity=".7"/>`).join("")).join("")}
  </svg>`,
  promoShield: () => `
  <svg class="ill" viewBox="0 0 170 150" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="gsh" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="#E6F7F4"/><stop offset=".5" stop-color="#7FD1C4"/><stop offset="1" stop-color="#2A7F86"/></radialGradient></defs>
    <circle cx="105" cy="82" r="56" fill="url(#gsh)"/>
    <rect x="66" y="64" width="90" height="56" rx="8" fill="#107F8C"/>
    <rect x="58" y="56" width="90" height="56" rx="8" fill="#2AA394"/>
    <text x="72" y="78" font-family="Arial" font-size="10" fill="#fff" font-weight="700">IN ⇄ RU</text>
    <path d="M70 96h40M70 104h26" stroke="#DFF5F1" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  /* Иллюстрации одностраничника (линейные, в стиле макета) */
  heroBox: () => `
  <svg class="ill" viewBox="0 0 560 420" preserveAspectRatio="xMaxYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hb1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9ED8C4"/><stop offset="1" stop-color="#2E7F70"/></linearGradient>
      <linearGradient id="hb2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5FA898"/><stop offset="1" stop-color="#1F5E55"/></linearGradient>
    </defs>
    <g transform="rotate(-22 330 230)">
      <rect x="200" y="170" width="260" height="230" rx="46" fill="url(#hb2)"/>
      ${[[250,210],[350,200],[250,300],[350,290]].map(([x,y]) => `<circle cx="${x+40}" cy="${y+40}" r="40" fill="#1E5A52" stroke="#9EE0CC" stroke-width="3"/><path d="M${x+22} ${y+40}h36M${x+40} ${y+22}v36" stroke="#CDEFE3" stroke-width="3" stroke-linecap="round" opacity=".7"/>`).join("")}
      <rect x="230" y="-10" width="220" height="150" rx="40" fill="url(#hb1)"/>
    </g>
    ${Array.from({length: 120}, (_, i) => { const x = 180 + ((i * 97) % 380), y = 160 + ((i * 53) % 260), s = 3 + (i % 5) * 1.6; return `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="${i % 3 ? "#E9F2EF" : "#B9C9C4"}" transform="rotate(${i * 37} ${x} ${y})" opacity=".85"/>`; }).join("")}
  </svg>`,
  lineBrowser: () => `
  <svg class="pic" viewBox="0 0 440 300" fill="none" stroke="#3E8F86" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M190 20H40a20 20 0 0 0-20 20v180a20 20 0 0 0 20 20h150"/><path d="M250 20h120a20 20 0 0 1 20 20v70"/>
    <path d="M20 70h370"/><circle cx="60" cy="45" r="4"/><circle cx="95" cy="45" r="4"/><circle cx="130" cy="45" r="4"/>
    <rect x="70" y="100" width="120" height="70"/><path d="M70 205h110M70 235h70"/>
    <path d="M255 300V160a25 25 0 0 1 50 0v60M305 200a22 22 0 0 1 44 0v20M349 210a22 22 0 0 1 44 0v40c0 30-15 50-30 50"/>
    <path d="M255 220c-25-20-50-10-40 20l40 60"/>
  </svg>`,
  lineDoc: () => `
  <svg class="pic" viewBox="0 0 360 300" fill="none" stroke="#7FA79F" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M220 10H60a20 20 0 0 0-20 20v270"/><path d="M220 10l100 110v40"/><path d="M220 10v90a20 20 0 0 0 20 20h80"/>
    <path d="M80 60h90M80 100h60M80 150h170M80 195h170M80 240h50"/>
    <path d="M250 195v60a15 15 0 0 0 15 15h40v30M180 300c0-30 30-40 50-30"/>
  </svg>`,
  lineChart: () => `
  <svg class="pic" viewBox="0 0 440 300" fill="none" stroke="#3E8F86" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 200l100-90 50 40 110-110"/><path d="M230 30h60v60"/>
    <path d="M150 300v-90a25 25 0 0 1 50 0v40M200 230v-60a25 25 0 0 1 50 0v100M250 250V110a25 25 0 0 1 50 0v150"/>
    <path d="M300 200l30-30a25 25 0 0 1 35 35l-60 80"/><path d="M90 300l60-40"/>
  </svg>`,
  lineSteps: () => `
  <svg class="pic" viewBox="0 0 400 300" fill="none" stroke="#3E8F86" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="40"/><circle cx="210" cy="70" r="40"/><circle cx="70" cy="220" r="40"/><circle cx="210" cy="220" r="40"/>
    <path d="M110 70h60M210 110v70M170 220h-60"/><path d="M250 220h90l-20-20M340 220l-20 20"/>
  </svg>`,
  lineRuble: () => `
  <svg class="pic" viewBox="0 0 360 300" fill="none" stroke="#7FA79F" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="40" width="300" height="200" rx="24"/><path d="M150 200V90h50a32 32 0 0 1 0 64h-70M130 180h70"/>
  </svg>`
};
