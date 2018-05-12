'use strict';
module.exports = (app) => {
  var todoList = require('../controllers/todo.controllers.js');

  app.route('/tasks')
      .get(todoList.getAllTask)
      .post(todoList.addTask);

  app.route('/tasks/:taskId')
      .put(todoList.updateTask)
      .get(todoList.getTask) //failed
      .delete(todoList.deleteTask);
}
