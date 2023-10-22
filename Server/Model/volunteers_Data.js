const mongoose=require('mongoose');

const volunteer= new mongoose.Schema({

    volunteersName:{type:String},
    volunteersquote:{type:String},
    volunteersImageURL:{type:String}

});

const Volunteer=new mongoose.model('Volunteer',volunteer);
module.exports=Volunteer;