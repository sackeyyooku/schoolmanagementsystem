const express = require('express')
const routes = express.Router()
const loginRouter = require('./login')
const coursesRouter = require('./courses')
const AdminRouter = require('./admin')



routes.use('/login', loginRouter)
routes.use('/courses', coursesRouter)
routes.use('/students', loginRouter)
routes.use('/lectures', loginRouter)
routes.use ('/admin',AdminRouter)


routes.get('', (req, res) => {
    res.redirect('/login')
})



module.exports = routes