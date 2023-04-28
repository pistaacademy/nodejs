const http = require('http');
const fs  = require('fs');


const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Message Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        // Blocking and Non-Blocking Code
        // writeFile vs writeFileSync
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            let message = parsedBody.split('=')[1];
            message = message.replaceAll("+", " ");
            fs.writeFile('message.txt', message, err => {
                console.log('level-4');
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            console.log('level-1')
        });
        console.log('level-2');
    }
    console.log('level-3');
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello to Pista Academy Node Server</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);