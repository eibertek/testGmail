var urlToImage = require('url-to-image');
var fs = require('fs');
fs.stat('./img/birthdays.jpg', function(err,stats){
    if(err) {
        return urlToImage('http://localhost:8080/template/', 'img/birthdays.jpg',
            { width:600, 
              height:600,
              maxTimeout: 1000 * 10,
              verbose: true,
              
            }).then(function() {
        }).catch(function(err) {
            console.error(err);
        });
    }
    fs.unlink('./img/birthdays.jpg', function(err){
        if(err) {
            return console.error(err);
        }   
        return urlToImage('http://localhost:8080/template/', 'img/birthdays.jpg',{ width:600, height:600,maxTimeout: 1000 * 10, verbose: true}).then(function() {
        }).catch(function(err) {
            console.error(err);
        });        
    });
});
