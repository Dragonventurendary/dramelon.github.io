async function logJSONData() {
    const response = await fetch("https://friends.roblox.com/v1/users/153353260/friends");
    const jsonData = await response.json();
    return jsonData;
}

const express = require('express');
const app = express();
  
// Defining get request at '/' route
app.get('/', function(req, res) {
    res.json(logJSONData);
});