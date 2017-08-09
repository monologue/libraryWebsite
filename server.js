const express = require("express");
const bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get('/Werkzeug.html', (req, res) => {
	res.sendFile(__dirname + '/Werkzeug.html');

});

app.post("/", (req, res) => {
	//console.log("post")
	console.log(req.body)
})

app.listen(1025, () => {
		console.log("Server listening");
	})

