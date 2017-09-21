var urlToImage = require('url-to-image');
urlToImage('http://localhost:8080/template/', 'otros.jpg',{ width:600, height:600,maxTimeout: 1000 * 10, verbose: true}).then(function() {
   
}).catch(function(err) {
    console.error(err);
});