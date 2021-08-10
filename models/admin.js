const connection = require('./../database-connection')

class admin {

   static getAllAdmin(){
       return new Promise ((resolve, reject) => {
           connection.query('SELECT *  FROM user INNER JOIN roletable ON roletable.id=user.role  ',(err,rows,fields) =>{
               if (err) {
                reject('Couldn\'t fetch results');
                console.log(err.message)
                // throw err;
               }
               resolve (rows)
           })
       })

       
   }

//    static editUser (){
//        if (err)throw err;
//        var sql = `UPDATE user SET firstname =?, lastname=? ,role =? and contact= ? WHERE userid= ?`
//        var firstname = req.body.firstname;
//        var lastname = req.body.lastname;
//        var role = req.body.role;
//        var contact = req.body.contact;
//         connection.query(` `)
//    }
}



module.exports = admin


/*retrieves or selects all users from the database 
where their roles are 1 or that of the admin 
this requires the database connection to work*/