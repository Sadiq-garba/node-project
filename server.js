const express = require('express');
//const res = require('express/lib/response');
const app = express();
//const server = require('http').Server(app)
//const io = require('socket.io')(server)
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res) {

    res.render("main/index");

});






app.listen(3000)