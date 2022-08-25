const { Telegraf } = require("telegraf");
const TOKEN = "5684345471:AAGzMO7XEor25knqsq4i7xuJR06xy-um2bw";
const bot = new Telegraf(TOKEN);

const web_link = "https://fit-red.vercel.app";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
