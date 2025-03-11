const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Kerakli tashabbus sahifasining URL manzili
const tashabbusURL =
  "https://openbudget.uz/boards/initiatives/initiative/50/d58cb651-8aa4-42e3-a052-8cc2b7eae16a";

// Foydalanuvchi botni ishga tushirganda "Ovoz berish" tugmasini chiqarish
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    reply_markup: {
      inline_keyboard: [[{ text: "🗳 Ovoz berish", url: tashabbusURL }]],
    },
  };

  bot.sendMessage(
    chatId,
    "23-maktabga ovoz berish uchun quyidagi tugmani bosing:",
    opts
  );
});

console.log("Bot ishga tushdi...");

app.listen(prototype, () => {
  console.log("Server is running on the port" + PORT);
});
