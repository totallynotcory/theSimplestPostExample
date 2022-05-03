var express = require('express')
var app = express()

const names = ['Cory']
app.get('/', function (req, res) {
  res.send(names)
})

app.post('/', function (req, res) {
  names.push(req.query.name)
  res.send('You just called the post method!\n')
})

app.listen(3000)
