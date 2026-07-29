/**
 * とおまち夏花火ナイト｜有料観覧席予約システム
 * Google Apps Script Web App + スプレッドシート台帳
 *
 * 【仕組み】
 * ・このスクリプトを紐づけたGoogleスプレッドシートが予約台帳になります
 * ・Webアプリとして公開したURLにアクセスすると予約フォームが表示されます
 * ・送信されると「予約データ」シートに1行追加され、定員チェック後にメールを送信します
 */

// ===================== 設定（必要に応じて変更してください） =====================
const SHEET_NAME = '予約データ';
const CAPACITY = 200;                              // 有料観覧席の定員（先着予約の上限人数）
const ORGANIZER_EMAIL = 'natsukingstone@gmail.com'; // 運営側の通知受信メールアドレス
const EVENT_NAME = 'とおまち夏花火ナイト';
const EVENT_DATE_TEXT = '8月中旬の土曜（詳細日程は公式LINEでご案内）';
const SEAT_PRICE = 1500; // 円（税込）／1名
// ================================================================================

function doGet(e) {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle(EVENT_NAME + '｜観覧席予約')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/** HTML内で <?!= include('xxx'); ?> として他ファイルを読み込む用（今回は未使用だが拡張用に用意） */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['タイムスタンプ', '予約番号', '氏名', '人数', 'メールアドレス', '電話番号', '備考', 'ステータス']);
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, 8, 150);
  }
  return sheet;
}

/** 現在「受付」ステータスの予約人数の合計を返す */
function getReservedCount_(sheet) {
  const data = sheet.getDataRange().getValues();
  let total = 0;
  for (let i = 1; i < data.length; i++) {
    const count = Number(data[i][3]) || 0;
    const status = data[i][7];
    if (status === '受付') total += count;
  }
  return total;
}

/** フォーム表示時に残席数を取得するために呼ばれる（google.script.run経由） */
function getAvailability() {
  const sheet = getSheet_();
  const reserved = getReservedCount_(sheet);
  const remaining = Math.max(CAPACITY - reserved, 0);
  return {
    capacity: CAPACITY,
    reserved: reserved,
    remaining: remaining,
    isFull: remaining <= 0,
    price: SEAT_PRICE,
    eventDateText: EVENT_DATE_TEXT
  };
}

/** 予約番号を生成（例: TM-260812-0007） */
function generateReservationId_(sheet) {
  const now = new Date();
  const datePart = Utilities.formatDate(now, 'Asia/Tokyo', 'yyMMdd');
  const seq = String(sheet.getLastRow()).padStart(4, '0');
  return 'TM-' + datePart + '-' + seq;
}

/**
 * フォーム送信時に呼ばれるメイン処理
 * @param {Object} form { name, count, email, tel, note }
 */
function submitReservation(form) {
  const name = (form.name || '').trim();
  const count = parseInt(form.count, 10);
  const email = (form.email || '').trim();
  const tel = (form.tel || '').trim();
  const note = (form.note || '').trim();

  // ---- 入力チェック ----
  if (!name) throw new Error('お名前を入力してください。');
  if (!count || count < 1 || count > 10) throw new Error('人数は1〜10名の範囲で入力してください。');
  if (!email && !tel) throw new Error('メールアドレスまたは電話番号のいずれかを入力してください。');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('メールアドレスの形式が正しくありません。');

  // ---- 排他制御（同時アクセスで定員を超えて受付してしまうのを防ぐ）----
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const sheet = getSheet_();
    const reserved = getReservedCount_(sheet);

    if (reserved + count > CAPACITY) {
      const remaining = Math.max(CAPACITY - reserved, 0);
      throw new Error(
        remaining > 0
          ? `申し訳ございません。残り${remaining}名分のため、${count}名でのご予約はできません。人数を減らして再度お試しください。`
          : '申し訳ございません。有料観覧席は満席になりました。'
      );
    }

    const reservationId = generateReservationId_(sheet);
    sheet.appendRow([new Date(), reservationId, name, count, email, tel, note, '受付']);

    if (email) {
      sendConfirmationEmail_(reservationId, name, count, email);
    }
    sendOrganizerNotification_(reservationId, name, count, email, tel, note);

    return {
      success: true,
      reservationId: reservationId,
      remaining: Math.max(CAPACITY - (reserved + count), 0)
    };
  } finally {
    lock.releaseLock();
  }
}

function sendConfirmationEmail_(reservationId, name, count, email) {
  const subject = `【${EVENT_NAME}】観覧席予約を受け付けました（予約番号: ${reservationId}）`;
  const body =
`${name} 様

${EVENT_NAME}の有料観覧席予約を受け付けました。
当日、灯りの下でお待ちしています。

――――――――――――――
予約番号：${reservationId}
人数　　：${count}名
料金　　：${SEAT_PRICE.toLocaleString('ja-JP')}円（税込）／1名　※当日会場にてお支払いください
開催日　：${EVENT_DATE_TEXT}
――――――――――――――

キャンセルをご希望の場合は、前日17時までに本メールへご返信のうえ、予約番号をお知らせください。

${EVENT_NAME} 実行委員会
`;
  MailApp.sendEmail(email, subject, body);
}

function sendOrganizerNotification_(reservationId, name, count, email, tel, note) {
  const subject = `[新規予約] ${reservationId} ${name}様 ${count}名`;
  const body =
`新しい観覧席予約が入りました。

予約番号：${reservationId}
氏名　　：${name}
人数　　：${count}名
メール　：${email || '（未入力）'}
電話　　：${tel || '（未入力）'}
備考　　：${note || '（なし）'}
`;
  MailApp.sendEmail(ORGANIZER_EMAIL, subject, body);
}
