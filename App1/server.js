var http=require("http");
var server =http.createServer();
const express=require('express');
const body_parser=require('body-parser');
const app=express();
var connection=require('./conexionBD');
const rutas=require('./rutas')

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
app.use('/',rutas);

function mensaje (peticion, respuesta){
    respuesta.writeHead(200,{'content-type':'text/plain'});
    respuesta.write('hola mundo');
    respuesta.end();
}
function mensajejson(peticion, respuesta){
    respuesta.setHeader('content-type','application/json');
    respuesta.writeHead(200);
    respuesta.end('{"mensaje":"es un hola mundo en json"}');
    console.log(peticion)
}

app.on('request', mensajejson);
app.listen(3000, function(){
    console.log('la aplicacion esta corriendo en el puerto 3000')
});