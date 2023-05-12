const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('I am inside first middleware!');
    next();
})

app.use((req, res, next)=>{
    console.log('I am inside second middleware!');
    res.send('<h1>Hello from Pista Academy Express Course!</h1>');
})


const server = http.createServer(app);

server.listen(3000);