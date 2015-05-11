//set variables for environment
var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var server = http.createServer(app);
var mongoose = require('mongoose');

//Set server port
server.listen(2000);

server.listen(app.get('port'), function () {
    console.log('Express server running, listening on port ' + server.address().port);
});

mongoose.connect('mongodb://nta_admin_user:Avo-R2V-rK4-79e@ds031872.mongolab.com:31872/nta_resource_guide');

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected.');
});


	app.get('/newResource', function(request, response){
	//Posts new resource to the temporary database for approval by admin. Sends an email to the administrator account 
	//No authentication requirements here.
		console.log("POST /newResource called.");


	//import the mongo schema. 
	var ResourceModel = require('./newResource.js').newResource;

	//build JSON based on schema + request.query, pass into ResourceModel constructor.
	var guideEntry = new ResourceModel({approved:false});
	
	guideEntry.save(function(err) {
	       console.log("New Resource CREATED");
	       console.log(guideEntry);
	});


});