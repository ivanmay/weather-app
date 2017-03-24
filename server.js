var express = require('express')

//Create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
  console.log("App is up and running on port 3000")
});
