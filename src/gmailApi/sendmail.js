var fs = require('fs');
var readline = require('readline');
//var google = require('googleapis');
//var googleAuth = require('google-auth-library');
var base64Img = require('base64-img');
const nodemailer = require('nodemailer');
var lib = require('./lib.js');
exports.sendBirthdayMail = function() {
  var TOKEN_DIR = __dirname + '/.credentials/';
  var TOKEN_PATH = TOKEN_DIR + 'gmail-nodejs.json';    
//  var file = base64Img.base64Sync('./img/birthdays.jpg');
var auth = function(){
  fs.readFile(TOKEN_PATH, function processClientSecrets(err, content) {
    if (err) {
      console.log('Error loading client secret file: ' + err);
      return 'Error loading client secret file: ' + err;
    }
    // Authorize a client with the loaded credentials, then call the
    // Gmail API.
    var authData = JSON.parse(content);
    sendMail(authData);      
  });    
}
  var sendMail = function(auth){
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: auth.username,
        pass: auth.password        
      }
    });    
    var status = transporter.sendMail({
      from: 'mariano.eiberman@intive-fdv.com',
      to: 'mariano.eiberman@intive-fdv.com',
      subject: 'Message',
      text: 'Los cumpleaños del dia',
      html: '<h1>Cumpleanos: </h1><br/><img src="cid:birthdaymailattachment"/>',
      attachments: [{
          filename: 'birthdays.jpg',
          path: './img/birthdays.jpg',
          cid: 'birthdaymailattachment' //same cid value as in the html img src
      }]
    }, function(err, status){
      if (err) return console.log('Hubo un error al intentar enviar el mail', err);
      return console.log('Mail Enviado!!', status);
    });
  }
  auth();
}

