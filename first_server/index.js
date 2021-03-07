const http = require('http');

const hostName = 'localhost';
const port = 3000;

const server  = http.createServer((req, res) => {
    
    res.end('Welcome to Node!');
});

server.listen(port, hostName, () => {
    console.log(`Server is running at ${hostName}:${port}`);
});