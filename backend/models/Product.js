const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
const ProductSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    discount:Number,
    iva:{
        type:Number,
        enum:[0.04,0.1,0.21]
    },
    description:String,
    imagePath:String,
    category:ObjectId

});

module.exports=mongoose.model('product',ProductSchema);