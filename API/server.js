const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./db');
memberRoute = require('./routes/memberroute');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useUnifiedTopology:true,useNewUrlParser:true}).then(
    ()=>{console.log('Dattabase is connected')},
    err =>{console.log('cannot connenct to the database'+err)}
);

const bodyparser = require("body-parser");
const cors = require('cors');


const app = express();
app.use(bodyparser.json());
app.use(cors());
app.use('/members', memberRoute);
let port = process.env.port|4000
const server = app.listen(port,function(){
    console.log('Listining on port'+port);
})
