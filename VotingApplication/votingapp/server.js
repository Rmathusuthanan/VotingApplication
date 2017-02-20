/**
 * Created by Mathu on 2/16/2017.
 */
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var db = mongojs('votingapp', ['votingapp']);
/*
 app.get('/', function (req, res) {

 res.send("Hello World form Server.js")

 });*/

app.use(express.static(__dirname + '/votingapp'));
app.use(bodyParser.json());

app.get('/votingapp', function (req, res) {
    console.log("Value from Server get method");
    db.votingapp.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.get('/votingapp/:voteId', function (req, res) {
    console.log("Value from Server getbyid method");
    var id = req.params.id;
    console.log(id);
    db.votingapp.findOne({ _id: mongojs.ObjectId(voteId) }, function (err, docs) {
        res.json(docs);
    });
});

app.listen(4000);
console.log("Server Running port number 4000");
//# sourceMappingURL=server.js.map