var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var router = require('./router')(express);

mongoose.connect('mongodb://tester:123456@ds029486.mlab.com:29486/test_mongonode');
//mongoose.connect('mongodb://localhost/test_mongonode');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use('/api', router);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => console.log('Server running on port %s', port));