'use strict';

// Pass express app inside
module.exports = function(app) {
	// Include the controller lib
	var todoList = require('../controllers/todoListController');

	// the route has get, post
	// and we pass controller inside get, post
	app.route('/tasks')
		.get(todoList.list_all_tasks)
		.post(todoList.create_a_task); // we create a task here.

	app.route('/tasks/:taskId')
		.get(todoList.read_a_task)
		.put(todoList.update_a_task)
		.delete(todoList.delete_a_task);

};
