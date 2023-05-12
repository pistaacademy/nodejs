const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));


app.use('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></input></form>');
});

app.use('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next)=>{
    res.send('<h1>Hello from Pista Academy Express Course!</h1>');
});


app.listen(3000);