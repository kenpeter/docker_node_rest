'use strict';

// Require lib
var mongoose = require('mongoose');

// mongoose seems to know where the tasks model is.
var Task = mongoose.model('Task');

// Remember that we pass this func into get, post, delete, etc
exports.list_all_tasks = function(req, res) {
	Task.find({}, function(err, tasks){
		if (err)
    	res.send(err);

  	res.json(tasks);
	});
};


exports.create_a_task = function(req, res) {
	// New instance
	// req.body == name of task, created_date and type like pending,
	// completed, etc
	var newTask = new Task(req.body);
	newTask.save(function(err, task){
		if (err)
			res.send(err);

		res.json(task);
	});
};


exports.read_a_task = function(req, res) {
	var taskId = req.params.taskId;
	Task.findById(taskId, function(err, task){
		if (err)
			res.send(err);

		// We always json the task
		res.json(task);
	});
};


exports.update_a_task = function(req, res) {
	var taskId = req.params.taskId;
	// not sure what is new: true?????
	Task.findOneAndUpdate({_id: taskId}, req.body, {new: true}, function(err, task){
		if (err)
			res.send(err);

		res.json(task);
	});

};


exports.delete_a_task = function(req, res) {
	var taskId = req.params.taskId;

	Task.remove({_id: taskId}, function(err, task){
		if (err)
			res.send(err);

		res.json({msg: 'deleted!'});
	});

};
