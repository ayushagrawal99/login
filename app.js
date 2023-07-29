const express = require('express');
const app = express();
const {port} = require('./config/config');

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use('/',require('./routes/index.js'));

// unknown route error.
app.use(function (req, res, next) {
    var err = new Error('Route Not Found');
    err.status = 404;
    next(err);
});

// Error Handling
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({message: 'something went wrong'});
});

// Server 
app.listen(port, function(err){
    if(err){
        console.log("error in express setup",err);
        return;
    }
    console.log(`Express run fine at port : ${port}`);
})