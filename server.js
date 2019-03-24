let express = require('express');
let cors = require('cors');
let bodyparser = require('body-parser');
var cron = require('node-cron');
let path = require('path');
let http = require('http');
let app = express();
app.use(express.static(__dirname+'/dist/frontend'));
app.get('*',(req,res)=>{ return res.sendFile(path.join(__dirname,'/dist/frontend/index.html'))});
const server=http.createServer(app);
app.use('/myimages',express.static('backend/attach'));
app.use(cors());
app.use(bodyparser.json());

cron.schedule('31 15 * * *', () => { 

    var conn =require('./backend/controllers/controller');
    conn.fetchTeacher();


console.log('running a task every two minutes') 
});
//                          Find Pass
app.post('/findpass',(req,res)=>{
    var conn = require('./backend/controllers/controller');
    conn.findp(req,res);
})


//                                 Change password
app.post('/chgpass',(req,res)=>{
    var conn =require('./backend/controllers/controller');
    conn.chgp(req,res);
})

//                              Forget Password
app.post('/forget',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.forgetpass(req,res)
})




//                              Admin Login
app.post('/admlog',(req,res)=>{
    var conn = require('./backend/controllers/controller');
    conn.adminLog(req,res);
});


//                              Teacher Login

app.post('/techlog',(req,res)=>{
    var conn = require('./backend/controllers/controller');
    conn.TechLog(req,res);
});

app.post('/chpsel',(req,res)=>{
    var conn = require('./backend/controllers/controller');
    conn.selchp(req,res);
})

app.post('/addtopic',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addtop(req,res);
})

app.get('/fetchtopic',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchTopic(req,res);
})


app.get('/fetchAll',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchAll(req,res);
})

app.post('/addteacher',(req,res)=>{
    var conn = require('./backend/controllers/controller');
    conn.addteacher(req,res);
})

app.post('/addquiz',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addquuiz(req,res);
})

//                              Chapter  2 Starts

app.post('/addtopic2',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addtop2(req,res);
})

app.get('/fetchtopic2',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchTopic2(req,res);
})


app.get('/fetchAll2',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchAll2(req,res);
})


app.post('/addquiz2',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addquuiz2(req,res);
})

//                      Chapter 3 Starts

app.post('/addtopic3',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addtop3(req,res);
})

app.get('/fetchtopic3',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchTopic3(req,res);
})


app.get('/fetchAll3',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchAll3(req,res);
})


app.post('/addquiz3',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addquuiz3(req,res);
})

//                                   Chapter 4 Starts

app.post('/addtopic4',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addtop4(req,res);
})

app.get('/fetchtopic4',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchTopic4(req,res);
})


app.get('/fetchAll4',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchAll4(req,res);
})


app.post('/addquiz4',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addquuiz4(req,res);
})

//                               Chapter 5 Starts

app.post('/addtopic5',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addtop5(req,res);
})

app.get('/fetchtopic5',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchTopic5(req,res);
})


app.get('/fetchAll5',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchAll5(req,res);
})


app.post('/addquiz5',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addquuiz5(req,res);
})


//                              Chapter 6 Starts

app.post('/addtopic6',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addtop6(req,res);
})

app.get('/fetchtopic6',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchTopic6(req,res);
})


app.get('/fetchAll6',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchAll6(req,res);
})


app.post('/addquiz6',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addquuiz6(req,res);
})

//                                  Chapter 7 Starts

app.post('/addtopic7',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addtop7(req,res);
})

app.get('/fetchtopic7',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchTopic7(req,res);
})


app.get('/fetchAll7',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchAll7(req,res);
})


app.post('/addquiz7',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addquuiz7(req,res);
})


//                                 Chapter  8 Starts

app.post('/addtopic8',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addtop8(req,res);
})

app.get('/fetchtopic8',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchTopic8(req,res);
})


app.get('/fetchAll8',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchAll8(req,res);
})


app.post('/addquiz8',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addquuiz8(req,res);
})

//                                  Chapter 9 Starts

app.post('/addtopic9',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addtop9(req,res);
})

app.get('/fetchtopic9',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchTopic9(req,res);
})


app.get('/fetchAll9',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchAll9(req,res);
})


app.post('/addquiz9',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addquuiz9(req,res);
})

//                          Chapter 10 Starts

app.post('/addtopic10',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addtop10(req,res);
})

app.get('/fetchtopic10',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchTopic10(req,res);
})


app.get('/fetchAll10',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchAll10(req,res);
})


app.post('/addquiz10',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addquuiz10(req,res);
})

//                              Chapter  11  Starts

app.post('/addtopic11',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addtop11(req,res);
})

app.get('/fetchtopic11',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchTopic11(req,res);
})


app.get('/fetchAll11',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchAll11(req,res);
})


app.post('/addquiz11',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addquuiz11(req,res);
})

//                          Chapter 12 Starts

app.post('/addtopic12',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addtop12(req,res);
})

app.get('/fetchtopic12',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchTopic12(req,res);
})


app.get('/fetchAll12',(req,res)=>{
    var conn=require('./backend/controllers/controller');
    conn.fetchAll12(req,res);
})


app.post('/addquiz12',(req,res)=>{
    var conn= require('./backend/controllers/controller');
    conn.addquuiz12(req,res);
})


server.listen(process.env.PORT||1245,()=>{
    console.log("Running at localhost 1245")
})
