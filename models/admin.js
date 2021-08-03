const connection = require('./../database-connection')

class admin {

   static getAllAdmin(){
       return new Promise((resolve, reject) => {
           connection.query('SELECT *  FROM user ',(err,rows,fields) =>{
               if (err) {
                reject('Couldn\'t fetch results');
                console.log(err.message)
                // throw err;
               }
               resolve (rows)
           })
       })

       
   }
}

module.exports = admin


/*retrieves or selects all users from the database 
where their roles are 1 or that of the admin 
this requires the database connection to work*/