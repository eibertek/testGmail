var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var base64Img = require('base64-img');
var lib = require('./lib.js');

// Load client secrets from a local file.
exports.sendBirthdayMail = function() {
  fs.readFile('src/client_secret.json', function processClientSecrets(err, content) {
    if (err) {
      console.log('Error loading client secret file: ' + err);
      return 'Error loading client secret file: ' + err;
    }
    // Authorize a client with the loaded credentials, then call the
    // Gmail API.
    lib.authorize(JSON.parse(content), sendMail);
  });
  
}

function makeBody(to, from, subject, message, file) {
  var str = [
      "MIME-Version: 1.0\n",
      'Content-Type: multipart/related; boundary="html_email"\r\n',
      "to: ", to, "\n",
      "from: ", from, "\n",
      "subject: ", subject, "\n\n", 
/*      '--foo_bar_baz\r\n',
      "Content-Type: text/plain; charset=UTF-8\n",     
      'MIME-Version: 1.0\r\n',
      "Content-Transfer-Encoding: 7bit\n",      
      'Your email doesnt support html',               */
      '--html_email\r\n',
      "Content-Type: text/html; charset=UTF-8\n",     
      'MIME-Version: 1.0\r\n',
      "Content-Transfer-Encoding: 7bit\n",
      "Content-Disposition: inline\n",      
      message,
      '--html_email\r\n',
//      'Content-Type: image/jpg\r\n',
      'Content-Type: application/octet-stream; name=birthday.jpg\r\n',      
      'MIME-Version: 1.0\r\n',
      'Content-Transfer-Encoding: base64\r\n',
      'Content-ID: <birthday>\r\n',            
      'Content-Disposition: inline; filename="birthday.jpg"\r\n\r\n',
       file.split('base64,')[1], '\r\n\r\n',
       '--html_email--'      
  ].join('');
  var encodedMail = new Buffer(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
  return encodedMail;
}

function attachMent(imgData) {
 return [  
  'Content-Type: multipart/mixed; boundary="foo_bar_baz"\r\n',
  'MIME-Version: 1.0\r\n',
  'From: sender@gmail.com\r\n',
  'To: receiver@gmail.com\r\n',
  'Subject: Subject Text\r\n\r\n',
   
 '--foo_bar_baz\r\n',
 'Content-Type: text/plain; charset="UTF-8"\r\n',
 'MIME-Version: 1.0\r\n',
 'Content-Transfer-Encoding: 7bit\r\n\r\n',

 'The actual message text goes here\r\n\r\n',

 '--foo_bar_baz\r\n',
 'Content-Type: image/jpg\r\n',
 'MIME-Version: 1.0\r\n',
 'Content-Transfer-Encoding: base64\r\n',
 'Content-Disposition: attachment; filename="birthday.jpg"\r\n\r\n',
 imgData, '\r\n\r\n',

  '--foo_bar_baz--'].join('');
}

function sendMail(auth){
  var file = base64Img.base64Sync('./img/birthdays.jpg');
  var gmail = google.gmail('v1');  
  var messBody = '<html><head><meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"></head><body>Feliz cumpleaños a todos <b> Intive-fdv </b> <img src=\"cid:birthdays\">IMG</img></body></html> \r\n\r\n';      
  // <html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body>Take a look at this image:<br><br></html><IMG src="cid:blabla.pngPlusUniqueHash"></body>
  var raw = makeBody('mariano.eiberman@intive-fdv.com', 'pcd-fake@intive-fdv.com', 'Hoy cumplen anios!!', messBody, file);
    gmail.users.messages.send({
          auth: auth,
          userId: 'me',
          uploadType: 'multipart',
          resource: {
              raw: raw
          }
      }, function(err, response) {
       console.log('data',err, response);
      });    
}