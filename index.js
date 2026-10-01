const mineflayer = require('mineflayer');
const { SocksProxyAgent } = require('socks-proxy-agent');

// بيانات البروكسي الخاصة بك من Webshare
const PROXY_HOST = '45.38.107.97';
const PROXY_PORT = 6014;
const PROXY_USER = 'qaecbwyu';
const PROXY_PASS = 'ppgniaqlqbtv';

const proxyUrl = `socks5://${PROXY_USER}:${PROXY_PASS}@${PROXY_HOST}:${PROXY_PORT}`;
const agent = new SocksProxyAgent(proxyUrl);

function createBot() {
  const bot = mineflayer.createBot({
    host: 'crack.restcraft.net',
    port: 25565,
    username: 'LLLLLL',
    version: false,
    agent: agent,
    checkTimeoutInterval: 60 * 1000
  });

  bot.on('login', () => {
    console.log('Bot logged in via Proxy successfully!');
  });

  bot.on('spawn', () => {
    console.log('Bot spawned in the world.');
    setTimeout(() => {
      bot.chat('/login MERCI');
    }, 4000);
  });

  bot.on('error', err => {
    console.log('Proxy/Bot error:', err.message);
  });

  bot.on('end', (reason) => {
    console.log(`Disconnected (${reason}), retrying in 15s...`);
    setTimeout(createBot, 15000);
  });
}

createBot();
