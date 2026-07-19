# Panduan dan Setting Scalping AMY Market Context V4

## 1. Identitas

Panduan ini dibuat untuk file:

`ICT_yang_di_sempurnakan_dashboard_bottom_left_fixed_BACKTEST_WORKING_COPY.pine`

Fokus penggunaan:

- Instrumen utama: **XAUUSD / Gold**
- Gaya: **scalping intraday**
- Chart utama: **M5**
- Struktur konteks: **M15 closed candle**
- Sistem validasi: **non-repaint berbasis candle yang sudah close**

Indikator ini adalah asisten konteks pasar. Sebagian besar informasi seperti struktur, sweep, POI, premium/discount, displacement, dan context score bersifat deskriptif. Informasi tersebut tidak otomatis menjadi sinyal entry.

Hanya tulisan atau marker yang memakai kata **VALIDATED** yang telah melewati filter validasi yang dikunci dari backtest 2020–2025.

---

## 2. Timeframe yang Cocok

### Timeframe utama: M5

M5 adalah timeframe yang paling cocok dan menjadi mode utama indikator karena:

- Validasi Market Context V4 hanya aktif penuh pada chart M5.
- Horizon 1 jam dihitung sebagai 12 candle M5.
- Horizon 4 jam dihitung sebagai 48 candle M5.
- Horizon 8 jam dihitung sebagai 96 candle M5.
- Trigger Confirmation TF bawaan adalah M5.
- Backtest non-repaint 2020–2025 memakai basis candle M5 dengan konteks M15.

### Timeframe konteks: M15

M15 dipakai otomatis oleh indikator untuk membaca:

- Market structure.
- Protected high dan protected low.
- BSL dan SSL.
- Liquidity sweep.
- DOL.
- Dealing range.
- Premium, discount, dan equilibrium.
- Order Block serta FVG utama.
- Level invalidasi struktur.

Tidak perlu mengganti chart ke M15 untuk memperoleh konteks tersebut karena indikator mengambil data M15 secara otomatis.

### Timeframe M1 dan M3

M1 dan M3 hanya cocok untuk melihat detail eksekusi setelah keputusan dibuat pada M5.

Penggunaan yang benar:

1. Pertahankan chart utama dan indikator pada M5.
2. Buka M1 atau M3 hanya untuk melihat bentuk candle, rejection, atau pullback lebih rinci.
3. Jangan menganggap marker atau hasil pada M1/M3 memiliki akurasi backtest yang sama dengan preset M5.

### Timeframe M15, M30, H1, dan lebih tinggi

Timeframe tersebut dapat dipakai untuk observasi visual, tetapi tidak cocok sebagai chart utama preset scalping ini. Sebagian validasi khusus M5 tidak akan aktif dengan cara yang sama.

### Ringkasan timeframe

| Fungsi | Timeframe |
|---|---:|
| Chart utama scalping | M5 |
| Konteks struktur otomatis | M15 |
| Detail eksekusi tambahan | M1 atau M3 |
| Observasi lebih besar | M15 atau H1 |
| Mode validasi utama | M5 saja |

---

## 3. Preset Setting Scalping yang Disarankan

Gunakan nilai berikut tanpa mengubah parameter validasi yang sudah dikunci.

### A. General

| Setting | Nilai |
|---|---:|
| Mode | Present |

### B. Market Structures

| Setting | Nilai |
|---|---:|
| Show Market Structure | ON |
| Length | 5 |
| MSS | ON |
| BOS | ON |

Fungsi:

- MSS membaca perubahan struktur.
- BOS membaca kelanjutan struktur.
- Length 5 cukup responsif untuk scalping tanpa terlalu sensitif terhadap noise.

### C. Displacement

| Setting | Nilai |
|---|---:|
| Show Displacement | ON |

Displacement membantu melihat candle momentum. Displacement tetap bersifat konfirmasi deskriptif, bukan sinyal entry mandiri.

### D. Volume Imbalance

| Setting | Nilai |
|---|---:|
| Show Volume Imbalance | ON |
| Visible VI | 2 |

Dua zona terakhir cukup untuk scalping dan menjaga chart tetap bersih.

### E. Order Blocks

| Setting | Nilai |
|---|---:|
| Show Order Blocks | ON |
| Swing Lookback | 10 |
| Show Last Bullish OB | 1 |
| Show Last Bearish OB | 1 |
| Use Candle Body | ON |
| Show Historical Polarity Changes | OFF |

Gunakan satu OB bullish dan satu OB bearish terbaru agar tidak terjadi penumpukan zona.

### F. Liquidity

| Setting | Nilai |
|---|---:|
| Show Liquidity | ON |
| Margin | 4.0 |
| Visible Liquidity Boxes | 2 |

Margin 4.0 adalah titik tengah yang cukup seimbang untuk XAUUSD M5. Nilai lebih kecil dapat membuat zona terlalu lebar, sedangkan nilai lebih besar dapat membuatnya terlalu sempit.

### G. Fair Value Gaps

| Setting | Nilai |
|---|---:|
| Show FVGs | ON |
| Balance Price Range | OFF |
| Options | FVG |
| Visible FVG | 2 |

Gunakan FVG biasa. BPR dimatikan agar chart scalping tidak terlalu padat.

### H. NWOG / NDOG

| Setting | Nilai |
|---|---:|
| NWOG | OFF |
| NDOG | OFF |

Untuk preset scalping harian, kedua level ini dimatikan agar fokus tetap pada struktur M15, DOL, Asia, PDH/PDL, MO, OB, dan FVG.

### I. Fibonacci

| Setting | Nilai |
|---|---:|
| Fibonacci Between Last | NONE |
| Extend Lines | OFF |

### J. Killzones

| Setting | Nilai |
|---|---:|
| Show Killzones | ON |
| New York | ON |
| London Open | ON |
| London Close | OFF |
| Asian | ON |

Fokus utama scalping adalah saat likuiditas mulai aktif pada London Open dan New York. Asia tetap ditampilkan karena Asia High dan Asia Low dipakai sebagai level penting.

### K. AMY Pivot V2

| Setting | Nilai |
|---|---:|
| Show Pivot Levels | ON |
| Pivot Source TF | D |
| Pivot Display Mode | Clean |
| Show Pivot Price Labels | ON |
| Left Bars | 80 |
| Right Bars | 40 |
| Line Width | 1 |
| Show Level If Near ATR | 2.0 |

Pivot harian paling sesuai untuk scalping intraday. Mode Clean hanya mempertahankan level utama dan level yang dekat dengan harga.

### L. AMY Key Levels V2

| Setting | Nilai |
|---|---:|
| Show Key Levels | ON |
| Show Key Level Labels | ON |
| Left Bars | 80 |
| Right Bars | 40 |
| Line Width | 1 |
| Show Midnight Open | ON |
| Show PDH | ON |
| Show PDL | ON |
| Show BSL | OFF |
| Show SSL | OFF |
| Show Asia High | ON |
| Show Asia Low | ON |
| Midnight Open Timezone | America/New_York |
| BSL / SSL Swing Length | 5 |

BSL dan SSL tetap dihitung oleh sistem meskipun garis visualnya dimatikan. Nilai tersebut tetap muncul pada dashboard dan validasi target.

### M. AMY Dashboard Bias V2

| Setting | Nilai |
|---|---:|
| Show Dashboard | ON |
| Dashboard Position | Bottom Left |
| M15 Protected Swing Length | 3 |
| Sweep Fresh Bars | 16 |
| Near Invalid ATR | 0.35 |
| Displacement Body Mult | 1.20 |
| False Sweep Filter Ticks | 1 |
| POI Min Age | 1 |

Nilai ini harus dipertahankan untuk preset validasi utama.

### N. AMY Assistant V4

| Setting | Nilai |
|---|---:|
| Show Entry Assistant | ON |
| Show Chart Narration | ON |
| Show Assistant Panel | OFF |
| Show Validated Claim Markers | ON |
| Trigger Confirmation TF | 5 |
| Trigger Swing Length | 3 |
| Trigger Displacement Body Mult | 1.0 |
| POI Rejection Wick Mult | 1.25 |
| Chart Note Offset ATR | 0.70 |
| Minimum Score to Show | 40 |

Assistant Panel dimatikan untuk menghemat ruang pada layar ponsel. Dashboard utama dan narasi chart sudah cukup untuk penggunaan harian.

---

## 4. Setting Ringkas untuk Diterapkan

```text
CHART
Timeframe                     = M5

MARKET STRUCTURE
Mode                          = Present
Length                        = 5
MSS                           = ON
BOS                           = ON
Displacement                  = ON

ZONES
Volume Imbalance              = ON, Visible 2
Order Block                   = ON, Lookback 10, Bull 1, Bear 1
Liquidity                     = ON, Margin 4.0, Visible 2
FVG                           = ON, FVG, Visible 2
BPR                           = OFF
NWOG                          = OFF
NDOG                          = OFF
Fibonacci                     = NONE

SESSIONS
Killzones                     = ON
London Open                   = ON
New York                      = ON
London Close                  = OFF
Asian                         = ON

PIVOT
Show Pivot                    = ON
Source TF                     = D
Display Mode                  = Clean
Near ATR                      = 2.0

KEY LEVELS
MO                            = ON
PDH / PDL                     = ON
Asia High / Low               = ON
BSL / SSL visual              = OFF

DASHBOARD
Position                      = Bottom Left
M15 Swing                     = 3
Sweep Fresh                   = 16
Near Invalid ATR              = 0.35
Displacement Mult             = 1.20
False Sweep Filter            = 1 tick
POI Min Age                   = 1 M15 bar

ASSISTANT
Chart Narration               = ON
Assistant Panel               = OFF
Validated Markers             = ON
Trigger TF                    = M5
Trigger Swing                 = 3
Trigger Displacement          = 1.0
Rejection Wick                = 1.25
Minimum Score                 = 40
```

---

## 5. Cara Membaca Dashboard

### RAW STRUCTURE

- `BULL STRUCTURE` berarti struktur M15 sedang bullish.
- `BEAR STRUCTURE` berarti struktur M15 sedang bearish.
- `NO CLEAR STRUCTURE` berarti belum ada struktur yang jelas.

Status ini bersifat deskriptif dan bukan prediksi entry.

### STRUKTUR

Menampilkan struktur M15 terakhir:

- `M15 Bullish`
- `M15 Bearish`
- `M15 Neutral`

### PROTECTED

Menampilkan protected high dan protected low M15.

Pada chart M5 dapat muncul klaim:

- `P-LOW VALID 1H`
- `P-HIGH VALID 1H`

Artinya level protected diperkirakan bertahan selama satu jam sejak event validasi muncul.

### LIQUIDITY

Menampilkan raw BSL dan SSL M15.

- BSL berada di atas harga dan menjadi likuiditas sisi buy.
- SSL berada di bawah harga dan menjadi likuiditas sisi sell.

### SWEEP

- `SSL Swept` berarti likuiditas bawah telah diambil dan harga kembali close di atas level.
- `BSL Swept` berarti likuiditas atas telah diambil dan harga kembali close di bawah level.

Status sweep:

- `Fresh`: masih berada dalam freshness window.
- `Old`: sudah melewati freshness window.
- `Invalid`: close melewati sweep extreme.
- `Expired`: target tidak tercapai sebelum batas waktu.
- `Abandoned`: bias M15 berubah sehingga target lama tidak lagi relevan.

### DOL

DOL adalah Draw on Liquidity.

- `Draw to BSL`: target likuiditas berada di atas.
- `Draw to SSL`: target likuiditas berada di bawah.

Status penting:

- `VALIDATED TARGET`: target lolos filter validasi.
- `OBSERVATION ONLY`: target mentah dan tidak boleh dianggap sebagai prediksi tervalidasi.
- `Reached`: target telah tercapai.
- `Invalid`: close melewati sweep extreme.
- `Expired`: target tidak tercapai dalam freshness window.
- `Abandoned`: bias berubah.

### POI

Jenis POI:

- Bull OB.
- Bear OB.
- Bull FVG.
- Bear FVG.

Status POI:

- `Fresh`: belum disentuh.
- `Active`: sudah ada interaksi.
- `Mitigated`: sudah masuk ke titik tengah zona.
- `Failed`: close telah menembus batas kegagalan.

Prioritas POI:

- `Main`: selaras dengan bias, lokasi, dan DOL aktif.
- `Secondary`: selaras dengan bias tetapi confluence belum lengkap.
- `Ignore`: belum matang, gagal, atau tidak selaras.

POI tetap bukan sinyal entry mandiri.

### POSISI

- Struktur bullish paling sehat saat harga berada di Discount.
- Struktur bearish paling sehat saat harga berada di Premium.
- Buy di Premium ditandai sebagai lokasi buruk.
- Sell di Discount ditandai sebagai lokasi buruk.

### INVALID

- `Valid`: struktur masih aktif.
- `Near Invalid`: harga mendekati level invalidasi.
- `Invalid`: struktur telah gagal.
- `No Bias`: belum ada bias yang aktif.

---

## 6. Arti Marker Validated

| Marker | Arti |
|---|---|
| DOL✓ | Target BSL/SSL lolos validasi |
| RISK✓ | Struktur berisiko invalid atau berubah |
| P-L✓ | Protected Low tervalidasi untuk horizon 1 jam |
| P-H✓ | Protected High tervalidasi untuk horizon 1 jam |
| BSL✓ | BSL M5 menjadi target tervalidasi |
| SSL✓ | SSL M5 menjadi target tervalidasi |
| PDH✓ | PDH menjadi target tervalidasi |
| PDL✓ | PDL menjadi target tervalidasi |
| AH✓ | Asia High menjadi target tervalidasi |
| AL✓ | Asia Low menjadi target tervalidasi |
| MO✓ | Midnight Open menjadi target retest tervalidasi |
| OB✓ | Order Block diperkirakan direvisit |
| FVG✓ | FVG diperkirakan direvisit |
| ENTRY✓ | Simulasi Asia Entry bawaan aktif |
| TP✓ | Target simulasi Asia Entry tercapai |
| SL× | Stop simulasi Asia Entry tersentuh |

---

## 7. Klaim Validasi yang Tertanam dalam Kode

Angka berikut berasal dari backtest yang ditulis langsung dalam file indikator:

| Klaim | Horizon | Angka dalam kode |
|---|---:|---:|
| Validated DOL Target | Freshness DOL | 91.38% |
| Validated Structure Risk | Maksimal 4 jam | 85.55% |
| Asia Target | Maksimal 4 jam | 86.64% |
| PDH/PDL Target | Maksimal 8 jam | 85.64% |
| Midnight Open Retest | Maksimal 4 jam | 86.43% |
| Order Block Revisit | Maksimal 4 jam | 83.91% |
| FVG Revisit | Maksimal 4 jam | 82.37% |
| M5 Liquidity Target | Maksimal 4 jam | 82.43% |
| Protected Low Hold | 1 jam | 93.47% |
| Protected High Hold | 1 jam | 91.86% |
| Asia Entry | Maksimal 4 jam | 84.70% gross |

Angka tersebut tidak menjamin hasil trading berikutnya. Klaim hanya berlaku pada event yang lolos filter `VALIDATED`, bukan seluruh struktur atau seluruh marker visual.

---

## 8. Aturan Penggunaan untuk Scalping

### Filter arah

Gunakan arah M15 sebagai filter, bukan sebagai tombol entry.

#### Kondisi buy yang layak diamati

- Struktur M15 bullish.
- Status invalid masih `Valid`.
- Harga berada di Discount atau mendekati POI bullish.
- Tidak ada `VALIDATED RISK`.
- Terdapat target valid di atas harga.
- M5 menunjukkan rejection, displacement, atau structure break bullish setelah candle close.

#### Kondisi sell yang layak diamati

- Struktur M15 bearish.
- Status invalid masih `Valid`.
- Harga berada di Premium atau mendekati POI bearish.
- Tidak ada `VALIDATED RISK`.
- Terdapat target valid di bawah harga.
- M5 menunjukkan rejection, displacement, atau structure break bearish setelah candle close.

### Filter RR

Sebelum entry, hitung jarak entry ke stop dan target.

- Minimum RR: **1:1.5**.
- RR ideal: **1:2**.
- Jika target terdekat menghasilkan RR di bawah 1:1.5, setup harus dilewati.
- Jangan memindahkan stop lebih dekat hanya untuk memaksakan RR.

### Penempatan invalidasi

Untuk DOL tervalidasi:

- DOL bullish invalid jika candle close di bawah sweep extreme yang dikunci.
- DOL bearish invalid jika candle close di atas sweep extreme yang dikunci.

Untuk struktur M15:

- Gunakan level `INVALID` pada dashboard sebagai batas kegagalan struktur.

Stop aktual harus disesuaikan dengan aturan eksekusi dan ukuran risiko akun. Indikator hanya menyediakan level konteks dan invalidasi struktur.

### Target

Urutan target yang dapat dipakai sebagai referensi:

1. Validated DOL Target.
2. Validated M5 Liquidity Target.
3. Validated Asia High atau Asia Low.
4. Validated PDH atau PDL.
5. Validated Midnight Open Retest.
6. Validated OB atau FVG Revisit.
7. Pivot harian terdekat.

Gunakan target yang berada searah dengan setup dan masih menghasilkan RR minimal 1:1.5.

---

## 9. Setup Operasional M5

### Setup DOL bullish

1. Chart berada di M5.
2. Dashboard menunjukkan struktur M15 bullish dan status `Valid`.
3. Muncul `DOL✓` bullish atau tulisan `VALIDATED TARGET` menuju BSL.
4. Harga tidak berada pada lokasi buruk untuk buy.
5. Tunggu candle M5 close dengan rejection, displacement, atau break bullish.
6. Gunakan sweep extreme atau level struktur sebagai batas invalidasi.
7. Gunakan BSL tervalidasi sebagai target.
8. Entry hanya jika RR minimal 1:1.5.

### Setup DOL bearish

1. Chart berada di M5.
2. Dashboard menunjukkan struktur M15 bearish dan status `Valid`.
3. Muncul `DOL✓` bearish atau tulisan `VALIDATED TARGET` menuju SSL.
4. Harga tidak berada pada lokasi buruk untuk sell.
5. Tunggu candle M5 close dengan rejection, displacement, atau break bearish.
6. Gunakan sweep extreme atau level struktur sebagai batas invalidasi.
7. Gunakan SSL tervalidasi sebagai target.
8. Entry hanya jika RR minimal 1:1.5.

### Setup retest level

Marker `MO✓`, `OB✓`, dan `FVG✓` memprediksi kemungkinan retest level, bukan arah entry otomatis.

- Jika harga berada di atas target retest, konteksnya adalah potensi pergerakan turun menuju level.
- Jika harga berada di bawah target retest, konteksnya adalah potensi pergerakan naik menuju level.
- Entry tetap memerlukan struktur M5 dan perhitungan RR.

---

## 10. Kondisi Wajib Skip

Lewati setup apabila salah satu kondisi berikut terjadi:

- Status struktur `Invalid`.
- Muncul `RISK✓` atau `VALIDATED RISK` berlawanan dengan posisi yang direncanakan.
- DOL hanya bertuliskan `OBSERVATION ONLY`.
- DOL sudah `Reached`, `Invalid`, `Expired`, atau `Abandoned`.
- Buy berada di Premium tanpa pullback yang memadai.
- Sell berada di Discount tanpa pullback yang memadai.
- POI berstatus `Failed`.
- Target sudah disentuh sebelum entry.
- RR di bawah 1:1.5.
- Candle M5 belum close.
- Spread atau slippage membuat RR aktual tidak memenuhi batas minimum.

---

## 11. Catatan Penting tentang Asia Entry

Fitur `VALIDATED ASIA ENTRY` memakai reward:risk tetap **0.20** dalam kode.

Artinya potensi reward hanya 0.20 kali risiko. Nilai tersebut tidak sesuai dengan aturan minimum RR 1:1.5.

Untuk preset scalping dengan minimum RR 1:1.5:

- Jangan mengikuti `ENTRY✓` sebagai entry real secara otomatis.
- Gunakan Asia High dan Asia Low sebagai konteks target atau likuiditas.
- Tetap lakukan perhitungan RR sendiri sebelum entry.

Angka WR 84.70% pada Asia Entry adalah hasil gross sebelum biaya, spread, komisi, dan slippage.

---

## 12. Parameter yang Tidak Boleh Diubah untuk Mode Validated

Jangan mengubah parameter berikut apabila ingin mempertahankan kesesuaian dengan hasil backtest yang tertanam dalam kode:

- Chart utama M5.
- Trigger Confirmation TF M5.
- M15 Protected Swing Length 3.
- Sweep Fresh Bars 16.
- Near Invalid ATR 0.35.
- Displacement Body Mult M15 1.20.
- False Sweep Filter 1 tick.
- POI Min Age 1 M15 bar.
- Trigger Swing Length 3.
- Trigger Displacement Body Mult 1.0.
- POI Rejection Wick Mult 1.25.
- Threshold validasi DOL maksimum 0.75 ATR.
- Minimum direction score DOL 50.
- Threshold risk maksimum 1.50 ATR.
- Seluruh horizon validasi 1 jam, 4 jam, dan 8 jam.

Mengubah timeframe atau parameter tersebut berarti hasilnya tidak lagi identik dengan konfigurasi yang diuji.

---

## 13. Checklist Sebelum Entry

```text
[ ] Chart utama M5
[ ] Candle M5 sudah close
[ ] Struktur M15 jelas
[ ] Status struktur masih Valid
[ ] Tidak ada VALIDATED RISK
[ ] Posisi harga sehat: bullish di Discount / bearish di Premium
[ ] Target masih belum tersentuh
[ ] Marker atau tulisan VALIDATED masih aktif
[ ] Ada konfirmasi rejection, displacement, atau structure break M5
[ ] Stop berada pada invalidasi yang logis
[ ] RR minimal 1:1.5
[ ] Risiko per transaksi sudah sesuai aturan akun
```

---

## 14. Preset Akhir

Preset utama yang paling sesuai untuk indikator ini adalah:

**XAUUSD M5 + konteks otomatis M15 + Trigger M5 + Dashboard Bottom Left + Validated Markers ON + Assistant Panel OFF.**

M1 atau M3 hanya dipakai untuk melihat detail eksekusi. Seluruh keputusan utama tetap dibuat setelah candle M5 close.