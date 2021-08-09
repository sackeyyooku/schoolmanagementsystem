const express = require('express')
//const passport = require('passport')
const connection = require('../../database-connection')
const router = express.Router()

router.use( express.json() );       // to support JSON-encoded bodies
router.use(express.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
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

router.get('/', function (req, res) {
  res.render('login', {
    user: {
      name: "Login Page"
    }
  })
})





router.post('/', function (req, res) {
  
  var usertype = req.body.usertype;
  var username = req.body.username;
  var password = req.body.password;
  
  connection.query(`SELECT * FROM user WHERE username =? AND password =?`, [username, password], function (err, data, fields) {
      if(err) throw err
      if(data.length>0){
         console.log(req.body)
         if (usertype == 'Adminstrator'){
          res.redirect('/admin');
         }
         else if (usertype == 'Student'){
          res.redirect('/student');
         }
         else if (usertype == 'Lecturer'){
          res.redirect('/Lecture');
         }
         if (!usertype) {
           res.redirect('./login')
          //Add the error message code later
           
         }
                   
      } else{
          res.render('./login')
      }
      
  })
})

module.exports = router