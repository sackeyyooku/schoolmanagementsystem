const express = require('express');
const connection = require('../../database-connection');
const admin = require('../../models/admin');
const AdminController = require('./../../controllers/admin-controller');
const router = express.Router()




router.get('/', AdminController.getAdmin);


router.post('/', (req, res, next ) => {
  if ('editform' == req.body.formType) {
    console.log(req.body)

    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var role = req.body.role;
    var contact = req.body.contact;
    var userID = req.body.userID;
    connection.query(`UPDATE user SET firstname =?, lastname=? ,role =? ,contact= ? WHERE user_id= ?`, [firstname, lastname, role, contact, userID])

  }.next

  if ('addform' == req.body.formType) {
    console.log(req.body)
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var username = firstname[0] + lastname + Math.floor((Math.random() * 100) + 1);
    var password = Math.floor((Math.random() * 10000) + 1) + lastname[3] + firstname[2] + Math.floor((Math.random() * 100) + 1);
    var role = req.body.role;
    var contact = req.body.contact;
    var userID = req.body.userID;
    var dob = req.body.dob;
    connection.query(`INSERT INTO user (firstname,lastname,username,password,role,contact,user_id,dob) VALUES(?,?,?,?,?,?,?,?)`, [firstname, lastname, username, password, role, contact, userID, dob])

  }
  
  if ('deleteUser' === req.body.formType) {
    console.log(req.body)
    var userID = req.body.userID;
    connection.query(`DELETE FROM user WHERE user_id = ?`, [userID])


  }

  
})

router.post('/',(req,res)=>{

})


module.exports = router