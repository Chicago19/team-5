
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


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  userID: ObjectId,
  studentID: String,
  username: String,
  email: String,
  password: String,
  firstname: String,
  lastname: String,
  userType: String
});


const myModel = mongoose.model('userCollection', User);

const instance = new myModel();
instance.email = 'hello';
instance.save(function (err) {
  //
});

myModel.find({}, function (err, docs) {
  // docs.forEach
  console.log(docs);
});

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
  res.send('Hello World')
})


// Start the server

app.listen(5556)
