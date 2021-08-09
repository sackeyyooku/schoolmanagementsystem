const express = require('express')
const routes = express.Router()
const loginRouter = require('./login')
const coursesRouter = require('./courses')
const AdminRouter = require('./admin')
const studentRouter = require('./student')
const authRouter = require('../routes/auth/auth')


routes.use('/login', loginRouter)
routes.use('/courses', coursesRouter)
routes.use('/student', studentRouter)
routes.use('/lectures', loginRouter)
routes.use ('/admin',AdminRouter)
routes.use('/auth' ,authRouter)


routes.get('', (req, res) => {
    res.redirect('/login')
})



module.exports = routes