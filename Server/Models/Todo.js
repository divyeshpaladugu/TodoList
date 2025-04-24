const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
  task: String,
  done: {
    type: Boolean,
    default: false
  }
});

const TodoModel = mongoose.model('Todos', TodosSchema);
module.exports = TodoModel;
