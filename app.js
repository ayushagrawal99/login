const express = require('express');
const app = express();
const {port} = require('./config/config');

app.use('/',require('./routes/login'));
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Server 
app.listen(port, function(err){
    if(err){
        console.log("error in express setup",err);
        return;
    }
    console.log(`Express run fine at port : ${port}`);
})