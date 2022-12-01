const fs = require('fs')
const http = require('http')

const ourReadStream = fs.createReadStream(`${__dirname}/lorem.txt`)

ourReadStream.on('data', (chunk) => {
    // console.log(chunk.toString())
})



const server = http.createServer((req, res) => {
    if(req.url === '/'){
        const form = fs.readFileSync('./form.html')
        res.write(form)
        res.end()
    }else if(req.url === '/process'  && req.method === 'POST'){
        var body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            console.log('Stream Finished');
            let parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
        })
        res.end()
    }else{
        res.write('404 not found')
        res.end()
    }
});

server.listen(3000)

console.log('shihab')