/**
 * data-bab2.js — Konten Bab 2: Potensi Lokal dan Sistem Sosial-Ekologis.
 * Setiap halaman bab memuat TEPAT SATU file data (data.js untuk Bab 1, data-bab2.js untuk Bab 2, dst).
 */
window.APP_DATA = {};

APP_DATA.OBJECTIVES = [
  "Menganalisis hubungan antara potensi sumber daya lokal dan struktur wilayah.",
  "Mengidentifikasi pengaruh pertumbuhan penduduk, urbanisasi, kegiatan ekonomi, dan investasi terhadap pemanfaatan sumber daya.",
  "Menganalisis komponen, aliran sumber daya, dan hubungan sebab-akibat dalam sistem sosial-ekologis.",
  "Mengevaluasi umpan balik, ambang perubahan, dan respons sistem."
];

APP_DATA.GLOSSARY = {
  "peri-urban": {
    term: "Wilayah peri-urban",
    en: "peri-urban area",
    def: "Zona transisi antara perkotaan dan perdesaan yang ditandai perubahan struktur ekonomi, urbanisasi cepat, dan kenaikan harga lahan; sebagian besar lahannya masih digunakan untuk pertanian."
  },
  "desakota": {
    term: "Desakota",
    en: "desakota",
    def: "Konsep McGee (1991): bentang alam campuran pertanian–nonpertanian di koridor antarkota Asia, hasil perluasan aktivitas kota ke wilayah perdesaan — berbeda dari suburbanisasi klasik Barat."
  },
  "aset-bawaan": {
    term: "Aset bawaan",
    en: "endowed assets",
    def: "Sumber daya alam (lahan subur, air, mineral, keanekaragaman hayati), kondisi iklim, dan posisi geografis yang 'diberikan' dan tidak dapat dipindahkan antarwilayah."
  },
  "resource-dependence": {
    term: "Resource dependence",
    en: "resource dependence",
    def: "Ketergantungan ekonomi wilayah pada satu sektor komoditas, membuat struktur ekonomi rapuh ketika sumber daya menyusut atau harga komoditas jatuh."
  },
  "bid-rent": {
    term: "Teori sewa lahan (bid-rent)",
    en: "bid-rent theory",
    def: "Alonso (1964) — penggunaan lahan tersusun menurut kemampuan membayar sewa yang menurun seiring jarak dari pusat kota. Ketika sewa urban > pertanian, konversi lahan peri-urban menjadi 'rasional' bagi pemilik lahan."
  },
  "backwash": {
    term: "Efek backwash",
    en: "backwash effect",
    def: "Myrdal (1957) — konsentrasi sumber daya di pusat pertumbuhan menghisap sumber daya dari pinggiran ke pusat (tenaga kerja, modal, investasi), memperkuat ketimpangan wilayah bila tanpa intervensi."
  },
  "proksimal": {
    term: "Penyebab proksimal",
    en: "proximate causes",
    def: "Aktivitas manusia yang secara langsung mengubah tutupan lahan — ekspansi pertanian, ekstraksi kayu, perluasan infrastruktur (Geist & Lambin, 2002)."
  },
  "dpsir": {
    term: "DPSIR",
    en: "DPSIR framework",
    def: "Driving forces–Pressures–State–Impact–Response — kerangka rantai kausal dari European Environment Agency (1999) untuk menstrukturkan narasi KLHS; bersifat linear sehingga perlu dilengkapi analisis umpan balik."
  },
  "ses": {
    term: "Sistem sosial-ekologis",
    en: "social-ecological system (SES)",
    def: "Sistem terpadu yang menghubungkan sub-sistem sosial (manusia, ekonomi, dan kelembagaan) dengan sub-sistem ekologis (ekosistem dan sumber daya alam). Keduanya saling memengaruhi dan berevolusi bersama (Berkes & Folke, 1998)."
  },
  "sesf": {
    term: "SESF Ostrom",
    en: "Ostrom's SES framework",
    def: "Taksonomi berjenjang Ostrom (2009) untuk mendiagnosis SES: sistem sumber daya (RS), unit sumber daya (RU), tata kelola (GS), pengguna (A), interaksi (I), luaran (O) — dipengaruhi oleh setting sosial-ekonomi-politik (S) dan ekosistem terkait (ECO)."
  },
  "metabolisme": {
    term: "Metabolisme kota",
    en: "urban metabolism",
    def: "Kennedy dkk. (2007) — kota sebagai sistem yang memproses aliran masuk sumber daya (air, energi, pangan, material), menyimpannya sebagai stok, dan mengeluarkan limbah serta emisi."
  },
  "cld": {
    term: "Diagram loop kausal",
    en: "causal loop diagram (CLD)",
    def: "Alat pemetaan dari tradisi dinamika sistem (Sterman, 2000): variabel dihubungkan panah polaritas (+/−) membentuk loop penguat (R) yang memperkuat perubahan, atau loop penyeimbang (B) yang meredam."
  },
  "leverage-points": {
    term: "Titik ungkit",
    en: "leverage points",
    def: "Meadows (2008) — hierarki intervensi sistem: parameter (tarif, subsidi) < struktur stok-aliran < umpan balik < aturan sistem < tujuan dan paradigma. Intervensi parameter lemah; intervensi paradigma transformatif."
  },
  "resiliensi": {
    term: "Resiliensi ekologis",
    en: "ecological resilience",
    def: "Holling (1973) — kapasitas sistem menyerap gangguan dan berubah sambil tetap mempertahankan fungsi, struktur, dan umpan balik yang pada dasarnya sama."
  },
  "regime-shift": {
    term: "Pergeseran rezim",
    en: "regime shift",
    def: "Perubahan kualitatif keadaan sistem ketika tekanan melewati ambang (threshold) — danau jernih menjadi keruh (eutrofikasi), sawah menjadi kawasan banjir. Bersifat persisten dan sering sulit dipulihkan (Scheffer dkk., 2001)."
  },
  "histeresis": {
    term: "Histeresis",
    en: "hysteresis",
    def: "Pemulihan memerlukan penurunan tekanan jauh melampaui titik di mana pergeseran terjadi — biaya pemulihan jauh lebih mahal daripada biaya pencegahan."
  },
  "critical-slowing": {
    term: "Critical slowing down",
    en: "critical slowing down",
    def: "Sinyal peringatan dini sistem mendekati titik kritis: pemulihan dari gangguan kecil menjadi makin lambat, terdeteksi sebagai kenaikan autokorelasi dan varians dalam deret waktu (Scheffer dkk., 2009)."
  },
  "d3tlh": {
    term: "D3TLH",
    en: "environmental carrying capacity",
    def: "Daya dukung dan daya tampung lingkungan hidup — muatan wajib KLHS (PP No. 22/2021); upaya menerjemahkan ambang ekologis menjadi ambang normatif yang dapat ditegakkan."
  },
  "maladaptasi": {
    term: "Maladaptasi",
    en: "maladaptation",
    def: "Respons yang meredam gejala tetapi memperkuat penyebab. Contoh: tanggul dan drainase meredam banjir sementara, tetapi menarik permukiman baru dan mempercepat konversi lahan resapan."
  }
};

APP_DATA.CHAPTERS = [
  { n: 1, title: "Landasan Konseptual SDA dan Lingkungan", href: "bab-1.html" },
  { n: 2, title: "Potensi Lokal dan Sistem Sosial-Ekologis", href: "#top", current: true },
  { n: 3, title: "Arsitektur Data Spasial dan Nonspasial", href: "bab-3.html" },
  { n: 4, title: "Kapasitas Lingkungan dan Jasa Ekosistem", href: "bab-4.html" },
  { n: 5, title: "Perubahan Lahan, Pencemaran, dan Degradasi", href: "bab-5.html" },
  { n: 6, title: "Perubahan Iklim, Risiko Bencana, dan Ketahanan", href: "bab-6.html" },
  { n: 7, title: "Kebijakan, Instrumen, dan Kesenjangan Implementasi", href: "bab-7.html" },
  { n: 8, title: "Penstrukturan Masalah dan Evaluasi Multikriteria", href: "bab-8.html" },
  { n: 9, title: "Skenario, Strategi Terintegrasi, dan Implementasi", href: "bab-9.html" },
  { n: 10, title: "Komunikasi Kebijakan dan Penjaminan Mutu", href: "bab-10.html" }
];

APP_DATA.KEYWORDS = [
  { t: "Aset bawaan & ciptaan", to: "#sub-21" },
  { t: "Bid-rent & konversi lahan", to: "#sub-21" },
  { t: "Backwash & spread", to: "#sub-21" },
  { t: "Penyebab proksimal", to: "#sub-22" },
  { t: "Empat pendorong utama", to: "#pendorong" },
  { t: "DPSIR", to: "#sub-22" },
  { t: "Sistem sosial-ekologis (SES)", to: "#sub-23" },
  { t: "SESF Ostrom", to: "#sub-23" },
  { t: "Metabolisme kota", to: "#sub-24" },
  { t: "Diagram loop kausal (CLD)", to: "#sub-24" },
  { t: "Titik ungkit Meadows", to: "#sub-24" },
  { t: "Resiliensi", to: "#sub-25" },
  { t: "Regime shift & histeresis", to: "#sub-25" },
  { t: "Critical slowing down", to: "#sub-25" },
  { t: "Studi kasus peri-urban", to: "#studi-kasus" }
];

/* Stepper — 4 pendorong utama pemanfaatan sumber daya */
APP_DATA.STEPS = [
  {
    icon: "users",
    title: "1 · Pertumbuhan penduduk",
    body: "Pertambahan penduduk meningkatkan kebutuhan lahan permukiman, pangan, air, dan energi. Namun pengaruhnya selalu dimediasi oleh kepadatan, konsumsi per kapita, dan kelembagaan — pendorong mendasar, bukan penyebab langsung.",
    note: "Penduduk Indonesia 270,2 juta (SP2020); di Peri-urban Malang faktor demografi jadi konstruk sentral keputusan petani menjual lahan (Hasyim dkk., 2024)."
  },
  {
    icon: "tower-control",
    title: "2 · Urbanisasi",
    body: "56,7% penduduk Indonesia tinggal di perkotaan (2020) → proyeksi 66,6% (2035) → 72,9% (2045). Urbanisasi di Asia Tenggara memiliki ciri desakota (McGee, 1991): perluasan kota ke perdesaan di koridor antarkota, membentuk bentang alam campuran pertanian–nonpertanian.",
    note: "Di Greater Bandung, zona peri-urban radius 10–20 km menjadi zona kinerja tinggi dengan tekanan konversi terbesar (Mulya dkk., 2026)."
  },
  {
    icon: "chart-line",
    title: "3 · Kegiatan ekonomi",
    body: "Nilai ekonomi lahan non-pertanian jauh melampaui pertanian. Di Jawa Timur, lahan perumahan peri-urban bernilai 7× lebih tinggi dari lahan sawah (Rondhi dkk., 2018) — menciptakan insentif konversi yang sangat kuat.",
    note: "Kedekatan ke jalan raya dan pasar menaikkan harga ekspektasi pengembangan — lahan sawah berubah fungsi secara ekonomi 'rasional' bagi pemilik (Saptutyningsih dkk., 2025)."
  },
  {
    icon: "building-2",
    title: "4 · Investasi & infrastruktur",
    body: "Investasi properti skala besar dan infrastruktur bekerja mempercepat dan mengarahkan konversi. Di peri-urban Jakarta, inisiatif pengembang swasta mendahului perencanaan; pemerintah daerah menyesuaikan rencana tata ruang terhadap inisiatif swasta tersebut (Hudalah dkk., 2016).",
    note: "Ekspansi jalan tol terbukti memicu sprawl Jabodetabek (Pratama & Yudhistira, 2022) — arah kausalitas: investasi → pertumbuhan, bukan sebaliknya."
  }
];

/* Kronologi — tidak ada timeline natural untuk bab 2; gunakan array kosong agar komponen tidak crash */
APP_DATA.TIMELINE = [];

/* Checkpoint quiz — 5 soal */
APP_DATA.QUIZ = [
  {
    q: "Myrdal (1957) memperingatkan bahwa konsentrasi sumber daya di pusat pertumbuhan dapat menimbulkan efek backwash, yaitu…",
    options: [
      "Penyebaran manfaat dari pusat ke pinggiran secara merata.",
      "Hisapan sumber daya (tenaga kerja, modal) dari pinggiran ke pusat, memperkuat ketimpangan wilayah.",
      "Pembentukan pusat pertumbuhan baru di daerah tertinggal.",
      "Penurunan harga lahan di sekitar pusat pertumbuhan."
    ],
    answer: 1,
    pembahasan: "Efek backwash (Myrdal, 1957) adalah hisapan sumber daya dari pinggiran ke pusat — berlawanan dengan efek spread (penyebaran manfaat). Tanpa intervensi, ketimpangan cenderung menguat."
  },
  {
    q: "Kerangka Geist & Lambin (2002) tentang penyebab perubahan penggunaan lahan membedakan…",
    options: [
      "Penyebab ekonomi dan penyebab sosial.",
      "Penyebab proksimal (aktivitas langsung) dan kekuatan pendorong mendasar (demografi, kebijakan, ekonomi).",
      "Penyebab alami dan penyebab buatan.",
      "Penyebab internal dan eksternal wilayah."
    ],
    answer: 1,
    pembahasan: "Temuan kunci Geist & Lambin: perubahan lahan hampir tidak pernah digerakkan satu faktor tunggal. Perencana harus menolak penjelasan satu variabel dan menelusuri rantai pendorong hingga faktor kelembagaan."
  },
  {
    q: "Dalam kerangka sistem sosial-ekologis Ostrom (2009), yang dimaksud action situation adalah…",
    options: [
      "Titik temu tempat para aktor mengambil keputusan yang menghasilkan luaran sosial dan ekologis.",
      "Situasi darurat ketika sistem melewati ambang.",
      "Proses perencanaan partisipatif dalam RTRW.",
      "Lokasi geografis tempat sumber daya berada."
    ],
    answer: 0,
    pembahasan: "Action situation adalah titik di mana aktor (petani, pengembang, pemerintah) berinteraksi menghasilkan luaran — misalnya keputusan petani mengonversi sawah menjadi kavling perumahan."
  },
  {
    q: "Perbedaan antara loop penguat (reinforcing) dan loop penyeimbang (balancing) dalam diagram loop kausal adalah…",
    options: [
      "Loop penguat memperkuat perubahan; loop penyeimbang meredam perubahan menuju kesetimbangan.",
      "Loop penguat memperlambat perubahan; loop penyeimbang mempercepat perubahan.",
      "Keduanya sama, hanya istilah untuk arah panah yang berbeda.",
      "Loop penguat hanya ditemukan pada sistem alam; loop penyeimbang pada sistem sosial."
    ],
    answer: 0,
    pembahasan: "R-loop memperkuat (spiral ekspansi atau degradasi); B-loop meredam (stabilisasi). Contoh: konversi sawah → harga lahan naik → konversi lanjutan (R1); banjir → biaya proteksi → perlambatan konversi (B1 tertunda)."
  },
  {
    q: "Fenomena histeresis pada pergeseran rezim SES berarti…",
    options: [
      "Pemulihan memerlukan penurunan tekanan jauh melampaui titik di mana pergeseran terjadi — biaya pemulihan lebih mahal dari pencegahan.",
      "Sistem kembali ke keadaan semula dengan cepat setelah tekanan dihilangkan.",
      "Pergeseran rezim terjadi secara bertahap dan linear.",
      "Histeresis hanya terjadi pada sistem danau, bukan pada sistem sosial-ekologis."
    ],
    answer: 0,
    pembahasan: "Histeresis menjelaskan mengapa pencegahan jauh lebih murah daripada restorasi — keputusan tata ruang bersifat keputusan sekali jalan untuk sumber daya dengan ambang dan ketakterbalikan."
  }
];

/* Diskusi */
APP_DATA.DISKUSI = [
  { q: "Dengan kerangka Geist–Lambin, susun hierarki pendorong alih fungsi lahan di Jabodetabek: mana yang proksimal, mana yang mendasar, dan di mana letak titik intervensi yang realistis bagi pemerintah kabupaten?", h: "Gunakan data BPS urbanisasi, Pratama & Yudhistira (2022) untuk tol, dan Hudalah dkk. (2016) untuk gentrifikasi peri-urban. Titik intervensi paling realistis di level aturan (perizinan, LP2B) — bukan sekadar parameter." },
  { q: "Data luas sawah nasional berbeda antar-lembaga (BPS, Kementan, ATR/BPN). Apa implikasi perbedaan ini bagi mutu perencanaan tata ruang dan KLHS?", h: "Kaitkan dengan triangulasi data (Bab 3). Perencana yang baik menyajikan metadata (metode, tahun, cakupan) setiap sumber, bukan memaksakan satu angka. Diskusikan risiko governance ketika data tidak tunggal." },
  { q: "Bandingkan loop R2 (spiral banjir) pada subbab 2.4 dengan kondisi wilayah studi Anda: adakah respons kebijakan lokal yang justru memperkuat penyebab masalah (maladaptasi)?", h: "R2: konversi sawah → permukaan kedap ↑ → banjir ↑ → drainase/tanggul → rasa aman semu → permukiman baru → konversi ↑. Cari padanan di wilayah studi — mungkin tanggul pantai yang menarik hunian baru di zona rawan." },
  { q: "Mengapa ambang ilmiah (ekologis) dan ambang normatif (regulasi seperti D3TLH) sulit diselaraskan, dan bagaimana prinsip kehati-hatian (UU No. 32/2009) menjembataninya?", h: "Ambang ekologis: nonlinier, kontekstual, tidak pasti. Ambang normatif: sederhana, dapat ditegakkan. Risiko: ambang normatif terlalu longgar. Prinsip kehati-hatian = jangkar etis dalam ketidakpastian." }
];

/* Latihan */
APP_DATA.LATIHAN = [
  { t: "Identifikasi tiga pendorong utama perubahan pemanfaatan sumber daya di wilayah studi Anda. Gunakan kerangka Geist & Lambin: bedakan penyebab proksimal dan pendorong mendasar. Cantumkan bukti (data BPS, ATR/BPN, atau jurnal) dengan tahun, cakupan, dan metode. Susun tabel: pendorong | jenis | bukti | sumber | tingkat keyakinan.", tag: "Analisis" },
  { t: "Gambarkan diagram loop kausal antara urbanisasi dan tekanan terhadap satu sumber daya (lahan, air, atau RTH) di wilayah studi Anda. Gunakan maksimal 8–10 variabel, beri polaritas +/−, identifikasi loop R dan B, tandai satu titik ungkit, dan jelaskan pada level hierarki Meadows mana titik itu bekerja.", tag: "Spasial" },
  { t: "Perkirakan satu ambang perubahan yang berpotensi terlewati di wilayah studi Anda. Rumuskan variabel tekanan dan keadaan, dugaan titik kritis, status bukti (empiris/analog/hipotesis), respons sistem, kemungkinan histeresis, dan rekomendasi indikator peringatan dini (critical slowing down).", tag: "Refleksi" }
];

/* Daftar pustaka */
APP_DATA.PUSTAKA = [
  { group: "Jurnal peer-reviewed (rujukan utama)", items: [
    "Firman, T. (1997). Land conversion and urban development in the northern region of West Java, Indonesia. Urban Studies, 34(7), 1027–1046.",
    "Firman, T. (2000). Rural to urban land conversion in Indonesia during boom and bust periods. Land Use Policy, 17(1), 13–20.",
    "Geist, H.J., & Lambin, E.F. (2002). Proximate causes and underlying driving forces of tropical deforestation. BioScience, 52(2), 143–150.",
    "Holling, C.S. (1973). Resilience and stability of ecological systems. Annual Review of Ecology and Systematics, 4, 1–23.",
    "Hudalah, D., Winarso, H., & Woltjer, J. (2016). Gentrifying the peri-urban. Urban Studies, 53(3), 593–608.",
    "Mulya, S.P., dkk. (2024). Spatio-temporal changes in agricultural land in Greater Jakarta. Regional Environmental Change, 24, 195.",
    "Mulya, S.P., dkk. (2026). Rural–urban transition and control of agricultural land change in Greater Bandung. Sustainability, 18(10), 5016.",
    "Ostrom, E. (2009). A general framework for analyzing sustainability of social-ecological systems. Science, 325(5939), 419–422.",
    "Pratama, A.P., & Yudhistira, M.H. (2022). Highway expansion and urban sprawl in JMA. Land Use Policy, 114, 105856.",
    "Rondhi, M., dkk. (2018). Agricultural land conversion, land economic value, and sustainable agriculture. Land, 7(4), 148.",
    "Scheffer, M., dkk. (2001). Catastrophic shifts in ecosystems. Nature, 413, 591–596.",
    "Scheffer, M., dkk. (2009). Early-warning signals for critical transitions. Nature, 461, 53–59.",
    "Rizq, B., dkk. (2025). Urban expansion and rice supply vulnerability in Purwokerto. IOP Conf. Series: Earth & Env. Sci., 1556, 012095.",
    "Maulana, I.N.H., dkk. (2026). Land conversion, spatial governance failure, and food security in peri-urban Malang. Jurnal Mediasosian, 10(1)."
  ] },
  { group: "Buku dan karya seminal", items: [
    "Alonso, W. (1964). Location and Land Use. Harvard University Press.",
    "Berkes, F., & Folke, C. (Eds.). (1998). Linking Social and Ecological Systems. Cambridge University Press.",
    "Meadows, D.H. (2008). Thinking in Systems: A Primer. Chelsea Green.",
    "Myrdal, G. (1957). Economic Theory and Under-Developed Regions. Duckworth.",
    "Sterman, J.D. (2000). Business Dynamics. McGraw-Hill.",
    "Walker, B., & Salt, D. (2006). Resilience Thinking. Island Press.",
    "McGee, T.G. (1991). The emergence of desakota regions in Asia. Dalam The Extended Metropolis. Hawaii."
  ] },
  { group: "Regulasi dan data resmi Indonesia", items: [
    "UU No. 26/2007 tentang Penataan Ruang.",
    "UU No. 32/2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup.",
    "UU No. 41/2009 tentang Perlindungan Lahan Pertanian Pangan Berkelanjutan (LP2B).",
    "PP No. 21/2021 tentang Penyelenggaraan Penataan Ruang.",
    "PP No. 22/2021 tentang Penyelenggaraan PPLH (KLHS dan D3TLH).",
    "Perpres No. 60/2020 tentang RTR Kawasan Jabodetabekpunjur.",
    "BPS. Hasil Sensus Penduduk 2020 (persentase urban 56,7%; proyeksi 66,6% pada 2035).",
    "Kementerian ATR/BPN. Estimasi konversi lahan sawah (Kompas, 2024)."
  ] },
  { group: "Data dan organisasi internasional", items: [
    "European Environment Agency. (1999). Environmental Indicators. Technical Report No. 25.",
    "Seto, K.C., dkk. (2011). A meta-analysis of global urban land expansion. PLoS ONE, 6(8), e23777.",
    "Chaussard, E., dkk. (2013). Sinking cities in Indonesia. Remote Sensing of Environment, 128, 150–161."
  ] }
];
