const connection = require('./../database-connection')

class Course {

    static getAllCourses() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM student', (err, rows, fields) => {
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

module.exports = Course