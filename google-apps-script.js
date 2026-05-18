const TELEGRAM_BOT_TOKEN = '8685610519:AAGlNvOxsRSVCgick7m1ytMbVM3og9lzB1s';
const TELEGRAM_CHAT_ID   = '-1003728407790';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const sheet = SpreadsheetApp
      .openById('1xB6YHPT6Tjef9RYbruzwfzAwYpZH5egC62BQsKAYcDs')
      .getActiveSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Дата', 'Товар', 'Цвет', 'Пол', 'Размер', 'Рост', 'Цена', 'Имя', 'Телефон', 'Telegram', 'Адрес СДЭК']);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.product   || '',
      data.color     || '',
      data.gender    || '',
      data.size      || '',
      data.height    || '',
      data.price     || '',
      data.name      || '',
      data.phone     || '',
      data.telegram  || '',
      data.address   || '',
    ]);

    sendTelegram(data);

  } catch (err) {
    Logger.log('Error: ' + err);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
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
    '✈️ Telegram: ' + data.telegram + '\n' +
    '📍 СДЭК: ' + (data.address || '—');

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
