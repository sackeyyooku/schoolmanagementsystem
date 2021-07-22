const connection = require('./../database-connection')

class User {

    static getAllUsers() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM users', (err, rows, fields) => {
                if(err){
                    reject('Couldn\'t fetch results');
                    console.log(err.message)
                    // throw err;
                }

                resolve(rows);

            });
            // connection.end();
        });
    }
}

module.exports = User