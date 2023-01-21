const mongoose=require('mongoose');

const IssueSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    issueDescription:{
        type:String,
        required:true,
    },
    issueAuthor:{
        type:String,
        required:true
    },
    lebel:{
        type:String,
        required:true
    }
})

const Issue=mongoose.model("Issue" , IssueSchema);

module.exports=Issue;