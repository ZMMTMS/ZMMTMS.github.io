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

const KEY = "zmmtms_v3";
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
const list = document.getElementById("list");
const listHead = document.getElementById("listHead");
const profile = document.getElementById("profileArea");

let value = 10;
let people = [];
let selected = null;

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
function parseEmoji(el) {
  if (window.twemoji) twemoji.parse(el, TWEMOJI_OPTS);
}

function renderSlider() {
  const width = slider.clientWidth;
  const frac = (value - 1) / 99;
  grab.style.left = (frac * (width - GRAB_W)) + "px";
  val.textContent = value;
}
function updateFromX(clientX) {
  const r = slider.getBoundingClientRect();
  const width = slider.clientWidth;
  let frac = (clientX - r.left - 1 - GRAB_W / 2) / (width - GRAB_W);
  frac = Math.max(0, Math.min(1, frac));
  value = Math.round(1 + frac * 99);
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
  renderList();
  renderProfile();
}

function renderList() {
  listHead.textContent = "People (" + people.length + ")";
  list.innerHTML = "";
  people.forEach((p, idx) => {
    const row = document.createElement("div");
    row.className = "row" + (idx === selected ? " selected" : "");
    row.textContent = p.name;
    row.addEventListener("click", () => {
      selected = idx;
      save();
      renderList();
      renderProfile();
    });
    list.appendChild(row);
  });
}

function renderProfile() {
  if (selected === null || !people[selected]) {
    profile.innerHTML = '<div class="dim">Select a person to view their card.</div>';
    return;
  }
  const p = people[selected];
  profile.innerHTML =
    '<div class="card">' +
      '<div class="card-name">' + p.name + '</div>' +
      '<div class="card-flags">' + p.flags.join(" ") + '</div>' +
      '<div class="card-row"><span class="card-key">Sex</span><span class="card-val">' + p.sex + '</span></div>' +
      '<div class="card-row"><span class="card-key">Age</span><span class="card-val">' + p.age + '</span></div>' +
      '<div class="card-row"><span class="card-key">Type</span><span class="card-val">' + p.mbti + '</span></div>' +
      '<div class="card-row"><span class="card-key">ID</span><span class="card-val card-id">' + p.id + '</span></div>' +
    '</div>';
  parseEmoji(profile);
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
      flags: flagList
    });
  }
  selected = null;
  save();
  showSim();
}

gen.addEventListener("click", generate);
reset.addEventListener("click", () => {
  localStorage.removeItem(KEY);
  people = [];
  selected = null;
  value = 10;
  showStart();
});

if (load()) {
  showSim();
} else {
  showStart();
}
