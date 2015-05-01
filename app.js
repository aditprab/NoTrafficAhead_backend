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

//establish mongo connection
mongoose.connect('nta_guide_project:2uU-kvh-NDv-Apw@ds031872.mongolab.com:31872/nta_resource_guide');


app.get('/newResource', function(request, response){
	//Posts new resource to the temporary database for approval by admin. Sends an email to the administrator account 
	//No authentication requirements here.
	console.log("POST /newResource called.");


	//import the mongo schema. 
	var resource = require('./newResource.js').newResource;
	var resourceModel = mongoose.model("resourceModel", resource, "nta_guide_preApproval");
	
	var guideEntry = new resourceModel();
	
	
	//guideEntry.generalPhase = request.query.generalPhase;
	//etc.
	
	guideEntry.generalPhase.contactInfo.organizationName = "swaggy";
	
	guideEntry.save(function(err) {
           console.log("New Resource CREATED");
           console.log(guideEntry);
       });

	


	
});