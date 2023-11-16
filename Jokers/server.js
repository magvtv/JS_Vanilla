const http = require('http');
const server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/plain',
	}).end('Spark of inspiration, Flames of habits');
});

const PORT = 3000;
const IP = '127.0.0.1';

server.listen(PORT, IP, () => {
	console.log(`Server running at https://${IP}:${PORT}/`);
});
