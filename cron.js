var CronJob = require('cron').CronJob;
console.log('cron Started');
new CronJob("*/20 * * * * *", function() {
  console.log('You will see this message every second');
  console.log(new Date());
}, null, true);