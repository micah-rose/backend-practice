const http = require('http');

const hostName = 'localhost';
const port = 3000;

const server  = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/translations') {
        const translations = {1: 'one', 2: 'two', 3: 'three'}
        res.end('translations');
    }
    res.end('Welcome to Node!');
});

server.listen(port, hostName, () => {
    console.log(`Server is running at ${hostName}:${port}`);
});