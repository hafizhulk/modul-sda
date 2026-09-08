/**
 * data.js — SEMUA KONTEN EDITABLE untuk modul SDL Bab 1.
 * ------------------------------------------------------------------
 * Dosen/editor cukup mengubah objek & array di bawah ini TANPA menyentuh
 * file logika (main.js, stepper.js, quiz.js, extras.js).
 * ID pada data-gloss (di bab-1.html) harus cocok dengan kunci di GLOSSARY.
 */
window.APP_DATA = {};

/* Tujuan pembelajaran (rendered di bagian Objectives) */
APP_DATA.OBJECTIVES = [
  "Menjelaskan pengertian dan ruang lingkup sumber daya alam serta lingkungan dalam perencanaan wilayah dan kota.",
  "Membedakan klasifikasi sumber daya terbarukan, tidak terbarukan, dan jasa lingkungan.",
  "Menganalisis karakteristik kelangkaan, keterbatasan, dan distribusi spasial sumber daya.",
  "Mengaitkan konsep sumber daya dengan persoalan perencanaan wilayah dan kota."
];

/* Glosarium tooltip — key = nilai data-gloss pada <span class="term"> */
APP_DATA.GLOSSARY = {
  "sda": {
    term: "Sumber daya alam",
    en: "natural resources",
    def: "Unsur lingkungan hidup yang terdiri atas sumber daya hayati dan nonhayati yang secara keseluruhan membentuk kesatuan ekosistem (UU No. 32/2009 Pasal 1 ayat 9)."
  },
  "zimmermann": {
    term: "Tesis Zimmermann",
    en: "\"resources are not, they become\"",
    def: "Sumber daya tidak ada dengan sendirinya, melainkan menjadi sumber daya ketika manusia menilainya berguna. Alam menyediakan bahan netral (neutral stuff), sedangkan kebutuhan, pengetahuan, teknologi, dan kelembagaan mengubahnya menjadi sumber daya (Zimmermann, 1933)."
  },
  "natural-capital": {
    term: "Modal alam",
    en: "natural capital",
    def: "Stok aset alam terbarukan maupun tidak terbarukan yang menghasilkan aliran manfaat (jasa ekosistem) bagi masyarakat — kerangka akuntansi yang menyatukan stok dan aliran."
  },
  "jasa-lingkungan": {
    term: "Jasa ekosistem",
    en: "ecosystem services",
    def: "Aliran manfaat yang dihasilkan proses ekologis — bukan stok material yang diekstraksi. Diklasifikasikan MEA (2005) menjadi penyediaan, pengaturan, pendukung, dan budaya; disempurnakan TEEB, CICES, dan NCP IPBES."
  },
  "terbarukan": {
    term: "Sumber daya terbarukan",
    en: "renewable resources",
    def: "Dapat memperbarui diri melalui proses alami dalam skala waktu manusia — dengan syarat laju pemanfaatan tidak melampaui laju regenerasi. Keterbaruan adalah properti manajemen, bukan hanya fisik."
  },
  "zona-kritis": {
    term: "Zona kritis",
    en: "critical zone / threshold",
    def: "Ambang pada sumber daya terbarukan stok biologis: di bawah populasi atau cadangan tertentu, regenerasi gagal dan sumber daya secara fungsional berubah menjadi tidak terbarukan."
  },
  "cpr": {
    term: "Sumber daya milik bersama",
    en: "common-pool resources (CPR)",
    def: "Sumber daya dengan dua ciri: sulit-mahal mengecualikan pengguna lain (low excludability) sementara konsumsinya rival — mis. perikanan, air tanah, DAS. Konfigurasi paling rawan overekstraksi."
  },
  "hardin": {
    term: "Tragedi milik bersama",
    en: "tragedy of the commons",
    def: "Hardin (1968): pengguna individual yang rasional menambah pemanfaatan karena manfaatnya privat sementara biaya degradasi dibagi kolektif — tanpa tata kelola, eksploitasi berlebih tak terelakkan."
  },
  "ostrom": {
    term: "Prinsip desain Ostrom",
    en: "Ostrom's design principles",
    def: "Ostrom (1990): komunitas mampu mengelola sumber daya bersama secara berkelanjutan melalui batas yurisdiksi jelas, aturan sesuai kondisi lokal, pemantauan, sanksi bertingkat, dan resolusi konflik."
  },
  "kelangkaan-buatan": {
    term: "Kelangkaan buatan",
    en: "human-induced scarcity",
    def: "Kelangkaan yang muncul bukan karena habisnya stok fisik, melainkan karena keputusan alokasi, desain kelembagaan, atau degradasi kualitas — bekerja melalui lima mekanisme (lihat subbab 1.3)."
  },
  "falkenmark": {
    term: "Indikator Falkenmark",
    en: "Falkenmark water stress index",
    def: "Ketersediaan air terbarukan per kapita: <1.700 m³/thn water stress; <1.000 m³/thn water scarcity; <500 m³/thn absolute scarcity (Falkenmark, 1989). Bersifat heuristik — dasar empirisnya lemah (Damkjaer & Taylor, 2017)."
  },
  "keadilan-lingkungan": {
    term: "Keadilan lingkungan",
    en: "environmental justice",
    def: "Isu distribusi manfaat dan beban lingkungan yang timpang antarruang dan antarkelompok sosial — manfaat menyebar, beban menumpuk pada kelompok dengan daya politik terkecil."
  },
  "daya-dukung": {
    term: "Daya dukung lingkungan hidup",
    en: "carrying capacity",
    def: "Kemampuan lingkungan hidup mendukung perikehidupan manusia, makhluk hidup lain, dan keseimbangan antarkeduanya (UU No. 32/2009); muatan wajib KLHS menurut PP No. 22/2021."
  },
  "daya-tampung": {
    term: "Daya tampung lingkungan hidup",
    en: "assimilative capacity",
    def: "Kemampuan lingkungan hidup menyerap zat, energi, dan/atau komponen lain yang masuk atau dimasukkan ke dalamnya (UU No. 32/2009 Pasal 1 ayat 8)."
  },
  "klhs": {
    term: "KLHS",
    en: "strategic environmental assessment",
    def: "Kajian Lingkungan Hidup Strategis — instrumen menguji ketimpangan manfaat–beban antaralternatif kebijakan sebelum ditetapkan; analisis daya dukung–daya tampung adalah muatan wajibnya (PP No. 22/2021)."
  },
  "resource-curse": {
    term: "Kutukan sumber daya",
    en: "resource curse",
    def: "Korelasi historis antara kelimpahan sumber daya dan kinerja pembangunan yang justru lebih lambat (Auty, 1993; Sachs & Warner, 2001) — hasilnya bergantung pada kualitas kelembagaan; pada skala wilayah dibaca sebagai daerah kaya ekstraktif yang tidak otomatis sejahtera."
  },
  "telecoupling": {
    term: "Telecoupling",
    en: "telecoupling",
    def: "Keterkaitan jarak jauh antara sistem manusia–alam: kota modern tidak hidup dari sumber daya dalam batas administratifnya, melainkan dari metabolisme yang menarik sumber daya hinterland jauh (Liu et al., 2013)."
  },
  "lp2b": {
    term: "LP2B",
    en: "protected sustainable food agriculture land",
    def: "Lahan Pertanian Pangan Berkelanjutan — instrumen perlindungan lahan subur yang bersifat keputusan sekali jalan (UU No. 41/2009), dasar normatif atas ambang dan ketakterbalikan konversi lahan."
  }
};

/* Bab-bab modul (nav dropdown di header) */
APP_DATA.CHAPTERS = [
  { n: 1, title: "Landasan Konseptual SDA dan Lingkungan", href: "#top", current: true },
  { n: 2, title: "Potensi Lokal dan Sistem Sosial-Ekologis", href: "bab-2.html" },
  { n: 3, title: "Arsitektur Data Spasial dan Nonspasial", href: "bab-3.html" },
  { n: 4, title: "Kapasitas Lingkungan dan Jasa Ekosistem", href: "bab-4.html" },
  { n: 5, title: "Perubahan Lahan, Pencemaran, dan Degradasi", href: null },
  { n: 6, title: "Perubahan Iklim, Risiko Bencana, dan Ketahanan", href: null },
  { n: 7, title: "Kebijakan, Instrumen, dan Kesenjangan Implementasi", href: null },
  { n: 8, title: "Penstrukturan Masalah dan Evaluasi Multikriteria", href: null },
  { n: 9, title: "Skenario, Strategi Terintegrasi, dan Implementasi", href: null },
  { n: 10, title: "Komunikasi Kebijakan dan Penjaminan Mutu", href: null }
];

/* Kata kunci (chips yang scroll ke subbab terkait) */
APP_DATA.KEYWORDS = [
  { t: "Konstruk fungsional", to: "#sub-11" },
  { t: "UU No. 32/2009", to: "#sub-11" },
  { t: "Natural capital", to: "#sub-11" },
  { t: "Terbarukan", to: "#sub-12" },
  { t: "Tidak terbarukan", to: "#sub-12" },
  { t: "Jasa ekosistem · MEA/CICES", to: "#sub-12" },
  { t: "Common-pool resources", to: "#sub-12" },
  { t: "Hardin vs Ostrom", to: "#sub-12" },
  { t: "Kelangkaan absolut–ekonomis–buatan", to: "#sub-13" },
  { t: "Lima mekanisme kelangkaan buatan", to: "#mekanisme" },
  { t: "Indikator Falkenmark", to: "#sub-13" },
  { t: "Mismatch pasokan–permintaan", to: "#sub-14" },
  { t: "Keadilan lingkungan", to: "#sub-14" },
  { t: "Studi kasus Laut Aral", to: "#studi-kasus" },
  { t: "Padanan Indonesia", to: "#padanan" }
];

/* Stepper — lima mekanisme kelangkaan buatan (Subbab 1.3.2) */
APP_DATA.STEPS = [
  {
    icon: "gauge",
    title: "1 · Overekstraksi melampaui regenerasi",
    body: "Laju ambil melebihi laju pulih — perikanan ditangkap lebih cepat dari reproduksinya, air tanah dipompa lebih cepat dari pengisian akuifer. Sumber daya terbarukan berperilaku seperti stok yang dideplesi.",
    note: "Contoh: cekungan air tanah Jakarta–Semarang; iktiofauna Laut Aral yang runtuh dari >34.000 ton/tahun (1961) menjadi praktis berhenti (1980-an)."
  },
  {
    icon: "flask-conical",
    title: "2 · Degradasi kualitas",
    body: "Stok fisik masih ada tetapi tidak lagi dapat digunakan: pencemaran air permukaan, salinisasi tanah dan danau, intrusi air laut ke akuifer. Kelangkaan muncul di tengah kelimpahan fisik.",
    note: "Contoh: salinitas Aral Selatan >100 g/L (lebih asin dari laut); Sungai Semarang tercemar sehingga kota bergantung air tanah — curah hujan >2.000 mm/tahun."
  },
  {
    icon: "split",
    title: "3 · Pengalihan alokasi",
    body: "Sumber daya dipindahkan dari satu pengguna/wilayah ke pengguna/wilayah lain oleh keputusan politik — manfaat menyebar di satu sisi, beban menumpuk di sisi lain.",
    note: "Contoh: pengalihan Amu Darya & Syr Darya untuk irigasi kapas; arus sumber daya antarwilayah dalam struktur ruang Indonesia."
  },
  {
    icon: "lock-open",
    title: "4 · Kegagalan hak milik / akses terbuka",
    body: "Tanpa aturan eksklusi, insentif individual menghancurkan stok kolektif — dilema Hardin (1968). Ostrom (1990) menunjukkan jalan keluarnya: tata kelola kolektif dengan prinsip desain kelembagaan.",
    note: "Contoh: air tanah perkotaan — rival dan sulit dieksklusi; persis konfigurasi CPR paling rawan."
  },
  {
    icon: "anchor",
    title: "5 · Penguncian teknologi-infrastruktur (lock-in)",
    body: "Investasi besar pada satu pola pemanfaatan (waduk, kanal, jaringan irigasi) membuat koreksi arah mahal secara politik-ekonomi, bahkan setelah biaya lingkungannya diketahui.",
    note: "Contoh: sistem kanal irigasi Aral; rekonstitusi penuh laut memerlukan inflow ±65 km³/tahun — praktis mustahil (studi 2023)."
  }
];

/* Kronologi studi kasus Laut Aral (Tabel 1.2 draf bab) */
APP_DATA.TIMELINE = [
  { year: "1960", title: "Danau terbesar ke-4 dunia", text: "Luas ±68.000 km², volume ±1.100 km³, salinitas ±10 g/L; perikanan >34.000 ton/tahun (1961). Ditopang Amu Darya dan Syr Darya (Micklin, 2007)." },
  { year: "1960-an–1980-an", title: "Ekspansi irigasi kapas", text: "Uni Soviet mengalihkan aliran kedua sungai (antara lain Kanal Karakum) untuk budi daya kapas \"emas putih\"; lahan irigasi basin melonjak dari ±4,5 juta ha (1960) menjadi ±8 juta ha (2006)." },
  { year: "1980", title: "Perikanan kolaps", text: "Hasil tangkapan turun di bawah 3.000 ton/tahun, lalu praktis berhenti — zona kritis stok biologis telah terlewati." },
  { year: "1987", title: "Danau terbelah", text: "Aral terpisah menjadi Aral Utara (Kecil) dan Aral Selatan (Besar); muka air terus turun menuju total −23 m." },
  { year: "2007", title: "Desikasi masif terdokumentasi", text: "Luas menyusut 74%, volume −90%, salinitas Aral Selatan >100 g/L; dasar laut menjadi Aralkum Desert — sumber badai debu-garam berpestisida (Micklin, 2007)." },
  { year: "2005–2008", title: "Pemulihan parsial Aral Utara", text: "Bendung Kokaral (13 km, dukungan Bank Dunia) selesai 2005; pada 2008 volume Aral Utara +68%, salinitas turun separuh, produksi ikan naik >3× (Bank Dunia, 2014)." },
  { year: "Kini", title: "Restorasi penuh tidak realistis", text: "Rekonstitusi penuh memerlukan pasokan ±65 km³ air/tahun — praktis mustahil dengan kebutuhan irigasi yang berlanjut (studi 2023). Pemulihan parsial pun bergeografi pemenang dan tertinggal." }
];

/* Checkpoint quiz — soal pilihan ganda + pembahasan */
APP_DATA.QUIZ = [
  {
    q: "Tesis Zimmermann \"resources are not, they become\" menyiratkan bahwa…",
    options: [
      "Sumber daya bersifat tetap sepanjang sejarah.",
      "Alam menyediakan bahan netral, dan penilaian manusia — melalui kebutuhan, teknologi, dan kelembagaan — yang mengubahnya menjadi sumber daya.",
      "Sumber daya hanya dapat didefinisikan oleh pasar.",
      "Klasifikasi sumber daya bersifat absolut dan universal."
    ],
    answer: 1,
    pembahasan: "Konstruk fungsional Zimmermann (1933) menempatkan penilaian manusia sebagai pengubah neutral stuff menjadi sumber daya — konsekuensinya klasifikasi bersifat dinamis dan kelangkaan relatif terhadap kelembagaan-teknologi."
  },
  {
    q: "Air tanah di cekungan Jakarta tergolong terbarukan dalam siklus hidrologi, tetapi secara fungsional berubah menjadi tidak terbarukan karena…",
    options: [
      "Air tanah tidak pernah terbarukan sejak awal.",
      "Perubahan iklim menghentikan siklus hidrologi.",
      "Laju pengambilan melampaui laju pengisian ulang, hingga akuifer termampatkan dan terjadi intrusi air laut — melewati zona kritis.",
      "Pemerintah melarang penggunaan air tanah."
    ],
    answer: 2,
    pembahasan: "Keterbaruan adalah properti manajemen: di bawah ambang populasi/cadangan tertentu (zona kritis), regenerasi gagal dan sumber daya berperilaku seperti stok tidak terbarukan (Subbab 1.2.1)."
  },
  {
    q: "Perbedaan inti pandangan Hardin dan Ostrom tentang sumber daya milik bersama adalah…",
    options: [
      "Hardin membuktikan tragedi tak terhindarkan; Ostrom menunjukkan komunitas dapat mengelola CPR secara berkelanjutan melalui prinsip desain kelembagaan.",
      "Hardin fokus pada perikanan laut; Ostrom pada air tanah.",
      "Keduanya sepakat hanya privatisasi yang bisa mencegah tragedi.",
      "Ostrom membantah adanya rivalitas pada sumber daya bersama."
    ],
    answer: 0,
    pembahasan: "Hardin (1968) merumuskan tragedi milik bersama sebagai keniscayaan insentif; Ostrom (1990) membantah determinismenya dengan bukti empiris tata kelola kolektif: batas jelas, pemantauan, sanksi bertingkat, resolusi konflik."
  },
  {
    q: "Kelangkaan air di Semarang — curah hujan >2.000 mm/tahun tetapi kota bergantung pada air tanah hingga terjadi subsiden — paling tepat didiagnosis sebagai…",
    options: [
      "Kelangkaan absolut (fisik).",
      "Kelangkaan relatif-ekonomis semata.",
      "Kelangkaan struktural-institusional dan buatan: permukaan tercemar sehingga tak layak, sementara ekstraksi air tanah tak terkendali.",
      "Kelangkaan alamiah akibat iklim kering."
    ],
    answer: 2,
    pembahasan: "Stok fisik air melimpah, tetapi kegagalan pengelolaan (pencemaran + ekstraksi tak terkoordinasi) menciptakan kelangkaan di tengah kelimpahan — padanan fungsional penyadapan Amu Darya–Syr Darya (Gell et al., 2025)."
  },
  {
    q: "Pelajaran utama kasus Laut Aral bagi perencana wilayah Indonesia adalah…",
    options: [
      "Irigasi besar-besaran selalu menguntungkan ekonomi nasional.",
      "Skala analisis dan tata kelola harus mengikuti sistem sumber daya (cekungan/DAS) lintas yurisdiksi, dengan analisis distribusi manfaat–beban yang eksplisit.",
      "Danau terminal sebaiknya tidak dimanfaatkan sama sekali.",
      "Perubahan iklim adalah penyebab utama bencana sumber daya."
    ],
    answer: 1,
    pembahasan: "Kegagalan melembagakan pengelolaan lintas yurisdiksi adalah akar bencana Aral; manfaat irigasi menyebar sementara beban menumpuk di Karakalpakstan — analisis distribusi manfaat-beban adalah kewajiban analitis, bukan pelengkap."
  }
];

/* Pertanyaan diskusi + petunjuk singkat */
APP_DATA.DISKUSI = [
  { q: "Tarr et al. (2004, Bank Dunia) mengajukan pertanyaan counterfactual: apakah bencana Aral dapat dihindari bila harga air irigasi dihitung benar dan Uni Soviet mengimpor kapas? Bagaimana posisi Anda, dan apa implikasinya bagi pricing sumber daya publik di Indonesia?", h: "Pertimbangkan: harga sebagai sinyal kelangkaan vs hak akses; siapa yang menanggung bila harga dinaikkan; apakah instrumen harga cukup tanpa reformasi kelembagaan." },
  { q: "Aryal et al. (2021) menemukan >80% studi trade-off jasa ekosistem hanya memodelkan kendala biofisik tanpa fungsi utilitas pemangku kepentingan. Mengapa celah metodologis ini penting bagi praktik KLHS di daerah?", h: "Hubungkan dengan kriteria evaluasi multikriteria (Bab 8): siapa yang menentukan bobot, dan apa risikonya bila utilitas aktor lokal diabaikan sejak analisis." },
  { q: "Guo et al. (2017) menunjukkan optimasi biocapacity lewat tata guna lahan bisa menurunkan ecological overshoot 29–53% tetapi menuntut volume air tambahan besar. Apa pelajaran umumnya bagi intervensi perencanaan?", h: "Intervensi mengatasi kelangkaan satu sumber daya sering mentransfer tekanan ke sumber daya lain — analisis lintas sektor (air–energi–pangan–lahan) diperlukan sejak awal." },
  { q: "Batubara et al. (2023) menyebut subsiden Jakarta sebagai proses urbanisasi kapitalistik: penyebab (industri/gedung penyedap air tanah) dan korban (kampung pesisir utara) berbeda kelompok. Bagaimana kerangka keadilan lingkungan membaca kasus ini, dan instrumen perencanaan apa yang dapat memutus rantainya?", h: "Petakan pemisahan spasial-sosial manfaat dan beban; kaitkan dengan zona bebas sumur, jaringan air pipa, dan penegakan perizinan — bandingkan dengan pola manfaat-hilir/beban-hilir Aral." }
];

/* Latihan (checklist, localStorage) */
APP_DATA.LATIHAN = [
  { t: "Susun tabel klasifikasi sumber daya wilayah studi Anda (terbarukan aliran & stok biologis, tidak terbarukan, jasa ekosistem MEA/CICES) beserta status dan jenis kelangkaannya. Cantumkan indikator, tahun data, dan sumber primer; bila data tidak tersedia, tulis \"data belum tersedia\" — jangan mengarang angka.", tag: "Analisis" },
  { t: "Pilih satu sumber daya yang distribusi spasialnya timpang di wilayah studi Anda; petakan lokasi ketersediaan vs permintaan, arus antarwilayah (infrastruktur pemindahnya), penerima manfaat vs penanggung beban, lalu kaitkan dengan struktur dan pola ruang RTRW setempat.", tag: "Spasial" },
  { t: "Diskusi terstruktur: mengapa Laut Aral disebut kelangkaan buatan, dan apa padanannya di Indonesia (Danau Limboto, air tanah Jakarta/Semarang, atau kasus pilihan Anda)? Gunakan lima mekanisme subbab 1.3 sebagai kerangka; tutup dengan satu rekomendasi kelembagaan — bukan teknis.", tag: "Refleksi" }
];

/* Daftar pustaka (dikelompokkan) */
APP_DATA.PUSTAKA = [
  { group: "Jurnal peer-reviewed (rujukan utama)", items: [
    "Costanza, R., d'Arge, R., de Groot, R., et al. (1997). The value of the world's ecosystem services and natural capital. Nature, 387(6630), 253–260.",
    "Damkjaer, S., & Taylor, R. (2017). The measurement of water scarcity: Defining a meaningful indicator for water resources management. Water, 9(7), 513.",
    "Falkenmark, M. (1989). The massive water scarcity now threatening Africa: Why isn't it being addressed? Ambio, 18(2), 112–118.",
    "Hardin, G. (1968). The tragedy of the commons. Science, 162(3859), 1243–1248.",
    "Micklin, P. (1988). Desiccation of the Aral Sea: A water management disaster in the Soviet Union. Science, 241(4870), 1170–1176.",
    "Micklin, P. (2007). The Aral Sea disaster. Annual Review of Earth and Planetary Sciences, 35, 47–72.",
    "Sachs, J. D., & Warner, A. M. (2001). The curse of natural resources. European Economic Review, 45(4–6), 827–838.",
    "Small, I., van der Meer, J., & Upshur, R. E. G. (2003). The Aral Sea disaster and the disaster of international assistance. Journal of International Affairs, 56(2), 137–154.",
    "Wallace, K. J. (2007). Classification of ecosystem services: Problems and solutions. Biological Conservation, 139(3–4), 235–246.",
    "Aryal, K., Maraseni, T. N., & Apan, A. (2021). How much do we know about trade-offs in ecosystem services? Science of the Total Environment.",
    "Batubara, B., Kooy, M., & Zwarteveen, M. (2023). Politicising land subsidence in Jakarta. Geoforum.",
    "Chaussard, E., Amelung, F., Abidin, H., & Hong, S.-H. (2013). Sinking cities in Indonesia. Remote Sensing of Environment, 128, 150–161.",
    "González-García, A., Palomo, I., González, J. A., López, C. A., & Montes, C. (2020). Quantifying spatial supply-demand mismatches in ecosystem services. Land Use Policy, 94, 104493.",
    "Nahib, I., et al. (2023). Spatial-temporal changes in water supply and demand in the Citarum Watershed. Sustainability, 15(1), 562."
  ] },
  { group: "Buku teks dan karya seminal", items: [
    "Auty, R. M. (1993). Sustaining Development in Mineral Economies: The Resource Curse Thesis. Routledge.",
    "Kumar, P. (Ed.). (2010). The Economics of Ecosystems and Biodiversity (TEEB): Ecological and Economic Foundations. Earthscan.",
    "Ostrom, E. (1990). Governing the Commons. Cambridge University Press.",
    "Perman, R., Ma, Y., Common, M., Maddison, D., & McGilvray, J. (2011). Natural Resource and Environmental Economics (4th ed.). Pearson.",
    "Tietenberg, T., & Lewis, L. (2018). Environmental and Natural Resource Economics (11th ed.). Routledge.",
    "Zimmermann, E. W. (1933). World Resources and Industries. Harper & Brothers."
  ] },
  { group: "Penilaian dan klasifikasi internasional", items: [
    "Millennium Ecosystem Assessment (2005). Ecosystems and Human Well-being: Synthesis. Island Press.",
    "Haines-Young, R., & Potschin, M. B. (2018). CICES V5.1 and Guidance on the Application of the Revised Structure.",
    "IPBES (2019). Global Assessment Report on Biodiversity and Ecosystem Services. IPBES secretariat, Bonn."
  ] },
  { group: "Regulasi dan data resmi Indonesia", items: [
    "UU No. 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup (Pasal 1).",
    "UU No. 26 Tahun 2007 tentang Penataan Ruang (Pasal 1).",
    "UU No. 41 Tahun 2009 tentang Perlindungan Lahan Pertanian Pangan Berkelanjutan.",
    "UU No. 17 Tahun 2019 tentang Sumber Daya Air.",
    "PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup (KLHS; daya dukung–daya tampung).",
    "BPS (2021). Hasil Sensus Penduduk 2020 (sebaran penduduk antarpulau).",
    "Kementerian Pekerjaan Umum (2012). Pernyataan resmi potensi air Pulau Jawa (4,5% potensi nasional; ±1.500 m³/kapita/tahun)."
  ] },
  { group: "Dokumen lembaga internasional", items: [
    "World Bank (2014). World Bank and Kazakhstan Plan Further Improvements in Northern Aral Sea Area (SYNAS-1).",
    "Tarr, D. G., et al. (2004). Did the desire for cotton self-sufficiency lead to the Aral Sea environmental disaster? World Bank Policy Research Working Paper."
  ] }
];
