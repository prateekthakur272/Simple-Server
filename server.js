const { createServer } = require("http")
const fs = require('fs');

const homePage = fs.readFileSync('./index.html','utf-8');

const server = createServer((req, res) => {

    const url = req.url;
    if (url === '/') {
        res.writeHead(200, 'Done', { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    } else if (url === '/about') {
        res.writeHead(200, 'Done', { 'content-type': 'text/html' })
        res.write('<h1>About</h1>')
        res.end()
    }else{
        res.writeHead(404, 'Not Found', { 'content-type': 'text/html' })
        res.write('<h1>Not Exist</h1>')
        res.end()
    }

});

server.on('request', () => {
    console.log('Server responded');
})

server.listen(3000, () => {
    console.log('https://localhost:3000');
});