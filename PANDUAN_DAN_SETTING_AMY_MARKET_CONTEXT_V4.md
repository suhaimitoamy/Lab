# Buku Panduan dan Setting AMY Market Context V4

## 1. Tujuan panduan

Panduan ini berlaku untuk file:

`ICT_yang_di_sempurnakan_dashboard_bottom_left_fixed_BACKTEST_WORKING_COPY.pine`

Versi yang didokumentasikan:

- Pine Script: `//@version=5`
- Blob Pine tervalidasi: `35def9c2178d8ae930d4e9892db423e1af4c0816`
- Instrumen backtest: XAUUSD
- Periode backtest: 1 Januari 2020 sampai 31 Desember 2025
- Timeframe utama: M5
- Konteks struktur: M15 closed candle
- Data 2026 tidak digunakan karena rusak

File Pine asli berikut tetap menjadi cadangan dan tidak boleh ditimpa:

`ICT_yang_di_sempurnakan_dashboard_bottom_left_fixed.pine`

Panduan ini menjelaskan cara memasang indikator, setting yang harus dipertahankan, arti dashboard dan marker, cara menggunakan Assistant, hasil backtest, serta batasan yang harus dipahami.

## 2. Prinsip utama

Indikator memiliki dua jenis informasi yang harus dibedakan:

1. **Validated claim** adalah klaim yang sudah mempunyai definisi, filter, horizon, dan hasil backtest 2020–2025. Status ini ditandai kata `VALIDATED` atau marker dengan tanda `✓`.
2. **Observation/raw context** adalah informasi struktur atau level yang tetap berguna untuk membaca chart, tetapi tidak boleh dianggap prediksi atau sinyal entry. Status ini ditandai `RAW`, `OBS`, `DESKRIPTIF`, atau `OBSERVATION ONLY`.

Raw directional bias tetap dipertahankan sebagai pembaca struktur. Akurasi arah close empat jamnya sekitar 50%, sehingga tulisan `BULL STRUCTURE` atau `BEAR STRUCTURE` tidak boleh dipakai sendirian untuk entry.

## 3. Persiapan chart TradingView

Gunakan konfigurasi berikut sebelum membaca hasil indikator:

| Bagian | Setting yang direkomendasikan |
|---|---|
| Symbol | XAUUSD dari feed yang biasa digunakan |
| Chart timeframe | **5 menit (M5)** |
| Jenis candle | Candlestick biasa |
| Chart timezone | America/New_York agar pembacaan sesi lebih mudah |
| Pine file | Working copy yang disebutkan pada bagian 1 |
| Pine version | Tetap v5 untuk versi tervalidasi ini |

Catatan:

- Logika Midnight Open dan Asia menggunakan zona waktu `America/New_York` di dalam kode. Mengatur chart ke New York tidak wajib untuk perhitungan, tetapi memudahkan pembacaan waktu.
- Jangan memakai Heikin Ashi, Renko, Kagi, Line Break, atau candle sintetis lainnya. OHLC yang berbeda dapat menghasilkan marker berbeda.
- Feed XAUUSD antarbroker dapat mempunyai spread, candle, dan jam perdagangan berbeda. Hasil live dapat berbeda dari dataset backtest.
- Klaim V4 hanya ditujukan untuk chart M5. Pada timeframe lain dashboard dapat tetap terlihat, tetapi status validasinya tidak boleh disamakan dengan hasil M5.

## 4. Preset utama yang direkomendasikan

### 4.1 General dan fitur visual lama

Fitur pada tabel ini terutama berfungsi untuk visual chart. Fitur visual lama tidak termasuk dalam angka akurasi Market Context V4 kecuali disebutkan secara khusus pada bagian validasi.

| Group | Setting | Nilai |
|---|---|---:|
| General | Mode | `Present` |
| Market Structures | Show | Aktif |
| Market Structures | Length | `5` |
| Market Structures | MSS | Aktif |
| Market Structures | BOS | Aktif |
| Displacement | Show Displacement | Nonaktif |
| Volume Imbalance | Show | Aktif |
| Volume Imbalance | Visible VI | `2` |
| Order Blocks | Show Order Blocks | Aktif |
| Order Blocks | Swing Lookback | `10` |
| Order Blocks | Last Bullish OB | `1` |
| Order Blocks | Last Bearish OB | `1` |
| Order Blocks | Use Candle Body | Aktif |
| Order Blocks | Historical Polarity Changes | Nonaktif |
| Liquidity | Show Liquidity | Aktif |
| Liquidity | Margin | `4.0` |
| Liquidity | Visible Liquidity Boxes | `2` |
| Fair Value Gaps | Show FVGs | Aktif |
| Fair Value Gaps | Balance Price Range | Nonaktif |
| Fair Value Gaps | Option | `FVG` |
| Fair Value Gaps | Visible FVG | `2` |
| NWOG/NDOG | NWOG | Aktif, maksimum `3` |
| NWOG/NDOG | NDOG | Nonaktif, maksimum `1` |
| Fibonacci | Source | `NONE` |
| Fibonacci | Extend Lines | Nonaktif |
| Killzones | Show Killzones | Nonaktif untuk tampilan bersih |

Gunakan `Historical` hanya ketika meninjau objek lama. Mode ini dapat membuat chart lebih berat karena lebih banyak objek visual dibuat.

### 4.2 AMY Pivot V2

| Setting | Nilai |
|---|---:|
| Show Pivot Levels | Aktif |
| Pivot Source TF | `D` |
| Pivot Display Mode | `Clean` |
| Show Pivot Price Labels | Aktif |
| Left Bars | `80` |
| Right Bars | `40` |
| Line Width | `1` |
| Show Level If Near ATR | `2.0` |

Pivot R1–R4, S1–S4, dan PIVOT adalah referensi visual. Akurasi Market Context V4 tidak boleh ditempelkan pada seluruh pivot tersebut.

### 4.3 AMY Key Levels V2

| Setting | Nilai |
|---|---:|
| Show Key Levels | Aktif |
| Show Key Level Labels | Aktif |
| Left Bars | `80` |
| Right Bars | `40` |
| Line Width | `1` |
| Show Midnight Open | Aktif |
| Show PDH | Aktif |
| Show PDL | Aktif |
| Show BSL | Nonaktif agar chart bersih |
| Show SSL | Nonaktif agar chart bersih |
| Show Asia High | Aktif |
| Show Asia Low | Aktif |
| Midnight Open Timezone | `America/New_York` |
| BSL / SSL Swing Length | `5` |

BSL/SSL tetap dihitung walaupun garisnya disembunyikan. Aktifkan garis BSL/SSL bila ingin melihat target yang berhubungan dengan marker `BSL✓` atau `SSL✓`.

### 4.4 AMY Dashboard Bias V2 / Market Context V4

Nilai berikut memengaruhi mesin konteks dan harus dipertahankan agar tetap sesuai dengan hasil backtest:

| Setting | Nilai terkunci/rekomendasi |
|---|---:|
| Show Dashboard | Aktif |
| Dashboard Position | `Bottom Left` |
| M15 Protected Swing Length | `3` |
| Sweep Fresh Bars | `16` |
| Near Invalid ATR | `0.35` |
| Displacement Body Mult | `1.20` |
| False Sweep Filter Ticks | `1` |
| POI Min Age (M15 Bars) | `1` |

Posisi dashboard boleh diubah tanpa mengubah logika. Enam nilai perhitungan lainnya jangan diubah jika ingin memakai angka validasi yang tertulis di indikator.

### 4.5 AMY Assistant V4

| Setting | Nilai terkunci/rekomendasi |
|---|---:|
| Show Entry Assistant | Aktif |
| Show Chart Narration | Aktif |
| Show Assistant Panel | Nonaktif untuk penggunaan normal |
| Show Validated Claim Markers | Aktif |
| Trigger Confirmation TF | `5` |
| Trigger Swing Length | `3` |
| Trigger Displacement Body Mult | `1.0` |
| POI Rejection Wick Mult | `1.25` |
| Chart Note Offset ATR | `0.70` |
| Minimum Score to Show | `40` |

Assistant Panel boleh diaktifkan saat belajar atau melakukan pemeriksaan detail. Menampilkan atau menyembunyikan panel dan marker tidak mengubah kalkulasi event.

## 5. Threshold validasi internal

Nilai berikut sengaja tidak dijadikan input yang bebas diubah. Mengubahnya akan membatalkan hubungan antara kode dan hasil backtest:

| Klaim | Aturan terkunci |
|---|---|
| Validated DOL | Jarak target maksimum `0.75 ATR M5`, direction score minimum `50` |
| Validated Risk | Jarak awal ke invalidasi maksimum `1.50 ATR M5` |
| M5 BSL/SSL | Jarak awal maksimum `1.50 ATR M5`, horizon 4 jam |
| PDH/PDL | Jarak awal maksimum `3.00 ATR M5`, horizon 8 jam |
| Asia High/Low | Jarak awal maksimum `2.00 ATR M5`, horizon 4 jam |
| Midnight Open | Departure pertama per hari, horizon retest 4 jam |
| OB/FVG revisit | Jarak awal maksimum `1.50 ATR M5`, horizon 4 jam |
| Validated Asia Entry | Target berjarak `0.35–1.50 ATR M5` |
| Asia Entry reward:risk | `0.20`, berarti jarak risiko lima kali jarak reward |
| Horizon 1 jam | `12` candle M5 |
| Horizon 4 jam | `48` candle M5 |
| Horizon 8 jam | `96` candle M5 |

## 6. Cara membaca dashboard Market Context V4

### RAW STRUCTURE

- `BULL STRUCTURE | DESKRIPTIF`: struktur M15 terakhir bullish.
- `BEAR STRUCTURE | DESKRIPTIF`: struktur M15 terakhir bearish.
- `NO CLEAR STRUCTURE`: belum ada struktur aktif yang jelas.

Baris ini bukan prediksi arah dan bukan sinyal entry.

### STRUKTUR

Menampilkan MSS M15 terakhir: bullish, bearish, atau neutral. MSS sendiri tetap observasi sampai menjadi bagian dari klaim tervalidasi.

### PROTECTED

Menampilkan protected high dan protected low. Status `P-LOW VALID 1H` atau `P-HIGH VALID 1H` adalah klaim bahwa level terkait diperkirakan bertahan satu jam sejak episode struktur baru.

### LIQUIDITY

Menampilkan BSL dan SSL mentah. Tulisan `RAW LEVELS` berarti seluruh level tidak otomatis menjadi target tervalidasi. Hanya event yang lolos filter V4 mendapatkan marker `BSL✓` atau `SSL✓`.

### SWEEP dan SWEEP PRICE

Menampilkan likuiditas yang tersapu, status sweep, harga level yang tersapu, dan ekstrem sweep. Sweep mentah adalah konteks, bukan entry mandiri.

### DOL dan DOL DETAIL

DOL adalah Draw on Liquidity:

- `Draw to BSL`: target likuiditas berada di atas.
- `Draw to SSL`: target likuiditas berada di bawah.
- `VALIDATED TARGET`: DOL baru lolos seluruh filter terkunci.
- `OBSERVATION ONLY`: DOL aktif tetapi tidak lolos filter validasi.
- `Reached`, `Invalid`, `Expired`, atau `Abandoned`: status akhir DOL.

Direction score tidak boleh digunakan sendirian sebagai entry. Status `VALIDATED TARGET` mempunyai prioritas lebih tinggi daripada skor mentah.

### POI

Menampilkan OB atau FVG yang dipilih mesin, status lifecycle, dan prioritas:

- `Fresh`: baru terbentuk.
- `Active`: sudah mendapat interaksi awal.
- `Mitigated`: telah mencapai area tengah/CE sesuai definisi mesin.
- `Failed`: tidak lagi dipakai.
- `Main`: selaras dengan struktur, lokasi, dan DOL aktif.
- `Secondary`: selaras tetapi confluence belum lengkap.
- `Ignore`: belum layak diprioritaskan.

POI pada dashboard tetap berlabel `OBS`. Marker `OB✓` atau `FVG✓` hanya mengklaim probabilitas revisit level, bukan jaminan reversal dan bukan entry langsung.

### POSISI dan RANGE

Menampilkan premium, discount, atau EQ dari dealing range aktif. Interpretasi dasarnya:

- Discount dalam struktur bullish adalah lokasi yang lebih sehat untuk mengamati buy.
- Premium dalam struktur bearish adalah lokasi yang lebih sehat untuk mengamati sell.
- Premium bullish atau discount bearish adalah lokasi kurang ideal untuk mengejar arah struktur.

Lokasi tetap observasi dan harus digabungkan dengan event tervalidasi.

### INVALID

- `Valid`: struktur belum dekat level invalidasi.
- `Near Invalid`: struktur mendekati level invalidasi.
- `Invalid`: struktur sudah batal.
- `No Bias`: tidak ada struktur aktif.

Jika Assistant menampilkan `VALIDATED RISK`, risiko invalidasi atau perubahan struktur dalam empat jam sedang aktif. Jangan membuka entry baru hanya karena raw bias masih berwarna bullish atau bearish.

## 7. Urutan prioritas Assistant V4

Assistant berbicara berdasarkan urutan keselamatan dan kekuatan klaim:

1. `VALIDATED RISK`
2. Hasil atau status `VALIDATED ASIA ENTRY`
3. `VALIDATED TARGET` DOL
4. Validated Asia High/Low target
5. Validated PDH/PDL target
6. Validated Midnight Open retest
7. Validated OB/FVG revisit
8. Validated M5 BSL/SSL target
9. Validated protected level satu jam
10. Rejection, displacement, sweep, POI, raw structure, dan context score sebagai observasi

Tulisan `OBSERVATION ONLY`, `belum tervalidasi`, atau `bukan sinyal entry mandiri` harus dipatuhi. Warna hijau atau merah pada konteks mentah tidak mengubah statusnya menjadi sinyal.

## 8. Arti marker

| Marker | Arti | Bukan berarti |
|---|---|---|
| `DOL✓` | DOL tervalidasi diperkirakan mencapai BSL/SSL terkunci | Entry otomatis |
| `RISK✓` | Struktur berisiko invalid/berubah dalam 4 jam | Wajib entry lawan arah |
| `P-L✓` | Protected Low diperkirakan bertahan 1 jam | Harga pasti langsung naik |
| `P-H✓` | Protected High diperkirakan bertahan 1 jam | Harga pasti langsung turun |
| `BSL✓` | BSL M5 terdekat diperkirakan tercapai dalam 4 jam | Semua BSL akan tercapai |
| `SSL✓` | SSL M5 terdekat diperkirakan tercapai dalam 4 jam | Semua SSL akan tercapai |
| `PDH✓` | PDH terdekat diperkirakan tercapai dalam 8 jam | Entry tanpa stop |
| `PDL✓` | PDL terdekat diperkirakan tercapai dalam 8 jam | Entry tanpa stop |
| `AH✓` | Asia High terdekat diperkirakan tercapai dalam 4 jam | Semua sesi akan bullish |
| `AL✓` | Asia Low terdekat diperkirakan tercapai dalam 4 jam | Semua sesi akan bearish |
| `MO✓` | Midnight Open diperkirakan diretest dalam 4 jam | MO selalu menjadi reversal |
| `OB✓` | OB matang dan dekat diperkirakan direvisit dalam 4 jam | OB pasti menahan harga |
| `FVG✓` | FVG matang dan dekat diperkirakan direvisit dalam 4 jam | FVG pasti memantulkan harga |
| `ENTRY✓` | Simulasi Validated Asia Entry dimulai | Profit live dijamin |
| `TP✓` | Target simulasi Asia Entry tercapai | Tidak ada biaya transaksi |
| `SL×` | Stop simulasi Asia Entry tersentuh | Sistem harus langsung dibalik |

## 9. Alur penggunaan harian

1. Buka XAUUSD pada M5 dengan candle biasa.
2. Pastikan dashboard menunjukkan `M15 CLOSED` dan setting sesuai preset.
3. Baca `RAW STRUCTURE` hanya sebagai kerangka struktur.
4. Periksa `INVALID`. Jika ada `VALIDATED RISK`, utamakan perlindungan risiko dan tunggu struktur baru.
5. Cari status atau marker tervalidasi. Jangan mengubah level target setelah event dimulai.
6. Bedakan target konteks dengan entry. `DOL✓`, `BSL✓`, `SSL✓`, `PDH✓`, `PDL✓`, `AH✓`, `AL✓`, `MO✓`, `OB✓`, dan `FVG✓` bukan entry otomatis.
7. Hanya `ENTRY✓` yang mewakili model entry yang benar-benar disimulasikan dalam V4.
8. Tunggu candle M5 selesai. Jangan mengambil keputusan dari marker yang belum dikonfirmasi close.
9. Setelah target, invalidasi, expiry, abandonment, TP, SL, atau timeout, tunggu event baru. Jangan mengejar harga.
10. Catat perbedaan antara feed live dan harga target untuk evaluasi berkala.

## 10. Validated Asia Entry

Aturan historis model entry:

- Event terjadi pada close candle M5 pukul 00:00 New York setelah Asia range terkunci.
- Target adalah Asia High atau Asia Low terdekat yang belum tersentuh.
- Jarak target harus berada pada 0.35–1.50 ATR M5.
- Entry simulasi memakai close candle event.
- Reward:risk tetap 0.20.
- Timeout setelah 48 candle M5.
- Jika TP dan SL tersentuh pada candle yang sama, hasil dihitung konservatif sebagai SL.

Hasil gross 2020–2025:

- 321 TP dari 379 trade: **84.70%**.
- 48 SL, 9 timeout, dan 1 same-bar loss.
- Net **+12.20R**.
- Mean **+0.032R per trade**.
- Profit factor **1.23**.
- Tahun 2021 sekitar **-0.41R** walaupun win rate 80.70%.

Win rate tinggi tidak menghilangkan kelemahan reward:risk yang rendah. Spread, slippage, komisi, dan variasi fill belum dikurangkan. Gunakan ukuran risiko kecil dan jangan menyamakan hasil gross dengan hasil live.

## 11. Ringkasan hasil backtest

Micro-average seluruh klaim konteks tervalidasi, tidak termasuk simulasi entry, adalah **29,199 benar dari 34,593 klaim atau 84.41%**.

| Komponen tervalidasi | Benar / total | Akurasi |
|---|---:|---:|
| Assistant target + risk | 562 / 649 | 86.59% |
| Validated Target DOL | 106 / 116 | 91.38% |
| Validated Risk | 456 / 533 | 85.55% |
| Protected Low bertahan 1 jam | 2,391 / 2,558 | 93.47% |
| Protected High bertahan 1 jam | 2,335 / 2,542 | 91.86% |
| M5 BSL/SSL tercapai dalam 4 jam | 18,775 / 22,778 | 82.43% |
| PDH/PDL tercapai dalam 8 jam | 340 / 397 | 85.64% |
| Asia High/Low tercapai dalam 4 jam | 551 / 636 | 86.64% |
| Midnight Open diretest dalam 4 jam | 1,612 / 1,865 | 86.43% |
| Order Block direvisit dalam 4 jam | 1,278 / 1,523 | 83.91% |
| FVG direvisit dalam 4 jam | 1,355 / 1,645 | 82.37% |
| Validated Asia Entry | 321 / 379 | 84.70% |

Semua komponen tervalidasi dan hasil tahunannya berada di atas 80% pada data pengujian. Angka 84.41% adalah micro-average berbagai jenis klaim konteks, bukan win rate trading keseluruhan.

## 12. Anti-repaint dan penguncian event

Klaim V4 dirancang dengan aturan berikut:

- Menggunakan candle yang sudah tertutup.
- Konteks M15 dipanggil dengan `lookahead_off`.
- Kualitas klaim diputuskan satu kali pada awal event.
- Event yang awalnya gagal filter tidak boleh menjadi validated hanya karena harga kemudian bergerak lebih dekat.
- Target dan arah dikunci selama event aktif.
- Satu event dihitung satu kali, bukan pada setiap candle selama status bertahan.

Aturan ini berlaku untuk mesin Market Context V4 dan Assistant V4. Fitur visual legacy di bagian awal indikator tidak seluruhnya menjadi bagian dari validasi anti-repaint V4.

## 13. Setting yang boleh dan tidak boleh diubah

### Boleh diubah tanpa mengubah definisi klaim

- Warna.
- Posisi dashboard.
- Show/hide label atau garis visual.
- Show/hide Assistant Panel.
- Show/hide marker, selama pengguna memahami bahwa kalkulasi tetap berjalan.
- Left Bars, Right Bars, dan lebar garis yang hanya mengatur tampilan.

### Jangan diubah jika masih ingin memakai angka backtest

- Chart timeframe M5.
- Trigger Confirmation TF `5`.
- BSL/SSL Swing Length `5`.
- M15 Protected Swing Length `3`.
- Sweep Fresh Bars `16`.
- Near Invalid ATR `0.35`.
- Displacement Body Mult `1.20` pada dashboard.
- POI Min Age `1`.
- Trigger Swing Length `3`.
- Trigger Displacement Body Mult `1.0`.
- POI Rejection Wick Mult `1.25`.
- Seluruh threshold validasi internal pada bagian 5.

Jika salah satu nilai logika diubah, buat file Pine baru, hapus atau ubah label akurasi lama, lalu backtest ulang 2020–2025 dan validasi out-of-sample sebelum menggunakannya.

## 14. Pine v5 dan migrasi v6

Versi tervalidasi saat ini menggunakan Pine v5. Pine v5 tetap dapat digunakan, dan mengganti nomor versi tidak menaikkan akurasi.

Jangan hanya mengganti header menjadi `//@version=6`. Kode mempunyai beberapa pola v5 yang perlu dimigrasikan dengan benar, antara lain numeric-to-bool, boolean `na`, evaluasi lazy `and/or`, serta beberapa perilaku loop dan request.

Jika migrasi v6 diperlukan:

1. Salin working copy menjadi file baru.
2. Jalankan converter Pine Editor.
3. Perbaiki error secara manual tanpa mengubah definisi event.
4. Bandingkan marker v5 dan v6 pada rentang tanggal yang sama.
5. Backtest ulang seluruh Market Context, Assistant, dan Asia Entry.
6. Pertahankan v5 sampai parity v6 terbukti.

Referensi resmi: <https://www.tradingview.com/pine-script-docs/migration-guides/to-pine-version-6/>

## 15. Kesalahan penggunaan yang harus dihindari

- Menganggap `BULL STRUCTURE` sebagai perintah buy.
- Menganggap `BEAR STRUCTURE` sebagai perintah sell.
- Entry hanya karena context score tinggi.
- Entry hanya karena harga menyentuh OB/FVG.
- Menganggap semua BSL/SSL, PDH/PDL, Asia level, atau MO sebagai target tervalidasi.
- Mengubah threshold sampai hasil historis terlihat lebih bagus tanpa validasi baru.
- Menggunakan angka backtest pada timeframe, symbol, atau jenis candle berbeda.
- Mengabaikan spread, slippage, komisi, dan berita berdampak tinggi.
- Menggunakan win rate Asia Entry tanpa memahami reward:risk 0.20.
- Menggunakan data 2026 yang sudah dinyatakan rusak.

## 16. Troubleshooting

### Marker tidak muncul

- Pastikan chart M5.
- Pastikan `Show Entry Assistant` aktif.
- Pastikan `Show Validated Claim Markers` aktif.
- Tidak munculnya marker dapat berarti event tidak lolos filter; jangan menurunkan threshold hanya untuk memunculkan lebih banyak sinyal.

### Dashboard terlalu menutupi chart

- Pindahkan Dashboard Position.
- Nonaktifkan Assistant Panel.
- Gunakan Mode `Present`.
- Sembunyikan BSL/SSL dan objek visual legacy yang tidak diperlukan.

### Harga marker berbeda dengan broker lain

Perbedaan feed, spread, jam buka, dan candle dapat mengubah pivot serta target. Gunakan satu feed secara konsisten dan catat hasil live secara terpisah.

### Hasil live tidak sama dengan win rate backtest

Backtest belum memasukkan biaya transaksi, slippage, kualitas fill, gangguan koneksi, dan perubahan karakter pasar. Hasil historis adalah estimasi, bukan jaminan.

## 17. Checklist singkat sebelum digunakan

- [ ] Menggunakan working copy, bukan file Pine asli.
- [ ] Pine tetap v5.
- [ ] Symbol XAUUSD.
- [ ] Chart M5 dan candle biasa.
- [ ] Setting mesin sama dengan preset panduan.
- [ ] Assistant dan validated markers aktif.
- [ ] Raw structure diperlakukan sebagai deskripsi saja.
- [ ] Hanya status berlabel validated yang dianggap klaim masa depan.
- [ ] Target konteks tidak disamakan dengan entry.
- [ ] Risiko per transaksi sudah dibatasi.
- [ ] Spread, slippage, komisi, dan berita sudah dipertimbangkan.

## 18. Integritas versi

Panduan ini dibuat untuk working copy dengan blob:

`35def9c2178d8ae930d4e9892db423e1af4c0816`

File asli tetap pada blob:

`a478be804abf069a33e9456f5dc0c556f4c4c209`

Jika blob working copy berubah, periksa apakah perubahan hanya visual atau mengubah logika. Setiap perubahan logika harus dianggap versi baru dan harus melalui backtest ulang.

---

**Peringatan:** indikator dan hasil backtest bukan nasihat keuangan dan tidak menjamin keuntungan. Gunakan manajemen risiko dan lakukan verifikasi pada feed serta kondisi trading yang digunakan.
