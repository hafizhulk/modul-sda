/**
 * data-bab4.js — Konten Bab 4: Kapasitas Lingkungan dan Jasa Ekosistem.
 * Setiap halaman bab memuat TEPAT SATU file data.
 */
window.APP_DATA = {};

APP_DATA.OBJECTIVES = [
  "Menjelaskan konsep daya dukung, daya tampung, jasa ekosistem, serta keterkaitannya.",
  "Mengukur kebutuhan–ketersediaan sumber daya, kapasitas asimilasi, dan defisit ekologis.",
  "Memetakan jasa ekosistem beserta penyedia dan penerima manfaatnya.",
  "Menganalisis sinergi, konflik antarfungsi, dan trade-off dalam pembangunan.",
  "Menurunkan implikasi kapasitas lingkungan terhadap intensitas dan pola pemanfaatan ruang."
];

APP_DATA.GLOSSARY = {
  "daya-dukung": {
    term: "Daya dukung lingkungan hidup",
    en: "carrying / supportive capacity",
    def: "Kemampuan lingkungan hidup mendukung perikehidupan manusia, makhluk hidup lain, dan keseimbangan antarkeduanya (UU 32/2009 Psl.1; dipertahankan PP 22/2021)."
  },
  "daya-tampung": {
    term: "Daya tampung lingkungan hidup",
    en: "assimilative capacity",
    def: "Kemampuan lingkungan hidup menyerap zat, energi, dan/atau komponen lain yang masuk ke dalamnya (UU 32/2009 Psl.1; PP 22/2021)."
  },
  "d3tlh": {
    term: "D3TLH",
    en: "environmental carrying capacity (Indonesia)",
    def: "Daya Dukung dan Daya Tampung Lingkungan Hidup — instrumen wajib kepala daerah per PP 22/2021; menjadi syarat penapisan AMDAL/UKL-UPL dan muatan wajib KLHS. Status: belum/sudah/sangat terlampaui."
  },
  "esecc": {
    term: "ESECC",
    en: "Ecosystem-Service-based Ecological Carrying Capacity",
    def: "Pendefinisian ulang daya dukung berbasis jasa ekosistem: populasi dan skala ekonomi yang dapat didukung jasa ekosistem, ditentukan nilai minimum dari daya dukung jasa individual yang relevan."
  },
  "jasa-ekosistem": {
    term: "Jasa ekosistem",
    en: "ecosystem services",
    def: "Manfaat yang diperoleh manusia dari ekosistem. MA (2005) membaginya menjadi jasa pendukung, penyediaan, pengaturan, dan budaya; TEEB/CICES membedakan jasa final dari proses pendukung."
  },
  "cices": {
    term: "CICES",
    en: "Common International Classification of Ecosystem Services",
    def: "Klasifikasi hierarkis jasa final (V5.1) yang menjadi basis pemetaan Eropa (MAES) dan SEEA-EA PBB; memisahkan jasa dari manfaat."
  },
  "teeb": {
    term: "TEEB",
    en: "The Economics of Ecosystems and Biodiversity",
    def: "Inisiatif ekonomi jasa ekosistem (Kumar, 2010) yang menghilangkan kategori jasa pendukung karena dianggap proses penunjang, bukan jasa akhir — berbeda dari MA (2005) dan CICES V5.1."
  },
  "stok-aliran": {
    term: "Potensi–aliran–permintaan",
    en: "potential–flow–demand (Burkhard)",
    def: "Burkhard et al. (2014): potensi (kapasitas menyediakan), aliran (jasa yang benar-benar terpakai), permintaan (kebutuhan masyarakat). Potensi tinggi ≠ manfaat diterima bila jalur terputus."
  },
  "neraca-lahan": {
    term: "Neraca kebutuhan–ketersediaan",
    en: "supply–demand balance",
    def: "Metode Permen LH 17/2009: Status = Ketersediaan − Kebutuhan (penduduk × standar per kapita). Untuk air: debit andalan vs kebutuhan domestik/industri/irigasi."
  },
  "kapasitas-asimilasi": {
    term: "Kapasitas asimilasi",
    en: "assimilative capacity",
    def: "Sisa laju beban pencemar yang dapat diterima badan air tanpa melampaui baku mutu air penerima. Untuk sungai sederhana, DT = Q × (BM − Cs) × Fk; Fk = 86,4 jika Q dalam m³/detik, konsentrasi dalam mg/L, dan DT dalam kg/hari."
  },
  "ambang-batas": {
    term: "Ambang batas ekologis",
    en: "ecological threshold",
    def: "Titik kritis di mana sistem sosial-ekologis menunjukkan respons tak-linier dan sulit balik; kerangka planetary boundaries (Rockström 2009) adalah padanannya pada skala global."
  },
  "jejak-ekologis": {
    term: "Jejak ekologis vs biokapasitas",
    en: "ecological footprint vs biocapacity",
    def: "EF (gha): luas bioproduktif yang dibutuhkan konsumsi + limbah; BC (gha): luas yang tersedia. BC−EF>0 = cadangan; <0 = defisit ekologis (Global Footprint Network)."
  },
  "gha": {
    term: "Hektar global (gha)",
    en: "global hectare",
    def: "Satuan EF/BC yang menyetarakan produktivitas lahan/perairan berbeda melalui faktor ekuivalensi dan faktor hasil spesifik negara."
  },
  "esp-esb": {
    term: "ESP & ESB",
    en: "ecosystem service providers & beneficiaries",
    def: "Penyedia jasa (unit lahan/ekosistem yang menghasilkan) dan penerima manfaat (individu/kelompok yang memperoleh) — sering berbeda lokasi sehingga menimbulkan spatial mismatch."
  },
  "invest": {
    term: "InVEST",
    en: "Integrated Valuation of Ecosystem Services and Trade-offs",
    def: "Perangkat lunak bebas Natural Capital Project; spasial-eksplisit, >20 model darat/air tawar/pesisir; menghasilkan keluaran biofisik dan ekonomi."
  },
  "trade-off": {
    term: "Trade-off & sinergi",
    en: "trade-off & synergy",
    def: "Trade-off: peningkatan satu jasa mengorbankan jasa lain; sinergi: dua jasa bergerak searah. TEEB membedakan trade-off spasial, temporal, antar-penerima, dan antar-jasa."
  },
  "pes": {
    term: "PES / PSA",
    en: "Payment for Environmental Services",
    def: "Pembayaran kepada pemilik lahan yang mempertahankan jasa ekosistem; contoh tertua: PSA Kosta Rika (UU Kehutanan 7575/1996) via FONAFIFO — 4 jasa hutan dikontrakkan dan dibiayai pajak BBM + tarif air."
  },
  "fonafifo": {
    term: "FONAFIFO",
    en: "Fondo Nacional de Financiamiento Forestal",
    def: "Dana kehutanan nasional semi-otonom Kosta Rika di bawah MINAE; mengumpulkan dana (pajak BBM 3,5%, Canon del Agua 25%) dan menyalurkan ke pemilik lahan via kontrak."
  },
  "empat-keran": {
    term: "Empat Keran Nasional (Singapura)",
    en: "Four National Taps",
    def: "Strategi diversifikasi PUB Singapura: air tangkapan lokal, impor Johor, NEWater (daur ulang), dan desalinasi — dikelola dalam satu otoritas air terpadu + ABC Waters biru-hijau."
  },
  "lp2b": {
    term: "LP2B",
    en: "protected sustainable food agriculture land",
    def: "Lahan Pertanian Pangan Berkelanjutan (UU 41/2009) — instrumen menjaga lahan subur dari konversi; keputusan sekali jalan dengan histeresis."
  }
};

APP_DATA.CHAPTERS = [
  { n: 1, title: "Landasan Konseptual SDA dan Lingkungan", href: "bab-1.html" },
  { n: 2, title: "Potensi Lokal dan Sistem Sosial-Ekologis", href: "bab-2.html" },
  { n: 3, title: "Arsitektur Data Spasial dan Nonspasial", href: "bab-3.html" },
  { n: 4, title: "Kapasitas Lingkungan dan Jasa Ekosistem", href: "#top", current: true },
  { n: 5, title: "Perubahan Lahan, Pencemaran, dan Degradasi", href: "bab-5.html" },
  { n: 6, title: "Perubahan Iklim, Risiko Bencana, dan Ketahanan", href: "bab-6.html" },
  { n: 7, title: "Kebijakan, Instrumen, dan Kesenjangan Implementasi", href: "bab-7.html" },
  { n: 8, title: "Penstrukturan Masalah dan Evaluasi Multikriteria", href: "bab-8.html" },
  { n: 9, title: "Skenario, Strategi Terintegrasi, dan Implementasi", href: "bab-9.html" },
  { n: 10, title: "Komunikasi Kebijakan dan Penjaminan Mutu", href: "bab-10.html" }
];

APP_DATA.KEYWORDS = [
  { t: "Daya dukung & daya tampung", to: "#sub-41" },
  { t: "D3TLH (PP 22/2021)", to: "#sub-41" },
  { t: "ESECC & jasa ekosistem", to: "#sub-41" },
  { t: "CICES & SEEA-EA", to: "#sub-41" },
  { t: "Neraca kebutuhan–ketersediaan", to: "#metode" },
  { t: "Kapasitas asimilasi", to: "#sub-42" },
  { t: "Ambang batas & planetary boundaries", to: "#sub-42" },
  { t: "Jejak ekologis vs biokapasitas", to: "#sub-42" },
  { t: "ESP & ESB (penyedia–penerima)", to: "#sub-43" },
  { t: "InVEST & pemetaan aliran", to: "#sub-43" },
  { t: "Trade-off & sinergi", to: "#sub-44" },
  { t: "Intensitas pemanfaatan lahan", to: "#sub-45" },
  { t: "PES / PSA Costa Rica", to: "#studi-kasus" },
  { t: "Empat Keran Singapura", to: "#pembanding" }
];

/* Stepper — Empat keluarga metode pengukuran kapasitas */
APP_DATA.STEPS = [
  {
    icon: "scale",
    title: "1 · Neraca kebutuhan–ketersediaan",
    body: "Status = Ketersediaan − Kebutuhan (penduduk × standar per kapita). Dipedomani Permen LH 17/2009 untuk lahan dan air: debit andalan 80% vs kebutuhan domestik/industri/irigasi. Kelebihan: operasional & dipedomani regulasi. Keterbatasan: standar per kapita asumtif; agregat menutupi heterogenitas lokal.",
    note: "Pertanyaan kunci: apakah pasokan ≥ kebutuhan? Skala cocok: kabupaten/kota, DAS."
  },
  {
    icon: "droplets",
    title: "2 · Kapasitas asimilasi / daya tampung beban",
    body: "Sisa beban yang dapat diterima tanpa melampaui baku mutu air penerima. Rumus sungai sederhana: DT = Q × (BM − Cs) × Fk, dengan Fk = 86,4 untuk hasil kg/hari. Jika Q = 10 m³/detik, BM = 3 mg/L, dan Cs = 1,5 mg/L, maka DT = 1.296 kg/hari.",
    note: "Baku mutu = batas konsentrasi; kapasitas asimilasi = sisa laju beban. Contoh mengasumsikan aliran tunak, pencampuran sempurna, dan tanpa peluruhan atau sumber lain."
  },
  {
    icon: "siren",
    title: "3 · Ambang batas ekologis",
    body: "Perubahan lingkungan tidak selalu bertahap. Masukan fosfor ke danau dapat memicu ledakan alga dan penurunan oksigen. Pantau fosfor, klorofil-a, dan oksigen terlarut; tingkat waspada setempat dapat memicu pengurangan pupuk dan perbaikan sanitasi sebelum fungsi danau memburuk.",
    note: "Tingkat waspada ialah rancangan pengelolaan, bukan kategori baku mutu otomatis. Nilai pemicunya harus ditentukan dari kondisi dan pemantauan danau."
  },
  {
    icon: "footprints",
    title: "4 · Jejak ekologis vs biokapasitas",
    body: "EF vs BC dalam hektar global (gha): EF = luas bioproduktif yang dibutuhkan konsumsi + limbah; BC = luas yang tersedia × faktor ekuivalensi × faktor hasil. BC−EF>0 = cadangan; <0 = defisit (dipenuhi impor, likuidasi aset, atau emisi CO₂).",
    note: "Kelebihan: komunikatif, terstandar internasional. Keterbatasan: sangat sensitif faktor konversi; bukan alat alokasi ruang."
  }
];

APP_DATA.TIMELINE = [];

/* Quiz */
APP_DATA.QUIZ = [
  {
    q: "Menurut PP 22/2021, status D3TLH 'sangat terlampaui' berimplikasi pada…",
    options: [
      "Pembebasan dari kewajiban KLHS.",
      "Kategori AMDAL dan rekomendasi KLHS — wilayah dengan D3TLH sangat terlampaui sepatutnya dibatasi beban barunya.",
      "Otomatis penambahan luas kawasan budidaya.",
      "Penghapusan baku mutu air."
    ],
    answer: 1,
    pembahasan: "Status D3TLH (belum/sudah/sangat terlampaui) dipakai untuk kategori AMDAL dan dasar rekomendasi KLHS — wilayah sangat terlampaui harus dibatasi beban barunya (jalur KLHS→RTRW)."
  },
  {
    q: "Perbedaan CICES dengan MA (2005) dalam tipologi jasa ekosistem adalah…",
    options: [
      "CICES menambah kategori 'jasa pendukung' sebagai jasa tambahan.",
      "CICES tidak lagi memasukkan 'jasa pendukung' sebagai jasa final — diperlakukan sebagai proses pendasaran — dan memisahkan tegas jasa dari manfaat.",
      "CICES hanya untuk jasa budaya.",
      "MA dan CICES identik, hanya beda bahasa."
    ],
    answer: 1,
    pembahasan: "CICES V5.1 memisahkan jasa final dari proses pendukung dan dari manfaat; MA mencakup pendukung sebagai kategori jasa — TEEB telah menghilangkan pendukung karena dianggap proses penunjang."
  },
  {
    q: "Dalam kerangka Burkhard (2014), perbedaan 'aliran' (flow) dengan 'potensi' (potential) adalah…",
    options: [
      "Keduanya sinonim.",
      "Potensi = kapasitas menyediakan; aliran = jasa yang benar-benar terpakai; aliran sering jauh lebih kecil dari potensi karena ketiadaan penerima atau jalur terputus.",
      "Aliran selalu lebih besar dari potensi.",
      "Potensi hanya untuk jasa budaya."
    ],
    answer: 1,
    pembahasan: "Bagstad et al. menegaskan: pemetaan permintaan dan penerima manfaat penting karena aliran aktual sering jauh lebih kecil dari potensi teoretis."
  },
  {
    q: "Evaluasi rigor PSA Kosta Rika menemukan…",
    options: [
      "Peningkatan luas hutan yang sangat besar dan signifikan.",
      "Peningkatan luas hutan yang kecil tetapi signifikan secara statistik — efektivitasnya bergantung pada penargetan lokasi kontrak (additionality).",
      "Tidak ada dampak sama sekali.",
      "Program hanya efektif bila tanpa penargetan lokasi."
    ],
    answer: 1,
    pembahasan: "Sánchez-Azofeifa et al. (2007) dan Bank Dunia: additionality kecil namun signifikan; kontrak di lahan berisiko rendah menghasilkan additionality kecil meski nominal luas besar."
  },
  {
    q: "Temuan Turkelboom et al. (2018) tentang trade-off yang paling relevan bagi perencanaan adalah…",
    options: [
      "Jasa pengaturan paling sering dikorbankan, tetapi jarang menjadi fokus perhatian; sebagian besar dampak dirasakan pengguna tidak berpengaruh — isu keadilan lingkungan.",
      "Trade-off hanya terjadi pada jasa penyediaan.",
      "Sinergi selalu menjamin distribusi manfaat setara.",
      "Intensitas penggunaan tidak memengaruhi magnitudo trade-off."
    ],
    answer: 0,
    pembahasan: "Jasa pengaturan yang paling sering terdampak namun jarang diperhatikan; kelompok tak berpengaruh paling sering menanggung beban — analisis keadilan distributif/prosedural/pengakuan wajib."
  }
];

/* Diskusi */
APP_DATA.DISKUSI = [
  { q: "Jika suatu DAS menunjukkan defisit penyediaan pangan, hasil air, dan sekuestrasi karbon di kawasan perkotaan hilir sementara surplus di hulu (seperti DAS Dongjiang, Tiongkok, pada subbab 4.2.1), bagaimana implikasinya bila neraca kabupaten/kota Anda hanya dilaporkan sebagai angka agregat?", h: "Rujuk Tabel 4.2: neraca agregat menutupi heterogenitas lokal. Diskusikan perlunya neraca sub-wilayah/spasial — tekanan hilir yang besar vs hulu yang kecil." },
  { q: "Skema PES Kosta Rika dinilai 'kecil namun signifikan' additionality-nya. Apakah program tersebut tetap layak disebut berhasil dari sudut legitimasi dan norma sosial, bukan hanya hektar hutan?", h: "Rujuk Legrand et al. (2011): dampak langsung rendah tetapi perbaikan efisiensi besar; nilai program mungkin lebih besar pada legitimasi konservasi dan infrastruktur kelembagaan daripada hektar semata." },
  { q: "Mengapa pemilihan ekivalensi faktor gha yang berbeda dapat mengubah status suatu wilayah dari cadangan menjadi defisit ekologis, dan apa implikasinya bagi penggunaan EF sebagai alat alokasi ruang?", h: "EF sangat sensitif faktor konversi (model/asumsi); gunakan sebagai indikator komunikatif defisit agregat, bukan alat alokasi RTRW — bandingkan dengan neraca kebutuhan–ketersediaan yang lebih operasional." },
  { q: "Dalam kasus Singapura, integrasi satu otoritas (PUB) menyatukan drainase, tangkapan, pengolahan, dan distribusi. Apa hambatan replikasi model ini di wilayah Anda (fragmentasi kewenangan, data, politik anggaran) dan satu instrumen yang layak dipinjam?", h: "Bandingkan fragmentasi DAS lintas kabupaten/kota di Indonesia dengan model closed-loop PUB + ABC Waters; identifikasi hambatan transferabilitas dan satu instrumen adaptif." }
];

/* Latihan */
APP_DATA.LATIHAN = [
  { t: "Hitung neraca sederhana kebutuhan versus ketersediaan satu sumber daya (lahan atau air) di wilayah studi Anda. Ikuti logika Permen LH 17/2009: proyeksikan kebutuhan (penduduk × standar per kapita per fungsi) vs ketersediaan efektif (luas sesuai fisik di luar kawasan lindung, rujuk RTRW + BPS/BIG). Sajikan tabel neraca + status surplus/defisit + catatan asumsi.", tag: "Neraca" },
  { t: "Petakan tiga jasa ekosistem utama di wilayah studi beserta penyedia dan penerima manfaatnya. Gunakan tipologi CICES; bangun matriks tutupan lahan × kapasitas jasa (Burkhard et al. 2014); identifikasi unit penyedia, wilayah penerima, dan arah aliran (Serna-Chavez et al. 2014). Nyatakan apakah penyedia dan penerima dalam satu yurisdiksi.", tag: "Pemetaan" },
  { t: "Analisis satu trade-off pembangunan di wilayah studi: susun matriks skenario/kebijakan × (jasa meningkat / jasa menurun / penerima manfaat / penanggung beban / waktu-ruang). Gunakan tipologi TEEB dan nilai keadilan distributif–prosedural–pengakuan (Turkelboom et al. 2018).", tag: "Trade-off" }
];

/* Pustaka */
APP_DATA.PUSTAKA = [
  { group: "Jurnal peer-reviewed & karya seminal", items: [
    "Bagstad, K.J., et al. (2014). From theoretical to actual ecosystem services. Ecology and Society, 19(2): 64.",
    "Burkhard, B., et al. (2014). Ecosystem service potentials, flows and demands. Landscape Online, 34: 1–32.",
    "Feng, Z., & Li, P. (2018). The genesis and evolution of the concept of carrying capacity. J. Natural Resources, 33(9).",
    "Le, T.A.T., et al. (2023). Trade-offs and synergies in ecosystem services. Front. Sustain. Resource Manag., 2: 1129396.",
    "Murguia, J.M., et al. (2022). Payment for Ecosystem Services in Costa Rica. IDB Working Paper.",
    "Pagiola, S. (2008). Payments for environmental services in Costa Rica. Ecological Economics, 65(4): 712–724.",
    "Rockström, J., et al. (2009). A safe operating space for humanity. Nature, 461: 472–475.",
    "Serna-Chavez, H.M., et al. (2014). A quantitative framework for assessing spatial flows of ecosystem services. Ecological Indicators.",
    "Turkelboom, F., et al. (2018). When we cannot have it all. Ecosystem Services, 29(C): 566–578.",
    "Wackernagel, M., et al. (1999). National natural capital accounting with the ecological footprint concept. Ecological Economics, 29(3).",
    "Wackernagel, M., & Rees, W. (1996). Our Ecological Footprint. New Society Publishers.",
    "Bott, L.M., et al. (2021). Land subsidence in Jakarta and Semarang Bay. Ocean & Coastal Management, 211: 105775.",
    "Chaussard, E., Amelung, F., Abidin, H., & Hong, S.-H. (2013). Sinking cities in Indonesia. Remote Sensing of Environment, 128: 150–161.",
    "Handika, R., Widodo, J., & Pravitasari, A.E. (2024). Combined land subsidence analysis in Jakarta based on PS-InSAR and MICMAC methods. Jurnal Teknologi Lingkungan, 25(1): 137–145.",
    "Irawan, A.M., Marfai, M.A., Nugraheni, I.R., et al. (2021). Comparison between averaged and localised subsidence measurements for coastal floods projection in 2050 Semarang, Indonesia. Urban Climate, 35: 100760.",
    "Liu, D., & Borthwick, A.G.L. (2011). Measurement and assessment of carrying capacity of the environment in Ningbo, China. Journal of Environmental Management, 92(9): 2047–2053.",
    "Schulp, C.J.E., Burkhard, B., Maes, J., Van Vliet, J., & Verburg, P.H. (2014). Uncertainties in ecosystem service maps: A comparison on the European scale. PLOS ONE, 9(10): e109643.",
    "Sánchez-Azofeifa, G.A., et al. (2007). Costa Rica’s payment for environmental services program: Intention, implementation, and impact. Conservation Biology, 21(5): 1165–1173.",
    "Millennium Ecosystem Assessment (2005). Ecosystems and Human Well-being: Synthesis. Island Press.",
    "TEEB (2010). The Economics of Ecosystems and Biodiversity: Ecological and Economic Foundations.",
    "Haines-Young, R., & Potschin, M. (2018). CICES V5.1."
  ] },
  { group: "Regulasi Indonesia", items: [
    "UU No. 32/2009 tentang PPLH (Psl.1 daya dukung & daya tampung).",
    "PP No. 22/2021 tentang Penyelenggaraan PPLH (beserta lampiran muatan KLHS & kriteria kategori AMDAL).",
    "Permen LH No. 17/2009 tentang Pedoman Penentuan Daya Dukung LH dalam Penataan Ruang Wilayah.",
    "Permen LH No. 28/2009 tentang Daya Tampung Beban Pencemaran Air Danau/Waduk.",
    "SK Menteri LH/Kepala BPLH No. 916 Tahun 2025 tentang batas daya dukung–daya tampung LH nasional (Juni 2025; lampiran teknis di JDIH KLH).",
    "UU No. 17/2019 tentang Sumber Daya Air; UU No. 26/2007 tentang Penataan Ruang; PP No. 21/2021."
  ] },
  { group: "Laporan & pembanding", items: [
    "US EPA (2010). NPDES Permit Writers’ Manual, Bab 6: neraca massa pencampuran air penerima (epa.gov/sites/default/files/2015-09/documents/pwm_chapt_06.pdf).",
    "US EPA. Nutrient Indicator Research: indikator dan ambang nutrien danau (epa.gov/water-research/nutrient-indicator-research).",
    "World Bank (2014). Payments for Environmental Services in Costa Rica.",
    "GGBP (2014). Payment for Ecosystem Services in Costa Rica (Case Study).",
    "PUB Singapura — Four National Taps; ABC Waters Programme; Jacobs (2019), International Water Association (NEWater).",
    "Global Footprint Network — dokumentasi EF & biocapacity (footprintnetwork.org)."
  ] }
];
