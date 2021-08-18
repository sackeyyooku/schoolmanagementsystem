const express = require('express');
const CoursesController = require('./../../controllers/courses-controller');
const router = express.Router()

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
//   })
//   // define the home page route
//   router.get('/', function (req, res) {
//     res.send('Birds home page')
//   })
//   // define the about route
//   router.get('/about', function (req, res) {
//     res.send('About birds')
//   })
  
  router.get('/', CoursesController.getCourses);


  router.post('/',(req,res)=>{
          console.log(req.body)                    
  })

  module.exports = router