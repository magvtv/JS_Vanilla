const http = require('http');
const server = http.createServer((req, res) => {
	console.log(req.method, req.url);

	if (req.url === '/Artist') {
		res.writeHead(200, {
			'Content-Type': 'text/plain',
		}).end('Soul: \nShort phrasing about the soul of an artist');
	} else if (req.url === '/Entrepreneur') {
		res.writeHead(200, {
			'Content-Type': 'text/plain',
		}).end('Mind: \nShort phrasing about the mind of an entrepreneur');
	} else if (req.url === '/Athlete') {
		res.writeHead(200, {
			'Content-Type': 'text/plain',
		}).end('Body: \nShort phrasing about the body of an athlete');
	} else {
		res.writeHead(404, {
			'Content-Type': 'text/plain',
		}).end('Error \nEmbrassing as it is, I cannot get back');
	}
	// res.writeHead(200, {
	// 	'Content-Type': 'text/plain',
	// }).end('Spark of inspiration, Flames of habits');
});

const PORT = 7777;
const link = `https://localhost:${PORT}`;

server.listen(PORT, () => {
	console.log(`Server running at ${link}`);
});
