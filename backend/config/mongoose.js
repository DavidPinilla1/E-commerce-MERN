const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/E-commerce',{useCreateIndex:true,useNewUrlParser:true,
useUnifiedTopology: true})
.then(()=>console.log('Conectado a MongoDB'))
.catch(error=>console.log('Error al tratar de conectar con MongoDB '+ error));