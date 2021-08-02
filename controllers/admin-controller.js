const AdminModel = require('./../models/admin')
class AdminController {
    static getAdmin = ( request,response,next) => {
        let admin = [];
        AdminModel.getAllAdmin().then(
            data => {
                admin = data;
                response.render('admin/index.ejs',{
                   admin
                })
            }
        ).catch(
            er => {return response.status(400).send('There was an error. Contact Admin')
                
            }
        );

    }

}

/*Imports admin model */






module.exports= AdminController