const fs = require('node:fs/promises');
const path = require('node:path');
const input = require('input');
const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
require('dotenv').config();

const apiId = Number(process.env.TELEGRAM_API_ID || 0);
const apiHash = process.env.TELEGRAM_API_HASH || '';
const savedSession = process.env.TELEGRAM_SESSION || '';
const channel = process.env.TELEGRAM_CHANNEL || '';
const limit = Number(process.env.LIMIT || 20);
const downloadDir = process.env.DOWNLOAD_DIR || 'downloads';
const shouldDownload = process.argv.includes('--download');

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

async function main() {
  if (!apiId || !apiHash || !channel) {
    console.log('Isi dulu TELEGRAM_API_ID, TELEGRAM_API_HASH, dan TELEGRAM_CHANNEL di file .env');
    process.exit(1);
  }

  const client = new TelegramClient(new StringSession(savedSession), apiId, apiHash, {
    connectionRetries: 5
  });

  await client.start({
    phoneNumber: async () => input.text('Nomor Telegram (+62...): '),
    password: async () => input.text('Password 2FA jika ada, kalau tidak ada tekan Enter: '),
    phoneCode: async () => input.text('Kode OTP Telegram: '),
    onError: (error) => console.error(error)
  });

  const sessionString = client.session.save();
  if (!savedSession) {
    console.log('\nSimpan session ini ke TELEGRAM_SESSION di file .env agar login tidak diulang:\n');
    console.log(sessionString);
    console.log('');
  }

  const entity = await client.getEntity(channel);
  const messages = await client.getMessages(entity, { limit });
  const videos = messages.filter(isVideoMessage);

  console.log(`Channel: ${channel}`);
  console.log(`Video ditemukan: ${videos.length}\n`);

  for (const message of videos) {
    const info = getVideoInfo(message);
    console.log(`ID       : ${message.id}`);
    console.log(`Tanggal  : ${message.date}`);
    console.log(`File     : ${info.fileName}`);
    console.log(`Mime     : ${info.mimeType}`);
    console.log(`Ukuran   : ${formatBytes(info.size)}`);
    console.log(`Caption  : ${(message.message || '').slice(0, 120) || '-'}`);

    if (shouldDownload) {
      await fs.mkdir(downloadDir, { recursive: true });
      const safeName = sanitizeFileName(`${message.id}-${info.fileName}`);
      const outputPath = path.join(downloadDir, safeName);
      console.log(`Download : ${outputPath}`);
      await client.downloadMedia(message, { outputFile: outputPath });
    }

    console.log('---');
  }

  await client.disconnect();
}

function isVideoMessage(message) {
  const mimeType = message?.media?.document?.mimeType || '';
  return mimeType.startsWith('video/');
}

function getVideoInfo(message) {
  const document = message.media.document;
  const mimeType = document.mimeType || 'video/mp4';
  const size = Number(document.size || 0);
  const fileNameAttr = document.attributes?.find((attr) => attr.fileName);
  const extension = mimeType.split('/')[1] || 'mp4';

  return {
    mimeType,
    size,
    fileName: fileNameAttr?.fileName || `telegram-video-${message.id}.${extension}`
  };
}

function formatBytes(bytes) {
  if (!bytes) return '-';
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(value >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function sanitizeFileName(name) {
  return name.replace(/[\\/:*?"<>|]/g, '_');
}
