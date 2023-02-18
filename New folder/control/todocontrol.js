
const express=require('express');
const { todoModel } = require('../mod/todomodel.js');
const userRouter=express.Router();


userRouter.get("/",async (req,res)=>{
    const query=req.query
    try{
        const users=await todoModel.find(query);
        res.write(users);
        res.send(users);
    }
    catch(err){
        res.send(err);
    }
})


userRouter.post("/create",async (req,res)=>{
    try{
        const todo=new todoModel(req.body);
        await todo.save();
        res.send("New task added");
    }
    catch(err){
        res.send(err);
    }
})

userRouter.patch("/update/:id",async (req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
    try{
        await todoModel.findByIdAndUpdate({_id:ID},payload);
        res.send("Task Updated")
    }
    catch(err){
        res.send(err);
    }
})

userRouter.delete("/delete/:id",async (req,res)=>{
    const ID=req.params.id;
    try{
        await todoModel.findByIdAndDelete({_id:ID});
        res.send("Task Deleted")
    }
    catch(err){
        res.send(err);
    }
})



module.exports={userRouter};