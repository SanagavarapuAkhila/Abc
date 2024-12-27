import http from 'node:http';
hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
res.statuscode= 200;
res.setHeader("Content-Type", "text/plain")
res.end("helloworld!");

});
server.listen(port, hostname, () => {
    console.log('server running at https://${hostname} on port ${port}');
});

