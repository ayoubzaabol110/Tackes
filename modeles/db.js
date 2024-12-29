const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Task").then(()=>{
    console.log("serever is connnected await avec le mongodb ")
}).catch(()=>{
    console.log("is not connected ")
})
const connectedM=new mongoose.Schema({
    title:{
        type:String ,
        required:true
    },
   description:{
        type:String ,
        required:true
    }
    
    })
const task=mongoose.model("takes",connectedM)
    module.exports=task;