const mongoose=require('mongoose');

require('dotenv').config();

// const connection=mongoose.connect(process.env.mongoURL)


const todoSchema=mongoose.Schema({
    task:{type:String,required:true},
    completed:{type:Boolean,required:true},
    pending:{type:Boolean,required:true},
    priority:{type:String,required:true}
},{
    versionKey:false
})


const todoModel=mongoose.model("todo",todoSchema);


module.exports={todoModel}