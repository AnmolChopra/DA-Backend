var mongoose = require('mongoose');
module.exports=mongoose.model('chapter11',{
    topicname:{
        type:String
    },
    upload:String,
    date_time:{
        type:Date,
        default:Date.now()
    }
})