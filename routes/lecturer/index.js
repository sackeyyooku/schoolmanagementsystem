const express = require('express');
const connection = require('../../database-connection');
const router = express.Router()



router.get('', ( req,res) =>{
    console.log(req.body)
    res.render('lecturer')
    }
    );






module.exports = router;