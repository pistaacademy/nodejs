const http = require('http');



const server = http.createServer((req, res)=>{
    console.log('server run...')
})

server.listen(3000);