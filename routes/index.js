const express = require('express')
const routes = express.Router()
const loginRouter = require('./login')
const coursesRouter = require('./courses')
const AdminRouter = require('./admin')
const studentRouter = require('./student')
const authRouter = require('../routes/auth/auth')
const resRouter = require('./result')
const lecturerRouter = require('./lecturer')


routes.use('/login', loginRouter)
routes.use('/courses', coursesRouter)
routes.use('/student', studentRouter)
routes.use('/lecture', lecturerRouter)
routes.use ('/admin',AdminRouter)
routes.use('/auth' ,authRouter)
routes.use('/result',resRouter)


routes.get('', (req, res) => {
    res.redirect('/login')
})



module.exports = routes