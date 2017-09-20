var urlToImage = require('url-to-image');
urlToImage('http://localhost:8080/', 'otros.png',{ width:600, height:600,maxTimeout: 1000 * 10, verbose: true}).then(function() {
    // now google.png exists and contains screenshot of google.com 
}).catch(function(err) {
    console.error(err);
});