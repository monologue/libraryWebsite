const express = require("express");
const bodyParser=require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient
var db

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get('/Werkzeug.html', (req, res) => {
	res.sendFile(__dirname + '/Werkzeug.html');

});

app.post("/item", (req, res) => {
	db.collection('item').save(req.body, (err, result) => {
		if (err) return console.log(err)

		console.log('saved to database')
		res.redirect('/Werkzeug.html')
	})
	//console.log("post")
	//console.log(req.body)
})


MongoClient.connect('mongodb://localhost:27017/testdatenbank', (err, database) => {
	if (err) return console.log(err)
	db = database
	app.listen(1025, () => {
		console.log("Server listening");
	})
})
