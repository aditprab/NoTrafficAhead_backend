//Instantiates schema and model in separate file so that this process only happens once- otherwise node will try to overwrite the model.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var resourceSchema = new Schema({resourceBody:{}}, {strict:false}); //strict:false makes this effectively schemaless. 
var newResource = mongoose.model('newResource', resourceSchema, 'nta_guide_approved_resources');

module.exports= {
	newResource : newResource
};