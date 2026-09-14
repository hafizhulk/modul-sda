/**
 * data-bab6.js — Konten Bab 6: Perubahan Iklim, Risiko Bencana, dan Ketahanan.
 * Setiap halaman bab memuat TEPAT SATU file data. Tugas 1 (sintesis Bab 3–6) diskip sesuai keputusan.
 */
window.APP_DATA = {};

APP_DATA.OBJECTIVES = [
  "Menganalisis risiko berdasarkan bahaya (hazard), paparan (exposure), kerentanan (vulnerability), dan kapasitas (capacity).",
  "Mengevaluasi ketidakpastian iklim serta risiko majemuk (compound risk) dan risiko berantai (cascading risk).",
  "Merumuskan implikasi risiko terhadap pola ruang, infrastruktur, permukiman, pelayanan dasar, dan ekonomi wilayah.",
  "Menyusun diagnosis lingkungan terintegrasi — pengantar sintesis Bab 3–6 tanpa pengumpulan Tugas 1 pada bab ini."
];

APP_DATA.GLOSSARY = {
  "risiko-ipcc": {
    term: "Risiko (IPCC AR6)",
    en: "risk",
    def: "Potensi konsekuensi merugikan bagi sistem manusia atau ekologis yang muncul dari interaksi dinamis antara bahaya terkait iklim, paparan, dan kerentanan sistem terdampak (IPCC AR6)."
  },
  "bahaya": {
    term: "Bahaya (hazard)",
    en: "hazard",
    def: "Potensi peristiwa fisik alami/antropogenik yang merugikan — banjir, rob, kekeringan, gelombang panas, subsiden; diukur melalui frekuensi, magnitudo, peta zona bahaya inaRISK/BNPB dan tren muka laut."
  },
  "paparan": {
    term: "Paparan (exposure)",
    en: "exposure",
    def: "Keberadaan orang, penghidupan, aset, infrastruktur, dan fungsi ekosistem di lokasi berisiko — populasi, kepadatan, nilai aset, luas infrastruktur kritis dalam zona rendaman."
  },
  "kerentanan": {
    term: "Kerentanan (vulnerability)",
    en: "vulnerability",
    def: "Kecenderungan terdampak merugikan: sensitivitas + kurangnya kapasitas adaptif. Indikator: kemiskinan, kualitas hunian, ketergantungan mata pencaharian, drainase, kelembagaan."
  },
  "kapasitas": {
    term: "Kapasitas adaptif",
    en: "adaptive / coping capacity",
    def: "Kekuatan, sumber daya, kelembagaan untuk mengantisipasi, menanggulangi, dan beradaptasi — BPBD, rencana kontingensi, sistem peringatan dini, IKD BNPB."
  },
  "irbi": {
    term: "IRBI / inaRISK",
    en: "Indeks Risiko Bencana Indonesia",
    def: "Indeks komposit BNPB: bahaya 40%, kerentanan 30%, kapasitas 30% pada skala 1:250.000 (ditingkatkan ke 1:50.000/1:25.000 untuk 156 kab/kota); Perka BNPB 2/2012."
  },
  "deep-uncertainty": {
    term: "Deep uncertainty",
    en: "deep uncertainty",
    def: "Probabilitas hasil tidak dapat dinyatakan pasti — variasi skenario emisi SSP/RCP, sensitivitas model iklim, variabilitas ENSO/IOD, dan respons sosial-ekonomi."
  },
  "adaptation-pathways": {
    term: "Adaptation pathways (DAPP)",
    en: "Dynamic Adaptive Policy Pathways",
    def: "Memetakan rangkaian keputusan beserta titik kritis (tipping points/trigger) teramati yang menandai aktivasi opsi berikutnya — menjaga opsi panjang tetap terbuka (Haasnoot et al.; Werners et al. 2024)."
  },
  "compound-risk": {
    term: "Risiko majemuk",
    en: "compound risk",
    def: "Beberapa bahaya/pendorong berinteraksi (Zscheischler et al. 2020): preconditioned, multivariat, temporal, spasial — contoh: tanah jenuh + hujan ekstrem → banjir bandang."
  },
  "cascading-risk": {
    term: "Risiko berantai",
    en: "cascading risk",
    def: "Rangkaian dampak lintas sistem: bahaya fisik → kegagalan infrastruktur → gangguan layanan → dampak ekonomi-sosial turunan; berlawanan dengan compound yang berfokus pada bahaya simultan."
  },
  "levee-effect": {
    term: "Levee effect",
    en: "levee effect",
    def: "Rasa aman palsu di balik tanggul menarik investasi padat; keruntuhan kemudian merugikan lebih besar — maladaptasi umpan balik."
  },
  "room-for-the-river": {
    term: "Room for the River",
    en: "Room for the River (NL)",
    def: "Ruimte voor de Rivier 2007–2015 (tutup 2019): 34 lokasi, €2,3 miliar, Rhein 15.000→16.000 m³/s; mandat ganda keselamatan banjir + kualitas spasial; relokasi tanggul, bypass, floodplain lowering."
  }
};

APP_DATA.CHAPTERS = [
  { n: 1, title: "Landasan Konseptual SDA dan Lingkungan", href: "bab-1.html" },
  { n: 2, title: "Potensi Lokal dan Sistem Sosial-Ekologis", href: "bab-2.html" },
  { n: 3, title: "Arsitektur Data Spasial dan Nonspasial", href: "bab-3.html" },
  { n: 4, title: "Kapasitas Lingkungan dan Jasa Ekosistem", href: "bab-4.html" },
  { n: 5, title: "Perubahan Lahan, Pencemaran, dan Degradasi", href: "bab-5.html" },
  { n: 6, title: "Perubahan Iklim, Risiko Bencana, dan Ketahanan", href: "#top", current: true },
  { n: 7, title: "Kebijakan, Instrumen, dan Kesenjangan Implementasi", href: "bab-7.html" },
  { n: 8, title: "Penstrukturan Masalah dan Evaluasi Multikriteria", href: "bab-8.html" },
  { n: 9, title: "Skenario, Strategi Terintegrasi, dan Implementasi", href: "bab-9.html" },
  { n: 10, title: "Komunikasi Kebijakan dan Penjaminan Mutu", href: "bab-10.html" }
];

APP_DATA.KEYWORDS = [
  { t: "Risiko IPCC AR6 (H-P-K-K)", to: "#sub-61" },
  { t: "IRBI / inaRISK (BNPB)", to: "#sub-61" },
  { t: "Deep uncertainty (SSP/RCP)", to: "#sub-62" },
  { t: "Adaptation pathways & trigger", to: "#sub-62" },
  { t: "Compound risk (4 tipe)", to: "#risiko-majemuk" },
  { t: "Cascading risk & rantai dampak", to: "#sub-63" },
  { t: "Levee effect & maladaptasi", to: "#sub-63" },
  { t: "Pola ruang & zonasi risiko", to: "#sub-64" },
  { t: "Infrastruktur & interdependensi", to: "#sub-64" },
  { t: "Subsiden Jakarta–Semarang", to: "#studi-kasus" },
  { t: "NCICD / Giant Sea Wall", to: "#studi-kasus" },
  { t: "Room for the River (Belanda)", to: "#pembanding" }
];

/* Stepper — Empat tipe risiko majemuk (Zscheischler) + cascading */
APP_DATA.STEPS = [
  {
    icon: "layers",
    title: "1 · Preconditioned",
    body: "Kondisi awal memperbesar dampak bahaya berikutnya — tanah jenuh air + hujan ekstrem → banjir bandang; drainase buruk + pasang → rob meluas.",
    note: "Contoh Jakarta–Semarang: subsiden kumulatif >4 m sejak 1970-an sebagai precondition yang memperparah rob (Abidin et al. 2015)."
  },
  {
    icon: "zap",
    title: "2 · Multivariat",
    body: "Beberapa pendorong ekstrem bersamaan di satu lokasi — panas + kering → kebakaran; pasang tinggi + gelombang + subsiden → rob parah. Masing-masing mungkin moderat, kombinasinya ekstrem.",
    note: "AR6: perubahan iklim sebagai pengganda ancaman yang mempertemukan bahaya yang sebelumnya terpisah."
  },
  {
    icon: "clock-3",
    title: "3 · Temporal",
    body: "Bahaya berurutan di lokasi sama sebelum pemulihan tuntas — gelombang panas beruntun; banjir berulang yang mengikis kapasitas coping rumah tangga pesisir.",
    note: "Zscheischler et al. 2025: kekeringan-panas majemuk makin mungkin pada iklim menghangat."
  },
  {
    icon: "globe-2",
    title: "4 · Spasial + Cascading",
    body: "Bahaya serempak di banyak lokasi terhubung (gagal panen serentak di beberapa lumbung) DAN rantai berantai lintas sistem: bahaya fisik → infrastruktur → layanan → ekonomi-sosial → umpan balik maladaptif.",
    note: "Kegagalan satu infrastruktur (energi/air/transport/telekom) memicu kegagalan berjenjang — perlu identifikasi interdependensi, simulasi kegagalan, strategi pemulihan."
  }
];

APP_DATA.TIMELINE = [];

/* Quiz */
APP_DATA.QUIZ = [
  {
    q: "Kesalahan tipikal perencanaan yang menyamakan peta bahaya dengan peta risiko adalah…",
    options: [
      "Keduanya identik dan dapat dipertukarkan.",
      "Peta bahaya menjawab 'di mana kejadian berpotensi terjadi'; peta risiko menjawab 'siapa dan apa yang rugi, seberapa besar, dan mengapa' — dengan memasukkan paparan, kerentanan, dan kapasitas.",
      "Peta risiko hanya untuk bencana geologi.",
      "Peta bahaya lebih penting sehingga peta risiko tidak diperlukan."
    ],
    answer: 1,
    pembahasan: "Risiko = interaksi bahaya × paparan × kerentanan; peta bahaya tanpa paparan/kerentanan tidak menjelaskan kerugian dan dapat salah menetapkan zona larangan."
  },
  {
    q: "Kondisi deep uncertainty dalam adaptasi iklim ditangani paling tepat dengan…",
    options: [
      "Menunda keputusan hingga probabilitas pasti diketahui.",
      "Dynamic Adaptive Policy Pathways: peta rangkaian keputusan beserta trigger teramati, menjaga opsi jangka panjang tetap terbuka dan menghindari lock-in.",
      "Memilih satu strategi optimal untuk satu skenario.",
      "Mengabaikan ketidakpastian dan memakai tren historis sebagai baseline stasioner."
    ],
    answer: 1,
    pembahasan: "Marchau et al. (2019): DAPP memakai titik kritis teramati (bukan jadwal waktu) untuk aktivasi opsi berikutnya; low-regret jangka dekat + fleksibilitas jangka panjang."
  },
  {
    q: "Contoh risiko berantai (cascading) pada rob Semarang yang benar adalah…",
    options: [
      "Pasang tinggi saja tanpa dampak turunan.",
      "Pasang + subsiden → genangan → kerusakan jalan/drainase → gangguan logistik pelabuhan → penurunan pendapatan → kerentanan makin tinggi pada kejadian berikutnya (ditambah intrusi air laut ke sumur).",
      "Hujan ekstrem tunggal tanpa interaksi sistem lain.",
      "Kenaikan muka laut global saja tanpa faktor lokal."
    ],
    answer: 1,
    pembahasan: "Rantai berantai berpindah lintas sistem fisik–infrastruktur–layanan–ekonomi-sosial, dengan umpan balik levee effect."
  },
  {
    q: "Perbedaan IRBI (BNPB) dengan kerangka risiko IPCC AR6 adalah…",
    options: [
      "Keduanya identik sepenuhnya.",
      "IRBI adalah indeks komposit administratif (bahaya 40%, kerentanan 30%, kapasitas 30%, 1:250.000) untuk operasional kabupaten/kota; AR6 adalah kerangka konseptual global (hazard–exposure–vulnerability–capacity) yang perlu penyesuaian data lokal — saling melengkapi, bukan substitut.",
      "IRBI hanya untuk gempa bumi.",
      "AR6 tidak mengenal kapasitas."
    ],
    answer: 1,
    pembahasan: "IRBI operasional untuk pemetaan tahunan; AR6 konseptual untuk diagnosis. Keduanya perlu dibedakan secara eksplisit pada analisis magister."
  },
  {
    q: "Perbandingan Room for the River (Belanda) dengan NCICD Jakarta menunjukkan…",
    options: [
      "Keduanya identik: sama-sama menaikkan tanggul semata.",
      "Room for the River memberi ruang pada air (relokasi tanggul, bypass, polder, floodplain lowering) dengan mandat ganda keselamatan + kualitas spasial (34 lokasi, Rhein 16.000 m³/s, €2,3 miliar) — NCICD bertumpu pada tanggul/dinding laut dan pompa; tanpa pengendalian ekstraksi air tanah, tanggul menyimpan risiko levee effect.",
      "Room for the River hanya untuk sungai, tidak relevan untuk rob pesisir.",
      "NCICD tidak memerlukan pengendalian air tanah."
    ],
    answer: 1,
    pembahasan: "Belanda 2007–2015 berhasil di bawah anggaran dan lebih cepat; pelajaran untuk Jakarta–Semarang: ruang retensi + kualitas ruang + manajemen multi-level, dikombinasikan dengan kontrol air tanah."
  }
];

/* Diskusi */
APP_DATA.DISKUSI = [
  { q: "Susun matriks bahaya–paparan–kerentanan–kapasitas untuk satu risiko utama di wilayah studi Anda. Tiap sel harus memuat indikator terukur beserta sumbernya (tahun, cakupan, metode). Jika data tidak tersedia, tuliskan data gap.", h: "Ikuti Tabel komponen IPCC AR6 (6.1) dan manfaatkan IRBI/inaRISK sebagai basemap kabupaten/kota. Bedakan fakta empiris (mis. laju subsiden InSAR) dari ketentuan regulasi (PP 22/2021) dan asumsi model (RCP/SSP)." },
  { q: "Identifikasi satu potensi cascading risk di wilayah studi Anda dan gambarkan rantai dampak minimal tiga orde plus satu umpan balik. Di mana levee effect mungkin muncul?", h: "Gunakan rantai rob Semarang sebagai templat: bahaya → dampak langsung → orde-1 (infrastruktur) → orde-2 (ekonomi/sosial) → umpan balik. Tunjukkan di mana adaptasi jangka pendek dapat meningkatkan kerentanan jangka panjang." },
  { q: "Untuk risiko yang sama, sebutkan dua sumber ketidakpastian utama dan rancang satu trigger pemantauan yang layak menjadi pemicu opsi adaptasi berikutnya.", h: "Pisahkan ketidakpastian skenario emisi, model iklim, variabilitas ENSO/IOD, dan respons sosial. Trigger harus teramati (mis. laju subsiden >X cm/thn, ambang pasang Y cm) bukan jadwal waktu." },
  { q: "Bandingkan respons Jakarta (NCICD/Giant Sea Wall) dan Belanda (Room for the River): instrumen mana yang dapat dipinjam untuk kota pesisir Anda yang mengalami subsiden, dan apa syarat kelembagaannya?", h: "Pertimbangkan mandat ganda, multi-level governance, dan kebutuhan mengendalikan ekstraksi air tanah sebagai prasyarat — tanpa itu, ruang yang diberi akan terus menyusut." }
];

/* Latihan */
APP_DATA.LATIHAN = [
  { t: "Susun matriks bahaya–paparan–kerentanan–kapasitas untuk satu risiko utama di wilayah studi Anda (mengikuti struktur IPCC AR6; dapat memanfaatkan data IRBI BNPB tingkat kabupaten/kota). Tiap sel memuat indikator terukur + sumber (tahun, cakupan, metode). Jika sel kosong, tuliskan data gap — jangan mengarang angka.", tag: "Matriks risiko" },
  { t: "Identifikasi satu potensi risiko berantai (cascading risk) dan gambar rantai dampak minimal tiga orde (bahaya → dampak langsung → orde-1 → orde-2) beserta satu umpan balik (feedback loop) dalam rantai tersebut. Tunjukkan titik maladaptasi potensial.", tag: "Rantai berantai" },
  { t: "Untuk risiko yang sama, sebutkan dua sumber ketidakpastian utama (skenario, model, variabilitas, respons) dan rancang satu titik kritis pemantauan (trigger) yang layak menjadi pemicu opsi adaptasi berikutnya.", tag: "Ketidakpastian" },
  { t: "Bandingkan respons Jakarta (NCICD/tanggul) dan Belanda (Room for the River): instrumen apa yang dapat dipinjam untuk kota pesisir Indonesia yang mengalami subsiden, dan apa syarat kelembagaannya? Tuliskan dalam tabel: infrastruktur, mandat ganda, governance, transferibilitas.", tag: "Pembanding" }
];

/* Pustaka */
APP_DATA.PUSTAKA = [
  { group: "Jurnal peer-reviewed (rujukan utama)", items: [
    "Abidin, H.Z., et al. (2015). Study on the risk and impacts of land subsidence in Jakarta. PIAHS, 372, 115–120.",
    "Chaussard, E., Amelung, F., Abidin, H.Z., & Hong, S.-H. (2013). Sinking cities in Indonesia: ALOS PALSAR. Remote Sensing of Environment, 128, 150–161.",
    "Marchau, V.A.W.J., et al. (2019). Decision Making under Deep Uncertainty: From Theory to Practice. Springer.",
    "Reisinger, A., et al. (2020). The concept of risk in the IPCC Sixth Assessment Report. IPCC.",
    "Werners, et al. (2024). Lessons from a decade of adaptive pathways studies. Global Environmental Change.",
    "Zscheischler, J., et al. (2020). A typology of compound weather and climate events. Nature Reviews Earth & Environment, 1, 333–347.",
    "Zscheischler, J., et al. (2025). Chronology of compound events 2024. (Telaah kronologi peristiwa majemuk).",
    "Kajian subsiden Jakarta: subsiden kumulatif >4 m sejak 1970-an; laju pantai 9,5–21,5 cm/tahun (Chaussard); tipikal 3–10 cm/tahun, titik tertentu 20–28 cm/tahun (Abidin; Urban Science 2025).",
    "Kajian polder Semarang (AACL Bioflux, 13(6), 2020); rob 23 Mei 2022 (elevasi pasang 210 cm, genangan ~100 cm).",
    "Room for the River: Rhein 16.000 m³/s, 34 lokasi, €2,3 miliar (arsip program 2006–2019)."
  ] },
  { group: "Dokumen resmi & panduan", items: [
    "IPCC AR6 — World Bank Climate Knowledge Portal (proyeksi kenaikan muka laut Indonesia, SSP).",
    "UU No. 24/2007 tentang Penanggulangan Bencana; Perka BNPB No. 2/2012 (Pedoman Umum Pengkajian Risiko Bencana); inaRISK BNPB.",
    "UU No. 26/2007 (Penataan Ruang); UU No. 32/2009 jo. UU 6/2023 (PPLH/Cipta Kerja); PP No. 22/2021 (KLHS); PP No. 21/2021 (Penataan Ruang).",
    "BMKG (data iklim & pasang surut); BIG (DEMNAS); BPS (SLHI).",
    "UNDRR — Technical Guidance on Comprehensive Risk Assessment and Planning.",
    "AP-Plat/NIES — Halting Jakarta's Land Subsidence for Climate Resilience."
  ] },
  { group: "Berita/ilustrasi status proyek (bukan dasar klaim)", items: [
    "Status NCICD/Giant Sea Wall Jakarta dan wacana 946 km pantura Jawa (2025–2026).",
    "Estimasi SLR nasional ±4,97 mm/tahun (ilustratif; untuk perencanaan gunakan data stasiun BMKG & AR6)."
  ] }
];
