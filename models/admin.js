const connection = require('./../database-connection')

class admin {

    static getAllAdmin() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT user.firstname,user.lastname,user.username,user.dob ,user.user_id,user.contact ,roletable.role , department.department_name FROM user INNER JOIN roletable ON roletable.id=user.role INNER JOIN department ON department.department_id = user.department ', (err, rows, fields) => {
                if (err) {
                    reject('Couldn\'t fetch results');
                    console.log(err.message)
                    // throw err;
                }
                resolve(rows)
            })
        })


    }

    static addUser(userdetails) {
        var firstname = '';
        var lastname = '';
        var username = '';
        var role = '';
        var contact = '';
        var userID = '';
        var dob = '';
        connection.query(`INSERT INTO user (firstname,lastname,username,role,contact,user_id,dob) VALUES(?,?,?,?,?,?,?)`, [firstname, lastname,username,role, contact, userID,dob])

    }
       
     static  editUser(req, res){
        if (err)
            throw err;
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var role = req.body.role;
        var contact = req.body.contact;
        var userID = req.body.userID;
        connection.query(`UPDATE 'user' SET firstname =?, lastname=? ,role =? , contact= ? WHERE user_id= ?`, [firstname, lastname, role, contact, userID])
    }
}

class addUser{

}


module.exports = admin ;



/*retrieves or selects all users from the database
where their roles are 1 or that of the admin
this requires the database connection to work*/