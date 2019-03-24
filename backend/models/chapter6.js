var mongoose = require('mongoose');
module.exports=mongoose.model('chapter6',{
    topicname:{
        type:String
    },
    upload:String,
    date_time:{
        type:Date,
        default:Date.now()
    }
})