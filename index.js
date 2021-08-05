require('dotenv').config()
const express = require('express')
const app = express()
const appRoutes = require('./routes')

const session = require('express-session')

//const bodyParser = require('body-parser')

//const urlencodedParser = bodyParser.urlencoded({ extended: false })


// static files and Templating engines
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(express.urlencoded({extended: true}));
app.use('', appRoutes)




app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
});