# Lab

Tes sederhana membaca video dari channel Telegram pribadi memakai Telegram Client API.

## Cara pakai

```bash
npm install
cp .env.example .env
```

Isi `.env`:

```env
TELEGRAM_API_ID=123456
TELEGRAM_API_HASH=isi_api_hash_kamu
TELEGRAM_SESSION=
TELEGRAM_CHANNEL=@username_channel_atau_id_channel
LIMIT=20
DOWNLOAD_DIR=downloads
```

Jalankan untuk melihat daftar video:

```bash
npm run list
```

Jalankan untuk download video:

```bash
npm run download
```

Saat login pertama, aplikasi akan meminta nomor Telegram dan kode OTP. Setelah berhasil login, salin session yang muncul ke `TELEGRAM_SESSION` di file `.env`.
