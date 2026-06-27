const firstNames = [
  "James","Mary","Robert","Patricia","John","Jennifer","Michael","Linda",
  "David","Elizabeth","William","Barbara","Richard","Susan","Joseph","Jessica",
  "Thomas","Sarah","Charles","Karen","Christopher","Lisa","Daniel","Nancy",
  "Matthew","Betty","Anthony","Margaret","Mark","Sandra","Donald","Ashley",
  "Steven","Kimberly","Paul","Emily","Andrew","Donna","Joshua","Michelle",
  "Kenneth","Carol","Kevin","Amanda","Brian","Dorothy","George","Melissa",
  "Timothy","Deborah","Ronald","Stephanie","Edward","Rebecca","Jason","Sharon",
  "Jeffrey","Laura","Ryan","Cynthia","Jacob","Kathleen","Gary","Amy",
  "Nicholas","Angela","Eric","Shirley","Jonathan","Anna","Stephen","Brenda",
  "Larry","Pamela","Justin","Emma","Scott","Nicole","Brandon","Helen",
  "Benjamin","Samantha","Samuel","Katherine","Gregory","Christine","Alexander","Rachel",
  "Patrick","Carolyn","Frank","Janet","Raymond","Maria","Jack","Heather",
  "Dennis","Diane","Jerry","Olivia","Tyler","Julie","Aaron","Joyce",
  "Jose","Victoria","Henry","Kelly","Adam","Lauren","Nathan","Christina",
  "Zachary","Joan","Kyle","Evelyn","Noah","Judith","Ethan","Megan",
  "Jeremy","Andrea","Christian","Hannah","Sean","Jacqueline","Austin","Martha",
  "Gabriel","Gloria","Logan","Teresa","Juan","Ann","Elijah","Sara",
  "Dylan","Madison","Bryan","Frances","Jordan","Grace","Carl","Abigail",
  "Vincent","Sophia","Russell","Charlotte","Bobby","Marie","Johnny","Isabella"
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

const KEY = "zmmtms_sim";
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
    '<div class="pf-row"><span class="pf-key">Name</span><span class="pf-val">' + p.name + '</span></div>' +
    '<div class="pf-row"><span class="pf-key">Age</span><span class="pf-val">' + p.age + '</span></div>' +
    '<div class="pf-row"><span class="pf-key">ID</span><span class="pf-val pf-id">' + p.id + '</span></div>';
}

function generate() {
  const used = new Set();
  people = [];
  for (let i = 0; i < value; i++) {
    people.push({
      name: weightedPick(firstNames) + " " + weightedPick(lastNames),
      age: randInt(1, 80),
      id: makeId(used)
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
