const mongoose =require('mongoose')


const cardSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true,
        unique:true
    },
    
})

const Card=mongoose.model('Card',cardSchema);

module.exports=Card
