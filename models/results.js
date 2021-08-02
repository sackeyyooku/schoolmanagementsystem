import connection from './../database-connection';

class results {
    static getResults(){
        return new Promise ( (resolve,reject) => {
            connection.query('Select * FROM result', () =>{
                 if (err){
                    reject('couldn\'t fectch results');
                    console.log(err.message)
                }
                resolve(rows)
            })
               
              
        })
    }


}



module.exports = results