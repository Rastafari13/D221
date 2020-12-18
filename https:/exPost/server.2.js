var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
app.use(bodyParser.json(), bodyParser.urlencoded({
    extended: true
}));
app.get('/', function(req, res) {
    console.log("GET / index.html");
    var html = fs.readFileSync('./views/index.html');
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(html);
});
app.post('/save', function(req, res) {
    var name = req.body.name;
    console.log('POST / ');
    res.send('Thanks ' + name);
});
app.listen(port);
