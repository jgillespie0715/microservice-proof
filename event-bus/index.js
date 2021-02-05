const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
	const event = req.body;

	try {
		axios.post('http://localhost:4000/events', event);
	} catch (error) {
		console.log('posts endpoint', error);
	}
	try {
		axios.post('http://localhost:4001/events', event);
	} catch (error) {
		console.log('comments endpoint', error);
	}

	// axios.post('http://localhost:4002/events', event);

	res.send({ status: 'OK' });
});

app.listen(4005, () => {
	console.log('Listening on 4005');
});