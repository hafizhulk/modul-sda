/**
 * data-bab7.js — Konten Bab 7: Kebijakan, Instrumen, dan Kesenjangan Implementasi.
 * Setiap halaman bab memuat TEPAT SATU file data.
 */
window.APP_DATA = {};

APP_DATA.OBJECTIVES = [
  "Memetakan hierarki kebijakan lingkungan, penataan ruang, dan pembangunan daerah beserta keterkaitannya.",
  "Menganalisis pembagian kewenangan dan peran pemerintah, masyarakat, dunia usaha, dan kelompok terdampak.",
  "Mengevaluasi instrumen kebijakan: perencanaan, pencegahan, perizinan, pengawasan, insentif dan disinsentif.",
  "Mengidentifikasi kesenjangan implementasi (implementation gap) dan akar penyebabnya."
];

APP_DATA.GLOSSARY = {
  "pembangunan-berkelanjutan": {
    term: "Prinsip pembangunan berkelanjutan",
    en: "sustainable development principle",
    def: "Memenuhi kebutuhan generasi kini tanpa mengorbankan generasi mendatang — menjadi prinsip hukum UU 32/2009 (tanggung jawab negara, keberlanjutan, kehati-hatian, polluter pays, partisipatif, kearifan lokal) jo. PP 22/2021."
  },
  "kehati-hatian": {
    term: "Prinsip kehati-hatian",
    en: "precautionary principle",
    def: "Bila ada ancaman kerusakan serius atau irreversibel, ketiadaan kepastian ilmiah penuh bukan alasan menunda pencegahan (UU 32/2009)."
  },
  "hierarki-kebijakan": {
    term: "Hierarki tiga rel kebijakan",
    en: "three-track policy hierarchy",
    def: "Pembangunan (UU 25/2004: RPJP 20 th–RPJMN 5 th–RPJMD/RKPD 1 th), Penataan Ruang (UU 26/2007 jo PP 21/2021: RTRWN–RTRW Prov–Kab/Kota–RDTR 20 th), Lingkungan Hidup (UU 32/2009 jo PP 22/2021: RPPLH 30 th)."
  },
  "klhs": {
    term: "KLHS",
    en: "Strategic Environmental Assessment",
    def: "Kajian Lingkungan Hidup Strategis — prasyarat KRP (PP 22/2021) yang memaksa pertimbangan D3TLH masuk ke RPJMN/RPJMD dan RTRW/RDTR; rel penghubung ketiga rel kebijakan."
  },
  "d3tlh": {
    term: "D3TLH",
    en: "environmental carrying capacity (Indonesia)",
    def: "Daya Dukung dan Daya Tampung Lingkungan Hidup — instrumen wajib kepala daerah per PP 22/2021; syarat penapisan AMDAL/UKL-UPL; status belum/sudah/sangat terlampaui."
  },
  "kkpr": {
    term: "KKPR",
    en: "Conformity of Space Utilization Activities",
    def: "Kesesuaian Kegiatan Pemanfaatan Ruang — prasyarat perizinan berusaha berbasis risiko (OSS-RBA, PP 28/2025). KKKPR (Konfirmasi) bila RDTR terintegrasi OSS; PKKPR (Persetujuan, ≤20 hari kerja via Forum Penataan Ruang) bila belum."
  },
  "oss-rba": {
    term: "OSS-RBA / PBR",
    en: "Risk-Based Business Licensing",
    def: "Online Single Submission Risk-Based Approach (PP 5/2021 → PP 28/2025): perizinan berbasis tingkat risiko; KKPR menjadi syarat dasar sebelum izin usaha."
  },
  "amdal": {
    term: "AMDAL / UKL-UPL / SPPL",
    en: "environmental impact assessment",
    def: "AMDAL untuk dampak penting, UKL-UPL untuk dampak tidak penting, SPPL/pernyataan untuk risiko rendah — instrumen pencegahan yang bergeser bebannya ke pengawasan pasca-izin pasca reformasi PBR."
  },
  "lp2b": {
    term: "LP2B",
    en: "Sustainable Food Agriculture Land",
    def: "Lahan Pertanian Pangan Berkelanjutan (UU 41/2009): kawasan/lahan/cadangan pangan berkelanjutan; penetapan via RTRW → Perda; Pasal 44 larang alih fungsi kecuali kepentingan umum dengan kajian, rencana, pembebasan, dan lahan pengganti 1–3×; sanksi Pasal 72 efektif bila LP2B telah ditetapkan."
  },
  "ecr": {
    term: "Ecological Conservation Redline (ECR)",
    en: "Ecological Conservation Redline (China)",
    def: "Garis batas keamanan ekologis Tiongkok — strategi nasional 2013, UU Perlindungan Lingkungan 2014, pedoman nasional 2017; berbasis penilaian jasa ekosistem multipel; no-net-loss tutupan lahan & keanekaragaman hayati; Shanghai +174% perlindungan habitat."
  },
  "implementation-gap": {
    term: "Implementation gap",
    en: "implementation gap",
    def: "Kesenjangan antara janji instrumen dan hasilnya. Policy adoption gap membandingkan target nasional dengan kebijakan yang diadopsi, sedangkan policy outcome gap membandingkan kebijakan yang berjalan dengan dampak materiilnya."
  },
  "3cg": {
    term: "Kerangka 3C+G",
    en: "Coherence–Compliance–Capacity + Gap",
    def: "Koherensi (konsistensi antarkebijakan), Kepatuhan (probabilitas deteksi, sanksi, biaya kepatuhan), Kapasitas (anggaran/SDM/data), dan Gap terukur pada rantai input–proses–output–dampak."
  },
  "koherensi": {
    term: "Koherensi kebijakan",
    en: "policy coherence",
    def: "Konsistensi tujuan antarkebijakan dan antarlevel; inkoherensi muncul saat mandat sektoral (perumahan vs pangan vs minerba) bertabrakan atau RTRW tidak sesuai RPPLH/KLHS."
  },
  "kepatuhan": {
    term: "Kepatuhan (compliance)",
    en: "compliance",
    def: "Sejauh mana aktor sasaran menaati norma — ditentukan probabilitas terdeteksi, besaran sanksi, biaya kepatuhan, dan legitimasi aturan."
  },
  "kapasitas-kelembagaan": {
    term: "Kapasitas kelembagaan",
    en: "institutional capacity",
    def: "Anggaran, SDM, data, peranti analisis, kepemimpinan pada level pelaksana — kabupaten/kota sering paling kritis."
  },
  "governance-gap": {
    term: "Governance gap",
    en: "governance gap",
    def: "Implementation gap sebagai governance gap: lima pilar — pemantauan/penegakan kredibel, desain kelembagaan, transparansi, koherensi, legitimasi partisipasi."
  },
  "cac-mbi": {
    term: "CAC vs MBI",
    en: "command-and-control vs market-based instruments",
    def: "CAC: regulasi langsung (standar, izin, larangan) — prediktabel tetapi kaku; MBI: insentif harga (pajak, subsidi, izin dagang) — efisien tetapi butuh pemantauan transaksi. Pilihan bergantung kapasitas kelembagaan."
  }
};

APP_DATA.CHAPTERS = [
  { n: 1, title: "Landasan Konseptual SDA dan Lingkungan", href: "bab-1.html" },
  { n: 2, title: "Potensi Lokal dan Sistem Sosial-Ekologis", href: "bab-2.html" },
  { n: 3, title: "Arsitektur Data Spasial dan Nonspasial", href: "bab-3.html" },
  { n: 4, title: "Kapasitas Lingkungan dan Jasa Ekosistem", href: "bab-4.html" },
  { n: 5, title: "Perubahan Lahan, Pencemaran, dan Degradasi", href: "bab-5.html" },
  { n: 6, title: "Perubahan Iklim, Risiko Bencana, dan Ketahanan", href: "bab-6.html" },
  { n: 7, title: "Kebijakan, Instrumen, dan Kesenjangan Implementasi", href: "#top", current: true },
  { n: 8, title: "Penstrukturan Masalah dan Evaluasi Multikriteria", href: "bab-8.html" },
  { n: 9, title: "Skenario, Strategi Terintegrasi, dan Implementasi", href: "bab-9.html" },
  { n: 10, title: "Komunikasi Kebijakan dan Penjaminan Mutu", href: "bab-10.html" }
];

APP_DATA.KEYWORDS = [
  { t: "Pembangunan berkelanjutan (UU 32/2009)", to: "#sub-71" },
  { t: "Hierarki tiga rel kebijakan", to: "#sub-71" },
  { t: "KLHS sebagai rel penghubung", to: "#sub-72" },
  { t: "Pembagian kewenangan (UU 23/2014)", to: "#sub-73" },
  { t: "KKPR & OSS-RBA", to: "#instrumen" },
  { t: "AMDAL / UKL-UPL / SPPL", to: "#sub-74" },
  { t: "Pengawasan & penegakan", to: "#sub-74" },
  { t: "Insentif–disinsentif (LP2B)", to: "#sub-74" },
  { t: "Kerangka 3C+G", to: "#sub-75" },
  { t: "Implementation gap (adoption vs outcome)", to: "#sub-75" },
  { t: "LP2B — mandat vs praktik", to: "#studi-kasus" },
  { t: "ECR Tiongkok — pembanding", to: "#pembanding" },
  { t: "566 RDTR terintegrasi OSS", to: "#sub-72" },
  { t: "12,8% alih fungsi lahan terlindungi", to: "#studi-kasus" }
];

/* Stepper — Lima fungsi instrumen kebijakan siklus */
APP_DATA.STEPS = [
  {
    icon: "map-pinned",
    title: "1 · Perencanaan — RPPLH & KLHS",
    body: "RPPLH (30 tahun) sebagai baseline spasial-tematik; KLHS sebagai prasyarat KRP (PP 22/2021) yang memaksa D3TLH masuk ke RPJMN/RPJMD dan RTRW/RDTR. Kendala: data D3TLH tak mutakhir, rekomendasi tak mengikat pasal RTRW.",
    note: "Indikator gap: % rekomendasi KLHS yang diadopsi pasal RTRW."
  },
  {
    icon: "shield-check",
    title: "2 · Pencegahan — AMDAL / UKL-UPL",
    body: "AMDAL untuk dampak penting, UKL-UPL untuk tidak penting, SPPL untuk risiko rendah. Pasca PBR, banyak kegiatan turun kasta dari AMDAL ke standar — beban bergeser ke pengawasan pasca-izin.",
    note: "Indikator: rasio proyek terpantau vs terizin; tindak lanjut RKL-RPL."
  },
  {
    icon: "file-check",
    title: "3 · Perizinan — KKPR → PBR",
    body: "KKPR menjadi syarat dalam OSS-RBA. Jika RDTR sudah terhubung dengan OSS, kesesuaian dapat dikonfirmasi melalui KKKPR. Jika belum, diperlukan proses persetujuan PKKPR melalui Forum Penataan Ruang. Ketersediaan RDTR yang jelas membantu membuat keputusan perizinan lebih pasti.",
    note: "Fakta: 566 RDTR terintegrasi OSS (Apr 2026, ATR/BPN) — jauh dari seluruh kabupaten/kota."
  },
  {
    icon: "eye",
    title: "4 · Pengawasan & penegakan",
    body: "Pengawasan administratif, sanksi perizinan, pidana lingkungan, sengketa. Kendala: beban pasca-izin tidak sebanding jumlah pelaku & aparatur; multi-pintu (DLH, tata ruang, polisi) ciptakan celah koordinasi.",
    note: "Indikator: frekuensi inspeksi; rasio temuan–sanksi."
  },
  {
    icon: "hand-coins",
    title: "5 · Insentif–disinsentif",
    body: "Insentif (keringanan, PROPER, dana lingkungan) vs disinsentif (denda, kewajiban pemulihan, lahan pengganti 1–3× pada LP2B). Efektivitas bergantung kemampuan menagih dan konsistensi sumber dana.",
    note: "Risiko: label PROPER menjadi reputasi, bukan pengendali kinerja, tanpa pemantauan independen."
  }
];

APP_DATA.TIMELINE = [];

/* Quiz */
APP_DATA.QUIZ = [
  {
    q: "KLHS dalam struktur tiga rel kebijakan Indonesia berperan sebagai…",
    options: [
      "Dokumen pelengkap tanpa kewajiban hukum.",
      "Rel penghubung yang memaksa pertimbangan D3TLH masuk ke perencanaan pembangunan (RPJMN/RPJMD) dan penataan ruang (RTRW/RDTR) — prasyarat KRP menurut PP 22/2021.",
      "Pengganti AMDAL untuk semua proyek.",
      "Instrumen yang hanya berlaku untuk sektor kehutanan."
    ],
    answer: 1,
    pembahasan: "KLHS adalah prasyarat KRP yang berpotensi menimbulkan dampak lingkungan; hasilnya menjadi rekomendasi yang harus ditindaklanjuti dalam rencana — desain rel penghubung ketiga rel kebijakan."
  },
  {
    q: "Perbedaan KKKPR dan PKKPR terletak pada…",
    options: [
      "KKKPR untuk industri, PKKPR untuk perumahan.",
      "KKKPR = Konfirmasi otomatis bila RDTR telah terintegrasi OSS; PKKPR = Persetujuan melalui kajian Forum Penataan Ruang (hingga 20 hari kerja) bila RDTR belum terintegrasi — celah di mana keterkaitan tata ruang–perizinan dapat melambat.",
      "Keduanya identik, hanya beda istilah.",
      "KKKPR memerlukan AMDAL, PKKPR tidak."
    ],
    answer: 1,
    pembahasan: "566 RDTR terintegrasi OSS (Apr 2026, ATR/BPN) — jauh dari seluruh kabupaten/kota; di lokasi tanpa RDTR terintegrasi, KKPR beralih ke PKKPR yang memerlukan kajian substantif."
  },
  {
    q: "Mengapa sanksi pidana Pasal 72 UU 41/2009 tentang LP2B hanya efektif bila LP2B telah ditetapkan dalam RTRW via Perda?",
    options: [
      "Karena sanksi hanya berlaku untuk lahan di luar Jawa.",
      "Karena penetapan formal via RTRW/Perda adalah prasyarat yuridis berlakunya larangan alih fungsi; tanpa payung Perda, instrumen sanksi tidak memiliki objek hukum yang mengikat.",
      "Karena petani kebal hukum.",
      "Karena sanksi diganti dengan insentif."
    ],
    answer: 1,
    pembahasan: "Banyak daerah masih pada tahap inventarisasi-identifikasi, belum penetapan Perda — sehingga Pasal 72 tidak dapat ditegakkan; gap penetapan (adoption gap) melumpuhkan penegakan."
  },
  {
    q: "Dalam kerangka 3C+G, membedakan akar gap sebagai koherensi, kepatuhan, atau kapasitas penting karena…",
    options: [
      "Ketiganya sinonim dan dapat dipertukarkan.",
      "Salah diagnosis berakibat salah resep: gap kapasitas butuh anggaran/pelatihan, gap kepatuhan butuh penegakan/sinyal harga, gap koherensi butuh harmonisasi norma. Contoh LP2B: norma pengecualian kepentingan umum yang luas adalah akar koherensi, bukan kapasitas.",
      "Hanya kapasitas yang relevan di Indonesia.",
      "Koherensi hanya berlaku untuk kebijakan fiskal."
    ],
    answer: 1,
    pembahasan: "Kotak 7.5: tanyakan untuk tiap gap — apakah kapasitas, kepatuhan, atau koherensi — agar resep kebijakan tepat sasaran."
  },
  {
    q: "Pelajaran utama perbandingan LP2B dengan ECR Tiongkok adalah…",
    options: [
      "ECR dan LP2B identik dan dapat direplikasi langsung tanpa adaptasi.",
      "Keduanya adalah instrumen batas spasial (spatial bottom-line) berbasis jasa ekosistem; ECR bekerja ketika batas ditarik berbasis sains, dikunci pada UU & sistem perencanaan teritorial, dan dipantau dengan indikator no-net-loss — LP2B tersumbat pada legitimasi petakan, penguncian Perda, dan pemantauan yang belum berjalan.",
      "ECR hanya untuk lahan pertanian, LP2B untuk hutan.",
      "LP2B lebih berhasil daripada ECR."
    ],
    answer: 1,
    pembahasan: "ECR: Shanghai +174% perlindungan habitat; Nanjing: perlambatan penurunan nilai jasa ekosistem. LP2B meminjam logika sama tetapi tersumbat pada presisi petakan, Perda tertunda, dan monitoring no-net-loss yang belum berjalan."
  }
];

/* Diskusi */
APP_DATA.DISKUSI = [
  { q: "Petakan hierarki tiga rel kebijakan untuk isu 'perlindungan lahan sawah' di wilayah studi Anda: dari RPJPN/SDGs → RPJMN/RPPLH → RTRWN → RTRW Prov/Kab/Kota → RDTR → KKPR/AMDAL. Di jenjang mana gap paling nyata dan mengapa?", h: "Gunakan Tabel 7.1 (tiga rel) dan piramida kebijakan Subbab 7.1.2. Periksa apakah RDTR telah terintegrasi OSS — bila belum, gap berada pada rantai perizinan (PKKPR). Tunjukkan satu Perda/RTRW spesifik sebagai bukti." },
  { q: "Bandingkan desain vs praktik satu instrumen (KLHS RTRW, AMDAL, atau KKPR) di wilayah studi Anda. Apakah prasyarat data D3TLH/RPPLH terpenuhi? Apakah rekomendasi instrumen masuk pasal operasional RTRW/RDTR?", h: "Gunakan matriks instrumen 7.4.6: identifikasi titik rawan tipikal (mis. KLHS: D3TLH tak mutakhir; KKPR: RDTR minus) dan satu contoh konkret dengan penanda gap terukur (% adopsi rekomendasi KLHS, rasio terpantau vs terizin)." },
  { q: "Untuk isu LP2B di wilayah peri-urban: petakan aktor (pemilik sawah, pengembang, Dinas Pertanian, Bappeda, BPN, penegak hukum, konsumen perkotaan). Insentif dan beban siapa yang paling menentukan kepatuhan, dan mengapa instrumen insentif LP2B belum konsisten?", h: "Gunakan pemetaan aktor 7.3.2 dan kerangka 3C+G: akar kepatuhan (biaya kepatuhan tinggi, deteksi rendah) vs akar kapasitas (anggaran insentif, sosialisasi). Bandingkan dengan kasus LP2B di wilayah Anda." },
  { q: "ECR Tiongkok diklaim menaikkan perlindungan habitat 174% di Shanghai. Syarat apa yang membuat instrumen batas spasial bekerja di Tiongkok tetapi tersumbat pada LP2B, dan apa yang dapat diadaptasi tanpa replikasi mentah?", h: "Bandingkan tiga syarat ECR: batas berbasis sains jasa ekosistem, penguncian pada UU & sistem perencanaan teritorial, pemantauan no-net-loss via penginderaan jauh. LP2B tersumbat pada presisi petakan, Perda tertunda, monitoring belum berjalan — adaptasi perlu harmonisasi desentralisasi, bukan komando terpusat." }
];

/* Latihan */
APP_DATA.LATIHAN = [
  { t: "Petakan pembagian kewenangan pusat–provinsi–kabupaten/kota untuk satu isu lingkungan di wilayah studi Anda (pilih: alih fungsi LP2B, kualitas air sungai lintas kabupaten, atau karhutla). Gunakan UU 23/2014 dan PP 22/2021 sebagai baseline, tandai titik tumpang-tindih atau kewenangan mengambang.", tag: "Kewenangan" },
  { t: "Telaah satu instrumen (KLHS RTRW/RDTR, AMDAL, atau KKPR/PBR). Bandingkan desain di atas kertas vs praktik: apakah prasyarat D3TLH/RPPLH terpenuhi? Apakah rekomendasi masuk pasal operasional? Berikan satu contoh konkret dengan indikator gap terukur.", tag: "Instrumen" },
  { t: "Identifikasi tiga implementation gap untuk isu tersebut dan analisis akar penyebabnya dengan 3C+G. Untuk tiap gap, tuliskan satu indikator kuantitatif yang dapat diverifikasi dan sumber datanya (atau data apa yang seharusnya dikumpulkan dan oleh siapa bila belum tersedia).", tag: "Gap 3C+G" },
  { t: "Bandingkan estimasi alih fungsi lahan sawah dari dua sumber (KLHK/Kementan vs penginderaan jauh/BPS SLHI) untuk provinsi wilayah studi Anda. Jelaskan perbedaan definisi/metode dan dampaknya terhadap penilaian implementasi LP2B. Terapkan pembelajaran Bab 3.", tag: "Angka ganda" }
];

/* Pustaka */
APP_DATA.PUSTAKA = [
  { group: "Jurnal peer-reviewed & kajian", items: [
    "Bai, Y., et al. (2018). Developing China's Ecological Redline Policy using ecosystem services assessments. Nature Communications, 9, 3032.",
    "Tian, M., et al. (2022). Identifying ecological corridors for Chinese ecological conservation redline. PLOS ONE.",
    "Zhang et al. (2021). Spatial pattern change and ecosystem service value dynamics of ECR. Int. J. Environ. Res. Public Health, 18(8), 4224.",
    "Conservation Letters, 15, e12853 (2022). China's ECR and post-2020 targets.",
    "Umam, A.H., et al. Rapid assessment of climate change issues through SEA: case of Palu. IOP Conf. Ser.: Earth Environ. Sci. DOI: 10.1088/1755-1315/644/1/012045.",
    "Contoh telaah KLHS RPJMD kabupaten (mis. Gunung Mas) — telusuri di jurnal administrasi publik dan repositori kampus.",
    "Multilevel environmental governance in Indonesia. IJMRA (2024).",
    "Repositori UGM: Implementasi LP2B di Purbalingga — peta existing 2015, belum Perda.",
    "Environmental Governance in Indonesia. Springer Open (2023). DOI: 10.1007/978-3-031-15904-6.",
    "Studi-studi implementasi LP2B tingkat kota (mis. Palu) — telusuri di jurnal dan repositori kampus.",
    "Maulana, I.N.H., dkk. (2026). Land conversion, spatial governance failure, and food security in peri-urban Malang. Jurnal Mediasosian, 10(1).",
    "Literatur tata kelola lingkungan tentang inersia birokrasi (bureaucratic comfort zones) — telusuri di Ecological Economics / Environmental Governance."
  ] },
  { group: "Regulasi rujukan normatif", items: [
    "UU No. 32/2009 tentang PPLH (jo. UU 6/2023).",
    "PP No. 22/2021 tentang Penyelenggaraan PPLH.",
    "UU No. 26/2007 tentang Penataan Ruang; PP No. 21/2021 tentang Penyelenggaraan Penataan Ruang.",
    "UU No. 25/2004 tentang SPPN.",
    "UU No. 41/2009 tentang LP2B; PP No. 1/2011 tentang Penetapan dan Pengalihan LP2B.",
    "UU No. 23/2014 tentang Pemerintahan Daerah.",
    "PP No. 5/2021 jo. PP No. 28/2025 tentang Perizinan Berusaha Berbasis Risiko (OSS-RBA, KKPR).",
    "Peraturan ATR/BPN 13/2021 (KKPR).",
    "Kementerian ATR/BPN (2026). Capaian RDTR terintegrasi OSS (data April 2026: 566 RDTR)."
  ] }
];
