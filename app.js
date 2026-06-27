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
  {name:"Anxiety disorder",p:0.12,spectrum:true,desc:"Excessive, persistent worry or fear that interferes with daily life."},
  {name:"Depression",p:0.08,spectrum:true,desc:"A mood disorder causing persistent sadness and loss of interest."},
  {name:"Dyslexia",p:0.07,desc:"A learning difference affecting reading and word processing."},
  {name:"Misophonia",p:0.06,desc:"Strong emotional reactions to specific sounds such as chewing."},
  {name:"ADHD",p:0.05,spectrum:true,desc:"Attention-deficit/hyperactivity disorder; affects focus and impulse control."},
  {name:"Dyscalculia",p:0.04,desc:"A learning difference affecting the understanding of numbers and maths."},
  {name:"PTSD",p:0.035,spectrum:true,desc:"Post-traumatic stress disorder following a traumatic event."},
  {name:"Obsessive-compulsive PD",p:0.03,desc:"A personality pattern of perfectionism, control and orderliness."},
  {name:"Aphantasia",p:0.03,desc:"The inability to voluntarily form mental images in the mind."},
  {name:"Synesthesia",p:0.03,desc:"A blending of senses, e.g. seeing colours when hearing sounds."},
  {name:"Autism spectrum",p:0.025,spectrum:true,desc:"A developmental difference affecting social interaction and behaviour."},
  {name:"Avoidant PD",p:0.022,desc:"A pattern of social inhibition and intense fear of rejection."},
  {name:"Prosopagnosia",p:0.02,desc:"Face blindness; difficulty recognising familiar faces."},
  {name:"Paranoid PD",p:0.018,desc:"A pattern of pervasive distrust and suspicion of others."},
  {name:"Bipolar disorder",p:0.015,spectrum:true,desc:"Mood swings between depressive lows and manic highs."},
  {name:"Eating disorder",p:0.015,desc:"A serious condition involving disturbed eating behaviours."},
  {name:"Antisocial PD",p:0.015,spectrum:true,desc:"A pattern of disregard for the rights and feelings of others."},
  {name:"Trichotillomania",p:0.014,desc:"A recurring urge to pull out one's own hair."},
  {name:"Borderline PD",p:0.014,spectrum:true,desc:"Instability in mood, self-image and relationships."},
  {name:"OCD",p:0.012,spectrum:true,desc:"Obsessive-compulsive disorder; intrusive thoughts and repetitive rituals."},
  {name:"Narcissistic PD",p:0.01,spectrum:true,desc:"A pattern of grandiosity, need for admiration and low empathy."},
  {name:"Psychopathy",p:0.01,spectrum:true,desc:"Traits of low empathy, charm and impulsivity, gauged by the PCL-R scale."},
  {name:"Histrionic PD",p:0.009,desc:"A pattern of excessive emotionality and attention-seeking."},
  {name:"Schizoid PD",p:0.009,desc:"Detachment from social relationships and a narrow range of emotion."},
  {name:"Schizotypal PD",p:0.008,desc:"Eccentric behaviour and acute discomfort with close relationships."},
  {name:"Tourette syndrome",p:0.006,desc:"A nervous-system condition causing involuntary movements and sounds."},
  {name:"Schizophrenia",p:0.005,spectrum:true,desc:"A disorder affecting thought, perception and the sense of reality."},
  {name:"Narcolepsy",p:0.0005,desc:"A sleep disorder causing sudden, uncontrollable bouts of sleep."},
  {name:"Huntington's disease",p:0.00007,desc:"An inherited disorder causing progressive degeneration of the brain."},
  {name:"Capgras delusion",p:0.00002,desc:"The belief that a loved one has been replaced by an identical impostor."},
  {name:"Stendhal syndrome",p:0.00001,desc:"Dizziness and racing heart when viewing intensely beautiful art."},
  {name:"Cotard's delusion",p:0.00001,desc:"The delusion that one is dead, dying or does not exist."},
  {name:"Alien hand syndrome",p:0.000005,desc:"A hand that acts on its own without conscious control."},
  {name:"Foreign accent syndrome",p:0.000002,desc:"Speech that suddenly takes on what sounds like a foreign accent."},
  {name:"Hyperthymesia",p:0.0000005,desc:"An extraordinarily detailed memory of one's own life."},
  {name:"Fatal familial insomnia",p:0.0000005,desc:"An ultra-rare inherited disease of progressive, untreatable insomnia."}
];
const condInfo = {};
for (const c of conditions) condInfo[c.name] = c;

const wealthTiers = [
  {lo:100,hi:50000,w:12,neg:true},
  {lo:1,hi:10000,w:30},
  {lo:10000,hi:100000,w:33},
  {lo:100000,hi:1000000,w:23.8},
  {lo:1000000,hi:10000000,w:1.0},
  {lo:10000000,hi:100000000,w:0.15},
  {lo:100000000,hi:1000000000,w:0.04},
  {lo:1000000000,hi:100000000000,w:0.01},
  {lo:100000000000,hi:1000000000000,w:0.0005},
  {lo:1000000000000,hi:100000000000000,w:0.00005}
];

const KEY = "zmmtms_v6";
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
const dashboard = document.getElementById("dashboard");
const logScreen = document.getElementById("logScreen");
const logBody = document.getElementById("logBody");
const tabDash = document.getElementById("tabDash");
const tabLog = document.getElementById("tabLog");

let value = 10;
let people = [];
let selected = null;
let searchTerm = "";
let log = [];
let view = "dashboard";

const tip = document.createElement("div");
tip.id = "tip";
document.body.appendChild(tip);

function randPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
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
function randInt(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
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
function rollSeverity() {
  const band = weightedChoice([[20, 39], [40, 69], [70, 98]], [55, 32, 13]);
  return randInt(band[0], band[1]);
}
function sevInfo(pct) {
  if (pct < 40) return { label: "Mild", cls: "sev-mild" };
  if (pct < 70) return { label: "Moderate", cls: "sev-mod" };
  return { label: "Severe", cls: "sev-sev" };
}
function rollConditions() {
  const out = [];
  for (const c of conditions) {
    if (Math.random() < c.p) out.push({ name: c.name, sev: c.spectrum ? rollSeverity() : null });
  }
  return out;
}
function rollMoney() {
  const t = weightedChoice(wealthTiers, wealthTiers.map((x) => x.w));
  const lo = Math.log10(t.lo), hi = Math.log10(t.hi);
  const v = Math.round(Math.pow(10, lo + Math.random() * (hi - lo)));
  return t.neg ? -v : v;
}
function rollHappiness() {
  return Math.round(((Math.random() + Math.random()) / 2) * 100);
}
function formatMoney(v) {
  const a = Math.abs(v), s = v < 0 ? "-" : "";
  if (a >= 1e12) return s + "$" + (a / 1e12).toFixed(a >= 1e13 ? 0 : 1) + "T";
  if (a >= 1e9) return s + "$" + (a / 1e9).toFixed(a >= 1e10 ? 0 : 1) + "B";
  if (a >= 1e6) return s + "$" + (a / 1e6).toFixed(a >= 1e7 ? 0 : 1) + "M";
  return s + "$" + Math.round(a).toLocaleString("en-US");
}
function parseEmoji(el) {
  if (window.twemoji) twemoji.parse(el, TWEMOJI_OPTS);
}
function infoSpan(name) {
  const d = condInfo[name] ? condInfo[name].desc : "";
  return '<span class="info" data-desc="' + d + '">i</span>';
}

function addLog(msg, type) {
  const t = new Date().toTimeString().slice(0, 8);
  log.unshift({ t: t, msg: msg, type: type || "info" });
  if (log.length > 500) log.length = 500;
  if (view === "log") renderLog();
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
  localStorage.setItem(KEY, JSON.stringify({ people, selected, value, log, view }));
}
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    people = data.people || [];
    selected = (data.selected !== undefined) ? data.selected : null;
    value = data.value || 10;
    log = data.log || [];
    view = data.view || "dashboard";
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
  setView(view);
  renderStats();
  renderList();
  renderProfile();
}

function setView(v) {
  view = v;
  const dash = v === "dashboard";
  dashboard.style.display = dash ? "flex" : "none";
  logScreen.style.display = dash ? "none" : "flex";
  tabDash.classList.toggle("active", dash);
  tabLog.classList.toggle("active", !dash);
  if (!dash) renderLog();
  save();
}

function renderList() {
  const term = searchTerm.toLowerCase();
  let shown = 0;
  list.innerHTML = "";
  people.forEach((p) => {
    if (term && !p.name.toLowerCase().includes(term)) return;
    shown++;
    const row = document.createElement("div");
    row.className = "row" + (p.id === selected ? " selected" : "");
    row.dataset.id = p.id;

    const name = document.createElement("span");
    name.className = "row-name";
    name.textContent = p.name;

    const kill = document.createElement("button");
    kill.className = "kill";
    kill.textContent = "✕";
    kill.title = "Kill";
    kill.addEventListener("click", (e) => { e.stopPropagation(); killPerson(p.id); });

    row.appendChild(name);
    row.appendChild(kill);
    row.addEventListener("click", () => setSelected(p.id));
    list.appendChild(row);
  });
  listHead.textContent = term
    ? "People (" + shown + "/" + people.length + ")"
    : "People (" + people.length + ")";
}

function setSelected(id) {
  selected = (selected === id) ? null : id;
  [...list.children].forEach((c) => {
    c.classList.toggle("selected", c.dataset.id === selected);
  });
  save();
  renderProfile();
}

function killPerson(id) {
  const p = people.find((x) => x.id === id);
  people = people.filter((x) => x.id !== id);
  if (selected === id) selected = null;
  if (p) addLog(p.name + " was killed.", "kill");
  save();
  renderStats();
  renderList();
  renderProfile();
}

function renderProfile() {
  const p = people.find((x) => x.id === selected);
  if (!p) {
    profile.innerHTML = '<div class="placeholder-box">Click a profile to open it</div>';
    return;
  }
  const condHtml = p.conditions.length
    ? p.conditions.map((c) => {
        const nameLine = '<div class="cond-name"><span>' + c.name + '</span>' + infoSpan(c.name) + '</div>';
        if (c.sev == null) return '<div class="cond">' + nameLine + '</div>';
        const info = sevInfo(c.sev);
        return '<div class="cond">' + nameLine +
          '<div class="cond-bar"><div class="cond-fill ' + info.cls + '" style="width:' + c.sev + '%"></div></div>' +
          '<div class="cond-meta">' + info.label + ' &middot; ' + c.sev + '%</div></div>';
      }).join("")
    : '<div class="cond dim">None</div>';

  const moneyCls = p.money < 0 ? "money-neg" : "money-pos";
  profile.innerHTML =
    '<div class="card">' +
      '<div class="card-name">' +
        '<span class="card-name-text">' + p.name + '</span>' +
        '<span class="card-name-flags">' + p.flags.join(" ") + '</span>' +
      '</div>' +
      '<div class="card-fixed">' +
        '<div class="card-row"><span class="card-key">Sex</span><span class="card-val">' + p.sex + '</span></div>' +
        '<div class="card-row"><span class="card-key">Age</span><span class="card-val">' + p.age + '</span></div>' +
        '<div class="card-row"><span class="card-key">Money</span><span class="card-val ' + moneyCls + '">' + formatMoney(p.money) + '</span></div>' +
        '<div class="card-row"><span class="card-key">Happiness</span><span class="card-val">' + p.happiness + '</span></div>' +
        '<div class="card-row"><span class="card-key">Type</span><span class="card-val">' + p.mbti + '</span></div>' +
        '<div class="card-row"><span class="card-key">ID</span><span class="card-val card-id">' + p.id + '</span></div>' +
      '</div>' +
      '<div class="card-cond-head">Conditions</div>' +
      '<div class="card-cond-body">' + condHtml + '</div>' +
    '</div>';

  const nameEl = profile.querySelector(".card-name");
  if (nameEl) nameEl.addEventListener("click", () => setSelected(selected));
  parseEmoji(profile);
}

function statRow(k, v) {
  return '<div class="stat-row"><span class="stat-key">' + k + '</span><span class="stat-val">' + v + '</span></div>';
}
function stat2(k1, v1, k2, v2) {
  let h = '<div class="stat-row2"><span class="s2"><span class="stat-key">' + k1 + '</span><span class="stat-val">' + v1 + '</span></span>';
  if (k2 !== "") h += '<span class="s2"><span class="stat-key">' + k2 + '</span><span class="stat-val">' + v2 + '</span></span>';
  return h + '</div>';
}

function renderStats() {
  const n = people.length;
  if (!n) { stats.innerHTML = ""; return; }
  let male = 0, ageSum = 0, happySum = 0, withCond = 0, totalConds = 0;
  let mil = 0, bil = 0, tril = 0, debt = 0;
  const flagCount = {}, condCount = {}, condSevSum = {};
  for (const p of people) {
    if (p.sex === "Male") male++;
    ageSum += p.age;
    happySum += p.happiness;
    if (p.money >= 1e12) tril++;
    else if (p.money >= 1e9) bil++;
    else if (p.money >= 1e6) mil++;
    if (p.money < 0) debt++;
    if (p.conditions.length) withCond++;
    for (const f of p.flags) flagCount[f] = (flagCount[f] || 0) + 1;
    for (const c of p.conditions) {
      condCount[c.name] = (condCount[c.name] || 0) + 1;
      totalConds++;
      if (c.sev != null) condSevSum[c.name] = (condSevSum[c.name] || 0) + c.sev;
    }
  }
  const pct = (x) => Math.round((x / n) * 100);
  const flagTotal = Object.values(flagCount).reduce((a, b) => a + b, 0);
  const topFlags = Object.entries(flagCount).sort((a, b) => b[1] - a[1]).slice(0, 3);
  const condList = conditions
    .map((c) => ({ name: c.name, cnt: condCount[c.name] || 0, p: c.p, spectrum: c.spectrum }))
    .sort((a, b) => b.cnt - a.cnt || b.p - a.p);

  let html = "";
  html += stat2("Population", n, "Avg. age", Math.round(ageSum / n));
  html += stat2("Male", pct(male) + "%", "Female", pct(n - male) + "%");
  html += stat2("Avg. happy", Math.round(happySum / n), "In debt", pct(debt) + "%");
  html += stat2("Millionaires", mil, "Billionaires", bil);
  html += stat2("Trillionaires", tril, "&ge;1 condition", pct(withCond) + "%");
  html += statRow("Avg. conditions", (totalConds / n).toFixed(2));

  html += '<div class="stat-sub">Top origins</div>';
  for (const [f, c] of topFlags) {
    html += '<div class="stat-row"><span class="stat-flag">' + f + " " + (flagNames[f] || "") +
      '</span><span class="stat-val">' + Math.round((c / flagTotal) * 100) + "%</span></div>";
  }

  html += '<div class="stat-sub">Conditions</div>';
  for (const c of condList) {
    html += '<div class="stat-row"><span class="stat-key">' + c.name + ' ' + infoSpan(c.name) +
      '</span><span class="stat-val">' + pct(c.cnt) + '% <span class="stat-dim">(' + c.cnt + ')</span></span></div>';
    if (c.spectrum && c.cnt > 0) {
      html += '<div class="stat-note">Avg. severity ' + Math.round(condSevSum[c.name] / c.cnt) + '%</div>';
    }
  }

  stats.innerHTML = html;
  parseEmoji(stats);
}

function renderLog() {
  if (!log.length) { logBody.innerHTML = '<div class="dim">No events yet.</div>'; return; }
  logBody.innerHTML = log.map((e) =>
    '<div class="log-line log-' + e.type + '"><span class="log-time">' + e.t + '</span>' + e.msg + '</div>'
  ).join("");
}

function generate() {
  const used = new Set();
  people = [];
  for (let i = 0; i < value; i++) {
    const sex = Math.random() < 0.5 ? "Male" : "Female";
    const flagList = pickFlags();
    people.push({
      id: makeId(used),
      name: makeName(flagList[0], sex),
      sex: sex,
      age: randInt(1, 80),
      money: rollMoney(),
      happiness: rollHappiness(),
      mbti: weightedChoice(mbtiTypes, mbtiWeights),
      flags: flagList,
      conditions: rollConditions()
    });
  }
  selected = null;
  searchTerm = "";
  search.value = "";
  log = [];
  addLog("Spawned " + value + " people.", "spawn");
  save();
  showSim();
}

gen.addEventListener("click", generate);
search.addEventListener("input", () => { searchTerm = search.value; renderList(); });
tabDash.addEventListener("click", () => setView("dashboard"));
tabLog.addEventListener("click", () => setView("log"));
reset.addEventListener("click", () => {
  localStorage.removeItem(KEY);
  people = [];
  selected = null;
  value = 10;
  searchTerm = "";
  search.value = "";
  log = [];
  view = "dashboard";
  showStart();
});

document.addEventListener("mouseover", (e) => {
  const el = e.target.closest ? e.target.closest(".info") : null;
  if (el && el.dataset.desc) showTip(el.dataset.desc, e.clientX, e.clientY);
});
document.addEventListener("mousemove", (e) => {
  if (tip.style.display !== "block") return;
  const el = e.target.closest ? e.target.closest(".info") : null;
  if (el && el.dataset.desc) showTip(el.dataset.desc, e.clientX, e.clientY);
  else hideTip();
});
document.addEventListener("mouseout", (e) => {
  if (e.target.closest && e.target.closest(".info")) hideTip();
});
function showTip(text, x, y) {
  tip.textContent = text;
  tip.style.display = "block";
  const pad = 14;
  const r = tip.getBoundingClientRect();
  let tx = x + pad, ty = y + pad;
  if (tx + r.width > window.innerWidth - 6) tx = x - r.width - pad;
  if (ty + r.height > window.innerHeight - 6) ty = y - r.height - pad;
  tip.style.left = Math.max(6, tx) + "px";
  tip.style.top = Math.max(6, ty) + "px";
}
function hideTip() { tip.style.display = "none"; }

if (load()) {
  showSim();
} else {
  showStart();
}
