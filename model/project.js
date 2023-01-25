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
    },
    issue:[{
        type: mongoose.Schema.Types.ObjectId,
         ref: "Issue",
    }]
})

const Project=mongoose.model("Project" , ProjectSchema);

module.exports=Project;