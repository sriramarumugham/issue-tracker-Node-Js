const mongoose=require('mongoose');

const ProjectSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true
    }
})

const Project=mongoose.model("Project" , ProjectSchema);

module.exports=Project;