var urlToImage = require('url-to-image');
urlToImage('https://qa-middlelayer.intelligize.net/', 'otros.png',{ width:600, height:600}).then(function() {
    // now google.png exists and contains screenshot of google.com 
}).catch(function(err) {
    console.error(err);
});