'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'You need to define the task name'
  },
  status: {
    type:[{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Tasks', TaskSchema);
