require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SESSION_SECRET,CONNECTION_STRING,SERVER_PORT} = process.env;

const app = express()
app.use(express.json())
app.use(
    session({
        resave:false,
        saveUninitialized:true,
        rejectUnauthorized:false,
        cookie:{maxAge:1000*60*60},
        secret:SESSION_SECRET
    })
)
massive({
    connectionString:CONNECTION_STRING,
    ssl:{
        rejectUnauthorized:false

    }
}).then(db => {
    const port = SERVER_PORT
    app.set('db',db)
    app.listen(port || 6754, console.log(`Connected to port ${port}`))
})