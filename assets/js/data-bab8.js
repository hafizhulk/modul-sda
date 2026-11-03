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
    def: "Masalah kebijakan yang berciri banyak aktor, banyak definisi, tujuan yang tidak dapat dimaksimalkan sekaligus, dan tidak ada solusi yang benar secara teknis — memerlukan penstrukturan masalah sebelum evaluasi (Rittel & Webber 1973; Dorst 2006; Hisschemöller & Hoppe 1996)."
  },
  "fenomena-vs-masalah": {
    term: "Fenomena vs masalah kebijakan",
    en: "problem situation vs policy problem",
    def: "Fenomena (gejala/situasi bermasalah) adalah kondisi objektif di lapangan yang dirasakan tidak nyaman, sedangkan masalah kebijakan adalah rumusan analitis berupa kesenjangan antara kondisi saat ini dan kondisi normatif yang diinginkan yang dapat diintervensi melalui instrumen publik pada batas ruang-waktu dan kewenangan tertentu (Dunn 2017)."
  },
  "konstruksi-analitis": {
    term: "Konstruksi analitis",
    en: "analytical construct",
    def: "Pandangan bahwa masalah kebijakan tidak hadir begitu saja di alam (bukan fakta mentah yang tinggal dipungut), melainkan hasil abstraksi, pemilihan batas, dan pembingkaian (framing) atas suatu situasi kacau (mess) oleh analis dan pemangku kepentingan (Dunn 2017; Ackoff 1974)."
  },
  "kesalahan-tipe-iii": {
    term: "Kesalahan Tipe III",
    en: "Type III error",
    def: "Kesalahan berupa upaya menyelesaikan masalah yang salah akibat perumusan masalah yang keliru atau terlalu sempit (berbeda dari Kesalahan Tipe I: menolak hipotesis benar, dan Tipe II: menerima hipotesis salah). Dalam kebijakan publik, kesalahan ini paling merugikan karena menghabiskan sumber daya secara presisi untuk solusi yang tidak menyentuh akar persoalan (Raiffa 1968; Mitroff & Featheringham 1974; Dunn 2017)."
  },
  "penstrukturan-masalah": {
    term: "Penstrukturan masalah",
    en: "problem structuring",
    def: "Proses iteratif antara penyelidikan analitis (puzzling) dan negosiasi politik-kelembagaan (powering) melalui empat tahap (problem sensing, kategorisasi, dekomposisi, dan pilihan definisi) untuk mengubah situasi kacau (mess) menjadi rumusan masalah spesifik ruang-waktu yang siap dijawab alternatif kebijakan (Dunn 2017; Hisschemöller & Hoppe 1996)."
  },
  "puzzling-powering": {
    term: "Puzzling & powering",
    en: "intellectual puzzling & political powering",
    def: "Konsep Hugh Heclo (1974) bahwa pembuatan kebijakan publik selalu merupakan gabungan antara proses belajar kolektif mengatasi ketidakpastian (puzzling) dan kontestasi kekuasaan antaraktor yang berbeda kepentingan (powering)."
  },
  "joint-knowledge": {
    term: "Produksi pengetahuan bersama",
    en: "joint knowledge production",
    def: "Pendekatan kolaboratif yang memadukan bukti ilmiah kuantitatif (data penginderaan jauh, pemodelan hidrologis) dengan pengetahuan lokal dan pengalaman langsung warga terdampak sejak tahap perumusan masalah agar analisis memiliki keabsahan ilmiah sekaligus legitimasi sosial."
  },
  "dpsir-bab8": {
    term: "Kerangka DPSIR",
    en: "Driving forces–Pressures–State–Impact–Response",
    def: "Kerangka diagnostik kausal yang menghubungkan pendorong sosial-ekonomi makro (Driving forces), tekanan langsung pada lingkungan (Pressures), perubahan kondisi biofisik (State), dampak pada ekosistem/manusia (Impact), dan titik intervensi kebijakan (Response)."
  },
  "social-license": {
    term: "Keabsahan sosial",
    en: "social legitimacy / social license to operate",
    def: "Tingkat penerimaan dan persetujuan berkelanjutan dari komunitas lokal dan pemangku kepentingan atas suatu proyek atau kebijakan. Izin formal dari pemerintah (legalitas administratif) tidak otomatis menjamin keabsahan sosial bila prosesnya mengabaikan keadilan prosedural dan distributif."
  },
  "pohon-masalah": {
    term: "Pohon masalah",
    en: "problem tree",
    def: "Diagram hierarki sebab-akibat yang menempatkan masalah inti (core problem) sebagai batang, penyebab langsung dan struktural sebagai akar, serta dampak langsung dan ikutan sebagai tajuk; setiap panah wajib mewakili mekanisme ilmiah yang teruji."
  },
  "pohon-tujuan": {
    term: "Pohon tujuan",
    en: "objective tree",
    def: "Transformasi pohon masalah menjadi kondisi positif di masa depan (hubungan cara–hasil / means–ends); berfungsi mengekspos tujuan yang saling bertentangan (mis. ekspansi pelabuhan vs integritas mangrove) untuk dijawab secara jujur oleh alternatif kebijakan."
  },
  "theory-of-change": {
    term: "Theory of change (ToC)",
    en: "theory of change",
    def: "Rantai hipotesis kausal dari intervensi, keluaran (outputs), hasil antara/perubahan perilaku (outcomes), hingga dampak jangka panjang (impacts), yang dilengkapi asumsi prasyarat kelembagaan-ekologis dan indikator terukur pada setiap tautannya (Weiss 1995; Sayer et al. 2018)."
  },
  "stakeholder-grid": {
    term: "Matriks pengaruh × kepentingan",
    en: "power–interest grid",
    def: "Alat pemetaan aktor ke dalam empat kuadran (Key Players, Context Setters, Subjects, Crowd) menurut kapasitas kekuasaan dan besarnya kepentingan/dampak, ditambah analisis pembingkaian masalah dan sumber hak/klaim tiap aktor (Ackermann & Eden 2011; Reed et al. 2009)."
  },
  "alternatif-kosmetik": {
    term: "Alternatif kosmetik",
    en: "cosmetic / pseudo-alternatives",
    def: "Opsi-opsi kebijakan yang hanya memvariasikan besaran kuantitatif dari satu desain yang sama (mis. reklamasi 838 ha vs 600 ha vs 400 ha) tanpa mengubah kerangka masalah, instrumen utama, dan distribusi manfaat-beban."
  },
  "mcda": {
    term: "MCDA / MCDM",
    en: "multi-criteria decision analysis",
    def: "Keluarga metode evaluasi sistematis untuk membandingkan alternatif kebijakan di hadapan berbagai kriteria yang saling berbenturan (ekologis, ekonomi, sosial, kelembagaan, regulasi, keadilan, ketahanan) secara transparan guna mengungkap trade-off (Dodgson et al. 2009; Malczewski 2006)."
  },
  "double-counting": {
    term: "Bebas hitung-ganda",
    en: "non-redundancy / mutual independence",
    def: "Syarat metodologis dalam penyusunan kriteria MCDA bahwa satu proses atau manfaat yang sama tidak boleh diukur dan diberi bobot lebih dari sekali di bawah nama kriteria yang berbeda, karena akan mendistorsi skor akhir secara tersembunyi (Keeney & Raiffa 1976)."
  },
  "kriteria-mcda": {
    term: "Keluarga kriteria MCDA",
    en: "MCDA criteria family",
    def: "Tujuh dimensi evaluasi kebijakan sumber daya dan tata ruang: ekologis, efisiensi sumber daya, sosial-ekonomi, kelembagaan, kesesuaian regulasi (RTRW/RDTR, KLHS, RZWP3K), keadilan (distributif & prosedural), serta ketahanan/resiliensi."
  },
  "fungsi-nilai": {
    term: "Fungsi nilai & normalisasi",
    en: "value function & standardization",
    def: "Aturan matematis atau rubrik kualitatif yang mentransformasikan indikator mentah dengan satuan berbeda (ha, rupiah, persen) ke dalam skala nilai tak-berdimensi yang seragam (mis. 1–5 atau 0–1) sebelum dikalikan bobot (Malczewski 2006)."
  },
  "ahp": {
    term: "AHP",
    en: "Analytic Hierarchy Process",
    def: "Metode elisitasi bobot melalui perbandingan berpasangan (pairwise comparison) berskala 1–9 yang dikembangkan Thomas L. Saaty (1990), dilengkapi uji Rasio Konsistensi (CR ≤ 0,10) untuk memverifikasi kelogisan penilaian."
  },
  "wlc": {
    term: "WLC",
    en: "Weighted Linear Combination",
    def: "Aturan agregasi skor paling umum dalam MCDA (Si = Σ wj · xij) yang mengalikan skor terstandardisasi tiap kriteria dengan bobotnya lalu menjumlahkannya; secara bawaan bersifat kompensatoris penuh."
  },
  "kompensatoris": {
    term: "Kompensatoris vs non-kompensatoris",
    en: "compensatory vs non-compensatory aggregation",
    def: "Dalam aturan kompensatoris (seperti WLC murni), skor buruk pada kriteria lingkungan dapat ditutupi oleh skor tinggi pada kriteria ekonomi. Dalam aturan non-kompensatoris (keberlanjutan kuat), dipasang ambang batas minimum (veto) yang tidak boleh dilanggar."
  },
  "analisis-sensitivitas": {
    term: "Analisis sensitivitas",
    en: "sensitivity analysis",
    def: "Prosedur menguji seberapa kokoh (robust) peringkat alternatif ketika bobot kriteria atau skor digeser dalam rentang ketidakpastian yang wajar, serta mengidentifikasi titik balik (crossover threshold) perubahan pemenang (Malczewski 2006)."
  },
  "oat": {
    term: "OAT & sensitivitas skenario",
    en: "one-at-a-time & scenario sensitivity",
    def: "Dua teknik uji sensitivitas: (1) OAT mengubah satu bobot kriteria secara bertahap sambil meredistribusi proporsional bobot lainnya; (2) Skenario bobot menguji paket profil preferensi aktor yang kontras (mis. Pro-Ekonomi vs Pro-Lingkungan vs Bobot Setara)."
  },
  "mds-rapfish": {
    term: "Multi-Dimensional Scaling (MDS)",
    en: "MDS sustainability index (Rapfish)",
    def: "Metode ordinasi statistik multidimensi (sering diterapkan melalui perangkat Rapfish) untuk memetakan indeks keberlanjutan sistem sumber daya pada skala 0–100% (<50% dikategorikan tidak/kurang berkelanjutan)."
  },
  "klhs": {
    term: "KLHS",
    en: "Strategic Environmental Assessment",
    def: "Kajian Lingkungan Hidup Strategis (UU 32/2009 jo. PP 22/2021) — instrumen wajib untuk mengintegrasikan daya dukung, daya tampung, dan prinsip pembangunan berkelanjutan ke dalam KRP (RTRW/RDTR/RPJMD) sejak tahap perumusan alternatif di hulu."
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
    title: "1 · Merasakan masalah (Problem sensing)",
    body: "Kenali situasi kacau (mess) di lapangan: gejala fisik dan keluhan sosial apa yang terlihat, siapa kelompok yang paling terdampak, dan di mana batas awal wilayah persoalannya? Padukan data pengamatan resmi dengan pengalaman hidup warga (joint knowledge) agar pengenalan awal tidak bias pada satu kepentingan.",
    note: "Keluaran: inventaris gejala fisik-sosial, daftar aktor awal, dan deliniasi kasar ruang-waktu."
  },
  {
    icon: "scale",
    title: "2 · Kategorisasi masalah (Valued gaps)",
    body: "Rumuskan kesenjangan bernilai yang memisahkan kondisi saat ini (what is) dari kondisi normatif atau harapan aktor (what ought to be). Catat bagaimana setiap pemangku kepentingan membingkai kesenjangan tersebut menurut mandat hukum, standar baku mutu, atau hak ruang hidupnya.",
    note: "Keluaran: matriks kesenjangan bernilai (valued gaps) per kelompok pemangku kepentingan."
  },
  {
    icon: "git-branch",
    title: "3 · Dekomposisi (Rantai kausal & DPSIR)",
    body: "Urai arsitektur penyebab langsung dan pendorong struktural di balik kesenjangan tersebut. Gunakan mekanisme ilmiah yang teruji (bukan sekadar korelasi), perhatikan skala hulu–hilir DAS/pesisir, dan padankan dengan kerangka DPSIR untuk mengidentifikasi titik tatakelola yang dapat diintervensi.",
    note: "Keluaran: pohon masalah mekanistik dan pemetaan instrumen/kewenangan kelembagaan."
  },
  {
    icon: "target",
    title: "4 · Pilihan definisi masalah (Core problem)",
    body: "Tetapkan satu rumusan masalah inti pada titik ungkit (leverage point) yang tepat sasaran — terikat batas ruang-waktu ekologis, berada dalam kewenangan otoritas perencana, jujur terhadap ketidakpastian data vs model, serta tidak menyamarkan solusi tunggal sebagai definisi masalah (bebas Kesalahan Tipe III).",
    note: "Keluaran: pernyataan masalah kebijakan inti yang siap diladeni alternatif struktural (Subbab 8.3)."
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
    { key: "B", label: "B · Zonasi terbatas + mitigasi bersyarat", desc: "Diizinkan terbatas di luar zona penyangga setelah kajian daya dukung, kesepakatan kolaboratif, & rehabilitasi", scores: { ekologis: 3, efisiensi: 3, sosial: 4, kelembagaan: 3, regulasi: 3, keadilan: 3, ketahanan: 3 } },
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
  { q: "Ambil satu dokumen RTRW/RDTR/KLHS daerah: apakah evaluasi alternatif di dalamnya benar-benar multikriteria dan membuka asumsi, atau sudah menutup pilihan sejak awal? Kutip bagian dokumen dan beri label [F/R/A/I].", h: "Periksa apakah alternatif benar-benar berbeda desain, kriteria mencakup 7 keluarga, bobot didokumentasikan, dan sensitivitas diuji — atau hanya justifikasi pasca-keputusan (Bab 7). Gunakan label [F] fakta empiris, [R] regulasi, [A] asumsi, dan [I] interpretasi." }
];

/* Latihan */
APP_DATA.LATIHAN = [
  { t: "Pohon masalah & pohon tujuan: untuk isu utama wilayah studi Anda, rumuskan satu masalah inti sebagai kesenjangan ruang-waktu, bangun pohon masalah (≥3 akar mekanistik, ≥4 dampak) dan beri kode tiap tautan ([F] fakta empiris, [R] regulasi, [A] asumsi, [I] interpretasi); lalu konversi menjadi pohon tujuan dan ekspos tujuan yang saling bertentangan.", tag: "Penstrukturan" },
  { t: "Evaluasi multikriteria: untuk 3 alternatif yang berbeda desain (bukan intensitas), susun tabel kriteria–bobot–skor (dokumentasikan panel penilai, metode bobot, dan fungsi nilai); lakukan uji sensitivitas pada 3 skenario bobot (pro-sosial-ekonomi, pro-lingkungan, bobot rata) serta uji OAT, catat ambang perubahan peringkat, dan tulis justifikasi distributif.", tag: "MCE" },
  { t: "Refleksi kritis: ambil satu dokumen kebijakan konkret (RTRW/RDTR/KLHS/izin) dan periksa apakah evaluasinya benar-benar multikriteria dan membuka asumsi — atau sudah menutup pilihan sejak awal. Kutip bagian dokumen, beri label [F/R/A/I], dan jelaskan implikasi kesalahan Tipe III.", tag: "Refleksi" }
];

/* Pustaka */
APP_DATA.PUSTAKA = [
  { group: "Jurnal & panduan metode", items: [
    "Ackermann, F., & Eden, C. (2011). Making Strategy: Mapping Out Strategic Success (2nd ed.). SAGE Publications.",
    "Ackoff, R. L. (1974). Redesigning the Future: A Systems Approach to Societal Problems. John Wiley & Sons.",
    "Adem Esmail, B., & Geneletti, D. (2018). Multi-criteria decision analysis for nature conservation: A review of 20 years of applications. Methods in Ecology and Evolution, 9(1), 42–53. DOI: 10.1111/2041-210X.12899.",
    "Dodgson, J. S., Spackman, M., Pearman, A., & Phillips, L. D. (2009). Multi-criteria analysis: A manual. Department for Communities and Local Government, London.",
    "Dorst, K. (2006). Design problems and design paradoxes. Design Issues, 22(3), 4–17.",
    "Dunn, W. N. (2017). Public Policy Analysis: An Integrated Approach (6th ed.). Routledge.",
    "Gregory, R., Failing, L., Harstone, M., Long, G., McDaniels, T., & Ohlson, D. (2012). Structured Decision Making: A Practical Guide to Environmental Management Choices. Wiley-Blackwell.",
    "Heclo, H. (1974). Modern Social Politics in Britain and Sweden: From Relief to Income Maintenance. Yale University Press.",
    "Hisschemöller, M., & Hoppe, R. (1996). Coping with intractable controversies: The case for problem structuring in policy design and analysis. Knowledge and Policy, 8(4), 40–60.",
    "Hoornbeek, J., & Peters, B. G. (2017). Understanding policy problems: A refinement of past work. Policy Design and Practice, 1(1), 56–72. DOI: 10.1080/25741292.2018.1427419.",
    "Keeney, R. L., & Raiffa, H. (1976). Decisions with Multiple Objectives: Preferences and Value Tradeoffs. John Wiley & Sons.",
    "Malczewski, J. (2006). GIS-based multicriteria decision analysis: A survey of the literature. Int. J. Geographical Information Science, 20(7), 703–726. DOI: 10.1080/13658810600661508.",
    "Mitroff, I. I., & Featheringham, T. R. (1974). On systemic problem solving and the error of the third kind. Behavioral Science, 19(6), 383–393.",
    "Raiffa, H. (1968). Decision Analysis: Introductory Lectures on Choices under Uncertainty. Addison-Wesley.",
    "Ray, S. (2025). Integrating GIS, AI/ML, and MCDA for sustainable urban settlement planning. Applied Spatial Analysis and Policy, 18, 155. DOI: 10.1007/s12061-025-09762-3.",
    "Reed, M. S., et al. (2009). Who's in and why? A typology of stakeholder analysis methods for natural resource management. J. Environmental Management, 90(5), 1933–1949. DOI: 10.1016/j.jenvman.2009.01.001.",
    "Rittel, H. W. J., & Webber, M. M. (1973). Dilemmas in a general theory of planning. Policy Sciences, 4(2), 155–169.",
    "Saaty, T. L. (1990). How to make a decision: The analytic hierarchy process. European J. Operational Research, 48(1), 9–26.",
    "Sayer, J., et al. (2013). Ten principles for a landscape approach to reconciling agriculture, conservation, and other competing land uses. PNAS, 110(21), 8349–8356.",
    "Weiss, C. H. (1995). Nothing as practical as good theory: Exploring theory-based evaluation for comprehensive community initiatives. In New Approaches to Evaluating Community Initiatives (pp. 65–92). Aspen Institute.",
    "Yasmi, Y. (2003). Understanding conflict in the co-management of forests: The case of Bulungan Research Forest. International Forestry Review, 5(1), 38–44."
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
