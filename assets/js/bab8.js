/**
 * bab8.js — Kalkulator MCE interaktif untuk Bab 8.
 * Membaca APP_DATA.MCE (7 kriteria, 3 alternatif) dan merender
 * tabel bobot dengan slider, skor, total tertimbang, dan peringkat.
 * Mendukung preset sensitivitas dan pembaruan langsung.
 */
(function () {
  "use strict";

  function esc(s) {
    if (window.TPAMain && window.TPAMain.esc) return window.TPAMain.esc(s);
    return String(s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  function init() {
    var root = document.getElementById("mce-root");
    if (!root || !window.APP_DATA || !window.APP_DATA.MCE) return;
    var MCE = window.APP_DATA.MCE;
    var criteria = MCE.criteria.slice();
    var alts = MCE.alternatives.slice();

    // Preset bobot dari Tabel 8.5
    var presets = {
      baseline:  [0.15, 0.15, 0.25, 0.15, 0.10, 0.10, 0.10],
      proEkonomi: [0.05, 0.15, 0.35, 0.15, 0.10, 0.10, 0.10],
      proLingkungan: [0.30, 0.15, 0.10, 0.15, 0.10, 0.10, 0.10],
      rata:      [0.143,0.143,0.143,0.143,0.143,0.143,0.143]
    };

    function calcTotals() {
      var totals = {};
      alts.forEach(function (a) {
        var sum = 0;
        criteria.forEach(function (c) { sum += c.weight * a.scores[c.key]; });
        totals[a.key] = sum;
      });
      return totals;
    }

    function render() {
      var totals = calcTotals();
      var sorted = alts.slice().sort(function (a,b){ return totals[b.key] - totals[a.key]; });
      var sumW = criteria.reduce(function(s,c){ return s + c.weight; }, 0);
      var sumWarn = Math.abs(sumW - 1) > 0.001 ? '<span class="b8-warn">Σ bobot = ' + sumW.toFixed(3) + ' — normalkan agar =1,00 untuk interpretasi yang sah</span>' : '<span class="b8-ok">Σ bobot = ' + sumW.toFixed(3) + ' ✓</span>';

      var html = '';
      html += '<div class="b8-presets" role="group" aria-label="Preset sensitivitas">';
      html += '<button type="button" class="b8-preset" data-preset="baseline">Baseline</button>';
      html += '<button type="button" class="b8-preset" data-preset="proEkonomi">Pro-ekonomi</button>';
      html += '<button type="button" class="b8-preset" data-preset="proLingkungan">Pro-lingkungan</button>';
      html += '<button type="button" class="b8-preset" data-preset="rata">Bobot rata</button>';
      html += '</div>';
      html += '<div class="b8-sumwarn">' + sumWarn + '</div>';

      html += '<div class="tbl-wrap"><table class="tbl b8-mce-table" aria-label="Kalkulator MCE interaktif">';
      html += '<thead><tr><th scope="col">Kriteria</th><th scope="col" style="width:38%">Bobot</th>';
      alts.forEach(function (a) { html += '<th scope="col">' + esc(a.key) + '</th>'; });
      html += '</tr></thead><tbody>';
      criteria.forEach(function (c, ci) {
        html += '<tr>';
        html += '<td><strong>' + esc(c.label) + '</strong><br><span class="note">' + esc(c.desc) + '</span></td>';
        html += '<td><div class="b8-slider-row">'
          + '<input type="range" class="range b8-range" data-ci="' + ci + '" min="0" max="50" step="1" value="' + Math.round(c.weight*100) + '" aria-label="Bobot ' + esc(c.label) + '">'
          + '<span class="b8-weight-val">' + c.weight.toFixed(3) + '</span></div></td>';
        alts.forEach(function (a) {
          html += '<td style="text-align:center;font-weight:600;">' + a.scores[c.key] + '</td>';
        });
        html += '</tr>';
      });
      html += '<tr class="b8-total-row"><th scope="row">Skor tertimbang</th><td></td>';
      alts.forEach(function (a) {
        var isTop = sorted[0].key === a.key;
        html += '<td style="text-align:center;"><span class="b8-total' + (isTop ? ' b8-top' : '') + '">' + totals[a.key].toFixed(2) + (isTop ? ' ★' : '') + '</span></td>';
      });
      html += '</tr>';
      html += '<tr><th scope="row">Peringkat</th><td></td>';
      // peringkat per alternatif
      var rankMap = {};
      sorted.forEach(function (a, idx) { rankMap[a.key] = idx + 1; });
      alts.forEach(function (a) {
        html += '<td style="text-align:center;"><span class="b8-rank">#' + rankMap[a.key] + '</span></td>';
      });
      html += '</tr>';
      html += '</tbody></table></div>';

      html += '<div class="b8-bars" aria-hidden="true">';
      var maxScore = Math.max.apply(null, alts.map(function(a){ return totals[a.key]; }));
      alts.forEach(function (a) {
        var w = maxScore > 0 ? (totals[a.key] / 5 * 100) : 0; // 5 = max skor skala
        // Use totals/max 5 as bar width; totals max is 5 (if all scores 5 and weights sum 1)
        var pct = (totals[a.key] / 5 * 100).toFixed(1);
        html += '<div class="b8-bar-row"><span class="b8-bar-label">' + esc(a.key) + ' · ' + esc(a.label.replace(/^.\s*·\s*/,"")) + '</span>'
          + '<div class="bar-track"><div class="bar-seg" style="width:' + pct + '%;background:var(--sage);"></div></div>'
          + '<span class="b8-bar-val">' + totals[a.key].toFixed(2) + '</span></div>';
      });
      html += '</div>';
      html += '<p class="note" style="margin-top:.8rem">Geser bobot untuk menguji <strong>kekokohan peringkat</strong> (sensitivitas). Skor 1–5 bersifat ilustratif — ganti dengan data wilayah studi Anda saat latihan. Lihat Tabel 8.5 untuk skenario pembanding.</p>';

      root.innerHTML = html;

      // Bind sliders
      root.querySelectorAll(".b8-range").forEach(function (inp) {
        inp.addEventListener("input", function () {
          var ci = parseInt(inp.getAttribute("data-ci"), 10);
          criteria[ci].weight = parseInt(inp.value, 10) / 100;
          render();
        });
      });
      root.querySelectorAll(".b8-preset").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var p = presets[btn.getAttribute("data-preset")];
          if (!p) return;
          criteria.forEach(function (c, i) { c.weight = p[i]; });
          render();
        });
      });
      if (window.lucide && lucide.createIcons) { try { lucide.createIcons(); } catch(e){} }
    }

    // Init on DOM ready
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
    else render();

    // Re-render on theme change to update bar colors via CSS variables
    if (window.MutationObserver) {
      new MutationObserver(function () { render(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    }
  }

  // Expose for manual re-init if needed
  window.Bab8MCE = { init: init };
  init();
})();
