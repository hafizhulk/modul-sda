/**
 * data-bab5.js — Konten Bab 5: Perubahan Lahan, Pencemaran, dan Degradasi.
 * Setiap halaman bab memuat TEPAT SATU file data.
 */
window.APP_DATA = {};

APP_DATA.OBJECTIVES = [
  "Menganalisis faktor pendorong, pola, dan kecenderungan perubahan penggunaan dan tutupan lahan.",
  "Mengevaluasi konversi lahan, fragmentasi kawasan lindung, dan perubahan fungsi ekologis.",
  "Mendiagnosis pencemaran melalui kerangka sumber–jalur paparan–penerima dampak.",
  "Menilai ketimpangan paparan serta dampak terhadap kesehatan, ekonomi, dan kualitas ruang hidup."
];

APP_DATA.GLOSSARY = {
  "proksimat": {
    term: "Penyebab proksimat",
    en: "proximate causes",
    def: "Aktivitas langsung yang mengubah tutupan vegetasi atau peruntukan — pembukaan kebun, pembalakan, pembangunan infrastruktur dan permukiman (Geist & Lambin, 2002)."
  },
  "pendorong-mendasar": {
    term: "Pendorong mendasar",
    en: "underlying driving forces",
    def: "Kekuatan sosial-ekonomi dan kelembagaan di balik aktivitas langsung — harga komoditas, kebijakan perizinan, pertumbuhan penduduk dan kota, tata kelola lahan."
  },
  "fragmentasi": {
    term: "Fragmentasi habitat",
    en: "habitat fragmentation",
    def: "Pemecahan habitat menjadi patch kecil terisolasi; efek tepi meningkat dan fungsi ekologis menurun progresif, dengan utang kepunahan yang terbayar puluhan tahun kemudian."
  },
  "extinction-debt": {
    term: "Utang kepunahan",
    en: "extinction debt",
    def: "Hilangnya spesies akibat fragmentasi baru termanifestasi penuh setelah bertahun-tahun — evaluasi RTRW perlu horizon waktu panjang."
  },
  "edge-effect": {
    term: "Efek tepi",
    en: "edge effect",
    def: "Degradasi ekologis di tepian fragmen (±70% hutan tersisa berada dalam 1 km dari tepi); fragmen kecil dan terisolasi paling terdampak."
  },
  "lahan-kritis": {
    term: "Lahan kritis",
    en: "critical land",
    def: "Lahan yang kekritisannya dinilai dari tutupan lahan, erosi potensial, dan kemiringan lereng (tidak kritis – sangat kritis); angka nasional 24 juta ha masih perlu verifikasi lintas-dokumen."
  },
  "spr": {
    term: "Kerangka sumber–jalur–penerima",
    en: "source–pathway–receptor (SPR)",
    def: "SPR membagi kasus pencemaran menjadi sumber (pelepasan), jalur (media pengangkut yang mengalami pengenceran atau transformasi), dan penerima (manusia, ekosistem, atau aset). Tanpa hubungan yang terbukti antarketiga unsur tersebut, peristiwa pencemaran belum dapat dikelola secara tepat."
  },
  "jalur-paparan": {
    term: "Jalur paparan",
    en: "pathway / transport pathway",
    def: "Medium dan proses transport — arus sungai, dispersi atmosfer, infiltrasi air tanah, rantai makanan dan bioakumulasi pada sedimen/ikan."
  },
  "baku-mutu": {
    term: "Baku mutu",
    en: "environmental quality standard",
    def: "Ambang normatif PP 22/2021: baku mutu air kelas I–IV, air limbah, udara ambien (PM2.5 55 µg/m³ 24-jam, 15 µg/m³ tahunan; PM10, SO2, NO2, CO, O3, Pb) dan emisi."
  },
  "indeks-pencemar": {
    term: "Indeks Pencemar",
    en: "Pollution Index",
    def: "Kepmen LH 115/2003: memenuhi baku mutu (0–1), cemar ringan (>1–5), sedang (>5–10), berat (>10); menjadi komponen IKA dalam IKLH (Permen LHK 27/2021)."
  },
  "d3tlh": {
    term: "D3TLH",
    en: "environmental carrying capacity (Indonesia)",
    def: "Daya Dukung dan Daya Tampung Lingkungan Hidup — tiga tingkat (tidak terlampaui / sedang / sangat tinggi) yang menentukan kelanjutan rencana usaha/kegiatan di AMDAL/UKL-UPL (PP 22/2021)."
  },
  "ketimpangan-paparan": {
    term: "Ketimpangan paparan",
    en: "exposure inequality",
    def: "Pembagian risiko pencemaran yang timpang: kelompok sosioekonomi rendah, minoritas etnis, dan anak-anak menanggung paparan dan beban penyakit lebih besar (OECD; WHO 25% beban penyakit global dari faktor lingkungan)."
  },
  "keadilan-lingkungan": {
    term: "Keadilan lingkungan",
    en: "environmental justice",
    def: "Tiga dimensi — distributif (pembagian beban), prosedural (partisipasi), rekognisi (pengakuan kelompok rentan) (Schlosberg 2007; Walker 2012)."
  },
  "citarum": {
    term: "DAS Citarum & Citarum Harum",
    en: "Citarum River Basin",
    def: "DAS prioritas nasional (3 waduk beruntun Saguling–Cirata–Jatiluhur). Perpres 15/2018 membentuk Tim/Satgas di bawah Menko Kemaritiman dan Gubernur Jabar, dengan program Citarum Harum."
  },
  "murray-darling": {
    term: "Murray–Darling Basin",
    en: "Murray–Darling Basin (Australia)",
    def: "DAS >1 juta km² (14% Australia); Water Act 2007 + Basin Plan 2012 + SDL 10.873 GL/tahun + Water Resource Plans; MDBA + Basin Officials Committee; A$13+ miliar pemulihan."
  },
  "kotak-deforestasi": {
    term: "Kotak 5.1 — Dua angka deforestasi",
    en: "two deforestation numbers",
    def: "KLHK (netto/bruto; Landsat 30 m; definisi hutan administratif Indonesia) vs GFW (tree cover / hutan primer; definisi internasional). Perbedaan bukan 'salah', melainkan metadata berbeda — triangulasi (Bab 3)."
  }
};

APP_DATA.CHAPTERS = [
  { n: 1, title: "Landasan Konseptual SDA dan Lingkungan", href: "bab-1.html" },
  { n: 2, title: "Potensi Lokal dan Sistem Sosial-Ekologis", href: "bab-2.html" },
  { n: 3, title: "Arsitektur Data Spasial dan Nonspasial", href: "bab-3.html" },
  { n: 4, title: "Kapasitas Lingkungan dan Jasa Ekosistem", href: "bab-4.html" },
  { n: 5, title: "Perubahan Lahan, Pencemaran, dan Degradasi", href: "#top", current: true },
  { n: 6, title: "Perubahan Iklim, Risiko Bencana, dan Ketahanan", href: "bab-6.html" },
  { n: 7, title: "Kebijakan, Instrumen, dan Kesenjangan Implementasi", href: "bab-7.html" },
  { n: 8, title: "Penstrukturan Masalah dan Evaluasi Multikriteria", href: "bab-8.html" },
  { n: 9, title: "Skenario, Strategi Terintegrasi, dan Implementasi", href: "bab-9.html" },
  { n: 10, title: "Komunikasi Kebijakan dan Penjaminan Mutu", href: "bab-10.html" }
];

APP_DATA.KEYWORDS = [
  { t: "Penyebab proksimat vs pendorong mendasar", to: "#sub-51" },
  { t: "Fragmentasi & efek tepi", to: "#sub-52" },
  { t: "Utang kepunahan", to: "#sub-52" },
  { t: "Lahan kritis", to: "#sub-52" },
  { t: "SPR — sumber–jalur–penerima", to: "#spr" },
  { t: "Jalur paparan (air, udara, rantai pangan)", to: "#spr" },
  { t: "Baku mutu PP 22/2021", to: "#sub-54" },
  { t: "Indeks Pencemar (Kepmen 115/2003)", to: "#sub-54" },
  { t: "D3TLH & status mutu", to: "#sub-54" },
  { t: "Ketimpangan paparan", to: "#sub-55" },
  { t: "Keadilan lingkungan (3 dimensi)", to: "#sub-55" },
  { t: "DAS Citarum & Perpres 15/2018", to: "#studi-kasus" },
  { t: "Murray–Darling: SDL & MDBA", to: "#pembanding" },
  { t: "Kotak 5.1 — dua angka deforestasi", to: "#sub-51" }
];

/* Stepper — Tiga mata rantai SPR */
APP_DATA.STEPS = [
  {
    icon: "factory",
    title: "1 · Sumber",
    body: "Kegiatan, lokasi, dan karakteristik emisi/beban — diklasifikasikan sebagai sumber titik (pipa buangan pabrik) vs sumber area/non-titik (limpasan pertanian, emisi gabungan kendaraan, buangan domestik).",
    note: "Citarum: limbah industri tekstil Dayeuhkolot–Majalaya; domestik permukiman padat; pertanian; sedimentasi deforestasi hulu."
  },
  {
    icon: "route",
    title: "2 · Jalur paparan",
    body: "Medium dan proses transport — arus sungai, dispersi atmosfer, infiltrasi air tanah, rantai makanan dan bioakumulasi pada sedimen/ikan. Jalur mengalami dilusi dan transformasi.",
    note: "Bantar Panjang (Citarum): Hg dari air → sedimen → organisme; Roosmini dkk.: logam berat air–sedimen–ikan → paparan via konsumsi ikan."
  },
  {
    icon: "heart-pulse",
    title: "3 · Penerima dampak",
    body: "Manusia (dengan kerentanan berbeda), ekosistem, dan aset binaan. Tanpa linkage yang terbukti menghubungkan sumber ke penerima, belum terjadi peristiwa pencemaran yang dapat dikelola.",
    note: "Intervensi RTRW: pada sumber (zona & izin), pada jalur (RTH, sempadan, buffer), pada reseptor (relokasi, standar permukiman)."
  }
];

APP_DATA.TIMELINE = [];

/* Quiz — 5 soal pilihan ganda */
APP_DATA.QUIZ = [
  {
    q: "Pembedaan penyebab proksimat dan pendorong mendasar (Geist & Lambin 2002) menegaskan bahwa…",
    options: [
      "Pendorong mendasar langsung mengubah tutupan vegetasi di lapangan.",
      "Penyebab proksimat adalah aktivitas langsung yang mengubah tutupan/peruntukan, sedangkan pendorong mendasar (harga komoditas, kebijakan, urbanisasi) beroperasi di baliknya dan saling berinteraksi non-linier.",
      "Keduanya sinonim dan dapat dipertukarkan dalam KLHS.",
      "Pendorong mendasar hanya berupa faktor biofisik."
    ],
    answer: 1,
    pembahasan: "Penyebab langsung = aktivitas spesifik di lapangan; pendorong tak langsung = kekuatan sosial-ekonomi/kelembagaan di baliknya. Intervensi tunggal pada satu jalur kausal jarang efektif."
  },
  {
    q: "Konsekuensi fragmentasi yang paling relevan bagi evaluasi RTRW/RDTR menurut Haddad et al. (2015) adalah…",
    options: [
      "Dampak hanya proporsional dengan luas yang hilang.",
      "Hilangnya keanekaragaman 13–75% dan fungsi ekosistem memburuk progresif — >50% setelah 10 tahun pada fragmen kecil/terisolasi; pulau kecil terfragmentasi pada peta tidak otomatis menyelamatkan fungsi ekologis (extinction debt).",
      "Fragmentasi tidak memengaruhi keanekaragaman hayati kawasan lindung.",
      "Efek fragmentasi hanya relevan untuk hutan tropis, bukan kawasan perkotaan."
    ],
    answer: 1,
    pembahasan: "Eksperimen lintas bioma 35 tahun: kehilangan spesies melampaui 20% setelah 1 tahun, >50% setelah 10 tahun, ±70% hutan tersisa dalam 1 km dari tepi. Perlu horizon evaluasi panjang."
  },
  {
    q: "Prinsip kunci kerangka SPR adalah…",
    options: [
      "Cukup mengidentifikasi sumber pencemaran untuk menyatakan telah terjadi pencemaran yang dapat dikelola.",
      "Dampak nyata hanya terjadi bila linkage sumber→jalur→penerima terbukti kausal; bila satu mata rantai tidak terbukti, kontaminasi pada sumber tetap ada tetapi peristiwa pencemaran belum dapat dikelola.",
      "Jalur paparan hanya melalui air permukaan.",
      "Penerima dampak hanya manusia."
    ],
    answer: 1,
    pembahasan: "SPR mensyaratkan linkage kausal ketiga komponen; manajemen dapat diarahkan pada sumber, jalur, atau reseptor."
  },
  {
    q: "Menurut PP 22/2021 jo. Kepmen LH 115/2003, status cemar berat didefinisikan sebagai…",
    options: [
      "Skor Indeks Pencemar 0–1.",
      "Skor Indeks Pencemar >10 — dengan cemar ringan >1–5, sedang >5–10; memenuhi baku mutu 0–1.",
      "Konsentrasi PM2,5 >55 µg/m³ semata.",
      "Hanya berlaku untuk pencemaran udara."
    ],
    answer: 1,
    pembahasan: "Indeks Pencemar: 0–1 memenuhi baku mutu; >1–5 ringan; >5–10 sedang; >10 berat. Baku mutu udara PM2,5 55 µg/m³ (24-jam) dan 15 µg/m³ (tahunan) merupakan ketentuan terpisah dalam PP 22/2021."
  },
  {
    q: "Bukti ketimpangan paparan di Jakarta yang mengaitkan pencemaran udara dengan keadilan lingkungan menunjukkan…",
    options: [
      "Semua kelompok terpapar beban yang sama tanpa perbedaan dampak.",
      "Kelompok sosioekonomi rendah menanggung paparan lebih besar dengan kerentanan kesehatan lebih tinggi; Syuhada et al. (2023) mengatribusikan >10.000 kematian dini/tahun di Jakarta kepada PM2,5 & ozon dengan biaya ±US$2,94 miliar (≈2,2% PDRB Jakarta).",
      "Pencemaran udara tidak berdampak pada biaya kesehatan.",
      "Ketimpangan hanya bersifat distributif, tanpa dimensi prosedural/rekognisi."
    ],
    answer: 1,
    pembahasan: "OECD & ARPH: ketimpangan memperburuk dampak; di Jakarta morbiditas/mortalitas atribusi PM2,5 & ozon terukur signifikan — beban terbesar pada permukiman padat berpenghasilan rendah dekat sumber pencemar."
  }
];

/* Diskusi */
APP_DATA.DISKUSI = [
  { q: "Dengan data BIG/KLHK untuk dua tahun berbeda, susun matriks transisi perubahan tutupan lahan wilayah studi Anda dan identifikasi hot spot alih fungsi. Driver proksimat dan pendorong mendasar apa yang menjelaskan hotspot tersebut?", h: "Gunakan analisis tetangga terdekat untuk pola, bandingkan dengan Austin et al. (2019) (sawit 23% nasional) dan studi peri-urban Yogyakarta/Makassar. Nyatakan metadata: resolusi, klasifikasi, periode — jangan dipaksakan menjadi satu angka." },
  { q: "Untuk satu isu pencemaran di wilayah studi Anda, susun diagram SPR dengan minimal dua jalur paparan berbeda dan bedakan kerentanan kelompok penerima. Pada sisi rantai mana intervensi RTRW paling efektif?", h: "Contoh: sumber industri tekstil → jalur (i) air permukaan dan (ii) sedimen–ikan–konsumsi; reseptor dengan kerentanan berbeda. Tempatkan instrumen: zona/izin pada sumber, sempadan/buffer pada jalur, relokasi/standar pada reseptor." },
  { q: "Ketimpangan paparan pencemaran di wilayah studi Anda: petakan tumpang-tindih sebaran sumber pencemar (industri, TPA, lalu lintas padat) dengan permukiman berpendapatan rendah. Bagaimana muatan keadilan lingkungan (distributif, prosedural, rekognisi) diintegrasikan ke KLHS RTRW?", h: "Rujuk Schlosberg (2007) & Walker (2012); gunakan peta zonasi sumber vs permukiman. Diskusikan data gap BPS SLHI sosioekonomi sebagai keterbatasan." },
  { q: "Evaluasi status mutu sungai di wilayah studi Anda dengan Indeks Pencemar (Kepmen LH 115/2003) versus IKA/IKLH (Permen LHK 27/2021): kapan suatu segmen 'cemar ringan' menurut satu indeks tetapi memiliki implikasi perencanaan yang berbeda menurut indeks lain?", h: "Bandingkan skor IP 0–1/1–5/5–10/>10 dengan komponen IKA; diskusikan mengapa D3TLH tiga tingkat PP 22/2021 (tidak/sedang/sangat tinggi) menjadi jembatan ke AMDAL/UKL-UPL." }
];

/* Latihan — sesuai bab: 3 latihan + catatan */
APP_DATA.LATIHAN = [
  { t: "Analisis perubahan tutupan lahan wilayah studi Anda (BIG atau KLHK, dua tahun berbeda). Hitung matriks transisi dan laju tahunan r = (A1−A2)/(t2−t1) serta v = r/A1×100%. Identifikasi penyebab langsung dan tiga pendorong tak langsung, bandingkan dengan temuan Austin et al. (2019). Sajikan peta + tabel + narasi trade-off PDRB jangka pendek vs beban banjir/jasa ekosistem.", tag: "Analisis" },
  { t: "Susun diagram sumber–jalur–reseptor untuk satu isu pencemaran wilayah studi (minimal dua jalur berbeda) serta perbedaan kerentanan penerima. Tambahkan satu masukan kebijakan pada tiap sisi rantai (kendalikan sumber, putus jalur, lindungi reseptor) dan kaitkan dengan AMDAL/UKL-UPL.", tag: "Diagnosis" },
  { t: "Bandingkan tata kelola DAS Citarum (Perpres 15/2018: Tim/Satgas/Komando Sektor) dengan Murray–Darling (Water Act 2007–Basin Plan 2012–SDL 10.873 GL/tahun–MDBA). Buat tabel isu→pendekatan Citarum→pendekatan Murray–Darling→catatan transferibilitas dalam konteks otonomi daerah Indonesia.", tag: "Pembanding" }
];

/* Pustaka */
APP_DATA.PUSTAKA = [
  { group: "Jurnal peer-reviewed", items: [
    "Austin, K.G., et al. (2019). What causes deforestation in Indonesia? Environ. Res. Lett., 14(2). DOI: 10.1088/1748-9326/aaf6db.",
    "Geist, H.J., & Lambin, E.F. (2002). Proximate causes and underlying driving forces of tropical deforestation. BioScience, 52(2), 143–150.",
    "Haddad, N.M., et al. (2015). Habitat fragmentation and its lasting impact on Earth's ecosystems. Science Advances, 1(2), e1500052. DOI: 10.1126/sciadv.1500052.",
    "Schlosberg, D. (2007). Defining Environmental Justice. Oxford UP.",
    "Walker, G. (2012). Environmental Justice. Routledge.",
    "Syuhada, G., et al. (2023). Impacts of air pollution on health and cost of illness in Jakarta, Indonesia. Int. J. Environ. Res. Public Health, 20(4), 2916. DOI: 10.3390/ijerph20042916.",
    "Tjokronegoro, M.H., & Roosmini, D. (2010). Study of mercury pollution at Bantarpanjang (Citarum River) using biomarker. Springer.",
    "Jurnal Teknologi Lingkungan, BRIN — kajian status Ciliwung dan sedimen Citarum (Hg: cemar sedang; HPI >100).",
    "Kajian Indeks Kualitas Air Citarum (NSF-WQI, CCME-WQI, OWQI) — Heliyon, 2022.",
    "Polish Journal of Environmental Studies, 33(4), 2024 — logam Zn/Cd/Cr DAS Citarum dari tekstil.",
    "Murray–Darling: MDBA — Water Act 2007; Basin Plan 2012; SDL 10.873 GL/tahun; Annual statement of assurance; A$13+ miliar pemulihan (2.107,4 GL hingga 30 Sep 2023)."
  ] },
  { group: "Laporan & sumber resmi", items: [
    "Kementerian LHK (2023–2024). SLHI: netto 104,0 ribu ha (2021–2022), bruto 119,4 ribu ha; seri historis 3,5 juta ha/thn (1996–2000), ±0,75 juta ha/thn (2002–2014).",
    "Kementerian LH (2025). Hasil Pemantauan Mutu Air Semester I 2025: 70,7% dari 4.482 lokasi pada 1.482 sungai tercemar.",
    "World Bank (2016; 2022). The Cost of Air Pollution; Global Health Cost PM2.5 — 4,1–6,4 juta kematian dini; US$5,7–8,1 triliun.",
    "Dinas LH DKI Jakarta (2022). IKLH DKI Jakarta.",
    "Citarum Harum (Pemprov Jabar, 2022) — status cemar ringan (klaim administratif, perlu verifikasi independen)."
  ] },
  { group: "Regulasi", items: [
    "Perpres No. 15/2018 tentang Percepatan Pengendalian Pencemaran dan Kerusakan DAS Citarum (14 Mar 2018; tim di bawah Menko Kemaritiman, Satgas di bawah Gubernur Jabar).",
    "PP No. 22/2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup (Klas I–IV Lampiran VI; baku mutu air limbah/udara ambien; D3TLH tiga tingkat).",
    "Kepmen LH No. 115/2003 tentang Pedoman Penentuan Status Mutu Air (Indeks Pencemar); Permen LHK No. 27/2021 tentang IKLH.",
    "UU No. 41/2009 tentang LP2B/KP2B; UU No. 17/2019 tentang Sumber Daya Air (TKPSDA)."
  ] }
];
