const { resolveInclude } = require("ejs");
const conexion = require("../config/conexion");
module.exports ={

    authenticate(email,password){

        return new Promise((resolve,reject)=>{
        conexion.query('Select = from user where email=? and password =?',[email,password],(err,resultado)=>{
if(err)reject(err)
else resolve(resultado)
         })

        })
    }
}