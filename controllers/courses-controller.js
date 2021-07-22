const CourseModel = require('./../models/course')
class CoursesController {

     static getCourses = (request, response, next) => {
         let courses = [];
        CourseModel.getAllCourses().then(
            data => { 
                courses = data ;
                response.render('courses/index', {
                    courses
                 })
            }    
                // data);
        ).catch(
            er => {
                // return response.status(400).send('There was an error. Contact Admin')
            }
        );
    }


}


module.exports = CoursesController;