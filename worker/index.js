const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function gs(index) {

  let an;
  an = 1 * Math.pow(2,index - 1);
  return an;

  
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, gs(parseInt(message)));
});
sub.subscribe('insert');
