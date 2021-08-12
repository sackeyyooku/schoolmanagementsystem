const connection = require('./../database-connection')

class Course {

    static getAllCourses() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT course.course_id,course.course_name FROM course ', (err, rows, fields) => {
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
        var course_id = req.body.course_id;
        var course_name = req.body.course_name;
        connection.query('INSERT INTO course where course_id =? and course_name = ?',(err, rows, fields) =>{
            
        })
    }
}

module.exports = Course