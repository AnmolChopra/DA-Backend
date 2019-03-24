var mongoose = require('mongoose');
module.exports=mongoose.model('teacher',{
   // _id: {type: String, required: true},
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date_time:{
        type:Date,
        'default':Date()
    },
    change_pass:{
        type:Boolean,
        'default':false
        
    }
})