const UserModel = require('./../models/user')
class UserController {

     static getUsers = (request, response, next) => {
         let users = [];
        UserController.getAllUsers().then(
            data => { 
                users = data ;
                response.render('users/index', {
                    users
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


module.exports = UserController;