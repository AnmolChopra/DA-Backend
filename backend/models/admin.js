let mongoose = require('mongoose');

module.exports=mongoose.model('admin',{
    username:{
        type:String
    },
    password:{
        type:String
    }
})