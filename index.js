var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.get("/", function(req, res) {
    res.redirect("index.html")
})
app.post("/", function(req, res) {
    var fahrenheit = req.body.fahrenheit
    var celsius = (5.0/9.0) * (fahrenheit - 32)
    var result = fahrenheit + " fahrenheit is " + celsius + " celsius" 
    res.send("<h1>" + result + "</h1>")
})
app.listen(3000, function() {
    console.log('Express running on port 3000')
})
