const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'crack.restcraft.net',
    username: 'LLLLLL',
    version: false
  });

  bot.on('login', () => {
    console.log('Bot logged in successfully!');
  });

  bot.on('spawn', () => {
    console.log('Bot spawned in the world.');
    setTimeout(() => {
      bot.chat('/login MERCI');
    }, 2000);
  });

  bot.on('error', err => {
    console.log('Bot error:', err);
  });

  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting in 5 seconds...');
    setTimeout(createBot, 5000);
  });
}

createBot();
