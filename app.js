const http = require('http');



const server = http.createServer((req, res)=>{
    console.log(req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello to Pista Academy Node Server</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);