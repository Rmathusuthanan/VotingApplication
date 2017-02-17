var express = require('express');
var app = express();
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var db = mongojs('contactlist', ['contactlist']);

/*
app.get('/', function (req, res) {

    res.send("Hello World form Server.js")

});*/

app.use(express.static(__dirname + '/votingApplication'));
app.use(bodyParser.json());
app.get('/votingapp/votingdata', function (req, res) {
    console.log("Value from Server get method");
    db.contactlist.find(function (err, docs) {
        console.log(docs);
        res.json(docs)

    })

});

app.post('/votingapp/votingdata', function (req, res) {
    console.log(req.body);
    db.contactlist.insert(req.body, function (err, docs) {

        res.json(docs)

    })

});
app.delete('/votingapp/votingdata/:id', function (req, res) {

    var id = req.params.id;
    console.log(id);
    db.contactlist.remove({ _id: mongojs.ObjectId(id) }, function (err, docs) {
        res.json(docs)


    })
});

app.get('/votingapp/votingdata/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({ _id: mongojs.ObjectId(id) }, function (err, docs) {
        res.json(docs)

    })
});
app.put('/votingapp/votingdata/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.body.name);
    db.contactlist.findAndModify({
        query: { _id: mongojs.ObjectId(id) },
        update: { $set: { name: req.body.name, emai: req.body.email, number: req.body.number } },
        new: true
    }, function (err, docs) {
        res.json(docs)
    });

});

app.listen(3000);

console.log("Server Running port number 3000");