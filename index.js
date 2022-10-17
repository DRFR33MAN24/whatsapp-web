const qrcode = require("qrcode-terminal");

const { Client, NoAuth, LocalAuth } = require("whatsapp-web.js");
const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
  client.sendMessage(chatId, text).then(() => console.log("sent"));
});

client.on("message", (message) => {
  if (message.body === "!ping") {
    message.reply("pong");
  }
});

// Number where you want to send the message.
const number = "+963935950280";

// Your message.
const text = "Hey john";

// Getting chatId from the number.
// we have to delete "+" from the beginning and add "@c.us" at the end of the number.
const chatId = number.substring(1) + "@c.us";

// Sending message.
client.initialize();
