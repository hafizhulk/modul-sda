/**
 * data-bab10.js — Konten Bab 10: Komunikasi Kebijakan dan Penjaminan Mutu.
 * Setiap halaman bab memuat TEPAT SATU file data.
 */
window.APP_DATA = {};

APP_DATA.OBJECTIVES = [
  "Menyusun laporan berbasis bukti dengan argumentasi akademik yang runtut.",
  "Merancang visualisasi (tabel, grafik, peta, diagram) yang efektif untuk keputusan perencanaan.",
  "Menyusun policy brief yang ringkas dan persuasif.",
  "Memeriksa keterlacakan bukti–rekomendasi, konsistensi internal, refleksi, dan revisi."
];

APP_DATA.GLOSSARY = {
  "laporan-berbasis-bukti": {
    term: "Laporan berbasis bukti",
    en: "evidence-based report",
    def: "Dokumen analitis yang setiap pernyataan kuncinya dapat ditelusuri ke bukti yang jelas, seperti data primer atau sekunder resmi, literatur peer-reviewed, atau asumsi yang dinyatakan secara terbuka (UNECE 2024; Fischer 2010)."
  },
  "model-toulmin": {
    term: "Model Toulmin",
    en: "Toulmin model",
    def: "Kerangka 6 unsur argumentasi: klaim, data/bukti (grounds), warrant (penghubung), backing (penguat warrant), qualifier (tingkat kepastian), rebuttal (pengecualian) — (Toulmin 1958/2003; Erduran et al. 2004)."
  },
  "warrant": {
    term: "Warrant",
    en: "warrant",
    def: "Prinsip yang menghubungkan bukti dengan klaim; lompatan logika hampir selalu terjadi di warrant yang tidak dinyatakan."
  },
  "qualifier": {
    term: "Qualifier",
    en: "qualifier",
    def: "Penanda tingkat kepastian klaim ('umumnya', 'pada kondisi DAS terfragmentasi') — membedakan klaim yang qualified dari klaim absolut."
  },
  "rebuttal": {
    term: "Rebuttal",
    en: "rebuttal",
    def: "Pengecualian atau bantahan terhadap klaim ('kecuali bila disertai infrastruktur hijau-biru pengganti') — penulis kuat dalam rebuttal menurut temuan lintas studi."
  },
  "data-ink-ratio": {
    term: "Data-ink ratio",
    en: "data-ink ratio",
    def: "Prinsip Tufte (2001): maksimalkan rasio tinta-data — hapus bingkai, bayangan, dan efek 3D yang tidak membawa informasi."
  },
  "variabel-visual-bertin": {
    term: "Variabel visual Bertin",
    en: "Bertin visual variables",
    def: "Hue/value warna, ukuran, bentuk, pola, orientasi — value untuk data bertingkat kuantitatif, hue untuk kualitatif (Bertin 1983; Kinkeldey et al. 2020)."
  },
  "policy-brief": {
    term: "Policy brief",
    en: "policy brief",
    def: "Dokumen ringkas (2–4 halaman, maks 8) yang menyajikan temuan riset dan rekomendasi kepada pengambil keputusan nonspecialis — lead-with-the-finding, bukan built-up structure akademik (IDRC 2024; Young & Quinn 2002)."
  },
  "keterlacakan": {
    term: "Keterlacakan bukti–rekomendasi",
    en: "evidence–recommendation traceability",
    def: "Setiap rekomendasi dapat dilacak mundur: rekomendasi ← alternatif terpilih ← evaluasi multikriteria ← isu strategis ← temuan ← data ← sumber. Mata rantai putus = opini."
  },
  "lompatan-logika": {
    term: "Lompatan logika",
    en: "leap of logic",
    def: "Warrant tidak diuji: ekstrapolasi diam-diam, korelasi menjadi kausasi, normatif menjadi empiris, anomali menjadi aturan, atau pembingkaian visual selektif."
  },
  "konsistensi-internal": {
    term: "Konsistensi internal",
    en: "internal consistency",
    def: "Konsistensi angka, terminologi (daya dukung, kerentanan), batas spasial-temporal, silang instrumen (spasial vs nonspasial), dan rujukan regulasi (status terkini, mis. PP 46/2016 → PP 22/2021)."
  },
  "klhs-rtrw": {
    term: "KLHS RTRW",
    en: "SEA for spatial plan",
    def: "Kajian Lingkungan Hidup Strategis untuk RTRW/RDTR/RPJP/RPJM — wajib memuat 6 muatan (UU 32/2009 Pasal 15–16; PP 22/2021): D3TLH, dampak/risiko, jasa ekosistem, efisiensi SDA, kerentanan/adaptasi iklim, ketahanan keanekaragaman hayati."
  },
  "audit-trail": {
    term: "Audit trail (ALCOA+)",
    en: "audit trail",
    def: "Jejak yang attributable, legible, contemporaneous, original, accurate, complete — diekstrapolasi dari integritas data klinis ke dokumen kebijakan lingkungan untuk memastikan keterlacakan."
  }
};

APP_DATA.CHAPTERS = [
  { n: 1, title: "Landasan Konseptual SDA dan Lingkungan", href: "bab-1.html" },
  { n: 2, title: "Potensi Lokal dan Sistem Sosial-Ekologis", href: "bab-2.html" },
  { n: 3, title: "Arsitektur Data Spasial dan Nonspasial", href: "bab-3.html" },
  { n: 4, title: "Kapasitas Lingkungan dan Jasa Ekosistem", href: "bab-4.html" },
  { n: 5, title: "Perubahan Lahan, Pencemaran, dan Degradasi", href: "bab-5.html" },
  { n: 6, title: "Perubahan Iklim, Risiko Bencana, dan Ketahanan", href: "bab-6.html" },
  { n: 7, title: "Kebijakan, Instrumen, dan Kesenjangan Implementasi", href: "bab-7.html" },
  { n: 8, title: "Penstrukturan Masalah dan Evaluasi Multikriteria", href: "bab-8.html" },
  { n: 9, title: "Skenario, Strategi Terintegrasi, dan Implementasi", href: "bab-9.html" },
  { n: 10, title: "Komunikasi Kebijakan dan Penjaminan Mutu", href: "#top", current: true }
];

APP_DATA.KEYWORDS = [
  { t: "Laporan berbasis bukti", to: "#sub-101" },
  { t: "Model Toulmin (6 unsur)", to: "#toulmin" },
  { t: "Warrant & lompatan logika", to: "#sub-101" },
  { t: "Data-ink ratio & Tufte", to: "#sub-102" },
  { t: "Variabel visual Bertin", to: "#sub-102" },
  { t: "Peta & ketidakpastian", to: "#sub-102" },
  { t: "Policy brief 2–4 halaman", to: "#sub-103" },
  { t: "Lead-with-the-finding", to: "#sub-103" },
  { t: "Keterlacakan bukti–rekomendasi", to: "#sub-104" },
  { t: "Matriks keterlacakan", to: "#traceability" },
  { t: "Konsistensi 5 bidang", to: "#sub-104" },
  { t: "Checklist peer review 6 butir", to: "#sub-105" },
  { t: "KLHS RTRW — 6 muatan wajib", to: "#studi-kasus" },
  { t: "Audit trail ALCOA+", to: "#sub-104" }
];

/* Stepper — 6 unsur Toulmin */
APP_DATA.STEPS = [
  {
    icon: "flag",
    title: "1 · Klaim (claim)",
    body: "Apa yang hendak dibuktikan? Contoh: 'Alih fungsi lahan sawah di peri-urban menurunkan jasa penyediaan pangan dan resapan air.' Klaim harus spesifik ruang-waktu dan dapat diuji.",
    note: "Penulis umumnya kuat pada klaim — tetapi klaim tanpa qualifier menjadi absolut."
  },
  {
    icon: "database",
    title: "2 · Data/bukti (grounds)",
    body: "Bukti apa yang mendukung? Peta tutupan lahan dua seri waktu, statistik BPS, penelitian jasa ekosistem. Tiap angka wajib tahun, cakupan, satuan, metode, dan sumber primer.",
    note: "Klemahan umum: data ada, tetapi warrant tidak dinyatakan."
  },
  {
    icon: "link-2",
    title: "3 · Warrant — penghubung",
    body: "Jelaskan alasan mengapa bukti mendukung klaim. Misalnya, terangkan bagaimana perubahan sawah menjadi kawasan terbangun dapat mengurangi kemampuan lahan menyerap air. Alasan penghubung ini harus ditulis jelas agar pembaca dapat memeriksanya.",
    note: "Lompatan logika hampir selalu terjadi di warrant yang tidak dinyatakan."
  },
  {
    icon: "shield-check",
    title: "4 · Backing — penguat warrant",
    body: "Apa yang memperkuat warrant? Temuan empiris jurnal Scopus/SINTA tentang peri-urbanisasi, DPSIR, atau jasa ekosistem yang mengkonfirmasi mekanisme.",
    note: "Backing membedakan warrant yang berdasar literatur dari asumsi pribadi."
  },
  {
    icon: "help-circle",
    title: "5 · Qualifier — tingkat kepastian",
    body: "Nyatakan batas kepastian klaim. Ungkapan seperti 'umumnya menurunkan' atau 'pada DAS yang telah terfragmentasi' menunjukkan kapan temuan berlaku dan mencegah kesimpulan yang terlalu mutlak.",
    note: "Tanpa qualifier, klaim terkesan deterministik dan mudah dipatahkan."
  },
  {
    icon: "shield-alert",
    title: "6 · Rebuttal — pengecualian",
    body: "Pengecualian atau bantahan? 'Kecuali bila disertai infrastruktur hijau-biru pengganti'. Penulis umumnya lemah pada rebuttal — padahal rebuttal menunjukkan kejujuran akademik.",
    note: "Rebuttal yang baik justru meningkatkan kredibilitas, bukan melemahkannya."
  }
];

APP_DATA.TIMELINE = [];

/* Quiz */
APP_DATA.QUIZ = [
  {
    q: "Menurut model Toulmin, lompatan logika paling sering terjadi pada unsur…",
    options: [
      "Klaim, karena penulis tidak berani menyatakan klaim.",
      "Warrant — prinsip penghubung bukti dengan klaim yang tidak dinyatakan secara eksplisit, sehingga pembaca tidak dapat menguji apakah prinsip itu berlaku untuk kasus tersebut.",
      "Backing, karena literatur selalu tersedia.",
      "Qualifier, karena tingkat kepastian tidak penting."
    ],
    answer: 1,
    pembahasan: "Temuan lintas studi: penulis kuat pada klaim & data, lemah pada warrant & rebuttal. Lompatan logika terjadi di warrant yang tidak dinyatakan."
  },
  {
    q: "Prinsip data-ink ratio (Tufte) untuk tabel dan grafik menuntut…",
    options: [
      "Menambah bingkai, bayangan, dan efek 3D agar tabel tampak profesional.",
      "Memaksimalkan rasio tinta-data: hapus elemen yang tidak membawa informasi, sumbu proporsional dari nol, dan klasifikasi peta didokumentasikan.",
      "Menggunakan warna-warni kategori untuk gradient risiko.",
      "Jumlah kelas peta tidak perlu didokumentasikan."
    ],
    answer: 1,
    pembahasan: "Hapus bingkai/bayangan/3D yang tidak informatif; sumbu dari nol bila makna fisiknya kuantitas; dokumentasikan metode klasifikasi peta koroplet."
  },
  {
    q: "Perbedaan register policy brief dengan laporan akademik adalah…",
    options: [
      "Policy brief adalah versi ringkas laporan akademik dengan struktur yang sama (built-up).",
      "Policy brief memakai lead-with-the-finding: kesimpulan di awal, sisa dokumen mendukungnya — karena sering hanya halaman pertama yang dibaca pengambil keputusan sibuk.",
      "Policy brief tidak memerlukan bukti.",
      "Laporan akademik tidak memerlukan rekomendasi."
    ],
    answer: 1,
    pembahasan: "Argumentasi akademik built-up menuju kesimpulan; policy brief lead-with-the-finding — kesimpulan di awal, bukti & rekomendasi operasional menyusul."
  },
  {
    q: "Keterlacakan bukti–rekomendasi berarti…",
    options: [
      "Setiap rekomendasi dapat dilacak mundur: rekomendasi ← alternatif terpilih ← evaluasi multikriteria ← isu strategis ← temuan ← data ← sumber. Mata rantai putus = opini.",
      "Cukup mencantumkan daftar pustaka di akhir dokumen.",
      "Hanya berlaku untuk data kuantitatif, bukan kualitatif.",
      "Tidak perlu matriks keterlacakan, cukup narasi."
    ],
    answer: 0,
    pembahasan: "Keterlacakan adalah inti penjaminan mutu SEA; Fischer (2010) menemukan mata rantai analisis→kesimpulan sebagai aspek yang paling sering lemah."
  },
  {
    q: "Tujuh langkah telaah KLHS RTRW mencakup, kecuali…",
    options: [
      "Inventarisasi struktur dokumen terhadap 6 muatan wajib KLHS.",
      "Uji klaim daya dukung/daya tampung dengan perhitungan, bukan narasi.",
      "Hanya memeriksa keindahan cover dokumen KLHS.",
      "Identifikasi warrant yang tidak dinyatakan dan penilaian keadilan/partisipasi."
    ],
    answer: 2,
    pembahasan: "Protokol 7 langkah: inventarisasi, uji kapasitas, keterlacakan, kualitas visual, lompatan logika, keadilan/partisipasi, dan kesimpulan telaah — bukan penilaian cover."
  }
];

/* Diskusi */
APP_DATA.DISKUSI = [
  { q: "Ambil satu paragraf analisis dari draf Tugas 2 Anda dan bedah dengan model Toulmin: identifikasi klaim, data, warrant, backing, qualifier, dan rebuttal. Warrant mana yang tidak dinyatakan dan bagaimana Anda memperbaikinya?", h: "Fokus pada warrant — prinsip penghubung. Jika warrant adalah 'konversi sawah → hilangnya fungsi hidrologis', nyatakan backing (jurnal peri-urbanisasi) dan qualifier ('umumnya', 'pada DAS terfragmentasi')." },
  { q: "Bandingkan satu peta di dokumen KLHS RTRW daerah dengan kaidah Bertin dan Tufte: apakah hue/value dipakai dengan benar, apakah ketidakpastian dikomunikasikan (fuzziness/peta reliabilitas), dan apakah elemen wajib (judul informatif, legenda, skala, sumber, tahun) lengkap?", h: "Gunakan variabel visual Bertin: value untuk kuantitatif bertingkat, hue untuk kualitatif. Periksa palet buta warna (ColorBrewer) dan sumber/tahun di legenda." },
  { q: "Susun draf policy brief 2–4 halaman dari Tugas 2 Anda: apakah 5 checklist Subbab 10.3 terpenuhi (angka & pihak terdampak di 300 kata pertama, perbandingan opsi, keterlacakan, keterbatasan, halaman pertama cukup untuk keputusan)?", h: "Struktur: judul pesan → ringkasan eksekutif ≤150 kata → konteks ≤300 kata → kritik opsi 0,5–1 hal → rekomendasi ≤500 kata + rujukan ringkas. Total 2–4 halaman." },
  { q: "Pilih 5 rekomendasi utama Tugas 2 Anda dan buat matriks keterlacakan mini. Rekomendasi mana yang 'yatim' (temuan tanpa rekomendasi) atau 'panti kosong' (rekomendasi tanpa temuan), dan lompatan logika apa yang Anda temukan?", h: "Periksa dua arah: maju (temuan → rekomendasi) dan mundur (rekomendasi → temuan). Temukan warrant tidak dinyatakan, ekstrapolasi diam-diam, atau normatif menjadi empiris." }
];

/* Latihan */
APP_DATA.LATIHAN = [
  { t: "Policy brief dari Tugas 2: ubah dokumen strategi terintegrasi menjadi policy brief 2 halaman untuk pengambil keputusan daerah — judul berbentuk pesan, ringkasan ≤200 kata, konteks berangka, perbandingan ≥2 opsi dengan trade-off distributif, 2–4 rekomendasi operasional, dan satu larik keterbatasan bukti.", tag: "Policy brief" },
  { t: "Satu visual penentu: buat satu peta atau grafik yang merangkum argumen utama strategi Anda. Terapkan kaidah Subbab 10.2 (elemen peta wajib: judul informatif, legenda, skala, arah utara, sumber, tahun, sistem koordinat; palet aksesibel; penanda ketidakpastian bila relevan) dan tulis 3 kalimat: keputusan apa yang seharusnya diambil pembaca setelah melihat visual ini.", tag: "Visual" },
  { t: "Peer review silang: bertukar naskah Tugas 2 dengan rekan; gunakan protokol 6 butir Subbab 10.5 (masalah/metode/batasan, visual, keterlacakan, lompatan logika, trade-off/keadilan, ketidakpastian). Tulis minimal 3 komentar substansial (bukan redaksional) dan tanggapi dalam log revisi (diterima/ditolak + alasan).", tag: "Peer review" },
  { t: "Tugas 2 — pengumpulan: kumpulkan paket final — dokumen strategi terintegrasi yang telah direvisi (maks. 25 halaman di luar lampiran), policy brief, visual kunci, dan lampiran mutu (matriks keterlacakan untuk ≥5 rekomendasi + log revisi + metadata). Pastikan setiap angka di ringkasan eksekutif tertelusur ke sumbernya.", tag: "Tugas 2" }
];

/* Pustaka */
APP_DATA.PUSTAKA = [
  { group: "Jurnal & karya ilmiah (utama)", items: [
    "Adam, T., et al. (2021). Use and effectiveness of policy briefs as a knowledge transfer tool. Humanities and Social Sciences Communications, 8, 211.",
    "Bertin, J. (1983). Semiology of Graphics. University of Wisconsin Press. [karya seminal]",
    "Böttcher, F., & Meisert, A. (2011). Argumentation in science education. Science & Education, 20(2), 103–140.",
    "Cairo, A. (2016). The Truthful Art. New Riders.",
    "Dimara, E., & Stasko, J.T. (2023). From information to choice. IEEE TVCG.",
    "Erduran, S., Simon, S., & Osborne, J. (2004). TAPping into argumentation. Science Education, 88(6), 915–933.",
    "Fischer, T.B. (2010). Reviewing the quality of SEA reports for English spatial plan core strategies. EIA Review, 30(1), 62–69.",
    "Fundingsland Tetlow, M., & Hanusch, M. (2012). Strategic environmental assessment: The state of the art. Impact Assessment and Project Appraisal, 30(1), 15–24.",
    "Gonzalez, A., et al. (2026). The state-of-the-art of SEA. Impact Assessment and Project Appraisal. [in-press]",
    "Hegarty, M., et al. (2024). Conceptualizing and validating the trustworthiness of maps. ISPRS Int. J. Geo-Information, 13(2), 39.",
    "Kinkeldey, C., et al. (2020). Evaluating the impact of visualization of risk upon emergency route-planning. IJGIS, 34(5).",
    "Kubíček, P., & Šašinka, Č. (2020). Effects of uncertainty visualization on map-based decision making. Frontiers in Computer Science, 2, 32.",
    "Nurkhamid, et al. (2021). The dramatic arc in argumentation skills. Education Sciences, 11(11), 734.",
    "Pettit, C.J., et al. (2006). Geographical visualization: A participatory planning support tool. Applied GIS, 2(3).",
    "Qin, J., & Karabacak, E. (2010). The analysis of Toulmin elements in Chinese EFL university argumentative writing. System, 38(3), 444–456.",
    "Toulmin, S.E. (2003 [1958]). The Uses of Argument (updated ed.). Cambridge UP. [karya seminal]",
    "Tufte, E.R. (2001). The Visual Display of Quantitative Information (2nd ed.). Graphics Press. [karya klasik]",
    "Young, E., & Quinn, L. (2002). Writing Effective Public Policy Papers. LGI/OSI."
  ] },
  { group: "Regulasi Indonesia (normatif)", items: [
    "UU No. 32/2009 tentang PPLH, jo. UU No. 6/2023.",
    "PP No. 22/2021 (antara lain: integrasi D3TLH ke KLHS dan perencanaan tata ruang; menggantikan PP No. 46/2016).",
    "UU No. 26/2007 jo. PP No. 21/2021 (penataan ruang).",
    "Peraturan Menteri LHK pelaksana tata cara penyusunan KLHS dan penetapan/perhitungan D3TLH (rujuk versi terkini saat telaah)."
  ] },
  { group: "Dokumen & lembaga lain", items: [
    "UNECE. (2024). Guidelines on Assessment of the Quality Control of SEA.",
    "IDRC. (2024). How to Write a Policy Brief.",
    "Puslitjakdikbud Kemdikbud. (2021). Penyusunan Policy Brief (modul).",
    "Lavis, J.N., et al. (2009). SUPPORT Tools 13: Preparing and using policy briefs. Health Research Policy and Systems, 7(Suppl 1), S13.",
    "Dokumen KLHS RTRW/RDTR daerah (Bappeda/DLH) — sebagai bahan telaah kasus, bukan dasar klaim umum."
  ] }
];
