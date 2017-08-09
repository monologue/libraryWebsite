const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html")
})
app.listen(1025, () => {
		console.log("Server listening")
	})

