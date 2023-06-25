const response = await fetch("https://friends.roblox.com/v1/users/153353260/friends");
const jsonData = await response.json();

var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonData));
});
app.listen(3000);