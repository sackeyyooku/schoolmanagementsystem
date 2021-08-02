const express = require('express');
const AdminController = require('./../../controllers/admin-controller');
const router = express.Router()




  router.get('/',AdminController.getAdmin );
  module.exports = router