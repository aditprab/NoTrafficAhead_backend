//set variables for environment
var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var server = http.createServer(app);
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }));

app.all('/*', function(req, res, next) {
  //Allow cross origin resource sharing to allow ajax calls to localhost. 
  res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
  next();
});

//Set server port
server.listen(2000);

server.listen(app.get('port'), function () {
    console.log('Express server running, listening on port ' + server.address().port);
});

mongoose.connect('mongodb://nta_admin_user:Avo-R2V-rK4-79e@ds031872.mongolab.com:31872/nta_resource_guide');

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected.');
});


app.post('/newResource', function(request, response){
	//Posts new resource to the TEMPORARY database for approval by admin.
	//No auth requirements here.
	console.log("POST /newResource called.");


	var ResourceModel = require("./models/schema.js").newResource;
	var guideEntry = new ResourceModel();
	
 	console.log(request.body);


	guideEntry.resourceBody = request.body.resourceBody;

	
	guideEntry.save(function(err) {
		if(err) {
			console.log("an error occurred");
			response.send('failure');
			return;
		}
	       console.log("New Resource CREATED");
	       console.log(guideEntry.resourceBody);
	});
	response.send('success');
	return;
});

app.get('/resourcesToApprove', function(request, response){
	//Gets all resources in temporary database. Returns JSON array.
	console.log("GET /resourcesToApprove");
	
	//Declare json array. Make DB call to get the resources one at a time, push into json array.
	

	
	
	
});

app.post('/login', function(request, response){
	
	console.log("POST /login called.");
	
	var username = request.body.username;
	var password = request.body.password;
	
	console.log(username);
	console.log(password);
	if((username == "admin") && (password == "RGuE0BlT3hd3bHlJ")){
		response.status(200).send({"message":"GOOD TO GO!"});
	}
});