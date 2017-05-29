const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const routertasks = require('./routes/tasks')
const routertask = require('./routes/task')

const app = express()
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const dbUrl = process.env.DB_URL
const PORT = process.env.PORT

// const dbUrl = 'mongodb://127.0.0.1:27017/test'
// const PORT = 3000

// const getPassMiddleware = require('./routes/middleware/filter')

app.use(express.static( path.join(__dirname, '../client')  ))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'));


mongoose.Promise = Promise
mongoose.connect(dbUrl)


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(getPassMiddleware)
app.use('/tasks', routertasks)
app.use('/task', routertask)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);
