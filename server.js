const express = require("express");
const bodyParser=require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient
var db

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get('/Werkzeug.ejs', (req, res) => {
	//res.sendFile(__dirname + '/Werkzeug.html');
	db.collection('item').find().toArray(function(err, results){
		if (err) console.log(err)
	
		res.render('Werkzeug.ejs', {items: results}) 
	})

});


app.post("/item", (req, res) => {
	db.collection('item').save(req.body, (err, result) => {
		if (err) return console.log(err)

		console.log('saved to database')
		res.redirect('/Werkzeug.ejs')
	})
	//console.log("post")
	//console.log(req.body)
})


MongoClient.connect('mongodb://localhost:27017/testdatenbank', (err, database) => {
	if (err) return console.log(err)
	db = database
	db.collection('items').find().toArray(function(err, results){
		console.log(results)
	})
	app.listen(1025, () => {
		console.log("Server listening");
	})
})
