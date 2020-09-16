var caracteristicas= require('./modeloCrateristicas'),
express=require('express'),
rutas=express.Router();

rutas.post('/obtenerTodos',(Request,response)=>{
    caracteristicas.find({},(err,datos)=>{
        if(err){
            console.log(err);

            throw err;
        }
        response.status(200).json(datos);
    })
})
rutas.post('/crear',(request,response)=>{
    var body=request.body;
    caracteristicas.insertMany({
        idCaracteristicas:body.idCaracteristicas,
        precio:body.precio,
        ciudad:body.ciudad,
        contacto:body.contacto
    },(err,res)=>{
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(res);
    })
})
module.exports=rutas;