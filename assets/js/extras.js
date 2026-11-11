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

  /* ---------- Latihan (checklist + localStorage per bab) ---------- */
  function getLatKey() {
    var cur = ((window.APP_DATA && APP_DATA.CHAPTERS) || []).filter(function (c) { return c.current; })[0];
    return cur && cur.n ? "sdl-latihan-bab" + cur.n : "sdl-latihan";
  }
  function loadDone() {
    var n = ((window.APP_DATA && APP_DATA.LATIHAN) || []).length;
    try {
      var raw = JSON.parse(localStorage.getItem(getLatKey())) || [];
      return Array.isArray(raw) ? raw.filter(function (i) { return typeof i === "number" && i >= 0 && i < n; }) : [];
    } catch (e) { return []; }
  }
  function saveDone(arr) {
    try { localStorage.setItem(getLatKey(), JSON.stringify(arr)); } catch (e) {}
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
        'A["Permintaan lahan peri-urban"] -->|＋| B["Harga lahan peri-urban"]',
        'B -->|＋| C["Konversi sawah → terbangun"]:::leak',
        'C -->|＋| D["Kawasan terbangun & aksesibilitas"]',
        'D -->|＋ R1 ekspansi| A',
        'C -->|＋| E["Kehilangan fungsi tata air sawah"]:::leak',
        'E -->|＋| F["Risiko & kerugian banjir"]',
        'F -->|＋| H["Tanggul/drainase → rasa aman semu"]',
        'H -->|＋ R2 maladaptasi| A',
        'F -->|＋| G["Biaya proteksi & tekanan regulasi"]',
        'G -->|− B1 peredam| A',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;"
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
        'P1["Rel Pembangunan<br/>RPJPN/D 20 th → RPJMN/D 5 th → RKP/D 1 th"] --> K["KLHS<br/>Rel Penghubung (PP 22/2021)"]',
        'L1["Rel Lingkungan Hidup<br/>RPPLH 30 th & D3TLH"] --> K',
        'K --> R1["Rel Penataan Ruang<br/>RTRWN → RTRW Prov → RTRW Kab/Kota"]',
        'R1 --> E["RDTR Operasional<br/>(titik rawan: cakupan belum lengkap)"]:::leak',
        'E --> F["Gerbang Izin & Pengendalian<br/>KKPR (OSS-RBA) · AMDAL / UKL-UPL"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;"
      ].join("\n"),
      "mm-gap": [
        "flowchart LR",
        'A["Koherensi<br/>konflik mandat sektoral"] --> G["Implementation Gap<br/>Adoption & Outcome Gap"]:::leak',
        'B["Kepatuhan<br/>deteksi & insentif lemah"] --> G',
        'C["Kapasitas<br/>SDM, anggaran, data RDTR"] --> G',
        'A -.-> R1["Resep: harmonisasi norma & KRP"]',
        'B -.-> R2["Resep: penegakan & sinyal insentif"]',
        'C -.-> R3["Resep: penguatan anggaran & data"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;"
      ].join("\n"),
      "mm-fenomena": [
        "flowchart TD",
        'F["Fenomena / Gejala Lapangan<br/>(Genangan rob pesisir utara makin tinggi & sering)"] --> K1["Pembingkaian Sempit (Gejala = Masalah)<br/>Masalah: Kurangnya tanggul penahan air laut"]:::leak',
        'F --> K2["Penstrukturan Masalah Kebijakan (Dunn, 2017)<br/>Masalah: Laju penurunan muka tanah & konversi ruang pesisir<br/>melampaui daya dukung hidrologis dalam kewenangan pemda/pusat"]',
        'K1 --> S1["Intervensi: Peninggian tanggul terus-menerus<br/>(mengabaikan ekstraksi air tanah & beban bangunan)"]:::leak',
        'S1 --> E3["Kesalahan Tipe III: Masalah salah dirumuskan<br/>(tanggul tenggelam lagi, risiko jebol & maladaptasi naik)"]:::leak',
        'K2 --> S2["Intervensi Struktural & Non-struktural:<br/>Pengendalian air tanah + suplai air perpipaan +<br/>zonasi pesisir + sabuk mangrove + proteksi selektif"]',
        'S2 --> O2["Akar penyebab tertangani & risiko jangka panjang turun"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;"
      ].join("\n"),
      "mm-pohon": [
        "flowchart TD",
        'R1["Akar: ekspansi reklamasi & investasi"] --> C["Masalah inti<br/>tekanan pesisir thd kawasan lindung mangrove"]:::leak',
        'R2["Akar: kebutuhan lahan pelabuhan/industri"] --> C',
        'R3["Akar: perizinan & tata ruang tak inklusif"] --> C',
        'C --> D1["Dampak: tangkapan nelayan turun"]',
        'C --> D2["Dampak: redaman banjir rob hilang"]',
        'C --> D3["Dampak: konflik sosial-adat"] --> T["Pohon Tujuan: ekspos trade-off<br/>pertumbuhan ekonomi vs integritas mangrove"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;"
      ].join("\n"),
      "mm-toc": [
        "flowchart LR",
        'I["Intervensi Kebijakan<br/>(Zonasi pesisir + skema PES/ko-manajemen)"] --> O["Keluaran (Outputs)<br/>(Batas zona penyangga & kontrak insentif kelompok)"]',
        'O --> H["Hasil Antara (Outcomes)<br/>(Manfaat ekonomi lokal terikat & konversi berhenti)"]:::leak',
        'H --> M["Dampak Jangka Panjang (Impacts)<br/>(Integritas mangrove & ketahanan rob pulih)"]',
        'A1["Asumsi 1: Hak kelola lokal diakui & dana tepat sasaran"] -.-> O',
        'A2["Asumsi 2: Penegakan KKPR konsisten & beban tak bocor"] -.-> H',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;"
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
        'A["Langkah 1<br/>Cakrawala 20–25 tahun"] --> B["Langkah 2<br/>Driver 2–4 kritis"]',
        'B --> C["Langkah 3<br/>Narasi BAU vs transisi"]',
        'C --> D["Langkah 4<br/>Translasi spasial ke peta"]',
        'D --> E["Langkah 5<br/>Skor indikator jejak, air, risiko"]',
        'E --> F["Langkah 6<br/>Uji ketangguhan robust vs contingent"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class E leak'
      ].join("\n"),
      "mm-nbs": [
        "flowchart LR",
        'A["Isu rob pesisir<br/>pantura"] --> B["1 · NbS<br/>mangrove, sponge city"]',
        'A --> C["2 · Adaptasi<br/>mundur, standar infra"]',
        'A --> D["3 · PRB<br/>peringatan dini, evakuasi"]',
        'A --> E["4 · Potensi lokal<br/>ekowisata, PES"]',
        'A --> F["5 · Inovasi<br/>IoT, InSAR/GNSS"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class A leak'
      ].join("\n"),
      "mm-mel": [
        "flowchart LR",
        'M["Pantau<br/>indikator KHD + signpost"] --> E["Evaluasi<br/>simpangan vs trigger"]',
        'E --> K["Koreksi<br/>strategi / asumsi"]',
        'K --> M',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;",
        'class E leak'
      ].join("\n"),
      "mm-toulmin": [
        "flowchart LR",
        'D["Data / Bukti<br/>peta, BPS, jurnal"] --> J(( ))',
        'J --> C["Klaim"]',
        'B["Backing"] -- memperkuat --> W["Warrant"]',
        'W -- membenarkan hubungan --> J',
        'Q["Qualifier"] -- membatasi kepastian --> C',
        'R["Rebuttal"] -. pengecualian terhadap .-> J',
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
      "mm-cascade": [
        "flowchart LR",
        'M1["1 · Preconditioned<br/>tanah jenuh / subsiden"] --> CR["Risiko Majemuk<br/>(Compound Risk)"]:::leak',
        'M2["2 · Multivariat<br/>pasang + gelombang + hujan"] --> CR',
        'M3["3 · Temporal<br/>kejadian ekstrem beruntun"] --> CR',
        'M4["4 · Spasial<br/>serempak di wilayah terhubung"] --> CR',
        'CR --> S1["Kegagalan infrastruktur fisik"]',
        'S1 --> S2["Gangguan layanan dasar & logistik"]',
        'S2 --> S3["Kerugian sosial-ekonomi berantai"]',
        "classDef leak fill:" + c.accentFill + ",stroke:" + c.accentStroke + ",color:" + c.accentText + ",font-weight:600;"
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
        fontSize: "16px"
      },
      flowchart: { nodeSpacing: 20, rankSpacing: 40, padding: 8, htmlLabels: true, wrap: true }
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
