var CronJob = require('cron').CronJob;
var mailsender = require('./src/gmailApi/auth.js');
console.log('cron Started');
new CronJob("*/20 * * * * *", function() {
  console.log('You will see this message every minute');
  console.log(new Date());
  mailsender.sendBirthdayMail();
}, null, true);