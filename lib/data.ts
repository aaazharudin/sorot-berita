export interface Article {
  id: string;
  title: string;
  slug: string;
  category: "sport" | "tech" | "viral";
  image: string;
  excerpt: string;
  content: string;
  views: number;
  createdAt: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Timnas Indonesia Lolos ke Putaran Final Piala Asia 2024",
    slug: "timnas-indonesia-lolos-piala-asia-2024",
    category: "sport",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop",
    excerpt: "Tim Garuda berhasil memastikan tempat di putaran final setelah mengalahkan Irak dengan skor 2-1 dalam laga dramatis.",
    content: `Timnas Indonesia berhasil lolos ke putaran final Piala Asia 2024 setelah mengalahkan Irak dengan skor 2-1 dalam laga dramatis di Stadion Utama Gelora Bung Karno, Jakarta, Selasa malam.

Dua gol kemenangan Indonesia dicetak oleh Egy Maulana Vikri pada menit ke-23 dan Witan Sulaiman pada menit ke-78. Irak sempat membalas melalui Mohammed Ali pada menit ke-65.

Pelatih Shin Tae-yong memuji semangat juang para pemainnya. "Ini hasil kerja keras seluruh tim. Pemain tidak menyerah sampai peluit akhir," ujarnya dalam konferensi pers.

Kemenangan ini membuat Indonesia memuncaki klasemen Grup E dengan 10 poin dari 4 pertandingan, unggul tiga poin dari Irak di posisi kedua.

Di putaran final, Indonesia akan bergabung dengan 23 tim lainnya yang akan bertanding di Qatar pada Januari hingga Februari 2024.`,
    views: 125000,
    createdAt: "2024-01-15T08:30:00Z",
  },
  {
    id: "2",
    title: "Apple Rilis iPhone 16 Pro dengan Fitur AI Canggih",
    slug: "apple-rilis-iphone-16-pro-ai-canggih",
    category: "tech",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=500&fit=crop",
    excerpt: "iPhone 16 Pro hadir dengan chip A18 Pro baru yang mendukung fitur artificial intelligence secara real-time.",
    content: `Apple secara resmi meluncurkan iPhone 16 Pro dengan sejumlah pembaruan signifikan, terutama pada kemampuan artificial intelligence.

Ponsel flagship terbaru ini ditenagai chip A18 Pro yang dibangun dengan proses 3nm. Chip ini menawarkan performa 15% lebih cepat dibandingkan A17 Pro, dengan efisiensi energi 30% lebih baik.

Fitur AI utama meliputi:
- Siri yang lebih cerdas dengan pemrosesan on-device
- Kemampuan foto dan video AI secara real-time
- Translasi langsung dalam 50+ bahasa
- Peningkatan augmented reality

"iPhone 16 Pro merepresentasikan evolusi terbesar dalam sejarah iPhone," kata Craig Federighi, Senior Vice President Software Engineering Apple.

Harga iPhone 16 Pro mulai dari $1.199 untuk model 128GB, dan akan tersedia mulai 22 September.`,
    views: 89000,
    createdAt: "2024-01-14T10:00:00Z",
  },
  {
    id: "3",
    title: "Video Awan Tsunami di Jepang Viral di Media Sosial",
    slug: "video-awan-tsunami-jepang-viral",
    category: "viral",
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&h=500&fit=crop",
    excerpt: "Fenomena alam langka yang terjadi di Prefektur Fukushima ini membuat warga panik namun ternyata bukan tsunami.",
    content: `Sebuah video yang menunjukkan fenomena "awan tsunami" di Prefektur Fukushima, Jepang, menjadi viral di media sosial dan memicu kepanikan among warga lokal.

Video tersebut diunggah oleh akun @weather_japan dan telah ditonton lebih dari 5 juta kali dalam 24 jam. Terlihat awan raksasa yang bergerak menyerupai gelombang tsunami menuju daratan.

Badan Meteorologi Jepang (JMA) segera mengklarifikasi bahwa fenomena tersebut adalah jenis awan arcus yang terbentuk saat udara dingin turun dari badai petir di atmosfer atas.

"Awan ini memang terlihat menakutkan, tetapi tidak berbahaya," jelas Dr. Kenji Yamamoto, ahli meteorologi dari Universitas Tokyo. "Yang terjadi adalah pendinginan cepat udara yang menyebabkan awan 'turun' dan menyebar secara horizontal."

Fenomena ini sering terjadi di daerah dengan kondisi cuaca tertentu, terutama saat ada perbedaan suhu yang signifikan antara lapisan atmosfer.`,
    views: 245000,
    createdAt: "2024-01-13T14:20:00Z",
  },
  {
    id: "4",
    title: "Persija Jakarta Juara Liga 1 Musim 2023/2024",
    slug: "persija-jakarta-juara-liga-1-2023-2024",
    category: "sport",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=500&fit=crop",
    excerpt: "Macan Kemayoran berhasil meraih gelar juara setelah 21 tahun menunggu dengan kemenangan 3-0 atas Persib.",
    content: `Persija Jakarta akhirnya meraih gelar juara Liga 1 musim 2023/2024 setelah mengalahkan Persib Bandung dengan skor 3-0 pada laga penentuan di Stadion Utama Gelora Bung Karno.

Tiga gol kemenangan Persija dicetak oleh Marko Simic (2 gol) dan Riko Simanjuntak. Kemenangan ini memastikan Persija mengumpulkan 78 poin, unggul tiga poin dari pesaing terdekatnya.

"Ini momen yang sudah kami tunggu selama 21 tahun," ujar Thomas Doll, pelatih Persija. "Saya bangga dengan semua pemain yang telah bekerja keras sepanjang musim."

Kapten tim, Ismed Sofyan, yang sudah membela Persija sejak 2004, tidak bisa menahan air mata. "Ini hadiah terindah untuk fans Persija yang setia mendukung kami," katanya.

Gelar ini adalah yang ke-12 bagi Persija sepanjang sejarah kompetisi Liga Indonesia. Terakhir kali mereka meraih juara adalah pada musim 2001/2002.`,
    views: 156000,
    createdAt: "2024-01-12T16:45:00Z",
  },
  {
    id: "5",
    title: "Google Gemini Melampaui GPT-4 dalam Benchmark AI",
    slug: "google-gemelin-melampaui-gpt-4",
    category: "tech",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    excerpt: "Model AI terbaru Google ini menunjukkan performa superior dalam uji kemampuan reasoning dan pemrosesan bahasa.",
    content: `Google secara resmi meluncurkan Gemini, model artificial intelligence terbaru yang diklaim melampaui GPT-4 milik OpenAI dalam berbagai benchmark industri.

Menurut blog resmi Google, Gemini Ultra - varian tertinggi dari model ini - mencetak skor 90,0% pada MMLU (Massive Multitask Language Understanding), dibandingkan 86,4% untuk GPT-4.

Gemini hadir dalam tiga varian:
- Gemini Ultra: Untuk task yang sangat kompleks
- Gemini Pro: Untuk berbagai aplikasi skala luas
- Gemini Nano: Untuk perangkat on-device

"Kami merancang Gemini dari awal untuk menjadi multimodal, bisa memahami dan mengkombinasikan berbagai jenis informasi termasuk teks, gambar, audio, video, dan kode," jelas Demis Hassabis, CEO Google DeepMind.

Sundar Pichai, CEO Google, menyatakan bahwa Gemini merepresentasikan langkah besar dalam misi Google untuk mengorganisir informasi dunia dan membuatnya dapat diakses secara universal.

Gemini Pro sudah tersedia untuk developer dan enterprise mulai 13 Desember, sementara Gemini Ultra akan dirilis awal tahun depan.`,
    views: 67000,
    createdAt: "2024-01-11T09:15:00Z",
  },
  {
    id: "6",
    title: "Artis Terkenal Inisial 'R' Ditangkap Terkait Kasus Narkoba",
    slug: "artis-inisial-r-ditangkap-narkoba",
    category: "viral",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=500&fit=crop",
    excerpt: "Polisi menangkap seorang artis terkenal berinisial R di kediamannya di Jakarta Selatan bersama barang bukti sabu.",
    content: `Kepolisian Resor Metro Jakarta Selatan menangkap seorang artis terkenal berinisial R di kediamannya kawasan Kemang, Jakarta Selatan, Kamis malam.

Kabid Humas Polda Metro Jaya, Kombes Pol Ade Aryanto, mengatakan penangkapan dilakukan berdasarkan laporan masyarakat tentang dugaan penyalahgunaan narkoba di lokasi tersebut.

"Dari penggeledahan, kami menemukan 0,5 gram sabu yang disimpan di kamar mandi," kata Ade dalam konferensi pers, Jumat (12/1).

Artis berinisial R kini diamankan di Mapolres Metro Jakarta Selatan untuk menjalani pemeriksaan lebih lanjut. Ia terancam Pasal 127 UU No. 35 Tahun 2009 tentang Narkotika dengan ancaman pidana minimal 4 tahun penjara.

Kasus ini menambah panjang daftar artis yang tertangkap karena narkoba di Indonesia sepanjang tahun 2024. Sebelumnya, beberapa artis lain juga telah ditangkap dengan kasus serupa.`,
    views: 312000,
    createdAt: "2024-01-10T20:30:00Z",
  },
  {
    id: "7",
    title: "Anthony Ginting Juara Indonesia Open 2024",
    slug: "anthony-ginting-juara-indonesia-open-2024",
    category: "sport",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=500&fit=crop",
    excerpt: "Tunggal putra Indonesia ini mengalahkan Viktor Axelsen dalam pertandingan tiga set yang dramatis.",
    content: `Anthony Sinisuka Ginting berhasil meraih gelar juara Indonesia Open 2024 setelah mengalahkan tunggal putra Denmark, Viktor Axelsen, dengan skor 21-19, 18-21, 21-15.

Pertandingan yang berlangsung di Istora Senayan, Jakarta, ini berlangsung dramatis selama 1 jam 24 menit. Ginting tampil dominan sejak awal dan mampu menahan comeback Axelsen pada set kedua.

"Ini kemenangan yang sangat berarti buat saya, apalagi di hadapan publik Indonesia sendiri," ujar Ginting setelah pertandingan.

Pelatih tunggal putra PBSI, Hendry Winarto, memuji peningkatan performa Ginting. "Anthony menunjukkan mental juara. Dia tidak goyah meski kehilangan set kedua."

Kemenangan ini membuat Ginting naik ke peringkat 3 dunia BWF, menggeser Jonatan Christie. Ini adalah gelar Indonesia Open kedua bagi Ginting setelah pertama kali menjuarai turnamen ini pada 2019.`,
    views: 98000,
    createdAt: "2024-01-09T17:00:00Z",
  },
  {
    id: "8",
    title: "X Spaces Terdeteksi Lagi di Indonesia Setelah Diblokir 2 Minggu",
    slug: "x-spaces-kembali-online-indonesia",
    category: "tech",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    excerpt: "Fitur audio live streaming milik X ini kembali dapat diakses setelah pembahasan antara pemerintah dan perusahaan.",
    content: `Fitur X Spaces kembali dapat diakses oleh pengguna di Indonesia setelah diblokir selama dua minggu oleh Kementerian Komunikasi dan Informatika.

Menteri Kominfo, Budi Arie Setiadi, mengkonfirmasi bahwa pemblokiran telah dicabut setelah manajemen X memenuhi semua persyaratan yang ditetapkan pemerintah Indonesia.

"X sudah berkomitmen untuk mematuhi semua regulasi di Indonesia, termasuk penanganan konten ilegal dan kerja sama dalam penegakan hukum," kata Budi dalam keterangan pers.

Sementara itu, CEO X Linda Yaccarino mengatakan pihaknya senang bisa kembali melayani pengguna Indonesia sepenuhnya. "Indonesia adalah pasar penting bagi kami dan kami berkomitmen untuk memberikan pengalaman terbaik bagi pengguna di sana," tulisnya di X.

Sebelumnya, Spaces diblokir karena ditemukan banyak konten perjudian ilegal yang disebarkan melalui fitur tersebut. Pemerintah juga meminta X untuk membuka kantor perwakilan di Indonesia.`,
    views: 78000,
    createdAt: "2024-01-08T11:45:00Z",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category);
}

export function getTrendingArticles(limit: number = 5): Article[] {
  return [...articles].sort((a, b) => b.views - a.views).slice(0, limit);
}

export function getLatestArticles(limit: number = 10): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

export function formatViews(views: number): string {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  }
  if (views >= 1000) {
    return (views / 1000).toFixed(1) + "K";
  }
  return views.toString();
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("id-ID", options);
}

export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = {
    tahun: 31536000,
    bulan: 2592000,
    minggu: 604800,
    hari: 86400,
    jam: 3600,
    menit: 60,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit} yang lalu`;
    }
  }

  return "baru saja";
}
