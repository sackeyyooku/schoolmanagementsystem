const express = require('express')
const router = express.Router()



router.get('/', function (req, res) {
    res.render('admin', {
      user : {
          name: "Admin Page"
      }
  })
  })

  module.exports = router