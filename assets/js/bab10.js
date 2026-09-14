/**
 * bab10.js — Builder matriks keterlacakan Bab 10.
 * Form tambah baris → tabel 7 kolom → localStorage → ekspor CSV.
 * Dipakai pada #traceability-root di bab-10.html
 */
(function () {
  "use strict";

  var STORAGE_KEY = "sdl-traceability-bab10";

  function esc(s) {
    if (window.TPAMain && window.TPAMain.esc) return window.TPAMain.esc(s);
    return String(s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  function loadRows() {
    try { var v = JSON.parse(localStorage.getItem(STORAGE_KEY)); return Array.isArray(v) ? v : []; } catch(e) { return []; }
  }
  function saveRows(rows) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(rows)); } catch(e) {}
  }

  function init() {
    var root = document.getElementById("traceability-root");
    if (!root) return;

    function render() {
      var rows = loadRows();
      var html = '';

      // Form
      html += '<div class="panel" style="margin-bottom:1.2rem">';
      html += '<p class="note" style="margin-bottom:.9rem">Tambahkan baris rekomendasi Anda. Matriks 7 kolom ini adalah lampiran mutu Tugas 2 — setiap baris harus dapat menjawab: rekomendasi ini terlacak ke temuan dan data apa?</p>';
      html += '<div class="trace-form" style="display:grid;gap:.7rem;grid-template-columns:1fr 1fr;">';
      html += '<label style="display:grid;gap:.25rem"><span class="note">ID Rekomendasi</span><input id="tr-id" class="trace-input" placeholder="R1" style="padding:.6rem .7rem;border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text)"></label>';
      html += '<label style="display:grid;gap:.25rem"><span class="note">Isu strategis (Bab 9)</span><input id="tr-isu" class="trace-input" placeholder="Isu 3: Rob pesisir utara" style="padding:.6rem .7rem;border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text)"></label>';
      html += '<label style="display:grid;gap:.25rem"><span class="note">Temuan kunci (nomor/paragraf)</span><input id="tr-temuan" class="trace-input" placeholder="T2, T5" style="padding:.6rem .7rem;border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text)"></label>';
      html += '<label style="display:grid;gap:.25rem"><span class="note">Data & sumber</span><input id="tr-data" class="trace-input" placeholder="BPS 2024; peta BIG" style="padding:.6rem .7rem;border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text)"></label>';
      html += '<label style="display:grid;gap:.25rem;grid-column:1 / -1"><span class="note">Rekomendasi (kalimat utuh)</span><textarea id="tr-rekom" rows="2" placeholder="Batasi izin baru di zona X hingga kajian D3TLH selesai" style="padding:.6rem .7rem;border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text);resize:vertical"></textarea></label>';
      html += '<label style="display:grid;gap:.25rem"><span class="note">Alternatif & hasil MCE (Bab 8)</span><input id="tr-mce" class="trace-input" placeholder="A2 — skor tertinggi ekologis & keadilan" style="padding:.6rem .7rem;border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text)"></label>';
      html += '<label style="display:grid;gap:.25rem"><span class="note">Indikator & risiko</span><input id="tr-indikator" class="trace-input" placeholder="Indikator keberhasilan / risiko bila tak dijalankan" style="padding:.6rem .7rem;border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text)"></label>';
      html += '</div>';
      html += '<div style="display:flex;gap:.6rem;margin-top:1rem;flex-wrap:wrap">';
      html += '<button type="button" class="btn btn-primary" id="tr-add"><span class="icon" data-lucide="plus"></span> Tambah baris</button>';
      html += '<button type="button" class="btn btn-ghost" id="tr-export"><span class="icon" data-lucide="download"></span> Ekspor CSV</button>';
      html += '<button type="button" class="btn btn-ghost" id="tr-clear"><span class="icon" data-lucide="trash-2"></span> Kosongkan</button>';
      html += '</div>';
      html += '</div>';

      // Tabel
      html += '<div class="tbl-wrap"><table class="tbl" aria-label="Matriks keterlacakan bukti–rekomendasi">';
      html += '<thead><tr><th>ID</th><th>Rekomendasi</th><th>Isu strategis</th><th>Temuan</th><th>Data & sumber</th><th>MCE</th><th>Indikator / Risiko</th><th></th></tr></thead><tbody>';
      if (rows.length === 0) {
        html += '<tr><td colspan="8" style="text-align:center;color:var(--muted);padding:1.2rem">Belum ada baris — tambahkan di atas. Contoh: R1 = rekomendasi pertama Tugas 2 Anda.</td></tr>';
      } else {
        rows.forEach(function (r, i) {
          html += '<tr>'
            + '<td>' + esc(r.id) + '</td>'
            + '<td>' + esc(r.rekom) + '</td>'
            + '<td>' + esc(r.isu) + '</td>'
            + '<td>' + esc(r.temuan) + '</td>'
            + '<td>' + esc(r.data) + '</td>'
            + '<td>' + esc(r.mce) + '</td>'
            + '<td>' + esc(r.indikator) + '</td>'
            + '<td><button type="button" class="icon-btn" data-del="' + i + '" aria-label="Hapus baris" style="width:32px;height:32px"><span class="icon" data-lucide="x"></span></button></td>'
            + '</tr>';
        });
      }
      html += '</tbody></table></div>';
      html += '<p class="note" style="margin-top:.6rem">Pemeriksaan dua arah: (i) maju — setiap temuan utama berakhir pada rekomendasi atau dinyatakan sengaja tidak ditindaklanjuti; (ii) mundur — setiap rekomendasi memiliki temuan pendukung. Data tersimpan otomatis di perangkat ini.</p>';

      root.innerHTML = html;
      if (window.lucide && lucide.createIcons) { try { lucide.createIcons(); } catch(e){} }

      // Bind
      var btnAdd = document.getElementById("tr-add");
      if (btnAdd) btnAdd.addEventListener("click", function () {
        var id = (document.getElementById("tr-id").value.trim() || ("R" + (rows.length + 1)));
        var rekom = document.getElementById("tr-rekom").value.trim();
        if (!rekom) { alert("Isi rekomendasi terlebih dahulu."); return; }
        var entry = {
          id: id,
          rekom: rekom,
          isu: document.getElementById("tr-isu").value.trim(),
          temuan: document.getElementById("tr-temuan").value.trim(),
          data: document.getElementById("tr-data").value.trim(),
          mce: document.getElementById("tr-mce").value.trim(),
          indikator: document.getElementById("tr-indikator").value.trim()
        };
        rows.push(entry);
        saveRows(rows);
        // clear rekom field
        document.getElementById("tr-rekom").value = "";
        render();
      });

      var btnClear = document.getElementById("tr-clear");
      if (btnClear) btnClear.addEventListener("click", function () {
        if (!confirm("Kosongkan seluruh matriks?")) return;
        saveRows([]);
        render();
      });

      var btnExport = document.getElementById("tr-export");
      if (btnExport) btnExport.addEventListener("click", function () {
        var rows2 = loadRows();
        if (rows2.length === 0) { alert("Belum ada baris untuk diekspor."); return; }
        var header = ["ID Rekomendasi","Rekomendasi","Isu strategis","Temuan kunci","Data & sumber","Alternatif & MCE","Indikator / Risiko"];
        var csv = [header].concat(rows2.map(function(r){
          return [r.id, r.rekom, r.isu, r.temuan, r.data, r.mce, r.indikator];
        })).map(function(row){
          return row.map(function(cell){
            var c = String(cell).replace(/"/g, '""');
            return '"' + c + '"';
          }).join(",");
        }).join("\n");
        var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url; a.download = "matriks-keterlacakan-bab10.csv";
        document.body.appendChild(a); a.click();
        setTimeout(function(){ URL.revokeObjectURL(url); a.remove(); }, 500);
      });

      root.querySelectorAll("[data-del]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var idx = parseInt(btn.getAttribute("data-del"), 10);
          var rows3 = loadRows();
          rows3.splice(idx, 1);
          saveRows(rows3);
          render();
        });
      });
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
    else render();

    if (window.MutationObserver) {
      new MutationObserver(function(){ render(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    }
  }

  window.Bab10Trace = { init: init };
  init();
})();
