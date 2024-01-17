const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  todoItem:{
    type: String,
    required: true
  },
  status:{
    type: String,
    default: `In progress`
  }
})

const Tasks = mongoose.model('Tasks',taskSchema);
module.exports = Tasks;