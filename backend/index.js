const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()


app.use(bodyParser.json())
app.use(cors());
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
  email: String,
  password: String,
  name: String,
  userType: String,
  score: Number
	age: Number
});




app.post('/login', function (req, res) {
	loginJson = req.body;
	email = loginJson["email"];
	// TODO: THIS IS STORED IN PLAIN TEXT. NEEDS TO BE HASHED.
	password = loginJson["password"];
	const myModel = mongoose.model('usercollection', User);
	myModel.find({email: email}, function (err, docs) {
		if(docs.length != 0)
		{
			if (docs[0].password == this.password)
			{
				res.send({status: "OK"})
			}
			else{
				res.send({status: "ERR"})
			}
		}
		else
		{
			res.send({status: "ERR"})
		}
	});

})




app.post('/registration', function (req, res) {
	loginJson = req.body;
	email = loginJson["email"];

	// TODO: THIS IS STORED IN PLAIN TEXT. NEEDS TO BE HASHED.
	password = loginJson["password"];
	const myModel = mongoose.model('usercollection', User);
  var instance = new myModel();
  instance.userID = ObjectId;
  instance.studentID = null;
  instance.username = username;
  instance.email = email;
  instance.password = password;
  instance.name = loginJson['name'];
	instance.age = loginJson['age'];
  instance.userType = 'stu'
  instance.save(function (err) {
    //
  });


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
  res.send()
})


// Start the server

app.listen(3005)
