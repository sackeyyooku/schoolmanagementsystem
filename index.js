require('dotenv').config()
const express = require('express')
const appRoutes = require('./routes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) 
// const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('', appRoutes)


app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
});