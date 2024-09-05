// testing the end points of some movie quotes api

const url = 'https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?actor=Al%20Pacino';
const options = {
	method: 'GET',
	headers: {
		Authorization: 'Token token=yd8WzkWNEEzGtqMSgiZBrwtt',
		'X-RapidAPI-Key': '16806452c5mshfb321706c9a62fbp118a73jsn7602a14f4b61',
		'X-RapidAPI-Host': 'juanroldan1989-moviequotes-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}