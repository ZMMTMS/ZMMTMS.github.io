const nameSets = {
  western: {
    m: ["James","John","Michael","David","William","Robert","Daniel","Matthew","Andrew","Ryan"],
    f: ["Mary","Jennifer","Linda","Elizabeth","Susan","Sarah","Jessica","Emily","Emma","Olivia"],
    last: ["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Wilson","Taylor","Anderson"]
  },
  hispanic: {
    m: ["José","Juan","Luis","Carlos","Miguel","Jorge","Manuel","Diego","Javier","Antonio"],
    f: ["María","Carmen","Ana","Isabel","Sofía","Lucía","Laura","Elena","Daniela","Valentina"],
    last: ["García","Martínez","López","González","Rodríguez","Pérez","Sánchez","Ramírez","Torres","Flores"]
  },
  arabic: {
    m: ["Mohammed","Ahmed","Ali","Omar","Hassan","Ibrahim","Yusuf","Khalid","Mahmoud","Tariq"],
    f: ["Fatima","Aisha","Maryam","Layla","Zainab","Noor","Amira","Yasmin","Salma","Khadija"],
    last: ["Al-Sayed","Hassan","Ahmed","Mansour","Saleh","Aziz","Haddad","Nasser","Khan","Farouk"]
  },
  chinese: {
    m: ["Wei","Jun","Hao","Lei","Ming","Tao","Peng","Yong","Gang","Feng"],
    f: ["Fang","Min","Jing","Yan","Na","Hong","Ying","Xia","Mei","Juan"],
    last: ["Wang","Li","Zhang","Liu","Chen","Yang","Huang","Zhao","Wu","Zhou"]
  },
  indian: {
    m: ["Aarav","Arjun","Rohan","Aditya","Rahul","Vikram","Amit","Karan","Suresh","Raj"],
    f: ["Aanya","Priya","Anjali","Neha","Pooja","Divya","Kavya","Meera","Sunita","Lakshmi"],
    last: ["Sharma","Patel","Singh","Kumar","Gupta","Reddy","Nair","Rao","Das","Mehta"]
  },
  japanese: {
    m: ["Haruto","Yuto","Sota","Hayato","Riku","Ren","Daiki","Kenta","Takashi","Hiroshi"],
    f: ["Yui","Aoi","Hana","Sakura","Yuna","Mio","Rin","Akari","Hina","Keiko"],
    last: ["Sato","Suzuki","Takahashi","Tanaka","Watanabe","Ito","Yamamoto","Nakamura","Kobayashi","Kato"]
  },
  korean: {
    m: ["Min-jun","Seo-jun","Do-yun","Ji-ho","Joon","Hyun","Seung","Jin","Sung-min","Tae-yang"],
    f: ["Seo-yeon","Ji-woo","Min-seo","Ha-eun","Soo-jin","Hye-jin","Eun-ji","Yu-na","Ji-eun","Bo-ram"],
    last: ["Kim","Lee","Park","Choi","Jung","Kang","Cho","Yoon","Jang","Lim"]
  },
  vietnamese: {
    m: ["Anh","Minh","Hoang","Tuan","Duc","Nam","Khanh","Long","Hung","Quang"],
    f: ["Linh","Huong","Lan","Mai","Thuy","Ngoc","Hanh","Trang","Phuong","Thao"],
    last: ["Nguyen","Tran","Le","Pham","Hoang","Phan","Vu","Dang","Bui","Do"]
  },
  thai: {
    m: ["Somchai","Anan","Niran","Decha","Krit","Arthit","Prasit","Chai","Wirat","Surasak"],
    f: ["Siri","Malee","Achara","Kanya","Lawan","Pranee","Sukanya","Wanida","Ratana","Nong"],
    last: ["Saengthong","Wongsawat","Chankaew","Phongsiri","Srisuk","Boonmee","Rattanakorn","Thongchai","Sutthiwong","Kittisak"]
  },
  indonesian: {
    m: ["Budi","Agus","Andi","Joko","Bambang","Eko","Rizki","Putra","Wahyu","Dwi"],
    f: ["Siti","Dewi","Sri","Putri","Ayu","Indah","Wulan","Rina","Fitri","Maya"],
    last: ["Wijaya","Susanto","Hidayat","Saputra","Pratama","Nugroho","Santoso","Halim","Gunawan","Kurniawan"]
  },
  russian: {
    m: ["Alexander","Dmitri","Ivan","Sergei","Andrei","Mikhail","Nikolai","Vladimir","Pavel","Maxim"],
    f: ["Olga","Elena","Natalia","Irina","Tatiana","Svetlana","Ekaterina","Yulia","Anastasia","Nadia"],
    last: ["Ivanov","Smirnov","Kuznetsov","Popov","Volkov","Petrov","Sokolov","Novikov","Morozov","Pavlov"]
  },
  polish: {
    m: ["Jakub","Jan","Piotr","Krzysztof","Andrzej","Tomasz","Paweł","Michał","Marcin","Łukasz"],
    f: ["Anna","Maria","Katarzyna","Małgorzata","Agnieszka","Magdalena","Joanna","Ewa","Zofia","Julia"],
    last: ["Nowak","Kowalski","Wiśniewski","Wójcik","Kowalczyk","Kamiński","Lewandowski","Zieliński","Szymański","Woźniak"]
  },
  german: {
    m: ["Lukas","Felix","Maximilian","Paul","Leon","Jonas","Finn","Elias","Hans","Klaus"],
    f: ["Marie","Sophie","Maria","Emma","Hannah","Mia","Anna","Lena","Laura","Sabine"],
    last: ["Müller","Schmidt","Schneider","Fischer","Weber","Meyer","Wagner","Becker","Schulz","Hoffmann"]
  },
  french: {
    m: ["Lucas","Louis","Hugo","Jules","Nathan","Léo","Gabriel","Arthur","Antoine","Pierre"],
    f: ["Emma","Léa","Chloé","Manon","Camille","Sarah","Marie","Julie","Lucie","Inès"],
    last: ["Martin","Bernard","Dubois","Thomas","Robert","Petit","Durand","Leroy","Moreau","Lefebvre"]
  },
  italian: {
    m: ["Francesco","Alessandro","Lorenzo","Matteo","Andrea","Gabriele","Marco","Giuseppe","Antonio","Luca"],
    f: ["Sofia","Giulia","Aurora","Alice","Martina","Chiara","Sara","Francesca","Elena","Giorgia"],
    last: ["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Colombo","Ricci","Marino","Greco"]
  },
  persian: {
    m: ["Ali","Reza","Hossein","Amir","Mohammad","Mehdi","Saeed","Farhad","Babak","Arash"],
    f: ["Fatemeh","Zahra","Maryam","Sara","Niloufar","Shirin","Leila","Nasrin","Parisa","Mahsa"],
    last: ["Hosseini","Mohammadi","Ahmadi","Rezaei","Karimi","Tehrani","Jafari","Moradi","Sadeghi","Bagheri"]
  },
  turkish: {
    m: ["Mehmet","Mustafa","Ahmet","Ali","Hasan","Emre","Murat","Yusuf","Burak","Kerem"],
    f: ["Fatma","Ayşe","Emine","Zeynep","Elif","Merve","Esra","Selin","Derya","Ece"],
    last: ["Yılmaz","Kaya","Demir","Şahin","Çelik","Yıldız","Yıldırım","Öztürk","Aydın","Arslan"]
  },
  nigerian: {
    m: ["Chinedu","Emeka","Oluwaseun","Tunde","Ifeanyi","Babatunde","Obi","Adebayo","Yusuf","Musa"],
    f: ["Ngozi","Chioma","Amara","Folake","Funmilayo","Adaeze","Ifeoma","Blessing","Zainab","Aisha"],
    last: ["Okafor","Adeyemi","Okonkwo","Abubakar","Eze","Balogun","Obi","Adebayo","Nwosu","Okeke"]
  },
  africanEast: {
    m: ["Abebe","Dawit","Tesfaye","Kamau","Mwangi","Otieno","Juma","Solomon","Bekele","Omondi"],
    f: ["Tigist","Meron","Selam","Wanjiku","Akinyi","Njeri","Aster","Hanna","Amani","Zawadi"],
    last: ["Tesfaye","Bekele","Kamau","Mwangi","Otieno","Abebe","Getachew","Wanjala","Kiprop","Mutua"]
  },
  brazilian: {
    m: ["João","Pedro","Lucas","Gabriel","Matheus","Rafael","Felipe","Bruno","Gustavo","Thiago"],
    f: ["Maria","Ana","Beatriz","Juliana","Camila","Larissa","Fernanda","Mariana","Gabriela","Bruna"],
    last: ["Silva","Santos","Oliveira","Souza","Lima","Pereira","Ferreira","Costa","Rodrigues","Almeida"]
  }
};

const flags = ["🇨🇳","🇮🇳","🇺🇸","🇮🇩","🇵🇰","🇳🇬","🇧🇷","🇧🇩","🇷🇺","🇲🇽",
  "🇯🇵","🇪🇹","🇵🇭","🇪🇬","🇻🇳","🇨🇩","🇮🇷","🇹🇷","🇩🇪","🇹🇭",
  "🇬🇧","🇫🇷","🇿🇦","🇮🇹","🇰🇪","🇰🇷","🇨🇴","🇪🇸","🇦🇷","🇺🇦",
  "🇩🇿","🇸🇩","🇺🇬","🇮🇶","🇦🇫","🇵🇱","🇨🇦","🇲🇦","🇸🇦","🇦🇺"];
const flagWeights = [1410,1430,335,277,240,223,216,173,144,128,
  123,127,117,112,98,102,89,85,84,72,
  68,68,60,59,55,52,52,48,46,37,
  45,48,47,45,42,38,39,37,37,26];

const flagNames = {
  "🇨🇳":"China","🇮🇳":"India","🇺🇸":"USA","🇮🇩":"Indonesia","🇵🇰":"Pakistan",
  "🇳🇬":"Nigeria","🇧🇷":"Brazil","🇧🇩":"Bangladesh","🇷🇺":"Russia","🇲🇽":"Mexico",
  "🇯🇵":"Japan","🇪🇹":"Ethiopia","🇵🇭":"Philippines","🇪🇬":"Egypt","🇻🇳":"Vietnam",
  "🇨🇩":"DR Congo","🇮🇷":"Iran","🇹🇷":"Turkey","🇩🇪":"Germany","🇹🇭":"Thailand",
  "🇬🇧":"UK","🇫🇷":"France","🇿🇦":"South Africa","🇮🇹":"Italy","🇰🇪":"Kenya",
  "🇰🇷":"South Korea","🇨🇴":"Colombia","🇪🇸":"Spain","🇦🇷":"Argentina","🇺🇦":"Ukraine",
  "🇩🇿":"Algeria","🇸🇩":"Sudan","🇺🇬":"Uganda","🇮🇶":"Iraq","🇦🇫":"Afghanistan",
  "🇵🇱":"Poland","🇨🇦":"Canada","🇲🇦":"Morocco","🇸🇦":"Saudi Arabia","🇦🇺":"Australia"
};

const flagToSet = {
  "🇨🇳":"chinese","🇮🇳":"indian","🇺🇸":"western","🇮🇩":"indonesian","🇵🇰":"arabic",
  "🇳🇬":"nigerian","🇧🇷":"brazilian","🇧🇩":"arabic","🇷🇺":"russian","🇲🇽":"hispanic",
  "🇯🇵":"japanese","🇪🇹":"africanEast","🇵🇭":"hispanic","🇪🇬":"arabic","🇻🇳":"vietnamese",
  "🇨🇩":"french","🇮🇷":"persian","🇹🇷":"turkish","🇩🇪":"german","🇹🇭":"thai",
  "🇬🇧":"western","🇫🇷":"french","🇿🇦":"western","🇮🇹":"italian","🇰🇪":"africanEast",
  "🇰🇷":"korean","🇨🇴":"hispanic","🇪🇸":"hispanic","🇦🇷":"hispanic","🇺🇦":"russian",
  "🇩🇿":"arabic","🇸🇩":"arabic","🇺🇬":"africanEast","🇮🇶":"arabic","🇦🇫":"persian",
  "🇵🇱":"polish","🇨🇦":"western","🇲🇦":"arabic","🇸🇦":"arabic","🇦🇺":"western"
};

const mbtiTypes = ["ISFJ","ESFJ","ISTJ","ISFP","ESTJ","ESFP","ENFP","ISTP",
  "INFP","ESTP","INTP","ENTP","ENFJ","INTJ","ENTJ","INFJ"];
const mbtiWeights = [13.8,12.3,11.6,8.8,8.7,8.5,8.1,5.4,4.4,4.3,3.3,3.2,2.5,2.1,1.8,1.5];

const conditions = [
  {name:"Anxiety disorder",p:0.12},{name:"Depression",p:0.08},{name:"Dyslexia",p:0.07},
  {name:"Misophonia",p:0.06},{name:"ADHD",p:0.05},{name:"Dyscalculia",p:0.04},
  {name:"PTSD",p:0.035},{name:"Aphantasia",p:0.03},{name:"Synesthesia",p:0.03},
  {name:"Autism spectrum",p:0.025},{name:"Prosopagnosia",p:0.02},{name:"Bipolar disorder",p:0.015},
  {name:"Eating disorder",p:0.015},{name:"Trichotillomania",p:0.015},{name:"OCD",p:0.012},
  {name:"Tourette syndrome",p:0.006},{name:"Schizophrenia",p:0.005},{name:"Narcolepsy",p:0.0005},
  {name:"Huntington's disease",p:0.00007},{name:"Capgras delusion",p:0.00002},
  {name:"Stendhal syndrome",p:0.00001},{name:"Cotard's delusion",p:0.00001},
  {name:"Alien hand syndrome",p:0.000005},{name:"Foreign accent syndrome",p:0.000002},
  {name:"Hyperthymesia",p:0.0000005},{name:"Fatal familial insomnia",p:0.0000005}
];

const KEY = "zmmtms_v4";
const MAX = 1000;
const GRAB_W = 10;
const TWEMOJI_OPTS = {
  base: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@master/assets/",
  folder: "svg",
  ext: ".svg"
};

const startView = document.getElementById("startView");
const simView = document.getElementById("simView");
const slider = document.getElementById("slider");
const grab = document.getElementById("grab");
const val = document.getElementById("val");
const gen = document.getElementById("gen");
const reset = document.getElementById("reset");
const search = document.getElementById("search");
const list = document.getElementById("list");
const listHead = document.getElementById("listHead");
const profile = document.getElementById("profileArea");
const stats = document.getElementById("stats");

let value = 10;
let people = [];
let selected = null;
let searchTerm = "";

function randPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function weightedChoice(items, weights) {
  let total = 0;
  for (const w of weights) total += w;
  let r = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r < 0) return items[i];
  }
  return items[items.length - 1];
}
function randInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
function makeId(used) {
  const chars = "0123456789ABCDEF";
  let id;
  do {
    id = "";
    for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * 16)];
  } while (used.has(id));
  used.add(id);
  return id;
}
function pickFlags() {
  const count = weightedChoice([1, 2, 3], [70, 24, 6]);
  const chosen = [];
  let guard = 0;
  while (chosen.length < count && guard < 50) {
    const f = weightedChoice(flags, flagWeights);
    if (!chosen.includes(f)) chosen.push(f);
    guard++;
  }
  return chosen;
}
function makeName(primaryFlag, sex) {
  const set = nameSets[flagToSet[primaryFlag]] || nameSets.western;
  const first = sex === "Male" ? randPick(set.m) : randPick(set.f);
  return first + " " + randPick(set.last);
}
function rollConditions() {
  const out = [];
  for (const c of conditions) {
    if (Math.random() < c.p) out.push(c.name);
  }
  return out;
}
function parseEmoji(el) {
  if (window.twemoji) twemoji.parse(el, TWEMOJI_OPTS);
}

function renderSlider() {
  const width = slider.clientWidth;
  const frac = (value - 1) / (MAX - 1);
  grab.style.left = (frac * (width - GRAB_W)) + "px";
  val.textContent = value;
}
function updateFromX(clientX) {
  const r = slider.getBoundingClientRect();
  const width = slider.clientWidth;
  let frac = (clientX - r.left - 1 - GRAB_W / 2) / (width - GRAB_W);
  frac = Math.max(0, Math.min(1, frac));
  value = Math.round(1 + frac * (MAX - 1));
  renderSlider();
}

let dragging = false;
slider.addEventListener("mousedown", (e) => { dragging = true; updateFromX(e.clientX); });
window.addEventListener("mousemove", (e) => { if (dragging) updateFromX(e.clientX); });
window.addEventListener("mouseup", () => { dragging = false; });

function save() {
  localStorage.setItem(KEY, JSON.stringify({ people, selected, value }));
}
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    people = data.people || [];
    selected = (data.selected !== undefined) ? data.selected : null;
    value = data.value || 10;
    return people.length > 0;
  } catch (e) {
    return false;
  }
}

function showStart() {
  simView.style.display = "none";
  startView.style.display = "block";
  renderSlider();
}
function showSim() {
  startView.style.display = "none";
  simView.style.display = "flex";
  renderStats();
  renderList();
  renderProfile();
}

function renderList() {
  const term = searchTerm.toLowerCase();
  let shown = 0;
  list.innerHTML = "";
  people.forEach((p, idx) => {
    if (term && !p.name.toLowerCase().includes(term)) return;
    shown++;
    const row = document.createElement("div");
    row.className = "row" + (idx === selected ? " selected" : "");
    row.dataset.idx = idx;
    row.textContent = p.name;
    row.addEventListener("click", () => setSelected(idx));
    list.appendChild(row);
  });
  listHead.textContent = term
    ? "People (" + shown + "/" + people.length + ")"
    : "People (" + people.length + ")";
}

function setSelected(idx) {
  selected = (selected === idx) ? null : idx;
  [...list.children].forEach((c) => {
    c.classList.toggle("selected", Number(c.dataset.idx) === selected);
  });
  save();
  renderProfile();
}

function renderProfile() {
  if (selected === null || !people[selected]) {
    profile.innerHTML = '<div class="placeholder-box">Click a profile to open it</div>';
    return;
  }
  const p = people[selected];
  const condHtml = p.conditions.length
    ? p.conditions.map((c) => '<div class="cond">' + c + '</div>').join("")
    : '<div class="cond dim">None</div>';
  profile.innerHTML =
    '<div class="card">' +
      '<div class="card-name">' + p.name + '</div>' +
      '<div class="card-flags">' + p.flags.join(" ") + '</div>' +
      '<div class="card-row"><span class="card-key">Sex</span><span class="card-val">' + p.sex + '</span></div>' +
      '<div class="card-row"><span class="card-key">Age</span><span class="card-val">' + p.age + '</span></div>' +
      '<div class="card-row"><span class="card-key">Type</span><span class="card-val">' + p.mbti + '</span></div>' +
      '<div class="card-row"><span class="card-key">ID</span><span class="card-val card-id">' + p.id + '</span></div>' +
      '<div class="card-section">' +
        '<div class="card-sec-title">Conditions</div>' +
        condHtml +
      '</div>' +
    '</div>';
  const nameEl = profile.querySelector(".card-name");
  if (nameEl) nameEl.addEventListener("click", () => setSelected(selected));
  parseEmoji(profile);
}

function statRow(k, v) {
  return '<div class="stat-row"><span class="stat-key">' + k + '</span><span class="stat-val">' + v + '</span></div>';
}

function renderStats() {
  const n = people.length;
  if (!n) { stats.innerHTML = ""; return; }
  let male = 0, ageSum = 0, withCond = 0;
  const flagCount = {}, condCount = {};
  for (const p of people) {
    if (p.sex === "Male") male++;
    ageSum += p.age;
    if (p.conditions.length) withCond++;
    for (const f of p.flags) flagCount[f] = (flagCount[f] || 0) + 1;
    for (const c of p.conditions) condCount[c] = (condCount[c] || 0) + 1;
  }
  const pct = (x) => Math.round((x / n) * 100);
  const flagTotal = Object.values(flagCount).reduce((a, b) => a + b, 0);
  const topFlags = Object.entries(flagCount).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const topConds = Object.entries(condCount).sort((a, b) => b[1] - a[1]).slice(0, 4);

  let html = "";
  html += statRow("Population", n);
  html += statRow("Male", pct(male) + "%");
  html += statRow("Female", pct(n - male) + "%");
  html += statRow("Avg age", Math.round(ageSum / n));

  html += '<div class="stat-sub">Top origins</div>';
  for (const [f, c] of topFlags) {
    html += '<div class="stat-row"><span class="stat-flag">' + f + " " + (flagNames[f] || "") +
      '</span><span class="stat-val">' + Math.round((c / flagTotal) * 100) + "%</span></div>";
  }

  html += '<div class="stat-sub">Conditions</div>';
  html += statRow("With a condition", pct(withCond) + "%");
  for (const [c, cnt] of topConds) {
    html += '<div class="stat-row"><span class="stat-key">' + c + '</span><span class="stat-val">' + pct(cnt) + "%</span></div>";
  }

  stats.innerHTML = html;
  parseEmoji(stats);
}

function generate() {
  const used = new Set();
  people = [];
  for (let i = 0; i < value; i++) {
    const sex = Math.random() < 0.5 ? "Male" : "Female";
    const flagList = pickFlags();
    people.push({
      name: makeName(flagList[0], sex),
      sex: sex,
      age: randInt(1, 80),
      id: makeId(used),
      mbti: weightedChoice(mbtiTypes, mbtiWeights),
      flags: flagList,
      conditions: rollConditions()
    });
  }
  selected = null;
  searchTerm = "";
  search.value = "";
  save();
  showSim();
}

gen.addEventListener("click", generate);
search.addEventListener("input", () => { searchTerm = search.value; renderList(); });
reset.addEventListener("click", () => {
  localStorage.removeItem(KEY);
  people = [];
  selected = null;
  value = 10;
  searchTerm = "";
  search.value = "";
  showStart();
});

if (load()) {
  showSim();
} else {
  showStart();
}
