const mongoose=require('mongoose');
const {urlMongo}=require('./password');
let url= process.env.NODE_ENV === 'production' ? urlMongo:'mongodb://localhost:27017/E-commerce';
mongoose.connect(url,{useCreateIndex:true,useNewUrlParser:true,
useUnifiedTopology: true})
.then(()=>console.log('Conectado a MongoDB'))
.catch(error=>console.log('Error al tratar de conectar con MongoDB '+ error));