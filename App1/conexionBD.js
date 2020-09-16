var mongoose = require('mongoose');
var connection =mongoose.connect('mongodb+srv://root:root@cluster0.2zznx.mongodb.net/pruebamongo?retryWrites=true&w=majority');
mongoose.connection.on('open',(ref)=>{
    console.log("SE CONECTO CORRECTAMENTE")
})

module.exports=connection;