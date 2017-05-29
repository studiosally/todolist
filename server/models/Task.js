const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    createdat:{
      type: Number,
      default: +new Date()
    },
    modifiedat: {
      type: Number,
      default: +new Date()
    },
    completedat: {
      type: Boolean,
      default: false
    } 
  
})

const Task = mongoose.model('Task', TaskSchema )

module.exports = Task