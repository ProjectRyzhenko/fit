const { Telegraf } = require("telegraf");
const TOKEN = "5690577020:AAEzc-aCy0e_DL8pMv4aqg0bRPgZFz_tCXU";
const bot = new Telegraf(TOKEN);

const web_link = "https://fit-projectryzhenko.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
