'use strict';
var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.getAllTask = (req, res) => {
  Task.find({}, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
}

exports.addTask = (req, res) => {
  var newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
}

exports.getTask = (req, res) => { //failed
  Task.findById(req.params.taskId, (err, task) => {
    if (err) {
      res.send(err);
    res.json(task);
    }
  });
}

exports.updateTask = (req, res) => {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
}

exports.deleteTask = (req, res) => {
  Task.remove({
    _id: req.params.taskId,
  }, (err, task) => {
    if (err)
      res.send(err);
    res.json({message: 'Task successfully deleted'});
  });
}
