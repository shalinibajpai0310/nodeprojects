var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(express.static(__dirname + "/public"));
console.log(__dirname);
app.get('/contactlist',function(req, res){
	console.log("Received get request");
   db.contactlist.find(function(err,docs){
   		res.json(docs);
   });
});

app.post('/contactlist',function (req,res) {
    console.log(req.body);
    db.contactList.insert(req.body,function (err,docs) {
        console.log("Inserted ",docs);
        console.log("error ",err);
        res.json(docs);
    });

});
app.listen(8000);
console.log("server running on 8000");