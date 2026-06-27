const maleNames = [
  "James","Robert","John","Michael","David","William","Richard","Joseph",
  "Thomas","Charles","Christopher","Daniel","Matthew","Anthony","Mark","Donald",
  "Steven","Paul","Andrew","Joshua","Kenneth","Kevin","Brian","George",
  "Timothy","Ronald","Edward","Jason","Jeffrey","Ryan","Jacob","Gary",
  "Nicholas","Eric","Jonathan","Stephen","Larry","Justin","Scott","Brandon",
  "Benjamin","Samuel","Gregory","Alexander","Patrick","Frank","Raymond","Jack",
  "Dennis","Jerry","Tyler","Aaron","Jose","Henry","Adam","Nathan",
  "Zachary","Kyle","Noah","Ethan","Jeremy","Christian","Sean","Austin",
  "Gabriel","Logan","Juan","Elijah","Dylan","Bryan","Jordan","Carl",
  "Vincent","Russell","Bobby","Johnny"
];

const femaleNames = [
  "Mary","Patricia","Jennifer","Linda","Elizabeth","Barbara","Susan","Jessica",
  "Sarah","Karen","Lisa","Nancy","Betty","Margaret","Sandra","Ashley",
  "Kimberly","Emily","Donna","Michelle","Carol","Amanda","Dorothy","Melissa",
  "Deborah","Stephanie","Rebecca","Sharon","Laura","Cynthia","Kathleen","Amy",
  "Angela","Shirley","Anna","Brenda","Pamela","Emma","Nicole","Helen",
  "Samantha","Katherine","Christine","Rachel","Carolyn","Janet","Maria","Heather",
  "Diane","Olivia","Julie","Joyce","Victoria","Kelly","Lauren","Christina",
  "Joan","Evelyn","Judith","Megan","Andrea","Hannah","Jacqueline","Martha",
  "Gloria","Teresa","Ann","Sara","Madison","Frances","Grace","Abigail",
  "Sophia","Charlotte","Marie","Isabella"
];

const lastNames = [
  "Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis",
  "Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas",
  "Taylor","Moore","Jackson","Martin","Lee","Perez","Thompson","White",
  "Harris","Sanchez","Clark","Ramirez","Lewis","Robinson","Walker","Young",
  "Allen","King","Wright","Scott","Torres","Nguyen","Hill","Flores",
  "Green","Adams","Nelson","Baker","Hall","Rivera","Campbell","Mitchell",
  "Carter","Roberts","Gomez","Phillips","Evans","Turner","Diaz","Parker",
  "Cruz","Edwards","Collins","Reyes","Stewart","Morris","Morales","Murphy",
  "Cook","Rogers","Gutierrez","Ortiz","Morgan","Cooper","Peterson","Bailey",
  "Reed","Kelly","Howard","Ramos","Kim","Cox","Ward","Richardson",
  "Watson","Brooks","Chavez","Wood","James","Bennett","Gray","Mendoza",
  "Ruiz","Hughes","Price","Alvarez","Castillo","Sanders","Patel","Myers",
  "Long","Ross","Foster","Jimenez"
];

const mbtiTypes = ["ISFJ","ESFJ","ISTJ","ISFP","ESTJ","ESFP","ENFP","ISTP",
  "INFP","ESTP","INTP","ENTP","ENFJ","INTJ","ENTJ","INFJ"];
const mbtiWeights = [13.8,12.3,11.6,8.8,8.7,8.5,8.1,5.4,4.4,4.3,3.3,3.2,2.5,2.1,1.8,1.5];

const flags = ["🇨🇳","🇮🇳","🇺🇸","🇮🇩","🇵🇰","🇳🇬","🇧🇷","🇧🇩","🇷🇺","🇲🇽",
  "🇯🇵","🇪🇹","🇵🇭","🇪🇬","🇻🇳","🇨🇩","🇮🇷","🇹🇷","🇩🇪","🇹🇭",
  "🇬🇧","🇫🇷","🇿🇦","🇮🇹","🇰🇪","🇰🇷","🇨🇴","🇪🇸","🇦🇷","🇺🇦",
  "🇩🇿","🇸🇩","🇺🇬","🇮🇶","🇦🇫","🇵🇱","🇨🇦","🇲🇦","🇸🇦","🇦🇺"];
const flagWeights = [1410,1430,335,277,240,223,216,173,144,128,
  123,127,117,112,98,102,89,85,84,72,
  68,68,60,59,55,52,52,48,46,37,
  45,48,47,45,42,38,39,37,37,26];

const KEY = "zmmtms_v2";
const GRAB_W = 10;

const startView = document.getElementById("startView");
const simView = document.getElementById("simView");
const slider = document.getElementById("slider");
const grab = document.getElementById("grab");
const val = document.getElementById("val");
const gen = document.getElementById("gen");
const reset = document.getElementById("reset");
const list = document.getElementById("list");
const listHead = document.getElementById("listHead");
const profile = document.getElementById("profile");

let value = 10;
let people = [];
let selected = null;

function weightedPick(arr) {
  return arr[Math.floor(Math.pow(Math.random(), 2) * arr.length)];
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
    profile.innerHTML = '<div class="dim">Select a person to view their profile.</div>';
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
}

function generate() {
  const used = new Set();
  people = [];
  for (let i = 0; i < value; i++) {
    const sex = Math.random() < 0.5 ? "Male" : "Female";
    const first = sex === "Male" ? weightedPick(maleNames) : weightedPick(femaleNames);
    people.push({
      name: first + " " + weightedPick(lastNames),
      sex: sex,
      age: randInt(1, 80),
      id: makeId(used),
      mbti: weightedChoice(mbtiTypes, mbtiWeights),
      flags: pickFlags()
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
