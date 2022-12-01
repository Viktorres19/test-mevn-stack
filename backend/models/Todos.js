const mongoose = require('mongoose')
const TodosSchema = new mongoose.Schema({
  todo: String,
  author: String
})
//I've already added models in previous lesson
module.exports = mongoose.model('todo', TodosSchema)