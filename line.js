var linebot = require('linebot');


var bot = linebot({
    channelId: "1483808803",
    channelSecret: "6806afc3ce9cec78e78fa2cabaf8f422",
    channelAccessToken: "CTomejsNZhfC9J7X8GYN5+zIsD3pPSBHXlarps+0LE3AWiAOrNWgnwk7zY2NKNzsI9sVgk4EottOaoBdQMGnrZzFZMQd4P/CwbVIL7PTZ1ab9mL0sehM3yhoXYOLQRvr9R99pXbQk8i2wON/OLRM4QdB04t89/1O/w1cDnyilFU="
});


bot.on('message', function (event) {
    console.log("ENTER");
});

bot.listen('/linewebhook', 8443);

//business-store.line.me
//business.line.me
// console.log("Message:",event.message.text);
switch(event.message.text){
    case "สวัสดีครับ" : event.reply("ว่าไงคะสุดหล่อ").then(function (data) {}).catch(function(error) {});
        break;
    case "ใครหล่อสุดที่ iTopPlus ครับ" : event.reply("ได้ยินมาว่าคุณต้นนะคะ น่าจะหล่อสุด").then(function (data) {}).catch(function(error) {});
        break;
    case "ถามจริง" : event.reply("จริงแท้แน่นอนคร้าาา").then(function (data) {}).catch(function(error) {});
        break;
    case "ผมเชื่อคุณ" : event.reply("แน่นอนคะ Bot โกหกไม่ได้ค่่ะ").then(function (data) {}).catch(function(error) {});
        break;
}