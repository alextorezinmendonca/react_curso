const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect("mongodb://goweek:goweek123@ds255253.mlab.com:55253/goweek-mendonca", 
    {
        useNewUrlParser: true
    }
);

/*app.get('/', (req, res) => {
   return res.send('Hello World');  
});*/

app.use((req,res,next)=>{
    req.io = io;

    return next();
})

app.use(cors());
app.use(express.json());
app.use(require('./route'));

server.listen(3000,()=>{
    console.log("Banana Server started on port 3000");
});


