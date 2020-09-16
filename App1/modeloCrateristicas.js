var mongoose= require("mongoose"),
Schemas=mongoose.Schema;
var caract=new Schemas({
    idCaracteristica:{type:Number,trim:true},
    precio:{type:Number,trim:true},
    ciudad:{type:String,trim:true},
    contacto:{type:Number,trim:true}
});
var caracteristicas=mongoose.model('caracteristicas',caract);
module.exports=caracteristicas;