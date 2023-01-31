require('dotenv').config();

const mongoose=require('mongoose');

mongoose.connect(process.env.mongodBUrl);

const db=mongoose.connection;

db.on('error' , console.error.bind(console , "Error in conection the mongodb to the express app"));

db.once('open' , function (){console.log("Mongoose connected to db")});