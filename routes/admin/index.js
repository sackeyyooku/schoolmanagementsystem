const express = require('express');
const connection = require('../../database-connection');
const admin = require('../../models/admin');
const AdminController = require('./../../controllers/admin-controller');
const router = express.Router()




router.get('/', AdminController.getAdmin);


router.put('/', () => {
  if (!'addform') {

    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var role = req.body.role;
    var contact = req.body.contact;
    var userID = req.body.userID;
    connection.query(`UPDATE user SET firstname =?, lastname=? ,role =? AND contact= ? WHERE user_id= ?`, [firstname, lastname, role, contact, userID])

  }
})

router.post('/', function (req, res) {

  if (!'editform') {
    console.log(req.body)
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var username = firstname[0] + lastname + Math.floor((Math.random() * 100) + 1);
    var role = req.body.role;
    var contact = req.body.contact;
    var userID = req.body.userID;
    var dob = req.body.dob;
    admin.addUser(req.body);
    // connection.query(`INSERT INTO user (firstname,lastname,username,role,contact,user_id,dob) VALUES(?,?,?,?,?,?,?)`, [firstname, lastname,username,role, contact, userID,dob])
  }
  // (`firstname`, `lastname`, `username`, `password`, `role`, `dob`, `user_id`, `contact`, `department`) VALUES (NULL, 'Akosua', 'Mansah', 'amansah', 'amansah32', '2', '2020-08-01', 'L0001', '0123456789', '3')
  console.log(req.body);
})
module.exports = router