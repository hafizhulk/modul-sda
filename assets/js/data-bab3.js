/**
 * data-bab3.js — Konten Bab 3: Arsitektur Data Spasial dan Nonspasial.
 * Setiap halaman bab memuat TEPAT SATU file data.
 */
window.APP_DATA = {};

APP_DATA.OBJECTIVES = [
  "Mengidentifikasi jenis, sumber, dan skala data spasial dan nonspasial untuk analisis lingkungan.",
  "Menyusun indikator lingkungan dan metadata yang memadai.",
  "Mengevaluasi validitas dan ketidakpastian data melalui triangulasi.",
  "Menilai keterbatasan bukti dalam pengambilan keputusan perencanaan."
];

APP_DATA.GLOSSARY = {
  "data-spasial": {
    term: "Data spasial",
    en: "spatial / geospatial data",
    def: "Data yang memiliki referensi geografis — posisi di permukaan bumi dalam sistem koordinat tertentu — sehingga dapat dipetakan dan dianalisis secara keruangan."
  },
  "data-nonspasial": {
    term: "Data nonspasial",
    en: "non-spatial data",
    def: "Data atribut tabular atau naratif tanpa geometri eksplisit, tetapi dapat dikaitkan ke unit spasial melalui kode wilayah atau titik sampling."
  },
  "raster": {
    term: "Model raster",
    en: "raster data model",
    def: "Representasi ruang sebagai grid sel, masing-masing membawa atribut; contoh citra Landsat 30 m. Cakupan luas, seri waktu panjang, tetapi terpengaruh awan dan bias klasifikasi."
  },
  "vektor": {
    term: "Model vektor",
    en: "vector data model",
    def: "Representasi fitur sebagai titik, garis, atau poligon yang ditautkan ke atribut; contoh batas kawasan hutan atau titik sumur pantau. Presisi lokasi tinggi."
  },
  "land-cover": {
    term: "Land cover vs land use",
    en: "land cover / land use",
    def: "SEEA Central Framework membedakan tutupan lahan (fisik-biologis yang teramati) dan penggunaan lahan (fungsi/tujuan pemanfaatan oleh manusia) — pencampuran keduanya adalah sumber polemik data."
  },
  "seea": {
    term: "SEEA",
    en: "System of Environmental-Economic Accounting",
    def: "Kerangka akuntansi lingkungan-ekonomi PBB; menyediakan klasifikasi standar land cover/land use mengacu FAO LCCS."
  },
  "dpsir": {
    term: "DPSIR",
    en: "DPSIR framework",
    def: "Driving forces–Pressures–State–Impact–Response (EEA, 1999): mengaitkan pendorong, tekanan, kondisi sumber daya, dampak, dan respons kebijakan dalam rantai kausal."
  },
  "mmu": {
    term: "Minimum Mapping Unit (MMU)",
    en: "minimum mapping unit",
    def: "Objek terkecil yang dipetakan; dua peta dengan MMU berbeda (mis. 6,25 ha vs 0,09 ha) tidak dapat dibandingkan luasnya secara langsung."
  },
  "maup": {
    term: "MAUP",
    en: "Modifiable Areal Unit Problem",
    def: "Openshaw (1984): unit agregasi spasial arbitrer; hasil statistik bergantung bentuk dan ukuran unit (efek skala dan efek zonasi)."
  },
  "ecological-fallacy": {
    term: "Kesesatan ekologis",
    en: "ecological fallacy",
    def: "Menarik inferensi tentang unit kecil (desa, individu) dari pola unit besar (kabupaten, provinsi) — atau sebaliknya."
  },
  "metadata": {
    term: "Metadata",
    en: "metadata",
    def: "Data tentang data: informasi produsen, tanggal, versi, sistem koordinat, skala, metode, definisi kelas, akurasi, lisensi — syarat agar angka dapat diaudit."
  },
  "iso19115": {
    term: "ISO 19115",
    en: "ISO 19115 Geographic Information — Metadata",
    def: "Standar internasional metadata geospasial; di Indonesia diadopsi sebagai SNI 8843-1:2019. Diperluas untuk citra/grid (19115-2) dan implementasi XML (19115-3)."
  },
  "fair": {
    term: "Prinsip FAIR",
    en: "FAIR Principles",
    def: "Findable, Accessible, Interoperable, Reusable (Wilkinson et al., 2016): penamaan konsisten, kamus data, changelog, dan lineage dari data mentah ke produk akhir."
  },
  "validitas-konstruk": {
    term: "Validitas konstruk",
    en: "construct validity",
    def: "Apakah indikator mengukur konsep yang dimaksud? Tree cover loss bukan deforestasi; luas terbangun bukan urbanisasi."
  },
  "olofsson": {
    term: "Protokol Olofsson",
    en: "Olofsson et al. (2014)",
    def: "Praktik baik estimasi luas perubahan lahan: sampling probabilistik, matriks galat dalam proporsi luas, interval kepercayaan, evaluasi galat referensi."
  },
  "triangulasi": {
    term: "Triangulasi",
    en: "triangulation",
    def: "Strategi validasi menurut Denzin (1978) dengan membandingkan data, metode, teori, dan peneliti. Hasilnya dapat konvergen, saling melengkapi, atau berbeda. Perbedaan merupakan temuan yang perlu dijelaskan, bukan kegagalan."
  },
  "ketidakpastian-epistemik": {
    term: "Ketidakpastian epistemik",
    en: "epistemic uncertainty",
    def: "Kurangnya pengetahuan yang dapat dikurangi dengan riset lebih lanjut — berbeda dari ketidakpastian ontik (variabilitas inheren) dan ambiguitas (interpretasi ganda)."
  },
  "precautionary": {
    term: "Asas kehati-hatian",
    en: "precautionary principle",
    def: "UU 32/2009 Pasal 2: ketidakpastian ilmiah bukan alasan menunda pencegahan kerusakan lingkungan."
  },
  "robust-decision": {
    term: "Robust Decision Making",
    en: "Robust Decision Making",
    def: "DMDU: menguji strategi pada ratusan skenario untuk menemukan strategi tangguh — berkinerja cukup baik di banyak masa depan — bukan optimal pada satu prediksi."
  },
  "tree-cover-loss": {
    term: "Tree cover loss vs deforestasi",
    en: "tree cover loss",
    def: "GFW mencatat gangguan tajuk >5m, >30% (piksel 30 m) — termasuk rotasi tanaman. Deforestasi resmi = perubahan permanen hutan menjadi bukan hutan (7 kelas hutan, MMU 6,25 ha, interpretasi visual)."
  }
};

APP_DATA.CHAPTERS = [
  { n: 1, title: "Landasan Konseptual SDA dan Lingkungan", href: "bab-1.html" },
  { n: 2, title: "Potensi Lokal dan Sistem Sosial-Ekologis", href: "bab-2.html" },
  { n: 3, title: "Arsitektur Data Spasial dan Nonspasial", href: "#top", current: true },
  { n: 4, title: "Kapasitas Lingkungan dan Jasa Ekosistem", href: "bab-4.html" },
  { n: 5, title: "Perubahan Lahan, Pencemaran, dan Degradasi", href: "bab-5.html" },
  { n: 6, title: "Perubahan Iklim, Risiko Bencana, dan Ketahanan", href: "bab-6.html" },
  { n: 7, title: "Kebijakan, Instrumen, dan Kesenjangan Implementasi", href: "bab-7.html" },
  { n: 8, title: "Penstrukturan Masalah dan Evaluasi Multikriteria", href: "bab-8.html" },
  { n: 9, title: "Skenario, Strategi Terintegrasi, dan Implementasi", href: "bab-9.html" },
  { n: 10, title: "Komunikasi Kebijakan dan Penjaminan Mutu", href: "bab-10.html" }
];

APP_DATA.KEYWORDS = [
  { t: "Data spasial vs nonspasial", to: "#sub-31" },
  { t: "Raster & vektor", to: "#sub-31" },
  { t: "Land cover / land use (SEEA)", to: "#sub-31" },
  { t: "BIG, BPS, KLHK", to: "#sub-31" },
  { t: "Satu Peta & Satu Data", to: "#sub-31" },
  { t: "Indikator DPSIR / PSR", to: "#sub-32" },
  { t: "Skala & MMU", to: "#sub-32" },
  { t: "MAUP & ecological fallacy", to: "#sub-32" },
  { t: "Metadata & ISO 19115", to: "#sub-33" },
  { t: "Prinsip FAIR", to: "#sub-33" },
  { t: "Validitas konstruk", to: "#sub-34" },
  { t: "Protokol Olofsson", to: "#sub-34" },
  { t: "Triangulasi (Denzin)", to: "#sub-34" },
  { t: "Precautionary principle", to: "#sub-35" },
  { t: "Robust Decision Making", to: "#sub-35" },
  { t: "Dua angka deforestasi", to: "#studi-kasus" }
];

/* Stepper — DPSIR */
APP_DATA.STEPS = [
  {
    icon: "users-round",
    title: "D — Driving forces",
    body: "Pendorong struktural: urbanisasi, pertumbuhan ekonomi, kebutuhan pangan dan energi. Pendorong tidak terlihat langsung di peta, tetapi menggerakkan semua tekanan.",
    note: "Contoh: ekspansi lahan sawit (driving: permintaan minyak nabati global)."
  },
  {
    icon: "hammer",
    title: "P — Pressures",
    body: "Tekanan langsung terhadap lingkungan: konversi hutan menjadi perkebunan, emisi, pengambilan air. Di sinilah aktivitas manusia menyentuh tutupan lahan.",
    note: "Tekanan yang terukur dari citra: perubahan piksel hutan menjadi non-hutan."
  },
  {
    icon: "map",
    title: "S — State",
    body: "Kondisi sumber daya saat ini: luas tutupan hutan, kualitas air, konsentrasi PM2.5. State adalah potret — bukan film — sehingga periode perekaman menentukan nilainya.",
    note: "State KLHK: luas 7 kelas hutan (MMU 6,25 ha). State GFW: tutupan tajuk >30% (piksel 0,09 ha)."
  },
  {
    icon: "heart-pulse",
    title: "I — Impact",
    body: "Dampak terhadap ekosistem dan manusia: emisi karbon, banjir, kehilangan habitat, biaya kesehatan. Dampak sering tertunda dan menyebar lintas batas administratif.",
    note: "Impact GFW 2025: ~220 Mt CO₂ dari kehilangan hutan alam — model emisi, bukan pengukuran langsung."
  },
  {
    icon: "shield-check",
    title: "R — Response",
    body: "Respons kebijakan dan masyarakat: moratorium, LP2B, Satu Peta, pemulihan. Respons yang baik menutup loop dengan mengubah driving forces — bukan sekadar mengobati state.",
    note: "DPSIR bersifat linear; sistem nyata memiliki umpan balik (response mengubah driving forces) — lihat Bab 2."
  }
];

APP_DATA.TIMELINE = [];

/* Quiz */
APP_DATA.QUIZ = [
  {
    q: "Perbedaan land cover dan land use menurut SEEA adalah…",
    options: [
      "Keduanya sinonim — keduanya berarti tutupan lahan yang terlihat dari citra.",
      "Land cover = tutupan fisik-biologis yang teramati; land use = fungsi/tujuan pemanfaatan lahan oleh manusia.",
      "Land cover hanya untuk hutan; land use hanya untuk lahan pertanian.",
      "Land cover diukur BPS, land use diukur BIG."
    ],
    answer: 1,
    pembahasan: "SEEA/FAO LCCS membedakan land cover (apa yang menutupi permukaan) dan land use (untuk apa lahan dipakai). Pencampuran keduanya adalah sumber salah tafsir deforestasi."
  },
  {
    q: "Implikasi praktis MMU 6,25 ha (KLHK) vs piksel 0,09 ha (GFW) adalah…",
    options: [
      "Keduanya identik — hanya beda satuan.",
      "Piksel 30 m menangkap pembukaan kecil yang hilang pada MMU 6,25 ha; sebaliknya interpretasi visual lebih andal membedakan kelas hutan rawa sekunder vs semak.",
      "MMU lebih kecil selalu menghasilkan angka deforestasi lebih besar.",
      "MMU hanya berpengaruh pada peta cetak, tidak pada statistik luas."
    ],
    answer: 1,
    pembahasan: "Resolusi dan MMU menentukan sensitivitas: GFW lebih sensitif terhadap patch kecil; KLHK lebih selektif membedakan kelas tematik."
  },
  {
    q: "MAUP mengingatkan perencana bahwa…",
    options: [
      "Semua peta dengan skala 1:50.000 pasti benar.",
      "Statistik ringkasan (total, laju, korelasi) dapat berubah bila data diagregasi pada unit atau zonasi berbeda — karena unit bersifat arbitrer dan dapat diubah.",
      "Kesesatan ekologis hanya terjadi pada data temporal, bukan spasial.",
      "MAUP dapat dihilangkan dengan menambah jumlah sampel lapangan."
    ],
    answer: 1,
    pembahasan: "Openshaw (1984): efek skala dan efek zonasi MAUP; kerabatnya ecological fallacy — inferensi lintas level agregasi tidak sah."
  },
  {
    q: "Mengapa tree cover loss GFW tidak identik dengan deforestasi KLHK?",
    options: [
      "Karena GFW salah hitung dan KLHK selalu benar.",
      "Karena keduanya mengukur konstruk berbeda, definisi hutan berbeda, metode berbeda (interpretasi visual vs klasifikasi otomatis), dan periode berbeda (Juli–Juni vs kalender).",
      "Karena GFW hanya mengukur di luar kawasan hutan.",
      "Karena KLHK mencakup rotasi tanaman yang akan ditanam kembali, sedangkan GFW tidak."
    ],
    answer: 1,
    pembahasan: "Empat pemicu selisih: definisi/konstruk, resolusi-M-MU, periode, dan akuntansi bruto vs netto. Tree cover loss mencakup panen rotasi yang akan tumbuh kembali — deforestasi permanen tidak."
  },
  {
    q: "Ketika dua sumber kredibel memberikan angka divergen, praktik yang dianjurkan adalah…",
    options: [
      "Pilih angka yang paling menguntungkan kebijakan.",
      "Rata-ratakan kedua angka dan laporkan satu titik.",
      "Laporkan kedua angka berdampingan dengan metadata ringkas, bandingkan yang sepadan (bruto-bruto, periode sama), dan jelaskan ketidakpastian — gunakan resmi sebagai rujukan normatif, GFW sebagai kontrol kewajaran.",
      "Abaikan keduanya dan buat estimasi sendiri tanpa triangulasi."
    ],
    answer: 2,
    pembahasan: "Kaidah jujur: rentang + sumber, bukan titik tunggal; bedakan tren vs level; jangan cherry-picking; rancang rekomendasi tangguh pada seluruh rentang bukti."
  }
];

/* Diskusi */
APP_DATA.DISKUSI = [
  { q: "Selisih mana dalam kasus deforestasi yang dapat dijelaskan murni oleh perbedaan metadata (definisi, MMU, periode, akuntansi), dan selisih mana yang menyiratkan perbedaan substantif di lapangan?", h: "Gunakan Tabel C studi kasus: pisahkan efek definisi (GFW tree cover vs 7 kelas hutan), efek resolusi (6,25 ha vs 0,09 ha), dan efek periode (Juli–Juni vs kalender). Selisih yang tersisa setelah koreksi metadata adalah sinyal tata kelola." },
  { q: "Angka mana yang akan Anda pakai untuk (a) KLHS RTRW, (b) komunikasi publik, dan (c) target kinerja kementerian — dan mengapa?", h: "(a) KLHS: angka resmi (sesuai mandat regulasi, memisahkan permanen vs temporer). (b) Publik: rentang kedua angka dengan narasi. (c) Kinerja: resmi sebagai akuntabilitas, GFW sebagai kontrol independen. Justifikasi: kesepadanan konstruk dengan tujuan pakai." },
  { q: "Apa konsekuensi keadilan lingkungan bila definisi resmi mengecualikan kehilangan tutupan pohon di luar kawasan hutan dari hitungan 'deforestasi'?", h: "Di luar kawasan hutan banyak tutupan pohon rakyat, kebun campur, dan hutan adat. Pengecualian membuat deforestasi tampak lebih kecil — bias terhadap kawasan yang justru paling dekat dengan mata pencaharian lokal." }
];

/* Latihan */
APP_DATA.LATIHAN = [
  { t: "Susun matriks kebutuhan data untuk diagnosis lingkungan wilayah studi Anda. Kolom: indikator | konstruk yang diukur | sumber | jenis (spasial/nonspasial) | skala/resolusi/MMU | periode | format | metadata kunci | keterbatasan. Minimal 10 indikator (lahan, air, udara, hayati, sosial-ekonomi).", tag: "Matriks" },
  { t: "Bandingkan dua sumber untuk indikator yang sama di wilayah studi (mis. tutupan hutan KLHK vs GFW; BPS vs Dinas; RBI vs OSM). Tulis telaah narasi perbedaan definisi, metode, periode, cakupan, besaran selisih, dan apakah selisih dapat dijelaskan metadata.", tag: "Perbandingan" },
  { t: "Rumusan protokol triangulasi untuk kasus Latihan 2: sumber ketiga independen apa, verifikasi lapangan apa yang mungkin, bagaimana melaporkan bila ketiga sumber berbeda (konvergen/komplementer/divergen), dan bagaimana rekomendasi tetap tangguh pada seluruh rentang bukti.", tag: "Triangulasi" }
];

/* Pustaka */
APP_DATA.PUSTAKA = [
  { group: "Jurnal peer-reviewed", items: [
    "Denzin, N.K. (1978). The Research Act: A Theoretical Introduction to Sociological Methods (2nd ed.). McGraw-Hill.",
    "Hansen, M.C., et al. (2013). High-resolution global maps of 21st-century forest cover change. Science, 342(6160), 850–853.",
    "Margono, B.A., et al. (2014). Primary forest cover loss in Indonesia over 2000–2012. Nature Climate Change, 4(8), 730–735.",
    "Olofsson, P., et al. (2014). Good practices for estimating area and assessing accuracy of land change. Remote Sensing of Environment, 148, 42–57.",
    "Openshaw, S. (1984). The Modifiable Areal Unit Problem (CATMOG 38). Geo Books.",
    "Turubanova, S., et al. (2018). Ongoing primary forest loss in Brazil, DRC, and Indonesia. Environ. Res. Lett., 13(7), 074028.",
    "Wilkinson, M.D., et al. (2016). The FAIR Guiding Principles. Scientific Data, 3, 160018."
  ] },
  { group: "Kerangka indikator & lembaga internasional", items: [
    "OECD. (1993). OECD Core Set of Indicators for Environmental Performance Reviews.",
    "Smeets, E., & Weterings, R. (1999). Environmental Indicators: Typology and Overview. EEA Technical Report No. 25.",
    "WRI Indonesia. (2020). GFW Technical Blog: Definition and Methodology 2019 Forest Loss Data.",
    "FAO. Land Cover Classification System (LCCS); SEEA Central Framework (land accounts)."
  ] },
  { group: "Regulasi Indonesia", items: [
    "UU No. 4/2011 tentang Informasi Geospasial.",
    "UU No. 32/2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup (jo. UU 6/2023).",
    "PP No. 22/2021 tentang Penyelenggaraan PPLH.",
    "Perpres No. 27/2014 tentang JIGN; Perpres No. 9/2016 jo. 23/2021 tentang Satu Peta (skala 1:50.000).",
    "Perpres No. 39/2019 tentang Satu Data Indonesia.",
    "SNI 8843-1:2019; SNI ISO 19115-2:2020; 19115-3:2021; 19157:2015 (metadata & kualitas data geospasial)."
  ] },
  { group: "Data resmi & studi kasus", items: [
    "BPS. Statistik Lingkungan Hidup Indonesia — tabel Angka Deforestasi (Netto) 2013–2022.",
    "KLHK. (2023, 26 Juni). Rilis deforestasi 2021–2022 (netto 104 ribu ha; bruto 119,4 ribu ha).",
    "Kementerian Kehutanan. (2025, Feb). Hutan dan Deforestasi Indonesia Tahun 2024 (netto 175,4 ribu ha).",
    "Global Forest Watch — Indonesia (diakses 2026): hutan alam 2025 ±300 ribu ha; hutan primer lembap 2002–2025 11 juta ha.",
    "Auriga Nusantara / Simontini. (2025). Status deforestasi 2024 (261.575 ha; 2023: 257.384 ha)."
  ] }
];
