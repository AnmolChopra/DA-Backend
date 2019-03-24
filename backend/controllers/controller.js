let express = require('express');
let bodyparser = require('body-parser');
let nodeMailer = require ('nodemailer');
let generator = require('generate-password');
var password = generator.generate({
    length: 10,
    numbers: true
});
 
// 'uEyMTw32v9'
console.log(password);
// let cors = require('cors');
// var unirest = require('unirest');
let admscm = require('../models/admin');
let topic = require('../models/topic');
let chapter2 =require('../models/chapter2');
let chapter3 = require('../models/chapter3');
let chapter4 = require('../models/chapter4');
let chapter5 = require('../models/chapter5');
let chapter6 = require('../models/chapter6');
let chapter7 = require('../models/chapter7');
let chapter8 = require('../models/chapter8');
let chapter9 = require('../models/chapter9');
let chapter10 = require('../models/chapter10');
let chapter11 = require('../models/chapter11');
let chapter12 = require('../models/chapter12');

let teacher = require('../models/teacher');
let ques = require('../models/question');
let ques2 = require('../models/question2');
let ques3 = require('../models/question3');
let ques4 = require('../models/question4');
let ques5 = require('../models/question5');
let ques6 = require('../models/question6');
let ques7 = require('../models/question7');
let ques8 = require('../models/question8');
let ques9 = require('../models/question9');
let ques10 = require('../models/question10');
let ques11 = require('../models/question11');
let ques12 = require('../models/question12');
let mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/school",(err)=>{
    if (err) throw err
    else{
        console.log("Connected To Database School")
    }
})

// multer starts
let multer = require('multer');
let DIR = './backend/attach/';
let storage = multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,DIR);
    },
    filename:function(req,file,cb){
        var datetimestamp = Date.now();
        cb(null,file.filename+'-'+datetimestamp+'.'+file.originalname.split('.')[file.originalname.split('.').length-1])
    }
});

let upload = multer({storage:storage}).single('upload');
 // end of multer

module.exports={
    //Admin Login
    adminLog:function(req,res){
        var username = req.body.username;
        var password = req.body.password;
    admscm.findOne({'username':username,'password':password},(err,data)=>{
            if(err){}
            else if(!data){
                res.json({'err':1,'msg':'Invalid Credentials'})
            }
            else{
                res.json({'err':0,'msg':'Login Successful','username':username})
            }
        })
    },

//                                   Teacher Login
    TechLog:function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        teacher.findOne({'username':username,'password':password},(err,data)=>{
            if(err){}
            else if(!data){
                res.json({'err':1,'msg':'Invalid Credentials'})
            }
            else{
                res.json({'err':0,'msg':'Login Successful','username':username,data})
                teacher.updateOne({username:username},{$set:{date_time:new Date()}},(err)=>{
                    if(err) throw err;
                    else{
                    console.log({'err':0,'msg':'date updated'})
                    }
                })
            }
        })
    },

hours(){
let minutes =parseInt((dateDifference))
},
    fetchTeacher:function(){
    
        teacher.aggregate([{$project:{email:1,dateDifference:{$subtract:[new Date(),"$date_time"]}}}],(err,data)=>{
            if(err) throw err
            else{
                // if(data.dateDifference){
                //     console.log()
                // }
           let  resObj= data
console.log(resObj);

for (var i = 0; i < resObj.length; i++) {
    console.log(resObj[i].email);
// let hoursDiff = resObj[i].dateDifference/(1000*60*60)%24
    if(resObj[i].dateDifference/(1000*60*60)%24 >= 0.1){

//                        mailer

let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'anmolchopra123@gmail.com',
        pass: 'Ch0pr@ji13'
    }
});
let mailOptions = {
    from: '"Anmol CHopra" <anmolchopra123@gmail.com>', // sender address
    to: resObj[i].email, // list of receivers
    subject: 'Login Now', // Subject line
    text:'', // plain text body
    html: '<b>NodeJS Email Tutorial</b>' // html body
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
        // res.render('index');
    });
        console.log("Done ",(resObj[i].dateDifference/(1000*60*60)%24))
                            }
                           else{
                               console.log("not done")
                           }
}
                    
//                var xyz = resObj.find(function(element){
//                    return element>=600000
//                })

// console.log(xyz)

              }
        })

    },
                                      //Add Teacher
    addteacher:function(req,res){
        var username = req.body.username;
        // var password =req.body.password;
        var password = generator.generate({
            length: 10,
            numbers: true
        });
         
        console.log(password);
        var email = req.body.email;
        let ins = new teacher({'username':username,'email':email,'password':password});
        ins.save((err)=>{
            if (err) throw err;
            else{
                res.json({'err':0,'msg':'Teacher Created successfully'});

                // Mailer Starts

            let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'anmolchopra123@gmail.com',
                pass: 'Ch0pr@ji13'
            }
        });
        let mailOptions = {
            from: '"Anmol CHopra" <anmolchopra123@gmail.com>', // sender address
            to: email, // list of receivers
            subject: 'Account Activated !!', // Subject line
            text:'', // plain text body
            html: 'Your password is '+password // html body
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
                // res.render('index');
            });
            }
        })
    },

//                              find Pass
findp:function(req,res){
var old= req.body.old;
var pass =req.body.pass;
var username= req.body.name;
var chgpass= req.body.change_pass;
teacher.findOne({'username':username,'password':old},(err,data)=>{
    if(err) throw err;
    else if(!data ||data.length==0 ){
        res.json({'err':1,'msg':'Not Found'});
    }
    else{
        res.json({'err':0,'msg':'found'})
        teacher.update({username:username},{$set:{password:pass,change_pass:chgpass}},(err)=>{
            if(err) throw err
            // else if(!data ||data.length==0){
            //     res.json({'err':1,'msg':'Password Not Changed'})
            // }
            else{
                console.log({'err':0,'msg':'password Change'})
            }
        })
    }
})
},


//                          Forget Password
forgetpass:function(req,res){
    var email=req.body.email;
    teacher.findOne({'email':email},(err,data)=>{
        if(err) throw err
        else if(!data || data.length){
            res.json({'err':1,'msg':'email not found'})
        }
        else{
            res.json({'err':0,'msg':'mailer activated'})
            var password = generator.generate({
                length: 10,
                numbers: true
            });
            var change_pass=false;
            teacher.update({email:email},{$set:{password:password,change_pass:change_pass}},(err)=>{
                if(err) throw  err
                else{
                    
                // Mailer Starts

            let transporter = nodeMailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'anmolchopra123@gmail.com',
                    pass: 'Ch0pr@ji13'
                }
            });
            let mailOptions = {
                from: '"Anmol CHopra" <anmolchopra123@gmail.com>', // sender address
                to: email, // list of receivers
                subject: 'Account Activated !!', // Subject line
                text:'', // plain text body
                html: 'Your password is '+password // html body
            };
            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
                    // res.render('index');
                });
                }
            })
        }
    })
},

//                          Change Password
// chgp:function(req,res){
// var pass =req.body.newp;
// var cid= req.body.cid;
// teacher.updateOne({username:cid},{$set:{password:pass}},(err)=>{
//     if(err) throw err
//     // else if(!data ||data.length==0){
//     //     res.json({'err':1,'msg':'Password Not Changed'})
//     // }
//     else{
//         res.json({'err':0,'msg':'password Change'})
//     }
// })
// },


         //Add Topic Chapter 1
    addtop:function(req,res){
        upload(req,res,(err)=>{
            if(err) throw err;
            else{
                var topicname = req.body.topicname;
                var fname = req.file.filename;
                let ins = new topic({'topicname':topicname,'upload':fname});
                ins.save((err)=>{
                    if(err){}
                    else{
                        res.json({'err':0,'msg':'Topic Added'})
                    }
                })
            }
        })
    },
    
//                Fetch All Data Chapter1    
    fetchAll:function(req,res){
 topic.find({},(err,data)=>{
            if(err){}
            else {
                res.json({'fetch':data});
            }
        })
    },
//                Fetch Topic Chapter1
    fetchTopic:function(req,res){
       
        topic.aggregate([            
            {
                $lookup:{
                    from:'questions',
                    localField:'topicname',
                    foreignField:'topicname',
                    as:'values'
                }
            },
            {
                $unwind: '$values'
             },
             {
                 $project:{
                     "topicname":1,
                     "upload":1,
                     "values.question":1,
                     "values.op1":1,
                     "values.op2":1,
                     "values.op3":1,
                     "values.op4":1,
                     "values.correctop":1,
                 }
             }
        ],(err,data)=>{
            if(err){}
            else{
                res.json({'fetch':data});
                console.log(data)
            }
        })
    },
//                        Add Quiz Chapter1
    addquuiz:function(req,res){
        var question = req.body.question;
        var op1=req.body.op1;
        var op2=req.body.op2;
        var op3=req.body.op3;
        var op4=req.body.op4;
        var correctop=req.body.correctop;
        var topicname = req.body.topicname;

        let ins = new ques({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
        ins.save((err)=>{
            if (err) {}
            else{
                res.json({'err':0,'msg':'quiz added'});
            }
        })
    },


    //                                  Chapter2 Starts


     addtop2:function(req,res){
        upload(req,res,(err)=>{
            if(err){}
            else{
                var topicname = req.body.topicname;
                var fname = req.file.filename;
                let ins = new chapter2({'topicname':topicname,'upload':fname});
                ins.save((err)=>{
                    if(err){}
                    else{
                        res.json({'err':0,'msg':'Topic Added'})
                    }
                })
            }
        })
    },
    
//                Fetch All Data Chapter2    
    fetchAll2:function(req,res){
 chapter2.find({},(err,data)=>{
            if(err){}
            else {
                res.json({'fetch':data});
            }
        })
    },
//                Fetch Topic Chapter2
    fetchTopic2:function(req,res){
       
        chapter2.aggregate([            
            {
                $lookup:{
                    from:'question2',
                    localField:'topicname',
                    foreignField:'topicname',
                    as:'values'
                }
            },
            {
                $unwind: '$values'
             },
             {
                 $project:{
                     "topicname":1,
                     "upload":1,
                     "values.question":1,
                     "values.op1":1,
                     "values.op2":1,
                     "values.op3":1,
                     "values.op4":1,
                     "values.correctop":1,
                 }
             }
        ],(err,data)=>{
            if(err){}
            else{
                res.json({'fetch':data});
                console.log(data)
            }
        })
       
    },
//                        Add Quiz Chapter2
    addquuiz2:function(req,res){
        var question = req.body.question;
        var op1=req.body.op1;
        var op2=req.body.op2;
        var op3=req.body.op3;
        var op4=req.body.op4;
        var correctop=req.body.correctop;
        var topicname = req.body.topicname;

        let ins = new ques2({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
        ins.save((err)=>{
            if (err) {}
            else{
                res.json({'err':0,'msg':'quiz added'});
            }
        })
    },
//                              Chapter3 Starts




  addtop3:function(req,res){
    upload(req,res,(err)=>{
        if(err){}
        else{
            var topicname = req.body.topicname;
            var fname = req.file.filename;
            let ins = new chapter3({'topicname':topicname,'upload':fname});
            ins.save((err)=>{
                if(err){}
                else{
                    res.json({'err':0,'msg':'Topic Added'})
                }
            })
        }
    })
},

//                Fetch All Data Chapter3    
fetchAll3:function(req,res){
chapter3.find({},(err,data)=>{
        if(err){}
        else {
            res.json({'fetch':data});
        }
    })
},
//                Fetch Topic Chapter3
fetchTopic3:function(req,res){
   
    chapter3.aggregate([            
        {
            $lookup:{
                from:'question3',
                localField:'topicname',
                foreignField:'topicname',
                as:'values'
            }
        },
        {
            $unwind: '$values'
         },
         {
             $project:{
                 "topicname":1,
                 "upload":1,
                 "values.question":1,
                 "values.op1":1,
                 "values.op2":1,
                 "values.op3":1,
                 "values.op4":1,
                 "values.correctop":1,
             }
         }
    ],(err,data)=>{
        if(err){}
        else{
            res.json({'fetch':data});
            console.log(data)
        }
    })
   
},
//                        Add Quiz Chapter3
addquuiz3:function(req,res){
    var question = req.body.question;
    var op1=req.body.op1;
    var op2=req.body.op2;
    var op3=req.body.op3;
    var op4=req.body.op4;
    var correctop=req.body.correctop;
    var topicname = req.body.topicname;

    let ins = new ques3({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
    ins.save((err)=>{
        if (err) {}
        else{
            res.json({'err':0,'msg':'quiz added'});
        }
    })
},

//                              Chapter4 Starts



  addtop4:function(req,res){
    upload(req,res,(err)=>{
        if(err){}
        else{
            var topicname = req.body.topicname;
            var fname = req.file.filename;
            let ins = new chapter4({'topicname':topicname,'upload':fname});
            ins.save((err)=>{
                if(err){}
                else{
                    res.json({'err':0,'msg':'Topic Added'})
                }
            })
        }
    })
},

//                Fetch All Data Chapter4    
fetchAll4:function(req,res){
chapter4.find({},(err,data)=>{
        if(err){}
        else {
            res.json({'fetch':data});
        }
    })
},
//                Fetch Topic Chapter4
fetchTopic4:function(req,res){
   
    chapter4.aggregate([            
        {
            $lookup:{
                from:'question4',
                localField:'topicname',
                foreignField:'topicname',
                as:'values'
            }
        },
        {
            $unwind: '$values'
         },
         {
             $project:{
                 "topicname":1,
                 "upload":1,
                 "values.question":1,
                 "values.op1":1,
                 "values.op2":1,
                 "values.op3":1,
                 "values.op4":1,
                 "values.correctop":1,
             }
         }
    ],(err,data)=>{
        if(err){}
        else{
            res.json({'fetch':data});
            console.log(data)
        }
    })
   
},
//                        Add Quiz Chapter4
addquuiz4:function(req,res){
    var question = req.body.question;
    var op1=req.body.op1;
    var op2=req.body.op2;
    var op3=req.body.op3;
    var op4=req.body.op4;
    var correctop=req.body.correctop;
    var topicname = req.body.topicname;

    let ins = new ques4({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
    ins.save((err)=>{
        if (err) {}
        else{
            res.json({'err':0,'msg':'quiz added'});
        }
    })
},

//                              Chapter 5 Starts



  addtop5:function(req,res){
    upload(req,res,(err)=>{
        if(err){}
        else{
            var topicname = req.body.topicname;
            var fname = req.file.filename;
            let ins = new chapter5({'topicname':topicname,'upload':fname});
            ins.save((err)=>{
                if(err){}
                else{
                    res.json({'err':0,'msg':'Topic Added'})
                }
            })
        }
    })
},

//                Fetch All Data Chapter5    
fetchAll5:function(req,res){
chapter5.find({},(err,data)=>{
        if(err){}
        else {
            res.json({'fetch':data});
        }
    })
},
//                Fetch Topic Chapter5
fetchTopic5:function(req,res){
   
    chapter5.aggregate([            
        {
            $lookup:{
                from:'question5',
                localField:'topicname',
                foreignField:'topicname',
                as:'values'
            }
        },
        {
            $unwind: '$values'
         },
         {
             $project:{
                 "topicname":1,
                 "upload":1,
                 "values.question":1,
                 "values.op1":1,
                 "values.op2":1,
                 "values.op3":1,
                 "values.op4":1,
                 "values.correctop":1,
             }
         }
    ],(err,data)=>{
        if(err){}
        else{
            res.json({'fetch':data});
            console.log(data)
        }
    })
   
},
//                        Add Quiz Chapter2
addquuiz5:function(req,res){
    var question = req.body.question;
    var op1=req.body.op1;
    var op2=req.body.op2;
    var op3=req.body.op3;
    var op4=req.body.op4;
    var correctop=req.body.correctop;
    var topicname = req.body.topicname;

    let ins = new ques5({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
    ins.save((err)=>{
        if (err) {}
        else{
            res.json({'err':0,'msg':'quiz added'});
        }
    })
},

//                                  Chapter 6 Starts

 

  addtop6:function(req,res){
    upload(req,res,(err)=>{
        if(err){}
        else{
            var topicname = req.body.topicname;
            var fname = req.file.filename;
            let ins = new chapter6({'topicname':topicname,'upload':fname});
            ins.save((err)=>{
                if(err){}
                else{
                    res.json({'err':0,'msg':'Topic Added'})
                }
            })
        }
    })
},

//                Fetch All Data Chapter6    
fetchAll6:function(req,res){
chapter6.find({},(err,data)=>{
        if(err){}
        else {
            res.json({'fetch':data});
        }
    })
},
//                Fetch Topic Chapter6
fetchTopic6:function(req,res){
   
    chapter6.aggregate([            
        {
            $lookup:{
                from:'question6',
                localField:'topicname',
                foreignField:'topicname',
                as:'values'
            }
        },
        {
            $unwind: '$values'
         },
         {
             $project:{
                 "topicname":1,
                 "upload":1,
                 "values.question":1,
                 "values.op1":1,
                 "values.op2":1,
                 "values.op3":1,
                 "values.op4":1,
                 "values.correctop":1,
             }
         }
    ],(err,data)=>{
        if(err){}
        else{
            res.json({'fetch':data});
            console.log(data)
        }
    })
   
},
//                        Add Quiz Chapter6
addquuiz6:function(req,res){
    var question = req.body.question;
    var op1=req.body.op1;
    var op2=req.body.op2;
    var op3=req.body.op3;
    var op4=req.body.op4;
    var correctop=req.body.correctop;
    var topicname = req.body.topicname;

    let ins = new ques6({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
    ins.save((err)=>{
        if (err) {}
        else{
            res.json({'err':0,'msg':'quiz added'});
        }
    })
},

//                                  Chapter 7 Starts

 

  addtop7:function(req,res){
    upload(req,res,(err)=>{
        if(err){}
        else{
            var topicname = req.body.topicname;
            var fname = req.file.filename;
            let ins = new chapter7({'topicname':topicname,'upload':fname});
            ins.save((err)=>{
                if(err){}
                else{
                    res.json({'err':0,'msg':'Topic Added'})
                }
            })
        }
    })
},

//                Fetch All Data Chapter7   
fetchAll7:function(req,res){
chapter7.find({},(err,data)=>{
        if(err){}
        else {
            res.json({'fetch':data});
        }
    })
},
//                Fetch Topic Chapter7
fetchTopic7:function(req,res){
   
    chapter7.aggregate([            
        {
            $lookup:{
                from:'question7',
                localField:'topicname',
                foreignField:'topicname',
                as:'values'
            }
        },
        {
            $unwind: '$values'
         },
         {
             $project:{
                 "topicname":1,
                 "upload":1,
                 "values.question":1,
                 "values.op1":1,
                 "values.op2":1,
                 "values.op3":1,
                 "values.op4":1,
                 "values.correctop":1,
             }
         }
    ],(err,data)=>{
        if(err){}
        else{
            res.json({'fetch':data});
            console.log(data)
        }
    })
   
},
//                        Add Quiz Chapter7
addquuiz7:function(req,res){
    var question = req.body.question;
    var op1=req.body.op1;
    var op2=req.body.op2;
    var op3=req.body.op3;
    var op4=req.body.op4;
    var correctop=req.body.correctop;
    var topicname = req.body.topicname;

    let ins = new ques7({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
    ins.save((err)=>{
        if (err) {}
        else{
            res.json({'err':0,'msg':'quiz added'});
        }
    })
},

//                                  Chapter 8 Starts



  addtop8:function(req,res){
    upload(req,res,(err)=>{
        if(err){}
        else{
            var topicname = req.body.topicname;
            var fname = req.file.filename;
            let ins = new chapter8({'topicname':topicname,'upload':fname});
            ins.save((err)=>{
                if(err){}
                else{
                    res.json({'err':0,'msg':'Topic Added'})
                }
            })
        }
    })
},

//                Fetch All Data Chapter8    
fetchAll8:function(req,res){
chapter8.find({},(err,data)=>{
        if(err){}
        else {
            res.json({'fetch':data});
        }
    })
},
//                Fetch Topic Chapter8
fetchTopic8:function(req,res){
   
    chapter8.aggregate([            
        {
            $lookup:{
                from:'question8',
                localField:'topicname',
                foreignField:'topicname',
                as:'values'
            }
        },
        {
            $unwind: '$values'
         },
         {
             $project:{
                 "topicname":1,
                 "upload":1,
                 "values.question":1,
                 "values.op1":1,
                 "values.op2":1,
                 "values.op3":1,
                 "values.op4":1,
                 "values.correctop":1,
             }
         }
    ],(err,data)=>{
        if(err){}
        else{
            res.json({'fetch':data});
            console.log(data)
        }
    })
   
},
//                        Add Quiz Chapter8
addquuiz8:function(req,res){
    var question = req.body.question;
    var op1=req.body.op1;
    var op2=req.body.op2;
    var op3=req.body.op3;
    var op4=req.body.op4;
    var correctop=req.body.correctop;
    var topicname = req.body.topicname;

    let ins = new ques8({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
    ins.save((err)=>{
        if (err) {}
        else{
            res.json({'err':0,'msg':'quiz added'});
        }
    })
},

//                                         Chapter 9 Starts

 

  addtop9:function(req,res){
    upload(req,res,(err)=>{
        if(err){}
        else{
            var topicname = req.body.topicname;
            var fname = req.file.filename;
            let ins = new chapter9({'topicname':topicname,'upload':fname});
            ins.save((err)=>{
                if(err){}
                else{
                    res.json({'err':0,'msg':'Topic Added'})
                }
            })
        }
    })
},

//                Fetch All Data Chapter9    
fetchAll9:function(req,res){
chapter9.find({},(err,data)=>{
        if(err){}
        else {
            res.json({'fetch':data});
        }
    })
},
//                Fetch Topic Chapter9
fetchTopic9:function(req,res){
   
    chapter9.aggregate([            
        {
            $lookup:{
                from:'question9',
                localField:'topicname',
                foreignField:'topicname',
                as:'values'
            }
        },
        {
            $unwind: '$values'
         },
         {
             $project:{
                 "topicname":1,
                 "upload":1,
                 "values.question":1,
                 "values.op1":1,
                 "values.op2":1,
                 "values.op3":1,
                 "values.op4":1,
                 "values.correctop":1,
             }
         }
    ],(err,data)=>{
        if(err){}
        else{
            res.json({'fetch':data});
            console.log(data)
        }
    })
   
},
//                        Add Quiz Chapter9
addquuiz9:function(req,res){
    var question = req.body.question;
    var op1=req.body.op1;
    var op2=req.body.op2;
    var op3=req.body.op3;
    var op4=req.body.op4;
    var correctop=req.body.correctop;
    var topicname = req.body.topicname;

    let ins = new ques9({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
    ins.save((err)=>{
        if (err) {}
        else{
            res.json({'err':0,'msg':'quiz added'});
        }
    })
},


//                              Chapter 10 Starts

 

  addtop10:function(req,res){
    upload(req,res,(err)=>{
        if(err){}
        else{
            var topicname = req.body.topicname;
            var fname = req.file.filename;
            let ins = new chapter10({'topicname':topicname,'upload':fname});
            ins.save((err)=>{
                if(err){}
                else{
                    res.json({'err':0,'msg':'Topic Added'})
                }
            })
        }
    })
},

//                Fetch All Data Chapter10    
fetchAll10:function(req,res){
chapter10.find({},(err,data)=>{
        if(err){}
        else {
            res.json({'fetch':data});
        }
    })
},
//                Fetch Topic Chapter10
fetchTopic10:function(req,res){
   
    chapter10.aggregate([            
        {
            $lookup:{
                from:'question10',
                localField:'topicname',
                foreignField:'topicname',
                as:'values'
            }
        },
        {
            $unwind: '$values'
         },
         {
             $project:{
                 "topicname":1,
                 "upload":1,
                 "values.question":1,
                 "values.op1":1,
                 "values.op2":1,
                 "values.op3":1,
                 "values.op4":1,
                 "values.correctop":1,
             }
         }
    ],(err,data)=>{
        if(err){}
        else{
            res.json({'fetch':data});
            console.log(data)
        }
    })
   
},
//                        Add Quiz Chapter10
addquuiz10:function(req,res){
    var question = req.body.question;
    var op1=req.body.op1;
    var op2=req.body.op2;
    var op3=req.body.op3;
    var op4=req.body.op4;
    var correctop=req.body.correctop;
    var topicname = req.body.topicname;

    let ins = new ques10({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
    ins.save((err)=>{
        if (err) {}
        else{
            res.json({'err':0,'msg':'quiz added'});
        }
    })
},

 
//                              Chapter 11 Starts

 

  addtop11:function(req,res){
    upload(req,res,(err)=>{
        if(err){}
        else{
            var topicname = req.body.topicname;
            var fname = req.file.filename;
            let ins = new chapter11({'topicname':topicname,'upload':fname});
            ins.save((err)=>{
                if(err){}
                else{
                    res.json({'err':0,'msg':'Topic Added'})
                }
            })
        }
    })
},

//                Fetch All Data Chapter11    
fetchAll11:function(req,res){
chapter11.find({},(err,data)=>{
        if(err){}
        else {
            res.json({'fetch':data});
        }
    })
},
//                Fetch Topic Chapter11
fetchTopic11:function(req,res){
   
    chapter11.aggregate([            
        {
            $lookup:{
                from:'question11',
                localField:'topicname',
                foreignField:'topicname',
                as:'values'
            }
        },
        {
            $unwind: '$values'
         },
         {
             $project:{
                 "topicname":1,
                 "upload":1,
                 "values.question":1,
                 "values.op1":1,
                 "values.op2":1,
                 "values.op3":1,
                 "values.op4":1,
                 "values.correctop":1,
             }
         }
    ],(err,data)=>{
        if(err){}
        else{
            res.json({'fetch':data});
            console.log(data)
        }
    })
   
},
//                        Add Quiz Chapter11
addquuiz11:function(req,res){
    var question = req.body.question;
    var op1=req.body.op1;
    var op2=req.body.op2;
    var op3=req.body.op3;
    var op4=req.body.op4;
    var correctop=req.body.correctop;
    var topicname = req.body.topicname;

    let ins = new ques11({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
    ins.save((err)=>{
        if (err) {}
        else{
            res.json({'err':0,'msg':'quiz added'});
        }
    })
},


//                                      Chapter 12 Starts



  addtop12:function(req,res){
    upload(req,res,(err)=>{
        if(err){}
        else{
            var topicname = req.body.topicname;
            var fname = req.file.filename;
            let ins = new chapter12({'topicname':topicname,'upload':fname});
            ins.save((err)=>{
                if(err){}
                else{
                    res.json({'err':0,'msg':'Topic Added'})
                }
            })
        }
    })
},

//                Fetch All Data Chapter12    
fetchAll12:function(req,res){
chapter12.find({},(err,data)=>{
        if(err){}
        else {
            res.json({'fetch':data});
        }
    })
},
//                Fetch Topic Chapter12
fetchTopic12:function(req,res){
   
    chapter12.aggregate([            
        {
            $lookup:{
                from:'question12',
                localField:'topicname',
                foreignField:'topicname',
                as:'values'
            }
        },
        {
            $unwind: '$values'
         },
         {
             $project:{
                 "topicname":1,
                 "upload":1,
                 "values.question":1,
                 "values.op1":1,
                 "values.op2":1,
                 "values.op3":1,
                 "values.op4":1,
                 "values.correctop":1,
             }
         }
    ],(err,data)=>{
        if(err){}
        else{
            res.json({'fetch':data});
            console.log(data)
        }
    })
   
},
//                        Add Quiz Chapter12
addquuiz12:function(req,res){
    var question = req.body.question;
    var op1=req.body.op1;
    var op2=req.body.op2;
    var op3=req.body.op3;
    var op4=req.body.op4;
    var correctop=req.body.correctop;
    var topicname = req.body.topicname;

    let ins = new ques12({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
    ins.save((err)=>{
        if (err) {}
        else{
            res.json({'err':0,'msg':'quiz added'});
        }
    })
},

}