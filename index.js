require('dotenv').config()
const express = require('express')
const appRoutes = require('./routes')
//const bodyParser = require('body-parser')

//const urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('', appRoutes)

app.use(express.urlencoded({extended: false}));
app.use(express.json()) // To parse the incoming requests with JSON payloads


app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
});