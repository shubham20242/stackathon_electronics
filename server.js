const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const PORT = process.env.PORT || 3001
const Controller1 = require('./controllers/Controller1')
const Controller2 = require('./controllers/Controller2')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('welcome to our landing page!'))


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))