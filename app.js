const express = require('express')
const app = express()


require('dotenv').config()

const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/static', express.static('static'))
const session = require('express-session')

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 30 }
}))

const admin = require('./routes/admin')
app.use(admin)



const port = 3000
app.listen(port)