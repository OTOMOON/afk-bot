const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'crack.restcraft.net',
    username: 'LLLLL',
    version: false
  });

  bot.on('login', () => {
    console.log('تم دخول البوت بنجاح!');
  });

  bot.on('spawn', () => {
    setTimeout(() => {
      bot.chat('/login MERCI');
    }, 3000);
  });

  bot.on('end', () => {
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => console.log(err));
}

createBot();
