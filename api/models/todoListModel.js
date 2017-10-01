'use strict';

// mongoose lib
var mongoose = require('mongoose');

// Prepare to build schema
var Schema = mongoose.Schema;

// Schema instance
var TaskSchema = new Schema({
	name: {
		type: String,
		required: 'Enter name of the task'
	},

	created_date: {
		type: Date,
		default: Date.now
	},

	// Type is array of obj 
	// type is ['xxxx']
	status: {
		type: [
			{
				type: String,
				enum: ['pending', 'ongoing', 'completed']
			}
		],
		default: ['pending']
	}
});

module.exports = mongoose.model('Task', TaskSchema);
 
