const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'crack.restcraft.net',
    username: 'LLLLLL',
    version: '1.20.1',
    checkTimeoutInterval: 60 * 1000
  });

  bot.on('login', () => {
    console.log('Bot logged in successfully!');
  });

  bot.on('spawn', () => {
    console.log('Bot spawned in the world.');
    setTimeout(() => {
      bot.chat('/login MERCI');
    }, 3000);
  });

  bot.on('error', err => {
    console.log('Bot error:', err.message);
  });

  bot.on('end', (reason) => {
    console.log(`Bot disconnected (${reason}), reconnecting in 10s...`);
    setTimeout(createBot, 10000);
  });
}

createBot();
