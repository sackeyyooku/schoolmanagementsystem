const connection = require('./../database-connection')

class Course {

    static getAllCourses() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM course', (err, rows, fields) => {
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

    static addCourse = (course) =>{
        connection.query('INSERT INTO course ',(err, rows, fields) =>{
            
        })
    }
}

module.exports = Course