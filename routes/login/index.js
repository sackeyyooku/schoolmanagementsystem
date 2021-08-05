const express = require('express')
const passport = require('passport')
const connection = require('../../database-connection')
const router = express.Router()
var bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
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

// router.post('',(req,res)=>{
//   
// })

// router.post('/', passport.authenticate('local.js', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// })
// )


router.post('/', function (req, res) {
  //  const {username , password} = req.body;
  var username = req.body.username;
  var password = req.body.password;
  
  connection.query(`SELECT * FROM user WHERE username =? AND password =?`, [username, password], function (err, data, fields) {
      if(err) throw err
      if(data.length>0){
         console.log(req.body)
          res.redirect('/admin');
      }else{
          res.send("Wrong username or password");
      }
      
  })
})

module.exports = router