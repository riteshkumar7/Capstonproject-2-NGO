const mongoose=require('mongoose');

const dotenv=require('dotenv');
dotenv.config({path: './config.env'});
const dbpath=process.env.database;

mongoose.connect(dbpath,{

}).then(()=> console.log("Connection Done With Database ..."))
.catch((e)=> console.log(e));
