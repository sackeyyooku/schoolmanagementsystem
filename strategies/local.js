const LocalStrategy = require ('passport-local');
const passport = require ('passport');
const db = require('../database-connection')

passport.serializeUser((username,done) => {
    done(null, username.username);
});


passport.deserializeUser((username,done)=>{
    try {
        const result = db.Promise().query(`SELECT * FROM USER WHERE USERNAME = '${username}'`);
        if (result[0][0]){
            done(null, result[0][0]);
        }
    } catch (error) {
        done(error,null);
    }
});

passport.use(new LocalStrategy(
    async(username,password,done)=> {
        try {
            const result = db.Promise().query(`SELECT * FROM USER WHERE USERNAME = '${username}'`);
        if (result[0].length === 0){
            done(null,false);
        }
        else{
            if (result[0][0].password === password ) {
                done(null, result[0][0]);
                
            }
            else{
                 done(null,false);   
                }
        }
        } catch (error) {
            done(error,false);
        }
    }
))



