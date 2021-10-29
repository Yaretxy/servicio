const { resolveInclude } = require("ejs");
const conexion = require("../config/conexion");
const authModel=require('../models/auth_model');
const router = require("./productos");


router.post('/authentication',function(req,res,next){

    const{email,password} = req.body
    authModel.authenticate(email,password).then(user => {

        req.session.loggedin=true
        req.session.name=email
        res.redirect('/')

    }).catch(err => {
        return res.status(500).send('Error al hacer login')
    })
})

module.exports=router;