/**
 * data-bab9.js — Konten Bab 9: Skenario, Strategi Terintegrasi, dan Implementasi.
 * Setiap halaman bab memuat TEPAT SATU file data.
 */
window.APP_DATA = {};

APP_DATA.OBJECTIVES = [
  "Mensintesis bukti menjadi isu strategis, tujuan, dan sasaran yang dapat ditelusuri.",
  "Menyusun skenario pembangunan wilayah/kota yang kontras dan logis.",
  "Merancang integrasi strategi spasial dan nonspasial: solusi berbasis alam, adaptasi iklim, pengurangan risiko bencana, potensi lokal, dan inovasi teknologi.",
  "Menyusun rencana implementasi: program prioritas, pembagian peran, pembiayaan, indikator kinerja, serta pemantauan, evaluasi, dan pembelajaran adaptif."
];

APP_DATA.GLOSSARY = {
  "isu-strategis": {
    term: "Isu strategis",
    en: "strategic issue",
    def: "Ketegangan atau pilihan yang perlu diselesaikan melalui perencanaan. Isu strategis bukan sekadar daftar masalah, melainkan trade-off yang menuntut keputusan; misalnya, mempertahankan pesisir dengan infrastruktur atau merelokasinya secara bertahap."
  },
  "results-chain": {
    term: "Results chain / Hierarki logika hasil",
    en: "results chain",
    def: "Isu strategis → tujuan (goal, jangka panjang) → sasaran (objective, terukur & berjangka) → strategi → program → keluaran–hasil–dampak. Tiap sasaran idealnya SMART dan tertelusur ke indikator, baseline, target, tahun, dan sumber verifikasi."
  },
  "skenario": {
    term: "Skenario",
    en: "scenario",
    def: "Gambaran alternatif masa depan yang masuk akal, konsisten internal, dan berbeda sungguh-sungguh — untuk menguji ketangguhan strategi, bukan meramal (eksploratif, normatif, prediktif/BAU)."
  },
  "bau": {
    term: "Business-as-usual (BAU)",
    en: "business-as-usual",
    def: "Skenario kelanjutan tren tanpa intervensi kebijakan baru — pembanding untuk mengukur additionalitas skenario transisi berkelanjutan."
  },
  "backcasting": {
    term: "Backcasting",
    en: "backcasting",
    def: "Menyusun jalur mundur dari visi normatif ke kondisi kini — kebalikan dari forecasting yang mengekstrapolasi tren."
  },
  "nbs": {
    term: "Solusi berbasis alam (NbS)",
    en: "Nature-based Solutions",
    def: "Tindakan melindungi, mengelola lestari, dan merestorasi ekosistem alam/termodifikasi yang menjawab tantangan sosial sekaligus memberi manfaat bagi manusia dan keanekaragaman hayati (IUCN 2016; 8 kriteria IUCN Global Standard 2020)."
  },
  "sponge-city": {
    term: "Sponge city",
    en: "sponge city",
    def: "Kota spons — strategi kota yang menyerap, menyimpan, dan memurnikan air hujan melalui infrastruktur hijau-biru (lahan basah, waduk, ruang retensi) untuk meredam rob dan banjir."
  },
  "sendai": {
    term: "Sendai Framework",
    en: "Sendai Framework for DRR 2015–2030",
    def: "Kerangka global pengurangan risiko bencana (UNDRR) yang menjadi rujukan adaptasi-PRB; di Indonesia dioperasionalkan via Perpres 87/2020 (RPB Nasional)."
  },
  "kpbu": {
    term: "KPBU",
    en: "Public-Private Partnership (PPP)",
    def: "Kerja Sama Pemerintah dengan Badan Usaha — skema pembiayaan infrastruktur yang membagi risiko antara pemerintah dan badan usaha (PP 17/2022; Permen PPN/Bappenas 6/2022 untuk IKN)."
  },
  "blended-finance": {
    term: "Blended finance",
    en: "blended finance",
    def: "Rangkaian sumber dana: APBN/APBD, KPBU, swasta/BUMN-BUMD, PES/kredit karbon-biodiversitas, dan donor — dirangkai sesuai jendela kritis pendanaan agar program tidak stranded."
  },
  "logframe": {
    term: "Logframe / Kerangka Indikator KHD",
    en: "logical framework",
    def: "Matriks keluaran (output, produk langsung) → hasil (outcome, perubahan pada penerima) → dampak (impact, kondisi akhir sistem), masing-masing SMART dengan sumber verifikasi dan asumsi/risiko."
  },
  "mel-adaptif": {
    term: "MEL adaptif",
    en: "adaptive Monitoring, Evaluation & Learning",
    def: "Pemantauan-evaluasi yang dirancang sebagai eksperimen: asumsi dan prediksi terukur, bandingkan aktual vs prediksi, ubah rancangan bila divergensi di luar toleransi (Holling 1978; Walters 1986) — dievaluasi dengan kriteria OECD DAC."
  },
  "trigger-based": {
    term: "Trigger-based planning",
    en: "trigger-based planning",
    def: "Perencanaan berbasis pemicu terukur (bukan jadwal waktu) — strategi contingent diaktifkan bila sinyal skenario tertentu muncul."
  },
  "forest-city": {
    term: "Forest city (IKN)",
    en: "forest city",
    def: "Sasaran identitas IKN bersama sponge city & smart city — porsi RTH/biru dominan dan bangunan hijau; klaim ini adalah skenario normatif yang harus diuji terhadap bukti tutupan lahan dan indikator iklim lokal."
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
  { n: 9, title: "Skenario, Strategi Terintegrasi, dan Implementasi", href: "#top", current: true },
  { n: 10, title: "Komunikasi Kebijakan dan Penjaminan Mutu", href: "bab-10.html" }
];

APP_DATA.KEYWORDS = [
  { t: "Isu strategis & results chain", to: "#sub-91" },
  { t: "Skenario eksploratif / normatif / BAU", to: "#sub-92" },
  { t: "6 langkah penyusunan skenario", to: "#skenario" },
  { t: "Matriks 2×2 driver", to: "#sub-92" },
  { t: "NbS & IUCN 8 kriteria", to: "#sub-93" },
  { t: "Sponge city & adaptasi-PRB", to: "#sub-93" },
  { t: "Bingkai 5 kolom integrasi", to: "#sub-93" },
  { t: "Matriks program prioritas", to: "#sub-94" },
  { t: "Blended finance & KPBU", to: "#sub-95" },
  { t: "Risiko implementasi & trigger", to: "#sub-95" },
  { t: "Keluaran–hasil–dampak (KHD)", to: "#sub-95" },
  { t: "MEL adaptif", to: "#sub-95" },
  { t: "IKN & KLHS Masterplan", to: "#studi-kasus" },
  { t: "Forest city — klaim vs bukti", to: "#studi-kasus" }
];

/* Stepper — 6 langkah penyusunan skenario (9.2.2) */
APP_DATA.STEPS = [
  {
    icon: "calendar-range",
    title: "1 · Tetapkan cakrawala & batas spasial",
    body: "Umumnya 20–25 tahun (horizon RTRW/RPJP) dan batas DAS/bentang pesisir/kota. Cakrawala menentukan driver mana yang relevan dan seberapa jauh ketidakpastian melebar.",
    note: "Contoh IKN: 5 tahap 2022–2045 (Perpres 63/2022); KIPP vs kawasan IKN 256.142 ha vs wilayah partner Kaltim — angka tidak boleh diklaim lintas cakupan."
  },
  {
    icon: "shuffle",
    title: "2 · Pilih 2–4 driver kritis",
    body: "Driver dengan ketidakpastian tinggi & dampak besar: laju migrasi perkotaan, harga karbon/kebijakan iklim, tingkat investasi infrastruktur, kepatuhan penegakan RTRW. Kombinasikan dalam matriks silang 2×2 bila tepat.",
    note: "Driver = pemandu keputusan, bukan daftar panjang semua faktor."
  },
  {
    icon: "pen-tool",
    title: "3 · Rumuskan narasi skenario",
    body: "Satu fokus utama per skenario: BAU vs jalur transisi berkelanjutan vs jalur disrupsi ekonomi. Narasi ≤300 kata, kontras, logis, terukur — bukan variasi kosmetik.",
    note: "Contoh Tabel 9.1: BAU (permukiman mengikuti tren) vs Transisi (kompaksi + TOD, LP2B dipulihkan)."
  },
  {
    icon: "map-pinned",
    title: "4 · Translasi ke spasial",
    body: "Petakan implikasi tutupan/penggunaan lahan tiap skenario — lazim dengan cellular automata atau CLUE-family; pendekatan partisipatif (interview–cognitive mapping–GIS–pemodelan) untuk skenario spatio-temporal (Paletto et al., Alpen Italia, 2015).",
    note: "Keluaran: peta skenario yang dapat dibandingkan dengan indikator yang sama."
  },
  {
    icon: "bar-chart-3",
    title: "5 · Skor dengan indikator hasil",
    body: "Nilai tiap skenario dengan indikator yang sama: jejak lahan terbangun, neraca air, risiko banjir, emisi GRK, akses kelompok rentan — termasuk analisis sensitivitas bobot (Bab 8).",
    note: "Gunakan baseline Tugas 1 sebagai garis dasar."
  },
  {
    icon: "shield-check",
    title: "6 · Uji ketangguhan strategi",
    body: "Uji apakah strategi tetap bermanfaat dalam beberapa skenario. Langkah yang berguna pada hampir semua kondisi dapat dimulai lebih awal. Langkah lain disiapkan untuk dijalankan ketika tanda perubahan tertentu muncul.",
    note: "Hasil skenario menjadi masukan KLHS RTRW (PP 22/2021) untuk mengunci batas ekologis dan arah pengembangan."
  }
];

APP_DATA.TIMELINE = [];

/* Quiz — 5 soal */
APP_DATA.QUIZ = [
  {
    q: "Isu strategis menurut Bab 9 berbeda dari 'daftar masalah' karena…",
    options: [
      "Isu strategis adalah masalah yang paling mudah diukur.",
      "Isu strategis adalah tensi/pilihan yang harus diselesaikan perencanaan dan lolos 4 uji: materialitas, arah perubahan, keterpengaruhan, dan keterkaitan silang — bukan sekadar 'banjir sering terjadi'.",
      "Isu strategis hanya untuk isu pesisir.",
      "Isu strategis sama dengan tujuan jangka panjang."
    ],
    answer: 1,
    pembahasan: "Isu strategis = pilihan yang memaksa keputusan (mis. pertahankan struktur ruang dengan infrastruktur vs relokasi bertahap), diuji materialitas, arah, keterpengaruhan, dan cross-impact."
  },
  {
    q: "Tiga sifat skenario yang harus dipenuhi (Bab 9) adalah…",
    options: [
      "Kontras, logis, terukur — berbeda pada driver pemandu keputusan, rantai sebab-akibat dapat diceritakan, dan dapat dibandingkan dengan indikator yang sama.",
      "Panjang, detail, dan mahal.",
      "Optimistis, pesimistis, dan moderat.",
      "Kualitatif saja tanpa indikator."
    ],
    answer: 0,
    pembahasan: "Skenario harus kontras pada driver, logis (narasi + bila mungkin dimodelkan), dan terukur dengan indikator yang sama untuk menguji ketangguhan strategi."
  },
  {
    q: "Bingkai 5 kolom integrasi strategi (NbS, adaptasi iklim, PRB, potensi lokal, inovasi teknologi) berguna untuk…",
    options: [
      "Memilih satu kolom terbaik dan mengabaikan lainnya.",
      "Memeriksa kelemahan rancangan: sel kosong berarti strategi timpang — solusi spasial (tata ruang, infrastruktur hijau) harus diimbangi nonspasial (insentif, regulasi, kapasitas).",
      "Mengganti KLHS.",
      "Menghitung biaya proyek."
    ],
    answer: 1,
    pembahasan: "Kegagalan strategi sering karena spasial tanpa nonspasial atau sebaliknya; bingkai 5 kolom mengekspos sel kosong sebagai kelemahan rancangan."
  },
  {
    q: "Perbedaan keluaran (output), hasil (outcome), dan dampak (impact) dalam kerangka KHD adalah…",
    options: [
      "Ketiganya sinonim.",
      "Keluaran = produk langsung program (km mangrove ditanam); hasil = perubahan pada penerima (risiko rob menurun); dampak = kondisi akhir sistem (ketahanan pesisir meningkat).",
      "Dampak dicapai sebelum keluaran.",
      "Hanya dampak yang perlu diukur."
    ],
    answer: 1,
    pembahasan: "Results chain: keluaran (output) → hasil (outcome) pada penerima → dampak (impact) sistemik; tiap level SMART dengan sumber verifikasi dan asumsi/risiko."
  },
  {
    q: "Klaim 'forest city 65% kawasan lindung' pada IKN harus diperlakukan sebagai…",
    options: [
      "Fakta final yang tidak perlu diuji.",
      "Skenario normatif (masa depan yang diinginkan) yang harus diuji terhadap bukti terukur — tutupan vegetasi −18,1% (2021–2026, PlanetScope, pracetak), suhu permukaan naik di Samboja–Sepaku, dan lintasan historis Sepaku sebagai kelanjutan ekstraksi hutan.",
      "Klaim yang otomatis terbukti dengan Perpres 63/2022.",
      "Bukti bahwa deforestasi tidak terjadi."
    ],
    answer: 1,
    pembahasan: "Klaim keberlanjutan adalah skenario normatif; bukti fase konstruksi menunjukkan tekanan ekologis nyata (lahan terbangun +670%, vegetasi −18,1%, NDVI −17,2%, karbon −0,28% pada KIPP) — beban pembuktian ada pada integrasi strategi nonspasial dan monev adaptif."
  }
];

/* Diskusi */
APP_DATA.DISKUSI = [
  { q: "Ambil satu isu strategis di wilayah studi Anda dan uji dengan 4 uji Bab 9 (materialitas, arah perubahan, keterpengaruhan, keterkaitan silang). Apakah isu tersebut lolos sebagai isu strategis atau hanya daftar masalah?", h: "Gunakan bukti Bab 3–6: dampak terhadap daya dukung/jasa ekosistem atau kelompok rentan, tren BAU yang memburuk melampaui ambang, instrumen yang tersedia (Bab 7) dapat mengubah lintasan, dan interaksi sinergis/mengunci dengan isu lain." },
  { q: "Bandingkan skenario BAU vs jalur transisi berkelanjutan untuk wilayah studi Anda: driver apa yang Anda pilih untuk matriks 2×2, mengapa, dan bagaimana translasi spasialnya berbeda (peta tutupan lahan) serta implikasi keadilannya?", h: "Pilih 2–4 driver kritis-ketidakpastian tinggi, rumuskan narasi ≤300 kata per skenario, petakan implikasi LULC, dan skor dengan indikator yang sama (jejak lahan, neraca air, risiko banjir, emisi). Pisahkan fakta–asumsi–interpretasi." },
  { q: "Terapkan bingkai 5 kolom (NbS, adaptasi, PRB, potensi lokal, inovasi) pada isu rob pesisir di wilayah studi Anda: kolom mana yang kosong pada strategi eksisting, dan trade-off apa yang muncul bila mengisi kekosongan tersebut?", h: "Sel kosong = kelemahan rancangan. Untuk tiap trade-off, tulis manfaat-beban, sebaran antar kelompok (environmental justice), antar generasi, dan reversibilitas — lalu periksa pada tiap skenario, bukan hanya BAU." },
  { q: "Rancang satu indikator untuk tiap level KHD (keluaran–hasil–dampak) untuk program prioritas Anda. Bagaimana sumber verifikasi, frekuensi, penanggung jawab, ambang sinyal, dan respons terkaitnya dirancang sebagai sistem MEL adaptif?", h: "Gunakan logframe: keluaran (km mangrove), hasil (risiko rob menurun), dampak (ketahanan pesisir). Ikatan bukti-keputusan: sumber data, frekuensi, penanggung jawab, ambang, dan management action — dievaluasi dengan kriteria OECD DAC." }
];

/* Latihan */
APP_DATA.LATIHAN = [
  { t: "Skenario untuk wilayah studi Anda: rumuskan 2–3 skenario (BAU + ≥1 jalur kontras) dengan cakrawala ≥20 tahun, narasi ≤300 kata/skenario, 3–5 driver dan arahnya, matriks 2×2 bila relevan, dan tabel skenario versi Tabel 9.1 dengan indikator terukur + sumber baseline (Tugas 1). Sebutkan ≥2 asumsi desain per skenario.", tag: "Skenario" },
  { t: "Matriks program prioritas: susun 3 program prioritas dengan format Tabel 9.2 — tahap (T1 fondasi/T2 perluasan/T3 hilirisasi), pembagian peran lintas kewenangan (Bab 7) + mekanisme koordinasi (lead agency/MOU/forum data bersama), indikasi biaya awal (satuan + asumsi + sumber), sumber dana (APBN/APBD/KPBU/PES/donor), dan indikator KHD (keluaran–hasil–dampak) dengan baseline & ambang sinyal.", tag: "Program" },
  { t: "Risiko implementasi & mitigasi: identifikasi 3 risiko (pilih kategori politik-kelembagaan, ekologis/hidrologis, sosial-keadilan, fiskal, teknis) dengan bukti/preseden; rancang mitigasi pada Tabel 9.3 versi Anda — wajib menyertakan leading indicator terukur dan meja sinyal-trigger; untuk satu risiko sosial-keadilan, gambarkan stakeholder mapping dan usulkan mekanisme PADIATAPA.", tag: "Risiko" }
];

/* Pustaka */
APP_DATA.PUSTAKA = [
  { group: "Jurnal & literatur ilmiah", items: [
    "Corgo, J., et al. (2024). Nature-based solutions in spatial planning for climate adaptation. Ambio. DOI: 10.1007/s13280-024-02052-1.",
    "Paletto, A., et al. (2015). Participatory Scenario Development for land-use change. Mountain Research and Development, 35(2). DOI: 10.1659/MRD-JOURNAL-D-14-00082.1.",
    "Samy, M. (2022). An Overview of Scenario Approaches for Urban Planning. Journal of Planning Literature, 37. DOI: 10.1177/08854122221083546.",
    "Adams, C., et al. (2023). Mainstreaming NbS in cities — systematic review (dikutip dalam Landscape and Urban Planning 256, 2025).",
    "Holling, C.S. (Ed.). (1978). Adaptive Environmental Assessment and Management. Wiley. — karya seminal.",
    "Walters, C.J. (1986). Adaptive Management of Renewable Resources. Macmillan. — karya seminal.",
    "Pracetak PlanetScope IKN 2021–2026 (arXiv:2608.01230) — lahan terbangun +670%, vegetasi −18,1%, NDVI −17,2%, karbon −0,28% (ilustrasi tren, belum peer-review).",
    "JPPIPA Unram (2022). Effects of Land Cover Change on Rainfall and Surface Temperature in IKN (Samboja–Sepaku).",
    "Water Alternatives, 19(1), 2026 — From Forest Extraction to New Capital City Development in Sepaku."
  ] },
  { group: "Kerangka internasional & NbS", items: [
    "Cohen-Shacham, E., et al. (Eds.). (2016). Nature-based Solutions to address global societal challenges. IUCN.",
    "IUCN. (2020). Global Standard for Nature-based Solutions (1st ed.).",
    "OECD. (2019). Better Criteria for Better Evaluation (revised DAC).",
    "UNDRR/UNISDR. (2015). Sendai Framework for Disaster Risk Reduction 2015–2030."
  ] },
  { group: "Regulasi & dokumen resmi Indonesia", items: [
    "UU No. 32/2009 PPLH (Pasal 15 KLHS) jo. UU No. 6/2023.",
    "PP No. 22/2021 (KLHS, daya dukung–daya tampung, AMDAL).",
    "UU No. 3/2022 jo. UU No. 21/2023 tentang Ibu Kota Negara; Perpres No. 63/2022 (Rencana Induk 5 tahap 2022–2045, 6 aspek implementasi).",
    "UU No. 16/2016 (Paris Agreement); Perpres No. 87/2020 (RPB Nasional).",
    "Kementerian PPN/Bappenas. (2020). KLHS Masterplan IKN (diakses via lcdi-indonesia.id).",
    "Data pembiayaan indikatif IKN Rp466 T (KPBU Rp252,5 T, swasta/BUMN Rp123,2 T, APBN Rp89,4–90,4 T) — indikasi rencana, perlu verifikasi RPJMN/Otorita IKN."
  ] }
];
