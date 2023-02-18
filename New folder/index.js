const mongoose=require('mongoose');
const express=require('express');
const {connection}=require('./Configg/db.js');
const {userRouter}=require('./control/todocontrol.js');



const app=express();
app.use(express.json());

app.use("/todos",userRouter)

app.listen(4500,async ()=>{
    try{
        await connection
        console.log(("Connected to 4500"));
    }catch(err){
        console.log("Cannot connect");
    }
})











