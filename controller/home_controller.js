try{

    module.exports.home=async function(req , res){
        return res.send('<h1>Hello world</h1>')
    }
}
catch(err){
    console.log("err", err);
    return;
}