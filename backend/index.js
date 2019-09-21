const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors());

app.post('/login', function (req, res) {
	console.log(req);
})

app.get('/', function (req, res) {
	console.log(req);
})

app.listen(3001)
