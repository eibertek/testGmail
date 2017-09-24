var CronJob = require('cron').CronJob;
var fetch = require('isomorphic-fetch');
var moment = require('moment');
var mailsender = require('./src/gmailApi/auth.js');
var createImage = require('./imgtourl.js');
const cronBirthdays = (callback) => {
  fetch('http://localhost:3000/employees')
  .then(function(response){
      return response.json();
  })
  .then(function(json){
    let today = new moment();  
      const employees = json.filter((employee)=>{
        const birthday = moment(employee.birthday, 'DD/MM/YYYY');
        return (birthday.date() === today.date() && birthday.month() === today.month());
      });
      if( employees.length>0){
        createImage(callback);
        return console.log('Sent...');
      }
  });
}
cronBirthdays(mailsender.sendBirthdayMail);
//mailsender.sendBirthdayMail();
/**
 * 
 */
//new CronJob("*/20 * * * * *", function() {
//  console.log('You will see this message every minute');
//  cronBirthdays();
  //mailsender.sendBirthdayMail();
//}, null, true);


