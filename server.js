const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello from response\n')
        res.write('Hello from response another line')
        res.end()
    }else if(req.url === '/about'){
        res.write('Hello from about page')
        res.end()
    }else{
        res.write('404 not found')
        res.end()
    }
});

server.listen(3000)
console.log('Listening to port 3000');