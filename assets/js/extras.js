/**
 * extras.js — bagian pelengkap interaktif Bab 1:
 * kata kunci (chips), pertanyaan diskusi (accordion), latihan (checklist
 * tersimpan di localStorage), daftar pustaka, grafik Chart.js (tema-aware),
 * dan diagram Mermaid (tema-aware). Data dari data.js (APP_DATA).
 */
(function () {
  "use strict";

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function esc(s) {
    if (window.TPAMain && window.TPAMain.esc) return window.TPAMain.esc(s);
    return String(s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }
  var REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function smoothTo(id) {
    var el = $(id);
    if (!el) return;
    var top = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top: top, behavior: REDUCED ? "auto" : "smooth" });
  }

  /* ---------- Navigasi antar bab ---------- */
  function initChapters() {
    var nav = $("#chapter-nav");
    if (!nav) return;
    var btn = nav.querySelector(".chapter-btn");
    var menu = nav.querySelector(".chapter-menu");
    var label = nav.querySelector(".chapter-btn-label");
    if (!btn || !menu || !(APP_DATA.CHAPTERS || []).length) return;
    var current = null;
    APP_DATA.CHAPTERS.forEach(function (c) { if (c.current) current = c; });
    if (label && current) label.textContent = "Bab " + current.n;
    menu.innerHTML = APP_DATA.CHAPTERS.map(function (c) {
      if (c.href) {
        return '<button type="button" class="chapter-item' + (c.current ? " current" : "") + '" role="menuitem" data-href="' + esc(c.href) + '">' +
          '<span class="chapter-num">' + c.n + '</span><span class="chapter-item-txt">Bab ' + c.n + ' · ' + esc(c.title) + '</span>' +
          '<span class="chapter-soon">' + (c.current ? "Aktif" : "Buka") + '</span></button>';
      }
      return '<div class="chapter-item locked" role="menuitem" aria-disabled="true">' +
        '<span class="chapter-num">' + c.n + '</span><span class="chapter-item-txt">Bab ' + c.n + ' · ' + esc(c.title) + '</span>' +
        '<span class="chapter-soon">Segera</span></div>';
    }).join("");

    function setOpen(open) {
      btn.setAttribute("aria-expanded", String(open));
      menu.hidden = !open;
    }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(menu.hidden);
    });
    menu.addEventListener("click", function (e) {
      var it = e.target.closest(".chapter-item[data-href]");
      if (!it) return;
      setOpen(false);
      var h = it.getAttribute("data-href");
      if (!h) return;
      if (h.charAt(0) === "#") smoothTo(h);
      else window.location.href = h;
    });
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /* ---------- Kata kunci ---------- */
  function initKeywords() {
    var box = $("#kw-cloud");
    if (!box || !(APP_DATA.KEYWORDS || []).length) return;
    box.innerHTML = APP_DATA.KEYWORDS.map(function (k) {
      return '<button type="button" class="kw-chip" data-to="' + esc(k.to) + '">' + esc(k.t) + "</button>";
    }).join("");
    Array.prototype.forEach.call(box.querySelectorAll(".kw-chip"), function (chip) {
      chip.addEventListener("click", function () { smoothTo(chip.getAttribute("data-to")); });
    });
  }

  /* ---------- Pertanyaan diskusi (accordion) ---------- */
  function initDiskusi() {
    var box = $("#diskusi-list");
    if (!box || !(APP_DATA.DISKUSI || []).length) return;
    box.innerHTML = APP_DATA.DISKUSI.map(function (d, i) {
      return '<details class="acc-item">' +
        '<summary><span class="acc-num">' + (i + 1) + '</span><span class="acc-q">' + esc(d.q) + '</span><span class="icon acc-chev" data-lucide="chevron-down"></span></summary>' +
        '<div class="acc-body"><span class="icon" data-lucide="lightbulb"></span><p>' + esc(d.h) + "</p></div>" +
        "</details>";
    }).join("");
    if (window.lucide && lucide.createIcons) { try { lucide.createIcons(); } catch (e) {} }
  }

  /* ---------- Latihan (checklist + localStorage) ---------- */
  var LAT_KEY = "sdl-latihan";
  function loadDone() {
    try { return JSON.parse(localStorage.getItem(LAT_KEY)) || []; } catch (e) { return []; }
  }
  function saveDone(arr) {
    try { localStorage.setItem(LAT_KEY, JSON.stringify(arr)); } catch (e) {}
  }
  function initLatihan() {
    var list = $("#latihan-list");
    if (!list || !(APP_DATA.LATIHAN || []).length) return;
    var done = loadDone();
    list.innerHTML = APP_DATA.LATIHAN.map(function (l, i) {
      var checked = done.indexOf(i) > -1;
      return '<li class="lat-item' + (checked ? " done" : "") + '" data-i="' + i + '">' +
        '<button type="button" class="lat-check" aria-pressed="' + checked + '" aria-label="Tandai selesai">' +
        '<span class="icon" data-lucide="check"></span></button>' +
        '<div class="lat-body"><span class="lat-tag">' + esc(l.tag) + '</span><p>' + esc(l.t) + "</p></div>" +
        "</li>";
    }).join("");
    if (window.lucide && lucide.createIcons) { try { lucide.createIcons(); } catch (e) {} }
    Array.prototype.forEach.call(list.querySelectorAll(".lat-item"), function (item) {
      var i = +item.getAttribute("data-i");
      item.querySelector(".lat-check").addEventListener("click", function () {
        var d = loadDone();
        var idx = d.indexOf(i);
        if (idx > -1) d.splice(idx, 1); else d.push(i);
        saveDone(d);
        item.classList.toggle("done", idx === -1);
        var btn = item.querySelector(".lat-check");
        btn.setAttribute("aria-pressed", String(idx === -1));
        updateLatProgress();
      });
    });
    updateLatProgress();
  }
  function updateLatProgress() {
    var n = (APP_DATA.LATIHAN || []).length;
    var done = loadDone().length;
    var fill = $("#lat-fill"), count = $("#lat-count");
    if (fill) fill.style.width = (n ? (done / n) * 100 : 0) + "%";
    if (count) count.textContent = done + " / " + n + " selesai";
  }

  /* ---------- Daftar pustaka ---------- */
  function initPustaka() {
    var box = $("#pustaka-list");
    if (!box || !(APP_DATA.PUSTAKA || []).length) return;
    box.innerHTML = APP_DATA.PUSTAKA.map(function (g) {
      return '<h3 class="pustaka-group">' + esc(g.group) + "</h3>" +
        '<ul class="pustaka-list">' + g.items.map(function (it) {
          return "<li>" + esc(it) + "</li>";
        }).join("") + "</ul>";
    }).join("");
  }

  /* ---------- Tema & warna (Chart.js + Mermaid) ---------- */
  function themeColors() {
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    var cs = getComputedStyle(document.documentElement);
    function v(n) { return cs.getPropertyValue(n).trim(); }
    return {
      dark: dark,
      sage: v("--sage"), terra: v("--terra"), muted: v("--muted"),
      muted2: v("--muted-2"), text: v("--text"), border: v("--border-strong"), surface: v("--surface"),
      open: v("--terra"),
      sanitary: v("--sage"),
      lainnya: dark ? "#33534F" : "#B9CCC7",
      mmFill: dark ? "#10302E" : "#E2EFEE",
      mmStroke: dark ? "#3FA9A5" : "#0E7C7B",
      mmLine: dark ? "#33534F" : "#8FB5B2",
      accentFill: dark ? "#33290F" : "#FAF2E0",
      accentStroke: dark ? "#E5B45C" : "#D9A441",
      accentText: dark ? "#EDC584" : "#96690F"
    };
  }

  /* ---------- Chart.js ---------- */
  var charts = {};
  function buildCharts() {
    if (!window.Chart) return;
    var c = themeColors();
    Chart.defaults.font.family = "'Space Mono', monospace";
    Chart.defaults.font.size = 11;
    Chart.defaults.color = c.muted;

    var c1 = $("#chart-timbulan");
    if (c1) {
      if (charts.timbulan) charts.timbulan.destroy();
      charts.timbulan = new Chart(c1, {
        type: "bar",
        data: {
          labels: APP_DATA.CHART_TIMBULAN.labels,
          datasets: [{ data: APP_DATA.CHART_TIMBULAN.data, backgroundColor: [c.sage, c.muted2, c.terra], borderRadius: 8, maxBarThickness: 64 }]
        },
        options: {
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (ctx) { return " " + ctx.parsed.y.toLocaleString("id-ID") + " juta ton"; } } } },
          scales: { y: { beginAtZero: true, grid: { color: c.border }, ticks: { callback: function (v) { return v; } } }, x: { grid: { display: false } } }
        }
      });
    }
    var c2 = $("#chart-tpa");
    if (c2) {
      if (charts.tpa) charts.tpa.destroy();
      charts.tpa = new Chart(c2, {
        type: "doughnut",
        data: {
          labels: APP_DATA.CHART_TPA.labels,
          datasets: [{ data: APP_DATA.CHART_TPA.data, backgroundColor: [c.open, c.sanitary, c.lainnya], borderColor: c.surface, borderWidth: 2 }]
        },
        options: {
          maintainAspectRatio: false,
          cutout: "62%",
          plugins: { legend: { position: "bottom", labels: { boxWidth: 12, padding: 12, usePointStyle: true } } }
        }
      });
    }
    var cap1 = $("#cap-timbulan"); if (cap1) cap1.textContent = APP_DATA.CHART_TIMBULAN.caption;
    var cap2 = $("#cap-tpa"); if (cap2) cap2.textContent = APP_DATA.CHART_TPA.caption;
  }

  /* ---------- Mermaid ---------- */
  function mmSources(c) {
    return {
      "mm-klasifikasi": [
        "flowchart LR",
        'R["Sumber daya alam dan lingkungan"] --> S["Tidak terbarukan · stok"]',
        'R --> F["Terbarukan · aliran"]',
        'R --> B["Terbarukan · stok biologis"]',
        'R --> E["Jasa ekosistem"]',
        'S --> S1["Dapat didaur ulang · nikel, tembaga"]',
        'S --> S2["Terdegradasi saat dipakai · migas, batu bara"]:::leak',
        'F --> F1["Surya, angin, pasang surut"]',
        'B --> B1["Hutan, perikanan, air tanah, tanah"]',
        'B1 --> B2["Zona kritis: regenerasi gagal"]:::leak',
        'E --> E1["Penyediaan · pengaturan · habitat · budaya"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;"
      ].join("\n"),
      "mm-cld": [
        "flowchart TD",
        'A["Permintaan perumahan & komersial"] -->|＋| B["Harga lahan peri-urban"]',
        'B -->|＋| C["Konversi sawah → terbangun"]',
        'C -->|＋| D["Pasokan lahan terbangun"]',
        'D -->|−| A',
        'C -->|＋| E["Kehilangan fungsi tata air sawah"]',
        'E -->|＋| F["Risiko & kerugian banjir"]',
        'F -->|＋| G["Biaya proteksi & tekanan regulasi"]',
        'G -->|−| A',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class C,E leak'
      ].join("\n"),
      "mm-dpsir": [
        "flowchart LR",
        'D["D · Driving forces"] --> P["P · Pressures"]',
        'P --> S["S · State"]',
        'S --> I["I · Impact"]',
        'I --> R["R · Response"]',
        'R -. umpan balik .-> D',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class I leak'
      ].join("\n"),
      "mm-triangulasi": [
        "flowchart TD",
        'M["Baca metadata kedua sumber"] --> B["Identifikasi perbedaan definisi / metode / cakupan"]',
        'B --> C{"Apakah selisih dapat dijelaskan?"}',
        'C -->|Ya| D["Laporkan rentang + konteks; bandingkan yang sepadan"]',
        'C -->|Tidak| E["Susun estimasi ketiga independen; verifikasi lapangan"]',
        'D --> F["Rekomendasi tangguh pada seluruh rentang bukti"]',
        'E --> F',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class C leak'
      ].join("\n"),
      "mm-aliran": [
        "flowchart LR",
        'POT["Potensi<br/>kapasitas menyediakan"] --> ALIR["Aliran<br/>jasa yang terpakai"]',
        'ALIR --> PERM["Permintaan<br/>kebutuhan masyarakat"]',
        'PERM -. mismatch spasial .-> POT',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class ALIR leak'
      ].join("\n"),
      "mm-pes": [
        "flowchart TD",
        'S1["Pajak BBM 3,5%"] --> F["FONAFIFO<br/>dana perwalian"]',
        'S2["Tarif air Canon del Agua 25%"] --> F',
        'S3["Hibah & kontrak hidroelektrik"] --> F',
        'F --> L["Pemilik lahan<br/>kontrak konservasi/reboisasi"]',
        'L --> J["4 jasa hutan<br/>biodiversitas, DAS, scenic, karbon"]',
        'J --> B1["Pengguna air & pariwisata"]',
        'J --> B2["Masyarakat global (karbon)"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class F leak'
      ].join("\n"),
      "mm-spr": [
        "flowchart LR",
        'S["Sumber<br/>titik vs area"] --> P["Jalur paparan<br/>air, udara, tanah, rantai pangan"]',
        'P --> R["Penerima<br/>manusia, ekosistem, aset"]',
        'S -. kendalikan sumber .-> R',
        'P -. putus jalur .-> R',
        'R -. lindungi reseptor .-> R',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class P leak'
      ].join("\n"),
      "mm-hierarki": [
        "flowchart TD",
        'A["RPJPN SDGs"] --> B["RPJMN dan RPPLH"]',
        'B --> C["RTRWN"]',
        'C --> D["RTRW Prov"]',
        'D --> E["RDTR"]',
        'E --> F["KKPR AMDAL UKL UPL"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class E leak'
      ].join("\n"),
      "mm-gap": [
        "flowchart LR",
        'A["Koherensi"] --> B["Kepatuhan"]',
        'B --> C["Kapasitas"]',
        'C --> G["Gap"]',
        'G -.-> A',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class G leak'
      ].join("\n"),
      "mm-pohon": [
        "flowchart TD",
        'R1["Akar: investasi pelabuhan"] --> C["Masalah inti<br/>tekanan pesisir thd mangrove"]',
        'R2["Akar: fragmentasi jasa"] --> C',
        'R3["Akar: kelembagaan lemah"] --> C',
        'C --> D1["Dampak: hilangnya tangkapan"]',
        'C --> D2["Dampak: banjir rob"]',
        'C --> D3["Dampak: konflik tenurial"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class C leak'
      ].join("\n"),
      "mm-mce": [
        "flowchart LR",
        'A["Kriteria<br/>7 keluarga"] --> B["Pembobotan<br/>AHP"]',
        'B --> C["Skoring<br/>1–5"]',
        'C --> D["Agregasi<br/>WLC"]',
        'D --> E["Sensitivitas<br/>OAT"]',
        'E --> F["Rekomendasi<br/>+ justifikasi"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class D leak'
      ].join("\n"),
      "mm-skenario": [
        "flowchart LR",
        'A["1. Cakrawala<br/>20–25 tahun"] --> B["2. Driver<br/>2–4 kritis"]',
        'B --> C["3. Narasi<br/>BAU vs transisi"]',
        'C --> D["4. Translasi spasial<br/>CA–CLUE"]',
        'D --> E["5. Skor indikator<br/>jejak, air, risiko"]',
        'E --> F["6. Uji ketangguhan<br/>robust vs contingent"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class E leak'
      ].join("\n"),
      "mm-nbs": [
        "flowchart TD",
        'A["Isu rob pesisir"] --> B["NbS: mangrove, sponge city"]',
        'A --> C["Adaptasi: mundur, standar infra"]',
        'A --> D["PRB: peringatan dini, evakuasi"]',
        'A --> E["Potensi lokal: ekowisata, PES"]',
        'A --> F["Inovasi: IoT, PLE"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class A leak'
      ].join("\n"),
      "mm-toulmin": [
        "flowchart LR",
        'G["Data/bukti<br/>peta, BPS, jurnal"] --> W["Warrant<br/>prinsip ekologi"]',
        'W --> C["Klaim"]',
        'B["Backing<br/>literatur"] --> W',
        'C --> Q["Qualifier"]',
        'R["Rebuttal"] -.-> C',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class C leak'
      ].join("\n"),
      "mm-trace": [
        "flowchart LR",
        'D["Data<br/>BIG BPS KLHK"] --> T["Temuan<br/>T2 T5"]',
        'T --> I["Isu strategis<br/>Bab 9"]',
        'I --> A["Alternatif<br/>A2"]',
        'A --> M["Evaluasi MCE<br/>Bab 8"]',
        'M --> R["Rekomendasi<br/>R1"]',
        'R --> K["Indikator KHD<br/>keluaran–hasil–dampak"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class R leak'
      ].join("\n"),
      "mm-cascade-bab6": [
        "flowchart TD",
        'H["Bahaya: subsiden ＋ pasang"] --> G["Genangan rob"]',
        'G --> J["Kerusakan jalan & drainase"]',
        'J --> L["Gangguan logistik & pelabuhan"]',
        'L --> E["Penurunan pendapatan pesisir"]',
        'E --> V["Kerentanan naik"]',
        'G --> W["Intrusi air laut ke sumur"]',
        'W --> V',
        'V -. levee effect .-> H',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class H leak'
      ].join("\n")
    };
  }

  async function renderMermaid() {
    if (!window.mermaid) return;
    var c = themeColors();
    mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      securityLevel: "strict",
      fontFamily: "'Work Sans', sans-serif",
      themeVariables: {
        primaryColor: c.mmFill,
        primaryBorderColor: c.mmStroke,
        primaryTextColor: c.text,
        lineColor: c.mmLine,
        fontFamily: "'Work Sans', sans-serif",
        fontSize: "15px"
      }
    });
    var srcs = mmSources(c);
    for (var id in srcs) {
      var el = document.getElementById(id);
      if (!el) continue;
      try {
        var res = await mermaid.render(id + "-svg", srcs[id]);
        el.innerHTML = res.svg;
      } catch (e) {
        el.innerHTML = '<p class="note">Diagram tidak dapat dimuat.</p>';
      }
    }
  }

  /* ---------- Re-render saat tema berganti ---------- */
  function initThemeWatch() {
    var last = document.documentElement.getAttribute("data-theme");
    if (window.MutationObserver) {
      new MutationObserver(function () {
        var t = document.documentElement.getAttribute("data-theme");
        if (t !== last) { last = t; buildCharts(); renderMermaid(); }
      }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    }
  }

  /* ---------- Boot ---------- */
  function init() {
    initChapters();
    initKeywords();
    initDiskusi();
    initLatihan();
    initPustaka();
    buildCharts();
    renderMermaid();
    initThemeWatch();
  }
  document.addEventListener("DOMContentLoaded", init);
})();
