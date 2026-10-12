const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };

document.title = SITE.title;
$("title").textContent = SITE.title;
$("name").textContent = SITE.name;
$("tenure").textContent = SITE.tenure;
$("intro").textContent = SITE.intro;
$("signoff").textContent = SITE.signoff;
$("contact").textContent = SITE.contactLabel;
$("contact").href = SITE.contactHref;

function card(c, color) {
  const a = el("article", "card" + (c.wide ? " wide" : "") + (c.span ? " span2" : ""));
  a.style.setProperty("--c", color);
  if (c.photo) {
    const img = el("img"); img.src = "images/" + c.photo; img.alt = "Me with " + c.names; img.loading = "lazy";
    a.append(img);
  }
  const b = el("div", "body");
  b.append(el("h3", "", c.names));
  if (c.role) b.append(el("p", "role", c.role));
  b.append(el("p", "line", c.line));
  a.append(b);
  a.dataset.search = (c.names + " " + (c.role || "")).toLowerCase();
  return a;
}

const wall = $("wall"), chips = $("chips");
GROUPS.forEach((g) => {
  const s = el("section", "group"); s.id = g.id; s.dataset.group = g.id;
  s.append(el("h2", "", g.name));
  const row = el("div", "row");
  g.cards.forEach((c) => row.append(card(c, g.color)));
  s.append(row); wall.append(s);
  const chip = el("a", "chip", g.name); chip.href = "#" + g.id; chip.style.setProperty("--c", g.color);
  chips.append(chip);
});

GALLERY.forEach((p) => {
  const f = el("figure");
  const img = el("img"); img.src = "images/" + p.photo; img.alt = p.caption; img.loading = "lazy";
  f.append(img, el("figcaption", "", p.caption));
  $("gallery").append(f);
});

// confetti (only on click)
const cv = $("cv"), ctx = cv.getContext("2d");
let bits = [], raf;
function size() { cv.width = innerWidth; cv.height = innerHeight; }
addEventListener("resize", size); size();
function tick() {
  ctx.clearRect(0, 0, cv.width, cv.height);
  bits.forEach((b) => { b.vy += 0.12; b.x += b.vx; b.y += b.vy; b.r += b.vr;
    ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.r); ctx.fillStyle = b.c; ctx.fillRect(-b.s / 2, -b.s / 4, b.s, b.s / 2); ctx.restore(); });
  bits = bits.filter((b) => b.y < cv.height + 20);
  raf = bits.length ? requestAnimationFrame(tick) : null;
}
$("confetti").addEventListener("click", () => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cols = GROUPS.map((g) => g.color).concat(["#FF6B57", "#7C4DFF"]);
  for (let i = 0; i < 160; i++) bits.push({ x: cv.width / 2, y: cv.height * 0.7, vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 16 - 4, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3, s: 8 + Math.random() * 8, c: cols[i % cols.length] });
  if (!raf) tick();
});
