/**
 * data-bab8.js — Konten Bab 8: Penstrukturan Masalah dan Evaluasi Multikriteria.
 * Setiap halaman bab memuat TEPAT SATU file data.
 */
window.APP_DATA = {};

APP_DATA.OBJECTIVES = [
  "Merumuskan masalah inti dan hubungan penyebab–dampak secara sistematis.",
  "Mengidentifikasi pemangku kepentingan dan pihak terdampak; menyusun pohon masalah, pohon tujuan, dan theory of change.",
  "Menyusun sedikitnya tiga alternatif kebijakan yang benar-benar berbeda dan dapat dibandingkan.",
  "Mengevaluasi alternatif secara multikriteria dengan pembobotan, skoring, analisis sensitivitas, dan justifikasi prioritas."
];

APP_DATA.GLOSSARY = {
  "wicked-problem": {
    term: "Wicked problem",
    en: "wicked problem",
    def: "Masalah kebijakan yang berciri banyak aktor, banyak definisi, tujuan yang tidak dapat dimaksimalkan sekaligus, dan tidak ada solusi yang benar secara teknis — memerlukan penstrukturan masalah sebelum evaluasi (Dorst 2006; Hisschemöller & Hoppe 1996)."
  },
  "kesalahan-tipe-iii": {
    term: "Kesalahan Tipe III",
    en: "Type III error",
    def: "Kesalahan berupa upaya menyelesaikan masalah yang salah. Dalam analisis kebijakan, kesalahan ini dapat lebih merugikan daripada salah hitung (Dunn 2017)."
  },
  "penstrukturan-masalah": {
    term: "Penstrukturan masalah",
    en: "problem structuring",
    def: "Proses iteratif puzzling (berpikir) dan powering (berpolitik) untuk mengubah mess menjadi definisi masalah yang spesifik ruang-waktu dan siap dijawab alternatif kebijakan."
  },
  "pohon-masalah": {
    term: "Pohon masalah",
    en: "problem tree",
    def: "Diagram batang masalah inti dengan akar penyebab langsung/tidak langsung dan tajuk dampak langsung/tidak langsung; tiap panah mewakili mekanisme yang dapat dipertahankan secara ilmiah, bukan korelasi semata."
  },
  "pohon-tujuan": {
    term: "Pohon tujuan",
    en: "objective tree",
    def: "Pemetaan ulang pohon masalah menjadi pernyataan positif; mengekspos tujuan yang saling bertentangan (mis. pertumbuhan pelabuhan vs perlindungan mangrove) yang harus dijawab oleh alternatif kebijakan, bukan dihapus dengan retorika win–win."
  },
  "theory-of-change": {
    term: "Theory of change (ToC)",
    en: "theory of change",
    def: "Urutan hipotesis sebab-akibat dari intervensi ke keluaran, hasil, dan dampak jangka panjang, disertai asumsi yang dapat diuji dan indikator tiap tautan — membedakan fakta empiris, asumsi risiko, dan pemisalan."
  },
  "stakeholder-grid": {
    term: "Matriks pengaruh × kepentingan",
    en: "power–interest grid",
    def: "Pemetaan aktor menurut pengaruh dan kepentingan, ditambah kolom perspektif aktor terhadap definisi masalah dan sumber hak/klaim (hukum, adat, kontrak, moral) — (Reed et al. 2009)."
  },
  "alternatif-kosmetik": {
    term: "Alternatif kosmetik",
    en: "cosmetic alternatives",
    def: "Alternatif yang hanya berbeda intensitas (mis. reklamasi 838 ha vs 600 ha dengan desain sama) — gagal karena membaca konflik dengan cara yang sama; alternatif bermutu berbeda pada kerangka masalah, sasaran, dan instrumen utama."
  },
  "mcda": {
    term: "MCDA / MCDM",
    en: "multi-criteria decision analysis",
    def: "Evaluasi alternatif terhadap kriteria yang saling independen, transparan terhadap bobot dan skor, dengan agregasi (WLC) dan analisis sensitivitas — mengungkap trade-off, bukan menyembunyikannya."
  },
  "kriteria-mcda": {
    term: "Keluarga kriteria MCDA",
    en: "MCDA criteria family",
    def: "Ekologis, efisiensi sumber daya, sosial-ekonomi, kelembagaan, kesesuaian regulasi (RTRW/RDTR, WP3K), keadilan (distributif & prosedural), ketahanan/resiliensi — tiap kriteria relevan, dapat diukur, tidak redundan."
  },
  "ahp": {
    term: "AHP",
    en: "Analytic Hierarchy Process",
    def: "Metode pembobotan pairwise comparison dengan uji rasio konsistensi (Saaty 1990); alternatif: pembobotan sama, deliberatif, berbasis dokumen kebijakan, atau hybrid — bobot bersifat normatif, bukan fakta objektif."
  },
  "wlc": {
    term: "WLC",
    en: "Weighted Linear Combination",
    def: "Agregasi skor ternormalisasi × bobot menjadi peringkat; berasumsi kompensatoris/non-kompensatoris — pilihan normatif yang harus dinyatakan."
  },
  "analisis-sensitivitas": {
    term: "Analisis sensitivitas",
    en: "sensitivity analysis",
    def: "Menguji kestabilan peringkat ketika bobot/skor bergeser dalam rentang yang masuk akal; tanpa ini peringkat tidak dapat dianggap robust (Malczewski 2006)."
  },
  "oat": {
    term: "OAT",
    en: "one-at-a-time sensitivity",
    def: "Uji sensitivitas satu-bobot-pada-satu-waktu: mengubah satu bobot, menahan total =1, mere-distribusi proporsional bobot lain, dan mengamati perubahan peringkat."
  },
  "klhs": {
    term: "KLHS",
    en: "Strategic Environmental Assessment",
    def: "Kajian Lingkungan Hidup Strategis — prasyarat KRP menurut PP 22/2021; sering dikerjakan di akhir sehingga berubah dari penyaring alternatif menjadi justifikasi pasca-keputusan."
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
  { n: 8, title: "Penstrukturan Masalah dan Evaluasi Multikriteria", href: "#top", current: true },
  { n: 9, title: "Skenario, Strategi Terintegrasi, dan Implementasi", href: "bab-9.html" },
  { n: 10, title: "Komunikasi Kebijakan dan Penjaminan Mutu", href: "bab-10.html" }
];

APP_DATA.KEYWORDS = [
  { t: "Wicked problem", to: "#sub-81" },
  { t: "Kesalahan Tipe III", to: "#sub-81" },
  { t: "4 tahap penstrukturan masalah", to: "#penstrukturan" },
  { t: "Pohon masalah & pohon tujuan", to: "#sub-82" },
  { t: "Matriks pengaruh × kepentingan", to: "#sub-82" },
  { t: "Theory of change", to: "#sub-82" },
  { t: "Alternatif kosmetik vs struktural", to: "#sub-83" },
  { t: "7 keluarga kriteria MCDA", to: "#sub-84" },
  { t: "AHP & pembobotan", to: "#sub-85" },
  { t: "WLC & agregasi", to: "#sub-85" },
  { t: "Analisis sensitivitas OAT", to: "#mce" },
  { t: "Justifikasi distributif", to: "#sub-85" },
  { t: "Teluk Benoa — studi kasus", to: "#studi-kasus" },
  { t: "KLHS sebagai penyaring", to: "#sub-84" }
];

/* Stepper — 4 tahap penstrukturan masalah (8.1.2) */
APP_DATA.STEPS = [
  {
    icon: "search",
    title: "1 · Merasakan masalah",
    body: "Mulailah dengan bertanya: gejala apa yang terlihat, siapa yang terdampak, dan di mana batas wilayah masalah? Gabungkan angka resmi dengan pengalaman para pihak agar rumusan awal tidak hanya mencerminkan satu sudut pandang.",
    note: "Keluaran: inventaris gejala, peta aktor awal, batas ruang-waktu masalah."
  },
  {
    icon: "scale",
    title: "2 · Kategorisasi masalah",
    body: "Kesenjangan apa yang memisahkan keadaan sekarang dan yang diinginkan? Daftar kesenjangan bernilai bagi aktor — bukan kesenjangan teknis semata, melainkan kesenjangan yang dirasakan pihak terdampak.",
    note: "Keluaran: daftar gap bernilai (valued gaps) per aktor."
  },
  {
    icon: "git-branch",
    title: "3 · Dekomposisi",
    body: "Kesenjangan mana yang berpotensi dijembatani? Oleh instrumen apa? Rantai penyebab–dampak dirinci dengan mekanisme yang dapat dipertahankan, jangkauan ruang-waktu, dan kerangka DPSIR yang teruji.",
    note: "Keluaran: rantai penyebab–dampak; isu yang tatakelolanya teridentifikasi."
  },
  {
    icon: "target",
    title: "4 · Pilihan definisi masalah",
    body: "Di mana peluang nyata untuk perbaikan? Definisi masalah yang siap dijawab alternatif kebijakan — spesifik ruang-waktu, dalam otoritas perencana, dan jujur terhadap ketidakpastian (mana faktual, mana perkiraan model).",
    note: "Keluaran: definisi masalah inti yang siap diuji dengan alternatif kebijakan."
  }
];

/* Data MCE interaktif — 7 kriteria, selaras Tabel 8.4/8.5 (ilustratif, bukan data lapangan) */
APP_DATA.MCE = {
  criteria: [
    { key: "ekologis", label: "Ekologis", weight: 0.15, desc: "tutupan mangrove/ekosistem prioritas, fragmentasi" },
    { key: "efisiensi", label: "Efisiensi SDA", weight: 0.15, desc: "return ekonomi per ha" },
    { key: "sosial", label: "Sosial-ekonomi", weight: 0.25, desc: "lapangan kerja lokal, ketahanan nelayan" },
    { key: "kelembagaan", label: "Kelembagaan", weight: 0.15, desc: "kapasitas pelaksana, biaya transaksi" },
    { key: "regulasi", label: "Kesesuaian regulasi", weight: 0.10, desc: "patuh RTRW/RDTR & KLHS" },
    { key: "keadilan", label: "Keadilan", weight: 0.10, desc: "beban tidak pada rentan; hak adat" },
    { key: "ketahanan", label: "Ketahanan", weight: 0.10, desc: "buffer iklim, fleksibilitas opsi" }
  ],
  alternatives: [
    { key: "A", label: "A · Bisnis-seperti-biasa", desc: "Reklamasi sesuai izin tanpa perubahan batas lindung", scores: { ekologis: 1, efisiensi: 4, sosial: 5, kelembagaan: 2, regulasi: 2, keadilan: 1, ketahanan: 2 } },
    { key: "B", label: "B · Zonasi terbatas + mitigasi", desc: "Hanya di sub-zona luar penyangga + rehabilitasi & pemantauan", scores: { ekologis: 3, efisiensi: 3, sosial: 4, kelembagaan: 3, regulasi: 3, keadilan: 3, ketahanan: 3 } },
    { key: "C", label: "C · Larangan / redesain ketat", desc: "Hentikan/relokasi keluar kawasan lindung; kompensasi & alih ke ekowisata", scores: { ekologis: 5, efisiensi: 2, sosial: 2, kelembagaan: 3, regulasi: 3, keadilan: 4, ketahanan: 5 } }
  ]
};

APP_DATA.TIMELINE = [];

/* Quiz — 5 soal */
APP_DATA.QUIZ = [
  {
    q: "Menurut Dunn (2017), kesalahan Tipe III dalam analisis kebijakan berarti…",
    options: [
      "Menyelesaikan masalah yang salah — merumuskan masalah sebagai 'kurangnya tanggul' padahal akar strukturalnya adalah ekstraksi air tanah dan insentif pesisir.",
      "Salah hitung skor multikriteria karena pembobotan keliru.",
      "Memilih alternatif dengan skor total terendah.",
      "Mengabaikan analisis sensitivitas."
    ],
    answer: 0,
    pembahasan: "Kesalahan Tipe III adalah kesalahan penstrukturan masalah: analisis yang cermat tetapi untuk masalah yang salah dibingkai — lebih mahal daripada salah hitung."
  },
  {
    q: "Perbedaan pohon masalah dan pohon tujuan terletak pada…",
    options: [
      "Pohon masalah berisi solusi, pohon tujuan berisi masalah.",
      "Keduanya identik, hanya beda istilah.",
      "Pohon masalah memetakan kondisi tidak diinginkan (akar penyebab → dampak); pohon tujuan memetakan ulang menjadi kondisi positif dan mengekspos tujuan yang saling bertentangan.",
      "Pohon tujuan tidak memerlukan mekanisme kausal."
    ],
    answer: 2,
    pembahasan: "Pohon tujuan adalah negasi tiap simpul pohon masalah; tujuannya mengekspos konflik tujuan (pertumbuhan pelabuhan vs mangrove) yang harus dijawab oleh alternatif kebijakan."
  },
  {
    q: "Alternatif kebijakan yang 'kosmetik' gagal karena…",
    options: [
      "Skor totalnya selalu rendah.",
      "Tidak melibatkan pemangku kepentingan.",
      "Melanggar ketentuan RTRW.",
      "Ketiganya hanya berbeda intensitas (mis. 838 ha vs 600 ha) tetapi membaca konflik dengan cara yang sama — tidak berbeda pada kerangka masalah, sasaran, dan instrumen utama."
    ],
    answer: 3,
    pembahasan: "Alternatif bermutu harus berbeda secara kerangka masalah, sasaran, dan instrumen — saling eksklusif minimum pada struktur keputusan, bukan gradasi kuantitatif satu desain."
  },
  {
    q: "Dalam MCDA, mengapa bobot bersifat normatif, bukan fakta objektif?",
    options: [
      "Karena bobot dihitung otomatis dari data lapangan tanpa penilaian manusia.",
      "Karena bobot diekstraksi dari preferensi pakar/pengambil keputusan (mis. AHP pairwise comparison) dan mencerminkan nilai — metode yang dipilih harus didokumentasikan.",
      "Karena bobot selalu sama untuk semua kriteria.",
      "Karena bobot tidak memengaruhi peringkat."
    ],
    answer: 1,
    pembahasan: "Bobot diekstraksi via AHP, Delphi, atau deliberasi — mencerminkan nilai, bukan fakta; harus didokumentasikan bersama fungsi nilai dan panil penilai."
  },
  {
    q: "Tanpa analisis sensitivitas, peringkat MCDA tidak dapat dianggap robust karena…",
    options: [
      "Skor total selalu berubah secara acak.",
      "Analisis sensitivitas hanya untuk metode AHP.",
      "Peringkat dapat berbalik ketika bobot bergeser dalam rentang yang masuk akal — sensitivitas menguji kekokohan dan mengungkap kriteria penentu.",
      "Sensitivitas hanya relevan untuk kriteria ekologis."
    ],
    answer: 2,
    pembahasan: "Malczewski (2006): peringkat harus diuji terhadap ketidakpastian bobot/skor; tanpa ini, 'pemenang' tidak dapat dianggap robust."
  }
];

/* Diskusi */
APP_DATA.DISKUSI = [
  { q: "Rumuskan satu masalah inti (core problem) untuk wilayah studi Anda sebagai kesenjangan terbatas ruang-waktu. Siapa aktor yang dirugikan/diuntungkan, dan mengapa definisi tersebut siap dijawab alternatif kebijakan?", h: "Gunakan 4 tahap penstrukturan (8.1.2): dari problem sensing → kategorisasi → dekomposisi → pilihan definisi. Batasi ruang (DAS/pesisir) dan otoritas (kabupaten/KLHK) serta sikap terhadap ketidakpastian." },
  { q: "Susun matriks pengaruh × kepentingan untuk kasus reklamasi/pertambangan vs kawasan lindung di wilayah studi Anda. Kelompok mana yang berpengaruh rendah tetapi kepentingannya tinggi, dan bagaimana memastikan suaranya masuk ke pohon masalah?", h: "Rujuk Reed et al. (2009): kualitas input partisipasi menentukan legitimasi. Tambahkan kolom perspektif aktor terhadap definisi masalah dan sumber hak/klaim." },
  { q: "Bandingkan pohon masalah dan pohon tujuan untuk isu yang sama: tujuan mana yang saling bertentangan dan mengapa retorika 'win–win' berbahaya pada tahap ini?", h: "Pohon tujuan mengekspos konflik distributif (investasi pelabuhan vs mangrove). Alternatif kebijakan harus meladeni konflik tersebut secara eksplisit, bukan menghapusnya." },
  { q: "Ambil satu dokumen RTRW/RDTR/KLHS daerah: apakah evaluasi alternatif di dalamnya benar-benar multikriteria dan membuka asumsi, atau sudah menutup pilihan sejak awal? Kutip bagian dokumen dan beri label [F/R/A/I].", h: "Periksa apakah alternatif benar-benar berbeda desain, kriteria mencakup 7 keluarga, bobot didokumentasikan, dan sensitivitas diuji — atau hanya justifikasi pasca-keputusan (Bab 7)." }
];

/* Latihan */
APP_DATA.LATIHAN = [
  { t: "Pohon masalah & pohon tujuan: untuk isu utama wilayah studi Anda, rumuskan satu masalah inti sebagai kesenjangan ruang-waktu, bangun pohon masalah (≥3 akar mekanistik, ≥4 dampak) dan beri kode tiap link [F/R/A/I]; lalu konversi menjadi pohon tujuan dan ekspos tujuan yang saling bertentangan.", tag: "Penstrukturan" },
  { t: "Evaluasi multikriteria: untuk 3 alternatif yang berbeda desain (bukan intensitas), susun tabel kriteria–bobot–skor (dokumentasikan panil penilai, metode bobot, dan fungsi nilai); uji sensitivitas OAT pada 3 skenario (pro-sosial-ekonomi, pro-lingkungan, bobot rata) dan catat ambang perubahan peringkat; tulis justifikasi distributif.", tag: "MCE" },
  { t: "Refleksi kritis: ambil satu dokumen kebijakan konkret (RTRW/RDTR/KLHS/izin) dan periksa apakah evaluasinya benar-benar multikriteria dan membuka asumsi — atau sudah menutup pilihan sejak awal. Kutip bagian dokumen, beri label [F/R/A/I], dan tatariskan implikasi kesalahan Tipe III.", tag: "Refleksi" }
];

/* Pustaka */
APP_DATA.PUSTAKA = [
  { group: "Jurnal & panduan metode", items: [
    "Dunn, W.N. (2017). Public Policy Analysis (6th ed.). Routledge.",
    "Dorst, K. (2006). Design problems and design paradoxes. Design Issues, 22(3), 4–17.",
    "Hisschemöller, M., & Hoppe, R. (1996). Coping with intractable controversies: The case for problem structuring in policy design and analysis. Knowledge and Technology Policy, 8(4), 40–60.",
    "Malczewski, J. (2006). GIS-based multicriteria decision analysis. Int. J. Geographical Information Science, 20(7), 703–726.",
    "Reed, M.S., et al. (2009). Who's in and why? A typology of stakeholder analysis methods. J. Environmental Management, 90(5), 1933–1949.",
    "Saaty, T.L. (1990). How to make a decision: The analytic hierarchy process. European J. Operational Research, 48(1), 9–26.",
    "Ray, S. (2025). Integrating GIS, AI/ML, and MCDA for urban settlement planning. Applied Spatial Analysis, 18, 155.",
    "Holbrook, et al. (2018). Rules-of-thumb for problem-structuring policy design. Policy Design and Practice, 1(1).",
    "Yasmi, Y. (2003). Understanding conflict in the co-management of forests: Bulungan Research Forest. Int. Forestry Review, 5(1).",
    "Multi-criteria analysis: a manual. LSE Research Online (2009).",
    "Application of MCDA - systematic review 20 years (BES Journal, 2041-210X.12899)."
  ] },
  { group: "Regulasi & dokumen perencanaan", items: [
    "UU No. 32/2009 jo. UU No. 6/2023 (PPLH) — KLHS sebagai prasyarat KRP.",
    "PP No. 22/2021 — KLHS, daya dukung dan daya tampung, integrasi ke RTRW/RDTR.",
    "UU No. 26/2007 jo. PP No. 21/2021 — struktur dan pola ruang, kawasan lindung.",
    "UU No. 41/1999 (Kehutanan), UU No. 3/2020 (Minerba), UU No. 17/2019 (SDA), UU No. 1/2014 jo. 27/2007 (pesisir), Perpres No. 122/2012 (Reklamasi)."
  ] },
  { group: "Studi kasus", items: [
    "Reklamasi Teluk Benoa, Bali — SK Gubernur No. 2138/02-C/HK/2012 (±838 ha), gerakan ForBALI, penilaian MDS 43,15% (tidak/kurang berkelanjutan).",
    "Rencana Zonasi Wilayah Pesisir dan Pulau-Pulau Kecil (RZWP3K) — Bangka Belitung (kontestasi PAD timah vs ekologi).",
    "Industri nikel Morowali — ketidakadilan spasial, tata ruang sebagai legitimasi ekstraktivisme hijau.",
    "Review DPSIR fragmentasi hutan Indonesia (2024, Facets/ScienceDirect)."
  ] }
];
