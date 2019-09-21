const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(cors());

app.post('/login', function (req, res) {
	loginJson = req.body;
	username = loginJson["username"];

	// TODO: THIS IS STORED IN PLAIN TEXT. NEEDS TO BE HASHED.
	password = loginJson["password"];

	res.json({"type" : "teacher"})
})

app.get('/', function (req, res) {
	console.log(req);
})

app.listen(3001)
