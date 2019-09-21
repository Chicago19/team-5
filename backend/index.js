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

app.post('/register', function (req, res) {
	loginJson = req.body;
	username = loginJson["username"];

	// TODO: THIS IS STORED IN PLAIN TEXT. NEEDS TO BE HASHED.
	password = loginJson["password"];

	
})

app.post('/score', function(req, res){
	scoreJson = req.body;
	score = scoreJson["score"];
	if(score<2)
	{
		res.json({"level" : "basic"})
	}
	else if(score<4)
	{
		res.json({"level" : "level 1"})
	}
	else if(score<6)
	{
		res.json({"level" : "level 2"})
	}
	else if(score<8)
	{
		res.json({"level" : "level 3"})
	}
	else{
		res.json({"level" : "level 4"})
	}
	

})
app.get('/', function (req, res) {
	console.log(req);
})

app.listen(3001)
