const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'crack.restcraft.net',
    port: 25565,
    username: 'LLLLLL',
    version: false,
    checkTimeoutInterval: 30 * 1000,
    hideErrors: true
  });

  bot.on('login', () => {
    console.log('Bot logged in successfully!');
  });

  bot.on('spawn', () => {
    console.log('Bot spawned in the world.');
    setTimeout(() => {
      bot.chat('/login MERCI');
    }, 4000);
  });

  bot.on('error', err => {
    console.log('Connection note:', err.message);
  });

  bot.on('end', (reason) => {
    console.log(`Disconnected (${reason}), retrying in 15s...`);
    setTimeout(createBot, 15000);
  });
}

createBot();
