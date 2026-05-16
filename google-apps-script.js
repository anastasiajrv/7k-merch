// Google Apps Script — вставь этот код в редактор на script.google.com
// После вставки: Развернуть → Управление развёртываниями → обновить версию

const TELEGRAM_BOT_TOKEN = '8685610519:AAGlNvOxsRSVCgick7m1ytMbVM3og9lzB1s';
const TELEGRAM_CHAT_ID   = '-1003728407790';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Сохранить в таблицу (если есть)
    saveToSheet(data);

    // Отправить в Telegram
    sendTelegram(data);

  } catch (err) {
    Logger.log('Error: ' + err);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendTelegram(data) {
  const genderLine = data.gender ? '\nПол: ' + data.gender : '';
  const text =
    '🛒 Новый заказ!\n\n' +
    '📦 Товар: ' + data.product + '\n' +
    '🎨 Цвет: ' + data.color +
    genderLine +
    '\n📏 Размер: ' + data.size + '\n' +
    '💰 Цена: ' + data.price + '\n\n' +
    '👤 Покупатель:\n' +
    'Имя: ' + data.name + '\n' +
    '📱 Телефон: ' + data.phone + '\n' +
    '✈️ Telegram: ' + data.telegram;

  UrlFetchApp.fetch(
    'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage',
    {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: text }),
      muteHttpExceptions: true,
    }
  );
}

function saveToSheet(data) {
  // Если хочешь сохранять заказы в Google Sheets — вставь ID таблицы сюда:
  // const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
  // sheet.appendRow([new Date(), data.product, data.color, data.gender, data.size, data.price, data.name, data.phone, data.telegram]);
}
